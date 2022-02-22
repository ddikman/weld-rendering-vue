const template = `<div class="widget">
<h2 class="widget-header">{{ title }}</h2>
<div class="articles">
  <div class="article-card" v-for="(article, index) in config.items" :key="index">
    <img v-bind:src="article.image_url" class="article-image"/>
    <div class="article-texts">
      <h3 class="article-title">{{ article.title }}</h3>
      <span class="article-excerpt">{{ article.excerpt }}</span>
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
  }
}