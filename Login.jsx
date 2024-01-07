import React from 'react'

function Login({ handleLogin }) {
  const imageStyle = {
    width: '100%',
    height: '50vh', 
    objectFit: 'cover', 
  };
  return (
    <>

      <br /><br />
      <img src="https://www.shutterstock.com/image-vector/hosgeldiniz-welcome-turkish-word-cloud-600w-655154164.jpg" className="img-fluid" alt="Full Page Image" style={imageStyle}></img>
      <br /><br />
      <form>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" htmlFor="gridCheck1">
                Beni Hatırla
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={handleLogin}
          className='btn btn-primary'>Giriş Yap</button>
      </form>



    </>
  )
}

export default Login