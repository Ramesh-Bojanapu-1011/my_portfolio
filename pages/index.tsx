import Head from "next/head";

import Landingpage from "@/components/Landingpage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ramesh's protfolio</title>
        <meta
          name="description"
          content="Ramesh's personal portfolio website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Landingpage />
      </>
    </>
  );
}
