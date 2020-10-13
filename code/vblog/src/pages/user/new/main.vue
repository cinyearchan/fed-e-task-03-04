<template>
  <Layout>
    <div style="min-height: 600px;" v-loading="loading">
      <el-card shadow="never" style="min-height: 400px;" v-if="blog.id">
        <div slot="header">
          <span>{{ blog.title }}</span>
        </div>
        <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
          发布 {{ blog.createTime }}
          <br> 更新 {{ blog.updateTime }}
        </div>
        <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #e4e7ed;padding: 5px 0;">
          <pre style="font-family: '微软雅黑';">{{ blog.description }}</pre>
        </div>
        <div v-html="mdToHtml(blog.content)" class="markdown-body" style="padding-top: 20px;"></div>
      </el-card>
      <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0;text-align: center;" v-if="!blog.id">
        <span style="font-size: 30px;color: #ddd;"><b>没有更新 ╮(๑•́ ₃•̀๑)╭</b></span>
      </el-card>
    </div>
  </Layout>
</template>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
import GistApi from "@/api/gist"

export default {
  data() {
    return {
      query: {
        page: 1,
        pageSize: 1
      },
      loading: false,
      blog: {
        id: "",
        title: "",
        content: "",
        description: "",
        createTime: "",
        updateTime: ""
      }
    }
  },
  methods: {
    mdToHtml(markdown) {
      return md.render(markdown)
    }
  },
  mounted() {
    this.loading = true
    GistApi.list(this.query).then(response => {
      let result = response.data
      if (!result || result.length == 0) {
        this.loading = false
        return
      }
      for (let key in result[0].files) {
        this.blog.id = result[0]['id']
        break
      }
      GistApi.single(this.blog.id).then(res => {
        let result = res.data
        for (let key in result.files) {
          this.blog['title'] = key
          this.blog['content'] = result.files[key]['content']
          this.blog['description'] = result['description']
          this.blog['createTime'] = result['created_at']
          this.blog['updateTime'] = result['updated_at']
          break
        }
      }).then(() => {
        this.loading = false
      })
    })
  }
}
</script>

<style>

</style>