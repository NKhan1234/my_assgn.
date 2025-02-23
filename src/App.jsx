import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useState } from "react";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function App() {
  const [email, setEmail] = useState("");
  const [placeholder, setPlaceholder] = useState("");

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
      .from(".btn1", { opacity: 0, y: -30, duration: 1, ease: "power3.inOut" })
      .from(".home-h1", {
        opacity: 0,
        y: -30,
        duration: 2,
        text: { value: "Welcome to Neev" },
        ease: "bounce.inOut",
      })
      .from(".home-p", {
        opacity: 0,
        y: -30,
        duration: 3,
        text: { value: "Your journey starts here" },
        ease: "bounce.inOut",
      });

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
  });
  useEffect(() => {
    const placeholderText = "Enter your email...";
    let index = 0;
    let isDeleting = false;

    function animatePlaceholder() {
      if (!isDeleting && index <= placeholderText.length) {
        document
          .querySelector(".input-text")
          ?.setAttribute("placeholder", placeholderText.substring(0, index));
        index++;
        setTimeout(animatePlaceholder, 100);
      } else if (isDeleting && index >= 0) {
        document
          .querySelector(".input-text")
          ?.setAttribute("placeholder", placeholderText.substring(0, index));
        index--;
        setTimeout(animatePlaceholder, 100);
      } else {
        isDeleting = !isDeleting; // Toggle typing/deleting
        setTimeout(animatePlaceholder, 500); // Pause before switching direction
      }
    }

    animatePlaceholder();
  }, []);

  return (
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
        <div className="flex items-center justify-center flex-col gap-y-10 px-[20%] py-[30px]">
          <h1 className="home-h1 text-5xl font-bold">Welcome to Neev</h1>
          <p className="home-p text-xl font-medium">
            Your journey starts here.
          </p>
          <form className="flex flex-col items-center gap-y-4">
            <input
              type="email"
              className="input-text px-4 py-2 border border-gray-400 rounded-md w-[300px]"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="btn2 bg-blue-500 text-white px-6 py-2 rounded-md font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
