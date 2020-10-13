<template>
  <div>
    <section class="page-header"></section>
    <div
      style="
        position: relative;
        z-index: 2;
        margin: auto;
        margin-top: -30px;
        width: 64rem;
      "
    >
      <el-card shadow="never" :body-style="{ padding: '0px' }">
        <el-row>

        </el-row>
      </el-card>
    </div>
    <section class="main-content">
      <el-row>
        <el-col :span="6" style="padding-right: 10px">
          <div>
            <el-card shadow="never">
              <el-menu>
                <el-menu-item v-for="item in routes" :key="item.path" :index="item.path">
                  <i :class="item.meta.icon"></i>
                  <span slot="title">{{ item.meta.title }}</span>
                </el-menu-item>
              </el-menu>
            </el-card>
          </div>
        </el-col>
        <el-col :span="18" style="padding-left: 10px">
          <slot></slot>
        </el-col>
      </el-row>
    </section>
    <section class="foot">
      <div style="border-top: 1px #e1e4e8 solid !important; padding: 45px 0">
        <el-row>
          <el-col :span="10">
            <div>
              © 2020&emsp;&emsp;
              <a href="https://github.com/cinyearchan" target="_blank"
                >Profile</a
              >&emsp;&emsp;
              <a href="https://github.com/cinyearchan/fed-e-task-03-04/tree/master/code/vblog" target="_blank"
                >VBlog</a
              >
            </div>
          </el-col>
          <el-col :span="4">
            <div style="text-align: center; font-size: 18px">
              <i class="el-icon-location-outline"></i>
            </div>
          </el-col>
          <el-col :span="10">
            <div style="float: right">
              <a href="https://developer.github.com" target="_blank"
                >GitHub-API</a
              >&emsp;&emsp;
              <a href="https://cn.vuejs.org/" target="_blank">Vue.js</a
              >&emsp;&emsp;
              <a href="http://element.eleme.io/" target="_blank">Element</a>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import routes from "@/data/routes.json"
export default {
  data() {
    return {
      routes
    }
  }
}
</script>

<style>
.page-header {
  padding: 5rem 6rem;
  color: #fff;
  text-align: center;
  background-color: #159957;
  background-image: linear-gradient(120deg, #155799, #159957);
}

.project-name {
  font-size: 3.25rem;
  margin-top: 0;
  margin-bottom: 0.1rem;
}

.project-tagline {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  font-weight: normal;
  opacity: 0.7;
}

.btn:hover {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

a:hover {
  text-decoration: underline;
}

a:active,
a:hover {
  outline: 0;
}

.btn {
  padding: 0.75rem 1rem;
  display: inline-block;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  border-style: solid;
  border-width: 1px;
  border-radius: 0.3rem;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
}

a {
  color: #1e6bb8;
  text-decoration: none;
}

.btn + .btn {
  margin-left: 1rem;
}

.main-content {
  max-width: 64rem;
  padding: 30px 0 30px 0;
  margin: 0 auto;
  font-size: 1.1rem;
  word-wrap: break-word;
  min-height: 800px;
}

.foot {
  max-width: 67rem;
  margin: 0 auto;
  font-size: 12px !important;
  color: #586069 !important;
  word-wrap: break-word;
}
</style>
