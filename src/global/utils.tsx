import { TypedLetterProps } from './types';
import { LetterCardBackgrounds } from './enums';

export const selectRandomWord = (words: string[]) => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const selectedWord = words[randomIndex];

  return selectedWord.split('');
};

export const validateLetters = (
  secretWord: string[],
  typedLetters: TypedLetterProps[],
  attempts: number,
): LetterCardBackgrounds[] => {
  return typedLetters.map((typedLetter, index) => {
    const { letter } = typedLetter;
    const secretWordIndex = Math.floor(index / attempts);

    if (letter && secretWord.includes(letter)) {
      if (letter === secretWord[secretWordIndex]) {
        return LetterCardBackgrounds.Success;
      } else {
        return LetterCardBackgrounds.Warning;
      }
    } else {
      return LetterCardBackgrounds.Wrong;
    }
  });
};
