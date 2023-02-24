<template>
  <div class="main__content2-info">
       <h1 class="main__content2-info__title">{{ title }}</h1>
  </div>
  <div class="main__content2-item">
       <div class="main__content2-img">
          <img src="./img/glavniImg.png" alt="" class="main__content2-image">
       </div>
       <div class="main__content2-title">
           <h1 class="main__content2-title2">{{ title2 }}</h1>
           <p class="main__content2-text">{{ text }}</p>
       </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title: "Главные новости",
            title2: "Обзор молодежных планшетов: лучшие устройства за свои деньги",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptas soluta totam fugit neque magni. Veniam dolore magnam nesciunt dolores nihil omnis inventore! Quas fugiat natus enim mollitia hic distinctio blanditiis quibusdam fuga reiciendis accusantium soluta odit aspernatur asperiores tempore ab, vero dolore rerum deserunt, ex provident eos iusto quam quisquam dignissimos. Numquam, culpa blanditiis? Dicta assumenda magni voluptates odit. Aut alias eligendi repellendus, ab saepe blanditiis quam id quibusdam numquam beatae laborum, similique labore? Placeat laborum eum libero reiciendis assumenda rerum dolores, nemo voluptatem velit amet ipsa, est debitis, necessitatibus quibusdam esse vel possimus voluptatibus accusamus. Alias, unde id? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptas soluta totam fugit neque magni. Veniam dolore magnam nesciunt dolores nihil omnis inventore! Quas fugiat natus enim mollitia hic distinctio blanditiis quibusdam fuga reiciendis accusantium soluta odit aspernatur asperiores tempore ab, vero dolore rerum deserunt, ex provident eos iusto quam quisquam dignissimos. "
        }
    }
}
</script>

<style>
.main__content2-info__title{
  color: #3A3838;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  padding: 42px 0;
}
.main__content2-item{
    padding: 0 130px;
    background: #EDEDED;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.main__content2-title{
    width: 540px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
}
.main__content2-title2{
    color: #3A3838;
    font-weight: 700;
    font-size: 30px;
}
.main__content2-text{
    color: #686868;
   font-weight: 400;
   font-size: 18px;
}
</style>