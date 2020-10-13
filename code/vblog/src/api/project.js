import request from "./request"
import store from "@/store/index"

export default {
  getBlogReadme() {
    let githubUsername = store.state.configuration.githubUsername
    return request({
      url: `/repos/${githubUsername}/${githubUsername}.github.io/contents/README.md`
    })
  },
  getBlogConfigure() {
    let githubUsername = store.state.configuration.githubUsername
    return request({
      url: `/repos/${githubUsername}/${githubUsername}.github.io/contents/static/configuration.json`
    })
  },
  editBlogConfigure(configure, sha) {
    let content = JSON.stringify(configure)
    let githubUsername = store.state.configuration.githubUsername
    return request({
      url: `/repos/${githubUsername}/${githubUsername}.github.io/contents/static/configuration.json`,
      method: 'PUT',
      data: {
        "message": "a",
        "content": require('js-base64').Base64.encode(content),
        "sha": sha
      }
    })
  },
  list(query) {
    let githubUsername = store.state.configuration.githubUsername
    return request({
      url: `/users/${githubUsername}/repos?page=${query.page}&per_page=${query.pageSize}`
    })
  },
  single(name) {
    let githubUsername = store.state.configuration.githubUsername
    return new Promise((resolve, reject) => {
      request({
        url: `/repos/${githubUsername}/${name}`
      }).then(response => {
        request({
          url: `/repos/${githubUsername}/${name}/contents/README.md`
        }).then(res => {
          response.data['readme_content'] = res.data['content']
          resolve(response)
        }).catch(() => {
          response.data['readme_content'] = ""
          resolve(response)
        })
      })
    })
  }
}