import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ item,user }) {
    const productUrl=`/products/product/${item.id}` 

    function handleClick(product){
        let localFavs=JSON.parse(localStorage.getItem("favs"))??[]
        let itemIndex=localFavs.findIndex(localItem =>product.id===localItem.id)
        if (itemIndex>=0){

            localFavs=localFavs.filter(item => item.id!==product.id)
        }
        else{
            localFavs.push({id:product.id,title:product.title})
        }
        localStorage.setItem("favs", JSON.stringify(localFavs))
    }

    function handleClickTwo(product){
        let localGives=JSON.parse(localStorage.getItem("gives"))??[]
        let itemIndex=localGives.findIndex(localItem =>product.id===localItem.id)
        if (itemIndex>=0){

            localGives=localGives.filter(item => item.id!==product.id)
        }
        else{
            localGives.push({id:product.id,title:product.title})
        }
        localStorage.setItem("gives", JSON.stringify(localGives))
    }
    
    return (
        <div className='col-sm mb-3'>
            <div className="card" >
                <Link to={productUrl}>
                    <img src={item.image} className="card-img-top" alt={item.title} />

                </Link>                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description.substring(0, 45)}...</p>
                    <p className="lead">{item.price}</p>
                    {user && <a href="#" 
                    onClick={()=>handleClick(item)}
                    className="btn btn-primary"
                    >❤</a>}
                    <hr />
                    {user && <a href="#" 
                    onClick={()=>handleClickTwo(item)}
                    className="btn btn-primary"
                    >Sepete Ekle</a>}
                </div>
            </div>
            
        </div>
    )
}

export default ProductCard