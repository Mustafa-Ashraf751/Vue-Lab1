<template>
  <div class="container py-2">
    <div class="row">
      <headerComponent/>
    </div>
    <div class="row my-2">
      <div class="col-2">
        <linksComponent/>
      </div>
      <div class="col-8 offset-1">
        <bodyComponent/>
      </div>
    </div>
    <div class="row">
      <footerComponent/>
    </div>
  </div>
</template>

<script>
import headerComponent from './components/headerComponent.vue';
import bodyComponent from './components/bodyComponent.vue';
import linksComponent from './components/linksComponent.vue';
import footerComponent from './components/footerComponent.vue';
export default{
 components:{headerComponent,bodyComponent,linksComponent,footerComponent}
}

</script>

<style>

</style>