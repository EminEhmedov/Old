<script setup>
import NavbarVue from './components/Navbar.vue';
import { RouterView } from 'vue-router';



</script>

<template>
    <div>
        <NavbarVue/>

        <RouterView/>
    </div>
</template>


<script>

export default {

data(){
    return{

    }
},
methods:{

},
created(){
    this.$store.dispatch("getdata")
    this.$store.dispatch('tokeniyoxla')
}

}

</script>