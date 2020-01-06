<template>
  <div class="options">
    <div class="xy">
      <span class="x">
        x: {{x}}
      </span>
      <span class="y">
        y: {{y}}
      </span>
    </div>
    <label>Type in your name</label>
    <input type="text" v-model="userName">

    <transition mode="out-in" name="fade-and-scale">
      <button
        class="mp"
        v-if="isNameMaryPoppins"
        key="mary"
      >
        ☔
      </button>
      <button
        v-else
        @click="alertWindow"
        key="alert"
      >
        Show me
      </button>
    </transition>
  </div>
</template>

<script>
import { useUserName, useWindowSize } from '../composables'
export default {
  name: 'mary-composition',

  setup () {
    const {
      userName,
      isNameMaryPoppins
    } = useUserName()

    const {x, y} = useWindowSize()

    function alertWindow () {
      alert(`
        Hello, ${userName.value}:
        📏Height is: ${y.value}
        📏Width is: ${x.value}
      `)
    }

    return {
      alertWindow,
      userName,
      isNameMaryPoppins,
      x, y
    }
  }
}

</script>
<style lang="scss" scoped>
.options {
  font-size: 1.6rem;
  padding: 4rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: var(--color-green);
  border-radius: 5px;
  color: white;
  width: 250px;

  input {
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    background: none;
    border: none;
    border-bottom: 2px solid white;
    margin: 1em 0 .5em;

    &:focus {
      outline: none
    }
  }
}
.xy {
  position: absolute;
  top: 3px;
  right: 3px;
  font-size: .8em;
}
.x, .y {
  padding: 0 .5rem;
}
.mp {
  font-size: 2.5rem;
  background: none;
  border: none;
  box-shadow: none;
}

button {
  background-color: var(--color-pink);
  font-size: 1.15rem;
  border: 4px solid white;
  box-shadow: 0 0 0 5px var(--color-pink);
  color: white;
  border-radius: 0 .6rem;
  height: 3rem;
}

.fade-and-scale {
  &-enter,
  &-leave-to {
    transform: scale(0);
    opacity: 0;
  }
  &-leave,
  &-enter-to {
    transform: scale(1);
    opacity: 1;
  }
  &-enter-active,
  &-leave-active {
    transition: transform 300ms ease 0s, opacity 250ms linear 0s;
  }
}
</style>