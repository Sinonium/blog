<template>
  <div class="home">
    <PostsList v-if="posts.length" :posts="posts"/>
    <Spinner v-else/>
    <div v-if="error">{{error}}</div>
  </div>
</template>

<script>
import PostsList from '@/components/PostsList.vue'
import getPosts from '@/composables/getPosts'
import Spinner from '@/components/Spinner'
export default {
  components:{PostsList, Spinner},
  setup() {
    const {posts, error, fetchPosts} = getPosts()
    fetchPosts()
    return {posts, error}
  }
}
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>