<template>
  <div
    @focusout="hideSearchBar"
    class="rounded-lg w-full h-auto z-10 p-0 relative"
    :class="searchClass"
  >
    <CInput
      type="text"
      placeholder="Enter a key word"
      v-model="search"
      @on-focus="show = true"
      class="z-10 h-full backdrop-blur-lg bg-transparent p-0 m-0 border-none text-white"
    />
    <ul
      v-if="search.length"
      class="rounded-lg w-full border-1 border-white/20 bg-white/10 backdrop-blur-lg pl-4 mt-4 absolute max-h-[300px] overflow-y-auto"
    >
      <li
        v-show="onSearch(userArr, search).length"
        v-for="(user, idx) in onSearch(userArr, search)"
        :key="idx"
        class="p-4 pl-0 text-white border-b md:border-b-white/[0.08] border-b-dark/50 last:border-none cursor-pointer hover:opacity-75"
      >
        <Highlighter
          class="my-highligh"
          :style="{ color: 'inherit' }"
          highlightClassName="highlight"
          :searchWords="keyword"
          :autoEscape="false"
          :textToHighlight="user.name"
        />
        <!-- <span>{{ user.name }}</span> -->
      </li>
      <li
        v-show="!onSearch(userArr, search).length"
        class="flex flex-col justify-center items-center text-white pl-0 p-4"
      >
        <h2 class="text-xl mb-2">No Results Found</h2>
        <p class="md:w-2/3 w-full text-center text-white/60">
          Oops! We couldn't find any matching results for your search
        </p>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import CInput from '@/components/Form/CInput.vue'
import { ref, reactive, onMounted, computed } from 'vue'
import Highlighter from 'vue-highlight-words'

defineProps({ searchClass: String })

const search = ref('')
const show = ref(false)
let userArr = reactive([])

const hideSearchBar = () => {
  show.value = false
}
const getUser = async () => {
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((json) => (userArr = json))
}
const onSearch = (arr, search) => {
  if (search.length == 0) {
    return arr
  } else {
    return arr.filter((item) => item.name.toLowerCase().includes(search.trim().toLowerCase()))
  }
}

const keyword = computed(() => {
  return search.value.split(' ')
})
onMounted(() => {
  getUser()
})
</script>
