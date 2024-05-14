'use client'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function Cart() {
    const [orders, setOrders] = useState([])
    const [totalPrice, setTotalPrice] = useState('')
    const { data: session, status } = useSession()
    const isLoading = status === "loading";
    const userId = session?.user?.id
    const router = useRouter()
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!isLoading && session?.user?.id) {
                    const res = await fetch(`api/users/${userId}/orders`)
                    const data = await res.json()
                    console.log(data)
                    setOrders(data)
                }

            } catch (error) {
                console.log(error)
            }
        }

        fetchData();

    }, [isLoading, session])
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
        const findPrice = async () => {
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

    };

    return (
        <>
            <div>
                {orders && (
                    orders.map((order) => (
                        <div className="flex flex-wrap bg-teal-100 border-solid m-5 p-5" key={order._id}>
                            <p>{order.productName}</p>
                            <p>{order.price}</p>
                            <button className="bg-red-300 w-20 h-10 rounded-3xl m-4" onClick={() => handleRemoveItem(order)}>Remove</button>
                        </div>
                    ))
                )}
                <button className="bg-yellow-300 w-40 h-10 rounded-3xl m-4" onClick={() => handleCheckOut()}>checkout</button>
            </div>
        </>
    )
}