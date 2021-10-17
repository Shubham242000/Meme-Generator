import react, { useEffect, useState } from "react";
const MemeGen = () => {
    const [topText, settopText] = useState("")
    const [bottomText, setbottomText] = useState("")
    const [images, setImages] = useState([])
    const [randomURL, setRandomURL] = useState("http://i.imgflip.com/1bij.jpg")

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(DATA => { 
            setImages(DATA.data.memes)
        })
        .catch(e => console.log(e))
    }, [])

    const generateMeme = (e) => {
        e.preventDefault();
        const randomInd = Math.floor(Math.random() * images.length) + 1
        const randomUrl = images[randomInd].url;
        setRandomURL(randomUrl)
    }

    return (
        <div>
            <form className="meme-form">
                <input 
                   onChange = {e => {
                        settopText(e.target.value)
                   }}
                   placeholder = "Top Text"
                   name = "topText"
                />
                <input 
                   onChange = {e => {
                        setbottomText(e.target.value)
                   }}
                   placeholder = "Bottom Text"
                   name = "bottomText"
                />
                <button
                    onClick = {generateMeme}
                >
                Gen</button>
            </form>
            <div className="meme">
              <img src={randomURL} />
                <h2 className="top">{topText}</h2>
                <h2 className="bottom">{bottomText}</h2>
            </div>
        </div>
    )
}
export default MemeGen