import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/Logo.png" />
        <link rel="apple-touch-icon" href="/Logo.png" />
        <meta
          name="keywords"
          content="portfolio app,portfolio my, Entry-Level Software Engineer,Fresher Developer,Job-Seeking Developer,Open to Work,Available for Remote Work,Web Developer,Next.js Developer,Full Stack Developer,Frontend Developer,MERN Stack Developer,Tech Enthusiast"
        />
        <meta name="author" content="Ramesh" />
        <meta
          name="google-site-verification"
          content="fs3fI4RT8B2j8VUznZ2Lcuuzim3ucHDUWh0rHgeUe54"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ramesh Bojanapu",
            url: "https://my-portfolio-theta-six-21.vercel.app/",
            jobTitle: "Full Stack Developer",
            sameAs: [
              "https://github.com/Ramesh-Bojanapu-1011",
              "https://www.linkedin.com/in/ramesh-bojanapu-a5674819a/",
            ],
          }),
        }}
      />
    </Html>
  );
}
