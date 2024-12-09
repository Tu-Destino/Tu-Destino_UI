export async function addImg(file: string | ArrayBuffer|null): Promise<string> {
  let url = "";
  const formData = new FormData();

  if (typeof file === 'string' || file instanceof ArrayBuffer) {
    formData.append("file", new Blob([file], { type: 'image/jpeg' })); // Ajusta el tipo según la imagen que tengas
    formData.append("upload_preset", "dnrb6puh"); // Reemplaza con tu propio upload preset

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dhtmy6izv/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Error al subir la imagen: ${data.error.message}`);
    }

    const { secure_url } = data;
    url = secure_url;
  }

  return url;
}
