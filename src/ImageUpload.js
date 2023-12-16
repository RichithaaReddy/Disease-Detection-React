// // ImageUpload.js
// import React, { useState } from 'react';
// import { CloudinaryContext, Image } from './CloudinaryConfig'; // Adjust the path as needed

// const ImageUpload = () => {
//   const [imageSrc, setImageSrc] = useState(null);

//   const handleOnChange = async (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('upload_preset', 'your_upload_preset'); // Replace with your Cloudinary upload preset

//       try {
//         const response = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', {
//           method: 'POST',
//           body: formData,
//         });

//         const data = await response.json();
//         setImageSrc(data.secure_url);
//       } catch (error) {
//         console.error('Error uploading image:', error);
//       }
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleOnChange} />
//       {imageSrc && (
//         <CloudinaryContext cloudName={CloudinaryConfig.cloudName}>
//           <Image publicId={imageSrc} />
//         </CloudinaryContext>
//       )}
//     </div>
//   );
// };

// export default ImageUpload;
