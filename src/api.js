import API from "./config";
import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${API}`,
    },
    params: {
      query: term,
    },
  });

  console.log(response.data.results);
  return response;
};

export default searchImages;
