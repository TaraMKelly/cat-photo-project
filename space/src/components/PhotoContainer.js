import { useState } from "react"
import PhotoCard from "./PhotoCard"
import MoreButton from "./MoreButton"

function PhotoContainter ({catStuff}) {
    const [catIndex, setCatIndex] = useState(0)

    const fiveCatPics = catStuff.slice(catIndex, catIndex + 5)
    .map((cat) => (
        <PhotoCard key={cat.id} cat={cat} />
    ))

    function handleClickMore() {
        setCatIndex((catIndex) => (catIndex + 5) % catStuff.length)
    }

    return (
        <> 
         <MoreButton onClickMore={handleClickMore} />
         {fiveCatPics}
        </>
    )


}

export default PhotoContainter