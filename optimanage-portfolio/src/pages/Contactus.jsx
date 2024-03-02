
import instagram from "../assets/instagram.png"
import whatsapp from "../assets/whatsapp.png"
import linkedin from "../assets/linkedin.png"
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Contactus() {
    const [newres, setres] = useState("")

    async function submitHandler(e) {
        e.preventDefault()

        try {
            const data = {
                name: e.target.name.value,
                email: e.target.email.value,
                number: e.target.number.value,
                message: e.target.message.value
            }
            // https://good-teal-cougar-sock.cyclic.app/
            const a = await axios.post("https://good-teal-cougar-sock.cyclic.app/user/sendmail", data)
            
            setres(a.data.message)
        } catch (error) {
            setres("Error try again later")
        }
     
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-[100vh] ">
            <div className="md:w-[100%] md:h-[100vh] w-[100%] h-[95vh] bg-[#025E7F] md:flex md:flex-row flex-col " >
                <div className="md:w-[50%] md:h-[100%] w-[100%] h-[50%]  flex items-center md:justify-start justify-center">
                    <div className="md:w-[60%] md:h-[50%] w-[60%] h-[60%]   ">
                        <div className="w-full h-[20%]  flex items-center justify-start  ">
                            <h1 className="md:text-[2.5vw] md:font-[900]  text-[#FFFFFF] tracking-wider pl-[1.2vw]">Contact Us</h1>
                        </div>
                        <div className="w-full h-[60%]  flex flex-col justify-around  items-center ">
                            <div className="w-[90%] h-[32%]  bg-[#297792] flex rounded-lg">
                                <div className="w-[20%] h-[100%]  flex items-center justify-center md:text-[2vw] text-[3vw] text-white">
                                    <MdOutlineWifiCalling3 />
                                </div>
                                <div className="w-[80%] h-[100%]  flex items-center">
                                    <h5 className="md:text-[1vw] text-[2.5vw] text-white">+91 86028 00258</h5>
                                </div>
                            </div>
                            <div className="w-[90%] h-[32%] bg-[#297792]  flex rounded-lg">
                                <div className="w-[20%] h-[100%] flex items-center justify-center md:text-[2vw] text-[3vw] text-white">
                                    <IoMailOpenOutline />
                                </div>
                                <div className="w-[80%] h-[100%]  flex items-center">
                                    <h5 className="md:text-[1vw] text-[2.5vw] text-white">
                                        info@optimanage.co.in</h5>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[20%]  flex items-center justify-center ">

                            <div className="w-[90%] h-[100%]  flex items-center justify-evenly ">
                                <div className="w-[20%] h-[95%] rounded-lg bg-[#297792] flex items-center justify-center">
                                    <Link to="https://www.instagram.com/optimanage.co.in/" target="_blank" rel="noopener noreferrer" >    <img src={instagram} className="md:w-[60px] w-[25px]" alt="" /> </Link>
                                </div>
                                <div className="w-[20%] h-[95%] rounded-lg bg-[#297792] flex items-center justify-center">
                                    <Link to="https://wa.me/+919685812241" target="_blank" rel="noopener noreferrer"  >  <img src={whatsapp} className="md:w-[60px] w-[25px]" alt="" /> </Link>
                                </div>
                                <div className="w-[20%] h-[95%] rounded-lg bg-[#297792] flex items-center justify-center">
                                    <Link to="https://www.linkedin.com/company/optimanage/mycompany/" target="_blank" rel="noopener noreferrer"  > <img src={linkedin} className="md:w-[60px] w-[25px]" alt="" /></Link>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="md:w-[50%] md:h-[100%] w-[100%] h-[50%] flex items-center justify-center ">

                    <div className="md:w-[80%] md:h-[65%] w-[90%] h-[80%] bg-[#D1D1D1] flex flex-col items-center justify-center rounded-sm ">
                        <div className="w-full h-[5%] flex items-center justify-center">
                        <p className={`${newres === "Error Try Again" || newres === "Error try again later" ? "md:text-[1.2vw] font-[600] text-[#DC3545] tracking-wider" : '  tracking-wider md:text-[1.2vw] font-[600]   text-[#008000]'}`}>
                        {newres}
                      </p>
                        </div>
                        <div className="w-[90%] h-[90%]  ">
                            <form action="" className=" w-[100%] h-[100%] flex flex-col justify-evenly " onSubmit={submitHandler}>
                                <input className="w-[100%] pl-[1vw] required  outline-none h-[12%] rounded-lg" type="text" required name="name" placeholder="Full Name" />
                                <input className="w-[100%] pl-[1vw]  required  outline-none  h-[12%] rounded-lg" type="email" required name="email" placeholder="Email" />
                                <input className="w-[100%] pl-[1vw]  required outline-none  h-[12%] rounded-lg"  min="10" max="13" required type="text" name="number" placeholder="Phone Number" />
                                <textarea className="w-[100%] pl-[1vw]  outline-none   h-[30%] rounded resize-none " name="message" placeholder="Your message" id="" cols="30" rows="10"></textarea>
                                <div className="w-[100%] h-[12%] flex items-center justify-center">
                                    <button className="w-[50%] h-[100%] bg-[#025E7F] rounded-lg text-white tracking-widest md:text-[1.5vw] text-[3.5vw] font-[600]">Let’s connect</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>

            <div className="md:w-full md:h-[100vh] w-full h-[40vh]  flex items-center justify-center">
                <div className="w-[50%] h-[50%] bg-[#d1d1d13f]  ">
                    <div className="w-full h-[20%]  flex items-center justify-center ">
                        <h1 className="text-[2vw] tracking-wide font-[500]">Book a free Demo</h1>
                    </div>
                    <div className="w-full h-[70%]  flex items-center justify-center ">
                        <div className="w-[30%] h-[25%] bg-[#025E7F] rounded-md ">
                            <Link className="w-full h-[100%] text-[2vw] font-[600] flex items-center text-white justify-center " >SIGN UP</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus
