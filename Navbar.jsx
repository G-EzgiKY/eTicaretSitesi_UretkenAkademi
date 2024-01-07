import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar({ user, handleLogOut }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container">

        <Link className='navbar-brand' to="/">R-Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink className="nav-link" to="/">Ana Sayfa</NavLink>
            <NavLink className="nav-link" to="/products">Ürünler</NavLink>
            <NavLink className="nav-link" to="/about">Hakkımızda</NavLink>
            <NavLink className="nav-link" to="/contact">İletişim</NavLink>
            <NavLink className="nav-link" to="/sale">İndirimler</NavLink>
            
            
            {
              user ?
                <>
                  <NavLink className="nav-link" to="/fav">Favoriler</NavLink>
                  <NavLink className="nav-link" to="/sepet">Sepetim</NavLink>
                  <button className="nav-link" onClick={handleLogOut}>Logout({user.name})</button>
                  
                  

                </> :
                <NavLink className="nav-link" to="/login">Giriş</NavLink>
            }
          </ul>
        </div>
      </div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Arama Yap" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">🔎</button>
          </form>
        </div>
      </nav>
      
    </nav>


  )
}

export default Navbar