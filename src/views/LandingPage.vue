<template>
    <div class="container-xl above-the-fold flex justify-between items-center h-screen">
        

        <div class="w-1/2 flex flex-col justify-center items-start ms-40">
            <div data-aos="fade-down" data-aos-duration="800">
                <h1 :class="{'above-the-fold-claim-1': true, 'highlighted': headlines[0].highlighted  }">
                    <span>
                        Research.
                    </span>
                </h1>
                <h1 :class="{'above-the-fold-claim-2': true, 'highlighted': headlines[1].highlighted  }">
                    <span>
                        Collaborate.
                    </span>
                </h1>
                <h1 :class="{'above-the-fold-claim-3': true, 'highlighted': headlines[2].highlighted  }">
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
            partners: [
            ],
            services: [
                "Web Development",
                "Web Design",
                "App Development",
                "App Design",
                "Marketing",
                "Maintenance"
            ],
            headlines: [
                { text: 'Überschrift 1', highlighted: true },
                { text: 'Überschrift 2', highlighted: false },
                { text: 'Überschrift 3', highlighted: false }
            ]
        };
    },

    mounted() {
        this.writeFunnyIntroMessage()
        setInterval(this.updateHighlightedHeadline, 2000);
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

        updateHighlightedHeadline() {
            const highlightedIndex = this.headlines.findIndex(headline => headline.highlighted);
            this.headlines[highlightedIndex].highlighted = false;
            const nextIndex = (highlightedIndex + 1) % this.headlines.length;
            this.headlines[nextIndex].highlighted = true;
        }
    }
}
</script>
<style scoped>

.above-the-fold-claim-1 {
  font-size: 69px;
  font-weight: bold;
  background: linear-gradient(
    to right,
    var(--myColor1-1) 20%,
    var(--myColor2-1) 30%,
    var(--myColor3-1) 70%,
    var(--myColor4-1) 80%
    );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: --myColor1-1 1s, --myColor2-1 1s, --myColor3-1 1s, --myColor4-1 1s;

}

.above-the-fold-claim-2 {
    margin-top: -20px;
  font-size: 69px;
  font-weight: bold;
  background: linear-gradient(
    to right,
    var(--myColor1-2) 20%,
    var(--myColor2-2) 30%,
    var(--myColor3-2) 70%,
    var(--myColor4-2) 80%
    );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: --myColor1-2 2s, --myColor2-2 2s, --myColor3-2 2s, --myColor4-2 2s;
}

.above-the-fold-claim-3 {
    margin-top: -20px;
  font-size: 69px;
  font-weight: bold;
  background: linear-gradient(
    to right,
    var(--myColor1-3) 20%,
    var(--myColor2-3) 30%,
    var(--myColor3-3) 70%,
    var(--myColor4-3) 80%
    );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: --myColor1-3 2s, --myColor2-3 2s, --myColor3-3 2s, --myColor4-3 2s;
}



.highlighted.above-the-fold-claim-1 {
    --myColor1-1: rgb(255, 106, 0);;
    --myColor2-1: #E1AF2F;
    --myColor3-1: green;
    --myColor4-1: purple;
    background-size: 500% auto;
    animation: textShine 4s ease-in-out infinite alternate;
  transition: --myColor1-1 2s, --myColor2-1 2s, --myColor3-1 2s, --myColor4-1 2s;

}

.highlighted.above-the-fold-claim-2 {
    --myColor1-2: rgb(255, 106, 0);;
    --myColor2-2: #E1AF2F;
    --myColor3-2: green;
    --myColor4-2: purple;
    background-size: 500% auto;
    animation: textShine 4s ease-in-out infinite alternate;
  transition: --myColor1-2 2s, --myColor2-2 2s, --myColor3-2 2s, --myColor4-2 2s;

}

.highlighted.above-the-fold-claim-3 {
    --myColor1-3: rgb(255, 106, 0);
    --myColor2-3: #E1AF2F;
    --myColor3-3: green;
    --myColor4-3: purple;
    background-size: 500% auto;
    animation: textShine 4s ease-in-out infinite alternate;
  transition: --myColor1-3 2s, --myColor2-3 2s, --myColor3-3 2s, --myColor4-3 2s;

}


@property --myColor1-1 {
  syntax: '<color>';
  initial-value: white;
  inherits: false;
}

@property --myColor2-1 {
  syntax: '<color>';
  initial-value: white;
  inherits: false;
}

@property --myColor3-1 {
  syntax: '<color>';
  initial-value: white;
  inherits: false;
}

@property --myColor4-1 {
  syntax: '<color>';
  initial-value: white;
  inherits: false;
}







@property --myColor1-2 {
  syntax: '<color>';
  initial-value: white;
  inherits: false;
}

@property --myColor2-2 {
  syntax: '<color>';
  initial-value: white;
  inherits: false;
}

@property --myColor3-2 {
  syntax: '<color>';
  initial-value: white;
  inherits: false;
}

@property --myColor4-2 {
  syntax: '<color>';
  initial-value: white;
  inherits: false;
}






@property --myColor1-3 {
  syntax: '<color>';
  initial-value: white;
  inherits: false;
}

@property --myColor2-3 {
  syntax: '<color>';
  initial-value: white;
  inherits: false;
}

@property --myColor3-3 {
  syntax: '<color>';
  initial-value: white;
  inherits: false;
}

@property --myColor4-3 {
  syntax: '<color>';
  initial-value: white;
  inherits: false;
}



@keyframes textShine {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
}


.switching-phrase {
    font-size: 30px;
}

.above-the-fold {
    background: rgb(0,71,105);
    background: radial-gradient(circle, rgba(0,71,105,1) 0%, rgba(0,5,37,1) 100%);
}


</style>
