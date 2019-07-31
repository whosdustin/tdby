<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1>Hello, world!</h1>
   
    <PostList v-for="post in $page.allPost.edges" :key="post.node.id" :post="post.node" />

    <h2>Tuck Darby Eats</h2>
    <div v-for="eat in $page.allEat.edges" :key="eat.node.id" >
      <h4>{{ eat.node.title }}</h4>
    </div>

  </Layout>
</template>

<page-query>
query {
  metaData {
    siteName
    siteDescription
  }
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
  allEat {
    edges {
      node {
        title
      }
    }
  }
}
</page-query>

<script>
import PostList from "@/components/PostList";

export default {
  components: {
    PostList
  },
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
