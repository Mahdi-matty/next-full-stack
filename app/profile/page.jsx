'use client'
import useSWR from 'swr'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from 'next/image'
import Card from '@components/Card'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function MyProfile() {
    const router = useRouter()
    const { data: session, status } = useSession()
    const isLoading = status === "loading";
    const [products, setProducts] = useState([])
    const [showCardDev, setShowCardDev] = useState(false)
    const [reviewComment, setReviewComment] = useState('')
    const [showProfileDev, setShowProfileDev] = useState(true)
    const [reviews, setReviews] = useState([])
    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log(session)
    const userId = session?.user?.id
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetcher('api/products')
                setProducts(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        if (!isLoading) {
            fetchData();
        }
    }, [isLoading])
    const availableProducts = products.filter(product => product.status === 'available');
    const handleAddItem = async (e, product) => {
        const orderData = {
            userId: userId,
            productId: product.id
        }
        e.preventDefault();
        try {
            const response = await fetch('api/order/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            })
            if (response.ok) {
                console.log('item added successfully')
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleCardShow = () => {
        setShowCardDev(!showCardDev)
        setShowProfileDev(!showProfileDev)
    }
    const handleAddReview = async(product)=>{
        const reviewData = {
            productId: product.id,
            userId: userId,
            comment: reviewComment

        }
        try{
            const res = await fetch('api/review/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reviewData)
            })
            if(res.ok){
                console.log('review added successfully')
            }

        }catch(error){
            console.log(error)
        }
    }
    const renderReviewFunc = async(product)=>{
        try {
            const res = await fetch(`api/products/${product.id}/reviews`)
            if(res.ok){
                setReviews(res.data)
            }
        } catch(error){
            console.log(error)
        }
    }


    return (
        <>
            {showProfileDev && (
                <div>
                    <h3>salam</h3>
                    {availableProducts && (
                        availableProducts.map((product) => (
                            <div key={product.id}>
                                <h3>{product.title}</h3>
                                <p>{product.content}</p>
                                <p>{product.price}</p>
                                {reviews && (
                                    reviews.map((review)=>(
                                        <div key={review.id}>
                                            <p>{review.comment}</p>
                                        </div>
                                    ))
                                )}
                                <Image src={product.image} />
                                <button onClick={() => handleAddItem(product)}>Add item</button>
                                <form onSubmit={handleAddReview}>
                                    <input 
                                    type='text'
                                    value={reviewComment}
                                    placeholder='add a review'
                                    onChange={e=>setReviewComment(e.target.value)}/>
                                    <input 
                                    type='submit'/>
                                </form>
                                {renderReviewFunc(product)}
                            </div>
                        ))
                    )}
                    <button onClick={() => handleCardShow}>Card</button>
                </div>
            )}

            {showCardDev && (
                <div>
                    <Card />
                </div>
            )

            }

        </>
    )
}