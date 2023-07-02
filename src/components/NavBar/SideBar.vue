<template>
    <div class="sidebar">
        <transition name="slide">
            <div v-if="open" class="sidebar-panel">
                <slot />
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    props: {
        open: {
            type: Boolean,
            required: true,
            default: false
        }
    }
}
</script>
<style>
.sidebar {
    position: fixed;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.4s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translatey(-100%);
    transition: all 0.3s ease-in 0s
}

.sidebar-backdrop {
    background-color: rgba(0, 0, 0);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
}

.sidebar-panel {
    overflow-y: auto;
    position: fixed;
    left: 0;
    top: 0;
    min-height: 30vh;
    text-align: center;
    width: 100%;
}
</style>