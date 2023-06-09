import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  // TODO: How do you invalidate a query like this once you've signed in?
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const strLenPrivate = api.example.stringLengthPrivate.useQuery("thisString", {
    retry: false,
  });

  const { user, isLoaded, isSignedIn } = useUser();

  return (
    <>
      <Head>
        <title>Packpal</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#55a490] to-[#c67744] ${inter.className}`}
      >
        <img
          src="./packpal-transparentbg.png"
          className="drop-shadow-lg"
          alt="Packpal Logo"
          width={250}
          height={250}
        />
        <div className="w-1/2 rounded border bg-slate-200 p-4 shadow-lg">
          <p>User?.username: {JSON.stringify(user?.fullName)}</p>
          <p>isLoaded: {String(isLoaded)}</p>
          <p>isSignedIn: {String(isSignedIn)}</p>
          <p>{hello.data?.greeting}</p>
          <p>
            strLenPrivate: {strLenPrivate.data}, strLenPrivate.error:{" "}
            {strLenPrivate.error?.message}
          </p>
          {user !== null && user !== undefined ? (
            <SignOutButton>
              <button
                type="button"
                className="mb-2 mr-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Sign Out
              </button>
            </SignOutButton>
          ) : (
            <SignInButton>
              <button
                type="button"
                className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign In
              </button>
            </SignInButton>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
