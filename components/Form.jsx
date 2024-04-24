import { Span } from "next/dist/trace";
import Link from "next/link";

export default function Form({type, post, setPost, submitted, handleSubmit}){
    return (
        <>
        <div>
            <h1>{type} post</h1>
            <form
            onSubmit={handleSubmit}>
                <label><span>Your Post</span></label>
                <textarea 
                value={post.prompt}
                onChange={(e)=>setPost({...post, prompt:e.target.value})}
                placeholder="write your prompt here"
                required/>
                <label><span>Tag<span>#product, #war</span></span></label>
                <input 
                value={post.tag}
                onChange={(e)=>setPost({...post, tag:e.target.value})}
                placeholder="#tag "
                required/>
                <div>
                    <Link href='/'
                    >cancel</Link>
                    <button type="submit"
                    disabled={submitted}></button>
                    {submitted? `${type}...`: type}
                </div>
            </form>
        </div>
        
        </>
    )

}