<template>
  <div class="app">
    <CustomHeader/>

    <main class="main">
      <Container>
        <router-view/>
      </Container>
    </main>
  </div>
</template>

<script>
import CustomHeader from "@/components/CustomHeader"
import Container from "@/components/Container"

export default {
  components: {CustomHeader, Container},
}
</script>
<style scoped>
.main {
  background-color: rgba(var(--b3f,250,250,250),1);
  padding-top: 40px;
}
</style>