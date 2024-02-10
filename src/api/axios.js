import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "32ee027db863ed284e35c2f7727b6dd9",
    language: "ko-KR"
  }
})

export default instance;