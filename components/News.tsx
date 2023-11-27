"use client";
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Implement your newsletter subscription logic here
  };

  return (
    <div className="container mt-12 sm:mt-16 md:mt-22 p-2 dark:text-white  mx-auto flex justify-center  text-center flex-col ">
      <h2 className="text-3xl font-semibold">Subscribe to Our Newsletter</h2>
      <p className="mt-2 text-lg">
        Stay updated with the latest tours and offers.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex items-center justify-center">
        <input
          type="email"
          placeholder="Your email address"
          className="py-2 px-3 mr-2 w-64 border rounded-lg focus:outline-none focus:border-orange-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-800 transition text-white font-semibold py-2 px-4 rounded-lg">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
