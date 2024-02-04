import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7c90e08061544245807d4f9c314ca629",
  },
});
