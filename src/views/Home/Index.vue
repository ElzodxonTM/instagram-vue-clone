<template>
  <div class="home">
    <div class="timeline">
      <live-history/>
      <timeline/>
    </div>

    <div class="sidebar">
      <profile/>
      <suggestions/>
      <profile-footer/>
    </div>
  </div>
</template>

<script>
import LiveHistory from "@/views/Home/components/LiveHistory"
import Timeline from "@/views/Home/components/Timeline"
import Profile from "@/views/Home/components/Profile"
import Suggestions from "@/views/Home/components/Suggestions"
import ProfileFooter from "@/views/Home/components/Footer"

export default {
  name: 'Home',
  components: {
    LiveHistory,
    Timeline,
    Profile,
    Suggestions,
    ProfileFooter
  }
}
</script>

<style scoped>

.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;

@media (--t) {
  max-width: none

;
  display: grid

;
  grid-template-columns:

1fr

295px

;
  grid-gap:

30px

;
}

}

.sidebar {
  display: none;

@media (--t) {
  display: block

;
}

}
</style>
