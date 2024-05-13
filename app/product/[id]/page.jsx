'use client'
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"
import Image from "next/image";
import { useSession } from "next-auth/react"
export default function ProductPage() {
    const { data: session, status } = useSession();
    const isLoading = status === "loading";
    const pathName = usePathname();
    const productId = pathName.split("/")[2];
    const [rating, setRating] = useState(0);
    const [product, setProduct] = useState('');
    const [reviews, setReviews] = useState([]);
    const [reviewComment, setReviewComment] = useState('');

    useEffect(() => {
        if (productId) {
            const fetchData = async () => {
                try {
                    const res = await fetch(`/api/products/${productId}`, {
                        method: 'GET'
                    });
                    if (res.ok) {
                        const data = await res.json();
                        setProduct(data);
                    } else {
                        throw new Error("Failed to fetch product data");
                    }
                } catch (error) {
                    console.log(error);
                }
            };
            fetchData();
        }
    }, [productId]);

    useEffect(() => {
        if (productId) {
            const fetchReviews = async () => {
                try {
                    const res = await fetch(`/api/products/${productId}/reviews`);
                    if (res.ok) {
                        const data = await res.json();
                        setReviews(data);
                    }
                } catch (error) {
                    console.log(error);
                }
            };
            fetchReviews();
        }
    }, [productId]);
    const handleStar = (value) => {
        setRating(value)
    }

    const handleAddReview = async (event) => {
        event.preventDefault();
        if (session?.user) {
            const reviewData = {
                productId: productId,
                userId: session.user.id,
                comment: {
                    comment: reviewComment,
                    rate: rating
                },
            };
            try {
                const res = await fetch('api/review/new', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reviewData)
                });
                if (res.ok) {
                    console.log('review added successfully');
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    const renderStars = (rating) => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<span key={i}>&#9733;</span>);
            } else {
                stars.push(<span key={i}>&#9734;</span>);
            }
        }

        return stars;
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {product && (
                <div className="flex flex-wrap" key={product.id}>
                    <Image src={product.image} />
                    <h1 className="flex-1 bg-teal-100 border-solid m-5 p-5">{product.title}</h1>
                    <p className="flex-1 bg-teal-100 border-solid m-5 p-5">{product.content}</p>
                    <p className="flex-1 bg-teal-100 border-solid m-5 p-5">{product.price}</p>
                    <form onSubmit={handleAddReview}>
                        <input
                            type='text'
                            value={reviewComment}
                            className="border-blue-50 border-4 p-2 my-4 w-40"
                            placeholder='add a review'
                            onChange={e => setReviewComment(e.target.value)} />
                        <div>
                            {[1, 2, 3, 4, 5].map((value) => (
                                <span
                                    key={value}
                                    onClick={() => handleStar(value)}
                                    style={{ cursor: "pointer", color: value <= rating ? "gold" : "gray" }}
                                >
                                    &#9733;
                                </span>
                            ))}
                        </div>
                        <input type='submit' />
                    </form>
                    {reviews && (
                        reviews.map((review) => (
                            <div className="flex flex-wrap" key={review.id}>
                                <p>{review.message}</p>
                                <div>{renderStars(review.comment.rate)}</div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </>
    );
}
