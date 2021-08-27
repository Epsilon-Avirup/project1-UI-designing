import React from 'react';
//import Slider from './Slider'

const Item=(props)=>{
    const {items} = props;
    return(
        <div>
           
           <div class="container">
  <div class="row">
    <div class="col">
    <div className="card mb-3 d-flex justify-content-between" style={{maxWidth: '540px',margin:'1rem'}}>
              <div className="row g-0">
                <div className="col-sm-4">
                  <img src={items.image} className="img-fluid rounded-start" alt="product-img"/>
                </div>
                <div className="col-md-8">
                   <div className="card-body">
                     <h5 className="card-title">{items.brand}</h5>
                     <p className="card-text">{items.desc}</p>
                        {
                            items.points.basePointsToCharge === items.points.originalBasePointsToCharge ? <p className="card-text text-primary">{items.points.basePointsToCharge} Points</p> :
                            <div><p className="card-text text-primary">{items.points.basePointsToCharge} Points</p>
                            <p className="card-text text-dark"><del>{items.points.originalBasePointsToCharge} Points</del></p></div>
            
                        }
                      <a className="btn btn-danger p-2">Detail</a>
                  </div>
                </div>
             </div>
           </div>
    </div>
    <div class="col">
    <div className="card mb-3 d-flex justify-content-between" style={{maxWidth: '540px',margin:'1rem'}}>
              <div className="row g-0">
                <div className="col-sm-4">
                  <img src={items.image} className="img-fluid rounded-start" alt="product-img"/>
                </div>
                <div className="col-md-8">
                   <div className="card-body">
                     <h5 className="card-title">{items.brand}</h5>
                     <p className="card-text">{items.desc}</p>
                        {
                            items.points.basePointsToCharge === items.points.originalBasePointsToCharge ? <p className="card-text text-primary">{items.points.basePointsToCharge} Points</p> :
                            <div><p className="card-text text-primary">{items.points.basePointsToCharge} Points</p>
                            <p className="card-text text-dark"><del>{items.points.originalBasePointsToCharge} Points</del></p></div>
            
                        }
                      <a className="btn btn-danger p-2">Detail</a>
                  </div>
                </div>
             </div>
           </div>
    </div>
  </div>
  
</div>

        </div>
        
    )
}

export default Item;