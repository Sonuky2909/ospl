import React, { useEffect } from "react";
import Chatting from "../assets/ChatsCircle.svg";
import hrimg from "../assets/hr.png";
import perform from "../assets/perform.png";
import graph from "../assets/graph.png";
import graph1 from "../assets/graph1.png";
import graph2 from "../assets/graph2.png";
import Image from "../assets/img.png";
import Switch from "../Components/Switch/Switch";

const HRmanagement = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className="w-[full] min-h-[100vh]">
      {/* ....Main-1...... */}

      <div className="w-[100%] min-h-[20vh] flex flex-col md:flex-row  items-center">
        <div className="w-[50%] min-h-[60vh]  flex items-center justify-center  ">
          <div className="md:w-[50%] h-[100%] flex flex-col  ">
            <h1 className="md:text-[3.4vw] text-[7vw]  font-[700] text-[#025E7F] ">
              THE ONLY HR <br /> MANAGEMENT SYSTEM.
            </h1>
            <p> you will ever need</p>
          </div>
        </div>
        
        <div className="md:w-[38%] ml-[3vh] min-h-[70vh]  bg-[#D1D1D1] flex   items-center mt-12 mr-8 rounded-md pl-12 ">
          <div className="  mr-[2vh] mb-12 flex flex-col   justify-center ">
            <form
              action=""
              className="flex  flex-col  justify-center items-start ml-8 "
            >
              <input
                className=" w-[90%]  mr-12 pl-2 pt-2 pb-2 rounded-md"
                type="text"
                placeholder="Full Name"
              />
              <input
                className=" w-[90%] mt-4 mr-12 pl-2 pt-2 pb-2 rounded-md"
                type="email"
                placeholder="Email"
              />
            </form>
            <form action="" className="flex ml-8">
              <input
                className=" md:w-[14%] w-[17%] mt-4 pl-2 pt-2 pb-2 rounded-md "
                type="number"
                placeholder="+91"
              />
              <input
                className=" md:w-[74%] w-[70%] mt-4 ml-2 pl-2 pt-2 pb-2 rounded-md"
                type="number"
                placeholder="Phone number"
              />
            </form>
            <form action="" className="flex ml-8  ">
              <input type="checkbox" className="mt-2 " />{" "}
              <h6 className="mt-2 ml-2 text-xs">
                I agree to the{" "}
                <span className="font-semibold">Terms and service</span> and{" "}
                <span className="font-semibold">Privacy policies</span>
              </h6>
            </form>
            <button className="w-[83%] mt-4 bg-[#025E7F] p-2 text-[#fff] rounded-md ml-8">
              Lets's Start
            </button>
          </div>
        </div>
        
        <div className=" md:absolute md:bottom-[8%] md:right-[7%] absolute bottom-[-55%] right-[2%]  md:w-[4%] md:min-h-[8vh] w-[15%] min-h-[8.5%] bg-[#025E7F] rounded-full flex items-center justify-center  ">
          <img src={Chatting} alt="" />
        </div>
      </div>

      {/* .....Main-2... */}

      <div className="w-[full] min-h-[70vh] flex bg-[#025E7F;] mt-[15vh]">
        <div className="w-[50%]  flex justify-center">
          <div className=" w-[95%]">
            <img className="" src={hrimg} alt="" />
          </div>
        </div>
        <div className=" w-[50%] flex justify-center items-center ">
          <div className="w-[65%]  leading-[11vh] ">
            <div className="">
              <h1 className="text-[5vw] text-[#fff]">
                SAY BYE TO <br /> BORING <br /> INTERFACES!
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ...Main-3.... */}

      <div className="w-full min-h-[70vh] bg-[#fb923c] flex ">
        <div className=" w-[50%] min-h-[70vh] flex flex-col justify-evenly  bg-[#fff]">
          <div>
            <h1 className="f-[600] text-[40px] ml-[10%] ">Features</h1>
          </div>
          <div className=" w-[100%] min-h-[50vh] flex flex-col justify-between ">
            <div className="flex justify-evenly items-center ">
              <div className="md:w-[30px] md:h-[30px]  bg-[#025E7F] rounded-full text-center text-[#fff]">
                1
              </div>
              <p className="md:w-[35%] ml-[2vh]">
                People: Keep track on people with various trackers. Stay
                updated!
              </p>
            </div>
            <div className="flex justify-evenly items-center">
              <div className="w-[30px] h-[30px] bg-[#025E7F] rounded-full text-center text-[#fff]">
                2
              </div>
              <p className="md:w-[35%] ml-[2vh]">
                Recruitment: Have a detailed recruitment process right in front
                of your eyes
              </p>
            </div>
            <div className="flex justify-evenly items-center ">
              <div className="w-[30px] h-[30px] bg-[#025E7F] rounded-full text-center text-[#fff]">
                3
              </div>
              <p className="md:w-[35%] ml-[2vh]">
                Budget: Keep an eye on where the money is distributed and how
                well it getting used.
              </p>
            </div>
            <div className="flex justify-evenly items-center ">
              <div className="w-[30px] h-[30px] bg-[#025E7F] rounded-full text-center text-[#fff]">
                4
              </div>
              <p className="md:w-[35%] ml-[2vh]">
                Payroll: Have a systematic way of payroll.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[50%] min-h-[70vh] flex flex-col justify-evenly  bg-[#fff]">
          <div className=" w-[100%] min-h-[50vh] flex flex-col justify-between mt-[12%] ">
            <div className="flex justify-evenly items-center ">
              <div className="w-[30px] h-[30px] bg-[#025E7F] rounded-full text-center text-[#fff]">
                5
              </div>
              <p className="md:w-[35%] ml-[2vh]">
                Shifts: Get in details about shifts, who and when.
              </p>
            </div>
            <div className="flex justify-evenly items-center">
              <div className="w-[30px] h-[30px] bg-[#025E7F] rounded-full text-center text-[#fff]">
                6
              </div>
              <p className="md:w-[35%] ml-[2vh]">
                Shifts: Get in details about shifts, who and when.
              </p>
            </div>
            <div className="flex justify-evenly items-center ">
              <div className="w-[30px] h-[30px] bg-[#025E7F] rounded-full text-center text-[#fff]">
                7
              </div>
              <p className="md:w-[35%] ml-[2vh]">
                Get an interesting Dashboard, to greet you at work.
              </p>
            </div>
            <div className="flex justify-evenly items-center ">
              <div className="w-[30px] h-[30px] bg-[#025E7F] rounded-full text-center text-[#fff]">
                8
              </div>
              <p className="md:w-[35%] ml-[2vh]">And so much more...</p>
            </div>
          </div>
        </div>
      </div>

      {/* ....Main-4... */}

      <div className=" w-[full] flex  min-h-[70vh] mt-[10vh]">
        <div className="w-[50%] min-h-[70vh] flex justify-center  items-center ">
          <div className="w-[75%] ">
            <h1 className="text-[2.5vw]">
              Make human resource <br /> management more enjoyable by <br /> all
              the different tracking <br /> features!
            </h1>
          </div>
        </div>
        <div className=" w-[50%] flex justify-end items-end min-h-[70vh]  ">
          <div className="w-[80%] items-end flex justify-end ">
            <img src={perform} alt="" />
          </div>
        </div>
      </div>

      {/* ...Main-5... */}

      <div className="w-[full]  relative flex min-h-[70vh] mt-[10vh] bg-[#FFAF51]">
        <div className="md:w-[38%] ml-[10vh] min-h-[70vh] flex justify-center items-center ">
          <div className="md:w-[65%]   ml-[2vh] flex flex-col min-h-[28vh] justify-evenly ">
            <div>
              <h1 className="text-[2.5vw] font-semibold">
                Here’s what you get
              </h1>
            </div>
            <div>
              <p>
                You don’t need to use features that <br /> are no use for you!
              </p>
            </div>
            <div>
              <p>
                Get a customized system for your <br /> business according to
                your needs{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="w-[62%]  flex flex-col justify-center min-h-[70vh] mb-[4vh] ">
          <div className=" md:w-[90%]">
            <div className="md:w-[40%] w-[60%] flex items-center">
              <img src={graph1} alt="" />
            </div>
            <div className="md:w-[40%] w-[60%] ml-[1vw] flex items-center">
              <img src={graph} alt="" />
            </div>
            <div className="md:w-[40%] w-[60%] flex items-center">
              <img src={graph2} alt="" />
            </div>
          </div>
        </div>
        <button className="md:absolute md:bottom-[-3.5vh] md:left-[80vh] absolute bottom-[-3.5vh]  left-[9vh] w-[40vh] min-h-[7vh] text-[1.5vw] text-[#fff] bg-[#3E0069] rounded-md">
          And SO MUCH MORE...
        </button>
      </div>

      {/* ...Main-6... */}

      <div className="w-[100%] min-h-[70vh] mt-[20vh] flex flex-col md:flex-row items-center">
        <div className="flex flex-col justify-evenly items-center w-[50%]">
          <div>
            <h1 className=" md:text-[40px] f-[400]">
              Why our HR management <br /> system?
            </h1>
          </div>
          <div>
            <img src={Image} alt="" />
          </div>
        </div>
        <div className=" w-[50%] mt-[2vh] min-h-[100vh] ">
          <div className="flex  flex justify-evenly mb-3">
            <div className="md:w-[30px] h-[30px] bg-[#025E7F] rounded-full text-center text-[#fff]">
              1
            </div>
            <div className="flex flex-col ml-[1vh]   md:w-[50%]">
              <h1 className="md:text-[24px] text-[20px] f-[700] font-semibold">
                Efficiency and Productivity
              </h1>
              <p>
                A specialized HR system automates tasks like payroll and
                onboarding, freeing up time for strategic priorities. This
                efficiency drive directs focus towards growth, enhancing the
                company's productivity and effectiveness in core initiatives.
              </p>
            </div>
          </div>
          <div className="flex  flex justify-evenly mb-3">
            <div className="w-[30px] h-[30px] bg-[#025E7F] rounded-full text-center text-[#fff]">
              2
            </div>
            <div className="flex flex-col md:w-[50%]">
              <h1 className="md:text-[24px] text-[20px] f-[700] font-semibold">
                Data-Driven Decision Making
              </h1>
              <p>
                Modern HR systems provide powerful analytics on employee
                performance and engagement, guiding informed decisions on talent
                development and resource allocation for enhanced company growth.
              </p>
            </div>
          </div>
          <div className="flex  flex justify-evenly mb-3">
            <div className="w-[30px] h-[30px] bg-[#025E7F] rounded-full text-center text-[#fff]">
              3
            </div>
            <div className="flex flex-col  md:w-[50%]">
              <h1 className="md:text-[24px] text-[20px] f-[700] font-semibold">
                Employee Empowerment and Development
              </h1>
              <p>
                A holistic HR system offers tools for personalized development
                plans, empowering employees to steer their growth, while aiding
                managers in providing tailored support, fostering a culture of
                ongoing learning within the company.
              </p>
            </div>
          </div>
          <div className="flex  flex justify-evenly mb-3">
            <div className="w-[30px] h-[30px] bg-[#025E7F] rounded-full text-center text-[#fff]">
              4
            </div>
            <div className="flex flex-col  md:w-[50%]">
              <h1 className="md:text-[24px] text-[20px] f-[700] font-semibold">
                Scalability and Adaptability
              </h1>
              <p>
                A scalable HR system adapts to expanding needs, accommodating
                new markets, increased staff, and remote setups. This
                flexibility ensures a robust, supportive HR infrastructure
                through diverse stages of company growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ...Main-7... */}

      <div className="md:w-full min-h-[10vh] mt-[5vh] bg-[#FFAF50] flex justify-end items-center">
        <div className=" md:w-[20%] flex justify-center">
          <div className="flex  justify-between md:w-[50%] items-center">
            <h1>Monthly</h1>
            <button>
              <Switch></Switch>
            </button>
            <h1>Yearly</h1>
          </div>
        </div>
      </div>

      {/* ...Main-8... */}

      <div className="w-full min-h-[70vh] flex justify-center mt-[15vh]">
        <div className="w-[25%] min-h-[70vh] bg-[#EAEAEA] rounded-md  ">
          <div className="mt-[1vh]">
            <h1 className="font-semibold text-[1.5vw]  w-[50%] text-center ">
              Plan 1:Essential HR
            </h1>
            <p className=" mt-[1vh] w-[60%] text-[0.8vw] text-center">
              Price: $39/month
            </p>
          </div>
          <div className="flex flex-col  h-[50vh] justify-evenly">
            <div className="">
              <h5 className=" w-[30%] text-[0.9vw] text-center">Features:</h5>
            </div>
            <div className="flex justify-center">
              <ul className="flex flex-col  w-[65%] justify-between h-[30vh]">
                <li className=" text-[0.9vw]">
                  • Employee database and profiles.
                </li>
                <li className=" text-[0.9vw]">
                  • Leave and attendance management.
                </li>
                <li className=" text-[0.9vw]">
                  • Basic reporting on HR metrics.
                </li>
                <li className=" text-[0.9vw]">
                  • Limited customer support (via email).
                </li>
                <li className=" text-[0.9vw]">• Up to 50 employees.</li>
                <li className=" text-[0.9vw]">• 1 admin account.</li>
              </ul>
            </div>
            <div className=" w-full flex justify-center">
              <p className="text-[0.9vw]  w-[66%] ">
                Ideal for: Small businesses and startups needing fundamental HR
                tools.
              </p>
            </div>
          </div>
          <div className="w-full  flex justify-center">
            <button className="bg-[#3E0069] md:w-[70%] w-[80%] min-h-[6vh] text-[white] rounded-md">
              Book my trial
            </button>
          </div>
        </div>
        <div className="w-[25%] min-h-[70vh] bg-[#EAEAEA] rounded-md ml-2">
          <div className="mt-[1vh]">
            <h1 className="font-semibold text-[1.5vw]  w-[50%] text-center ">
              Plan 2:Advanced HR
            </h1>
            <p className=" mt-[1vh] w-[60%] text-[0.8vw] text-center">
              Price: $79/month
            </p>
          </div>
          <div className="flex flex-col  h-[50vh] justify-evenly">
            <div className="">
              <h5 className=" w-[85%] text-[0.9vw] text-center">
                Features:(Including essential HR features +)
              </h5>
            </div>
            <div className="flex justify-center">
              <ul className="flex flex-col  w-[65%] justify-between h-[32vh]">
                <li className=" text-[0.9vw]">
                  • Performance reviews and goal tracking.
                </li>
                <li className=" text-[0.9vw]">
                  • Recruitment and applicant tracking system.
                </li>
                <li className=" text-[0.9vw]">
                  • Employee training and development tools.
                </li>
                <li className=" text-[0.9vw]">
                  • Priority customer support (via email and chat).
                </li>
                <li className=" text-[0.9vw]">• Up to 200 employees.</li>
                <li className=" text-[0.9vw]">• 2 admin accounts.</li>
              </ul>
            </div>
            <div className=" w-full flex justify-center">
              <p className="text-[0.9vw]  w-[66%] ">
                Ideal for: Growing companies looking for more comprehensive HR
                solutions.
              </p>
            </div>
          </div>
          <div className="w-full  flex justify-center">
            <button className="bg-[#3E0069] md:w-[70%] w-[80%] min-h-[6vh] text-[white] rounded-md">
              Book my trial
            </button>
          </div>
        </div>
        <div className="w-[25%] min-h-[70vh] bg-[#EAEAEA] rounded-md ml-2">
          <div className="mt-[1vh]">
            <h1 className="font-semibold text-[1.5vw]  w-[55%] text-center ">
              Plan 3: Enterprise HR
            </h1>
            <p className=" mt-[1vh] w-[60%] text-[0.8vw] text-center">
              Price: $149/month
            </p>
          </div>
          <div className="flex flex-col  h-[50vh] justify-evenly">
            <div className="">
              <h5 className=" w-[85%] text-[0.9vw] text-center">
                Features (Includes Advanced HR features +):
              </h5>
            </div>
            <div className="flex justify-center">
              <ul className="flex flex-col  w-[65%] justify-between h-[32vh]">
                <li className=" text-[0.9vw]">
                  • Advanced analytics and HR insights.
                </li>
                <li className=" text-[0.9vw]">
                  • Customizable workflows and approvals.
                </li>
                <li className=" text-[0.9vw]">
                  • Compliance and legal document management.
                </li>
                <li className=" text-[0.9vw]">• Dedicated account manager.</li>
                <li className=" text-[0.9vw]">• Unlimited employees.</li>
                <li className=" text-[0.9vw]">• 5 admin accounts.</li>
              </ul>
            </div>
            <div className=" w-full flex justify-center">
              <p className="text-[0.9vw]  w-[66%] ">
                Ideal for: Established enterprises seeking robust HR systems
                with extensive features and support.
              </p>
            </div>
          </div>
          <div className="w-full  flex justify-center">
            <button className="bg-[#3E0069] md:w-[70%] w-[80%] min-h-[6vh] text-[white] rounded-md">
              Book my trial
            </button>
          </div>
        </div>
      </div>

      {/* ...main-9... */}

      <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="w-[60%] h-[40%]  flex flex-col justify-evenly">
          <div className="w-full h-[33%]  flex items-center justify-center ">
            {" "}
            <h1 className="font-[700] text-center text-[1.5vw]">
              Streamline, Simplify, and Elevate: <br />
              Your Complete HR Solution at Your Fingertips!
            </h1>{" "}
          </div>
          <div className="w-full h-[33%]  flex items-center justify-center ">
            {" "}
            <h4 className="font-[500] text-[1vw]">Book a free demo</h4>{" "}
          </div>
          <div className="w-full h-[33%]  flex items-center justify-evenly">
            <div className="w-[55%] h-[50%] flex items-center justify-evenly">
              <div className="w-[40%] h-[100%]  rounded-lg bg-[#FD575B] ">
                <button className="w-[100%]  rounded-lg h-[100%] text-[1vw] font-[700] text-white">
                  SIGN UP
                </button>
              </div>
              <div className="w-[10%] h-[100%]  flex items-center justify-center">
                <h4>Or</h4>
              </div>
              <div className="w-[40%] h-[100%] rounded-lg bg-[#FD575B] ">
                <button className="w-[100%]  rounded-lg h-[100%] text-[1vw] font-[700] text-white">
                  CONTACT US
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRmanagement;
