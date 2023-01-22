<template>
    <div class="flex justify-center items-center p-8 mt-12 bg-white dark:bg-gray-900">
        <div class="container">
            <div class="grid gap-4 grid-cols-1 lg:grid-cols-12">
            
                <main class="flex justify-center px-8 col-span-12 lg:col-span-7">
                    <div class="text-center lg:text-left">
                        <WebBrowser v-bind:slideId="slideId"></WebBrowser>
                    </div>
                </main>

                 <div class="flex justify-center col-span-12 mt-8 lg:col-span-5 lg:mt-0 lg:basis-3/7">
                    <Carousel @slideId="UpdateSlideId"></Carousel>
                </div> 

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "DemoArea",
    data () {
        return {
            slideId: 1
        }
    },
    methods: {
        UpdateSlideId(id){
            this.slideId = id
        }
    }
}
</script>