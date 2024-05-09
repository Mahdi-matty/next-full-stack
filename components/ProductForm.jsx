import { useState, useEffect } from "react";
export default function ProductForm({ handleFormPro, product }) {
    const [title, setTtile] = useState('')
    const [content, setContent] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('');
    const [formState, setFormState] = useState([])
    const [imageAddress, setImageAddress] = useState('')

    useEffect(()=>{
        if(product){
            setTtile(product.title)
            setContent(product.content)
            setPrice(product.price)
            setStock(product.stock)
            setImageAddress(product.image)
        }
    })

        const handleProduct = (e) => {
            e.preventDefault();
            handleFormPro({ title, content, price, stock, imageAddress })

        }

        const handleImageUpload = (event) => {
            event.preventDefault()
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
        }


 
    return (
        <>
            <div>
                <form onSubmit={handleProduct}>
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
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}