import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 1cbd7525c99af258ca7b8c81a2dc4c7dab99eb17c5f51a058d324e59d929b9b4"
  }
});
