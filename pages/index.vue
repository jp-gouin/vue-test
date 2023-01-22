<template>
  <div class="bg-back dark:bg-back-dark">
    <CookieControl>
      </CookieControl>

    <div class="wqhd:h-screen">
      <TopNav></TopNav>
      <Main></Main>
    </div>
    <div class="pt-12 2xl:hidden" >
      <Benefit class="lg:items-stretch items-center"></Benefit>
    </div>
    <DemoArea class="pt-12"></DemoArea>
    <ThirdSection class="pt-12"></ThirdSection>
    <Contact serverUrl='https://codenito.io/api/v1/contact' class="pt-12"></Contact>
    <Footer class="pt-4 mt-12"></Footer>
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
  }
</script>
