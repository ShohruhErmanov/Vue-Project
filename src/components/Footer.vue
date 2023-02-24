<template>
  <div class="footer__content">
    <div class="container">
      <div class="footer__content2">
        <div class="footer__content-img">
        <img src="./img/footerImg.png" alt="" class="footer__content-image" />
      </div>
      <div class="footer__content-links">
        <a
          href="#!"
          class="footer__content-link"
          v-for="(link, i) in links"
          :key="i"
        >{{ link }}</a>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
             links: ["ОБЩЕСТВО", "ТЕХНОЛОГИИ", "ЭКОНОМИКА", "ПОЛИТИКА", "СПОРТ"],
        }
    }
};
</script>

<style>
 .footer__content-link{
    color: white;
    transition: .5s;
 }
 .footer__content-link:hover{
    color: #EF4423;
 }
 .footer__content-links{
    display: flex;
    column-gap: 15px;
 }
 .footer__content2{
    display: flex;
    justify-content: space-between;
    align-items: center;
 }
</style>