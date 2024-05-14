'use client'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from 'next/link';
const Home = () => {
    const { data: session } = useSession()
    const userId = session?.user?.id
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/products')
                const data = await response.json()
                  setProducts(data)   
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])
    const handleAddItem = async (event, product) => {
        const orderData = {
            productId: product._id,
            productName: product.title,
            price: product.price
        }
        event.preventDefault();
        try {
            const response = await fetch(`/api/order/new/${userId}`, {
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
    return (
        <>
            {products && (
                products.map((product) => (
                    <div className="flex flex-wrap bg-teal-100 border-solid m-5 p-5" key={product._id}>
                        <Link href={`/product/${product._id}`}>
                                <h3 className="m-2 text-blue-600">{product.title}</h3>
                        </Link>
                        <p className="m-2" >{product.content}</p>
                        <p className="m-2" >{product.price}</p>
                        <Image src={product.image} alt="image"/>
                        {session ?.user && (
                            <div>
                                <button className="bg-yellow-300 w-40 h-10 rounded-3xl m-4" onClick={(event) => handleAddItem(event, product)}>Add item</button>
                            </div>
                        )}
                    </div>
                ))
            )
            }
        </>
    )

}

export default Home;