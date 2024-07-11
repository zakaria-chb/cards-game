<template>
  <div :style="selectedPair ? 'pointer-events: none; cursor: default;' : ''">

    <div v-if="cards.view" class="w-[160px] h-[250px] rounded-3xl bg-face flex flex-col justify-between shadow-lg shadow-slate-50/30
          max-2xl:w-[114px] max-2xl:h-[179px]
          max-xl:w-[89px] max-xl:h-[139px]
          max-lg:w-[100px] max-lg:h-[156px]
          max-md:w-[84px] max-md:h-[132px]
          max-sm:w-[74px] max-sm:h-[116px]
          max-xs:w-[78px] max-xs:h-[78px]
          max-3xs:w-[70px] max-3xs:h-[70px]">

      <div class="flex flex-row items-center p-3 max-xs:hidden">
        <p class="text-3xl mr-4 
                  max-2xl:text-sm max-xl:text-xs max-lg:mr-2 max-lg:text-xl max-md:text-xs max-md:-ml-1">{{ cards.emoji
          }}</p>
        <p class="font-bold text-slate-50 text-xl 
                  max-2xl:text-sm max-xl:text-xs max-lg:text-xs max-md:text-[9px]">{{ cards.itemName }}</p>
      </div>

      <div class="flex justify-center items-center ">
        <p
          class="text-9xl max-2xl:text-8xl max-xl:text-6xl max-lg:text-6xl max-md:text-4xl max-xs:text-6xl max-xs:m-3 max-3xs:text-5xl">
          {{ cards.emoji }}</p>
      </div>

      <div class="flex flex-row items-center p-3 rotate-180 max-xs:hidden ">
        <p class="text-3xl mr-4 
                  max-2xl:text-sm max-xl:text-xs max-lg:mr-2 max-lg:text-xl max-md:text-xs max-md:-ml-1">{{ cards.emoji
          }}</p>
        <p class="font-bold text-slate-50 text-xl
                  max-2xl:text-sm max-xl:text-xs max-lg:text-xs max-md:text-[9px]">{{ cards.itemName }}</p>
      </div>
    </div>

    <div v-else @click="pushCard(cards)" class="cursor-pointer hover:animate-pulse w-[160px] h-[250px] rounded-3xl bg-logo flex flex-col justify-center hover:shadow-xl hover:shadow-slate-50/40 hover:transition delay-100 duration-1000
          max-2xl:w-[114px] max-2xl:h-[179px]
          max-xl:w-[89px] max-xl:h-[139px]
          max-lg:w-[100px] max-lg:h-[156px]
          max-md:w-[84px] max-md:h-[132px]
          max-sm:w-[74px] max-sm:h-[116px]
          max-xs:w-[78px] max-xs:h-[78px]
          max-3xs:w-[70px] max-3xs:h-[70px]">

      <div class="flex justify-center items-center">
        <img class="pointer-events-none" src="/src/assets/logo2.png" alt="">
      </div>


    </div>


  </div>
</template>

<script setup lang="ts">
import type { CardInterface } from '@/shared/interface/Card.interface';
import { computed, ref } from 'vue';
import { useCardsStore } from '@/stores/cardsGame';
const props = defineProps<{
  cards: CardInterface;
}>();

const cardsStore = useCardsStore()
const selectedPair = computed(() => {
  return cardsStore.selectedCards.length === 2;
});


const pushCard = (data: CardInterface) => {
  data.view = true;
  cardsStore.addToCompareCard(data);

  if (cardsStore.selectedCards.length === 2) {
    if (cardsStore.compareCards()) {
      setTimeout(() => {
        cardsStore.analysisFindedCards();
      }, 2000);
    } else {
      setTimeout(() => {
        cardsStore.analysisFindedCards();
      }, 2000);
    }
  }
};

</script>

<style scoped>
.flip-enter-active,
.flip-leave-active {
  transition: transform 0.6s;
  position: absolute;
}

.flip-enter-from,
.flip-leave-to {
  transform: rotateY(180deg);
}

.lp {
  border: 2px solid green;
}
</style>
