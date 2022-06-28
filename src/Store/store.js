import axios from "axios";
import { createStore } from "vuex";
import router from "../router";


const store=createStore({
    state:{
image:'https://avatars.mds.yandex.net/i?id=8de7105c72dc51243027e7f56f70244c-4936279-images-thumbs&n=13',
products:[],
editfile:'',
showfile:'',
Token:'',
yeniproduct:[]
    },
    getters:{
imagegetir(state){
    return state.image
},
datanial(state){
return {
    allproduct: state.products}
},
editdatayolla(state){
    return state.editfile
    
},
fileyollamodala(state){
return state.showfile
},
roootayollatokeni( state){
    return state.Token !==''
}
    },
    mutations:{

    },
    actions:{
imageal({state,commit},payload){
    state.image='https://1.bp.blogspot.com/-wRlbbo_FiaI/VayXP7GmH5I/AAAAAAAAPFU/Z8VyYeIWxEs/s1600/loading-gif1.gif'
    axios.get(`https://source.unsplash.com/random/900×700/?${payload}`).then(({request})=>{
      
state.image=request.responseURL
    })
},
postproduct({state,commit},payload){
   payload.img=state.image

axios.post('https://login-5f77c-default-rtdb.firebaseio.com/productadd.json',payload).then(({data})=>{
   
    
    payload.id=data.name
    
        state.products.push(payload)
        console.log(state.products);
        state.image='https://avatars.mds.yandex.net/i?id=8de7105c72dc51243027e7f56f70244c-4936279-images-thumbs&n=13'
    router.replace('/products')
})
    
},
getdata({state,commit},payload){
axios.get('https://login-5f77c-default-rtdb.firebaseio.com/productadd.json').
then(({data})=>{
  for(let key in data){
    data[key].id=key
    state.products.push(data[key])
    state.yeniproduct.push(data[key])
  }
 
 

})
},
Deletedata({state,commit},payload){
console.log(payload);
axios.delete(`https://login-5f77c-default-rtdb.firebaseio.com/productadd/${payload.keyid}.json`).then((response)=>{
    console.log(response);
    state.products.splice(payload.index,1)
})

},
editedfayli({state,commit},payload){
axios.get(`https://login-5f77c-default-rtdb.firebaseio.com/productadd/${payload.id}.json`).then(({data})=>{
   
    data.id=payload.id
    data.index=payload.index
    state.editfile=data 
    router.replace('/edit')
    console.log(state.editfile);
})


},
editiyollageri({state,commit},payload){
axios.put(`https://login-5f77c-default-rtdb.firebaseio.com/productadd/${payload.id}.json`,payload).then((response)=>{

   
state.products.splice(payload.index,1,payload)
state.yeniproduct=state.products
    router.replace('/products')
})
},
datanigosteral({state,commit},payload){


// axios.get(`https://login-5f77c-default-rtdb.firebaseio.com/productadd/${payload.keyid2}.json`).then((response)=>{
//     console.log(response);
// })
state.showfile=state.products[payload.index2]
},
mailgelir({state,commit},payload){
console.log(payload);
let link='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key'
if(payload.isUser){

link='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key'
}

axios.post(link+'=AIzaSyC0k3uC7Xmrj0rL8IBgDqBO2O-NSwAkeY4',
{
    email: payload.email,
    password: payload.password,
    returnSecureToken: true
}).then(({data})=>{

    localStorage.setItem('token',data.idToken)
    state.Token=data.idToken
    router.replace('/')
})

},
tokeniyoxla({state,commit},payload){
    let local=localStorage.getItem('token')
if (local) {
   state.Token=local
}
else{
    router.replace('/sign')
}
},
mailisil({state,commit},payload){
    state.Token=''
    localStorage.removeItem('token')
    router.replace('/sign')
},
searchproducteand({state,commit},payload){
    console.log( state.products);
    state.products=state.yeniproduct
 
let filter1=state.products.filter((items)=>{
        // console.log(payload);
return items.name.toString().toLowerCase().includes(payload.toLowerCase())
    })
    if(filter1.length>0){
        state.products=filter1
    }
    if(filter1.length==0){
        let filter1=state.products.filter((items)=>{
            // console.log(payload);
    return items.id.toString().toLowerCase().includes(payload.toLowerCase())
        })
        if(filter1.length>0){
            state.products=filter1
        }
    }
    if(filter1.length==0){
        let filter1=state.products.filter((items)=>{
            // console.log(payload);
    return items.about.toString().toLowerCase().includes(payload.toLowerCase())
        })
        if(filter1.length>0){
            state.products=filter1
        }
    }
    if(filter1.length==0){
        let filter1=state.products.filter((items)=>{
            // console.log(payload);
    return items.praise.toString().toLowerCase().includes(payload.toLowerCase())
        })
        if(filter1.length>0){
            state.products=filter1
        }
    }

   
    
    
}
}})

export default store