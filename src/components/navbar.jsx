import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faEnvelope, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <p className="text-success fw-bold h2 m-2">TOKOKITA</p>

                <div className="d-flex align-items-center flex-grow-1">
                    <p className='m-2'>Kategori</p>
                    <form className="d-flex me-3" role="search">
                        <input className="form-control me-2 input-expanded" name="myInput" type="text" placeholder="Cari di Tokopedia" aria-label="Search" />
                    </form>

                    <div className="d-flex">
                        <div className="position-relative m-2">
                            <FontAwesomeIcon className='m-2 icon-large' icon={faShoppingCart} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">38</span>
                        </div>
                        <div className="position-relative m-2">
                            <FontAwesomeIcon className='m-2 icon-large' icon={faBell} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
                        </div>
                        <div className="position-relative m-2">
                            <FontAwesomeIcon className='m-2 icon-large' icon={faEnvelope} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
                        </div>
                    </div>
                </div>

                <div className="d-flex align-items-center">
                    <FontAwesomeIcon className='m-2 icon-large' icon={faUserCircle} />
                    <p className='m-2'>kaito gam...</p>
                    <FontAwesomeIcon className='m-2 icon-large' icon={faUserCircle} />
                    <p className='m-2'>Moch</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
