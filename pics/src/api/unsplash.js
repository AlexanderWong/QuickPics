// all code related to getting unsplash to accept our request
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 1024584f3c139b7c645eb7ac75a4d35396bd3f297f0d9985f8676877b79fac75"
  }
});
