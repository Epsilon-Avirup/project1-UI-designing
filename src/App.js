import './App.css';
import React,{useState,useEffect} from 'react';
import Item from './Item';
import Menu from './Group 4.png';
import logo1 from './Group 5.png';
import Search from './Group 3.png';
import logOut from './iconmonstr-log-out-2.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'


const App =()=>{
  const [data,setData] = useState(null)

  useEffect(()=>{
    fetch('https://eps-gigya.herokuapp.com/rewardProducts')
    .then(res=>res.json())
    .then(data=>{setData(data)
    console.log(data)
  })
  },[])
  return(
  <div>
      <nav className="navbar navbar-light" style={{backgroundColor:'#1E3163'}} >
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={Menu} alt="menu" width="25" height="25"/>
            </a>
            <a className="navbar-brand" href="#">
              <img src={logo1} alt="logo"/>
            </a>
            <a className="navbar-brand" href="#">
              <img src={Search} alt="search" width="25" height="25"/>
            </a>
            <a className="navbar-brand" href="#">
              <img src={logOut} alt="logout" width="25" height="25"/>
            </a>
          </div>
      </nav>
      
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item">Marchandise</li>
          <li className="breadcrumb-item">Electronics</li>
          <li className="breadcrumb-item active" aria-current="page">Cameras</li>
        </ol>
      </nav>
     
      <h3 className="text-center" style={{align : 'center'}}>Cameras</h3>

      <div className="container">
          <div className="row justify-content-evenly " style={{margin:'15px'}}>
              <div className="col-4 border border-primary rounded-1" style={{padding:'1rem',color:'#1E3163'}}>
                Instant
              </div>
              <div className="col-4 border border-primary rounded-1" style={{padding:'1rem',color:'#1E3163'}}>
              DSLR
              </div>
          </div>
          <div className="row justify-content-evenly" style={{margin:'15px'}}>
              <div className="col-4 border border-primary rounded-1 text-wrap" style={{padding:'1rem',color:'#1E3163'}}>
              Convenience,Security & Collision Avoidance
              </div>
              <div className="col-4 border border-primary rounded-1" style={{padding:'1rem',color:'#1E3163'}}>
              Action
              </div>
          </div>
          <div className="row justify-content-evenly" style={{margin:'15px'}}>
              <div className="col-4 border border-primary rounded-1" style={{padding:'1rem',color:'#1E3163'}}>
              Camcorders
              </div>
              <div className="col-4 border border-primary rounded-1" style={{padding:'1rem',color:'#1E3163'}}>
              Drones
              </div>
          </div>
         <div className="row justify-content-evenly" style={{margin:'15px'}}>
             <div className="col-4 border border-primary rounded-1" style={{padding:'1rem',color:'#1E3163'}}>
             Super Mega Pixel Ultimate Zoom
             </div>
            <div className="col-4 border border-primary rounded-1" style={{padding:'1rem' ,color:'#1E3163'}}>
            Wearables
            </div>
         </div>
    </div>
    <div style={{ display: 'flex',justifyContent: 'center', margin:'1.5rem'}} >
       <h5 className="text-center" style={{margin:'.15rem'}} >More filters</h5>
       <button className="rounded-circle btn-danger fs-6">+</button>
    </div>

    <div className="input-group mb-3 col-sm-5 top-50 start-50 translate-middle" style={{margin:'2.5rem'}} >
      <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Sort By: Placeholder"/>
      <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
    </div>
     {
        data ? data.map((item,i)=>{
           return <Item items={item} key={i}/>
         }): <h1>Loading...</h1>
       }
      <div style={{backgroundColor:'#1E3163',padding:'1rem',width:'100%'}}>
            <div class="container" >
              <div class="row">
                <div class="col">
                  <a style={{color:'white',margin:'1rem'}} href="#">  Contact Us</a> 
                </div>
                <div class="col">
                <img style={{margin:'1rem'}}src={logo1} alt="logo"/>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <a style={{color:'white',margin:'1rem'}} href="#">Program Rules</a> 
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <a style={{color:'white',margin:'1rem'}} href="#">FAQs</a> 
                </div>
              </div>
              <div class="row">
                <div class="col">
                <a style={{color:'white',margin:'1rem'}} href="#">Privacy</a> 
                </div>
              </div>
            </div>
              <hr style={{color:'white'}}></hr>
            <div style={{backgroundColor:'#1E3163',padding:'1.5rem',width:'100%'}}>
              <div class="container" >
                <div class="row">
                  <div class="col">
                    <p style={{color:'white'}}>@2019 U.S. Bank</p>
                </div>
                <div class="row">
                  <div className="col">
                    <p style={{color:'white'}}>The creditor and issuer of your card is U.S Bank National <br></br>
                      Association,pursuant to a license from Visa U.S.A. Inc.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
</div>
  )
}

export default App;
