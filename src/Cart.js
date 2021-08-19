import React,{useState} from 'react';
import "./Cart.css"
//import Data from "./Data";
//import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
//import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Cart({data}) {
//   const [current,  setCurrent] = useState(0);
//   const length= data.length;

//   const nextState= ()=>{
//     setCurrent(current===length-1 ? 0: current+1);
//   };
//   const prevState = ()=>{
//     setCurrent(current ===0 ?length-1:current-1);

//   };
//   console.log(current)
//   if(!Array.isArray(data) || data.length<=0) {
//     return null;
//   }

    return (<div className="main-div">
        {/* <div className="slider">
        <ArrowBackIosIcon className="left-arrow" onClick={prevState} />
              <ArrowForwardIosIcon className="right-arrow" onClick={nextState}/>
        {
          Data.map((image,index)=>{
            return(
              <div className={index===current ? 'slide active' : 'slide'}
              key={index}
              >
                {index===current && ( <img src={image.image} alt="slider" className="image" />)}
              </div>
            )
          })
        }
       </div>
       <div> 
           zsdf
       </div>
       */}
       <div className="art">
           <h1>FRAMED ART PRINT</h1> 
           <hr/>
           <p>FLORES CYAN BY SUNSHINECANTEEN</p>
           <h3> PRODUCT DETAILS</h3>
           <form className="Detail">
           <div className="options">
            <label>STYLE</label>
            <select className="select">
                <option>Classic</option>
                <option>Old</option>
                <option>Solid</option>
            </select>
            </div>
            <div className="options">
            <label>FRAME</label>
            <select className="select">
                <option>Black</option>
                <option>Red</option>
                <option>Solid</option>
            </select></div>
            <div className="options">
            <label>SIZE</label>

            <select className="select" >
                <option>8" x 10"</option>
                <option>6" x 8"</option>
                <option>10" x 14"</option>
            </select>
    </div>
          
           <hr/>
         
          
           </form>
           <p> Deny Designs is for wholesale customers</p>
           <div className="btn1">
          WHOLESALE lOGIN
          </div>
       </div>
       </div>
    )
}

export default Cart