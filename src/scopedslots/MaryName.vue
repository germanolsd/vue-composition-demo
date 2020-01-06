<template>
  <div>
    <slot
      :userName="userName"
      :isNameMaryPoppins="isNameMaryPoppins"
      :onNameChange="onNameChange"
    />
  </div>
</template>

<script>
export default {
  userName: 'mary-name',

  data () {
    return {
      userName: ''
    }
  },

  computed: {
    isNameMaryPoppins () {
      return this.userName.toLowerCase().indexOf('mary poppins') >= 0
    }
  },

  methods: {
    onNameChange (e) {
      this.userName = e
    }
  }
}
</script>