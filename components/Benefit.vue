<template>
    <div class="flex justify-center items-center flex-col lg:flex-row">
    <div class="bg-back-card rounded-xl p-8 dark:bg-back-card-dark drop-shadow-md 2xl:w-1/6 w-2/3 m-5" v-for="benefit in benefits">
        <svg v-if="benefit.icon == 'rocket'" class="w-20 h-20 m-auto" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 489.143 489.143" style="enable-background:new 0 0 489.143 489.143;" xml:space="preserve"><g>	<polygon style="fill:#C4C8F5;" points="85.924,272.426 48.7,329.482 159.674,440.457 216.73,403.232 	"/>	<polygon style="fill:#C4C8F5;" points="114.551,106.303 17.164,203.69 94.942,228.465 222.331,101.076 	"/>	<polygon style="fill:#A7ADF0;" points="285.465,471.992 382.853,374.605 388.081,266.818 260.69,394.208 	"/>			<rect x="11.155" y="350.18" transform="matrix(0.7071 0.7071 -0.7071 0.7071 273.7352 87.5724)" style="fill:#FFB655;" width="40.001" height="48.083"/>			<rect x="94.934" y="433.959" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -127.6436 863.1308)" style="fill:#FF9811;" width="40.001" height="48.083"/>			<rect x="28.795" y="403.425" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -280.5937 169.442)" style="fill:#FFB655;" width="70.884" height="40"/>	<path style="fill:#165C92;" d="M477.223,23.582l-3.196-8.457L403.84,85.312c19.53,19.53,19.523,51.188,0,70.711		c-19.53,19.53-51.18,19.53-70.711,0L151.325,337.827l82.873,82.873l200.74-200.741C486.288,168.61,502.884,91.528,477.223,23.582z"		/>	<path style="fill:#96C8EF;" d="M403.84,156.023c19.523-19.523,19.53-51.18,0-70.711l-70.711,70.711		C352.659,175.553,384.31,175.553,403.84,156.023z"/>	<path style="fill:#1E81CE;" d="M333.129,156.023c-19.523-19.523-19.53-51.18,0-70.711c19.523-19.523,51.188-19.523,70.711,0		l70.187-70.187l-8.45-3.189C444.612,4.009,422.571,0,400.085,0c-49.441,0-95.926,19.247-130.885,54.207L68.452,254.954		l82.873,82.873L333.129,156.023z"/>	<path style="fill:#D1E7F8;" d="M333.129,85.312c-19.53,19.53-19.523,51.188,0,70.711l70.711-70.711		C384.317,65.789,352.652,65.789,333.129,85.312z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
        <svg v-else-if="benefit.icon == 'automation'" class="w-24 h-24 m-auto overflow-visible" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 517.2 517.2" style="enable-background:new 0 0 507.2 507.2;" xml:space="preserve"><g class="bounce"><path style="fill:#0B7F9E;" d="M413.6,172.8c0,140.8-76,290.4-160,290.4s-160-148.8-160-290.4S170.4,0,253.6,0S413.6,32,413.6,172.8	z"/><path style="fill:#0B6382;" d="M253.6,0c83.2,0,160,32,160,172.8s-76,290.4-160,290.4s-160-148.8-160-290.4"/><path style="fill:#00233F;" d="M253.6,0c83.2,0,160,32,160,172.8s-76,290.4-160,290.4"/><path style="fill:#022728;" d="M216,80c0,13.6-11.2,35.2-25.6,35.2c-13.6,0-25.6-20.8-25.6-35.2c0-13.6,11.2-25.6,25.6-25.6	C204,54.4,216,65.6,216,80z"/><circle style="fill:#00FFF2;" cx="190.4" cy="80" r="25.6"/><path style="fill:#16D8D8;" d="M172,61.6c9.6-9.6,25.6-9.6,36,0c9.6,9.6,9.6,25.6,0,36"/><circle style="fill:#00FFF2;" cx="190.4" cy="80" r="14.4"/><path style="fill:#16D8D8;" d="M190.4,94.4c-8,0-14.4-6.4-14.4-14.4s6.4-14.4,14.4-14.4"/><g>	<circle style="fill:#EBFFFD;" cx="179.2" cy="68.8" r="8.8"/>	<circle style="fill:#EBFFFD;" cx="204.8" cy="92.8" r="4"/></g><path style="fill:#0B6382;" d="M342.4,80c0,13.6-11.2,35.2-25.6,35.2c-13.6,0-25.6-20.8-25.6-35.2c0-13.6,11.2-25.6,25.6-25.6	C331.2,54.4,342.4,65.6,342.4,80z"/><circle style="fill:#00FFF2;" cx="316.8" cy="80" r="25.6"/><path style="fill:#16D8D8;" d="M299.2,61.6c9.6-9.6,25.6-9.6,36,0c9.6,9.6,9.6,25.6,0,36"/><circle style="fill:#00FFF2;" cx="316.8" cy="80" r="14.4"/><path style="fill:#16D8D8;" d="M316.8,94.4c-8,0-14.4-6.4-14.4-14.4s6.4-14.4,14.4-14.4"/><g>	<circle style="fill:#EBFFFD;" cx="305.6" cy="68.8" r="8.8"/>	<circle style="fill:#EBFFFD;" cx="331.2" cy="92.8" r="4"/></g><path style="fill:#00FFF2;" d="M191.2,141.6l-33.6-40l0,0H96c-0.8,8-1.6,16-1.6,16h56.8l38.4,40l0,0l0,0h56v-16H191.2z"/><polyline style="fill:#16D8D8;" points="93.6,117.6 151.2,117.6 189.6,157.6 189.6,157.6 189.6,157.6 245.6,157.6 245.6,152.8 	190.4,148 157.6,109.6 157.6,109.6 "/><path style="fill:#00FFF2;" d="M316,141.6l33.6-40l0,0h61.6c0.8,8,1.6,16,1.6,16H356l-38.4,40l0,0l0,0h-56v-16H316z"/><polyline style="fill:#16D8D8;" points="413.6,117.6 356,117.6 317.6,157.6 317.6,157.6 317.6,157.6 261.6,157.6 261.6,152.8 	316.8,148 349.6,109.6 349.6,109.6 "/><circle style="fill:#00FFF2;" cx="253.6" cy="147.2" r="16"/><path style="fill:#16D8D8;" d="M269.6,147.2c0,8.8-7.2,16-16,16s-16-7.2-16-16"/><path style="fill:#0B7F9E;" d="M94.4,173.6l-0.8-1.6c0,0.8-0.8,0.8-0.8,1.6c0,93.6,32,188.8,80,243.2v-216l-29.6-27.2H94.4z"/><path style="fill:#00233F;" d="M94.4,168l-0.8,1.6c0,0.8-0.8,2.4-0.8,3.2c0,93.6,32,190.4,80,244.8v-220"/><path style="fill:#0B7F9E;" d="M412,173.6l0.8-1.6c0,0.8,0.8,0.8,0.8,1.6c0,93.6-32,184.8-80,240V200.8l29.6-27.2H412z"/><path style="fill:#02405B;" d="M412.8,168v1.6c0,0.8,0.8,2.4,0.8,3.2c0,93.6-32,190.4-80,244.8v-220"/><circle style="fill:#0B6382;" cx="50.4" cy="304.8" r="40.8"/><g>	<path style="fill:#00233F;" d="M50.4,264.8c22.4,0,40.8,18.4,40.8,40.8s-18.4,40.8-40.8,40.8"/>	<circle style="fill:#00233F;" cx="50.4" cy="247.2" r="9.6"/></g><polyline style="fill:#16D8D8;" points="53.6,237.6 53.6,197.6 77.6,197.6 77.6,165.6 93.6,165.6 "/><ellipse transform="matrix(-0.0789 -0.9969 0.9969 -0.0789 -103.6292 323.4209)" style="fill:#0B7F9E;" cx="97.595" cy="209.584" rx="40.001" ry="13.6"/><ellipse transform="matrix(-0.0788 -0.9969 0.9969 -0.0788 -108.8679 318.6161)" style="fill:#0B6382;" cx="92.778" cy="209.609" rx="24" ry="5.6"/><g>	<circle style="fill:#16D8D8;" cx="127.2" cy="211.2" r="3.2"/>	<circle style="fill:#16D8D8;" cx="140" cy="207.2" r="3.2"/>	<circle style="fill:#16D8D8;" cx="152.8" cy="204" r="3.2"/></g><path style="fill:#00FFF2;" d="M69.6,313.6c0,2.4-1.6,4-4,4h-32c-2.4,0-4-1.6-4-4l0,0c0-2.4,1.6-4,4-4h32	C68,309.6,69.6,311.2,69.6,313.6L69.6,313.6z"/><circle style="fill:#0B6382;" cx="456.8" cy="304.8" r="40.8"/><g>	<path style="fill:#00233F;" d="M456.8,264.8c-22.4,0-40.8,18.4-40.8,40.8s18.4,40.8,40.8,40.8"/>	<circle style="fill:#00233F;" cx="456.8" cy="247.2" r="9.6"/></g><polyline style="fill:#16D8D8;" points="453.6,237.6 453.6,197.6 429.6,197.6 429.6,165.6 413.6,165.6 "/><ellipse transform="matrix(-0.0789 0.9969 -0.9969 -0.0789 651.5395 -182.3609)" style="fill:#0B7F9E;" cx="410.015" cy="209.81" rx="40.001" ry="13.6"/><ellipse transform="matrix(-0.0788 0.9969 -0.9969 -0.0788 656.439 -186.1716)" style="fill:#0B6382;" cx="414.238" cy="210.213" rx="24" ry="5.6"/><g>	<circle style="fill:#16D8D8;" cx="380" cy="211.2" r="3.2"/>	<circle style="fill:#16D8D8;" cx="367.2" cy="207.2" r="3.2"/>	<circle style="fill:#16D8D8;" cx="354.4" cy="204" r="3.2"/></g><path style="fill:#00FFF2;" d="M477.6,313.6c0-2.4-1.6-4-4-4h-32c-2.4,0-4,1.6-4,4l0,0c0,2.4,1.6,4,4,4h32	C476,317.6,477.6,316,477.6,313.6L477.6,313.6z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g><ellipse class="" style="fill:#91C6C2;" cx="253.6" cy="495.2" rx="104" ry="12"> <animate attributeName="rx" begin="1s" dur="3s" values="104;104;104" repeatCount="indefinite"/></ellipse></svg>
        <svg v-else-if="benefit.icon == 'simple'" class="w-20 h-20 m-auto"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 370 370" style="enable-background:new 0 0 370 370;" xml:space="preserve"><g id="XMLID_1987_">	<polygon id="XMLID_1988_" style="fill:#5A8BB0;" points="281.801,30 320,30 320,0 258.199,0 242.371,70 272.945,70 	"/>	<path id="XMLID_1989_" style="fill:#FFDA44;" d="M55,70c0-22.092,17.908-40,40-40V0C56.34,0,25,31.34,25,70s31.34,70,70,70v-30		C72.908,110,55,92.092,55,70z"/>	<path id="XMLID_1990_" style="fill:#FF9811;" d="M95,110v30c14.713,0,28.358-4.549,39.627-12.303l-16.982-24.728		C111.205,107.4,103.407,110,95,110z"/>	<path id="XMLID_1991_" style="fill:#FF9811;" d="M135,70h30c0-38.66-31.34-70-70-70v30C117.092,30,135,47.908,135,70z"/>	<path id="XMLID_1992_" style="fill:#FFFFFF;" d="M95,30c-22.092,0-40,17.908-40,40s17.908,40,40,40c8.407,0,16.205-2.6,22.645-7.03		L95,70h40C135,47.908,117.092,30,95,30z"/>	<polygon id="XMLID_1993_" style="fill:#FF5023;" points="220,100 115.604,100 205.061,230.25 220,230.25 	"/>	<polygon id="XMLID_1994_" style="fill:#BF3C1A;" points="220,230.25 234.939,230.25 324.396,100 220,100 	"/>	<path id="XMLID_1995_" style="fill:#AED5F3;" d="M235,230.25h-0.061L345,70h-72.055h-30.574H165h-30H95l22.645,32.97l16.982,24.728		l70.434,102.553H205V340h-55v30h140v-30h-55V230.25z M115.604,100H220h104.396l-89.457,130.25H220h-14.939L115.604,100z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
        <div class="pt-6 text-center space-y-4">
            <blockquote>
            <p class="text-2xl font-medium font-bold text-title-card dark:text-title-card-dark">
                {{ benefit.title }} 
            </p>
            </blockquote>
            <div class="font-medium">
                <div class="text-xl text-secondary dark:text-primary">
                   {{ benefit.description }} 
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<style scoped>
.bounce {
  animation: bounce 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}
.crescendo {
  animation: crescendo 1.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}
@keyframes crescendo {
  from {
        stroke-width: 8;
    }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-20%);
    animation-timing-function: cubic-bezier(0.8,0,1,1);
}
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Benefit',
  data() {
    return {
      benefits: [{
          icon: "rocket",
          title: "Fast deployment",
          description: "From coding to accessing all your apps"
      },
      {
          icon: "automation",
          title: "Build auto",
          description: "We build, deploy and publish your app for you"
      },
      {
          icon: "simple",
          title: "Config less",
          description: "Only bring your code"
      }]
    }
  },
  mounted() {
    this.benefits
  }
})
</script>
