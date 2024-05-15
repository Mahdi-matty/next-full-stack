'use client'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons';

const Canada = (props) => {
    const [province, setprovince] = useState('')
    const handleCanadaChange = () => {
        setprovince(e.target.value)
    }
    const renderCanadaChange = async (e) => {
        e.preventDefault()
        props.handleCanada({ province: province })
    }
    return (
        <>
            <select className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleCanadaChange}>
                <option>Select Province</option>
                <option className="text-gray-900" value="ontario">Ontario</option>
                <option className="text-gray-900" value="quebec">Quebec</option>
                <option className="text-gray-900" value="britishColumbia">BC</option>
                <option className="text-gray-900" value="alberta">Alberta</option>
                <option className="text-gray-900" value="manitoba">Manitoba</option>
                <option className="text-gray-900" value="saskatchewan">Saskatchewan</option>
                <option className="text-gray-900" value="novaScotia">Nova Scotia</option>
                <option className="text-gray-900" value="newBrunswick">New Brunswick</option>
                <option className="text-gray-900" value="newfoundlandLabrador">Newfoundland and Labrador</option>
                <option className="text-gray-900" value="princeEdwardIsland">Prince Edward Island</option>
                <option className="text-gray-900" value="northwestTerritories">Northwest Territories</option>
                <option className="text-gray-900" value="nunavut">Nunavut</option>
                <option className="text-gray-900" value="yukon">Yukon</option>
            </select>
            {renderCanadaChange}
        </>

    )

};
const Us = (props) => {
    const [state, setState] = useState('')
    const handleUsChange = () => {
        setState(e.target.value)
    }
    const renderUsChange = async (e) => {
        e.preventDefault()
        props.handleUs({
            state: state
        })
    }
    return (
        <>
            <select className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleUsChange}>
                <option >Select State</option>
                <option className="text-gray-900" value="alabama">Alabama</option>
                <option className="text-gray-900" value="alaska">Alaska</option>
                <option className="text-gray-900" value="arizona">Arizona</option>
                <option className="text-gray-900" value="arkansas">Arkansas</option>
                <option className="text-gray-900" value="california">California</option>
                <option className="text-gray-900" value="colorado">Colorado</option>
                <option className="text-gray-900" value="connecticut">Connecticut</option>
                <option className="text-gray-900" value="delaware">Delaware</option>
                <option className="text-gray-900" value="florida">Florida</option>
                <option className="text-gray-900" value="georgia">Georgia</option>
                <option className="text-gray-900" value="hawaii">Hawaii</option>
                <option className="text-gray-900" value="idaho">Idaho</option>
                <option className="text-gray-900" value="illinois">Illinois</option>
                <option className="text-gray-900" value="indiana">Indiana</option>
                <option className="text-gray-900" value="iowa">Iowa</option>
                <option className="text-gray-900" value="kansas">Kansas</option>
                <option className="text-gray-900" value="kentucky">Kentucky</option>
                <option className="text-gray-900" value="louisiana">Louisiana</option>
                <option className="text-gray-900" value="maine">Maine</option>
                <option className="text-gray-900" value="maryland">Maryland</option>
                <option className="text-gray-900" value="massachusetts">Massachusetts</option>
                <option className="text-gray-900" value="michigan">Michigan</option>
                <option className="text-gray-900" value="minnesota">Minnesota</option>
                <option className="text-gray-900" value="mississippi">Mississippi</option>
                <option className="text-gray-900" value="missouri">Missouri</option>
                <option className="text-gray-900" value="montana">Montana</option>
                <option className="text-gray-900" value="nebraska">Nebraska</option>
                <option className="text-gray-900" value="nevada">Nevada</option>
                <option className="text-gray-900" value="newHampshire">New Hampshire</option>
                <option className="text-gray-900" value="newJersey">New Jersey</option>
                <option className="text-gray-900" value="newMexico">New Mexico</option>
                <option className="text-gray-900" value="newYork">New York</option>
                <option className="text-gray-900" value="northCarolina">North Carolina</option>
                <option className="text-gray-900" value="northDakota">North Dakota</option>
                <option className="text-gray-900" value="ohio">Ohio</option>
                <option className="text-gray-900" value="oklahoma">Oklahoma</option>
                <option className="text-gray-900" value="oregon">Oregon</option>
                <option className="text-gray-900" value="pennsylvania">Pennsylvania</option>
                <option className="text-gray-900" value="rhodeIsland">Rhode Island</option>
                <option className="text-gray-900" value="southCarolina">South Carolina</option>
                <option className="text-gray-900" value="southDakota">South Dakota</option>
                <option className="text-gray-900" value="tennessee">Tennessee</option>
                <option className="text-gray-900" value="texas">Texas</option>
                <option className="text-gray-900" value="utah">Utah</option>
                <option className="text-gray-900" value="vermont">Vermont</option>
                <option className="text-gray-900" value="virginia">Virginia</option>
                <option className="text-gray-900" value="washington">Washington</option>
                <option className="text-gray-900" value="westVirginia">West Virginia</option>
                <option className="text-gray-900" value="wisconsin">Wisconsin</option>
                <option className="text-gray-900" value="wyoming">Wyoming</option>
            </select>
            {renderUsChange}
        </>

    )
}

export default function Checkout() {
    const { data: session, status } = useSession()
    const isLoading = status === "loading";
    const router = useRouter();
    const [totalPay, setTotalPay] = useState('')
    const [country, setCountry] = useState('')
    const [usState, setUsState] = useState('')
    const [canprov, setCanProv] = useState('')
    const [delivery, setDelivery] = useState({
        free: false,
        express: false
    })
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
    const handleDeliveryChange = (event) => {
        const { name, checked } = event.target;
        setDelivery(prevState => ({
            ...prevState,
            [name]: checked
        }));
    }

    const handleCountryChange = (event) => {
        setCountry(event.target.value)
    }
    const handleSelCanada = (canObj) => {
        setCanProv(canObj.province)
    }
    const handleSelUs = (usObj) => {
        setUsState(usObj.state)
    }
    const renderCountrySelect = () => {
        switch (country) {
            case "Canada":
                return <Canada handleCanada={handleSelCanada} />
            case "us":
                return <Us handleUs={handleSelUs} />
            default:
                return null;
        }
    }
    const handleCreditSubmit = ()=>{
        console.log("transaction successfull!!")
    }

    return (
        <>
            <div>
                <p>{totalPay}$</p>
                <div>
                    <p>Shiping Address</p>
                    <form className="text-gray-400 focus-within:text-green-600 focus-within:underline">
                        <input
                            type="text"
                            className="ml-2 px-4 py-2 border rounded"
                            value={firstName}
                            onChange={setFirstName}
                            placeholder="fist name" />
                        <input
                            type="text"
                            className="ml-2 px-4 py-2 border rounded"
                            value={lastName}
                            onChange={setlastName}
                            placeholder="last name" />
                        <input
                            type="text"
                            className="ml-2 px-4 py-2 border rounded"
                            value={addressLineOne}
                            onChange={setlineOne}
                            placeholder="address line 1" />
                        <input
                            type="text"
                            className="ml-2 px-4 py-2 border rounded"
                            value={addressLineTwo}
                            onChange={setlineTwo}
                            placeholder="address line 2" />
                        <input
                            type="text"
                            className="ml-2 px-4 py-2 border rounded"
                            value={postalCode}
                            onChange={setPostalCode}
                            placeholder="postal code" />
                        <select className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleCountryChange} name="country" id="country">
                            <option>Select a country</option>
                            <option value='us'>US</option>
                            <option value='canada'>Canada</option>
                        </select>
                        {renderCountrySelect()}
                    </form>
                </div>
                <div>
                    <form >
                        <h3>Shipping method</h3>
                        <input
                            id="optionOne"
                            name="optionOne"
                            onChange={handleDeliveryChange}
                            checked={delivery.free}
                            type="checkbox" />
                        <label>Free(expected 3 to 5 days)</label><br />
                        <input
                            id="optionTwo"
                            name="optionTwo"
                            onChange={handleDeliveryChange}
                            type="checkbox"
                            checked={delivery.free} />
                        <label>Express-next day</label><br />
                    </form>
                </div>
                <div>
                    <p>Payment Method</p>
                    <FontAwesomeIcon icon={faCcVisa} size="3x" />
                    <FontAwesomeIcon icon={faCcMastercard} size="3x" />
                    <form onSubmit={handleCreditSubmit}>
                        <input 
                        value={cardNumber}
                        placeholder="xxzz xxyy zzyy xxzz"
                        onChange={e=>setCardNumber(e.target.value)}/>
                        <input 
                        value={expireDate}
                        onChange={e=>setExpireDate(e.target.value)}
                        placeholder="mm/yy"/>
                        <input 
                        value={cvc}
                        placeholder="cvc"
                        onChange={e=>setCvc(e.target.value)}/>
                        <input 
                        type="submit"/>
                    </form>

                </div>
            </div>
        </>
    )

}