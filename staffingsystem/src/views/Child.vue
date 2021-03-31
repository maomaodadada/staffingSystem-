<template>
  <div>
    <h2 @click="childClick">点击我</h2>
    {{ msgg }}
  </div>
</template>

<script>
export default {
  name: 'Child',
  data () {
    return {
      childMsgg: 'ASs'
    }
  },
  props: {
    msgg: {
      type: String,
      deafult: ''
    }
  },
  methods: {
    childClick () {
      this.$emit('showCL', 'qwe123qw132eqw123')
    }
  },
  mounted () {
    console.log('attrs', this.$attrs)
  }
}
</script>

<style scoped>

</style>
