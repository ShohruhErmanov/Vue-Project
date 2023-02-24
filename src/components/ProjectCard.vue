<template>
  <div class="main__content-card">
    <div class="main__content-img">
      <img :src="img" alt="" class="main__content-image">
    </div>
     <div class="main__content-info">
      <div class="main__content-cardinfo">
         <h3 class="main__content-title">{{ title }}</h3>
      </div>
      <div class="main__content-cardinfo">
         <p class="main__content-text" >{{ text }}</p>
      </div>
     </div>
  </div>



</template>

<script>

export default {
  name: "ProjectCard",
   
    props: {
       img: {
         type: String
       },
       title: {
         type: String
       },
       text: {
         type: String
       }
    }
  
};
</script>
 
<style>

.main__content-info{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 20px;
  
  
}
.main__content-title{
  color: white;
  display: flex;
}
.main__content-text{
  color: #EBEBEB;
}
.main__content-card{
  display: flex;
}
.main__content-img{
  display: flex;
  height: 175px;
}
.main__content-cardinfo{
  display: flex;
}
</style>