<template>
  <Layout>
    <g-link to="/" class="link">  &larr; Go Back</g-link>
    <div class="eat-title">
      <h1>{{$page.eat.title}}</h1>
      <p class="eat-date"> {{ $page.eat.date}} | {{$page.eat.timeToRead}} min read</p>
      <p>Rating: {{ $page.eat.rating}} | Heat: {{ $page.eat.heat }} | Mess: {{ $page.eat.mess }}</p>
    </div>
    <div class="eat-content">
      <p v-html="$page.eat.content" />
    </div>
  </Layout>
</template>

<page-query>
query Eat ($path: String!) {
  eat: eat (path: $path) {
    title
    rating
    heat
    mess
    content
    timeToRead
  }
}
</page-query>

<script>
import Layout from '~/layouts/Default.vue';

export default {
  components: {
    Layout
  },
  metaInfo() {
    return {
      title: this.$page.eat.title
    }
  }
}
</script>
