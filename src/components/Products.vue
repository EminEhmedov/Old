<script setup>
import { mapGetters } from 'vuex';
import { RouterLink } from 'vue-router';



</script>



<template>
    <div>
<div class="container">
         <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
       <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Praise</th>
      <th scope="col">Veziyyet</th>
      <th scope="col">Image</th>

      <th scope="col">Change</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="key ,index of datanial.allproduct" :key="key" class="align-baseline">
<td>{{index+1}}</td>
<td>{{key.id}}</td>
<td>{{key.name}}</td>
<td>{{key.praise}}</td>
<td class="d-flex flex-column"><button class="btn btn-sm "
:class="{
  'btn-success':key.status=='Tesdiq edildi',
  'btn-danger':key.status=='Imtina edildi',
  'btn-warning':key.status=='Tesdiq gozlenilir'
}"


>{{key.status}}</button>

<span class="badge mt-3 btn-success">
  {{key.sebeb}}
</span>
</td>
<td><img :src="key.img" class="img-thumbnail" style="width:300px; height:150px;"  alt=""></td>

<td class="d-flex justify-content-between"> 
    <button class="btn btn-sm btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  @click="show1(key.id,index)" > Show</button>
  <button class="btn btn-lg btn-danger" @click="delete1(key.id,index)"> Delete</button>
    <button class="btn btn-sm btn-info"  @click="gedal(key.id,index)"> Edit</button>
    
</td>
    </tr>
  </tbody>
</table>
</div>
<!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable"> 
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Mehsul Haqqinda</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
        Mehsul adi
    <p>{{fileyollamodala.name}}</p>
    Mehsul Sekili
    <img :src="fileyollamodala.img"  class="img-thumbnail" alt="">
    Mehsul Haqqinda
     <p>{{fileyollamodala.about}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>

    </div>
</template>

<script>
export default {
computed:{
    ...mapGetters(['datanial','fileyollamodala'])
},
methods:{
  delete1(keyid,index){
    this.$store.dispatch('Deletedata',{keyid,index})
  },
  gedal(keyid1,index1){
     let id=keyid1
        let index=index1
        this.$store.dispatch('editedfayli',{id ,index})
  },
  show1(keyid2,index2){
this.$store.dispatch('datanigosteral',{keyid2,index2})


  }
  
}
}

</script>