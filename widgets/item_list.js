const template = `<div class="widget">
<h2 class="widget-header">{{ title }}</h2>
<div class="items">
  <div class="item-card" v-for="(item, index) in config.items" :key="index">
    <img v-bind:src="getImage(item.image)" class="item-image"/>
    <div class="item-texts">
      <h3 class="item-brand">{{ item.brand }}</h3>
      <span class="item-price">{{ item.price_with_tax }}</span>
    </div>
  </div>
</div>
</div>`

export default {
  template,
  props: ['config', 'title'],
  data: function() {
    return {
    }
  },
  methods: {
    getImage: function(imageId) {
      return `https://api.facy.jp/images/${imageId}/original.jpeg`
    }
  }
}