import Head from "next/head";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF6C6C" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-full flex items-center justify-center bg-bg-coffee bg-cover">
        <div className="h-full w-full bg-white/30">
          <Header />

          {/* <Hero /> */}
        </div>
      </div>
    </>
  );
};

export default IndexPage;
