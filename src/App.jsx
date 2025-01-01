import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

function App() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".logo-img", {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: "power3.inOut",
    })
      .from(".logo-h1", {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: "power3.inOut",
      })
      .from(".logo-p", {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: "power3.inOut",
      })
      .from(".btn1", {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power3.inOut",
      })
      .from(".home-h1", {
        opacity: 0,
        y: -30,
        duration: 2,
        text: {
          value: "",
        },
        ease: "bounce.inOut",
      })
      .from(".home-p", {
        opacity: 0,
        y: -30,
        duration: 3,
        text: {
          value: "",
        },
        ease: "bounce.inOut",
      });
    gsap.from(".about-text", {
      opacity: 0,
      x: -50,
      y: 50,
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "top 20%",
        scrub: true,
      },
    });
    gsap.from(".about-img", {
      opacity: 0,
      x: 50,
      y: -50,
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "top 20%",
        scrub: true,
      },
    });
    gsap.from(".precision-img", {
      opacity: 0,
      x: 50,
      y: -50,
      scrollTrigger: {
        trigger: ".precision",
        start: "top center",
        end: "top 20%",
        scrub: true,
      },
    });
    gsap.from(".precision-text", {
      opacity: 0,
      x: -50,
      y: 50,
      scrollTrigger: {
        trigger: ".precision",
        start: "top center",
        end: "top 20%",
        scrub: true,
      },
    });
    gsap.from(".team-h1", {
      opacity: 0,
      x: -50,
      y: 50,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".team",
        start: "top center",
        end: "top 20%",
        scrub: true,
      },
      text: {
        value: "",
      },
    });
    gsap.from(".box", {
      opacity: 0,
      y: -50,
      duration: 2,
      scrollTrigger: {
        trigger: ".team",
        start: "top 45%",
        end: "top 25%",
        scrub: true,
        pin: true,
      },
      stagger: {
        from: "random",
        each: 0.4,
      },
    });
    tl.from(".new-h1", {
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".newateller",
        start: "top center",
        end: "top 30%",
        scrub: true,
      },
      text: {
        value: "",
      },
    }).from(".new-p", {
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".newateller",
        start: "top center",
        end: "top 25%",
        scrub: true,
      },
      text: {
        value: "",
      },
    });
    // gsap.from('.input-text',{
    //   text:{
    //     value:
    //   }
    // })
    gsap.from(".input-text", {
      opacity: 0,
      duration: 0.9,
      x: -40,
      scrollTrigger: {
        trigger: ".newateller",
        start: "top center",
        end: "top 30%",
        scrub: true,
      },
      // text: {
      //   value: "",
      // },
      // repeat: -1,
      // yoyo: true,
    });
    gsap.from(".btn2", {
      opacity: 0,
      duration: 0.9,
      x: 40,
      scrollTrigger: {
        trigger: ".newateller",
        start: "top center",
        end: "top 30%",
        scrub: true,
      },
    });
    gsap.from(".form-input", {
      duration: 1.3,
      text: {
        value: "",
      },
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <>
      <div className="relative z-50">
        <div className="home h-[90vh] w-full">
          <div className="logo flex items-center justify-between p-10">
            <div className="flex items-center justify-center gap-x-2">
              <img
                src="https://www.neevhq.com/neev.svg"
                alt="navbar-logo"
                className="logo-img"
              />
              <h1 className="logo-h1 text-4xl font-normal">neev</h1>
            </div>
            <div className="flex items-center justify-center gap-x-4">
              <p className="logo-p text-4xl font-medium">
                <i className="ri-twitter-x-line"></i>
              </p>
              <button className="btn1 px-4 py-2 outline-none border-2 border-solid border-stone-500 text-stone-500 text-lg rounded-lg font-semibold">
                Careers
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col gap-y-10 px-[20%] py-[30px] text-center">
            <h1 className="home-h1 text-6xl font-semibold">
              Connecting Patients and Providers Through{" "}
              <span className="text-blue-400">Precision</span>{" "}
            </h1>
            <p className="home-p text-2xl font-normal text-stone-500">
              Making healthcare simple, smart, and more human centric by
              reducing admin work, saving time, and enabling doctors to focus on
              what truly matters - Patients
            </p>
          </div>
        </div>
        <div className="about w-full h-full flex items-center justify-evenly px-[5%] py-[100px] gap-x-10">
          <div className="about-text">
            <div className="">
              <h1 className="text-4xl font-semibold">
                Effortless Documentation For{" "}
                <span className="text-blue-400">Smarter Healthcare</span>
              </h1>
              <p className="text-lg text-stone-500 my-6">
                Automate your documentation process with Neev - seamless,
                accurate, and ready for your EMRs.
              </p>
            </div>
            <div className="flex gap-y-6 flex-col">
              <div className="flex items-center gap-x-8">
                <img
                  src="https://www.neevhq.com/conversation.webp"
                  alt="about-logo"
                  className="w-[40px] "
                />
                <p className="text-lg">
                  <strong>Transcribe Conversations</strong> Record and summarise
                  doctor-patient interactions with speaker diarisation.
                </p>
              </div>
              <div className="flex items-center gap-x-8">
                <img
                  src="https://www.neevhq.com/patient.webp"
                  alt=""
                  className="w-[40px] "
                />
                <p className="text-lg">
                  <strong>Empower Patients</strong> Share Patient Visit
                  Summaries (PVS) for continuity in care.
                </p>
              </div>
              <div className="flex items-center  gap-x-8">
                <img
                  src="https://www.neevhq.com/integration.webp"
                  alt=""
                  className="w-[40px] "
                />
                <p className="text-lg">
                  <strong>Integrate Seamlessly</strong> Send summaries directly
                  to EMR.
                </p>
              </div>
            </div>
          </div>
          <div className="about-img">
            <img
              src="https://www.neevhq.com/docu.webp"
              alt="about-img"
              className="w-[800px]"
            />
          </div>
        </div>

        <div className="precision w-full h-full flex items-center justify-evenly px-[5%] py-[100px] gap-x-10">
          <div className="precision-img">
            <img
              src="https://www.neevhq.com/ai2.webp"
              alt=""
              className="w-[1000px]"
            />
          </div>
          <div className="precision-text">
            <div className="">
              <h1 className="text-4xl font-semibolds">
                Precision AI for{" "}
                <span className="text-blue-400">Modern Healthcare</span>
              </h1>
              <p className="text-lg text-stone-500 my-6">
                Custom-built intelligence to simplify, secure, and redefine
                patient care
              </p>
            </div>
            <div className="flex gap-y-6 flex-col">
              <div className="flex items-center gap-x-8">
                <img
                  src="https://www.neevhq.com/model.webp"
                  alt=""
                  className="w-[40px] "
                />
                <p className="text-lg">
                  <strong>Medically Fine-Tuned Models</strong> Neev&apos;s
                  transcription and summarization models ensure accurate capture
                  of clinical terms, diagnoses, and treatment details.
                </p>
              </div>
              <div className="flex items-center gap-x-8">
                <img
                  src="https://www.neevhq.com/rag.webp"
                  alt=""
                  className="w-[40px] "
                />
                <p className="text-lg">
                  <strong>RAG Architecture</strong> Neev&apos;s Retrieval
                  Augmented Graph (RAG) powered systems enhance accuracy in
                  real-time transcriptions and summaries.
                </p>
              </div>
              <div className="flex items-center gap-x-8">
                <img
                  src="https://www.neevhq.com/privacy.webp"
                  alt=""
                  className="w-[40px] "
                />
                <p className="text-lg">
                  <strong>Secure, Grade-A Data Privacy</strong> We prioritize
                  patient confidentiality with robust, Grade-A data encryption
                  and storage, safeguarding sensitive information at every step.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="team px-[10%] py-[100px]">
          <div className="mb-10">
            <h1 className="team-h1 text-center text-3xl font-semibold">
              Meet Our Team
            </h1>
          </div>
          <div className="boxes grid grid-cols-3 items-center justify-center gap-8">
            <div className="box flex items-center justify-evenly gap-x-4 p-2 border border-solid border-stone-400 rounded-xl hover:shadow-xl shadow-black">
              <img
                src="https://www.neevhq.com/abhinav.webp"
                alt=""
                className="w-[60px] rounded-full display-cover"
              />
              <div className="flex justify-between items-center gap-x-10">
                <div className="">
                  {" "}
                  <h3 className="text-lg font-semibold">Abhinav Singh</h3>
                  <p className="text-sm font-semibold">
                    AI/ML Engineer, IIT Madras Alumnus
                  </p>
                </div>
                <p>
                  <i className="ri-arrow-right-up-line text-2xl"></i>
                </p>
              </div>
            </div>
            <div className="box gap-x-4 flex items-center justify-evenly p-2 border border-solid border-stone-400 rounded-xl hover:shadow-xl shadow-black">
              <img
                src="https://www.neevhq.com/saurabh.webp"
                alt=""
                className="w-[60px] rounded-full display-cover"
              />
              <div className="flex justify-between items-center gap-x-10">
                <div className="">
                  {" "}
                  <h3 className="text-lg font-semibold">Dr. Suarabh Bajpai</h3>
                  <p className="text-sm font-semibold">
                    Doctor, Leading Reasearcher
                  </p>
                </div>
                <p>
                  <i className="ri-arrow-right-up-line text-2xl"></i>
                </p>
              </div>
            </div>
            <div className="box flex items-center justify-evenly gap-x-4  p-2 border border-solid border-stone-400 rounded-xl hover:shadow-xl shadow-black">
              <img
                src="https://www.neevhq.com/mayank.jpg"
                alt=""
                className="w-[60px] rounded-full display-cover"
              />
              <div className="flex justify-between items-center gap-x-10">
                <div className="">
                  {" "}
                  <h3 className="text-lg font-semibold">Mayank Agarwal</h3>
                  <p className="text-sm font-semibold">CAA, SRCC Alumnus</p>
                </div>
                <p>
                  <i className="ri-arrow-right-up-line text-2xl"></i>
                </p>
              </div>
            </div>
            <div className="box flex items-center justify-evenly gap-x-4  p-2 border border-solid border-stone-400 rounded-xl hover:shadow-xl shadow-black">
              <img
                src="https://www.neevhq.com/pravesh.webp"
                alt=""
                className="w-[60px] rounded-full display-cover"
              />
              <div className="flex justify-between items-center gap-x-10">
                <div className="">
                  {" "}
                  <h3 className="text-lg font-semibold">Prabesh Goyal</h3>
                  <p className="text-sm font-semibold">Data Engineer</p>
                </div>
                <p>
                  <i className="ri-arrow-right-up-line text-2xl"></i>
                </p>
              </div>
            </div>
            <div className="box flex items-center justify-evenly gap-x-4  p-2 border border-solid border-stone-400 rounded-xl hover:shadow-xl shadow-black">
              <img
                src="https://www.neevhq.com/ricky.webp"
                alt=""
                className="w-[60px] rounded-full display-cover"
              />
              <div className="flex justify-between items-center gap-x-10">
                <div className="">
                  {" "}
                  <h3 className="text-lg font-semibold">Rickey Behrey</h3>
                  <p className="text-sm font-semibold">Product Designer</p>
                </div>
                <p>
                  <i className="ri-arrow-right-up-line text-2xl"></i>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="newateller w-full h-full px-[10%] py-[80px]">
          <div className="text-center text-white">
            <h1 className="new-h1 text-5xl font-normal">
              Join the Future of Healthcare
            </h1>
            <p className="new-p text-lg font-medium my-8">
              Be among the first to experience the next generation of healthcare
              technology
            </p>
          </div>
          <div className="flex items-center justify-center">
            <form action="">
              <input
                type="text"
                placeholder="Enter your email"
                className="input-text outline-none bg-white rounded-xl py-4 px-4 w-[400px] placeholder:form-input"
              />
              <button className="btn2 px-6 text-blue-600 font-semibold py-4 ml-4 outline-none bg-white text-blue-600 rounded-lg">
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className=" footer flex items-center w-[65vw] justify-between px-[5%] py-[30px]">
        <div className="flex items-center justify-center gap-x-2">
          <img
            src="https://www.neevhq.com/neev.svg"
            alt="navbar-logo"
            className="w-[40px]"
          />
          <h1 className="text-2xl font-normal">neev</h1>
        </div>
        <div className="flex items-center justify-center">
          <p>Privacy Policy</p>
          <hr className="h-4 mx-6 bg-black border border-solid border-black" />
          <p>Terms & Conditions</p>
        </div>
        <div className="fixed bottom-6 right-4 cursor-pointer flex items-center justify-center gap-x-2 bg-blue-400 text-white px-6 rounded-xl py-3">
          <p className="text-xl font-semibold">Talk to Us</p>
          <img
            src="https://www.neevhq.com/calendar.webp"
            alt=""
            className="w-[30px]"
          />
        </div>
      </div>
    </>
  );
}

export default App;
