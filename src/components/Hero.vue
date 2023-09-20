<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="heroHome flex flex-col justify-evenly">
        <h1 class="hidden md:block md:w-2/5">{{ msg }}</h1>

        <p>
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a>
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>
        </p>
    </div>
</template>

<style scoped>
.heroHome {
    border: 1px solid pink;
    height: 100vh;
    width: 100vw;
}
h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    position: relative;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.heroHome h1, .heroHome h3 {
    text-align: left;
    border: 1px solid;
}

@media (min-width: 1024px) {
    .heroHome h1, .heroHome h3 {
        text-align: left;
    }
}
</style>
