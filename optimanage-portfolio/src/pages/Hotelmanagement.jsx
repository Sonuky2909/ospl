import Chatting from "../assets/ChatsCircle.svg";
import Rectangle375 from "../assets/Rectangle 375.png";
import Rectangle376 from "../assets/Rectangle 376.png";
import Rectangle377 from "../assets/Rectangle 377.png";
import Rectangle378 from "../assets/Rectangle 378.png";
import Dashboard from "../assets/Dashboard.jpg";
import Star from "../assets/Vector.png";
import Young from "../assets/young.png";
import Success from "../assets/success.png";
import YoungW from "../assets/youngw.png";
import Heart from "../assets/Heart.svg";
import Book from "../assets/BookmarkSimple.svg";
import Chat from "../assets/ChatCircle.svg";
import Share from "../assets/share.svg";
import Image from "../assets/img.png";
import Switch from '../Components/Switch/Switch'
import { useEffect } from "react";

function Hotelmanagement() {



  
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className="w-full  min-h-[100vh] ">
      {/* ....Main-1...... */}

      <div className="w-[100%] min-h-[20vh] flex flex-col md:flex-row   items-center">
        <div className="w-[50%] min-h-[60vh]  flex items-center justify-center  ">
          <div className="w-[95%] md:ml-12 h-[100%] flex  ">
            <h1 className="text-[6vw] md:text-[2.5vw] font-[700] text-[#025E7F] ">
              Simplify Success, Elevate Hospitality: <br /> Your Complete Hotel
              Solution.
            </h1>
          </div>
        </div>
        <div className="md:w-[38%] ml-[37%] w-[90%] min-h-[70vh] bg-[#D1D1D1] flex  items-center mt-12 mr-8 rounded-md pl-12 ">
          <div className=" md:mb-12  min-h-[70vh]  items-center flex flex-col mr-[20%] justify-center ">
            <form
              action=""
              className="flex  flex-col  justify-center items-start md:ml-[8]  "
            >
              <input
                className=" w-[90%] md:w-[100%] mr-12 pl-2 pt-2 pb-2 rounded-md"
                type="text"
                placeholder="Full Name"
              />
              <input
                className=" w-[90%] md:w-[100%] mt-4 mr-12 pl-2 pt-2 pb-2 rounded-md"
                type="email"
                placeholder="Email"
              />
            </form>
            <form action="" className="flex md:ml-8 ">
              <input
                className=" md:w-[17%] w-[24%] mt-4 md:ml-[5%] pl-2 pt-2 pb-2 rounded-md "
                type="number"
                placeholder="+91"
              />
              <input
                className=" md:w-[60%] w-[64%] mt-4 ml-2 pl-2 pt-2 pb-2 rounded-md"
                type="number"
                placeholder="Phone number"
              />
            </form>
            <form action="" className="flex md:ml-8  ">
              <input type="checkbox" className="mt-2 " />{" "}
              <h6 className="mt-2 ml-2 text-xs">
                I agree to the{" "}
                <span className="font-semibold">Terms and service</span> and{" "}
                <span className="font-semibold">Privacy policies</span>
              </h6>
            </form>
            <button className="w-[83%] mt-4 bg-[#025E7F] p-2 text-[#fff] rounded-md ml-8  hover:bg-[#509cb7] transition duration-150 ease-out hover:ease-in">
              Lets's Start
            </button>
          </div>
        </div>
        <div className=" absolute right-[9%] bottom-8 w-[4%] min-h-[8vh] bg-[#025E7F] rounded-full flex items-center justify-center hover:bg-[#509cb7] transition duration-150 ease-out hover:ease-in ">
          <img src={Chatting} alt="" />
        </div>
      </div>

      {/* ...Main-2..... */}

      <div className="w-full min-h-[70vh] ml-[5vh] md:ml-[0] bg-[#025E7F] mt-[10%] relative ">
        <div className="flex flex-col jutify-center items-center ">
          <h1 className="md:text-[64px] text-[40px] pl-[2vh] f-[400] text-[#FFF] font-serif mt-6">
            All you need is here
          </h1>
          <div className="w-[50%]">
            <p className="text-[18px] w-[22vh] md:w-[70vh] md:ml-[14vh] f-[600] text-[#FF9F2F]  md:text-center">
              Revolutionize your hotel's efficiency with our cutting-edge Hotel
              Management System. Seamlessly streamline reservations, check-ins,
              and guest services while maximizing revenue. Elevate guest
              satisfaction and simplify operations with our comprehensive
              solution tailored for success.
            </p>
          </div>
        </div>
        <div className="w-[100%] min-h-[120vh] relative mt-8">
          <div className="ml-[8%] pt-[5%]">
            <img src={Rectangle375} alt="" />
            <h5 className="w-[14%] text-center text-[#fff]">Inventory</h5>
            <p className="text-[#fff] text-sm">
              Have a track of all the supplies
            </p>
          </div>
          <div className="md:absolute top-[5%] right-[5%] ml-[1vh] mt-[4vh]">
            <img src={Rectangle376} alt="" />
            <h5 className="text-center text-[#fff]">Sentiment Analysis</h5>
            <p className="text-[#fff] text-sm text-center">
              {" "}
              Have a review analysis for better <br /> performance
            </p>
          </div>
          <div className="md:absolute left-[25%] top-[15%] mt-[4vh] ">
            <img className="rounded-md" src={Dashboard} alt="" />
          </div>
          <div className="md:absolute left-[10%] bottom-[20%] mt-[4vh] ml-[3.5vh]">
            <img src={Rectangle377} alt="" />
            <h5 className="text-center text-[#fff]">Comparative Analysis</h5>
            <p className="text-[#fff] text-sm text-center">
              compare in months are see the difference
            </p>
          </div>
          <div className="md:absolute right-[11%] bottom-[11%] mt-[4vh] ml-[0.45vh]">
            <img src={Rectangle378} alt="" />
            <h5 className="text-center text-[#fff]">Historical Revenue</h5>
            <p className="text-[#fff] text-sm text-center">
              compare with years and see your <br /> hard works comes to reality
            </p>
          </div>
        </div>
        <button className="w-[30%] min-h-[7vh] bg-[#3E0069] rounded-md absolute left-[35%] top-[98%] text-[25px] text-[#fff] f-[700] hover:bg-[#7434a1] transition duration-150 ease-out hover:ease-in">
          Sign up to know more
        </button>
      </div>

      {/* ...Main-3.... */}

      <div className="w-full min-h-[70vh] bg-[#fb923c] ml-[2vh] md:ml-[0] mt-[20vh] flex">
        <div className=" w-[50%] min-h-[70vh] flex flex-col justify-evenly  bg-[#fff]">
          <div>
            <h1 className="f-[600] text-[40px] ml-[10%] ">Features</h1>
          </div>
          <div className=" w-[100%] min-h-[50vh] flex flex-col justify-between ">
            <div className="flex justify-evenly items-center ">
              <div className="md:w-[30px] md:h-[30px] w-[60px] bg-[#025E7F] rounded-full text-center text-[#fff]">
                1
              </div>
              <p className="md:w-[35%] ml-[2vh] md:ml-[0]">
                Booking: make new bookings and have details about others.
              </p>
            </div>
            <div className="flex justify-evenly items-center">
              <div className="md:w-[30px] md:h-[30px] w-[60px] bg-[#025E7F] rounded-full text-center text-[#fff]">
                2
              </div>
              <p className="md:w-[35%] ml-[2vh] md:ml-[0]">
                Channel management: Keep all the outsource resources in check..
              </p>
            </div>
            <div className="flex justify-evenly items-center ">
              <div className="md:w-[30px] md:h-[30px] w-[50px] bg-[#025E7F] rounded-full text-center text-[#fff]">
                3
              </div>
              <p className="md:w-[35%] ml-[2vh] md:ml-[0] ">
                Invoice: Have all the invoices ready in hand.
              </p>
            </div>
            <div className="flex justify-evenly items-center ">
              <div className="md:w-[30px]  md:h-[30px] w-[40px] bg-[#025E7F] rounded-full text-center text-[#fff]">
                4
              </div>
              <p className="md:w-[35%] ml-[2vh] md:ml-[0]">Rooms: Check availability of rooms.</p>
            </div>
          </div>
        </div>
        <div className=" w-[50%] min-h-[70vh]  flex flex-col justify-evenly  bg-[#fff]">
          <div className=" w-[100%] min-h-[50vh] ml-[2vh] md:ml-[0] mt-[12vh] md:mt-[0]  flex flex-col justify-between mt-[12%] ">
            <div className="flex justify-evenly items-center ">
              <div className="md:w-[30px] md:h-[30px] w-[60px] bg-[#025E7F] rounded-full text-center text-[#fff]">
                5
              </div>
              <p className="md:w-[35%] ml-[2vh] md:ml-[0]">
                Housekeeping: Check who is in-charge of a room and if all the
                necessities are available.
              </p>
            </div>
            <div className="flex justify-evenly items-center">
              <div className="md:w-[30px] md:h-[30px] w-[60px] bg-[#025E7F] rounded-full text-center text-[#fff]">
                6
              </div>
              <p className="md:w-[35%] ml-[2vh] md:ml-[0]">
                Sentiment analysis: Have feedback from customers and get
                analysis.
              </p>
            </div>
            <div className="flex justify-evenly items-center ">
              <div className="md:w-[30px] md:h-[30px] w-[60px] bg-[#025E7F] rounded-full text-center text-[#fff]">
                7
              </div>
              <p className="md:w-[35%] ml-[2vh] md:ml-[0]">
                Smart room automation: Have controls of electronics through on
                click.
              </p>
            </div>
            <div className="flex justify-evenly items-center ">
              <div className="md:w-[30px] md:h-[30px] w-[25px] bg-[#025E7F] rounded-full text-center text-[#fff]">
                8
              </div>
              <p className="md:w-[35%] ml-[2vh] md:ml-[0]">And so much more...</p>
            </div>
          </div>
        </div>
      </div>

      {/* ....Main-4..... */}

      <div className="w-full min-h-[70vh] mt-[15%] ">
        <div className="  flex justify-center items-center ">
          <h1 className="w-[84%] md:text-[40px] text-[25px] f-[400] text-center">
            Elevate experiences, build trust: <br /> where customer satisfaction
            is not just a promise, but a <br /> commitment in every stay with
            our Hotel Management <br /> System.
          </h1>
        </div>
        <div className=" w-[100] min-h-[85vh]   flex">
          <div className="flex justify-end  w-[30%]">
            <div className="w-[220px] h-[220px] bg-[#E9E9E9] flex flex-col justify-evenly items-center rounded-md">
              <div className=" w-[80%] flex justify-evenly">
                <img src={Young} alt="" />
                <div>
                  <h4 className="text-[18px] text-[#3E0069]">Amit</h4>
                  <h6 className="text-[5%] text-[#3E0069]">
                    30/11/2023-12/12/2023
                  </h6>
                  <div className="flex ">
                    <img className="w-[12px]" src={Star} alt="" />
                    <img className="w-[12px]" src={Star} alt="" />
                    <img className="w-[12px]" src={Star} alt="" />
                    <img className="w-[12px]" src={Star} alt="" />
                    <img className="w-[12px]" src={Star} alt="" />
                  </div>
                </div>
              </div>
              <p className="text-[12px] text-center mb-4">
                "Exceptional stay! <br /> Impeccable service, <br /> perfect
                amenities. <br /> Can't wait to return!"
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-end">
            <img src={Success} alt="" />
          </div>
          <div className="flex justify-end items-end">
            <div className="w-[300px] h-[127px] bg-[#E9E9E9] rounded-md ">
              <div className="flex justify-evenly w-[25%] items-start">
                <img src={YoungW} alt="" />
                <h5 className="text-[#3E0069] text-[15px]">Mia</h5>
              </div>
              <p className="text-[12px] text-start ml-4 mt-4">
                Stay in Escape hotel and it was <br /> wonderful. Try it out
                guys
              </p>
              <div className="flex justify-evenly items-center w-[15px] ml-10 mt-2">
                <img src={Heart} alt="" />
                <img src={Book} alt="" />
                <img src={Chat} alt="" />
                <img src={Share} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* .....Main-5.... */}

      <div className="w-[100%] min-h-[70vh] mt-[15%] flex flex-col md:flex-row items-center">
        <div className="flex flex-col justify-evenly items-center w-[50%]">
          <div>
            <h1 className=" md:text-[40px] f-[400]">
              Why our Hotel management <br /> system?
            </h1>
          </div>
          <div>
            <img src={Image} alt="" />
          </div>
        </div>
        <div className=" w-[50%] min-h-[70vh] ">
          <div className="flex  flex justify-evenly mt-[2vh] md:mt-[0] mb-2">
            <div className="w-[30px] h-[30px] bg-[#025E7F] rounded-full text-center text-[#fff]">
              1
            </div>
            <div className="flex flex-col  md:w-[50%] w-[95%]">
              <h1 className="md:text-[24px] ml-[2vh] text-[20px] f-[700] font-semibold">
                Streamlined Operations
              </h1>
              <p>
                Hotel management systems offer integrated solutions for
                reservations, check-ins, housekeeping, and billing. This
                streamlines day-to-day operations, ensuring smoother guest
                experiences and efficient management of resources.
              </p>
            </div>
          </div>
          <div className="flex  flex justify-evenly mb-2">
            <div className="w-[30px] h-[30px] bg-[#025E7F] rounded-full text-center text-[#fff]">
              2
            </div>
            <div className="flex flex-col md:w-[50%] w-[95%]">
              <h1 className="md:text-[24px] ml-[2vh] text-[20px] f-[700] font-semibold">
                Enhanced Guest Experience
              </h1>
              <p>
                A comprehensive hotel management system can gather and analyze
                guest data, enabling personalized services and targeted
                marketing campaigns. This tailored approach fosters guest
                loyalty and satisfaction, crucial for repeat business.
              </p>
            </div>
          </div>
          <div className="flex  flex justify-evenly mb-2">
            <div className="w-[30px] h-[30px] bg-[#025E7F] rounded-full text-center text-[#fff]">
              3
            </div>
            <div className="flex flex-col  md:w-[50%] w-[95%] ">
              <h1 className="md:text-[24px] ml-[2vh] text-[20px] f-[700] font-semibold">
                Resource Optimization
              </h1>
              <p>
                By automating inventory management, staff scheduling, and
                accounting processes, hotel management systems optimize resource
                allocation. This leads to cost savings, reduced wastage, and
                better utilization of staff skills..
              </p>
            </div>
          </div>
          <div className="flex  flex justify-evenly mb-2">
            <div className="w-[30px] h-[30px] bg-[#025E7F] rounded-full text-center text-[#fff]">
              4
            </div>
            <div className="flex flex-col  md:w-[50%] w-[95%] ">
              <h1 className="md:text-[24px] ml-[2vh] text-[20px] f-[700] font-semibold">
                Real-Time Insights and Reporting
              </h1>
              <p>
                Access to real-time data and analytics allows managers to make
                informed decisions promptly. Insights on occupancy rates,
                revenue per available room (RevPAR), and customer preferences
                facilitate agile strategies to maximize profitability and adapt
                to market trend
              </p>
            </div>
          </div>
        </div>
      </div> 

       {/* ...Main-6... */}

      <div className="md:w-full min-h-[10vh] mt-[5vh] bg-[#FFAF50] flex justify-end items-center">
        <div className=" md:w-[20%] flex justify-center">
        <div className="flex  justify-between md:w-[50%] items-center">
          <h1>Monthly</h1>
          <button><Switch></Switch></button>
          <h1>Yearly</h1>
        </div>
        </div>
      </div>

      {/* ...Main-7.... */}

    
      <div className="w-full min-h-[70vh] flex justify-center mt-[15vh]">
          <div className="w-[25%] min-h-[70vh] bg-[#EAEAEA] rounded-md  hover:bg-[#ebe6e6] transition duration-150 ease-out hover:ease-in">
             <div className="mt-[1vh] ">
              <h1 className="font-semibold text-[1.5vw]  w-[50%] text-center ">
              Plan 1: Basic 
              </h1>
              <p className=" mt-[1vh] w-[60%] text-[0.8vw] text-center">Price: $99/month</p>
             </div>
             <div className="flex flex-col  h-[50vh] justify-evenly">
              <div className="">
                <h5 className=" w-[30%] text-[0.9vw] text-center" >Features:</h5>
              </div>
              <div className="flex justify-center">
                <ul className="flex flex-col  w-[65%] justify-between h-[30vh]" >
                  <li  className=" text-[0.9vw]">• Property management tools <br /> (reservations, check-ins, check-outs).</li>
                  <li className=" text-[0.9vw]">• Room inventory management.</li>
                  <li className=" text-[0.9vw]">• Basic reporting on occupancy and revenue.</li>
                  <li className=" text-[0.9vw]">• Limited customer support (via email).</li>
                  <li className=" text-[0.9vw]">• Up to 50 rooms.</li>
                  <li className=" text-[0.9vw]">• 1 user account.</li>
                </ul>
              </div>
              <div className=" w-full flex justify-center">
                <p className="text-[0.9vw]  w-[66%] ">Ideal for: Small hotels or B&Bs looking for essential management tools.</p>
              </div>
             </div>
             <div className="w-full  flex justify-center">
             <button className="bg-[#3E0069] w-[70%] h-[6vh] text-[white] rounded-md hover:bg-[#7434a1] transition duration-150 ease-out hover:ease-in">Book my trial</button>
             </div>
          </div>
          <div className="w-[25%] min-h-[70vh] bg-[#EAEAEA] rounded-md ml-2 hover:bg-[#ebe6e6] transition duration-150 ease-out hover:ease-in">
          <div className="mt-[1vh]">
              <h1 className="font-semibold text-[1.5vw]  w-[50%] text-center ">
              Plan 2: Pro 
              </h1>
              <p className=" mt-[1vh] w-[60%] text-[0.8vw] text-center">Price: $199/month</p>
             </div>
             <div className="flex flex-col  h-[50vh] justify-evenly">
              <div className="">
                <h5 className=" w-[85%] text-[0.9vw] text-center" >Features:(Includes Basic plan features +)</h5>
              </div>
              <div className="flex justify-center">
                <ul className="flex flex-col  w-[65%] justify-between h-[32vh]" >
                  <li  className=" text-[0.9vw]">• Advanced reservation system with online  booking integration.</li>
                  <li className=" text-[0.9vw]">• Housekeeping and maintenance <br /> management.</li>
                  <li className=" text-[0.9vw]">• Detailed reporting on revenue, occupancy rates, and guest preferences.</li>
                  <li className=" text-[0.9vw]">• Priority customer support (via email and  chat).</li>
                  <li className=" text-[0.9vw]">• Up to 150 rooms.</li>
                  <li className=" text-[0.9vw]">• 2 user accounts.</li>
                </ul>
              </div>
              <div className=" w-full flex justify-center">
                <p className="text-[0.9vw]  w-[66%] ">Ideal for: Mid-sized hotels seeking more comprehensive management capabilities.</p>
              </div>
             </div>
             <div className="w-full  flex justify-center">
             <button className="bg-[#3E0069] w-[70%] h-[6vh] text-[white] rounded-md hover:bg-[#7434a1] transition duration-150 ease-out hover:ease-in">Book my trial</button>
             </div>
          </div>
          <div className="w-[25%] min-h-[70vh] bg-[#EAEAEA] rounded-md ml-2 hover:bg-[#ebe6e6] transition duration-150 ease-out hover:ease-in">
          <div className="mt-[1vh]">
              <h1 className="font-semibold text-[1.5vw]  w-[55%] text-center ">
              Plan 3:Premium 
              </h1>
              <p className=" mt-[1vh] w-[60%] text-[0.8vw] text-center">Price: $399/month</p>
             </div>
             <div className="flex flex-col  h-[50vh] justify-evenly">
              <div className="">
                <h5 className=" w-[85%] text-[0.9vw] text-center" >Features:(Includes Pro plan features +):</h5>
              </div>
              <div className="flex justify-center">
                <ul className="flex flex-col  w-[65%] justify-between h-[32vh]" >
                  <li  className=" text-[0.9vw]">• Channel management for multiple booking platforms.</li>
                  <li className=" text-[0.9vw]">• Guest relationship management and loyalty programs.</li>
                  <li className=" text-[0.9vw]">• Customizable analytics and business intelligence.</li>
                  <li className=" text-[0.9vw]">• Dedicated account manager.</li>
                  <li className=" text-[0.9vw]">• Unlimited rooms.</li>
                  <li className=" text-[0.9vw]">• 5 user accounts.</li>
                </ul>
              </div>
              <div className=" w-full flex justify-center">
                <p className="text-[0.9vw]  w-[66%] ">Ideal for: Large hotels or hotel chains requiring extensive management, analytics, and guest engagement features.</p>
              </div>
             </div>
             <div className="w-full  flex justify-center">
             <button className="bg-[#3E0069] w-[70%] h-[6vh] text-[white] rounded-md hover:bg-[#7434a1] transition duration-150 ease-out hover:ease-in">Book my trial</button>
             </div>
          </div>


          
      </div>

     

      

      {/* ...main-8... */}

      <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="w-[60%] h-[40%]  flex flex-col justify-evenly">
          <div className="w-full h-[33%]  flex items-center justify-center ">
            {" "}
            <h1 className="font-[700] text-[1.5vw]">
              "Empower Hospitality Excellence: Your All-in-One Solution."!
            </h1>{" "}
          </div>
          <div className="w-full h-[33%]  flex items-center justify-center ">
            {" "}
            <h4 className="font-[500] text-[1vw] hover:bg-[#a9a2a2] transition duration-150 ease-out hover:ease-in">Book a free demo</h4>{" "}
          </div>
          <div className="w-full h-[33%]  flex items-center justify-evenly">
            <div className="w-[55%] h-[50%] flex items-center justify-evenly">
              <div className="w-[40%] h-[100%]  rounded-lg bg-[#FD575B] ">
                <button className="w-[100%]  rounded-lg h-[100%] text-[1vw] font-[700] text-white hover:bg-[#b14849] transition duration-150 ease-out hover:ease-in">
                  SIGN UP
                </button>
              </div>
              <div className="w-[10%] h-[100%]  flex items-center justify-center">
                <h4>Or</h4>
              </div>
              <div className="w-[40%] h-[100%] rounded-lg bg-[#FD575B] ">
                <button className="w-[100%]  rounded-lg h-[100%] text-[1vw] font-[700] text-white hover:bg-[#b14849] transition duration-150 ease-out hover:ease-in">
                  CONTACT US
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotelmanagement;
