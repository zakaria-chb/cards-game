<template>
  <div class="">
    <div class="flex flex-col justify-center items-center h-screen overflow-hidden">
      <img
        class="pointer-events-none w-[300px] max-2xs:w-[150px] max-xs:w-[200px] max-sm:w-[250px] max-xl:w-[200px] max-2xl:w-[250px]"
        src="/src/assets/logo2.png" alt="">

      <h2 class="text-slate-50 text-center font-bold text-5xl mb-3
                    max-2xl:text-4xl max-2xl:mb-2
                    max-xl:text-3xl
                    max-md:mt-10 max-md:text-3xl
                    max-sm:text-2xl max-sm:mt-5
                    max-xs:text-xl max-xs:mt-1
                    max-2xs:text-base max-2xs:mb-0
                    
        ">Prêt pour un défi Gourmand ?</h2>

      <p class="text-slate-50 text-center text-2xl mb-16 
                  max-2xl:text-xl max-2xl:mb-10
                  max-xl:text-base max-xl:mb-6
                  max-lg:text-xl max-lg:mb-14
                  max-md:text-lg max-md:mb-10
                  max-sm:text-sm max-sm:mb-8
                  max-xs:text-xs max-xs:mb-6
                  max-2xs:text-[8px] max-2xs:mb-2
        ">Vous devez sélectionner au moins 4 cartes pour commencer.</p>

      <div class="flex flex-wrap justify-center max-xs:grid max-xs:grid-cols-3">
        <SelectDeckVue v-for="item in cardsStore.cardsSelection" :key="item.id" :items="item" />
      </div>

      <div
        class="grid grid-cols-2 justify-center items-center mt-20 max-2xl:mt-10 max-xl:mt-6 max-sm:mt-8 max-xs:mt-5 max-2xs:mt-3">
        <button @click="cardsStore.addFullDeck" class="transition ease-in-out xs:hover:scale-125 font-bold text-2xl text-slate-50 mr-20 
            max-sm:text-sm max-xs:text-xs">
          <router-link to="play">TOUT SELECTIONNER </router-link>
        </button>

        <CardPickerStatusVue />
      </div>
      <p class="text-slate-50 text-center mt-10 
                  max-2xl:mt-5
                  max-xl:mt-4
                  max-lg:text-sm 
                  max-md:text-xs
                  max-xs:text-[7px] max-xs:mt-2
                  max-2xs:text-[6px] max-[380px]:mt-4
                  "><span class="mr-2">⚠️</span>Attention ! Si vous ne trouvez pas une paire, vous devrez consommer les
        deux aliments que vous avez retournés.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardPickerStatusVue from '@/components/CardPickerStatus.vue';
import SelectDeckVue from '@/components/SelectDeck.vue';
import { useCardsStore } from '@/stores/cardsGame';

const cardsStore = useCardsStore()

</script>

<style scoped></style>