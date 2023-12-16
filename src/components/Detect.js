import React, { useState } from 'react';
import { CloudinaryConfig } from '../CloudinaryConfig';

const Detect = () => {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  async function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  async function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append('file', file);
    }

    // Replace 'your_upload_preset' and 'your_cloud_name' with your actual values
    formData.append('upload_preset', 'crdn1upu');

    const data = await fetch(`https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`, {
      method: 'POST',
      body: formData,
    }).then((r) => r.json());

    setImageSrc(data.secure_url);
    setUploadData(data);
    console.log('data', data);
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
                onChange={handleOnChange}
              />
            </div>

            <div className="mx-auto w-11/12">
              <div className="divider my-6" />
            </div>
          </div>

          {imageSrc && (
            <div className="text-center">
              <img src={imageSrc} alt="Uploaded" className="mx-auto max-h-[300px]" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Detect;
