<script setup>
const { y } = useWindowScroll()
const  isVisible = ref(true)
const lastScrolledPosition = ref(0)

const handleScroll = () => {

  isVisible.value = y.value < lastScrolledPosition.value
    lastScrolledPosition.value = y.value
  
}

watchThrottled(
  y,
  () => {
    handleScroll()
  },
  { throttle: 300 }
)
</script>

<template>
  <div class="border-4 border-[green] p-4">
    <Transition name="slide-down">

    <TheHeader v-show="isVisible"/>
    </Transition>
  </div>
</template>

<style>
.slide-down-enter-active {
  transition: transform 0.2s ease-out;
}

.slide-down-leave-active {
  transition: transform 0.2s ease-in;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
}
</style>
