<script setup>
import Carousel from '@/components/carousel.vue'
import FooterView from '@/components/FooterView.vue';
</script>

<template>
  <div class="relative max-w-full mt-20">
    <div class="bg-blue-600">
      <img src="../assets/Home.png" class="w-full h-96 object-cover opacity-70" alt="image" />
      <div
        class="absolute top-64 inset-x-px text-center text-white font-bold text-4xl tracking-wide font-sans"
      >
        ASSISTANCE TO INDIVIDUALS IN CRISIS SITUATION (AICS)
        <div class="text-center text-white font text-2xl tracking-wider font-sans">
          Providing Immediate Assistance for Individuals in Crisis.
        </div>
        <div class="static">
          <div class="grid grid-cols-10 mt-4">
            <div class="col-start-2 col-end-10 bg-white rounded-lg h-80 shadow-xl p-7">
              <div class="grid grid-cols-6">
                <div class="border-black">
                  <img class="w-64" src="../assets/aics-image.png" alt="image" />
                </div>
                <div
                  class="col-span-5 border-black text-black font-extrabold text-6xl text-left ml-24"
                >
                  About <span class="text-blue-600 font-extrabold">AICS</span><br />
                  <p class="text-xl mt-5 indent-12">
                    The Assistance to <b>Individuals in Crisis Situation (AICS)</b>
                    is part of the DSWD’s protective services for the poor, marginalized and
                    vulnerable/disadvantaged individuals. The AICS has been implemented by the DSWD
                    for decades, as part of its technical assistance and resource augmentation
                    support to local government units (LGUs) and other partners.
                  </p>
                  <p class="text-xl mt-6 indent-12">
                    Who may avail: <b>Individuals in Crisis Situation</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousel />
    </div>
  </div>
  
  <FooterView />
</template>

<style scoped>
.landingimage {
  background-image: url('../assets/Home.png');
  height: 450px;
  width: 100%;
}
</style>
