import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";


export const getTopAlbums = async () => {
    try {
      const res = await axios.get(
        `${BACKEND_ENDPOINT}/albums/top`
      );
      return res.data;
    } catch (err) {
      console.log("Error fetching albums:", err);
    }
  };

  export const getNewAlbums = async () => {
    try {
      const res = await axios.get(
        `${BACKEND_ENDPOINT}/albums/new`
      );
      return res.data;
    } catch (err) {
      console.log("Error fetching albums:", err);
    }
  };