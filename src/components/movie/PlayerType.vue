<script setup lang="ts">
import { ref } from 'vue';

const selectedPlayer = ref('سامسونگ'); // default selected
const players = [
  { label: 'پلیر تلوزیون های سامسونگ', value: 'سامسونگ' },
  { label: 'پلیر تلوزیون های قدیمی', value: 'قدیمی1' },
  { label: 'پلیر تلوزیون های قدیمی', value: 'قدیمی2' },
];

const selectPlayer = (value: string) => {
  selectedPlayer.value = value;
};
</script>

<template>
  <div class="flex justify-between items-center text-[12px]">
    <!-- Player options -->
    <div class="text-white font-bold  flex justify-start items-center">
      <div
        v-for="(player, index) in players"
        :key="index"
        class="p-3 cursor-pointer"
        :class="{
          'bg-[#AB070F99]': selectedPlayer === player.value,
          'bg-[#242629]': selectedPlayer !== player.value
        }"
        @click="selectPlayer(player.value)"
      >
        {{ player.label }}
      </div>
    </div>

    <!-- Report issue -->
    <div class="flex justify-center items-center gap-x-1 text-white">
      <span>حین تماشا با مشکلی رو به رو شدید؟</span>
      <span class="p-2 bg-[#242629] cursor-pointer underline">اعلام مشکل</span>
    </div>
  </div>
</template>
