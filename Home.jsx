import { Link } from "react-router-dom";
import { Products, SearchBar } from "../products"


function Home({user}) {
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#4CAF50', // Arka plan rengi
    color: 'white', // Yazı rengi
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', // Renk değişimi için animasyon
  };

  const handleButtonClick = () => {
    // İndirimleri göstermek için gereken işlemleri buraya ekleyin.
  };
  
  return (
    <>
    
    <div style={{backgroundClor:"black", backgroundImage: 'url("https://hthayat.haberturk.com/im/2020/05/18/ver1675338175/1074002_620x360.jpg")', backgroundSize: 'cover', height: '100vh', }}>
      <br /><br />
      <Link to='/sale' className='btn btn-info'style={buttonStyle}>İndirimleri Görmek İçin Tıklayın</Link>
      <SearchBar/>
      <Link to='/sepet' className='btn btn-info'style={buttonStyle}>Sepetinizi Görmek İçin Tıklayın</Link>
        
      
    </div>
    
    
    
    
    </>
  )
}

export default Home