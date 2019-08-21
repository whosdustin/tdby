<template>
  <div class="container mx-auto">
    <header class="flex justify-between">
      <div class="flex-1">
        <g-link to="/" class="text-4xl font-bold uppercase tracking-wide">{{ sitename }}</g-link>
      </div>
      <nav class="flex-1 text-right">
          <g-link to="/" class="inline-flex px-4 py-3">Home</g-link>
          <g-link to="/about" class="inline-flex px-4 py-3">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  computed: {
    sitename() {
      return this.$static.metaData.siteName
    }
  }
}
</script>
