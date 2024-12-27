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
  const [skillsPlayed, setSkillsPlayed] = useState(false);

  const hasReached = (el: HTMLElement): boolean => {
    const topPosition = el.getBoundingClientRect().top;
    if (window.innerHeight * 0.8 >= topPosition + el.offsetHeight) return true;
    return false;
  };

  const updateCount = useCallback((num: HTMLElement, maxNum: number) => {
    const currentNum = +num.innerText;

    if (currentNum < maxNum) {
      num.innerText = (currentNum + 1).toString();
      requestAnimationFrame(() => updateCount(num, maxNum));
    }
  }, []);

  const skillsCounter = useCallback(() => {
    const firstSkill = document.querySelector(
      ".skill:first-child"
    ) as HTMLElement;
    const skCounters = document.querySelectorAll(
      ".counter span"
    ) as NodeListOf<HTMLElement>;
    const progressBars = document.querySelectorAll(
      ".skills svg circle"
    ) as NodeListOf<HTMLElement>;

    if (!hasReached(firstSkill)) return;

    setSkillsPlayed(true);

    skCounters.forEach((counter, i) => {
      const target = +counter.dataset.target!;
      const strokeValue = 465 - 465 * (target / 100);

      progressBars[i].style.setProperty("--target", strokeValue.toString());

      setTimeout(() => {
        updateCount(counter, target);
      }, 400);
    });

    progressBars.forEach((p) => {
      p.style.animation = "progress 2s ease-in-out forwards";
    });
  }, [updateCount]);

  useEffect(() => {
    const handleScroll = () => {
      if (!skillsPlayed) skillsCounter();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [skillsPlayed, skillsCounter]);

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
                        <span>+91 9603398030</span>
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
                        <strong>Age:</strong>
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
                        <strong className="px-1">Email</strong>
                        <span>bramesh101020@gmailcom</span>
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
                        <div className="inner-circle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            width="180px"
                            height="180px"
                          >
                            <defs>
                              <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                              </linearGradient>
                            </defs>
                            <circle
                              cx="85"
                              cy="85"
                              r="75"
                              strokeLinecap="round"
                            />
                          </svg>
                          <h2 className="counter">
                            <span data-target="89">0</span>%
                          </h2>
                        </div>
                      </div>
                      <div className="sk-title">HTML</div>
                    </div>

                    <div className="skill">
                      <div className="outer-circle">
                        <div className="inner-circle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            width="180px"
                            height="180px"
                          >
                            <defs>
                              <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                              </linearGradient>
                            </defs>
                            <circle
                              cx="85"
                              cy="85"
                              r="75"
                              strokeLinecap="round"
                            />
                          </svg>
                          <h2 className="counter">
                            <span data-target="47">0</span>%
                          </h2>
                        </div>
                      </div>
                      <div className="sk-title">CSS</div>
                    </div>

                    <div className="skill">
                      <div className="outer-circle">
                        <div className="inner-circle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            width="180px"
                            height="180px"
                          >
                            <defs>
                              <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                              </linearGradient>
                            </defs>
                            <circle
                              cx="85"
                              cy="85"
                              r="75"
                              strokeLinecap="round"
                            />
                          </svg>
                          <h2 className="counter">
                            <span data-target="36">0</span>%
                          </h2>
                        </div>
                      </div>
                      <div className="sk-title">Javascript</div>
                    </div>
                    <div className="skill">
                      <div className="outer-circle">
                        <div className="inner-circle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            width="180px"
                            height="180px"
                          >
                            <defs>
                              <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                              </linearGradient>
                            </defs>
                            <circle
                              cx="85"
                              cy="85"
                              r="75"
                              strokeLinecap="round"
                            />
                          </svg>
                          <h2 className="counter">
                            <span data-target="56">0</span>%
                          </h2>
                        </div>
                      </div>
                      <div className="sk-title">Node Js</div>
                    </div>

                    <div className="skill">
                      <div className="outer-circle">
                        <div className="inner-circle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            width="180px"
                            height="180px"
                          >
                            <defs>
                              <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                              </linearGradient>
                            </defs>
                            <circle
                              cx="85"
                              cy="85"
                              r="75"
                              strokeLinecap="round"
                            />
                          </svg>
                          <h2 className="counter">
                            <span data-target="19">0</span>%
                          </h2>
                        </div>
                      </div>
                      <div className="sk-title">UI/UX Design</div>
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
