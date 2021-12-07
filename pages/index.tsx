import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { TextForm } from '../components/TextForm';
import { ThemeToggle } from '../components/ThemeToggle';

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

      <TextForm />
      <ThemeToggle />
    </>
  );
};

export default Home;
