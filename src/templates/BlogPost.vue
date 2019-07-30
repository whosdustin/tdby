<template>
  <Layout :title="$page.post.title">
    <div v-html="$page.post.body"></div>
  </Layout>
</template>

<page-query>
  query BlogPost ($path: String!) {
    post: blogPost (path: $path) {
      title
      body
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
