<template>
  <div>

      <div class="drop-shadow-md">
        <div class="rounded-t-lg top-bar bg-gray-100 dark:bg-sky-900">
          <div class="top-bar__left">
            
            <div class="flex justify-start items-center space-x-1.5">
                <span class="w-3 h-3 rounded-full bg-red-400"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span class="w-3 h-3 rounded-full bg-green-400"></span>
            </div>

            <div class="icon-wrapper">
              <img src="https://assets.website-files.com/6136b007901e59633bd62692/6136b127b85b65a2be6dcff0_Icon%20button-2.svg" loading="lazy" alt="">
            </div>
            <div class="arrows-wrapper">
              <div class="icon-wrapper">
                <img src="https://assets.website-files.com/6136b007901e59633bd62692/6136b127c54d2510c179ccab_Group-1.svg" loading="lazy" alt="">
              </div>
              <div class="icon-wrapper">
                <img src="https://assets.website-files.com/6136b007901e59633bd62692/6136b127e067452af6405262_Group-2.svg" loading="lazy" alt="">
              </div>
            </div>
          
          </div>
          <div class="top-bar__center">
            <div class="search-bar bg-gray-300 dark:bg-sky-800 dark:text-white p-2">
              <div>codenito.io</div>
            </div>
          </div>
          <div class="top-bar__right">
            <div class="top-bar__right-contents">
              <div class="icon-wrapper">
                <img src="https://assets.website-files.com/6136b007901e59633bd62692/6136b127378b7ccfb212f01e_Group.svg" loading="lazy" alt="">
              </div>
              <div class="icon-wrapper">
                <img src="https://assets.website-files.com/6136b007901e59633bd62692/6136b127b09fb126afbcbb22_Icon%20button.svg" loading="lazy" alt="">
              </div>
              <div class="icon-wrapper">
                <img src="https://assets.website-files.com/6136b007901e59633bd62692/6136b12770d10d043b021647_Icon%20button-1.svg" loading="lazy" alt="">
              </div>
            </div>
          </div>
        </div>
        <Transition name="fade" mode="out-in">
          <div v-if="slideId === 1">
            <div class="browser-window dark:bg-sky-800 dark:text-white">
              <img src="../assets/img/create-app_min.png" class="max-w-full h-auto" alt="..." />
            </div>
          </div>

          <div v-else-if="slideId === 2">
            <div class="browser-window rounded-b-lg dark:bg-sky-800 dark:text-white">
              <img src="../assets/img/bring-code_min.png" class="max-w-full h-auto" alt="..." />
            </div>
          </div>

          <div v-else-if="slideId === 3" class="relative" v-bind:class="{ demo: slideId === 3 }">
            <div class="browser-window rounded-b-lg dark:bg-sky-800 dark:text-white">
              
              <div>
                <div  class="w-full h-20 py-2 px-8 code-editor-text">
                  Hello Codenito ! 
                </div>

                <div class="absolute top-0 mt-12 -ml-8 mr-6">
                  <div class="max-w-2xl mx-auto">
                    <div class="w-full h-11 rounded-t-lg bg-gray-200 dark:bg-sky-900 flex justify-start items-center space-x-1.5 px-3">
                      <span class="w-3 h-3 rounded-full bg-red-400"></span>
                      <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
                      <span class="w-3 h-3 rounded-full bg-green-400"></span>
                    </div>
                    <div class="bg-gray-100 dark:bg-sky-800 rounded-b-lg border-t-0 text-primary-dark dark:text-white code-editor-text p-2 text-left">
                      <span class="text-accent">func</span> <span class="text-primary">main()</span> {<br>
                        <div class="px-4">
                          router := mux.NewRouter()<br>
                          <br>
                          router.HandleFunc("/hi", Hello).Methods("GET")<br>
                          http.Handle("/", router)<br>
                          <br>
                          http.ListenAndServe(":8080", router)<br>
                        </div>
                      }<br>
                      <br>
                      <span class="text-accent">func</span> <span class="text-primary">Hello</span>(w http.ResponseWriter, r *http.Request) {<br>
                        <div class="px-4">
                          w.WriteHeader(http.StatusOK)<br>
                          fmt.<span class="text-primary">Fprintf</span>(w, "Hello Codenito !")<br>
                        </div>
                      }
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Transition>
      </div>

  </div>
</template>


<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'WebBrowser',
    data () {
      return {

      }
    },
    props: {
      slideId: Number
    }
  })
</script>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.demo {
  height: 30rem;
}
.code-editor-text{
  font-family: monospace;
}

.top-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 10px 20px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.top-bar__left {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.top-bar__center {
  max-width: 40%;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.top-bar__right {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 170px;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.icon-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 30px;
  height: 30px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.search-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 26px;
  max-width: 100%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 6px;
  font-size: 12px;
  text-align: center;
}

.arrows-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.browser-window {
  background-color: #fff;
}

.top-bar__right-contents {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 110px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.ms-iframe {
  position: fixed;
  left: 0%;
  top: auto;
  right: auto;
  bottom: 0%;
  z-index: 100000000000000;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 70px;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
}

.ms-iframe-embed {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: visible;
  width: 180px;
  height: 70px;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
}

.ms-iframe-footer-embed {
  display: block;
  overflow: hidden;
  width: 100%;
  height: 350px;
  margin-bottom: 0px;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  background-color: #202020;
  background-image: -webkit-gradient(linear, left top, right top, from(#92e3ff), color-stop(29%, #89cff2), color-stop(72%, #ff82af), to(#fa95bb));
  background-image: linear-gradient(90deg, #92e3ff, #89cff2 29%, #ff82af 72%, #fa95bb);
}

@media screen and (max-width: 767px) {
  .top-bar__left {
    display: none;
  }

  .top-bar__center {
    max-width: 100%;
  }

  .top-bar__right {
    display: none;
  }
}

@media screen and (max-width: 479px) {
  .site-wrapper {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
@font-face {
  font-family: 'Plusjakartasans';
  src: url('https://assets.website-files.com/6136b007901e59633bd62692/6136b05e5fa4d595d9e05ea9_PlusJakartaSans-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
</style>