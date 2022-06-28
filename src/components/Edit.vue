<script setup>
import { mapGetters } from 'vuex';
</script>


<template>
    <div>
         <div class="container">
<div class="text-center">
    <h1>Edit</h1>
</div>
            <div class="row">
                <div class="col-6 offset-3 text-center">
<form action="#"  >

<input type="text" class="form-control bg-primary my-3 p-3" style="color:white; font-size:larger;" placeholder="name" v-model="editdatayolla.name">
<input type="number" class="form-control  " placeholder="price" v-model="editdatayolla.praise">

<div class="my-3 d-flex justify-content-between">
    <button type="button" class="btn btn-lg btn-success">Choose</button>
    <img :src="editdatayolla.img" style="width:300px; height:150px;"  alt="">
  
</div>
<input type="text" class="form-control p-3" placeholder="About" v-model="editdatayolla.about">
<button type="button" class="btn btn-lg btn-info mt-3" @click="Sendedit(index)" >Send</button>
</form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // product:{
            //     name:'',
            //     praise:'',
            //     about:''
            // }
        }
    },
   
    computed:{
        ...mapGetters(['editdatayolla'])
    },
    methods:{
        Sendedit(index){
this.$store.dispatch('editiyollageri',this.editdatayolla,index)

        }
    }
}
</script>


<style scoped>
button{
    width: 100px;
    height: 60px;
}
input:nth-child(1)::placeholder{
    color: white;
}

</style>