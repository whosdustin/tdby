<template>
  <Layout>
   
    <PostList v-for="post in $page.allPost.edges" :key="post.node.id" :post="post.node" />

    <h1>Tuck Darby Eats</h1>
    <div v-for="eat in $page.allEat.edges" :key="eat.node.id" >
      <h2>{{ eat.node.title }}</h2>
      <g-link :to="eat.node.path" class="read">Read More...</g-link>
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
        id
        title
        path
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
