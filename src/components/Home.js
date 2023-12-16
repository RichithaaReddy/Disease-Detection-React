import React from "react";
import { Link } from "react-router-dom";
import styles from "./YourComponent.module.css"; // Import the CSS module

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="py-4 text-white bg-zinc-950    text-center">
        <h1 className="text-4xl tracking-wider font-extrabold p-3 font-serif mb-1">
          Pomegranate Diagnosis
        </h1>
        <p className="text-md tracking-wider text-gray-500">
          Advancing Pomegranate Health Through Precision Diagnosis
        </p>
      </header>
      <div className="flex-grow cursor-pointer font-serif h-auto bg-black text-white flex">
      <a href="/detect" className="flex-grow cursor-pointer font-serif h-auto bg-black text-white flex">
        {/* Left Side Content */}
        <div className="w-1/2 relative flex items-center justify-center">
          <div className={`text-center ${styles.content}`}>
            <h2 className={`text-sm font-extrabold mb-4 text-white ${styles.animateText}`}>
              Detect 
            </h2>
            <h2 className={` font-extrabold mb-4 text-white ${styles.animateText}`}>
            Detect
            </h2>
           
            
           
            {/* Creative Button */}
            {/* <Link to="/detect">
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-2 px-6 rounded-full transform transition-transform hover:scale-105">
                Discover Now
              </button>
            </Link> */}
          </div>
        </div>
        {/* Right Side Image */}
        <div
          className="flex-shrink-0 w-1/2"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1638127011278-a777cb28ce17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&w=1000&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </a>
      </div>
      
      <footer className=" bg-zinc-950 text-white py-2 text-center">
        <p>&copy; 2023 Pomegranate Diagnosis. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
