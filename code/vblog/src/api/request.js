import axios from "axios"

const service = axios.create({
  baseURL: "https://api.github.com",
  timeout: 15000
})

export default service
