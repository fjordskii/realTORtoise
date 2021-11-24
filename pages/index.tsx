// pages/index.tsx

import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { SmsForm } from "../components/SmsForm";

export interface ISendMessageParams {
  phone: string;
  message: string;
  date: Date | string;
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RealTORtoise - send slow texts</title>
      </Head>

      <SmsForm />
    </>
  );
};

export default Home;
