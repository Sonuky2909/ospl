import { Link } from "react-router-dom"
import osplLogo from "../../assets/osplLogo.svg"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div className="md:w-full md:h-[60vh] w-full h-[25vh]  flex flex-col justify-between bg-[#00000025] ">
      <div className="md:w-full md:h-[20%] w-full h-[20%] flex items-center justify-center  ">  
      <div className="w-[95%]  h-[85%] "> 
      <img className="md:w-[15%] w-[25%]" src={osplLogo} alt="" />
       </div> 
        </div>



      <div className="w-full h-[60%]  flex items-center justify-center ">
        <div className="  md:w-[95%] md:h-[85%] w-[100%] h-[100%]  flex justify-between ">


       {/** Links part */}
          <div className="   md:w-[33%] md:h-[100%] w-[33%] h-[100%]  flex flex-col justify-around  ">
            <div className="w-full h-[20%] flex items-center">
              <h1 className="md:text-[1.2vw] md:font-[500] text-[4vw] tracking-widest font-[500] ">Links</h1>
            </div>
            <div className=" w-full h-[10%]  flex items-center ">
              <Link to="/" className="md:text-[1.2vw] text-[2.5vw]">Home</Link>
            </div>
            <div className="w-full h-[10%]  flex items-center ">
              <Link to="/aboutus" className="md:text-[1.2vw] text-[2.5vw]" >About Us</Link>
            </div>
            <div className="w-full h-[10%] flex items-center ">
              <Link to="/productpage" className="md:text-[1.2vw] text-[2.5vw]" >Products</Link>
            </div>
            <div className="w-full h-[10%] flex items-center ">
              <Link  className="md:text-[1.2vw] text-[2.5vw]" >Contact Us</Link>
            </div>
          </div>


       {/** Privacy part */}

          <div className="md:w-[33%] md:h-[100%] w-[33%] h-[100%]  ">
            <div className="w-[100%] h-[100%]  flex flex-col justify-around  ">
              <div className="w-full h-[20%] flex items-center">
                <h1 className="md:text-[1.2vw] md:font-[500] text-[4vw] tracking-widest font-[500]">Privacy</h1>
              </div>
              <div className=" w-full h-[10%]  flex items-center ">
                <Link className="md:text-[1.2vw] text-[2.5vw]">Privacy Policy</Link>
              </div>
              <div className=" w-full h-[10%]  flex items-center ">
                <Link className="md:text-[1.2vw] text-[2.5vw]"  >Terms and Conditions</Link>
              </div>
              <div className=" w-full h-[10%]  flex items-center ">
                <Link className="md:text-[1.2vw] text-[2.5vw]" >Refund Policy</Link>
              </div>
          
            </div>
          </div>


       {/** Contact part */}
          <div className="md:w-[33%] md:h-[100%] w-[33%] h-[100%] ">
            <div className="w-[100%] h-[100%]  flex flex-col justify-around   ">
              <div className="w-full h-[20%] flex items-center ">
                <h1 className="md:text-[1.5vw] text-[4vw] tracking-widest font-[400]">Contact</h1>
              </div>
              <div className=" w-full h-[10%]  flex items-center ">
                <Link  className="md:text-[1.2vw] text-[2.5vw]">+91 8602800258</Link>
              </div>
              <div className=" w-full h-[10%]  flex items-center ">
                <Link  to="https://mail.google.com/" target="_blank" rel="noopener noreferrer" className="md:text-[1.2vw] text-[2.5vw]" >info@optimanage.co.in</Link>
              </div>
              <div className="md:w-[20%]  md:h-[15%] w-[60%] h-[15%] flex items-center justify-between ">
                <Link  to="https://www.instagram.com/optimanage.co.in/" target="_blank" rel="noopener noreferrer"   className="md:text-[1.4vw] text-[4.5vw]" ><FaInstagram /></Link>
                <Link className="md:text-[1.4vw] text-[4.5vw]" ><FaWhatsapp/></Link>
                <Link to="https://www.linkedin.com/company/optimanage/mycompany/" target="_blank" rel="noopener noreferrer"  className="md:text-[1.4vw] text-[4.5vw]" ><CiLinkedin /> </Link>
              </div>
             
            </div>

          </div>

        </div>
      </div>
      <div className="w-full h-[15%]  flex items-center justify-center ">
       <div className="  ">
       <h5 className="md:text-[1.2vw] text-[2.5vw] "  >OptiManage Software Private Limited 2023</h5>
       </div>
      
      
      </div>

    </div>
  )
}

export default Footer
