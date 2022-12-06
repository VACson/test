import { defineStore } from 'pinia'

export const useCard = defineStore('card',{
     state: () => ({
        card:[]
     }),
    actions: {
        addToCard(item) {
        const itemID = this.card.map((product) => product.id).indexOf(item.id);
        if (itemID >= 0) {
        this.card[itemID].count++;
        if (this.card[itemID].count < 1) {
          this.card.splice(itemID, 1);
        }
      } 
      else {
        this.card.push(item);
      }
    },
    incrementCartItem (item)  {
      const itemID = this.card.map((items) => items.id).indexOf(item.id);
      this.card[itemID].count += 1;
      if (this.card[itemID].count < 1) {
        this.card.splice(itemID, 1);
      }
    },
    decrementCartItem (item)  {
      const itemID = this.card.map((items) => items.id).indexOf(item.id);
      this.card[itemID].count -= 1;
      if (this.card[itemID].count < 1) {
        this.card.splice(itemID, 1);
      }
    },
    deleteCartItem (item)  {
      const itemID = this.card.map((items) => items.id).indexOf(item.id);
      this.card.splice(itemID, 1);
      
    },
}
})