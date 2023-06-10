<template>
    <div class="bg-gray-100 shadow-md rounded-lg mb-8">
        <p class="text-7xl text-orange-700 my-4">{{ display }}{{ suffix }}</p>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-heading text-gray-700 mb-4">
            {{ name }}
        </h1>
    </div>
</template>
<script>
export default {
    name: "CounterBox",
    props: {
        start: {
            type: Number,
            required: false,
            default: 0
        },
        countTo: {
            type: Number,
            required: true
        }, suffix: {
            type: String,
            required: false,
        },
        name: {
            type: String,
            required: true
        },
        tickSpeed: {
            type: Number,
            required: false,
            default: 30
        }
    },
    data() {
        return {
            display: this.start
        }
    },
    methods: {
        startCount() {
            if (this.display < this.countTo) {
                this.display++;
            }
            setTimeout(this.startCount, this.tickSpeed);
        },
    },

    mounted() {
        this.startCount();
    }
}
</script>
<style scoped></style>