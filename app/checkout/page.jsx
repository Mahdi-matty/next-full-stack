'use client'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function Checkout() {
    const { data: session, status } = useSession()
    const isLoading = status === "loading";
    const router = useRouter();
    const [totalPay, setTotalPay] = useState('')
    const [country, setCountry] = useState('')
    useEffect(() => {
        if (!isLoading) {
            const totalFromQuery = router.query.totalPrice;
            if (totalFromQuery) {
                setTotalPay(totalFromQuery);
            }
        }
    }, [isLoading, router.query.totalPrice]);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log(session)
    const userId = session?.user?.id

    const handleCountryChange = (event)=>{
        setCountry(event.target.value)
      }

    return (
        <>
            <div>
                <p>{totalPay}$</p>
                <p>Shiping Address</p>
                <form>
                    <input 
                    type="text"
                    placeholder="address"/>
                    <input 
                    type="text"
                    placeholder="postal code"/>
                    <select onChange={handleCountryChange} name="country" id="country">
                        <option>Select a country</option>
                        <option value='us'>US</option>
                        <option value='canada'>Canada</option>
                    </select>
                </form>

            </div>
        </>
    )

}