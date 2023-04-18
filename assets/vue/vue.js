const {createApp} = Vue;

createApp({
  data() {
    return {
      message: "Hello World!",
      image: "https://picsum.photos/id/237/200/300",
      colorBlack: "color-black",
      message2: "clicca per cambiare immagine",
    }
  },
  methods: {
    changeColor(){
        if (this.colorBlack === "color-black") {
            this.colorBlack = "color-red";
        } else{
            this.colorBlack = "color-black";
        }
    },

   

    changeImage(){

        this.image = `https://picsum.photos/id/${myRandom()}/200/300`;

        function myRandom (){
            return Math.floor(Math.random() * 300) + 200;
        }
    },

   
  },
}).mount('#app')


