<template>
  <div style="height: 100%;background-color: #001529">
    <div class="logo">
      <router-link to="/">LOGO</router-link>
    </div>
    <!--    <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <el-menu-item :index="item.path" v-for="(item, index) in noChildren" :key="index">
            <i :class="'el-icon-'+item.icon"></i>
            <span>{{ item.label }}</span>
    &lt;!&ndash;        <router-link :to="item.path">{{ item.label }}</router-link>&ndash;&gt;
          </el-menu-item>
          <el-submenu :index="item.path" v-for="(item, index) in hasChildren" :key="index+'sub'">
            <template slot="title">
              <i :class="'el-icon-'+item.icon"></i>
              <span>{{ item.label }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="subItem.path" v-for="(subItem, subIndex) in item.children"
                            :key="subIndex+'sub'">
                <span>{{ subItem.label }}</span>
    &lt;!&ndash;            <router-link :to="subItem.path">{{ subItem.label }}</router-link>&ndash;&gt;

              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>-->

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>

      <div v-for="(item, index) in asideMenu" :key="index">
        <el-menu-item :index="item.path?item.path:''" v-if="!item.children">
          <i :class="'el-icon-'+item.icon"></i>
          <span>{{ item.label }}</span>
        </el-menu-item>

        <el-submenu :index="item.path?item.path:''" v-else>
          <template slot="title">
            <i :class="'el-icon-'+item.icon"></i>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="subItem.path?subItem.path:''" v-for="(subItem, subIndex) in item.children"
                          :key="subIndex+'sub'">
              <span>{{ subItem.label }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'CommonAside',
  computed: {
    noChildren () {
      return this.asideMenu.filter(item => !item.children)
    },
    hasChildren () {
      return this.asideMenu.filter(item => item.children)
    }
  },
  data () {
    return {
      asideMenu: [
        // {
        //   path: '/',
        //   label: '首页',
        //   icon: 'home'
        // },
        {
          path: '',
          label: '用户管理',
          icon: 'document',
          children: [{
            path: '/User',
            label: '用户',
            icon: 'document'
          }, {
            path: '/UserGroup',
            label: '用户组',
            icon: 'document'
          }
          ]
        },
        {
          path: '/JobList',
          label: '任务列表',
          icon: 'document'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.logo {
  line-height: 56px;
  color: #fff;
  padding: 0 20px;
}

.el-menu {
  //height: 100%;
  border: 0;
}
</style>
