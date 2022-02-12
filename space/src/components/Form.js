import { useState } from "react";

function Form() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        console.log("submitted")
        setName("")
        setImage("")
    }
    
    return(
        <>
            <p>a random form</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <button type="submit">Add Something!</button>
            </form>
        </>

    )
}
export default Form