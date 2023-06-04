<template>
    <button @click="scrollToTarget">
        {{ label }}
    </button>
</template>
  
<script>
export default {
    props: {
        targetId: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        }
    },
    methods: {
        scrollToTarget() {
            const targetElement = document.getElementById(this.targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        },
    },
};
</script>
<style scoped></style>