<template>
    <div class=" flex justify-center">
        <Transition name="fade" mode="out-in">

            <p class="text-slate-50 max-sm:text-sm max-xs:text-[10px]" v-if="cardsStore.cardsDeck.length < 2">
                4 cartes minimum pour commencer.
            </p>

            <p class="text-slate-50 max-sm:text-sm max-xs:text-[10px]" v-else-if="cardsStore.cardsDeck.length < 4">
                Il vous faut encore 3 cartes.
            </p>

            <p class="text-slate-50 max-sm:text-sm max-xs:text-[10px]" v-else-if="cardsStore.cardsDeck.length < 6">
                Encore 2 cartes à choisir.
            </p>

            <p class="text-slate-50 max-sm:text-sm max-xs:text-[10px]" v-else-if="cardsStore.cardsDeck.length < 8">
                1...
            </p>


            <button v-else
                class="transition ease-in-out xs:hover:scale-125 hover:border-slate-950 bg-slate-50 rounded-xl"
                :style="cardsStore.cardsDeck.length < 8 ? 'pointer-events: none; cursor: default; background: #121212' : ''">
                <router-link to="play" @click="cardsStore.shuffledCards()"
                    class="text-center text-2xl font-bold p-10 max-sm:text-2xl max-xs:text-xl max-2xs:text-lg">JOUER
                </router-link>
            </button>

        </Transition>

    </div>
</template>

<script setup lang="ts">
import { useCardsStore } from '@/stores/cardsGame';

const cardsStore = useCardsStore()

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>