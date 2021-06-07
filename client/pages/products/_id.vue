<template>
  <div class="mainContainer">
    <div class="centerArea">
      <CategoriesAccordionMenu class="accordionMenu" />
      <div class="productContent">
          <div class="topArea">
              <div class="imgArea">
                  <img :src="imgSrc[imgIndex]" alt="" class="fullSizeImage" />
                  <div class="smallSizeImagesArea">
                      <img 
                      v-for="(link, index) in imgSrc"
                      :key="index"
                      :src="link"
                      class="smallSizeImages"
                      @click="changeFullImage(index)"
                      alt="">
                  </div>
              </div>
              <div class="infoArea">
                  <h4>Product title Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
                  <span>ID: 123456789</span>
                  <h5>$ 99.99</h5>
                  <b-form-spinbutton id="demo-sb" v-model="value" min="1" max="100"></b-form-spinbutton>
                  <span>Stock : 80</span>
                  <div>
                      <b-button variant="danger">Buy now</b-button>
                      <b-button variant="warning">Add to cart</b-button>
                  </div>
              </div>
          </div>
          <div class="productDescription">
            <b-tabs content-class="mt-3">
                <b-tab title="Description" active><p>I'm the first tab</p></b-tab>
                <b-tab title="Futures"><p>I'm the second tab</p></b-tab>
            </b-tabs>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesAccordionMenu from "../../components/CategoriesAccordionMenu";

export default {
  components: {
    CategoriesAccordionMenu,
  },
  data() {
      return {
          imgSrc: [
              "https://cdn.pixabay.com/photo/2016/12/06/18/26/star-anise-1887231_960_720.jpg",
              "https://cdn.pixabay.com/photo/2017/08/01/11/19/sewing-2564557_960_720.jpg",
              "https://cdn.pixabay.com/photo/2018/05/01/13/04/sport-3365503_960_720.jpg",
              "https://cdn.pixabay.com/photo/2019/08/26/17/45/tomato-4432398_960_720.jpg",
              "https://cdn.pixabay.com/photo/2013/11/15/20/22/moving-eyes-211047_960_720.jpg",
              "https://cdn.pixabay.com/photo/2020/04/13/21/38/white-5040127_960_720.jpg"
          ],
          imgIndex: 0
      }
  },
  methods: {
      changeFullImage(index) {
          this.imgIndex = index
      }
  }
}
</script>

<style scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.centerArea {
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 100%;
}
.accordionMenu {
  width: 20%;
  margin-left: 20px;
  padding: 10px;
  background-color: #f5f5f5;
}
.productContent {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.topArea {
    display: flex;
    flex-direction: row;
}
.imgArea {
    display: flex;
    flex-direction: column;
    width: 60%;
}
.fullSizeImage {
    width: 500px;
    height: 400px;
    padding: 20px;
}
.smallSizeImagesArea {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
}
.smallSizeImages {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
}
.infoArea {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 20px 0 0;
}
.productDescription {
    margin: 20px
}
</style>
