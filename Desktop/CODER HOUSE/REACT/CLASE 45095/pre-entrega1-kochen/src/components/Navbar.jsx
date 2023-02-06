import CartWidget from "./CartWidget";
import logo from "./img/logo.png";

const Navbar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href={"/"}><img src = {logo} alt ="PokeShop" width={"108"}/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href={"/"}>Marcas</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href={"/Hombres"}>Hombres</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href={"/Mujeres"}>Mujeres</a>
                                    </li>
                                    <li className="nav-item">
                                 <a className="nav-link" href={"/Niños"}>Niños</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col d-flex align-items-center justify-content-end" >
                    <CartWidget/>
                </div>
            </div>
        </div>
    );
}

export default Navbar; 