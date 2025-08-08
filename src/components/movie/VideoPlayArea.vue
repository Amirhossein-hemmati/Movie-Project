<script setup lang="ts">
import { onMounted, ref, defineProps } from "vue";
import Hls from "hls.js";
import { apiGetMovieUrl } from "@/api/movie";

const props = defineProps<{
  cover: string;
}>();

const video = ref<HTMLVideoElement | null>(null);
const subtitleTrack = ref<HTMLTrackElement | null>(null);
const videoInfo = ref<{ video_url: string; subtitle: string }>();
const showCover = ref(true); // initially show the cover
const subtitlesEnabled = ref(true); // default is ON

function toggleSubtitles() {
  if (subtitleTrack.value) {
    subtitleTrack.value.track.mode = subtitlesEnabled.value
      ? "disabled"
      : "showing";
    subtitlesEnabled.value = !subtitlesEnabled.value;
  }
}

function playVideo() {
  if (video.value) {
    video.value.play();
    showCover.value = false;
  }
}

onMounted(() => {
  apiGetMovieUrl()
    .then((result) => {
      videoInfo.value = result;

      if (video.value && result.video_url) {
        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(result.video_url);
          hls.attachMedia(video.value);
        } else if (video.value.canPlayType("application/vnd.apple.mpegurl")) {
          video.value.src = result.video_url;
        }
      }
    })
    .catch((e) => {
      console.error("Video loading error:", e);
    });
});
</script>

<template>
  <div class="relative max-w-3xl mx-auto bg-black rounded-lg overflow-hidden">
    <!-- Cover overlay -->
    <div
      v-if="showCover"
      class="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
      @click="playVideo"
    >
      <img :src="cover" alt="Video cover" class="w-full h-full object-cover" />
      <div
        class="absolute inset-0 bg-opacity-40 flex items-center justify-center"
      >
        <!-- Play button (SVG or font icon) -->
        <svg
          class="w-16 h-16 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>

    <!-- Video player -->
    <video
      ref="video"
      class="w-full h-[464px]"
      controls
      crossorigin="anonymous"
      @play="showCover = false"
    >
      <track
        ref="subtitleTrack"
        kind="subtitles"
        srclang="fa"
        label="زیرنویس فارسی"
        :src="videoInfo?.subtitle"
        default
      />
    </video>
    <!-- Subtitle toggle button -->
    <button
      @click="toggleSubtitles"
      :title="subtitlesEnabled ? 'زیرنویس خاموش' : 'زیرنویس روشن'"
      class="absolute top-4 right-4 z-20 text-black rounded flex items-center justify-center cursor-pointer"
    >
      <template v-if="subtitlesEnabled">
        <!-- SVG for "On" -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            fill="#fff"
            d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l1.53 1.532A4.24 4.24 0 0 0 2 8.25v11.5A4.25 4.25 0 0 0 6.25 24h15.5q.549-.001 1.057-.133l1.912 1.913a.75.75 0 0 0 1.061-1.06zM21.44 22.5H6.25a2.75 2.75 0 0 1-2.75-2.75V8.25c0-1 .534-1.876 1.332-2.357l4.072 4.071a3.5 3.5 0 0 0-1.67 1.318c-.47.695-.734 1.6-.734 2.718s.263 2.023.735 2.718a3.53 3.53 0 0 0 1.803 1.366a4.3 4.3 0 0 0 2.013.173c.622-.092 1.226-.318 1.668-.671a.75.75 0 1 0-.937-1.172c-.184.147-.517.295-.95.36a2.8 2.8 0 0 1-1.308-.108a2.03 2.03 0 0 1-1.048-.79C8.206 15.477 8 14.882 8 14s.206-1.477.476-1.876a2.04 2.04 0 0 1 1.048-.79c.2-.068.41-.11.62-.129l5.849 5.849q.165.188.345.345zM7.182 4l1.5 1.5H21.75a2.75 2.75 0 0 1 2.75 2.75v11.5c0 .455-.11.884-.306 1.262l1.094 1.094A4.23 4.23 0 0 0 26 19.75V8.25A4.25 4.25 0 0 0 21.75 4zm14.036 13.586a3 3 0 0 1-.265.185l-1.12-1.12a1.6 1.6 0 0 0 .449-.237a.75.75 0 1 1 .936 1.171m-5.912-5.462l1.235 1.235c.072-.542.236-.942.435-1.235c.27-.397.637-.648 1.049-.79c.419-.143.882-.17 1.306-.108c.434.064.768.213.95.36a.75.75 0 1 0 .938-1.172c-.443-.353-1.046-.58-1.668-.672a4.3 4.3 0 0 0-2.013.174a3.53 3.53 0 0 0-1.803 1.366a4 4 0 0 0-.43.842"
          />
        </svg>
      </template>
      <template v-else>
        <!-- SVG for "Off" -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            fill="#fff"
            d="M14.024 16.983c2.308-1.65 6.09-1.36 7.786 1.354a1.25 1.25 0 0 1-2.12 1.326c-.804-1.287-2.871-1.605-4.214-.646c-.838.599-1.976 1.862-1.976 4.983c0 3.158 1.083 4.391 1.94 4.958c.632.418 1.522.62 2.388.529c.867-.092 1.542-.456 1.905-.963a1.25 1.25 0 0 1 2.034 1.453c-.887 1.242-2.308 1.851-3.676 1.996c-1.37.145-2.856-.153-4.03-.93C12.382 29.933 11 27.842 11 24c0-3.88 1.49-5.921 3.024-7.017m22.786 1.354c-1.696-2.713-5.478-3.003-7.787-1.354C27.49 18.079 26 20.12 26 24c0 3.842 1.383 5.933 3.06 7.043c1.175.777 2.66 1.075 4.03.93c1.369-.145 2.79-.754 3.677-1.996a1.25 1.25 0 0 0-2.034-1.454c-.363.508-1.038.872-1.905.964c-.866.091-1.756-.11-2.388-.53c-.857-.566-1.94-1.799-1.94-4.957c0-3.12 1.138-4.384 1.977-4.983c1.342-.959 3.409-.64 4.213.646a1.25 1.25 0 0 0 2.12-1.326M4 14.5A6.5 6.5 0 0 1 10.5 8h27a6.5 6.5 0 0 1 6.5 6.5v19a6.5 6.5 0 0 1-6.5 6.5h-27A6.5 6.5 0 0 1 4 33.5zm6.5-4a4 4 0 0 0-4 4v19a4 4 0 0 0 4 4h27a4 4 0 0 0 4-4v-19a4 4 0 0 0-4-4z"
          />
        </svg>
      </template>
    </button>
  </div>
</template>
