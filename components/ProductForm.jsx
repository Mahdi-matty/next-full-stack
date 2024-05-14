import { useState, useEffect, useRef } from "react";
export default function ProductForm({ handleFormPro, product }) {
    const [title, setTtile] = useState('')
    const [content, setContent] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [stock, setStock] = useState('');
    const [imageAddress, setImageAddress] = useState('')
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const s3Url = 'https://user-images-669af664-23f0-47fd-bd77-2745b6a066b7.s3.us-east-2.amazonaws.com'

    useEffect(() => {
        if (product) {
            setTtile(product.title)
            setContent(product.content)
            setPrice(product.price)
            setStock(product.stock)
            setImageAddress(product.image)
            setCategory(product.category)
        }
    })
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleProduct = (e) => {
        e.preventDefault();
        handleFormPro({ title, content, price, stock, imageAddress, category })

    }

    const handleImageUpload = async (event) => {
        event.preventDefault()
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            console.log(data.location)
            const fileUrl = `${s3Url}/${data.location}`
            console.log(fileUrl)
            setUploading(false);
            setImageAddress(fileUrl)
            console.log(imageAddress)
        } catch (error) {
            console.log(error);
            setUploading(false);
        }
    }



    return (
        <>
            <div>
                <form className="flex-col" onSubmit={handleProduct}>
                    <input
                        name="title"
                        className="border-blue-50 border-4 p-2 my-4 w-20"
                        id="title"
                        value={title}
                        onChange={e => setTtile(e.target.value)}
                        placeholder="enter title"
                        type="text" />
                    <input
                        name="content"
                        id="content"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        placeholder="enter content"
                        type="text"
                        className="border-blue-50 border-4 p-2 my-4 w-20" />
                    <input
                        name="price"
                        id="price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        placeholder="price"
                        type="text"
                        className="border-blue-50 border-4 p-2 my-4 w-20" />
                    <input
                        name="stock"
                        id="stock"
                        value={stock}
                        onChange={e => setStock(e.target.value)}
                        placeholder="stock"
                        type="text"
                        className="border-blue-50 border-4 p-2 my-4 w-20" />
                    <input
                        name="category"
                        id="category"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        placeholder="category"
                        type="text"
                        className="border-blue-50 border-4 p-2 my-4 w-20" />
                    <label className="form-input col-12  p-1">
                        Add an image:
                        <input type="file" onChange={handleFileChange} className="form-input p-2" />
                        <button className="bg-yellow-300 w-40 h-10 rounded-3xl m-4" onClick={handleImageUpload} type="submit">
                            Upload
                        </button>
                    </label>
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}