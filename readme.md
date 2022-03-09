# weld-rendering-vue

This is an example of how to render a Widget Definition List (WeLD) in VueJS.

As it uses ES6 module imports to grab the definition JS you must run a small http server to host the index file such as the [http-server](https://www.npmjs.com/package/http-server) from NPM.

```bash
npm install -g http-server
http-server
```

## Example

This is how the rendered version looks in chrome simulator:

![screenshot](example.gif)

Check the actual running rendering here:
https://ddikman.github.io/weld-rendering-vue/

## General setup

The `index.html` spins app a tiny Vue app. The logic happens in two places.

First, where the components are included and then named to match with definitions:

```javascript
import Banner from './widgets/banner.js'
import ArticleList from './widgets/article_list.js'
import ItemList from './widgets/item_list.js'
import LocalRecent from './widgets/local_recent.js'
import ShopList from './widgets/shop_list.js'

var app = new Vue({
  components: {
    'banner': Banner,
    'article_list': ArticleList,
    'item_list': ItemList,
    'local_recent_items': LocalRecent,
    'shop_list': ShopList
  },
  ...
})
```

This then enables us to look them up and bind them automatically using the [<component>](https://v2.vuejs.org/v2/guide/components-dynamic-async.html) tag together with a loop using [v-for](https://v2.vuejs.org/v2/guide/list.html). I bind the title and configuration data for each widget as this is the minimum common contract.

```html
<component v-for="(widget, index) in definitions.widgets" :key="index" v-if="canHandle(widget.type)" v-bind:is="widget.type" v-bind:title="widget.title" v-bind:config="widget.data"></component>
```

I also use a helper here to first check if I actually have a any component mapping to the definition type, if not I can skip it.

This is the `v-if="canHandle(widget.type)` condition which references the following method:

```javascript
canHandle: function (widgetType) {
  const registered = this.$options.components[widgetType] !== undefined
  if (!registered) {
    console.log(`cannot handle ${widgetType}, skipping..`)
  }
  return registered
}
```

Each component then uses the title and config to render the data needed. In VueJS what properties to expose are defined using the [props](https://v2.vuejs.org/v2/guide/components-props.html?redirect=true).

```html
<div class="widget">
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
</div>
```
