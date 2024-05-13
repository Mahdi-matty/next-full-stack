'use client'

import { useState, useEffect } from "react"
import Image from "next/image";
import ProductForm from "@components/ProductForm"
export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [products, setProducts] = useState([])
    const [editProduct, setEditProduct] = useState(null)
    const [editId, setEditId] = useState(null)
    const [showAddForm, setShowAddForm] = useState(false)
    const [token, setToken] = useState(null)
    const [name, setName] = useState('')
    useEffect(() => {
        // if (typeof window !== 'undefined') {
        const fetchdata = async () => {
            const initialToken = localStorage.getItem('initialToken');
            if (initialToken) {
                setToken(initialToken);
                console.log(token)
            }
        }
        fetchdata()
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/admin/token', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                if (res.ok) {
                    const data = await res.json()
                    console.log(data)
                    setIsLoggedIn(true)
                } else {
                    localStorage.removeItem('initialToken')
                    console.log('something went wrong')
                }
            } catch (error) {
                console.log(error)
            }
        }
        if (token) {
            fetchData()
        }
    }, [token])

    const handleFormSubmit = async (event) => {
        event.preventDefault()
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
                console.log(data.token)
                localStorage.setItem('initialToken', data.token)
                setIsLoggedIn(true)
            }


        } catch (error) {
            console.log(error)
        }
    }
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
        if (isLoggedIn) {
            fetchData()
        }
    }, [isLoggedIn])

    const handleEditProduct = (product) => {
        setEditId(product.id)
        setEditProduct(product)
    }
    const handleEditSubmit = (formData) => {
        const productObj = {
            title: formData.title,
            content: formData.content,
            price: formData.price,
            stock: formData.stock,
            image: formData.imageAddress,
            category: formData.category
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
                if (res.ok) {
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
    const handleAddProduct = (event) => {
        event.preventDefault()
        setShowAddForm(!showAddForm)
    }
    const handleAddSubmit = (formData) => {
        const productObj = {
            title: formData.title,
            content: formData.content,
            price: formData.price,
            stock: formData.stock,
            image: formData.imageAddress,
            category: formData.category
        }
        const addProd = async () => {
            try {
                const res = await fetch(`api/products/new`, {
                    method: "POST",
                    body: JSON.stringify(productObj),
                })
                if (res.ok) {
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
    const handleCategorySubmit = async (event) => {
        event.preventDefault()
        const catObj = {
            name: name
        }
        try {
            const res = await fetch('api/categories/new', {
                method: 'POST',
                body: JSON.stringify(catObj),
                headers: {
                    "Content-Type": "application/json",
                }
            }
            )
            if (!res.ok) {
                console.log(res.Response)
            }
            setName('')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {isLoggedIn ? (
                <>
                    <div>
                        <form onSubmit={handleCategorySubmit}>
                            <input type="text"
                                placeholder="name"
                                className="border-blue-50 border-4 p-2 my-4 w-20"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                            <input type="submit" />
                        </form>
                    </div>
                    <div className="flex flex-wrap">
                        {products && (
                            products.map((product) => (
                                <div className=" flex-1 bg-teal-100 border-solid m-5 p-5" key={product._id}>
                                    <p>{product.title}</p>
                                    <p>{product.content}</p>
                                    <p>{product.price}</p>
                                    <p>{product.stock}</p>
                                    {product.image && (
                                        <div>
                                            <Image src={product.image} alt="image" />
                                        </div>
                                    )}

                                    <button className="bg-yellow-300 w-20 h-10 rounded-3xl m-4" onClick={() => { handleDeleteProduct(product) }}>Delete</button>
                                    <button className="bg-yellow-300 w-20 h-10 rounded-3xl m-4" onClick={() => handleEditProduct(product)}>Edit</button>
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
                                placeholder="password"
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