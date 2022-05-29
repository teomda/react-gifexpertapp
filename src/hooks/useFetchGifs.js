import { useEffect, useState } from "react";
import { obtenergif } from "../helpers/getGifs.js";

export const useFetchGifs = (cat) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    obtenergif(cat).then((imgs) =>
      // console.log(imgs);
      setState({
        data: imgs,
        loading: false,
      })
    );
  }, [cat]);

  return state;
};
