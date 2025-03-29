"use client";
import Landingpage from "@/components/Landingpage";
import React from "react";

export default function Home() {
  const [client, setClient] = React.useState(false);
  React.useEffect(() => {
    setClient(true);
  });
  return <>{client ? <Landingpage /> : <></>}</>;
}
