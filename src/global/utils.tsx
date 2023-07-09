export const selectRandomWord = (words: string[]) => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const selectedWord = words[randomIndex];

  return selectedWord.split('');
};
