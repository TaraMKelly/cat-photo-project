import LikeButton from "./LikeButton"
import {useState} from "react"

function PhotoCard ( {cat}) {
    
    return(
        <>
            <img src={cat.url} alt="cat" height="250" width="400"/>
            <LikeButton />
        </>
    )
}

export default PhotoCard