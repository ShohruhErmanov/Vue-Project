<template>
  <header>
    <div class="container">
      <div class="header__content">
        <div class="header__content-img">
          <img src="./img/HNW.png" alt="" class="header__content-image" />
        </div>
        <div class="header__content-links">
          <a
            href=""
            class="header__content-link"
            v-for="(link, i) in links"
            :key="i"
            >{{ link }}</a
          >
        </div>
      </div>
      <div class="header__info">
        <img src="./img/infoImg.png" alt="" class="header__info-img" />
      </div>
    </div>
  </header>
  <main>
    <div class="container">
      <div class="main__content">
        <PorjectCard
          v-for="(card, i) in cards"
          :key="i"
          :title="card.title"
          :text="card.text"
          :img="card.imgUrl"
        />
      </div>
      <div class="main__content2">
        <ProductInfo />
      </div>
    </div>
  </main>

  <footer>
     <Footer />
  </footer>
</template>

<script>
import PorjectCard from "@/components/ProjectCard.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HNW",
  components: {
    PorjectCard,
    ProductInfo,
    Footer
  },
  data() {
    return {
      links: ["ОБЩЕСТВО", "ТЕХНОЛОГИИ", "ЭКОНОМИКА", "ПОЛИТИКА", "СПОРТ"],
      cards: [
        {
          imgUrl: "https://picsum.photos/350/175",
          title:
            "A Midwestern capital is marching for racial justice — and getting",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis sit nunc auctor quis amet, est mattis vitae. Urna, bibendum lacinia pellentesque tellus sit sit phasellus. Neque, volutpat, aliquet vitae sed nibh massa sed purus venenatis.",
        },
        {
          imgUrl: "https://picsum.photos/350/175",
          title: "Zambian president pardons gay couple sentenced to 15 years",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis sit nunc auctor quis amet, est mattis vitae. Urna, bibendum lacinia pellentesque tellus sit sit phasellus. Neque, volutpat, aliquet vitae sed nibh massa sed purus venenatis.",
        },
        {
          imgUrl: "https://picsum.photos/350/175",
          title:
            "Colin Powell calls Trump a liar, says he skirts the Constitution...",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis sit nunc auctor quis amet, est mattis vitae. Urna, bibendum lacinia pellentesque tellus sit sit phasellus. Neque, volutpat, aliquet vitae sed nibh massa sed purus venenatis.",
        },
        {
          imgUrl: "https://picsum.photos/350/175",
          title:
            "Is working from home wearing you out? Do this to avoid burnout",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis sit nunc auctor quis amet, est mattis vitae. Urna, bibendum lacinia pellentesque tellus sit sit phasellus. Neque, volutpat, aliquet vitae sed nibh massa sed purus venenatis.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;

  &-links {
    display: flex;
    column-gap: 15px;
  }
  &-link {
    color: #3a3838;
    font-weight: 700;
    font-size: 18px;
    transition: 0.5s;
  }
  &-link:hover {
    color: #ef4423;
  }
}
.header__info {
  margin-top: 43px;
  text-align: center;
}
.main__content {
  display: flex;
  // flex-direction: column;
  //  background: #B71C1C;
  &-card {
    display: flex;
    flex-direction: column;
    // width: 350px;
    // row-gap: 15px;
  }
  &-title {
    display: flex;
    color: red;
  }
}
.main__content2-info {
  text-align: center;
  margin-top: 42px;
}
.footer__content {
  background: #3a3838;
  padding: 28px 0;
  margin-top: 50px;
 
}
</style>

