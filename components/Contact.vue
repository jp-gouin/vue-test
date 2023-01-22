<template>
<div class="flex justify-center items-center flex-col xl:w-1/2 2xl:w-1/3 p-2 m-auto">
       <div class="pt-6 text-center  ">
            <h1 class="text-center m-auto p-2 lg:p-8 text-xl md:text-2xl lg:text-6xl font-bold tracking-tight text-secondary dark:text-title-card-dark">
            Contact Us !
        </h1>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want to reach us ? Got a question ? Want to send feedback about a beta feature?</p>
      </div>
      <form v-on:submit.prevent="onSubmit" class="space-y-8 w-full">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input v-model='form.email' type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="bob@gmail.com">
              <span v-if="form.errors().has('email')" class="text-sm text-red-700">
                {{ form.errors().get('email') }}
              </span>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input v-model="form.subject" type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you">
              <span v-if="form.errors().has('subject')" class="text-sm text-red-700">
                {{ form.errors().get('subject') }}
              </span>
            </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message</label>
              <textarea v-model="form.message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              <span v-if="form.errors().has('message')" class="text-sm text-red-700">
                {{ form.errors().get('message') }}
              </span>
            </div>
            <recaptcha />
          <button type="submit" class="justify-center rounded-md border border-transparent bg-accent dark:bg-accent-dark px-8 py-3 text-base font-bold text-white hover:bg-accent-dark dark:hover:bg-accent lg:py-4 lg:px-10 lg:text-md">Send message</button>
      </form>
      <Message v-if="showMsg" :key="showMsg" :type="serverResponse" :message="serverMsg" tempo="true"></Message>
    </div>
</template>

<style scoped>

</style>

<script>
import form from 'vuejs-form'
import Message from './Message.vue'

export default {
  name: 'Contact',
  components: {Message},
  props: {
    serverUrl: String
  },
  data () {
    return {
        showMsg: false,
        token: null,
        serverResponse: String,
        serverMsg: String,
        message: String,
        form: form.default({
            email: '',
            subject: '',
            message: ''
        })
        .rules({
            email: 'email|min:5|required',
            subject: 'required|min:5|max:63',
            message: 'required|min:20',
        })
        .messages({
            'email.email': ':attribute must be a valid email',
            'email.min': ':attribute may not have less than :min characters',
            'subject.min': ":attribute may not have less than :min characters",
            'message.min': ":attribute may not have less than :min characters",
            'subject.max': ":attribute may not have more than :max characters"
        }),
    }
  },
  methods : {
    onSubmit: async function () {
      console.log(this.token)
      if (this.form.validate().errors().any()){
        console.log("form errors");
      }else{
        try {
          this.token = await this.$recaptcha.getResponse()
          // send token to server alongside your form data
          this.$axios.post(this.serverUrl, JSON.stringify(this.form.all()))
          .then(() => {
           this.showMsg=true;
           this.serverResponse="success";
           this.serverMsg="Thanks for reaching out !"
          })
          .catch((error) => {
            console.log(error)
            this.showMsg=true;
            this.serverResponse="danger";
            this.serverMsg="Oops there was an issue, please try later"
          });
          // at the end you need to reset recaptcha
          await this.$recaptcha.reset()

        } catch (error) {
          console.log(error)
          this.showMsg=true;
          this.serverResponse="danger";
          this.serverMsg="Oops there was an issue, please try later"
        } 
      }
    },
  },
}
</script>
