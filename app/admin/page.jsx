'use client'

import { useState, useEffect } from "react"
import { useAuthContext } from "@utils/AuthProvider"

export default function AdminPage() {
    const { isLoggedIn, token } = useAuthContext()
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [products, setProducts] = useState([])
    const [editId, setEditId] = useState(false)
    const [title, setTtile] = useState('')
    const [content, setContent] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('');
    const [formState, setFormState] = useState([])
    const [imageAddress, setImageAddress] = useState('')

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
        setTtile(product.title)
        setContent(product.content)
        setPrice(product.price)
        setStock(product.stock)
    }
    const editProduct = async (event) => {
        event.preventDefault();
        const productId = editId
        const productObj = {
            title: title,
            content: content,
            image: imageAddress,
            price: price,
            stock: stock
        }
        try {
            const res = await fetch(`/api/products/${productId}`, {
                method: 'PATCH',
                body: JSON.stringify(productObj),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (res.ok) {
                const data = await res.json()
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
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
    const handleImageUpload = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('image', fileInput.current.files[0]);

        const postImage = async () => {
            try {
                const res = await fetch('/api/upload/image-upload', {
                    mode: 'cors',
                    method: 'POST',
                    body: data,
                });
                if (!res.ok) throw new Error(res.statusText);
                const postResponse = await res.json();
                setFormState({ ...formState, image: postResponse.Location });
                console.log('postImage: ', postResponse.Location);
                setImageAddress(postResponse.Location)
                return postResponse.Location;
            } catch (error) {
                console.log(error);
            }
        };
        postImage();
    };
    return (
        <>
            {isLoggedIn ? (
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
                                        <form onSubmit={editProduct}>
                                            <input
                                                name="title"
                                                id="title"
                                                value={title}
                                                onChange={e => setTtile(e.target.value)}
                                                placeholder="enter title"
                                                type="text"
                                                className="questionNewCard" />
                                            <input
                                                name="content"
                                                id="content"
                                                value={content}
                                                onChange={e => setContent(e.target.value)}
                                                placeholder="enter content"
                                                type="text"
                                                className="questionNewCard" />
                                            <input
                                                name="price"
                                                id="price"
                                                value={price}
                                                onChange={e => setPrice(e.target.value)}
                                                placeholder="Type a Question"
                                                type="text"
                                                className="price" />
                                            <input
                                                name="stock"
                                                id="stock"
                                                value={stock}
                                                onChange={e => setStock(e.target.value)}
                                                placeholder="stock"
                                                type="text"
                                                className="questionNewCard" />
                                            <label className="form-input col-12  p-1">
                                                Add an image:
                                                <input type="file" ref={fileInput} className="form-input p-2" />
                                                <button className="btn" onClick={handleImageUpload} type="submit">
                                                    Upload
                                                </button>
                                            </label>
                                            <button type="submit">Submit changes</button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                    

                </div>

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