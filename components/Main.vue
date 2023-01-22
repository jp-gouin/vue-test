<template>
    <div>
    <Message v-if="showMsg" :message="serverMsg" :type="messageType" :position="messagePosition" tempo></Message>
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row gap-4 grid-cols-1 lg:grid-cols-12">
        
        <main class="flex-1 flex justify-center lg:justify-start col-span-12 lg:col-span-6 mx-auto mt-10 pb-6 px-4 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="text-center lg:text-left">
            <h1 class="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight">
              <span class="block xl:inline">
                <h1 class="text-secondary dark:text-white text-2xl md:text-4xl lg:text-6xl">
                  Start coding <br>now.
                </h1>
              </span>
              <span class="block text-primary-dark text-lg mt-5">
                Code, triger build and take a coffee ! <br>We build, secure and publish your apps for you.
              </span>
            </h1>
            <div class="mt-5 sm:mt-8 lg:justify-start">
                <div class="grid gap-4 grid-cols-1 lg:grid-cols-12">
                  <div class="col-span-12 lg:col-span-6 flex justify-center">
                    <a :href="getGoogleUrl()" class="flex w-2/3 lg:w-full items-center justify-center rounded-md border border-transparent bg-accent dark:bg-accent-dark px-8 py-3 text-base font-bold text-white hover:bg-accent-dark dark:hover:bg-accent xl:py-4 xl:px-10 xl:text-lg">
                      <svg class="w-7 h-7 mr-2" viewBox="0 0 326667 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"/>
                        <path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"/>
                        <path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"/>
                        <path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"/>
                      </svg>
                      Register with Google
                    </a>
                  </div>
                  <div class="col-span-12 lg:col-span-6 flex justify-center">
                    <a :href="getGitHubUrl()" class="flex w-2/3 lg:w-full items-center justify-center rounded-md border border-transparent bg-accent dark:bg-accent-dark px-8 py-3 text-base font-bold text-white hover:bg-accent-dark dark:hover:bg-accent xl:py-4 xl:px-10 xl:text-lg">
                      <svg class="w-7 h-7 mr-2" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                      </svg> 
                      Register with Github
                    </a>
                  </div>
                </div>

            </div>
          </div>
        </main>
        <div class="flex-1 flex justify-center items-center mt-10 lg:max-w-3xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <AwesomeLogo />
        </div>
      </div>
        
      <div class="hidden wqhd:flex items-center justify-center inline-block absolute inset-x-0 bottom-14 h-16">
        <ScrollIco :effect="'mouse'"/>
      </div>
     
    </div>

    <div class="hidden 2xl:block 2xl:pt-24" >
      <Benefit class="lg:items-stretch items-center"></Benefit>
    </div>
    <h1 class="hidden lg:block pt-10 text-lg text-primary-dark text-center font-bold tracking-tight xl:text-xl 2xl:text-2xl 2xl:bigline" >
      Code, lunch build and take a coffee ! <br/> We build, secure and publish all your apps for you !<br/>
Get a live rendering of your application through a dedicated URIs for each of your applications.<br/>
Get a simple solution to interconnect you apps using our secured APIs
    </h1>
  </div>
</template>

<style scoped>
.bigline{
  line-height: 3.5rem;
}
</style>

<script>

const from = 'test';
const githubAuthorizationURL = 'https://github.com/login/oauth/authorize';
const googleAuthorizationURL = 'https://accounts.google.com/o/oauth2/v2/auth'

const githubAuthOptions = {
  client_id: '7a7ddb3413fa270d0cba',
  redirect_uri: 'https://codenito.io/api/v1/callback/auth-github',
  scope: 'user:email',
  state: from,
};

const googleuthOptions = {
  client_id: '790312815140-b7pg6kn15c6h3rpqks4bc1j7qsb9acde.apps.googleusercontent.com',
  redirect_uri: 'https://codenito.io/api/v1/callback/auth-google',
  response_type: 'code',
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ].join(' '),
  access_type: 'offline',
  state: from,
};

const githubQueryOptions = new URLSearchParams(githubAuthOptions);
const googleQueryOptions = new URLSearchParams(googleuthOptions);

export default {
    name: "Main",
    data() {
      return {
        showMsg: false,
        serverMsg: String,
        messageType: String,
        messagePosition: "top-right"
      }
    },
    methods : {
      getGitHubUrl: function(from) {
        return `${githubAuthorizationURL}?${githubQueryOptions.toString()}`;
      },
      getGoogleUrl: function(from) {
        return `${googleAuthorizationURL}?${googleQueryOptions.toString()}`;
      }
    },
    mounted: function () {
      if (this.$route.query.registration === "ok") {
        this.serverMsg = "Your registration has been taken into account"
        this.messageType = "success"
        this.showMsg = true
        let query = Object.assign({}, this.$route.query);
        delete query.registration;
        this.$router.replace({ query });
      }
    }
}
</script>
