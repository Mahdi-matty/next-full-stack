'use client'

import { useState, useEffect } from "react"
import { useAuthContext } from "@utils/AuthProvider"
import ProductForm from "@components/ProductForm"
export default function AdminPage() {
    const { isLoggedIn, token } = useAuthContext()
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [products, setProducts] = useState([])
    const [editProduct, setEditProduct] = useState(null)
    const [editId, setEditId] = useState(null)
    conts [showAddForm, setShowAddForm] = useState(false)

    const handleFormSubmit = async () => {
        const userObj = {
            username: username,
            password: password
        }
        try {
            const res = await fetch('/api/admin', {
                method: "POST",
                body: JSON.stringify(userObj),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (res.ok) {
                const data = await res.json()
            }


        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetcher('api/products')
                setProducts(response.data)
            } catch (error) {
                console.log(error)
            }

        }
        if (isLoggedIn) {
            fetchData()
        }
    }, [isLoggedIn])

    const handleEditProduct = (product) => {
        setEditId(product.id)
        setEditProduct(product)
    }
    const handleEditSubmit = (formData) => {
        const productObj={
            title: formData.title,
            content: formData.content,
            price: formData.price,
            stock: formData.stock,
            image: formData.imageAddress,
        }
        const editProd = async () => {
            try {
                const res = await fetch(`api/products/${editId}`, {
                    method: "PATCH",
                    body: JSON.stringify(productObj),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                if(res.ok){
                    const data = await res.json()
                    console.log(data)
                }
                else {
                    throw new Error('something went wrong')
                }
            } catch (error) {
                console.log(error)
            }
        }
        editProd()
    }
    const handleDeleteProduct = async (product) => {
        try {
            const res = await fetch(`/api/products/${product.id}`, {
                method: 'DELETE'
            })
            if (res.ok) {
                const data = await res.json()
                console.log(data)
            }

        } catch (error) {
            console.log(error)
        }
    }
    const handleAddProduct = (event)=>{
        event.preventDefault()
        setShowAddForm(!showAddForm)
    }
    const handleAddSubmit = (formData) => {
        const productObj={
            title: formData.title,
            content: formData.content,
            price: formData.price,
            stock: formData.stock,
            image: formData.imageAddress,
        }
        const addProd = async () => {
            try {
                const res = await fetch(`api/products/new`, {
                    method: "POST",
                    body: JSON.stringify(productObj),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                if(res.ok){
                    const data = await res.json()
                    console.log(data)
                }
                else {
                    throw new Error('something went wrong')
                }
            } catch (error) {
                console.log(error)
            }
        }
        addProd()
        



    }

    return (
        <>
            {isLoggedIn ? (
                <>
                    <div>
                        {products && (
                            products.map((product) => (
                                <div key={product.id}>
                                    <p>{product.title}</p>
                                    <p>{product.content}</p>
                                    <p>{product.price}</p>
                                    <p>{product.stock}</p>
                                    <image src={product.image} />
                                    <button onClick={() => { handleDeleteProduct(product) }}>Delete</button>
                                    <button onClick={() => handleEditProduct(product)}>Edit</button>
                                    {editId === product.id && (
                                        <div>
                                            <ProductForm handleFormPro={handleEditSubmit} product={editProduct} />
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                    <button onClick={handleAddProduct}>Add Product</button>
                    {showAddForm && (
                        <div>
                            <ProductForm handleFormPro={handleAddSubmit} />
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div>
                        <form className="focus-within:underline" onSubmit={handleFormSubmit}>
                            <label>Username</label >
                            <input
                                value={username}
                                name="username"
                                className="ml-2 px-4 py-2 border rounded"
                                onChange={e => setUserName(e.target.value)}
                                type="text"
                                placeholder="username"
                            />
                            <label>Password</label>
                            <input
                                value={password}
                                name="password"
                                className="ml-2 px-4 py-2 border rounded"
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                placeholder="Email"
                            />
                            <input
                                type="submit" />
                        </form >
                    </div >
                </>

            )
            }

        </>
    )
}