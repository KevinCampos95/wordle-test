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
): TypedLetterProps[] => {
  let resetIndex = 0;

  return typedLetters.map((typedLetter, index) => {
    const { letter, ...rest } = typedLetter;

    if (index % 5 === 0) {
      resetIndex = index;
    }

    const secretWordIndex = resetIndex !== null ? index - resetIndex : index;

    if (letter && secretWord.includes(letter)) {
      if (letter === secretWord[secretWordIndex]) {
        return {
          ...rest,
          letter,
          backgroundColor: LetterCardBackgrounds.Success,
        };
      } else {
        return {
          ...rest,
          letter,
          backgroundColor: LetterCardBackgrounds.Warning,
        };
      }
    } else {
      return { ...rest, letter, backgroundColor: LetterCardBackgrounds.Wrong };
    }
  });
};

export const arraysAreEqual = (array1: any[], array2: any[]): boolean => {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    const obj1 = array1[i];
    const obj2 = array2[i];

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let j = 0; j < keys1.length; j++) {
      const key = keys1[j];
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }

  return true;
};

export const validateWinGame = (
  letters: TypedLetterProps[],
  secretWord: Array<string>,
): boolean => {
  const successLetters: Array<string> = letters
    .filter(letter => letter.backgroundColor === 'bg-letterCard-bg-success')
    .map(letter => letter.letter);

  const isWinner: boolean = arraysAreEqual(successLetters, secretWord);

  return isWinner;
};

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
};
