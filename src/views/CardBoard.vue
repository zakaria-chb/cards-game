<template>
  <div v-if="cardsStore.shuffledCardsDeck.length">

    <div class="overflow-hidden h-screen flex justify-center">
      <Transition name="bounce" mode="out-in">

        <div v-if="cardsStore.endGame == false" class=" grid grid-cols-8 items-center justify-center content-center gap-8
        max-2xl:grid-cols-8 max-2xl:gap-6
        max-lg:grid-cols-6 max-lg:items-center max-lg:justify-evenly max-lg:content-center max-lg:gap-7
        max-md:grid-cols-5 max-md:gap-6
        max-xs:grid-cols-4
        max-xs:gap-4">
          <CardVue v-for="(card, index) in cardsStore.shuffledCardsDeck" :key="card.id" :cards="card" />
        </div>

        <div v-else>
          <EndGameVue />
        </div>
      </Transition>
    </div>

    <div class="fixed inset-0 flex justify-center items-center pointer-events-none">
      <Transition name="bounce">
        <div v-if="cardsStore?.pair === true" class="z-10 text-center w-full">
          <p class="text-9xl font-bold p-10 bg-green-500 opacity-80 text-slate-50 max-xs:text-6xl">PAIR 😁</p>
        </div>
        <div v-else-if="cardsStore?.pair === false" class="z-10 text-center w-full">
          <p class="text-9xl font-bold p-10 bg-red-500 opacity-80 text-slate-50 max-xs:text-6xl">IMPAIR 😮‍💨</p>
        </div>
      </Transition>
    </div>


    <Transition name="bounce">
      <div v-if="cardsStore.lastCards.length == 2 && cardsStore.endGame == false" class="absolute pt-1 w-32 h-14 top-5 right-8 rounded-full bg-slate-950
          max-3xs:hidden
          max-2xs:w-24 max-2xs:h-10  max-[395px]:top-4
          max-xs:top-14"
        :style="cardsStore.lastCardsPair ? 'border: 4px solid rgb(34 197 94)' : 'border: 4px solid rgb(239 68 68) '">
        <div class="flex justify-around items-center content-center h-full">
          <p class="text-3xl max-2xs:text-2xl max-2xs:p-0 p-2">{{ cardsStore.lastCards[0].emoji }}</p>
          <p class="text-3xl max-2xs:text-2xl max-2xs:p-0 p-2">{{ cardsStore.lastCards[1].emoji }}</p>
        </div>
      </div>
    </Transition>

  </div>
  <div v-else>
    <NoDataVue />
  </div>
</template>

<script setup lang="ts">
import CardVue from '@/components/Card.vue';
import EndGameVue from '@/components/EndGame.vue';
import NoDataVue from '@/components/NoData.vue';
import { useCardsStore } from '@/stores/cardsGame';
import { watch } from 'vue';

const cardsStore = useCardsStore()

watch(cardsStore.shuffledCardsDeck, (x) => {
  const endGame = x.every(card => card.view === true)
  if (endGame) {
    setTimeout(() => {
      cardsStore.endGame = true
    }, 5000);
  }

})

</script>


<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.3s;
}

.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(1);
  }
}
</style>
