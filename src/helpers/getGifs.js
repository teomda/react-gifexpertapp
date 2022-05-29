export const obtenergif = async (categoria) => {
  const apiKey = "UbxeS58GkIkbVjarS0sgHvq6FcCdR0X2";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(
    categoria
  )}&limit=10`;

  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  //   console.log(gifs);
  //   setImages(gifs);
  return gifs;
};
