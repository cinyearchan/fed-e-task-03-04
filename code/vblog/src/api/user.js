import request from "./request"
import store from "@/store/index"

export default {
  getInfo() {
    let githubUsername = store.state.configuration.githubUsername
    return request({
      url: `/users/${githubUsername}`
    })
  },
  followers(query) {
    let githubUsername = store.state.configuration.githubUsername
    return request({
      url: `/users/${githubUsername}/followers?page=${query.page}&per_page=${query.pageSize}`
    })
  },
  following(query) {
    let githubUsername = store.state.configuration.githubUsername
    return request({
      url: `/users/${githubUsername}/following?page=${query.page}&per_page=${query.pageSize}`
    })
  },
  info(githubUsername) {
    return request({
      url: `/users/${githubUsername}`
    })
  }
}