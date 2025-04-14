/* eslint-disable no-empty */
"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCallback, useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import ContactForm from "./ContactForm";
import { BentoCard, BentoGrid } from "./ui/bento-grid";

const features = [
  {
    // Icon: FileTextIcon,
    name: "Biodata for Marriage",
    description:
      "Designed and developed multiple customizable templates to efficiently share family and personal details for various use cases.",
    href: "https://biodataformarriage.net/",
    cta: "Learn more",
    background: (
      <img
        className="absolute opacity-60"
        src="/biodataformarriage.jpg"
        alt={""}
      />
    ),
    className:
      "lg:row-start-1 lg:row-end-4 lg:col-start-2 h-[300px] lg:col-end-3",
  },
  {
    // Icon: InputIcon,
    name: "RandomGenerator.AI",
    description:
      "Welcome to RandomGenerator.AI, your one-stop source for all kinds of random data. We make it easy and fun to find random info for any purpose!",
    href: "https://randomgenerator.ai/",
    cta: "Learn more",
    background: (
      <img
        className="absolute opacity-60"
        src="/randomgenerator.jpg"
        alt={""}
      />
    ),
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-1 h-[300px] lg:row-end-3",
  },
  {
    // Icon: GlobeIcon,
    name: "Dyuti AI - Tools for students to help in their pursuit of dreams",
    description:
      "Embark on a transformative journey with Dyuti AI as we strive to revolutionize the way students navigate through college admissions and counseling processes.",
    href: "https://dyuti.ai/",
    cta: "Learn more",
    background: (
      <img className="absolute opacity-60" src="/dyuti.jpg" alt={""} />
    ),
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-3 h-[300px] lg:row-end-4",
  },
  {
    // Icon: CalendarIcon,
    name: "5reels",
    description: `At 5Reels.com, we celebrate the magic of storytelling. Our goal is to connect Telugu movie lovers everywhere with their cultural roots through cinema.`,
    href: "https://www.5reels.com/",
    cta: "Learn more",
    background: (
      <img className="absolute opacity-60" src="/5reels.jpg" alt={""} />
    ),
    className:
      "lg:col-start-3 lg:col-end-3 lg:row-start-1 h-[300px] lg:row-end-2",
  },
  {
    // Icon: CalendarIcon,
    name: "ChatConnect",
    description: `Users can register, login, and chat with their friends securely. The app supports direct messaging, read receipts, file sharing, and real-time updates. Conversations are stored securely and sorted by the latest message.`,
    href: "https://chat-app-front-another.vercel.app/",
    cta: "Learn more",
    background: (
      <img className="absolute opacity-60" src="/chatconnect.jpg" alt={""} />
    ),
    className:
      "lg:col-start-3 lg:col-end-3 lg:row-start-1 h-[300px] lg:row-end-2",
  },
];

const Landingpage = () => {
  const calculateAge = (dateString: string): number => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };
  console.log(calculateAge("2000-11-10"));
  const calcScrollValue = () => {
    const scrollProgress = document.getElementById("progress") as HTMLElement; // Type assertion
    const pos = document.documentElement.scrollTop;

    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%, #e6006d ${scrollValue}%)`;
  };

  useEffect(() => {
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;

    // Add click listener once to avoid multiple bindings
    const scrollProgress = document.getElementById("progress") as HTMLElement;
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });

    // Cleanup on unmount
    return () => {
      window.onscroll = null;
      window.onload = null;
      scrollProgress.removeEventListener("click", () => {
        document.documentElement.scrollTop = 0;
      });
    };
  }, []);

  const updateCount = useCallback((num: HTMLElement, maxNum: number) => {
    const currentNum = +num.innerText;

    if (currentNum < maxNum) {
      num.innerText = (currentNum + 1).toString();
      requestAnimationFrame(() => updateCount(num, maxNum));
    }
  }, []);

  useEffect(() => {
    const menuLi = document.querySelectorAll("header ul li a");
    const sections = document.querySelectorAll("section");

    const activeMenu = () => {
      let len = sections.length;
      while (--len && window.scrollY + 97 < sections[len].offsetTop) {}

      menuLi.forEach((link) => link.classList.remove("active"));
      if (menuLi[len]) {
        menuLi[len].classList.add("active");
      }
    };

    // Initial call to set the active link on page load
    activeMenu();

    // Add event listener for scroll
    window.addEventListener("scroll", activeMenu);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", activeMenu);
    };
  }, []);

  const text = `I'm Frontend Developer And I'm Designer And I'm Developer`; // Text for rotating text
  const typedRef = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 100 });
    // Initialize Typed.js for typing effect
    const typed = new Typed(typedRef.current, {
      strings: ["Designer", "Developer", "Freelancer", "Full Stack Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("open", !isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("open");
  };

  return (
    <>
      <div className="whole-page">
        <header className="caret-transparent">
          <a href="#" className="logo">
            <span>R</span>amesh
          </a>
          {/*  */}
          <ul
            className={`navlist ${isOpen ? "active" : ""}`}
            onClick={closeMenu}
          >
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="right-header">
            <a
              href="#contact"
              className="flex items-center gap-1 align-middle btn"
            >
              Let&#39;s connect{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9h8m-8 4h6m-2.01 5.606L8 21v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5.5M19 22v-6m3 3l-3-3l-3 3"
                />
              </svg>
            </a>
            {/* <Navbar/> */}
            <div
              className={`menu-icon ${isOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <div className="bar"></div>
            </div>
          </div>
        </header>

        <section className="home caret-transparent " id="home">
          <div className="mt-12">
            <h3 className="text-gray-500 font-light uppercase text-[1.1rem]">
              Welcome To my World
            </h3>
            <h1 className="text-5xl">Hi I&#39;m Ramesh</h1>

            <p className="font-bold text-[24px]">
              I&#39;m <span ref={typedRef}></span>
            </p>

            <p>
              I'm a passionate front-end developer with expertise in React,
              Next.js, HTML, CSS, Tailwind CSS. I specialize in creating
              visually appealing, responsive, and user-friendly interfaces that
              enhance user experiences.
            </p>

            <div className="btn-box">
              <a href="mailto:bramesh101020@gmail.com" className="btn">
                Hire Me Now !{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    fill="currentColor"
                    d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"
                  />
                </svg>
              </a>
              <a href="img/resume.pdf" target="_blank" className="btn d-CV">
                Download CV{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" fill="none" />
                  <path fill="currentColor" d="m12 16l4-5h-3V4h-2v7H8z" />
                  <path
                    fill="currentColor"
                    d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2z"
                  />
                </svg>
              </a>
            </div>

            <div className="social-media">
              <div className="bg-icon">
                <a
                  href="https://www.instagram.com/ramesh_bojanapu/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008z"
                      fill="currentColor"
                    />
                    <circle
                      cx="16.806"
                      cy="7.207"
                      r="1.078"
                      fill="currentColor"
                    />
                    <path
                      d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71c0 2.442 0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419a4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688a2.987 2.987 0 0 1-1.712 1.711a4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311a2.985 2.985 0 0 1-1.719-1.711a5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654c0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311a2.991 2.991 0 0 1 1.712 1.712a5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655c0 2.436 0 2.698-.043 3.654h-.011z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <span></span>
              </div>

              <div className="bg-icon">
                <a
                  href="https://github.com/Ramesh-Bojanapu-1011"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="currentColor"
                      // fillRule="evenodd"
                      d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
                      // clipRule="evenodd"
                    />
                  </svg>
                </a>
                <span></span>
              </div>

              <div className="bg-icon">
                <a
                  href="https://www.linkedin.com/in/ramesh-bojanapu-a5674819a/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="currentColor"
                      d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"
                    />
                  </svg>
                </a>
                <span></span>
              </div>

              <div className="bg-icon">
                <a
                  href="https://www.facebook.com/ramesh.bojanapu.1011"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="currentColor"
                      d="M13.387 7.32c0-.788.174-1.187 1.398-1.187h1.535V3.2h-2.347c-2.933 0-4.106 1.957-4.106 4.107v1.76H7.52V12h2.347v8.8h3.52V12h2.585l.348-2.933h-2.933z"
                    />
                  </svg>
                </a>
                <span></span>
              </div>
            </div>
          </div>
          <div className="img-hero">
            <img
              src="img/hero-preview.png"
              alt=""
              // className="relative top-[1px] left-[1px] w-[540px] h-auto z-10"
            />
            <div className="rotate-text">
              <div className="text">
                {" "}
                <p>
                  {text.split("").map((char, i) => (
                    <b
                      key={i}
                      style={{
                        display: "inline-block",
                        transform: `rotate(${i * 6.3}deg)`,
                      }}
                    >
                      {char}
                    </b>
                  ))}
                </p>
              </div>
              <span>
                <i></i>
              </span>
            </div>
          </div>
        </section>

        <section className="about caret-transparent" id="about">
          <div className="about-img">
            <img src="img/aboutMe-preview.png" alt="" className="aboutHero " />
            <div className="showcase-ring">
              <img src="shapes/ring.png" className="ring" alt={""} />
              <img src="shapes/circle.png" className="circle" alt={""} />
            </div>
          </div>
          <div className="about-content">
            <h2 className="m-0 heading">About Me</h2>
            <h3>2 Year&#39;s Experience on Product Design</h3>
            <p>
              I’m a passionate front-end developer specializing in React,
              Next.js, and modern web technologies. With expertise in creating
              responsive, user-friendly designs, I aim to build seamless digital
              experiences. I enjoy turning ideas into interactive, functional
              websites that leave a lasting impression. Let’s create something
              amazing together!
            </p>

            <div className="content-btn">
              <div className="content">
                <div className="flex flex-col  gap-[10px]  mt-3 md:flex-row md:gap-5">
                  <div className="flex ">
                    <ul>
                      <li className="flex items-center mb-5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M192 128l128 128-128 128z"></path>
                        </svg>
                        <strong className="px-1">Birthday:</strong>{" "}
                        <span>15 june 2001</span>
                      </li>

                      <li className="flex items-center mb-5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M192 128l128 128-128 128z"></path>
                        </svg>
                        <strong className="px-1">Phone:</strong>{" "}
                        <a href="tel:9380898635">
                          <span>+91 9380898635</span>
                        </a>
                      </li>
                      <li className="flex items-center mb-5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M192 128l128 128-128 128z"></path>
                        </svg>
                        <strong className="px-1">City:</strong>{" "}
                        <span>Rayachoty</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex ">
                    <ul>
                      <li className="flex items-center mb-5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M192 128l128 128-128 128z"></path>
                        </svg>{" "}
                        <strong className="px-1">Age:</strong>
                        <span>{calculateAge("2001-06-15")}</span>
                      </li>
                      <li className="flex items-center mb-5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M192 128l128 128-128 128z"></path>
                        </svg>
                        <strong className="px-1">Degree:</strong>{" "}
                        <span>Btech</span>
                      </li>
                      <li className="flex items-center mb-5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M192 128l128 128-128 128z"></path>
                        </svg>
                        <strong className="px-1">Email: </strong>
                        <a href="mailto:bramesh101020@gmailcom" target="_blank">
                          <span>bramesh101020@gmailcom</span>
                        </a>
                      </li>
                      <li className="flex items-center mb-5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M192 128l128 128-128 128z"></path>
                        </svg>
                        <strong className="px-1">Freelance:</strong>{" "}
                        <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=" cvContent">
              <a
                href="img/resume.pdf"
                target="_blank"
                className="flex btn d-CV w-fit "
              >
                <div className="flex gap-2 w-fit">
                  Download CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="m12 16l4-5h-3V4h-2v7H8z" />
                    <path
                      fill="currentColor"
                      d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2z"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="services caret-transparent" id="services">
          <div className="main-text">
            <h2 className="heading">My Services</h2>
            <span>what i will do for you</span>
          </div>

          <div className="allServices">
            <div className="servicesItem">
              <div className="icon-services">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="currentColor"
                      d="M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1 1 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a1 1 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999m-9.977 3.855L5.06 7.965l6.917-3.822l6.964 3.859z"
                    />
                    <path
                      fill="currentColor"
                      d="M20.515 11.126L12 15.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5z"
                    />
                    <path
                      fill="currentColor"
                      d="M20.515 15.126L12 19.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5z"
                    />
                  </svg>
                </i>

                <span></span>
              </div>
              <h3>App Development</h3>
              <p>
                App development is the process of creating software applications
                for businesses to meet their needs and improve customer
                experience. The process involves planning, designing,
                developing, and testing the application.
              </p>
              <a href="#" className="readMore">
                Read More
              </a>
            </div>

            <div className="servicesItem">
              <div className="icon-services">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="currentColor"
                      d="m7.375 16.781l1.25-1.562L4.601 12l4.024-3.219l-1.25-1.562l-5 4a1 1 0 0 0 0 1.562zm9.25-9.562l-1.25 1.562L19.399 12l-4.024 3.219l1.25 1.562l5-4a1 1 0 0 0 0-1.562zm-1.649-4.003l-4 18l-1.953-.434l4-18z"
                    />
                  </svg>
                </i>
                <span></span>
              </div>
              <h3>Web Development</h3>
              <p>
                Web development involves the creation and maintenance of
                websites and web applications. It includes a range of activities
                and disciplines such as front-end development, back-end
                development, full-stack development, and web design.
              </p>
              <a href="#" className="readMore">
                Read More
              </a>
            </div>

            <div className="servicesItem">
              <div className="icon-services">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="currentColor"
                      d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M4 14V5h16l.002 9z"
                    />
                  </svg>
                </i>
                <span></span>
              </div>
              <h3>UI / UX Design</h3>
              <p>
                UI design focuses on the visual elements of an application or
                website, including layout, colors, typography, buttons, and
                icons. It ensures the interface is aesthetically pleasing and
                functional.
              </p>
              <a href="#" className="readMore">
                Read More
              </a>
            </div>
          </div>

          <div className="proposal">
            <div className="text-box">
              <span>Get It Touch</span>
              <h3>Have a Project On Your Mind</h3>
              <a href="#contact" className="btn">
                Contact Me
              </a>
            </div>
            <img src="img/support.png" className="first" alt={""} />
          </div>

          <div className="showcase">
            <img src="shapes/ring.png" className="ring" alt={""} />
            <img src="shapes/circle.png" className="circle" alt={""} />
            <img src="shapes/circle.png" className="circle2" alt={""} />
            <img src="shapes/circle.png" className="circle3" alt={""} />
            <img src="shapes/half-ring.png" className="half-ring" alt={""} />
          </div>
        </section>

        <section className="blog caret-transparent" id="blog">
          <div className="main-text">
            <h2 className="heading">Blog</h2>
            <span>Latest News & Post</span>
            <div>
              <BentoGrid className="flex flex-wrap justify-center gap-4 ">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex w-[400px]"
                    data-aos="zoom-in"
                  >
                    <BentoCard key={feature.name} {...feature} />
                  </div>
                ))}
              </BentoGrid>
            </div>
          </div>

          <div className="showcase">
            <img src="shapes/ring.png" className="ring" alt={""} />
            <img
              src="shapes/second-circle.png"
              className="second-circle"
              alt={""}
            />
            <img src="shapes/circle.png" className="circle" alt={""} />
            <img src="shapes/half-ring.png" className="half-ring" alt={""} />
          </div>
        </section>

        <section className="down-box">
          <div className="contactSkills">
            <div className="skills caret-transparent">
              <div className="container">
                <div className="skillBox">
                  <div className="main-text">
                    <h2 className="heading">My Skills</h2>
                    <span>Let Me Help you</span>
                  </div>
                  <div className="skill-wrap">
                    <div className="skill">
                      <div className="outer-circle">
                        {/* <div className="inner-circle"> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={8.51}
                          height={12}
                          viewBox="0 0 256 361"
                        >
                          <path
                            fill="#e44d26"
                            d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766z"
                          ></path>
                          <path
                            fill="#f16529"
                            d="m128 337.95l84.417-23.403l19.86-222.49H128z"
                          ></path>
                          <path
                            fill="#ebebeb"
                            d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604z"
                          ></path>
                          <path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0M92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88zm62.74 0h16.235v32.508h22.824v16.05h-39.06z"></path>
                          <path
                            fill="#fff"
                            d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89z"
                          ></path>
                        </svg>
                        {/* <h2 className="counter">
                            <span data-target="89">0</span>%
                          </h2> */}
                        {/* </div> */}
                      </div>
                      <div className="text-base font-medium">HTML</div>
                    </div>
                    <div className="skill">
                      <div className="outer-circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="45.39"
                          height="64"
                          viewBox="0 0 256 361"
                        >
                          <rect width="256" height="361" fill="none" />
                          <path
                            fill="#264de4"
                            d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36z"
                          />
                          <path
                            fill="#2965f1"
                            d="m212.417 314.547l19.86-222.49H128V337.95z"
                          />
                          <path
                            fill="#ebebeb"
                            d="m53.669 188.636l2.862 31.937H128v-31.937zm-5.752-64.641l2.903 31.937H128v-31.937zM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04z"
                          />
                          <path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484zm46.417 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9zm46.418 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32z" />
                          <path
                            fill="#fff"
                            d="m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08z"
                          />
                        </svg>
                      </div>
                      <div className="text-base font-medium">CSS</div>
                    </div>
                    <div className="skill">
                      <div className="outer-circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={256}
                          height={154}
                          viewBox="0 0 256 154"
                        >
                          <defs>
                            <linearGradient
                              id="logosTailwindcssIcon0"
                              x1="-2.778%"
                              x2="100%"
                              y1="32%"
                              y2="67.556%"
                            >
                              <stop offset="0%" stopColor="#2298bd"></stop>
                              <stop offset="100%" stopColor="#0ed7b5"></stop>
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#logosTailwindcssIcon0)"
                            d="M128 0Q76.8 0 64 51.2Q83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2q19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"
                          ></path>
                        </svg>
                      </div>
                      <div className="text-base font-medium">Tailwind CSS</div>
                    </div>
                    <div className="skill">
                      <div className="outer-circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          viewBox="0 0 256 256"
                        >
                          <rect width="256" height="256" fill="none" />
                          <g fill="none">
                            <rect
                              width="256"
                              height="256"
                              fill="#f0db4f"
                              rx="60"
                            />
                            <path
                              fill="#323330"
                              d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="text-base font-medium">Java Script</div>
                    </div>
                    <div className="skill">
                      <div className="outer-circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={48}
                          height={48}
                          viewBox="0 0 256 256"
                        >
                          <g fill="none">
                            <rect
                              width={256}
                              height={256}
                              fill=""
                              rx={60}
                            ></rect>
                            <path
                              fill="#000"
                              d="M121.451 28.054c-.43.039-1.799.176-3.031.273c-28.406 2.561-55.014 17.889-71.867 41.447C37.17 82.873 31.167 97.731 28.9 113.47c-.801 5.494-.899 7.117-.899 14.565c0 7.449.098 9.072.9 14.565c5.434 37.556 32.16 69.111 68.406 80.802c6.491 2.092 13.333 3.519 21.114 4.379c3.031.332 16.129.332 19.16 0c13.431-1.486 24.809-4.809 36.031-10.538c1.72-.879 2.053-1.114 1.818-1.309c-.156-.118-7.488-9.952-16.285-21.838l-15.992-21.603l-20.04-29.658c-11.026-16.305-20.097-29.639-20.176-29.639c-.078-.019-.156 13.158-.195 29.248c-.059 28.172-.078 29.306-.43 29.97c-.508.958-.899 1.349-1.721 1.78c-.625.312-1.173.371-4.125.371h-3.382l-.9-.567a3.65 3.65 0 0 1-1.31-1.427l-.41-.88l.04-39.198l.058-39.218l.606-.763c.313-.41.978-.938 1.447-1.192c.801-.391 1.114-.43 4.496-.43c3.989 0 4.653.156 5.69 1.29c.293.313 11.143 16.657 24.125 36.344a89122 89122 0 0 0 39.452 59.765l15.836 23.989l.802-.528c7.096-4.614 14.604-11.183 20.547-18.026c12.649-14.526 20.802-32.238 23.539-51.124c.801-5.493.899-7.116.899-14.565s-.098-9.071-.899-14.565c-5.435-37.556-32.161-69.11-68.407-80.801c-6.393-2.073-13.196-3.5-20.821-4.36c-1.877-.196-14.8-.41-16.422-.254m40.938 60.489c.938.469 1.701 1.368 1.975 2.306c.156.509.195 11.379.156 35.875l-.059 35.152l-6.197-9.502l-6.217-9.501v-25.552c0-16.52.078-25.807.195-26.257c.313-1.094.997-1.954 1.936-2.463c.801-.41 1.095-.45 4.164-.45c2.894 0 3.402.04 4.047.392"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <div className="text-base font-medium">Next js</div>
                    </div>
                    <div className="skill">
                      <div className="outer-circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          viewBox="0 0 16 16"
                        >
                          <rect width="16" height="16" fill="none" />
                          <g
                            fill="none"
                            stroke="#91d7e3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M8 10.8c4.14 0 7.5-1.25 7.5-2.8S12.14 5.2 8 5.2S.5 6.45.5 8s3.36 2.8 7.5 2.8" />
                            <path d="M5.52 9.4c2.07 3.5 4.86 5.72 6.23 4.95c1.37-.78.8-4.24-1.27-7.75C8.41 3.1 5.62.88 4.25 1.65c-1.37.78-.8 4.24 1.27 7.75" />
                            <path d="M5.52 6.6c-2.07 3.5-2.64 6.97-1.27 7.75c1.37.77 4.16-1.45 6.23-4.95s2.64-6.97 1.27-7.75C10.38.88 7.59 3.1 5.52 6.6" />
                            <path d="M8.5 8a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5" />
                          </g>
                        </svg>
                      </div>
                      <div className="text-base font-medium">React Js</div>
                    </div>
                    <div className="skill">
                      <div className="outer-circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="104.36"
                          height="64"
                          viewBox="0 0 512 314"
                        >
                          <rect width="512" height="314" fill="none" />
                          <defs>
                            <linearGradient
                              id="logosNodejs0"
                              x1="68.188%"
                              x2="27.823%"
                              y1="17.487%"
                              y2="89.755%"
                            >
                              <stop offset="0%" stopColor="#41873f" />
                              <stop offset="32.88%" stopColor="#418b3d" />
                              <stop offset="63.52%" stopColor="#419637" />
                              <stop offset="93.19%" stopColor="#3fa92d" />
                              <stop offset="100%" stopColor="#3fae2a" />
                            </linearGradient>
                            <linearGradient
                              id="logosNodejs1"
                              x1="43.277%"
                              x2="159.245%"
                              y1="55.169%"
                              y2="-18.306%"
                            >
                              <stop offset="13.76%" stopColor="#41873f" />
                              <stop offset="40.32%" stopColor="#54a044" />
                              <stop offset="71.36%" stopColor="#66b848" />
                              <stop offset="90.81%" stopColor="#6cc04a" />
                            </linearGradient>
                            <linearGradient
                              id="logosNodejs2"
                              x1="-4413.77%"
                              x2="5327.93%"
                              y1="13.43%"
                              y2="13.43%"
                            >
                              <stop offset="9.192%" stopColor="#6cc04a" />
                              <stop offset="28.64%" stopColor="#66b848" />
                              <stop offset="59.68%" stopColor="#54a044" />
                              <stop offset="86.24%" stopColor="#41873f" />
                            </linearGradient>
                            <linearGradient
                              id="logosNodejs3"
                              x1="-4.389%"
                              x2="101.499%"
                              y1="49.997%"
                              y2="49.997%"
                            >
                              <stop offset="9.192%" stopColor="#6cc04a" />
                              <stop offset="28.64%" stopColor="#66b848" />
                              <stop offset="59.68%" stopColor="#54a044" />
                              <stop offset="86.24%" stopColor="#41873f" />
                            </linearGradient>
                            <linearGradient
                              id="logosNodejs4"
                              x1="-9713.77%"
                              x2="27.93%"
                              y1="36.21%"
                              y2="36.21%"
                            >
                              <stop offset="9.192%" stopColor="#6cc04a" />
                              <stop offset="28.64%" stopColor="#66b848" />
                              <stop offset="59.68%" stopColor="#54a044" />
                              <stop offset="86.24%" stopColor="#41873f" />
                            </linearGradient>
                            <linearGradient
                              id="logosNodejs5"
                              x1="-103.861%"
                              x2="100.797%"
                              y1="50.275%"
                              y2="50.275%"
                            >
                              <stop offset="9.192%" stopColor="#6cc04a" />
                              <stop offset="28.64%" stopColor="#66b848" />
                              <stop offset="59.68%" stopColor="#54a044" />
                              <stop offset="86.24%" stopColor="#41873f" />
                            </linearGradient>
                            <linearGradient
                              id="logosNodejs6"
                              x1="130.613%"
                              x2="4.393%"
                              y1="-211.069%"
                              y2="201.605%"
                            >
                              <stop offset="0%" stopColor="#41873f" />
                              <stop offset="32.88%" stopColor="#418b3d" />
                              <stop offset="63.52%" stopColor="#419637" />
                              <stop offset="93.19%" stopColor="#3fa92d" />
                              <stop offset="100%" stopColor="#3fae2a" />
                            </linearGradient>
                            <path
                              id="logosNodejs7"
                              d="M57.903 1.85a5.96 5.96 0 0 0-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.96 5.96 0 0 0 5.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085z"
                            />
                          </defs>
                          <g fill="none">
                            <path
                              fill="#539e43"
                              d="M253.11 313.094c-1.733 0-3.351-.462-4.854-1.271l-15.371-9.13c-2.312-1.272-1.156-1.734-.462-1.965c3.12-1.04 3.698-1.272 6.934-3.12c.347-.232.81-.116 1.156.115l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.694-.694.694-1.271v-53.28c0-.579-.232-1.04-.694-1.272l-46.115-26.582c-.462-.232-1.04-.232-1.386 0l-46.115 26.582c-.462.231-.694.809-.694 1.271v53.28c0 .463.232 1.04.694 1.272l12.598 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.693.578-1.387 1.387-1.387h5.894c.694 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447c-2.658 0-4.738 0-10.633-2.89l-12.135-6.934c-3.005-1.733-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.849-6.704 4.854-8.437l46.114-26.698c2.89-1.618 6.82-1.618 9.709 0l46.114 26.698c3.005 1.733 4.855 4.97 4.855 8.437v53.28c0 3.467-1.85 6.704-4.855 8.437l-46.114 26.698c-1.503.694-3.236 1.04-4.854 1.04m14.216-36.637c-20.225 0-24.386-9.246-24.386-17.105c0-.694.578-1.387 1.387-1.387h6.01c.693 0 1.271.462 1.271 1.156c.925 6.125 3.583 9.13 15.834 9.13c9.708 0 13.87-2.196 13.87-7.397c0-3.005-1.157-5.2-16.297-6.703c-12.598-1.272-20.457-4.045-20.457-14.1c0-9.362 7.86-14.91 21.035-14.91c14.793 0 22.075 5.086 23 16.18q0 .521-.347 1.041c-.232.231-.578.462-.925.462h-6.01c-.578 0-1.156-.462-1.271-1.04c-1.387-6.356-4.97-8.437-14.447-8.437c-10.633 0-11.905 3.699-11.905 6.472c0 3.352 1.503 4.392 15.834 6.241c14.216 1.85 20.92 4.508 20.92 14.447c-.116 10.171-8.437 15.95-23.116 15.95"
                            />
                            <path
                              fill="#333"
                              d="M110.028 104.712c0-2.08-1.156-4.046-3.005-5.086l-49.004-28.2c-.81-.463-1.734-.694-2.658-.81h-.463c-.924 0-1.849.347-2.658.81l-49.004 28.2c-1.85 1.04-3.005 3.005-3.005 5.086l.116 75.817c0 1.04.578 2.08 1.502 2.543c.925.578 2.08.578 2.89 0l29.125-16.643c1.849-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.155-4.045 3.005-5.085l12.366-7.166c.925-.578 1.965-.81 3.005-.81s2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.004 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643a2.82 2.82 0 0 0 3.005 0c.925-.463 1.503-1.503 1.503-2.543zM345.571.347c-.924-.463-2.08-.463-2.89 0c-.924.578-1.502 1.502-1.502 2.542v75.125c0 .693-.346 1.386-1.04 1.849q-1.04.519-2.08 0l-12.251-7.05a5.96 5.96 0 0 0-5.895 0l-49.004 28.316c-1.849 1.04-3.005 3.005-3.005 5.085v56.516c0 2.08 1.156 4.046 3.005 5.086l49.004 28.316a5.96 5.96 0 0 0 5.895 0l49.004-28.316c1.849-1.04 3.005-3.005 3.005-5.086V21.844c0-2.196-1.156-4.16-3.005-5.201zm-4.507 143.776c0 .578-.231 1.04-.694 1.271l-16.758 9.708a1.71 1.71 0 0 1-1.503 0l-16.758-9.708c-.463-.231-.694-.809-.694-1.271v-19.417c0-.578.231-1.04.694-1.271l16.758-9.709a1.71 1.71 0 0 1 1.503 0l16.758 9.709c.463.23.694.809.694 1.271zm167.584-19.879c1.85-1.04 2.89-3.005 2.89-5.086v-13.753c0-2.08-1.156-4.045-2.89-5.085l-48.657-28.2a5.96 5.96 0 0 0-5.895 0l-49.004 28.315c-1.85 1.04-3.005 3.005-3.005 5.085v56.517c0 2.08 1.156 4.045 3.005 5.085l48.657 27.738c1.85 1.04 4.046 1.04 5.78 0L489 178.45c.925-.463 1.503-1.503 1.503-2.543s-.578-2.08-1.503-2.543l-49.235-28.316c-.925-.578-1.503-1.502-1.503-2.542v-17.683c0-1.04.578-2.08 1.503-2.543l15.371-8.784a2.82 2.82 0 0 1 3.005 0l15.372 8.784c.925.578 1.502 1.502 1.502 2.543v13.869c0 1.04.578 2.08 1.503 2.542a2.82 2.82 0 0 0 3.005 0z"
                            />
                            <path
                              fill="#539e43"
                              d="M456.292 121.585a1.05 1.05 0 0 1 1.156 0l9.362 5.432c.346.232.577.578.577 1.04v10.865c0 .462-.23.809-.577 1.04l-9.362 5.432a1.05 1.05 0 0 1-1.156 0l-9.361-5.432c-.347-.231-.578-.578-.578-1.04v-10.864c0-.463.23-.81.578-1.04z"
                            />
                            <g transform="translate(134.068 70.501)">
                              <mask id="logosNodejs8" fill="#fff">
                                <use href="#logosNodejs7" />
                              </mask>
                              <use
                                fill="url(#logosNodejs0)"
                                href="#logosNodejs7"
                              />
                              <g mask="url(#logosNodejs8)">
                                <path d="M51.893 1.85L3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693m4.739 123.204c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045z" />
                                <path
                                  fill="url(#logosNodejs1)"
                                  d="M106.676 29.934L57.788 1.85a8 8 0 0 0-1.503-.578L1.502 95.12a6.1 6.1 0 0 0 1.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156"
                                />
                              </g>
                              <g mask="url(#logosNodejs8)">
                                <path d="M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.1 5.1 0 0 0-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271M3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085q1.734 1.04 3.814.693L3.467 29.818z" />
                                <path
                                  fill="url(#logosNodejs2)"
                                  fillRule="evenodd"
                                  d="m50.391.809l-.693.347h.924z"
                                  transform="translate(0 -9.246)"
                                />
                                <path
                                  fill="url(#logosNodejs3)"
                                  fillRule="evenodd"
                                  d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8 8 0 0 0 2.196-.693z"
                                  transform="translate(0 -9.246)"
                                />
                                <path
                                  fill="url(#logosNodejs4)"
                                  fillRule="evenodd"
                                  d="m111.3 104.712l-.347-.578v.809z"
                                  transform="translate(0 -9.246)"
                                />
                                <path
                                  fill="url(#logosNodejs5)"
                                  fillRule="evenodd"
                                  d="m106.792 105.636l-48.773 28.085a7 7 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814"
                                  transform="translate(0 -9.246)"
                                />
                                <path
                                  fill="url(#logosNodejs6)"
                                  fillRule="evenodd"
                                  d="m106.792 105.636l-48.773 28.085a7 7 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814"
                                  transform="translate(0 -9.246)"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="text-base font-medium">Node Js</div>
                    </div>
                    <div className="skill">
                      <div className="outer-circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={256}
                          height={256}
                          viewBox="0 0 256 256"
                        >
                          <g fill="none">
                            <rect
                              width={256}
                              height={256}
                              fill="#049789"
                              rx={60}
                              strokeWidth={6.5}
                              stroke="#049789"
                            ></rect>
                            <path
                              fill="#fff"
                              d="M127.5 41C79.743 41 41 79.743 41 127.5S79.743 214 127.5 214s86.5-38.743 86.5-86.5S175.257 41 127.5 41m-4.507 155.839v-54.258H92.831l43.336-84.42v54.258h29.036z"
                              strokeWidth={6.5}
                              stroke="#fff"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <div className="text-base font-medium">Fast api</div>
                    </div>
                    <div className="skill">
                      <div className="outer-circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={128}
                          height={128}
                          viewBox="0 0 128 128"
                        >
                          <path
                            fill="#94795d"
                            fillRule="evenodd"
                            d="M87.259 100.139c.169-.325.331-.612.469-.909c.087-.19.221-.228.41-.223c1.133.032 2.266.067 3.4.078c.963.01 1.928-.008 2.892-.019c1.086-.013 2.172-.07 3.257-.039c1.445.042 2.853.325 4.16.968c1.561.769 2.742 1.94 3.547 3.483a8.7 8.7 0 0 1 .931 3.14c.172 1.608.059 3.179-.451 4.717c-.632 1.906-1.832 3.365-3.499 4.458c-1.283.841-2.69 1.338-4.198 1.622c-1.596.301-3.197.204-4.798.209c-1.756.007-3.511-.031-5.267-.051c-.307-.003-.351-.061-.27-.354l.075-.27c.171-.538.263-.562.809-.652a2.8 2.8 0 0 0 1.087-.413c.184-.122.26-.44.332-.685c.062-.214.065-.449.067-.675c.025-3.425.051-6.849.065-10.272a44 44 0 0 0-.065-2.596c-.034-.605-.357-1.019-1.077-1.162c-.56-.111-1.124-.197-1.687-.296zm16.076 8.293c-.076-.682-.113-1.37-.235-2.042c-.292-1.613-.998-3.018-2.238-4.119c-2.005-1.779-4.419-2.053-6.949-1.841c-.576.048-.7.245-.709.837c-.014.84-.028 1.68-.029 2.52q-.006 3.996 0 7.992q0 1.138.031 2.272c.024.774.305 1.429 1.063 1.729c1.195.473 2.452.529 3.706.336c2.003-.307 3.404-1.474 4.344-3.223c.744-1.388.954-2.903 1.016-4.461m4.869 9.071c-.024-.415.146-.758.356-1.073c.057-.085.253-.081.388-.108l1.146-.227c.405-.086.618-.358.675-.755c.038-.262.074-.527.077-.792a880 880 0 0 0 .059-6.291c.01-2.1.002-4.2.002-6.3l-.009-.401c-.041-.675-.367-1.025-1.037-1.124l-1.453-.221c-.179-.024-.244-.11-.179-.269c.112-.271.219-.552.377-.796c.059-.09.258-.125.392-.122c.694.01 1.388.062 2.082.061l6.041-.036c1.164-.001 2.288.202 3.332.759c1.149.612 1.792 1.559 1.976 2.849c.192 1.355-.219 2.497-1.209 3.404c-.407.374-.934.618-1.406.922l-.154.096c.438.161.855.3 1.261.466c1.188.487 2.133 1.248 2.633 2.463c.395.959.395 1.959.161 2.953c-.364 1.556-1.389 2.591-2.722 3.374c-1.251.735-2.605 1.163-4.047 1.235c-1.33.067-2.666.042-3.999.057l-.772.004a996 996 0 0 1-3.854-.096zm5.537-6.089h.013c0 .658-.009 1.316.003 1.974c.008.426-.007.864.085 1.274c.138.613.418 1.166 1.106 1.342a6.7 6.7 0 0 0 2.818.124c1.177-.205 2.116-.795 2.631-1.916c.382-.833.439-1.716.308-2.618c-.174-1.188-.805-2.05-1.854-2.615c-.688-.371-1.422-.598-2.204-.628c-.876-.033-1.753-.035-2.629-.062c-.246-.007-.28.118-.279.32c.005.934.002 1.869.002 2.805m1.865-4.475c.479-.024 1.021-.031 1.56-.085c1.032-.103 1.759-.622 2.138-1.609c.193-.501.185-1.017.19-1.538c.015-1.357-.777-2.469-2.066-2.929c-.995-.355-2.021-.361-3.053-.333c-.418.011-.605.194-.611.615l-.062 5.489c-.003.218.091.312.303.319z"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#50382b"
                            fillRule="evenodd"
                            d="m10.543 116.448l-.073.944c-.68 0-1.307-.005-1.934.002c-1.181.012-2.362.031-3.544.048l-.114.007c-.169-.02-.476-.02-.484-.07c-.05-.281-.034-.576-.021-.867c.001-.033.116-.075.183-.091l.919-.205c.573-.149.775-.396.802-.988c.031-.667.062-1.335.065-2.002c.009-1.642-.001-3.282.006-4.924c.001-.384-.132-.67-.49-.826a44 44 0 0 0-1.285-.546c-.204-.082-.469-.127-.445-.401c.024-.279.281-.352.523-.407c1.002-.229 2.005-.452 3.004-.696c.322-.079.63-.212 1.015-.346c.02.208.057.406.053.604l-.059.941c-.001.106.054.248.133.307c.048.037.209-.03.289-.092c.854-.65 1.758-1.211 2.789-1.538c1.597-.507 2.968-.037 3.928 1.34c.338.485.339.485.808.146c.805-.585 1.647-1.101 2.589-1.441c2.068-.747 4.055.201 4.774 2.284c.262.756.362 1.537.36 2.335l-.019 5.298c-.001.437.144.686.56.822c.467.153.951.258 1.477.396l-.122.911c-.598 0-1.148-.004-1.698.001c-1.344.012-2.688.019-4.031.05c-.234.006-.295-.052-.307-.271c-.039-.701-.045-.7.615-.858l.222-.057c.645-.176.86-.374.865-1.028c.015-1.878.054-3.761-.041-5.635c-.099-1.944-1.642-2.979-3.526-2.481a5.2 5.2 0 0 0-1.69.814c-.175.125-.208.269-.194.488q.081 1.242.093 2.486c.012 1.451-.006 2.902 0 4.354c.002.588.203.813.784.949l.863.199l.16.036c.012.276.023.552.01.828c-.008.173-.142.188-.292.185c-.839-.021-1.679-.049-2.518-.047c-1.021.002-2.041.031-3.061.049h-.24c0-.293-.014-.573.01-.852c.005-.067.123-.161.204-.182l1.006-.213c.427-.105.631-.324.655-.758c.114-2.01.196-4.021.007-6.03a3.7 3.7 0 0 0-.326-1.145c-.515-1.138-1.674-1.613-3.011-1.271c-.635.162-1.208.453-1.75.82a.8.8 0 0 0-.378.695q.002 3.008.013 6.014l.011.773c.012.539.241.823.776.939c.344.078.692.131 1.082.203"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#4f382b"
                            fillRule="evenodd"
                            d="M71.001 105.285c.155.754.152 1.432-.402 1.946c-.55.511-1.246.339-1.925.225c.063.358.133.662.167.97c.247 2.289-.738 3.988-2.861 4.959c-.802.366-1.653.502-2.522.572c-.432.034-.81.364-.851.719c-.042.36.184.73.636.838c.533.127 1.089.163 1.636.226c1.174.134 2.361.195 3.521.405c1.754.316 2.733 1.847 2.424 3.609c-.275 1.568-1.183 2.709-2.449 3.584c-2.133 1.478-4.473 1.91-6.965 1.156c-1.425-.432-2.43-1.369-2.777-2.885c-.174-.759.011-1.446.582-1.961c.679-.61 1.418-1.154 2.129-1.73l.23-.231l-.264-.185c-.725-.344-1.305-.815-1.53-1.633c-.077-.277.003-.459.238-.601q.6-.361 1.193-.735c.186-.116.37-.236.543-.37c.236-.18.215-.314-.067-.418c-.656-.242-1.239-.593-1.691-1.133c-.755-.901-.969-1.974-.907-3.107c.097-1.77 1.058-2.936 2.62-3.686c1.857-.891 3.72-.947 5.613-.135c.7.3 1.438.364 2.189.312c.561-.04 1.051-.252 1.49-.711m-6.843 12.681c-1.394-.012-1.831.16-2.649.993c-.916.934-.911 2.229.003 3.167c.694.711 1.56 1.044 2.523 1.144c1.125.116 2.233.069 3.255-.494c1.09-.603 1.632-1.723 1.387-2.851c-.203-.931-.889-1.357-1.724-1.602c-.95-.278-1.932-.331-2.795-.357m-2.738-8.908c.051.387.072.779.158 1.158c.223.982.65 1.845 1.627 2.282c1.147.515 2.612.294 3.114-1.316a4.85 4.85 0 0 0-.113-3.274a2.5 2.5 0 0 0-.91-1.184c-.996-.695-2.793-.787-3.525.749c-.238.499-.331 1.03-.351 1.585"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#4f372b"
                            fillRule="evenodd"
                            d="M47.35 105.038c.037.171.111.365.113.56c.003.371-.037.742-.058 1.113v.322l.314-.24c.86-.708 1.784-1.311 2.86-1.636c1.942-.585 3.882.478 4.515 2.456c.24.752.335 1.525.344 2.311c.02 1.746.032 3.492.05 5.238c.006.627.078.739.671.92a7.4 7.4 0 0 0 1.03.229c.191.03.273.105.263.292l.002.172c-.007.723-.057.756-.758.754c-1.678-.003-3.355.007-5.033.021c-.5.004-.501.019-.551-.475l-.01-.284c.031-.426.041-.422.46-.484c.282-.042.562-.107.837-.179c.283-.073.419-.282.457-.562c.019-.142.044-.284.043-.426c-.024-1.908.007-3.818-.097-5.723c-.084-1.541-1.26-2.459-2.807-2.354a4.05 4.05 0 0 0-2.071.743c-.413.289-.496.706-.494 1.155q.014 2.676.044 5.353c.004.391.015.782.052 1.17c.039.424.188.595.604.687c.398.088.804.139 1.229.21l.036.328c.014.765-.066.822-.809.819c-1.735-.007-3.47.004-5.204.023c-.273.004-.389-.082-.382-.348l-.004-.114c-.045-.689-.025-.715.627-.827l.308-.062c.706-.159.887-.347.897-1.064c.033-2.271.045-4.541.068-6.812c.003-.326-.12-.579-.424-.714a54 54 0 0 0-1.287-.544c-.238-.098-.51-.16-.519-.489c-.006-.232.242-.437.581-.506c.681-.138 1.368-.253 2.041-.422c.67-.167 1.328-.391 2.062-.611"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#4f382b"
                            fillRule="evenodd"
                            d="M84.865 110.97c-.032 2.121-.583 3.836-2.083 5.123c-1.9 1.633-4.864 2.188-7.287.967c-1.034-.521-1.794-1.32-2.289-2.357c-.759-1.595-.949-3.272-.553-4.99c.392-1.699 1.421-2.93 2.961-3.727c1.584-.819 3.252-1.139 5.011-.709c2.225.543 3.824 2.357 4.142 4.667c.057.405.079.815.098 1.026m-2.577 1.149l-.086-.01c0-.2.011-.4-.002-.6c-.073-1.246-.353-2.433-1.075-3.476c-.685-.988-1.618-1.571-2.832-1.656c-1.359-.096-2.501.664-2.902 2.052c-.602 2.084-.398 4.115.66 6.024c.461.832 1.144 1.446 2.059 1.769c1.793.631 3.383-.186 3.85-2.022c.172-.678.222-1.387.328-2.081"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#4f372b"
                            fillRule="evenodd"
                            d="M40.819 111.134c-.037 1.522-.396 2.929-1.336 4.152c-1.007 1.31-2.391 2.01-3.965 2.305c-1.861.348-3.609.032-5.104-1.217c-.71-.594-1.195-1.355-1.515-2.221c-.525-1.42-.656-2.875-.333-4.358c.345-1.587 1.241-2.8 2.63-3.614c1.606-.939 3.339-1.358 5.19-.936c2.38.544 3.754 2.095 4.262 4.443c.102.474.116.964.171 1.446m-2.606 1.004l-.069-.01v-.286c-.039-1.396-.312-2.726-1.145-3.886c-.617-.861-1.443-1.401-2.502-1.552c-1.726-.246-2.854.778-3.228 2.169c-.488 1.817-.335 3.612.42 5.335c.471 1.074 1.215 1.911 2.358 2.317c1.782.633 3.396-.205 3.847-2.034c.166-.669.216-1.367.319-2.053"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#439934"
                            fillRule="evenodd"
                            d="M82.362 33.544c1.227 3.547 2.109 7.168 2.4 10.92c.36 4.656.196 9.28-.786 13.859l-.126.366c-.308.001-.622-.038-.923.009c-2.543.4-5.083.814-7.624 1.226c-2.627.426-5.256.835-7.878 1.289c-.929.16-2.079-.031-2.454 1.253l-.18.061l.127-7.678l-.129-18.526l1.224-.21c2.001-.327 4.002-.66 6.006-.979c2.39-.379 4.782-.749 7.174-1.119c1.056-.162 2.113-.313 3.169-.471"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#45a538"
                            fillRule="evenodd"
                            d="M62.265 84.911c-1.291-1.11-2.627-2.171-3.864-3.339c-6.658-6.28-11.529-13.673-13.928-22.586c-.661-2.452-1.101-4.945-1.243-7.479c-.1-1.774-.243-3.563-.117-5.328c.333-4.693 1.012-9.341 2.388-13.862l.076-.105c.134.178.326.336.394.537q2.015 5.934 4.004 11.879c4.169 12.451 8.333 24.905 12.509 37.354c.082.243.293.442.445.661z"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#46a037"
                            fillRule="evenodd"
                            d="M82.362 33.544c-1.057.157-2.114.309-3.169.471c-2.392.37-4.784.74-7.174 1.119c-2.003.318-4.004.651-6.006.979l-1.224.21l-.01-.798c-.041-.656-.109-1.312-.118-1.968l-.137-12.554c-.032-2.619-.08-5.238-.133-7.856a198 198 0 0 0-.141-4.88c-.04-.873-.181-1.742-.237-2.615c-.033-.502.011-1.008.022-1.512c.624 1.209 1.235 2.427 1.876 3.627c1.013 1.897 2.628 3.295 4.083 4.82c5.746 6.031 9.825 13.039 12.368 20.957"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#409433"
                            fillRule="evenodd"
                            d="m64.792 62.527l.18-.061c.375-1.284 1.525-1.093 2.454-1.253c2.622-.454 5.251-.863 7.878-1.289c2.541-.411 5.081-.825 7.624-1.226c.301-.047.615-.008.923-.009c-.475 1.696-.849 3.429-1.452 5.078c-.685 1.87-1.513 3.696-2.392 5.486a37.6 37.6 0 0 1-4.853 7.458c-1.466 1.762-3.1 3.393-4.737 5.002c-.906.889-1.972 1.614-2.966 2.414l-.258-.176l-.927-.792l-.959-2.104a31.7 31.7 0 0 1-1.065-7.516l.018-.428l.131-1.854c.043-.633.101-1.265.128-1.898c.096-2.276.182-4.554.273-6.832"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#4faa41"
                            fillRule="evenodd"
                            d="M64.792 62.527c-.09 2.278-.176 4.557-.273 6.835c-.027.634-.084 1.266-.128 1.898l-.584.221c-1.298-3.821-2.597-7.602-3.867-11.392c-2.101-6.271-4.176-12.551-6.274-18.824a3423 3423 0 0 0-5.118-15.176c-.081-.236-.311-.422-.471-.631l3.74-6.877c.129.223.298.432.379.672c1.73 5.12 3.457 10.241 5.169 15.367c2.228 6.67 4.441 13.343 6.667 20.014c.089.266.235.512.375.811l.512-.596z"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#4aa73c"
                            fillRule="evenodd"
                            d="M48.076 25.458c.161.209.391.395.471.631a3380 3380 0 0 1 5.118 15.176c2.098 6.273 4.173 12.553 6.274 18.824c1.27 3.79 2.569 7.57 3.867 11.392l.584-.221l-.131 1.854l-.119.427c-.203 2.029-.374 4.062-.622 6.087c-.124 1.015-.389 2.011-.59 3.015c-.151-.219-.363-.418-.445-.661c-4.177-12.449-8.34-24.903-12.509-37.354a3011 3011 0 0 0-4.004-11.879c-.068-.201-.26-.359-.394-.537z"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#57ae47"
                            fillRule="evenodd"
                            d="m64.918 54.849l-.512.596c-.14-.299-.286-.545-.375-.811c-2.226-6.671-4.439-13.344-6.667-20.014a4618 4618 0 0 0-5.169-15.367c-.081-.24-.25-.449-.379-.672l4.625-6.084c.146.194.354.367.429.586q1.925 5.64 3.822 11.289c1.182 3.518 2.346 7.04 3.542 10.552c.08.235.359.401.545.601l.01.798z"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#60b24f"
                            fillRule="evenodd"
                            d="M64.779 35.525c-.187-.199-.465-.365-.545-.601c-1.195-3.512-2.36-7.034-3.542-10.552a2496 2496 0 0 0-3.822-11.289c-.075-.219-.283-.392-.429-.586c1.504-1.473 2.961-2.999 4.526-4.404c1.391-1.248 2.509-2.586 2.561-4.559l.11-.393l.396.998c-.01.504-.055 1.01-.022 1.512c.057.873.198 1.742.237 2.615c.073 1.625.108 3.253.141 4.88c.053 2.618.101 5.237.133 7.856l.137 12.554c.01.657.079 1.313.119 1.969"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#a9aa88"
                            fillRule="evenodd"
                            d="M62.929 82.642c.201-1.004.466-2 .59-3.015c.248-2.024.419-4.058.622-6.087l.051-.008l.05.009a31.7 31.7 0 0 0 1.065 7.516c-.135.178-.324.335-.396.535c-.555 1.566-1.079 3.145-1.637 4.71c-.076.214-.29.381-.439.568l-.571-1.96z"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#b6b598"
                            fillRule="evenodd"
                            d="M62.835 86.871c.149-.188.363-.354.439-.568c.558-1.565 1.082-3.144 1.637-4.71c.071-.2.261-.357.396-.535l.959 2.104c-.189.268-.451.511-.556.81l-1.836 5.392c-.076.217-.333.369-.507.552z"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#c2c1a7"
                            fillRule="evenodd"
                            d="M63.367 89.915c.173-.183.431-.335.507-.552l1.836-5.392c.104-.299.367-.542.556-.81l.928.791c-.448.443-.697.955-.547 1.602l-.282.923c-.128.158-.314.296-.377.477c-.641 1.836-1.252 3.682-1.898 5.517c-.082.232-.309.415-.468.621z"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#cecdb7"
                            fillRule="evenodd"
                            d="M63.621 93.091c.16-.206.387-.389.468-.621c.646-1.835 1.258-3.681 1.898-5.517c.063-.181.249-.318.377-.477l-.389 4.236c-.104.12-.254.225-.304.364l-1.294 3.708c-.091.253-.265.479-.401.716c-.121-.158-.337-.311-.347-.475c-.038-.642-.011-1.289-.008-1.934"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#dbdac7"
                            fillRule="evenodd"
                            d="M63.977 95.501c.136-.237.31-.463.401-.716l1.294-3.708c.05-.14.201-.244.304-.364l.01 2.78l-.931 2.387z"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#ebe9dc"
                            fillRule="evenodd"
                            d="m65.055 95.88l.931-2.387l.192 2.824z"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#cecdb7"
                            fillRule="evenodd"
                            d="M66.646 85.554c-.149-.646.099-1.158.547-1.602l.258.176z"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#4faa41"
                            fillRule="evenodd"
                            d="m64.242 73.542l-.05-.009l-.051.008l.119-.427z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="text-base font-medium">MongoDB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-info" id="contact">
              <div className="main-text">
                <h2 className="heading">Contact Me</h2>
                <span>get in touch with me</span>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <footer className="py-8 ">
          <div className="px-6 mx-auto ">
            <div className="flex items-center justify-center gap-4">
              <a href="https://github.com/Ramesh-Bojanapu-1011" target="_blank">
                <div className="rounded-[20px] p-2 bg-gradient-to-b from-pink-600 to-purple-600 via-purple-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 15 15"
                  >
                    <rect width="15" height="15" fill="none" />
                    <path
                      fill="#ffff"
                      d="M9.358 2.145a8.2 8.2 0 0 0-3.716 0c-.706-.433-1.245-.632-1.637-.716a2.2 2.2 0 0 0-.51-.053a1.3 1.3 0 0 0-.232.028l-.01.002l-.004.002h-.003l.137.481l-.137-.48a.5.5 0 0 0-.32.276a3.12 3.12 0 0 0-.159 2.101A3.35 3.35 0 0 0 2 5.93c0 1.553.458 2.597 1.239 3.268c.547.47 1.211.72 1.877.863a2.3 2.3 0 0 0-.116.958v.598c-.407.085-.689.058-.89-.008c-.251-.083-.444-.25-.629-.49a5 5 0 0 1-.27-.402l-.057-.093a9 9 0 0 0-.224-.354c-.19-.281-.472-.633-.928-.753l-.484-.127l-.254.968l.484.127c.08.02.184.095.355.346a7 7 0 0 1 .19.302l.068.11c.094.152.202.32.327.484c.253.33.598.663 1.11.832c.35.116.748.144 1.202.074V14.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-3.562c0-.316-.014-.605-.103-.874c.663-.14 1.322-.39 1.866-.86c.78-.676 1.237-1.73 1.237-3.292v-.001a3.35 3.35 0 0 0-.768-2.125a3.12 3.12 0 0 0-.159-2.1a.5.5 0 0 0-.319-.277l-.137.48c.137-.48.136-.48.135-.48l-.002-.001l-.004-.002l-.009-.002l-.075-.015a1 1 0 0 0-.158-.013a2.2 2.2 0 0 0-.51.053c-.391.084-.93.283-1.636.716"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/ramesh-bojanapu-a5674819a/"
                target="_blank"
              >
                <div className="rounded-[20px] p-2 bg-gradient-to-b from-pink-600 to-purple-600 via-purple-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="#fff"
                      d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"
                    />
                  </svg>
                </div>
              </a>
              <a href="mailto:bramesh101020@gmail.com" target="_blank">
                <div className="rounded-[20px] p-2 bg-gradient-to-b from-pink-600 to-purple-600 via-purple-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 16 16"
                  >
                    <rect width="16" height="16" fill="none" />
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A1 1 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z"
                    />
                  </svg>
                </div>
              </a>
            </div>
            <div className="mt-6 text-sm text-center">
              <p>&copy; 2024 Ramesh. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <div id="progress">
          <span id="progress-value">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="m6.293 11.293l1.414 1.414L12 8.414l4.293 4.293l1.414-1.414L12 5.586z"
              />
              <path
                fill="currentColor"
                d="m6.293 16.293l1.414 1.414L12 13.414l4.293 4.293l1.414-1.414L12 10.586z"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
