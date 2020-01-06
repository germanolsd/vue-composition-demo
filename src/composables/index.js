import {
  ref,
  computed,
  reactive,
  onMounted,
  onUnmounted,
  toRefs
} from '@vue/composition-api'

export function useUserName () {
  const userName = ref('')
  const isNameMaryPoppins = computed(
    () => userName.value.toLowerCase().indexOf('mary poppins') >= 0
  )

  return {
    userName, 
    isNameMaryPoppins
  }
}

export function useWindowSize () {
  const windowSize = reactive({
    x: 0,
    y: 0
  })

  function windowResize () {
    windowSize.x = window.innerWidth
    windowSize.y = window.innerHeight
  }

  onMounted(() => {
    window.addEventListener("resize", windowResize)
    windowResize()
  })
  onUnmounted(() => {
    window.removeEventListener("resize", windowResize)
  })

  return toRefs(windowSize)
}