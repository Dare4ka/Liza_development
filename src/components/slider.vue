<template lang="pug">
    agile(:options="myOptions")
        .slider-box(v-for="image in images")
            .slider-item
                img(:src="image.imgUrl")
</template>

<script>
    import { VueAgile } from 'vue-agile';
    // import axios from 'axios';
    // import VueAxios from 'vue-axios';
    // Vue.use(VueAxios, axios);
    // let sliderImg;

    export default {

        components: {
            agile: VueAgile
        },
        // mounted: function() {
        //
        //      Vue.axios.get("/assets/img/slider.json").then((response) => {
        //         let sliderImg = response.data;
        //     //     for (let i=0; i<slider.length; i++) {
        //     //         sliderImg.push(slider[i].imgUrl);
        //     // }
        //     console.log(sliderImg);
        //         return sliderImg;
        //     });
        // },
        data () {

            return {
                // images: sliderImg,
                // images: ["/assets/img/Alexis Mabille nls W F13 P 005.jpg", "/assets/img/Alexis Mabille nls W F13 P 005.jpg", "/assets/img/Alexis Mabille nls W F13 P 005.jpg", "/assets/img/Alexis Mabille nls W F13 P 005.jpg"],
                images: [
                    {"imgUrl": "/assets/img/Alexis Mabille nls W F13 P 005.jpg", "ddd": "aaa"},
                    {"imgUrl": "/assets/img/krasivyj-manikyur-foto-v-raznyh-stilyah.jpeg", "ddd": "aaa"},
                    {"imgUrl": "/assets/img/krasivyj-manikyur-foto-v-raznyh-stilyah-24.jpg", "ddd": "aaa"},
                    {"imgUrl": "/assets/img/Manikyur-na-korotki-nigti-na-Novyj-rik-2020.jpg", "ddd": "aaa"},
                    {"imgUrl": "/assets/img/krasivyj-manikyur-foto-v-raznyh-stilyah.jpeg", "ddd": "aaa"}
                ],
                myOptions: {
                    navButtons: false,
                    slidesToShow: 2,
                    autoplay: true

                    // responsive: [
                    //     {
                    //         breakpoint: 600,
                    //         settings: {
                    //             dots: false
                    //         }
                    //     },
                    //
                    //     {
                    //         breakpoint: 900,
                    //         settings: {
                    //             navButtons: true,
                    //             dots: true,
                    //             infinite: false
                    //         }
                    //     }
                    // ]
                }
            }
        }


    }
</script>