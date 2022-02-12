import { useState } from "react"
import Form from "./Form"
import PhotoCard from "./PhotoCard"
import MoreButton from "./MoreButton"


function PhotoContainter ({catStuff}) {
    const [catIndex, setCatIndex] = useState(0)


    //uses slice to display only 5 cats at a time
    const fiveCatPics = catStuff.slice(catIndex, catIndex + 5)
    .map((cat) => (
        <PhotoCard key={cat.id} cat={cat} />
    ))

    function handleClickMore() {
        //gives you the next 5 cats when you click the button
        setCatIndex((catIndex) => (catIndex + 5) % catStuff.length)
    }

    return (
        <> 
         <MoreButton onClickMore={handleClickMore} />
         {fiveCatPics}
         <Form />
        </>
    )


}

export default PhotoContainter