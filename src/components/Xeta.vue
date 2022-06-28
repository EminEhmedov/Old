<template>
    <div class="text-center">
        <h1 class="mt-5">Xeta Sehvesine Xos gelmisen <br> Bir zehmet geri qayit</h1>
        <div class="but">
            <button class="btn btn-danger btn-lg mt-5" @click="geriqayit">
                Eve geri don!
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        geriqayit(){
            // this.$router.push({path:'/'})
            // this.$router.push({name:'Home'})
            // this.$router.replace('/')
            // this.$router.push('/')
            this.$router.back()
        }
    },
}
</script>