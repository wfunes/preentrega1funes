import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    const img="https://www.pngmart.com/files/15/Walter-White-PNG-Image.png"
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={img} alt="walterio" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Inicio
                        </li>
                        <li className="nav-item">
                            Grupo 1
                        </li>
                        <li className="nav-item">
                            Grupo 2
                        </li>
                        <li className="nav-item">
                            Grupo 3
                        </li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar