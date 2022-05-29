import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
// import { obtenergif } from "../helpers/getGifs.js";
export const GifGrid = ({ categoria }) => {
  // const [imgsgifs, setImages] = useState([]);

  // useEffect(() => {
  //   obtenergif(categoria).then((imgs) => setImages(imgs));
  // }, []);

  //   getgifs();

  const { data: images, loading } = useFetchGifs(categoria);

  return (
    <>
      <h3 className="animate__animated animate__bounce animate__fadeInDown">
        {categoria}
      </h3>
      {loading && (
        <p className="animate__animated animate__bounce animate__flash">
          {" "}
          Cargando
        </p>
      )}
      <div className="card-grid">
        {images.map(
          (img) => (
            <GifGridItem key={img.id} {...img} />
          )
          // <li key={img.id}>{img.title}</li>
        )}
      </div>
    </>
  );
};
