import React, { useState } from 'react';

const Detect = () => {
const uploadImage = (files) =>{
 console.log(files[0]);
}
  return (
    <>
      <header className="py-4 text-white bg-zinc-950 text-center">
        <h1 className="text-4xl tracking-wider font-extrabold p-3 font-serif mb-1">
          Pomegranate Diagnosis
        </h1>
        <p className="text-md tracking-wider text-gray-500">
          Advancing Pomegranate Health Through Precision Diagnosis
        </p>
      </header>
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="-mt-10 card w-full gap-5 bg-base-100 text-white shadow-2xl md:mx-auto md:max-w-[640px]">
          <figure className="h-fit -mt-32 max-h-[22rem]">
            <video
              id="video"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            >
              <source
                src="https://res.cloudinary.com/dtkvrpdtp/video/upload/v1702639010/4d_peccs9.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </figure>
          <div className="card-body gap-5 text-center">
            <h2 className="card-title mt-4 mb-6 text-2xl font-bold">
              Upload Your Image
            </h2>
            <div className="flex flex-col items-center justify-center gap-4">
              <label
                htmlFor="fileInput"
                className="cursor-pointer border-2 border-red-500 px-4 py-2 rounded-md transition duration-300 hover:bg-red-500 hover:text-white"
              >
                <span className="text-lg">📷</span> Choose .jpeg or .jpg file
              </label>
              <input
                id="fileInput"
                type="file"
                accept=".jpeg, .jpg"
                className="hidden"
                onChange={(event)=>{
                  uploadImage(event.target.files);
                }}
              />
            </div>

            <div className="mx-auto w-11/12">
              <div className="divider my-6" />
            </div>
          </div>

        
        </div>
      </div>
    </>
  );
};

export default Detect;
