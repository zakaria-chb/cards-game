<template>
    <div class="flex flex-col items-center justify-center content-center h-screen max-sm:m-4">

        <img class="w-80 h-80 mb-20 absolute max-xl:w-72 max-xl:h-72 -z-20 hover:scale-150 transition ease-in-out delay-100 "
            src="/src/assets/confetti.gif" alt="">
        <div class="flex flex-col">
            <h1 class="text-emerald-50 text-6xl font-extrabold mb-40 
            xl:mb-44 
            max-sm:text-5xl max-sm:mb-56
            max-xs:text-4xl">
                FIN DE LA PARTIE
            </h1>
            <button @click="goMainMenu()" class="transition ease-in-out text-5xl text-center text-slate-50 font-bold border-slate-50 bg-slate-950 border pt-5 pb-5 rounded-3xl
                hover:scale-110 hover:text-slate-950 hover:border-slate-950 hover:bg-slate-50
                max-sm:pl-6 max-sm:pr-6 max-sm:text-4xl
                max-xs:text-3xl">
                MENU PRINCIPAL
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const route = useRouter()
const goMainMenu = () => {
    route.push('/')
}

</script>

<style scoped></style>