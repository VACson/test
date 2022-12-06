<template>
  <main>
    <router-link to="/card">Card</router-link>
    <h2>All items</h2>
    <div class="productBlock" v-for="item in products" :key="item.id">
      <div class="">{{ item.title }}</div>
      <img :src="`${item.image}`" class="image" />
      <button @click="addItem({ ...item, count: 1 })">Add To Card</button>
    </div>
  </main>
</template>
<script>
import { useCard } from '../store/store';

export default {
  setup() {
    const card = useCard();
    return {
      card,
    };
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then((res) => res.json())
      .then((data) => (this.products = data));
  },
  methods: {
    addItem(item) {
      this.card.addToCard(item);
      console.log(this.card.card);
    },
  },
};
</script>

<style>
.productBlock {
  width: 100%;
  padding: 5% 10%;
  margin-bottom: 20px;
  border: 1px solid gray;
}

.image {
  width: 20%;
  aspect-ratio: 1/1;
  object-fit: contain;
}
</style>
