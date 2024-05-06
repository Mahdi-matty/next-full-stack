'use client'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from 'next/link';
const Home = () => {
    const { data: session, status } = useSession()
    const userId = session?.user?.id
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetcher('api/products')
                setProducts(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();

    }, [])
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
    return (
        <>
            {availableProducts && (
                availableProducts.map((product) => (
                    <div key={product.id}>
                        <Link href={`/products/${product.id}`}>
                            <a>
                                <h3>{product.title}</h3>
                            </a>
                        </Link>
                        <p>{product.content}</p>
                        <p>{product.price}</p>
                        <Image src={product.image} />
                        {session ?.user && (
                            <div>
                                <button onClick={() => handleAddItem(product)}>Add item</button>
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