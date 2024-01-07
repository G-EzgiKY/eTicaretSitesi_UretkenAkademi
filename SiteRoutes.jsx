import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import { Category, Product, ProductLayout, Products, Sale, SearchBar } from './products'
import Login from './pages/Login'
import Fav from './pages/Fav'
import PrivateRoute from './PrivateRoute'
import Sepet from './pages/Sepet'



function SiteRoutes({handleLogin,user,handleSearch}) {
    return (
        <Routes>
            <Route path='/' element={<Home user={user}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<PageNotFound/>} />
            <Route path='/products' element={<ProductLayout />} >
                <Route index={true} element={<Products user={user}/>}/>
                <Route path='category/:categoryName' element={<Category user={user} />} />
                <Route path='product/:productId' element={<Product user={user} />} />
                
            </Route>
            <Route path='/Login' element={<Login handleLogin={handleLogin} />} />
            <Route path='/Fav' element={<PrivateRoute user={user}><Fav user={user}/></PrivateRoute>} />
            <Route path='/sale' element={<Sale />} />
            <Route path='/search' element={<SearchBar handleSearch={handleSearch} />} />
            <Route path='/sepet' element={<Sepet />} />
            

        </Routes>
    )
}

export default SiteRoutes