import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID VKX-3Vu6EWNwg3FMUK44KCpYjqg69ZkqeLfxL2kartQ",
    },
    params: {
      query: term,
    },
  });

  console.log(response.data.results);
  return response;
};

export default searchImages;
