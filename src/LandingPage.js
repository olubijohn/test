import logo from "../src/images/logo.png";
import image from "../src/images/image.png";
import google from "../src/images/google.png";
import playstore from "../src/images/playstore.png";
import vector from "../src/images/Vector.png";
import by from "../src/images/by.png";


import { BsArrowRightCircle } from 'react-icons/bs';
import { PiCaretCircleDoubleDownLight } from 'react-icons/pi';


export const LandingPage = () => {
  return (
    <div>
      <header style={{ display: "flex", height:"70px", }}>
      <img src={logo} alt='' style={{ width: "30px", height: "30px", float: "right", marginTop: "8.5px", marginLeft: "100px" }} />
      <h1 style={{  fontFamily: "Sansation",
  fontSize: "36px",
  fontWeight: "700px",
  lineHeight: "40px",
  letterSpacing: "0em",
  textAlign: "left", 
  float: "right", marginTop: "4px", marginLeft: "130px", color: "#00653F"}}> X-RAIL</h1>
        <button style={{ height:"40px", width:"80px", marginTop: "10px", marginLeft:"auto", marginRight:"10px", cursor: "pointer",color: "green", backgroundColor: "white", border: "1.5px solid green", borderRadius: "5px"}}>Login</button>
        <button style={{ height: "40px", width: "115px", marginTop: "10px", marginRight: "70px", color: "white", cursor: "pointer", backgroundColor: "green", borderRadius: "5px", border:"1px solid green" }}>
  Get Started <BsArrowRightCircle style={{ fontSize: "16px", marginLeft: "3px",marginBottom: "-4.5px", }} />
</button>
      </header>

      
      <div style={{ fontFamily: "Manrope", fontSize: "60px", fontWeight: 800, lineHeight: "80px", letterSpacing: "0em", textAlign: "left", color: "#00663F", marginTop: "10px", marginLeft: "100px",}}>
  BUY.<br/>
  INVEST.<br/>
  GROW.<br/>
</div>

        <div style={{ fontFamily: "Nunito Sans", fontSize: "18px", fontWeight: 400, lineHeight: "28px", letterSpacing: "0em", textAlign: "left", marginLeft: "100px", marginTop: "35px" }}>
  An all-inclusive platform for Investors to enjoy unrestricted <br/> access to new public offers by companies you are interested in. <br/> 
  <img src={by} alt='' style={{ width: "10px", height: "20px", float: "Left", marginTop: "130px", marginLeft: "23px" }} />
  <img src={vector} alt='' style={{ width: "100px", height: "60px", float: "Left", marginTop: "110px", marginLeft: "-10px" }} />
 
  <img src={google} alt='' style={{ width: "100px", height: "42px", float: "left", cursor: "pointer", marginTop: "30px", marginLeft: "-120px" }} />
  <img src={playstore} alt='' style={{ width: "100px", height: "42px", float: "left", cursor: "pointer",marginTop: "30px", marginLeft: "1px" }} />
  <br/>
  
  <div>
   <PiCaretCircleDoubleDownLight style={{ fontSize: "40px", marginLeft: "400px", cursor: "pointer", marginBottom: "-180px", color:"black",  }} />
</div>
  <img src={image} alt='' style={{ width: "610px", height: "500px", float: "right", marginTop: "-360px", marginRight: "100px" }} />

</div>
        <div>
        </div>
      </div>

)
};

// </div>     
{/* <div style={{ width: "200px", height: "200px", }}> */}
{/* <img src={image} alt="" style={{ width: "610px", height: "550px", marginTop: "80px", marginRight: "400px" }} /> */}
{/* <div style={{ float: "left", border: "4px solid" }}> */}     