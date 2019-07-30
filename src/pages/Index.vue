<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1>Hello, world!</h1>
   
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      {{ edge.node.title }}
      {{ body }}
    </div>

  </Layout>
</template>

<page-query>
query Posts {
  posts: allBlogPost {
    edges {
      node {
        title
        body
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
