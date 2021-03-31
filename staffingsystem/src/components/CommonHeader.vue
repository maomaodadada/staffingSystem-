<template>
  <div class="header">
   <span class="headerIcon">
      <i class="el-icon-search"></i>
   </span>
   <span class="headerIcon">
      <i class="el-icon-bell"></i>
   </span>
    <el-dropdown trigger="click">
      <span>
       admin<i class="el-icon-arrow-down el-icon--right"></i>
       </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>个人设置</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader'
}
</script>

<style scoped lang="scss">

.header {
  text-align: right;
  line-height: 60px;
  .headerIcon{
    display: inline-block;
    padding-right: 20px;
    cursor: pointer;
  }
  .el-dropdown{
    cursor: pointer;
  }
}
</style>
