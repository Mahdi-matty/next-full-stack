'use client'
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"
import Image from "next/image";
import { useSession } from "next-auth/react"
export default function ProductPage() {
    const { data: session, status } = useSession()
    const isLoading = status === "loading";
    if (isLoading) {
        return <div>Loading...</div>;
    }
    const userId = session?.user?.id
    const pathName = usePathname();
    const productId = pathName.split("/")[2];
    console.log(productId)
    const [product, setProduct] = useState('')
    const [reviews, setReviews] = useState([])
    const [reviewComment, setReviewComment] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            if (res.ok) {
                const data = await res.json();
                setProduct(data);
            } else {
                throw new Error("Failed to fetch product data");
            }
        }
        if (productId) {
            fetchData()
        }
    }, [productId]);
    useEffect(() => {
        const renderReview = async () => {
            try {
                const res = await fetch(`api/products/${productId}/reviews`)
                if (res.ok) {
                    const data = await res.json();
                    setReviews(data);
                }
            } catch (error) {
                console.log(error)
            }
        }
        if (productId) {
            renderReview()
        }
    }, [productId]);

    const handleAddReview = async (event) => {
        event.preventDefault();
        if(session?.user){
            const reviewData = {
            productId: productId,
            userId: userId,
            comment: reviewComment

        }
        try {
            const res = await fetch('api/review/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reviewData)
            })
            if (res.ok) {
                console.log('review added successfully')
            }

        } catch (error) {
            console.log(error)
        }
        }
        
    }


    return (
        <>
            {product&& (
                <div key={product.id}>
                    <Image src={product.image}/>
                    <h1>{product.title}</h1>
                    <p>{product.content}</p>
                    <p>{product.price}</p>
                    <form onSubmit={handleAddReview}>
                                    <input
                                        type='text'
                                        value={reviewComment}
                                        placeholder='add a review'
                                        onChange={e => setReviewComment(e.target.value)} />
                                    <input
                                        type='submit' />
                                </form>
                    {reviews&& (
                        reviews.map((review)=>(
                            <div key={review.id}>{review.message}</div>
                        ))
                    )}
                </div>
            )}

        </>
    )

}