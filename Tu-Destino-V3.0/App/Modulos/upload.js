// const { log } = require('console');

// const cloudinary = require('cloudinary').v2;

// cloudinary.config({

//   cloud_name:'dhtmy6izv',
//   api_key:process.env.CLOUDINARY_API_KEY,
//   api_secret:process.env.CLOUDINARY_API_SECRET,
//   secure:true
  
// })
// // const uploadImage = async (imagenPath) => {
// //   const options ={
// //     use_filename: true,
// //     unique_filename: false,
// //     overwrite: true,
// //   };
// //   try {
// //     const result = await cloudinary.uploader.upload(imagenPath, options);
// //     console.log(result);
// //     return result.public_id;
// //   } catch (error) {
// //     console.log(error.message);
// //   }
// // }

// // const getAssetInfo = async (publicId) => {
// //   const options={
// //     colors:true,
// //   };
// //   try {
// //     const result = await cloudinary.api.resource(publicId, options);
// //     console.log(result);
// //     return result.colors;
// //   } catch (error) {
// //     console.log(error.message);
// //   }
// // }

// // //////////////////
// // //
// // // Main function
// // //
// // //////////////////
// // (async () => {

// //   // Set the image to upload
// //   const imagePath = 'https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.jpg';

// //   // Upload the image
// //   const publicId = await uploadImage(imagePath);

// //   // Get the colors in the image
// //   const colors = await getAssetInfo(publicId);

// //   // Create an image tag, using two of the colors in a transformation
// //   const imageTag = await createImageTag(publicId, colors[0][0], colors[1][0]);

// //   // Log the image tag to the console
// //   console.log(imageTag);

// // })();


// const image = '../../pruebas/abraham-r-3bBseIHtcao-unsplash.jpg';

// cloudinary.uploader.upload(image).then(result => {
//   console.log(result);
// })
// Import the Cloudinary class.

const cloudName = 'dhtmy6izv';
const unsignedUploadPreset = 'doc_codepen_example';
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
export function uploadFile(file) {

  const fd = new FormData();
  fd.append('upload_preset', unsignedUploadPreset);
  fd.append('tags', 'browser_upload'); // Optional - add tags for image admin in Cloudinary
  fd.append('file', file);

  fetch(url, {
    method: 'POST',
    body: fd,
  })
    .then((response) => response.json())
    .then((data) => {
      // File uploaded successfully
      const url = data.secure_url;
      // Create a thumbnail of the uploaded image, with 150px width
      const tokens = url.split('/');
      tokens.splice(-3, 0, 'w_150,c_scale');
      const img = new Image();
      img.src = tokens.join('/');
      img.alt = data.public_id;
      document.getElementById('gallery').appendChild(img);
    })
    .catch((error) => {
      console.error('Error uploading the file:', error);
    });
}