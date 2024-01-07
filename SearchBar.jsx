import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchMessage, setSearchMessage] = useState('');

    // FakeStoreAPI'den ürünleri getiren fonksiyon
    const fetchProducts = async () => {
        console.log('A'); // Kontrol için eklendi
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=10');
            const data = await response.json();
            console.log('Arama '); // Kontrol için eklendi
            setProducts(data);
            //setFilteredProducts(data); // İlk başta tüm ürünleri göster
        } catch (error) {
            console.error('Ürünleri alma işlemi başarısız:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Arama yapılıyor'); // Kontrol için eklendi
        const searchTermLowerCase = searchTerm.toLowerCase();
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTermLowerCase)
        );
        console.log('Filtrelenmiş Ürünler:', filtered); 

        setFilteredProducts(filtered);
        setSearchMessage(filtered.length === 0 ? { text: 'ARANAN ÜRÜN BULUNAMADI :(', color: 'white', fontSize: '25px', backgroundColor: 'white' } : { text: '' });
    };

    return (
        <div>
            <br />
            <nav className="navbar bg-body-tertiary" style={{ borderRadius: "30px" }}  >
                <div className="container-fluid" >
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input

                            className="form-control me-2"
                            type="search"
                            placeholder="Arama Yap"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-outline-success" type="submit">🔎</button>
                    </form>
                </div>
            </nav>

            <div className="container mt-4">

                <h2 style={{ backgroundColor: "lightpink", color: "white", textAlign: "center", borderRadius: "30px" }}>ARAMA SONUCLARI </h2>
                <br /><br />
                {searchMessage ? (
                    <p style={{ color: searchMessage.color, fontSize: searchMessage.fontSize, textAlign: "center" }}>
                        {searchMessage.text}
                    </p>
                ) : (
                    <div className="list-group">
                        {filteredProducts.map(product => (
                            <Link key={product.id} to={`/products/product/${product.id}`} className="list-group-item list-group-item-action" style={{ backgroundColor: "lightpink", textAlign: "center", color: "white" }}>
                                {product.title}
                            </Link>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default SearchBar;
