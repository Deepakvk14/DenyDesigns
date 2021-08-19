import React,{useState} from 'react';
import "./Slider.css"
import SliderData from "./SliderData";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Slider({slide}) {
  const [current,  setCurrent] = useState(0);
  const length= slide.length;

  const nextState= ()=>{
    setCurrent(current===length-1 ? 0: current+1);
  };
  const prevState = ()=>{
    setCurrent(current ===0 ?length-1:current-1);

  };
  console.log(current)
  if(!Array.isArray(slide) || slide.length<=0) {
    return null;
  }

    return (
        <div className="slider">
        <ArrowBackIosIcon className="left-arrow" onClick={prevState} />
              <ArrowForwardIosIcon className="right-arrow" onClick={nextState}/>
        {
          SliderData.map((image,index)=>{
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
        
    )
}

export default Slider
