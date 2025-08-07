<script setup lang="ts">
import BackButton from '../components/common/BackButton.vue';
import SidebarListMovie from '../components/movie/SidebarListMovie.vue';
import VideoInformation from '../components/movie/VideoInformation.vue';
import VideoPlayArea from '../components/movie/VideoPlayArea.vue';


</script>

<template>
  <div class="w-full flex justify-end mt-2">
    <BackButton/>
  </div>
  <VideoInformation/>
  <div class="flex justify-center items-center gap-x-6">
    <div class="w-2/3">
      <VideoPlayArea/>
    </div>
    <div class="w-1/3">
      <SidebarListMovie/>
    </div>
  </div>
</template>
