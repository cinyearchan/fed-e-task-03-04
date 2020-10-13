const configuration = {
  state: {
    githubUsername: "cinyearchan",
    blogTitle: "",
    blogDescribe: "",
    htmlTitle: "",
    fontColor: "",
    useBackgroundImage: false,
    backgroundColorLeft: "",
    backgroundColorRight: "",
    audioUrl: "",
    mini: false,
    audioAutoPlay: false,
    webSites: []
  },

  mutations: {
    SET_CONFIGURATION(state, configuration) {
      state.githubUsername = configuration["githubUsername"] || "cinyearchan"
      state.blogTitle = configuration["blogTitle"] || state.githubUsername
      state.blogDescribe = configuration["blogDescribe"] || `欢迎来到${state.githubUsername}的个人博客`
      state.htmlTitle = configuration["htmlTitle"] || `${state.githubUsername}的博客`
      state.fontColor = configuration["fontColor"] || "#fff"
      state.useBackgroundImage = configuration["useBackgroundImage"] || false
      state.backgroundColorLeft = configuration["backgroundColorLeft"] || "#155799"
      state.backgroundColorRight = configuration["backgroundColorRight"] || "#159957"
      state.audioUrl = configuration["audioUrl"] || ""
      state.mini = configuration["mini"] || false
      state.audioAutoPlay = configuration["audioAutoPlay"] || false
      state.webSites = configuration["webSites"] || []
    }
  },

  actions: {
    LocalReload({ commit }, configuration) {
      commit('SET_CONFIGURATION', configuration)
    },
    Init({ commit }) {
      let configuration = {
        "githubUsername": "cinyearchan",
        "blogTitle": "cinyearchan",
        "blogDescribe": "欢迎来到cinyearchan的个人博客。",
        "htmlTitle": "cinyearchan的博客",
        "fontColor": "#ffffff",
        "useBackgroundImage": false,
        "backgroundColorLeft": "#2690F9",
        "backgroundColorRight": "#FC2D2D",
        "audioUrl": "http://sc1.111ttt.cn:8282/2018/1/03m/13/396131232171.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3",
        "mini": false,
        "webSites":[
            {"name":"v2ex" , "url":"https://www.v2ex.com/member/cinyearchan"}
        ]
      }

      commit('SET_CONFIGURATION', configuration)
    }
  }
}

export default configuration
