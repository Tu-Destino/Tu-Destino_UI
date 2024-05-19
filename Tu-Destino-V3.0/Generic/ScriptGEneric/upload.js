export  async function addImg(formFile) {
  let data = "";
  let url="";
  console.log(formFile);
  if (formFile.files[0]) {
    const file = formFile.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "dnrb6puh");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dhtmy6izv/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    data = await response.json();
    const {secure_url} = data
    url =secure_url;
  }
return url;
}
