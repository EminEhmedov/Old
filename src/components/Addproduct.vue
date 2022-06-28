<script setup>
import { mapGetters } from 'vuex';
import router from '../router';

</script>


<template>
    <div class="bg-info2">
        <div class="container">

            <div class="row">
                <div class="col-6 offset-3 text-center">
<form action="#"  >

<input type="text" class="form-control mt-3 mb-3" placeholder="name" v-model="product.name">
<input type="number" class="form-control  " placeholder="price" v-model="product.praise">
<div class="mt-3 mb-3 d-flex justify-content-between">
    <button type="button" class="btn btn-lg btn-danger" @click="Imageal1">Choose</button>
    <img :src="imagegetir" class="img-thumbnail" style="width:300px; height:150px;"  alt="">
  
</div>
<select name="" id="" v-model="this.product.categoriya" style="width:300px;">
    <option value="IT">IT</option>
    <option value="Economika">Economika</option>
    <option value="Tibb">Tibb</option>
    <option value="Biologiya">Biologiya</option>
    <option value="Fizika">Fizika</option>
    <option value="Kompyuter">Kompyuter</option>
    <option value="Metbex">Metbex</option>
    <option value="Televizor">Televizor</option>
    <option value="Animals">Animals</option>
    <option value="Bina">Bina</option>
</select>
<input type="text" class="form-control" placeholder="About" v-model="product.about">
<button type="button" class="btn btn-lg btn-success mt-3" @click="sendproduct">Send</button>
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
    product:{
        name:'',
        praise:'',
        about:'',
        categoriya:'',
        status:'Tesdiq gozlenilir',
       sebeb:''
      
    }
}
    },
    methods:{
        Imageal1(){
            this.$store.dispatch('imageal',this.product.name)
        },
        sendproduct(){
              this.$store.dispatch('postproduct',this.product)
             
        }
    },
    computed:{
...mapGetters(['imagegetir'])
    }
}
</script>
<style scoped>
button{
    width: 100px;
    height: 60px;
}
select{
    background-color: darkgreen;
    color: white;
    height: 40px;
    font-size: 20px;
    margin-bottom: 15px;
}
.bg-info2{
    height: 100vh;
    background-color: cornflowerblue;
}
</style>