<script setup lang="ts">
import { onMounted, ref } from "vue";
import Hls from "hls.js";

const video = ref<HTMLVideoElement | null>(null);
const track = ref<HTMLTrackElement | null>(null);
const subtitleVisible = ref(true);

const videoUrl = "https://path-to-your/video.m3u8";
const subtitleUrl = "/subtitle.vtt";

const currentTimeFormatted = ref("00:00");
const durationFormatted = ref("00:00");

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

const updateTime = () => {
  if (!video.value) return;
  currentTimeFormatted.value = formatTime(video.value.currentTime);
  durationFormatted.value = formatTime(video.value.duration || 0);
};

const toggleSubtitles = () => {
  subtitleVisible.value = !subtitleVisible.value;
  if (track.value) {
    track.value.mode = subtitleVisible.value ? "showing" : "disabled";
  }
};

onMounted(() => {
  if (video.value) {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoUrl);
      hls.attachMedia(video.value);
    } else if (video.value.canPlayType("application/vnd.apple.mpegurl")) {
      video.value.src = videoUrl;
    }

    video.value.addEventListener("timeupdate", updateTime);
    video.value.addEventListener("loadedmetadata", updateTime);
  }
});
</script>

<template>
  <div class="max-w-3xl mx-auto bg-black rounded-lg overflow-hidden">
    <div class="relative">
      <video
        ref="video"
        class="w-full h-[464px]"
        controls
        crossorigin="anonymous"
      >
        <track
          ref="track"
          kind="subtitles"
          srclang="fa"
          label="زیرنویس فارسی"
          :src="subtitleUrl"
          default
        />
      </video>

      <button
        class="absolute top-2 right-2 bg-white text-black px-2 py-1 text-xs rounded hover:bg-gray-200 transition"
        @click="toggleSubtitles"
      >
        {{ subtitleVisible ? "زیرنویس: روشن" : "زیرنویس: خاموش" }}
      </button>
    </div>

    <!-- Custom Time Display -->
    <div
      class="text-white text-sm px-4 py-2 flex justify-between items-center bg-[#1a1a1a]"
    >
      <div>{{ currentTimeFormatted }}</div>
      <div>{{ durationFormatted }}</div>
    </div>
  </div>
</template>

<style scoped>
video::-webkit-media-controls {
  display: none !important; /* if you want to hide native controls */
}
</style>
