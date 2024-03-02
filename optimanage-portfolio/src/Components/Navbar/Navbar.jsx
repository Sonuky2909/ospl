import { Link } from "react-router-dom"
import osplLogo from "../../assets/osplLogo.svg"
import { IoIosSearch } from "react-icons/io";
import { PiBellRingingLight } from "react-icons/pi";



function Navbar() {
    return (
        <div className='md:w-full md:h-[10vh]  md:bg-[#f9f8f8] md:flex  flex w-full bg-[#f9f8f8]  h-[10vh]'>
            <div className="md:w-[15%] md:h-[100%]  flex items-center justify-center  w-[25%] h-[100%]">
                <Link to='/'>  <img src={osplLogo} alt="" /></Link>
            </div>
            <div className="  md:w-[55%] md:h-[100%] w-[35%]  h-[100%]  ">
                <div className="md:w-[45%] md:h-[100%] w-[100%] h-[100%] flex items-center justify-around ">
                    <div className="md:text-[1.2vw] text-[1.8vw]"><Link to="/aboutus">About us</Link></div>
                    <div className="md:text-[1.2vw] text-[1.8vw]"><Link to="/productpage">Products</Link></div>
                    <div className="md:text-[1.2vw] text-[1.8vw]" ><Link to="/contactus">Contact</Link></div>
                </div>
            </div>
            <div className="md:w-[30%] md:h-[100%]  md:flex md:justify-center md:items-start w-[40%] h-[100%]   flex justify-center items-start ">
                <div className=" md:w-[80%] md:h-[100%]  md:flex   w-[90%] h-[100%]  flex" >

                    <div className="md:w-[30%] md:h-[100%]  md:flex md:items-center md:justify-around   w-[30%] h-[100%]  flex items-center justify-around">
                        <div className="md:text-[1.8vw]  md:font-[600]  text-[4.5vw]  font-[600]"><IoIosSearch /></div>
                        <div className="md:text-[1.8vw]  text-[4.5vw] "><PiBellRingingLight /></div>
                    </div>

                    <div className="md:w-[70%] md:h-[100%]  md:flex md:justify-around md:items-center  w-[70%] h-[100%]  flex justify-around items-center">
                        <div className="md:w-[45%] md:h-[55%] md:rounded-[5vw] md:border-[#21718E] md:border-2 w-[45%] h-[30%] rounded-[5vw] border-[#21718E] border-2 hover:bg-[#f1eaea] transition duration-150 ease-out hover:ease-in "><Link className="w-[100%] h-[100%] flex items-center justify-center md:text-[1.3vw] text-[2.5vw]  ">Login</Link> </div>
                        <div className="md:w-[45%] md:h-[60%]   w-[45%] h-[30%] rounded-[5vw]   bg-[#20718f]  hover:bg-[#3086a6] transition duration-150 ease-out hover:ease-in"> <Link className="w-[100%] h-[100%] flex items-center justify-center md:text-[1.3vw] text-[2.5vw] text-white ">Sign up</Link>  </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
