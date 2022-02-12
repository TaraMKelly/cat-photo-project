
function PhotoCard ( {cat}) {
    console.log(cat)
    return(
        <>
            <img src={cat.url} alt="cat" height="250" width="400"/>
        </>
    )
}

export default PhotoCard