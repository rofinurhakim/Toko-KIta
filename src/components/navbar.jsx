import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <>
            <div>
              <nav className="navbar bg-light">
                <div className="container-fluid">
                  <p className="text-success fw-bold h3">TOKOPEDIA</p>
                  <form class="d-flex" role="search">
                  <input className="form-control me-2" name="myInput" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    <FontAwesomeIcon icon={faHome} />
                  </form>
                </div>
              </nav>
            </div>
        </>
    )
    
}

export default Navbar