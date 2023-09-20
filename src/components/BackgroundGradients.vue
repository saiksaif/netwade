<script setup>

</script>

<template>
    <div class="container1">
        <div class="firstinner">
            <div class="gradient1"></div>
        </div>

        <div class="innercontainer">
            <div class="gradient3"></div>
            <div class="gradient4"></div>
        </div>

        <div class="lastinner">
            <div class="gradient2"></div>
        </div>
    </div>
</template>

<style scoped>
@keyframes Cont {
    0% {
        transform: rotate(-20deg);
    }

    50% {
        transform: rotate(20deg);
    }

    100% {
        transform: rotate(-20deg);
    }
}

.container1 {
    /* border: 1px solid white; */
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    animation: Cont 40s ease infinite;
}

@keyframes innerCont {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.innercontainer {
    /* border: 1px solid white; */
    height: 100vh;
    width: 30vw;
    /* position: absolute;
    top: 0; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    animation: innerCont 50s linear infinite;
}
.firstinner {
    /* border: 1px solid green; */
    width: fit-content;
    height: fit-content;
}
.lastinner {
    /* border: 1px solid red; */
    width: fit-content;
    height: fit-content;
}

@keyframes rotate1 {
    0% {
        scale: 1;
        opacity: 1;
        transform: rotate(0deg);
    }

    12% {
        scale: 0.5;
        opacity: 0;
        transform: rotate(100deg);
    }

    24% {
        scale: 0.5;
        opacity: 0;
    }

    36% {
        scale: 0.5;
        opacity: 0;
    }

    48% {
        scale: 0.5;
        opacity: 0;
    }

    60% {
        scale: 0.5;
        opacity: 0;
    }

    72% {
        scale: 0.5;
        opacity: 0;
    }

    84% {
        scale: 0.5;
        opacity: 0;
        transform: rotate(100deg);
    }

    100% {
        scale: 1;
        opacity: 1;
        transform: rotate(0deg);
    }
}

.gradient1 {
    --size: 20px;
    --speed: 50s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
    width: var(--size);
    height: var(--size);
    filter: blur(calc(var(--size) / 5));
    background-image: linear-gradient(#ff775815, #ff5858, rgba(0, 48, 153));
    animation: rotate1 var(--speed) var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
}

/* ANIMATION 2 */
@keyframes rotate2 {
    0% {
        scale: 0.5;
        opacity: 0;
    }

    12% {
        scale: 0.5;
        opacity: 0;
        transform: rotate(200deg);
    }

    24% {
        scale: 1;
        opacity: 1;
        transform: rotate(100deg);
    }

    36% {
        scale: 0.5;
        opacity: 0;
        transform: rotate(0deg);
    }

    48% {
        scale: 0.5;
        opacity: 0;
    }

    60% {
        scale: 0.5;
        opacity: 0;
    }

    72% {
        scale: 0.5;
        opacity: 0;
    }

    84% {
        scale: 0.5;
        opacity: 0;
    }

    100% {
        scale: 0.5;
        opacity: 0;
    }
}

.gradient2 {
    --size: 150px;
    --speed: 50s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
    width: var(--size);
    height: var(--size);
    filter: blur(calc(var(--size) / 5));
    background-image: linear-gradient(#ff775815, #ff5858, rgba(0, 48, 153));
    animation: rotate2 var(--speed) var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
    /* position: absolute;
    top: 0px;
    border: 1px solid red; */
}

/* ANIMATION 3 */
@keyframes rotate3 {
    0% {
        scale: 0.5;
        opacity: 0;
    }

    12% {
        scale: 0.5;
        opacity: 0;
    }

    24% {
        scale: 0.5;
        opacity: 0;
    }

    36% {
        scale: 0.5;
        opacity: 0;
        transform: rotate(0deg);
    }

    48% {
        scale: 1;
        opacity: 1;
        transform: rotate(100deg);
    }

    60% {
        scale: 0.5;
        opacity: 0;
        transform: rotate(200deg);
    }

    72% {
        scale: 0.5;
        opacity: 0;
    }

    84% {
        scale: 0.5;
        opacity: 0;
    }

    100% {
        scale: 0.5;
        opacity: 0;
    }
}

.gradient3 {
    --size: 150px;
    --speed: 50s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
    width: var(--size);
    height: var(--size);
    filter: blur(calc(var(--size) / 5));
    background-image: linear-gradient(#ff775880, #ff5858, rgba(0, 48, 153));
    animation: rotate3 var(--speed) var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
}

/* ANIMATION 4 */
@keyframes rotate4 {
    0% {
        scale: 0.5;
        opacity: 0;
    }

    12% {
        scale: 0.5;
        opacity: 0;
    }

    24% {
        scale: 0.5;
        opacity: 0;
    }

    36% {
        scale: 0.5;
        opacity: 0;
    }

    48% {
        scale: 0.5;
        opacity: 0;
    }

    60% {
        scale: 0.5;
        opacity: 0;
        transform: rotate(0deg);
    }

    72% {
        scale: 1;
        opacity: 1;
        transform: rotate(100deg);
    }

    84% {
        scale: 0.5;
        opacity: 0;
        transform: rotate(200deg);
    }

    100% {
        scale: 0.5;
        opacity: 0;
    }
}

.gradient4 {
    --size: 150px;
    --speed: 50s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
    width: var(--size);
    height: var(--size);
    filter: blur(calc(var(--size) / 5));
    background-image: linear-gradient(#ff775880, #ff5858, rgba(0, 48, 153));
    animation: rotate4 var(--speed) var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
}

@media (min-width: 720px) {

    .gradient1,
    .gradient2,
    .gradient3,
    .gradient4 {
        --size: 300px;
    }
}

body {
    background-color: #222;
    position: absolute;
    inset: 0;
    display: flex;
    place-content: center;
    align-items: center;
    overflow: hidden;
}

/* This is just to transition when you change the viewport size. */
* {
    transition: all 0.25s ease;
}
</style>