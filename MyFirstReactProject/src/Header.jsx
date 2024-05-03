import './header.css'

function Header() {
    const texte = 'Muffin est trop beau'
    return (
        <header>
        <h1>Mon site</h1>
        <p className="citation">{texte}</p>
        </header>
    )
}

export default Header