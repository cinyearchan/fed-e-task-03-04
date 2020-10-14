<template>
  <Layout :activeMenu="activeMenu">
    <div style="min-height:600px;" v-loading="loading">
      <el-card shadow="never" style="min-height:400px;">
        <div slot="header">
          <el-row>
            <el-col :span="12">
              <span>{{ blog.title }}</span>
            </el-col>
            <el-col :span="12">
              <div style="text-align:right;">
                <el-button style="padding:3px 0;" type="text" icon="el-icon-share">分享</el-button>
                <el-button @click="edit" style="padding:3px 0;" type="text" icon="el-icon-edit" v-if="false">编辑</el-button>
                <el-butto style="padding:3px 0;" type="text" icon="el-icon-more-outline" @click="more">更多博客</el-butto>
              </div>
            </el-col>
          </el-row>
        </div>
        <div style="font-size:0.9rem;line-height:1.5;color:#606c71;">
          发布 {{ blog.createTime }}
          <br> 更新 {{ blog.updateTime }}
        </div>
        <div style="font-size:1.1rem;line-height:1.5;color:#303133;border-bottom:1px solid #e4e7ed;padding:5px 0;">
          <pre style="font-family: '微软雅黑';">{{ blog.description }}</pre>
        </div>
        <div class="markdown-body" style="padding-top:20px;" v-html="blog.content"></div>
      </el-card>
    </div>
  </Layout>
</template>

<script>
import store from "@/store/index"
import GistApi from "@/api/gist"

export default {
  data() {
    return {
      activeMenu: '/user/blog/main',
      blog: {
        id: "",
        title: "",
        content: "",
        description: ""
      },
      loading: false
    }
  },
  computed: {},
  mounted() {
    this.loading = true
    this.blog.id = this.$route.params.id
    GistApi.single(this.blog.id).then(response => {
      let result = response.data
      for (let key in result.files) {
        this.blog['title'] = key
        this.blog['content'] = result.files[key]['content']
        this.blog['description'] = result['description']
        this.blog['createTime'] = result['created_at']
        this.blog['updateTime'] = result['updated_at']
        break
      }
    }).then(() => this.loading = false)
  },
  methods: {
    edit() {
      // this.$router.push('/user/blog/edit/' + this.blog.id)
    },
    more() {
      this.$router.push('/user/blog/main')
    }
  }
}
</script>

<style>

</style>