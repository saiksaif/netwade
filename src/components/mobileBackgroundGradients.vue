<script setup>

</script>

<template>
    <div class="mcontainer1">
        <div class="mfirstinner">
            <div class="mgradient3"></div>
        </div>
        
        <div class="minnercontainer">
            <div class="mgradient1"></div>
            <div class="mgradient4"></div>
        </div>

        <div class="mlastinner">
            <div class="mgradient2"></div>
        </div>
    </div>
</template>

<style scoped>
@keyframes mCont {
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

.mcontainer1 {
    border: 1px solid pink;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    animation: mCont 40s ease infinite;
}

@keyframes minnerCont {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.minnercontainer {
    border: 1px solid yellow;
    height: 50vh;
    width: 70vw;
    /* position: absolute;
    top: 0; */
    margin: auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: minnerCont 50s linear infinite;
}
.mfirstinner {
    border: 1px solid green;
    width: 150px;
    height: 150px;
}
.mlastinner {
    border: 1px solid red;
    width: 150px;
    height: 150px;
}

@keyframes mrotate1 {
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

.mgradient1 {
    --size: 150px;
    --speed: 50s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
    width: var(--size);
    height: var(--size);
    filter: blur(calc(var(--size) / 5));
    background-image: linear-gradient(#ff775815, #ff5858, rgba(0, 48, 153));
    animation: mrotate1 var(--speed) var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
    /* border: 1px solid white; */
}

/* ANIMATION 2 */
@keyframes mrotate2 {
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

.mgradient2 {
    --size: 150px;
    --speed: 50s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
    width: var(--size);
    height: var(--size);
    filter: blur(calc(var(--size) / 5));
    background-image: linear-gradient(#ff775815, #ff5858, rgba(0, 48, 153));
    animation: mrotate2 var(--speed) var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
    /* position: absolute;
    top: 0px;
    border: 1px solid red; */
}

/* ANIMATION 3 */
@keyframes mrotate3 {
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

.mgradient3 {
    --size: 150px;
    --speed: 50s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
    width: var(--size);
    height: var(--size);
    filter: blur(calc(var(--size) / 5));
    background-image: linear-gradient(#ff775880, #ff5858, rgba(0, 48, 153));
    animation: mrotate3 var(--speed) var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
}

/* ANIMATION 4 */
@keyframes mrotate4 {
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

.mgradient4 {
    --size: 150px;
    --speed: 50s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
    width: var(--size);
    height: var(--size);
    filter: blur(calc(var(--size) / 5));
    background-image: linear-gradient(#ff775880, #ff5858, rgba(0, 48, 153));
    animation: mrotate4 var(--speed) var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
}

@media (min-width: 720px) {

    .mgradient1,
    .mgradient2,
    .mgradient3,
    .mgradient4 {
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