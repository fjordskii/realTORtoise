// pages/index.tsx

import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { SmsForm } from "../components/SmsForm";
import styles from "../styles/Home.module.css";

export interface ISendMessageParams {
  phone: string;
  message: string;
  time: Date;
}

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendMessage = async ({ phone, message, time }: ISendMessageParams) => {
    setLoading(true);
    setError(false);
    setSuccess(false);

    const res = await fetch("/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, message, time }),
    });
    const apiResponse = await res.json();

    if (apiResponse.success) {
      setSuccess(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>RealTORtoise - send slow texts</title>
      </Head>

      <SmsForm
        loading={loading}
        sendMessage={sendMessage}
        success={success}
        error={error}
      />
    </div>
  );
};

export default Home;
