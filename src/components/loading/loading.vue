

<template>
    <div class="loading-layer">
        <div class="loading"></div>
    </div>
</template>

<script>
export default {
    name: "loading",
    destroyed() {
        document.body.style.overflowX = "hidden";
    }
};
</script>
<style>
.loading-layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 9999;
}
.loading {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 2px rgba(255, 255, 255, 0.7) solid;
    border-right-color: #42c57a;
    animation: loading 1s linear infinite;
}
@keyframes loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
