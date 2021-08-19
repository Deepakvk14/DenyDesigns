import React from 'react';
import './Signup.css';

function Signup() {
    return (
        <div className="signup">
            <form className="form1">
            <div className="input">
            <div className="name" >
                <label>FIRST NAME*</label>
                <input type="text" placeholder=""/>
                </div>
                <div className="name" >
                <label>LAST NAME*</label>
                <input type="text" placeholder=" "/>
                </div>
                </div>
                <div className="input">

                <div className="name" >
                <label>PHONE NUMBER*</label>
                <input type="text" placeholder=""/>
                </div>
                <div className="name" >
                <lable>MOBILE PHONE</lable>
                <input type="text" placeholder=""/>
                </div>
                </div>
                <div className="input" >
                <div className="name1" >
                <lable>EMAIL*</lable>
                <input type="text" placeholder=""/>
                </div>
                </div>

               </form><hr/>
               <form className="form1">
            <div className="input">
            <div className="name" >
                <label>COMPANY NAME*</label>
                <input type="text" placeholder=""/>
                </div>
                <div className="name" >
                <label>COMPANY WEBSITE*</label>
                <input type="text" placeholder=" "/>
                </div>
                </div>
                <div className="input">

                <div className="name" >
                <label>COMPANY ADDRESS*</label>
                <input type="text" placeholder=""/>
                </div>
                <div className="name" >
                <lable>ADDRESS 2</lable>
                <input type="text" placeholder=""/>
                </div>
                </div>
                <div className="input" >
                <div className="name1" >
                <lable>CITY*</lable>
                <input type="text" placeholder=""/>
                </div>
                <div className="name1" >
                <lable>STATE*</lable>
                <select className="select" type="text" placeholder="">
                    <option>Select a state</option>
                    <option>Utter pradesh</option>
                    <option>Madhya Pradesh</option>
                    <option>Rajsthan</option>
                </select>
                </div>
                </div>
                <button>Sign Up</button>
               </form>
               
        </div>
    )
}

export default Signup
