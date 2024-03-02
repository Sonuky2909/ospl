import youngImg from "../assets/cheerful-young.svg"
import { LiaHotelSolid } from "react-icons/lia";
import { FaChevronRight } from "react-icons/fa6";
import { GiArcheryTarget } from "react-icons/gi";
import { TbDeviceVisionPro } from "react-icons/tb";
import { GiHumanPyramid } from "react-icons/gi";
import { GiCrystalGrowth } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineMiscellaneousServices } from "react-icons/md"
import cisco from "../assets/cisco.png"
import startupindia from "../assets/start-up-india.png"
import MSMELogo from "../assets/MSME-Logo.png"
import { Link } from "react-router-dom";
import { useEffect } from "react";


function Homepage() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-[100vh] ">
      <div className="md:w-full md:h-[100vh]  md:flex md:items-start md:justify-center w-full h-[40vh]  flex items-center justify-center ">
        <div className="w-[95%] h-[85%]  flex ">
          <div className="w-[50%] h-[100%]  flex flex-col">
            <div className="w-full h-[50%]  flex items-end justify-start">
              <h1 className="md:text-[3vw] md:font-[400] text-[#06384A] md:leading-[7vh] md:tracking-wide text-[3.5vw] font-[400] leading-[3vh] tracking-wide">
                Empowering Efficiency,<br />
                Elevating Management <br />
                Your Solution, Our Expertise!
              </h1>
            </div>
            <div className="w-full h-[50%]  ">
              <div className="w-full h-[50%]  flex items-center ">
                <div className="md:w-[40%] md:h-[45%] bg-[#045E2E] rounded-xl w-[55%] h-[40%] ">
                  <button className="w-full h-[100%] rounded-[1.5vw] text-[1.8vw] font-[600] text-white flex items-center justify-center">Book a free demo</button>
                </div>
              </div>
            </div>

          </div>
          <div className={`w-[50%] h-[100%]  md:bg-no-repeat md:bg-center md:bg-[length:500px_700px]  bg-no-repeat bg-center bg-[length:500px_200px] `} style={{ backgroundImage: `url(${youngImg})` }}>

            <div className="w-full h-[30%]  flex items-end  ">
              <div className="w-full h-[50%]  flex items-end">
                <div className="md:w-[32%] md:h-[60%] bg-[#025E7F] rounded-lg flex items-center justify-center w-[35%] h-[55%] ">
                  <h5 className="text-white md:text-[1.2vw] text-[1.5vw]"> High performance</h5>
                </div>
              </div>
            </div>


            <div className="w-full h-[30%]   flex items-end">
              <div className="w-full h-[50%]   flex items-end justify-end ">
                <div className="md:w-[32%] md:h-[60%] w-[35%] h-[55%]  bg-[#057137] rounded-lg  flex items-center justify-center  " >
                  <h5 className="text-white md:text-[1.2vw] text-[1.5vw]">Cost effective</h5>
                </div>
              </div>

            </div>
            <div className="w-full h-[40%]  flex items-center " >
              <div className="w-full h-[30%]  flex items-center   ">
                <div className="w-[50%] h-[100%]  flex items-center md:justify-center justify-start ">
                  <div className="md:w-[50%] md:h-[75%] w-[60%] h-[60%] bg-[#3E0069] rounded-lg flex items-center justify-center">
                    <h5 className="text-white md:text-[1.2vw] text-[1.5vw] ">Advance tech</h5>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="md:w-full md:h-[100vh] w-full h-[50vh]  ">
        <div className="w-full h-[10%]  flex items-center justify-center">
          <h1 className="md:text-[2vw] text-[4vw] md:font-[400] font-[500]">Our Softwares</h1>
        </div>

        <div className="w-full h-[70%]  flex items-center justify-center ">
          <div className="md:w-[95%] md:h-[90%] w-[100%] h-[90%] grid grid-rows-2 grid-cols-3 items-center justify-items-center   ">


            <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]    flex items-center justify-center">
             <Link className="w-full h-[100%]" to="/hotelmanagement"> <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
                <div className="md:w-[20%] md:h-[100%] w-[20%] h-[100%] flex items-center md:justify-end justify-center  md:text-[3vw] text-[4vw] ">< LiaHotelSolid /></div>
                <div className="md:w-[55%] md:h-[100%] w-[60%] h-[100%]    ">
                  <div className="w-full h-[50%]  flex items-end">
                    <h1 className="md:text-[1.5vw] text-[3.5vw] font-[600]">Hotels</h1>
                  </div>
                  <div className="w-full h-[50%]  flex items-start justify-start ">
                    <h5 className="text-left md:text-[1vw] text-[1.5vw] ">Streamlining Hospitality, One Click at a Time.</h5>
                  </div>

                </div>
                <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%]   flex items-center justify-center">
                  <div className="md:w-[55%] md:h-[30%] w-[65%] h-[25%] bg-[#025E7F] rounded-lg flex items-center justify-center text-white text-[1.3vw]"><FaChevronRight /></div>
                </div>

              </button>
              </Link>
            </div>



            <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]    flex items-center justify-center">
            <Link className="w-full h-[100%]" to="/hrmanangement">  <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
                <div className="md:w-[20%] md:h-[100%] w-[20%] h-[100%] flex items-center md:justify-end justify-center  md:text-[3vw] text-[4vw] ">< GiHumanPyramid /></div>
                <div className="md:w-[55%] md:h-[100%] w-[60%] h-[100%]    ">
                  <div className="w-full h-[50%]  flex items-end">
                    <h1 className="md:text-[1.5vw] text-[3.5vw] font-[600]">Humans</h1>
                  </div>
                  <div className="w-full h-[50%]  flex items-start justify-start ">
                    <h5 className="text-left md:text-[1vw] text-[1.5vw] ">Revolutionizing HR: Empower Success, Enable Talent.</h5>
                  </div>

                </div>
                <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%]   flex items-center justify-center">
                  <div className="md:w-[55%] md:h-[30%] w-[65%] h-[25%] bg-[#025E7F] rounded-lg flex items-center justify-center text-white text-[1.3vw]"><FaChevronRight /></div>
                </div>

              </button>
              </Link>
            </div>
            <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]    flex items-center justify-center">
              <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
                <div className="md:w-[20%] md:h-[100%] w-[20%] h-[100%] flex items-center md:justify-end justify-center  md:text-[3vw] text-[4vw] "><GiCrystalGrowth /></div>
                <div className="md:w-[55%] md:h-[100%] w-[60%] h-[100%]    ">
                  <div className="w-full h-[50%]  flex items-end">
                    <h1 className="md:text-[1.5vw] text-[3.5vw] font-[600]">Sales</h1>
                  </div>
                  <div className="w-full h-[50%]  flex items-start justify-start ">
                    <h5 className="text-left md:text-[1vw] text-[1.5vw] ">Coming soon...</h5>
                  </div>

                </div>
                <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%]   flex items-center justify-center">
                  <div className="md:w-[55%] md:h-[30%] w-[65%] h-[25%] bg-[#025E7F] rounded-lg flex items-center justify-center text-white text-[1.3vw]"><FaChevronRight /></div>
                </div>

              </button>
            </div>
            <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]    flex items-center justify-center">
              <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
                <div className="md:w-[20%] md:h-[100%] w-[20%] h-[100%] flex items-center md:justify-end justify-center  md:text-[3vw] text-[4vw] "><GoLaw /></div>
                <div className="md:w-[55%] md:h-[100%] w-[60%] h-[100%]    ">
                  <div className="w-full h-[50%]  flex items-end">
                    <h1 className="md:text-[1.5vw] text-[3.5vw] font-[600]">Legal</h1>
                  </div>
                  <div className="w-full h-[50%]  flex items-start justify-start ">
                    <h5 className="text-left md:text-[1vw] text-[1.5vw] ">Coming soon...</h5>
                  </div>

                </div>
                <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%]   flex items-center justify-center">
                  <div className="md:w-[55%] md:h-[30%] w-[65%] h-[25%] bg-[#025E7F] rounded-lg flex items-center justify-center text-white text-[1.3vw]"><FaChevronRight /></div>
                </div>

              </button>
            </div>
            <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]    flex items-center justify-center">
              <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
                <div className="md:w-[20%] md:h-[100%] w-[20%] h-[100%] flex items-center md:justify-end justify-center  md:text-[3vw] text-[4vw] "><GiReceiveMoney /></div>
                <div className="md:w-[55%] md:h-[100%] w-[60%] h-[100%]    ">
                  <div className="w-full h-[50%]  flex items-end">
                    <h1 className="md:text-[1.5vw] text-[3.5vw] font-[600]">Finance</h1>
                  </div>
                  <div className="w-full h-[50%]  flex items-start justify-start ">
                    <h5 className="text-left md:text-[1vw] text-[1.5vw] ">Coming soon...</h5>
                  </div>

                </div>
                <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%]   flex items-center justify-center">
                  <div className="md:w-[55%] md:h-[30%] w-[65%] h-[25%] bg-[#025E7F] rounded-lg flex items-center justify-center text-white text-[1.3vw]"><FaChevronRight /></div>
                </div>

              </button>
            </div>
            <div className="md:w-[80%] md:h-[70%] w-[90%] h-[50%]    flex items-center justify-center">
              <button className="w-full h-[100%] bg-[#c9c9c923]  flex ">
                <div className="md:w-[20%] md:h-[100%] w-[20%] h-[100%] flex items-center md:justify-end justify-center  md:text-[3vw] text-[4vw] "> <MdOutlineMiscellaneousServices /> </div>
                <div className="md:w-[55%] md:h-[100%] w-[60%] h-[100%]    ">
                  <div className="w-full h-[50%]  flex items-end">
                    <h1 className="md:text-[1.5vw] text-[3.5vw] font-[600]">Services</h1>
                  </div>
                  <div className="w-full h-[50%]  flex items-start justify-start ">
                    <h5 className="text-left md:text-[1vw] text-[1.5vw] ">Coming soon...</h5>
                  </div>

                </div>
                <div className="md:w-[30%] md:h-[100%] w-[20%] h-[100%]   flex items-center justify-center">
                  <div className="md:w-[55%] md:h-[30%] w-[65%] h-[25%] bg-[#025E7F] rounded-lg flex items-center justify-center text-white text-[1.3vw]"><FaChevronRight /></div>
                </div>

              </button>
            </div>





          </div>
        </div>

        <div className="w-full h-[20%]  flex items-center justify-center ">
          <div className="md:w-[20%] md:h-[45%]  w-[30%] h-[30%] bg-[#025E7F] rounded-lg ">
            <button className="w-full h-[100%] rounded-lg text-white md:text-[1.5vw] text-[2vw] font-[500] flex items-center justify-center">View all products</button>
          </div>
        </div>

      </div>


      <div className="md:w-full md:h-[100vh] w-full h-[35vh] ">
        <div className="w-full h-[20%]  flex items-center justify-center">
          <h1 className="md:text-[2.5vw] text-[3.5vw] font-[600]">Our Values</h1>
        </div>
        <div className="w-full h-[80%]  flex items-center justify-center">

          <div className="md:w-[70%] md:h-[100%]  w-[80%] h-[100%] flex justify-between ">
            <div className="w-[45%] h-[90%]  rounded-lg  flex flex-col items-center justify-center bg-[#EFEFEF]">
              <div className="w-[90%] h-[15%]  flex items-end md:text-[4vw] text-[5vw]">
                <GiArcheryTarget />
              </div>
              <div className="w-[90%] h-[15%]  flex items-center">
                <h1 className="md:text-[2vw]  text-[3vw] font-[500]">Our Mission</h1>
              </div>
              <div className="w-[90%] h-[70%] ">
                <p className=" text-left md:text-[1.2vw] text-[1.6vw] md:leading-15 md:tracking-widest tracking-wider">
                  Our mission is to empower our clients with state of the art software solutions tailored to their specific needs, ultimately enhancing productivity, decision-making capabilities, and customer satisfaction. We strive to be at the forefront of technological advancements and lead the way in providing cutting edge software and IoT solutions.
                </p>
              </div>

            </div>


            <div className="w-[45%] h-[90%]  rounded-lg  flex flex-col items-center justify-center bg-[#EFEFEF]">
              <div className="w-[90%] h-[15%]  flex items-end md:text-[4vw] text-[5vw]">
                <TbDeviceVisionPro />
              </div>
              <div className="w-[90%] h-[15%] flex items-center">
                <h1 className="md:text-[2vw]  text-[3vw] font-[500]">Our Vision</h1>
              </div>
              <div className="w-[90%] h-[70%] ">
                <p className="text-left md:text-[1.2vw] text-[1.6vw] md:leading-15 md:tracking-widest tracking-wider">
                  At OptiManage, we envision a world where businesses, hotels, medical facilities and educational institutions operate efficiently, make data-driven decisions, and leverage the power of AI and ML to stay ahead in a rapidly evolving digital landscape.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>



      <div className="md:w-full md:h-[100vh] w-full h-[50vh]   flex flex-col items-center md:justify-normal justify-center">
        <div className="md:w-[90%] md:h-[40%] w-[90%] h-[20%]  flex items-center  justify-evenly  ">

          <div className="w-[50%] h-[70%]   ">
            <div className="w-full h-[30%] "> <h1 className="md:text-[2.5vw] md:font-[600] text-[2.5vw] font-[600]">Our partner</h1></div>
            <div className="w-[100%] h-[70%] ">
              <p className="md:text-[1.5vw] text-[2vw]">Collaboration fuels our essence; partners aren't just connections but the architects of our shared success story.</p>
            </div>
          </div>

          <div className="w-[45%] h-[100%]  flex items-center md:justify-center justify-end">
            <img src={cisco} className="" alt="" />
          </div>
        </div>
        <div className="md:w-[90%] md:h-[40%] w-[90%] h-[30%] flex ">

          <div className="w-[50%]  h-[100%] flex items-center justify-evenly">

            <div className="md:w-[48%] md:h-[60%] w-[48%] h-[50%] bg-[#d1d1d1b0] rounded-lg flex items-center justify-center">
              <img src={startupindia} alt="" />
            </div>

            <div className="md:w-[48%] md:h-[60%] w-[48%] h-[50%] bg-[#d1d1d1b0] rounded-lg flex items-center justify-center">
              <img src={MSMELogo} alt="" />
            </div>

          </div>
          <div className="w-[50%] h-[100%] flex items-center justify-start">
            <div className="md:w-[80%] md:h-[65%] w-[100%] h-[50%] ">
              <div className="w-full h-[40%]  flex justify-end  items-center ">
                <h1 className="md:text-[1.5vw] text-[2.5vw] tracking-wide font-[600] ">Recognized by</h1>
              </div>
              <div className="w-full h-[60%] flex justify-end ">

                <div className="w-[90%] h-[100%]  ">
                  <p className="text-end md:text-[1.2vw] text-[2vw]">Our commitment to excellence has garnered recognition, positioning us as a trailblazer in our industry.</p>
 
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="md:w-full md:h-[100vh] w-full h-[30vh]  flex items-center justify-center  ">
        <div className="md:w-[50%] md:h-[70%] w-[50%] h-[60%] flex flex-col  ">
          <div className="w-full h-[33%]  flex items-center justify-center ">
            <div className="md:w-[35%] md:h-[40%] w-[45%] h-[40%] bg-[#DE6164] rounded-md">
              <button className="w-full h-[100%] rounded-md  text-white md:text-[1.3vw]  flex items-center justify-center text-[2.5vw] font-[600]">More about us</button>
            </div>
          </div>
          <div className="w-full h-[33%]   flex items-center justify-center">
            <h5 className="md:text-[1.8vw] text-[3vw] text-center  tracking-wide">Let’s get your work done in the best way</h5>
          </div>
          <div className="w-full h-[33%]  flex items-center justify-center ">
            <div className="w-[35%] h-[40%] bg-[#3E0069] rounded-md">
             <Link to="/contactus"> <button className="w-full h-[100%] rounded-md  text-white md:text-[1.3vw]  flex items-center justify-center text-[2vw] font-[600]">Contact us!</button></Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Homepage
