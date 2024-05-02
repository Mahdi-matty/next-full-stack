'use client'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function Card() {
    const [orders, setOrders] = useState([])
    const [totalPrice, setTotalPrice] = useState('')
    const { data: session, status } = useSession()
    const isLoading = status === "loading";
    const router = useRouter()
    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log(session)
    const userId = session?.user?.id
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`api/users/${userId}/orders`)
                console.log(res)
                setOrders(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        if (!isLoading) {
            fetchData();
        }
    }, [isLoading])
    const handleRemoveItem = async (order) => {
        try {
            const res = await fetch(`api/order/${order.id}`, {
                method: 'DELETE',
            })
            if (res.ok) {
                console.log("Order deleted successfully");
            } else {
                const data = await res.json();
                console.log("Error:", data.msg);
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleCheckOut = async () => {
        const findPrice = async ()=>{
             try {
            const itemPricePromises = orders.map(async (order) => {
                try {
                    const response = await fetch(`api/products/${order.productId}`, {
                        method: "GET"
                    })
                    if (response.ok) {
                        const item = await response.json();
                        const itemPrice = item.price;
                    } else {
                        console.log('no such a item')
                    }
                } catch (error) {
                    console.log(error)
                }

            })
            const itemPrices = await Promise.all(itemPricePromises);
            const totaletPrice = itemPrices.reduce((total, price) => total + price, 0);
            setTotalPrice(totaletPrice)
            router.push({
                pathname: '/checkout',
                query: { total: totalPrice }
            });
        } catch (error) {
                console.log(error)
            }
        }
        findPrice();

        }
retrun(
            <>
                <div>
                    {orders && (
                        orders.map((order) => {
                            <div key={order.id}>
                                <p>{order.productId}</p>
                                <button onClick={() => handleRemoveItem(order)}>Remove</button>
                            </div>
                        })
                    )}
                    <button onClick={() => handleCheckOut()}>checkout</button>
                </div>
            </>
        )
    }