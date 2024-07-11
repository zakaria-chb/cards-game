<template>
  <div class="container 2xl:max-w-screen-2xl xl:max-w-screen-xl	lg:max-w-screen-lg	md:max-w-screen-md	sm:max-w-screen-sm ">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCardsStore } from '@/stores/cardsGame';
import data from './shared/data/cardsListData';

const cardsStore = useCardsStore()


onMounted(()=> {
  cardsStore.restartGame()
  cardsStore.importCards(data)
})

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>