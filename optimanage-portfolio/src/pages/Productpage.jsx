import productPageImg from "../assets/productPageImg.png"
import { GiHumanPyramid } from "react-icons/gi";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { VscProject } from "react-icons/vsc";
import { LiaHotelSolid } from "react-icons/lia";
import { GoLaw } from "react-icons/go";
import { FaMoneyBillWave } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { GiChessQueen } from "react-icons/gi";
import { MdHomeRepairService } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoMdAnalytics } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect } from "react";


function Productpage() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-[100vh] ">
      <div className="md:w-full md:h-[100vh] h-[50vh] w-full   flex flex-col  items-center justify-between">
        <div className="w-[90%] h-[80%]  md:flex md:flex-row flex flex-col-reverse">
          <div className="md:w-[40%] md:h-[100%] w-[100%] h-[50%] flex items-center justify-center">
            <h1 className="md:text-[2.5vw] text-[5vw] font-[700] tracking-wider ">Here’s all the things <br /> you will need</h1>
          </div>
          <div className="md:w-[40%] md:h-[100%] w-[100%] h-[50%] flex items-center justify-center ">
            <img src={productPageImg} className="md:w-[100%] w-[85%]" alt="" />
          </div>
        </div>
        <div className="md:w-[90%] md:h-[15%] w-[100%] h-[12%]  flex items-center justify-between">
          <div className="w-[0.8%] h-[90%] bg-[#21718E]"></div>
          <div className="w-[99%] h-[90%]  flex items-center">
            <h1 className="md:text-[2vw] font-[600] tracking-widest">Our products</h1>
          </div>
        </div>

      </div>

      <div className="w-full min-h-[120vh] flex justify-center ">
        <div className="w-[90%] min-h-[100%] md:grid md:grid-rows-4 md:grid-cols-3  md:items-center md:justify-items-center   grid grid-rows-6 grid-cols-2  items-center justify-items-center">

          <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]  rounded-lg  flex items-center justify-center">
            <Link className="w-full h-[100%]" to="/hrmanangement">
              <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
                <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%] flex items-center  md:justify-center justify-center  md:text-[3vw] text-[4vw] "><GiHumanPyramid /></div>
                <div className="md:w-[70%] md:h-[100%] w-[60%] h-[100%]    ">
                  <div className="w-full h-[50%]  flex items-end ">
                    <h1 className="md:text-[1.5vw] text-[3.5vw] font-[600]">Humans</h1>
                  </div>
                  <div className="w-full h-[50%]  flex items-start justify-start ">
                    <h5 className="text-left md:text-[1vw] text-[1.8vw] ">Revolutionizing HR: Empower Success, Enable Talent.</h5>
                  </div>
                </div>
              </button>
            </Link>
          </div>

          <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]  rounded-lg  flex items-center justify-center">
            <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
              <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%] flex items-center  md:justify-center justify-center  md:text-[3vw] text-[4vw] "><IoFileTrayFullOutline /></div>
              <div className="md:w-[70%] md:h-[100%] w-[80%] h-[100%]     ">
                <div className="md:w-full md:h-[50%] w-[100%] h-[50%] flex items-end ">
                  <h1 className="md:text-[1.2vw] text-[2.4vw] font-[600]">Security and IT management</h1>
                </div>
                <div className="w-full h-[50%]  flex items-start justify-start ">
                  <h5 className="text-left md:text-[1vw] text-[1.5vw] ">Coming soon...</h5>
                </div>
              </div>
            </button>
          </div>

          <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]  rounded-lg  flex items-center justify-center">
            <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
              <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%] flex items-center  md:justify-center justify-center  md:text-[3vw] text-[4vw] "><VscProject /></div>
              <div className="md:w-[70%] md:h-[100%] w-[60%] h-[100%]    ">
                <div className="w-full h-[50%]  flex items-end ">
                  <h1 className="md:text-[1.2vw] text-[2.4vw] font-[600]">Project management</h1>
                </div>
                <div className="w-full h-[50%]  flex items-start justify-start ">
                  <h5 className="text-left md:text-[1vw] text-[1.5vw] ">Coming soon...</h5>
                </div>
              </div>
            </button>
          </div>


          <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]  rounded-lg  flex items-center justify-center">
            <Link className="w-full h-[100%]" to="/hotelmanagement">
              <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
                <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%] flex items-center  md:justify-center justify-center  md:text-[3vw] text-[4vw] ">
                  <LiaHotelSolid />
                </div>
                <div className="md:w-[70%] md:h-[100%] w-[60%] h-[100%]    ">
                  <div className="w-full h-[50%]  flex items-end ">
                    <h1 className="md:text-[1.2vw] text-[3vw] font-[600]">Hotels</h1>
                  </div>
                  <div className="w-[80%] h-[50%]  flex items-start justify-start ">
                    <h5 className="text-left md:text-[1vw] text-[1.8vw] ">Streamlining Hospitality, One Click at a Time.</h5>
                  </div>
                </div>
              </button>
            </Link>
          </div>


          <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]  rounded-lg  flex items-center justify-center">
            <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
              <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%] flex items-center  md:justify-center justify-center  md:text-[3vw] text-[4vw] ">
                <GoLaw />
              </div>
              <div className="md:w-[70%] md:h-[100%] w-[60%] h-[100%]    ">
                <div className="w-full h-[50%]  flex items-end ">
                  <h1 className="md:text-[1.2vw] text-[3vw] font-[600]">Legal</h1>
                </div>
                <div className="w-full h-[50%]  flex items-start justify-start ">
                  <h5 className="text-left md:text-[1vw] text-[1.5vw] ">Coming soon...</h5>
                </div>
              </div>
            </button>
          </div>


          <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]  rounded-lg  flex items-center justify-center">
            <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
              <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%] flex items-center  md:justify-center justify-center  md:text-[3vw] text-[4vw] ">
                <FaMoneyBillWave />
              </div>
              <div className="md:w-[70%] md:h-[100%] w-[60%] h-[100%]    ">
                <div className="w-full h-[50%]  flex items-end ">
                  <h1 className="md:text-[1.2vw] text-[3vw] font-[600]">Finance</h1>
                </div>
                <div className="w-full h-[50%]  flex items-start justify-start ">
                  <h5 className="text-left md:text-[1vw] text-[1.5vw] ">Coming soon...</h5>
                </div>
              </div>
            </button>
          </div>




          <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]  rounded-lg  flex items-center justify-center">
            <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
              <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%] flex items-center  md:justify-center justify-center  md:text-[3vw] text-[4vw] ">
                <GoGraph />
              </div>
              <div className="md:w-[70%] md:h-[100%] w-[60%] h-[100%]    ">
                <div className="w-full h-[50%]  flex items-end ">
                  <h1 className="md:text-[1.2vw] text-[3vw] font-[600]">Sales</h1>
                </div>
                <div className="w-full h-[50%]  flex items-start justify-start ">
                  <h5 className="text-left md:text-[1vw] text-[1.5vw] ">Coming soon...</h5>
                </div>
              </div>
            </button>
          </div>


          <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]  rounded-lg  flex items-center justify-center">
            <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
              <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%] flex items-center  md:justify-center justify-center  md:text-[3vw] text-[4vw] ">
                <GiChessQueen />
              </div>
              <div className="md:w-[70%] md:h-[100%] w-[60%] h-[100%]    ">
                <div className="w-full h-[50%]  flex items-end ">
                  <h1 className="md:text-[1.2vw] text-[3vw] font-[600]">Suites</h1>
                </div>
                <div className="w-full h-[50%]  flex items-start justify-start ">
                  <h5 className="text-left md:text-[1vw] text-[1.5vw] ">Coming soon...</h5>
                </div>
              </div>
            </button>
          </div>

          <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]  rounded-lg  flex items-center justify-center">
            <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
              <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%] flex items-center  md:justify-center justify-center  md:text-[3vw] text-[4vw] ">
                <MdHomeRepairService />
              </div>
              <div className="md:w-[70%] md:h-[100%] w-[60%] h-[100%]    ">
                <div className="w-full h-[50%]  flex items-end ">
                  <h1 className="md:text-[1.2vw] text-[3vw] font-[600]">Service</h1>
                </div>
                <div className="w-full h-[50%]  flex items-start justify-start ">
                  <h5 className="text-left md:text-[1vw] text-[1.5vw] ">Coming soon...</h5>
                </div>
              </div>
            </button>
          </div>

          <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]  rounded-lg  flex items-center justify-center">
            <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
              <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%] flex items-center  md:justify-center justify-center  md:text-[3vw] text-[4vw] ">
                <RiShoppingCartLine />
              </div>
              <div className="md:w-[70%] md:h-[100%] w-[60%] h-[100%]    ">
                <div className="w-full h-[50%]  flex items-end ">
                  <h1 className="md:text-[1.2vw] text-[3vw] font-[600]">Marketing</h1>
                </div>
                <div className="w-full h-[50%]  flex items-start justify-start ">
                  <h5 className="text-left md:text-[1vw] text-[1.5vw] ">Coming soon...</h5>
                </div>
              </div>
            </button>
          </div>

          <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]  rounded-lg  flex items-center justify-center">
            <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
              <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%] flex items-center  md:justify-center justify-center  md:text-[3vw] text-[4vw] ">
                <IoMdAnalytics />
              </div>
              <div className="md:w-[70%] md:h-[100%] w-[60%] h-[100%]    ">
                <div className="w-full h-[50%]  flex items-end ">
                  <h1 className="md:text-[1.2vw] text-[3vw] font-[600]">BI  & Analytics</h1>
                </div>
                <div className="w-full h-[50%]  flex items-start justify-start ">
                  <h5 className="text-left md:text-[1vw] text-[1.5vw] ">Coming soon...</h5>
                </div>
              </div>
            </button>
          </div>

        </div>
      </div>




      <div className="md:w-full md:h-[100vh] w-full h-[30vh]  flex items-center justify-center  ">
        <div className="md:w-[50%] md:h-[70%] w-[50%] h-[60%] flex flex-col  ">
          <div className="w-full h-[33%]  flex items-center justify-evenly ">
            <div className="md:w-[35%] md:h-[40%] w-[45%] h-[40%] bg-[#DE6164] rounded-md">
              <button className="w-full h-[100%] rounded-md  text-white md:text-[1.3vw]  flex items-center justify-center text-[2.5vw] font-[600]">SIGN UP</button>
            </div>



            <div className="md:w-[35%] md:h-[40%] w-[45%] h-[40%] bg-[#DE6164] rounded-md">
              <Link to="/contactus" >    <button className="w-full h-[100%] rounded-md  text-white md:text-[1.3vw]  flex items-center justify-center text-[2.5vw] font-[600]">Contact us</button></Link>
            </div>

          </div>
          <div className="w-full h-[33%]   flex items-center justify-center">
            <h5 className="md:text-[1.8vw] text-[3vw] text-center  tracking-wide">Let’s get your work done in the best way</h5>
          </div>
          <div className="w-full h-[33%]  flex items-center justify-center ">
            <div className="w-[35%] h-[40%] bg-[#3E0069] rounded-md">
              <button className="w-full h-[100%] rounded-md  text-white md:text-[1.3vw]  flex items-center justify-center text-[2vw] font-[600]">Contact us!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productpage
