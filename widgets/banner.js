const template = `<div class="widget">
  <img style="width: 100%;" class="rounding" v-bind:src="imageUrl"/>
</div>`

export default {
  template,
  props: ['config'],
  data: function() {
    return {
    }
  },
  computed: {
    imageUrl: function() {
      return `https://api.facy.jp/images/${this.config.image_id}/original.jpeg`
    }
  }
}