
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

export const useHeader = async () => {
  
  const { data: headerAlerts } = await useAsyncData("header", async () =>
  fakeFetch()
  )
  
  return {
    headerAlerts,
  }
}
