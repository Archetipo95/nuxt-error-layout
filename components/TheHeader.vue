<script setup>
const randomWord = ref('');

function fakeFetch() {
  const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

  return new Promise((resolve) => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex];
      resolve(randomWord);
    }, 1000);
  });
}

async function fetchRandomWord() {
  randomWord.value = await fakeFetch();
}

onMounted(async ()=>{
  randomWord.value = await fakeFetch();
})
</script>

<template>
  <div class="border border-[red]">
      <button @click="fetchRandomWord" class="border border-black rounded-full p-2">Fetch Random Word</button>
    <p>{{ randomWord }}</p>
    </div>
</template>
