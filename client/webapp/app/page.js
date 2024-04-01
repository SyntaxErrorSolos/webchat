"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    //hewo
  }, []);

  return (
    <main className="grid justify-items-center">
      <div>WebChat - By Huzaifa</div>
      <div
        id="chat"
        className="h-96 w-96 border-black border-x-8 border-y-8"
      ></div>
      <div>
        <h1>Your name:</h1>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          className="border-black border-x-2 border-y-2"
        ></input>
      </div>
      <div>
        <button id="butt" className="bg-black font-serif text-2xl text-white ">
          Send
        </button>
      </div>
    </main>
  );
}
