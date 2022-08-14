import './navbar.css'

export default function Navbar () {
    return (
        <nav className="navbar">
            <div className="navbar--brand">
                <img src='./src/assets/navbar-logo.jpg' />
                <span>
                    Meme Generator
                </span>
            </div>
            <div className="navbar--right-content">
                ReactJS project 3
            </div>
        </nav>
    )
}