const template = `<div class="widget">
<h2 class="widget-header">{{ title }}</h2>
<div class="shop-list">
  <div class="shop-card" v-for="(item, index) in config.items" :key="index">
    <img v-bind:src="getImage(item.logo)" class="shop-image"/>
    <span class="shop-name">{{ item.name }}</span>
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