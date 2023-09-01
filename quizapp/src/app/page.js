"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailPattern.test(inputEmail));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
    } else if (!isValid) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      // You can submit the form or trigger the next action here
      console.log("Email submitted:", email);
    }
  };

  return (
    <main>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-0  sm:px-6 sm:py-8 lg:px-8">
          <div className="relative isolate overflow-hidden  px-6 pt-16  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-10">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h1 className=" text-4xl font-bold  tracking-tight text-gray-900 sm:text-4xl">
                Welcome to the Ultimate
                <br />
                <span className="textheading"> Quiz Challenge</span>
              </h1>

              <p className="mt-6 text-md  leading-8 text-gray-600">
                Challenge yourself and compete with friends as you race against
                the clock to answer 15 thought-provoking questions. Will you
                emerge as the quiz champion?
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-full">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={handleChange}
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <Link href="/overview">
                      <button
                        className="buttonCss rounded-md  px-3.5 py-2.5 text-sm font-semibold"
                        disabled={!isValid}
                      >
                        Start Quiz
                      </button>
                    </Link>
                    {error && <p className="error">{error}</p>}
                  </form>
                </div>
              </div>
            </div>
            <div className="aboutDiv mx-auto max-w-lg center relative mt-16 h-80 lg:mt-32 ">
              <img
                className="aboutImage absolute left-0 top-0  w-[20rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="https://img.freepik.com/free-vector/quiz-showconcept-illustration_114360-12300.jpg?w=1380&t=st=1693465606~exp=1693466206~hmac=b496de448631abc4f0bd8a1963cc97fbf310a45d966cea2e54c101b32dec42ee"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
