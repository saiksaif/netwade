<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="w-full flex flex-wrap items-center justify-between md:justify-evenly px-4 py-2 glassMorph text-white">
        <div class="w-auto lg:order-2 lg:w-1/5 lg:text-center">
            <RouterLink class="text-xl font-semibold font-heading hover:bg-transparent flex flex-row justify-center" to="/">
                <img src="../assets/logo-sm.png" alt="Logo" class="h-14 mr-2">
                <div>
                    NETWADE
                    <br>
                    STUDIOS
                </div>
            </RouterLink>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 text-indigo-500 border border-indigo-500 rounded navbar-burger">
                <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>
                        Menu
                    </title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                    </path>
                </svg>
            </button>
        </div>
        <div class="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/6">
            <RouterLink class="block mt-4 mr-10 text-gray-300 lg:inline-block lg:mt-0 hover:text-white hover:bg-transparent" to="/">
                Home
            </RouterLink>
            <RouterLink class="block mt-4 mr-10 text-gray-300 lg:inline-block lg:mt-0 hover:text-white hover:bg-transparent" to="/about">
                About
            </RouterLink>
            <RouterLink class="block mt-4 mr-10 text-gray-300 lg:inline-block lg:mt-0 hover:text-white hover:bg-transparent" to="/services">
                Services
            </RouterLink>
            <RouterLink class="block mt-4 text-gray-300 lg:inline-block lg:mt-0 hover:text-white hover:bg-transparent" to="/projects">
                Projects
            </RouterLink>
        </div>
        <div class="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/6 lg:text-right">
            <RouterLink class="block mt-4 mr-10 text-gray-300 lg:inline-block lg:mt-0 hover:text-white hover:bg-transparent" to="/faq">
                FAQ
            </RouterLink>
            <RouterLink class="block mt-4 text-gray-300 lg:inline-block lg:mt-0 hover:text-white hover:bg-transparent" to="/contact">
                Contact
            </RouterLink>
        </div>
    </nav>
</template>

<style scoped>

</style>