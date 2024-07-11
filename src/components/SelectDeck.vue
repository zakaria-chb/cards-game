<template>
  <div>
    <div @click="cardToadd(items)" class="relative xs:hover:animate-pulse hover:shadow-xl hover:shadow-slate-50/30 cursor-pointer m-3 w-64 h-20 rounded-3xl bg-face
    max-2xl:w-36 max-2xl:h-10
    max-lg:w-56 max-lg:h-16
    max-sm:w-28 max-sm:h-10
    max-xs:w-[105px]
    max-[380px]:w-24 max-[380px]:h-9" :style="items.selected ? 'background: rgb(2 6 23);' : ''">
      <div v-show="items.selected" class="absolute -left-2 flex justify-center items-center content-center">
        <i class="fa-solid fa-xmark text-slate-50 w-10 h-10 p-1 text-2xl text-center bg-red-500 rounded-full 
        max-2xl:w-5 max-2xl:h-5 max-2xl:text-sm max-2xl:p-0 ">
        </i>
      </div>
      <div v-show="!items.selected" class="absolute -left-2 flex justify-center items-center content-center">
        <i class="fa-solid fa-plus text-slate-50 w-10 h-10 p-1 text-2xl text-center bg-green-500 rounded-full
                max-2xl:w-5 max-2xl:h-5 max-2xl:text-sm max-2xl:p-0 ">
        </i>
      </div>
      <div class="flex justify-center items-center">
        <p class="m-3 text-6xl
              max-2xl:text-3xl max-2xl:m-1
              max-lg:text-4xl
              max-sm:text-2xl max-sm:m-1
              max-[380px]:text-xl
              ">{{ items.emoji }}</p>
        <p class="m-3 text-3xl text-slate-50 font-bold
              max-2xl:text-xl max-2xl:m-1
              max-lg:text-2xl max-lg:m-4
              max-sm:text-sm max-sm:m-2
              max-[380px]:text-xs
              ">{{ items.itemName }}</p>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CardInterface } from '@/shared/interface/Card.interface';
import { useCardsStore } from '@/stores/cardsGame';
defineProps<{
  items: CardInterface;
}>();

defineEmits<{
  (e: 'removeSelect', selected: boolean): void
}>();

const cardsStore = useCardsStore()

const cardToadd = (data: CardInterface) => {
  if (data.selected == false) {
    cardsStore.addToDeck(data)
    data.selected = true
  } else if (data.selected == true) {
    cardsStore.removeFromDeck(data)
    data.selected = false
  }
}

</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
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