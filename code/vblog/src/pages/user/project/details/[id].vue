<template>
  <Layout :activeMenu="activeMenu">
    <div style="min-height:600px;" v-loading="loading">
      <el-card shadow="never" style="min-height:400px;">
        <div slot="header">
          <el-row>
            <el-col :span="12">
              <span>{{ project.name }}</span>
            </el-col>
            <el-col :span="12">
              <div style="text-align:right;">
                <!-- <el-button style="padding:3px 0;" type="text" icon="el-icon-share">分享</el-button> -->
                <el-button @click="goGithub(project.url)" style="padding:3px 0;" type="text" icon="el-icon-back">前往Github</el-button>
                <el-button @click="more" style="padding:3px 0;" type="text" icon="el-icon-more-outline">更多项目</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div style="font-size:0.9rem;line-height:1.5;color:#606c71;">
          发布 {{ project.createTime }}
          <br> 更新 {{ project.updateTime }}
        </div>
        <div style="font-size: 1.1rem;line-height:1.5;color:#303133;padding:20px 0 0 0;">
          {{ project.description }}
        </div>
        <div style="font-size:1.1rem;color:#303133;padding:15px 0;border-bottom:1px solid #e4e7ed;">
          <el-row>
            <el-col :span="16" style="padding-top:5px;">
              <el-tooltip effect="dark" :content="'star ' + project.stargazersCount" placement="bottom">
                <i class="el-icon-star-off" style="margin:0 5px 0 0;"></i>
              </el-tooltip>
              {{ project.stargazersCount }}
              <el-tooltip effect="dark" :content="'watch ' + project.watchersCount" placement="bottom">
                <i class="el-icon-view" style="margin:0 5px 0 15px;"></i>
              </el-tooltip>
              {{ project.watchersCount }}
              <el-tooltip effect="dark" :content="'fork' + project.forksCount" placement="bottom">
                <i class="el-icon-bell" style="margin:0 5px 0 15px;"></i>
              </el-tooltip>
              {{ project.forksCount }}
            </el-col>
            <el-col :span="8" style="text-align:right;">
              <el-tag size="small" type="danger" v-if="project.license">{{ project.license }}</el-tag>
              <el-tag size="small" type="success">{{ project.language }}</el-tag>
            </el-col>
          </el-row>
        </div>
        <div v-html="project.content" v-if="project.content" class="markdown-body" style="padding-top:20px;"></div>
        <div v-if="!project.content" style="padding:20px 0;text-align:center;">
          <span style="font-size:30px;color:#ddd;">
            <b>还没有介绍 (╯°Д°)╯︵ ┻━┻</b>
          </span>
        </div>
      </el-card>
    </div>
  </Layout>
</template>

<script>
import store from "@/store/index"
import ProjectApi from "@/api/project"

export default {
  data() {
    return {
      activeMenu: '/user/project/main',
      project: {
        name: ""
      },
      loading: false
    }
  },
  computed: {},
  mounted() {
    this.loading = true
    this.project.name = this.$route.params.name
    ProjectApi.single(this.project.name).then(response => {
      let result = response.data
      let base64 = require('js-base64').Base64
      this.project.id = result['id']
      this.project.url = result['html_url']
      this.project.stargazersCount = result['stargazers_count']
      this.project.watchersCount = result['watchers_count']
      this.project.forksCount = result['forks_count']
      this.project.language = result['language']
      this.project.description = result['description']
      this.project.license = result['license'] ? result['license']['spdx_id'] : null
      this.project.content = base64.decode(result['readme_content'])
      this.project.createTime = result['created_at']
      this.project.updateTime = result['updated_at']
    })
  },
  methods: {
    goGithub(url) {
      window.open(url)
    },
    more() {
      this.$router.push('/user/project/main')
    }
  }
}
</script>

<style>

</style>