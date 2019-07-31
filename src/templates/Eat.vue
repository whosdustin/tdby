<template>
  <Layout>
    <g-link to="/" class="link">  &larr; Go Back</g-link>
    <div class="post-title">
      <h1>{{$page.post.title}}</h1>
      <p class="post-date"> {{ $page.post.date}} | {{$page.post.timeToRead}} min read</p>
      <p>Rating: {{ $page.post.rating}} | Heat: {{ $page.post.heat }} | Mess: {{ $page.post.mess }}</p>
    </div>
    <div class="post-content">
      <p v-html="$page.post.content" />
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
      title: this.$page.post.title
    }
  }
}
</script>
