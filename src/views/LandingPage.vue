<template>
    <div class="container-xl above-the-fold flex justify-between items-center h-screen">
        

        <div class="w-1/2 flex flex-col justify-center items-start ms-40">
            <div data-aos="fade-down" data-aos-duration="800">
                <h1>
                    <span>
                        Research.
                    </span>
                </h1>
                <h1>
                    <span>
                        Collaborate.
                    </span>
                </h1>
                <h1>
                    <span>
                        Build.
                    </span>
                </h1>
            </div>
            
            <div data-aos="fade-up" data-aos-duration="900" class="switching-phrase mt-20">
                <span class="text-white">Design & Development Studio</span>
                <br>
                <span class="text-white">Turning Ideas into </span>
                <span class="text-primary">{{ displayText }}</span>

            </div>
        </div>



        <div class="displayBox w-1/2 flex justify-between items-center" data-aos="fade-in" data-aos-duration="1500">
            <img class="w-5/6" src="../assets/images/landing-page-top.png" alt="Sunset in the mountains">
        </div>
            
        

    </div>
       
</template>



<script>



export default {
    name: "LandingPage",
    components: {
    },
    data() {
        return {
            displayText: "",
            displayIndex: 0,
            catchphrases: [
                "Reality.",
                "Mobile Apps.",
                "Web Apps.",
                "Profit.",
                "Business Plans.",
            ],
        };
    },

    mounted() {
        this.writeFunnyIntroMessage()
    },
    methods: {
        writeFunnyIntroMessage() {
            if (this.displayText.length >= this.catchphrases[this.displayIndex].length) {
                setTimeout(this.eraseFunnyIntroMessage, 1000);
                return
            }
            this.displayText = this.catchphrases[this.displayIndex].slice(0, this.displayText.length + 1);
            setTimeout(this.writeFunnyIntroMessage, 50);
        },

        eraseFunnyIntroMessage() {
            if (this.displayText.length == 0) {
                setTimeout(this.writeFunnyIntroMessage, 1000);
                this.displayIndex = (this.displayIndex + 1) % this.catchphrases.length;
                return
            }
            this.displayText = this.catchphrases[this.displayIndex].slice(0, this.displayText.length - 1);
            setTimeout(this.eraseFunnyIntroMessage, 20);
        },

    }
}
</script>
<style scoped>



.switching-phrase {
    font-size: 30px;
}

.above-the-fold {
    background: rgb(0,71,105);
    background: radial-gradient(circle, rgba(0,71,105,1) 0%, rgba(0,5,37,1) 100%);
}


</style>
