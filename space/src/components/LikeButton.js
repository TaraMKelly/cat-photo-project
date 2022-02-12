import {useState} from "react"

function LikeButton() {
    const [like, setLike] = useState(true)

    return(
        <>
            {like ? 
            (<button onClick={() => setLike(false)}>like</button>) : (<button onClick={() => setLike(true)}>unlike</button>)
            }
        </>
    )
}

export default LikeButton