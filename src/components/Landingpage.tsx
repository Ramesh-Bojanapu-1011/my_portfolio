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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                <a href="https://github.com/lovelyram0143" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="currentColor"
                      // fill-rule="evenodd"
                      d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
                      // clip-rule="evenodd"
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
                          stroke-width="0"
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
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M192 128l128 128-128 128z"></path>
                        </svg>
                        <strong className="px-1">Phone:</strong>{" "}
                        <a href="tel:9603398030">
                          <span>+91 9603398030</span>
                        </a>
                      </li>
                      <li className="flex items-center mb-5">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
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
                          stroke-width="0"
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
                          stroke-width="0"
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
                          stroke-width="0"
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
                          stroke-width="0"
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
                {/* <div className="text-box">
                  <div>
                    <p>User Experience Design - UI / UX</p>
                    <span>Delight the user and make it work.</span>
                  </div>
                </div>
                <div className="text-box">
                  <p>Web & User Interface Design - Development</p>
                  <span>Website , Web Experience , ...</span>
                </div>
                <div className="text-box">
                  <p>Interaction Desing - Animation</p>
                  <span>I Like to move it move it</span>
                </div> */}
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
                {/* <LuLayers /> */}
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
                          width="50"
                          height="50"
                          viewBox="0 0 24 24"
                        >
                          <rect width="24" height="24" fill="none" />
                          <g fill="none">
                            <g
                              fill="currentColor"
                              clip-path="url(#akarIconsHtmlFill0)"
                            >
                              <path d="M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656zM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058zm4.181 0h1.083v2.167h1.52v1.07h-2.603z" />
                              <path
                                fill-rule="evenodd"
                                d="M5.046 22.072L3 4.717h18L18.953 22.07L11.99 24zm4.137-9.5l-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.332l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571z"
                                clip-rule="evenodd"
                              />
                            </g>
                            <defs>
                              <clipPath id="akarIconsHtmlFill0">
                                <path fill="#fff" d="M0 0h24v24H0z" />
                              </clipPath>
                            </defs>
                          </g>
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
                          width="64"
                          height="64"
                          viewBox="0 0 256 256"
                        >
                          <rect width="256" height="256" fill="none" />
                          <g fill="none">
                            <rect width="256" height="256" fill="" rx="60" />
                            <path
                              fill="url(#skillIconsTailwindcssLight0)"
                              fill-rule="evenodd"
                              d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5"
                              clip-rule="evenodd"
                            />
                            <defs>
                              <linearGradient
                                id="skillIconsTailwindcssLight0"
                                x1="86.5"
                                x2="163.5"
                                y1="74"
                                y2="185.5"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#32b1c1" />
                                <stop offset="1" stop-color="#14c6b7" />
                              </linearGradient>
                            </defs>
                          </g>
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
                          width="64"
                          height="64"
                          viewBox="0 0 16 16"
                        >
                          <rect width="16" height="16" fill="none" />
                          <g
                            fill="none"
                            stroke="#91d7e3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                              <stop offset="0%" stop-color="#41873f" />
                              <stop offset="32.88%" stop-color="#418b3d" />
                              <stop offset="63.52%" stop-color="#419637" />
                              <stop offset="93.19%" stop-color="#3fa92d" />
                              <stop offset="100%" stop-color="#3fae2a" />
                            </linearGradient>
                            <linearGradient
                              id="logosNodejs1"
                              x1="43.277%"
                              x2="159.245%"
                              y1="55.169%"
                              y2="-18.306%"
                            >
                              <stop offset="13.76%" stop-color="#41873f" />
                              <stop offset="40.32%" stop-color="#54a044" />
                              <stop offset="71.36%" stop-color="#66b848" />
                              <stop offset="90.81%" stop-color="#6cc04a" />
                            </linearGradient>
                            <linearGradient
                              id="logosNodejs2"
                              x1="-4413.77%"
                              x2="5327.93%"
                              y1="13.43%"
                              y2="13.43%"
                            >
                              <stop offset="9.192%" stop-color="#6cc04a" />
                              <stop offset="28.64%" stop-color="#66b848" />
                              <stop offset="59.68%" stop-color="#54a044" />
                              <stop offset="86.24%" stop-color="#41873f" />
                            </linearGradient>
                            <linearGradient
                              id="logosNodejs3"
                              x1="-4.389%"
                              x2="101.499%"
                              y1="49.997%"
                              y2="49.997%"
                            >
                              <stop offset="9.192%" stop-color="#6cc04a" />
                              <stop offset="28.64%" stop-color="#66b848" />
                              <stop offset="59.68%" stop-color="#54a044" />
                              <stop offset="86.24%" stop-color="#41873f" />
                            </linearGradient>
                            <linearGradient
                              id="logosNodejs4"
                              x1="-9713.77%"
                              x2="27.93%"
                              y1="36.21%"
                              y2="36.21%"
                            >
                              <stop offset="9.192%" stop-color="#6cc04a" />
                              <stop offset="28.64%" stop-color="#66b848" />
                              <stop offset="59.68%" stop-color="#54a044" />
                              <stop offset="86.24%" stop-color="#41873f" />
                            </linearGradient>
                            <linearGradient
                              id="logosNodejs5"
                              x1="-103.861%"
                              x2="100.797%"
                              y1="50.275%"
                              y2="50.275%"
                            >
                              <stop offset="9.192%" stop-color="#6cc04a" />
                              <stop offset="28.64%" stop-color="#66b848" />
                              <stop offset="59.68%" stop-color="#54a044" />
                              <stop offset="86.24%" stop-color="#41873f" />
                            </linearGradient>
                            <linearGradient
                              id="logosNodejs6"
                              x1="130.613%"
                              x2="4.393%"
                              y1="-211.069%"
                              y2="201.605%"
                            >
                              <stop offset="0%" stop-color="#41873f" />
                              <stop offset="32.88%" stop-color="#418b3d" />
                              <stop offset="63.52%" stop-color="#419637" />
                              <stop offset="93.19%" stop-color="#3fa92d" />
                              <stop offset="100%" stop-color="#3fae2a" />
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
                                  fill-rule="evenodd"
                                  d="m50.391.809l-.693.347h.924z"
                                  transform="translate(0 -9.246)"
                                />
                                <path
                                  fill="url(#logosNodejs3)"
                                  fill-rule="evenodd"
                                  d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8 8 0 0 0 2.196-.693z"
                                  transform="translate(0 -9.246)"
                                />
                                <path
                                  fill="url(#logosNodejs4)"
                                  fill-rule="evenodd"
                                  d="m111.3 104.712l-.347-.578v.809z"
                                  transform="translate(0 -9.246)"
                                />
                                <path
                                  fill="url(#logosNodejs5)"
                                  fill-rule="evenodd"
                                  d="m106.792 105.636l-48.773 28.085a7 7 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814"
                                  transform="translate(0 -9.246)"
                                />
                                <path
                                  fill="url(#logosNodejs6)"
                                  fill-rule="evenodd"
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
                          width="64"
                          height="64"
                          viewBox="0 0 256 256"
                        >
                          <rect width="256" height="256" fill="none" />
                          <g fill="none">
                            <rect
                              width="256"
                              height="256"
                              fill="#092e20"
                              rx="60"
                            />
                            <path
                              fill="#fff"
                              d="M112.689 51h28.615v132.45c-14.679 2.787-25.456 3.902-37.161 3.902C69.209 187.351 51 171.559 51 141.271c0-29.173 19.325-48.124 49.24-48.124c4.645 0 8.175.37 12.449 1.485zm0 66.671c-3.344-1.113-6.131-1.485-9.661-1.485c-14.493 0-22.856 8.919-22.856 24.526c0 15.238 7.991 23.599 22.67 23.599c3.157 0 5.76-.186 9.847-.742z"
                            />
                            <path
                              fill="#fff"
                              d="M186.826 95.19v66.332c0 22.856-1.672 33.818-6.689 43.295c-4.646 9.106-10.778 14.865-23.413 21.183l-26.571-12.636c12.635-5.945 18.767-11.146 22.668-19.139c4.089-8.175 5.391-17.652 5.391-42.55V95.189zm-28.614-44.038h28.614V80.51h-28.614z"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="text-base font-medium">Django</div>
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
              <a href="https://github.com/lovelyram0143" target="_blank">
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
                      fill-rule="evenodd"
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
