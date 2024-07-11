<template>
    <div class="flex flex-col items-center justify-center content-center h-screen max-sm:m-4">

        <img class="w-80 h-80 mb-20 absolute max-xl:w-72 max-xl:h-72 top-24 -z-20" src="/src/assets/404.gif" alt="">
        <div class="flex flex-col justify-center content-center items-center">
            <p class=" text-6xl text-center font-extrabold text-slate-50 bg-slate-950 p-3 rounded-3xl mb-5">404</p>
            <button @click="goMainMenu()" class="transition ease-in-out text-5xl text-center text-slate-50 font-bold border-slate-50 bg-slate-950 border p-5 rounded-3xl
                hover:scale-110 hover:text-slate-950 hover:border-slate-950 hover:bg-slate-50
                max-sm:pl-6 max-sm:pr-6 max-sm:text-4xl
                max-xs:text-3xl">
                MENU PRINCIPAL
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCardsStore } from '@/stores/cardsGame';
import { useRouter } from 'vue-router';

const route = useRouter()
const goMainMenu = () => {
    route.push('/')
}

</script>

<style scoped></style>