<template>
  <main>
    <router-link to="/">Home</router-link>
    <h2>card</h2>
    <div class="productBlock" v-for="item in this.card.card" :key="item.id">
      <div class="">{{ item.title }}</div>
      <img :src="`${item.image}`" class="image" />
      <div class="">{{ item.count }}</div>
      <div class="">{{ (item.price * item.count).toFixed(2) }}</div>
      <button @click="increment(item)">increment</button>
      <button @click="decrement(item)">decrement</button>
      <button @click="deleteItem(item)">delete</button>
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
  methods: {
    addItem(item) {
      this.card.addToCard(item);
    },
    increment(item) {
      this.card.incrementCartItem(item);
    },
    decrement(item) {
      this.card.decrementCartItem(item);
    },
    deleteItem(item) {
      this.card.deleteCartItem(item);
    },
  },
};
</script>
