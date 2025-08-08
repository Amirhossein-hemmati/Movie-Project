div
<script lang="ts" setup>
import { computed, ref } from "vue";
import { useOpenSurveyStore } from "@/store/useOpenSurveyStore";
import RatingStarsAction from "./RatingStarsAction.vue";

const content = useOpenSurveyStore();
const checked = ref(false);
const showInput = ref(false);
const inputText = ref("");
const maxLength = 300;
const charCount = computed(() => inputText.value.length);


function handleUserRated (data) {
console.log(data)
}
</script>

<template>
  <div class="relative">
    <span class="absolute top-1 left-1 cursor-pointer" @click="content.closeContent()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="#d81818"
          d="M10.03 8.97a.75.75 0 0 0-1.06 1.06L10.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L12 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L13.06 12l1.97-1.97a.75.75 0 1 0-1.06-1.06L12 10.94z"
        />
        <path
          fill="#d81818"
          fill-rule="evenodd"
          d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0"
          clip-rule="evenodd"
        />
      </svg>
    </span>

    <div
      class="bg-[#242629] rounded p-6 text-white flex flex-col justify-center items-center gap-y-2"
    >
      <!-- suggestion -->
      <h2 class="text-lg font-bold text-center">
        آیا تماشای سریال {{}} را به دیگران پیشنهاد می کنید؟
      </h2>
      <p class="text-[14px] text-center">نظر خود را در این رابطه بنویسید</p>

      <!-- checkbox -->
      <div class="w-full">
        <label
          class="w-full inline-flex justify-start items-center cursor-pointer gap-x-1"
        >
          <input type="checkbox" v-model="checked" class="peer hidden" />
          <div
            class="w-4 h-4 rounded-[4px] border border-white flex items-center justify-center transition-colors peer-checked:bg-white peer-checked:text-black"
          >
            <svg
              class="w-3 h-3 hidden peer-checked:block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.586l7.879-7.879a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span class="text-white font-light text-[14px]"
            >این نظر حاوی اسپویل هست</span
          >
        </label>
      </div>
      <!-- allowing film criticism -->
      <div
        class="w-full flex flex-col justify-center items-start text-[14px] font-light"
      >
        <div class="flex justify-start items-center gap-1">
          <div
            class="px-4 p-3 cursor-pointer rounded-[4px]"
            :class="{
              'bg-[#341A1B] text-white border border-[#AB070F]': !showInput,
              'bg-[#242629] text-white': showInput,
            }"
            @click="showInput = false"
          >
            نظر شامل نقد نیست
          </div>

          <div
            class="px-4 py-3 cursor-pointer rounded-[4px]"
            :class="{
              'bg-[#341A1B] text-white border border-[#AB070F]': showInput,
              'bg-[#1B1C1F] text-white ': !showInput,
            }"
            @click="showInput = true"
          >
            نظر من شامل نقد است
          </div>
        </div>

        <div v-if="showInput" class="w-full mt-2 relative">
          <input
            v-model="inputText"
            :maxlength="maxLength"
            type="text"
            placeholder="متن نظر"
            class="rounded-[8px] px-3 py-2 w-full h-[84px] bg-primary text-white"
          />
          <div class="absolute bottom-3 left-3 mt-1 text-sm text-gray-300">
            {{ charCount }}/{{ maxLength }}
          </div>
        </div>
      </div>
      <div class="w-full flex justify-between items-center">
        <RatingStarsAction
          :maxStars="5"
          :width="8"
          :height="8"
          :showResultNumber="true"
          @rating="handleUserRated"
        />
        <button
          class="flex justify-center items-center gap-x-[9px] bg-[#AB070F] text-[14px] px-6 py-[10px] rounded-tl-[4px] rounded-tr-[4px] rounded-br-[4px] rounded-bl-[12px] cursor-pointer"
        >
          <span>
            <img src="../../assets/icons/tick-circle.svg" />
          </span>
          <span> ارسال نظر </span>
        </button>
      </div>
    </div>
  </div>
</template>
