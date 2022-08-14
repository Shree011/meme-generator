import './mainpage.css'
import memeData from '../meme-data'
import React from 'react'

export default function MainPage() {
    let [meme, setMeme] = React.useState({
        url : "https://picsum.photos/640/360",
        header : "",
        footer : "",
        height : "",
        width : ""
    })
    const [allMemes, setAllMems] = React.useState([])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const urll = allMemes[randomNumber].url
        const width = allMemes[randomNumber].width
        const height = allMemes[randomNumber].height
        setMeme(prevMeme => ({
            ...prevMeme,
            url: urll,
            header: "",
            footer: "",
            width: width,
            height: height
        }))
    }
    
    function updateText(event) {
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [event.target.name] : event.target.value
            }
        })
    }

    function handelChange(event) {
        event.preventDefault()
    }

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMems(data.data.memes)
        }
        getMemes()
    }, [])

    return (
        <form onChange={handelChange}>
            <div className="mainpage">
                <div className="mainpage--inputs">
                    <input 
                        type="text"
                        placeholder='Enter header' 
                        id='headerr' 
                        onChange={updateText} 
                        name="header"
                        value={meme.header}
                    />
                    <input 
                        type="text" 
                        placeholder='Enter footer' 
                        id='footer'
                        onChange={updateText} 
                        name="footer"
                        value={meme.footer}
                    />
                </div>
                <div className="mainpage--button">
                    <button type='button' onClick={getMemeImage} >Get new meme image</button>
                </div>
                <div className="container">
                    <img id="img" style={{width: `${meme.width}`, height: `${meme.height}`}} src={meme.url} />

                    <div className='mainpage--header' id='header-div'>
                        {meme.header}
                    </div>
                    <div className='mainpage--footer' id='footer-div'>
                        {meme.footer}
                    </div>
                </div>
            </div>
        </form>
    )
}