import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Ramesh Bojanapu - Full Stack Developer specializing in Next.js, React, Node.js, MongoDB, and Django. Available for remote work opportunities. Portfolio showcasing innovative web applications and projects."
        />
        <meta
          name="keywords"
          content="Ramesh Bojanapu,Full Stack Developer,Next.js Developer,React Developer,MERN Stack,Node.js,MongoDB,Django,FastAPI,Portfolio,Web Developer,Frontend Developer,Backend Developer,Open to Work,Remote Developer,Software Engineer,JavaScript Developer,TypeScript,Tailwind CSS"
        />
        <meta name="author" content="Ramesh Bojanapu" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="fs3fI4RT8B2j8VUznZ2Lcuuzim3ucHDUWh0rHgeUe54"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://my-portfolio-theta-six-21.vercel.app/"
        />
        <meta
          property="og:title"
          content="Ramesh Bojanapu - Full Stack Developer | Portfolio"
        />
        <meta
          property="og:description"
          content="Full Stack Developer specializing in Next.js, React, MERN Stack, and modern web technologies. View my projects and get in touch for collaboration."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/y6yWHhZf/Ramesh_Portfolio.png"
        />
        <meta property="og:site_name" content="Ramesh Bojanapu Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://my-portfolio-theta-six-21.vercel.app/"
        />
        <meta
          name="twitter:title"
          content="Ramesh Bojanapu - Full Stack Developer | Portfolio"
        />
        <meta
          name="twitter:description"
          content="Full Stack Developer specializing in Next.js, React, MERN Stack, and modern web technologies. View my projects and get in touch."
        />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/y6yWHhZf/Ramesh_Portfolio.png"
        />

        {/* Favicon */}
        <link rel="icon" href="/Logo.png" />
        <link rel="apple-touch-icon" href="/Logo.png" />
        <link
          rel="canonical"
          href="https://my-portfolio-theta-six-21.vercel.app/"
        />

        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Enhanced Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ramesh Bojanapu",
              url: "https://my-portfolio-theta-six-21.vercel.app/",
              image: "https://i.postimg.cc/y6yWHhZf/Ramesh_Portfolio.png",
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Developer specializing in Next.js, React, Node.js, MongoDB, Django, and FastAPI. Expert in building scalable web applications and modern user interfaces.",
              knowsAbout: [
                "Next.js",
                "React",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "MongoDB",
                "Django",
                "FastAPI",
                "Tailwind CSS",
                "Full Stack Development",
                "MERN Stack",
                "Web Development",
              ],
              sameAs: [
                "https://github.com/Ramesh-Bojanapu-1011",
                "https://www.linkedin.com/in/ramesh-bojanapu-a5674819a/",
                "https://www.instagram.com/ramesh_bojanapu",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ramesh Bojanapu Portfolio",
              url: "https://my-portfolio-theta-six-21.vercel.app/",
              description:
                "Portfolio website showcasing full stack development projects and skills",
              author: {
                "@type": "Person",
                name: "Ramesh Bojanapu",
              },
              inLanguage: "en-US",
            }),
          }}
        />

        {/* FAQPage Schema for AI Search Optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What technologies does Ramesh Bojanapu specialize in?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ramesh Bojanapu specializes in modern web development technologies including Next.js, React, Node.js, MongoDB, Django, FastAPI, Tailwind CSS, and the MERN stack. He has extensive experience in building full-stack web applications with responsive user interfaces.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Ramesh Bojanapu available for remote work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Ramesh Bojanapu is actively available for remote work opportunities and open to new projects. He specializes in full-stack development and has experience working on diverse projects ranging from biodata creation tools to AI-powered educational platforms.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What projects has Ramesh Bojanapu worked on?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "According to his portfolio, Ramesh has developed several notable projects including: Biodata for Marriage (customizable template platform), RandomGenerator.AI (random data generation tool), Dyuti AI (student counseling platform), 5Reels (Telugu movie platform), and ChatConnect (real-time messaging application).",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is Ramesh Bojanapu's experience with Next.js?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ramesh Bojanapu is an experienced Next.js developer who has built multiple production applications using Next.js framework. His portfolio website itself is built with Next.js 16, showcasing his expertise in modern React frameworks, server-side rendering, and optimized web performance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I contact Ramesh Bojanapu for collaboration?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can contact Ramesh Bojanapu through his portfolio contact form at https://my-portfolio-theta-six-21.vercel.app/, connect with him on LinkedIn at linkedin.com/in/ramesh-bojanapu-a5674819a/, or view his work on GitHub at github.com/Ramesh-Bojanapu-1011.",
                  },
                },
              ],
            }),
          }}
        />

        {/* ProfilePage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              mainEntity: {
                "@type": "Person",
                name: "Ramesh Bojanapu",
                description: "Full Stack Developer",
                url: "https://my-portfolio-theta-six-21.vercel.app/",
              },
            }),
          }}
        />
      </body>
    </Html>
  );
}
