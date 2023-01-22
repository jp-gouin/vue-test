<template>  

<footer class="bg-white dark:bg-gray-900">
    <div class="flex">
        <div class="flex-1 text-center">
            <h1 class="text-sm mb-4 font-semibold  uppercase dark:text-gray-400">Company</h1>
            <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-2">
                    <button  v-on:click="showAbout = true" class="hover:underline">About</button>
                </li>
            </ul>
        </div>
        <div class="flex-1 text-center">
            <h2 class="mb-4 text-sm font-semibold uppercase dark:text-gray-400">Help center</h2>
            <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-2">
                    <a href="mailto:contact@codenito.io" class="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div class="flex-1 text-center">
            <h2 class="mb-4 text-sm font-semibold uppercase dark:text-gray-400">Legal</h2>
            <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-2">
                    <button  v-on:click="showLegal = true" class="hover:underline">Privacy Policy</button>
                </li>
            </ul>
        </div>
    </div>
    <div class="py-6 px-4 bg-gray-100 dark:bg-back-dark md:flex md:items-center md:justify-between">
        <CodenitoLogo :size="'large'" />
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2022 <a href="https://codenito.io/">Codenito</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a href="https://github.com/codenito" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">GitHub account</span>
            </a>
        </div>
    </div>
    <modal v-bind:large="true" v-if="showLegal" @close="showLegal = false">
        <h1 slot="header" class="text-md xl:text-xl m-4 font-bold font-primary uppercase text-center">Privacy Policy</h1>
        <div slot="body" >
            <h1 class="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl m-4">What is Personal Data?</h1>
            <p>Personal data is any information relating to an identified or identifiable natural person. Personal data includes e.g. name, email address or telephone number. We will only collect, use and/or pass on personal data if this is permitted by law or if the User consents to the data processing.</p>
            <h1 class="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl m-4">Applicable Laws to our processing of Personal Data</h1>
            <p>of the European Parliament and Council of 27 April 2016, repealing the directive 95/46/EC, on the protection of individuals with regard to the processing of personal data, on the free movement of such data ("General Data Protection Regulation", GDPR) as well as in the Federal Data Protection Act (Bundesdatenschutzgesetz, BDSG) and the German Telemedia Act (Telemediengesetz, TMG).</p>
            <h1 class="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl m-4">How is my Data processed when visiting the Website and contacting us?</h1>
            <p>If you browse our Website the provider of the website collects and stores information automatically in so-called "server-log-files" that your browser transfers to us. These are: type/version of the browser, system software used, referrer URL, hostname of the device, time of the server request, IP-address or other unique device identifier.</br>
               If you are using a mobile device the following data may also be processed additionally through the Website: country code, language, hostname of the device, name and version of the operational system.</br>
               We use these data only for statistical analysis for the purpose of operation, security and optimization of the performance and content on our Website. This data processing is necessary for Gitpod's legitimate interests (under Art. 6 (1) f. GDPR or TMG) – in particular for providing a secure and stable Website or Service, for improving our Website and for quality insurance.</p>
            <h1 class="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl m-4">Contacting us</h1>
            <p>When contacting us via email, the User’s details are stored for the purpose of processing the enquiry and, if applicable, follow-up questions based on your consent based on the legal basis of Art. 6 (1) a. GDPR or fulfilling your request based on Art. 6 (1) b. GDPR.</p>
            <h1 class=" text-center text-gray-500 dark:text-gray-400 sm:text-xl m-4">Your Rights</h1>
            <p>You can contact us at <a href="mailto:contact@codenito.io?subject='GDPR rights'">contact@codenito.io</a> to request the deletion of any personal data </br>
               We will process to delete any information in 72hours upon reception of your inquiry 
            </p>
        </div>
    </modal>
    <modal v-bind:large="true" v-if="showAbout" @close="showAbout = false">
        <h1 slot="header" class="text-md xl:text-xl m-4 font-bold font-primary uppercase text-center">About</h1>
        <div slot="body" >
            <h1 class="text-gray-500 dark:text-gray-400 sm:text-xl m-4">© 2022 <a href="https://codenito.io/">Codenito</a>. All Rights Reserved.</h1>
            <h1>Credit - Icon</h1>
            <a href="http://www.freepik.com">Designed by starline / Freepik</a> </br>
            <a href="https://www.flaticon.com/fr/icones-gratuites/referencement-et-web" title="référencement et web icônes">Référencement et web icônes créées par Iconjam - Flaticon</a>
        </div>
    </modal>
</footer>
</template>
  
<style>

</style>
  
<script>
import CodenitoLogo from './CodenitoLogo.vue';
import modal from './Modal.vue'

export default {
    name: "Footer",
    components: { CodenitoLogo,modal },
    data() {
      return {
        darkTheme: false,
        showLegal: false,
        showAbout: false
      }
  },
}

</script>
  