import { LetterCardBackgrounds } from "./enums";

export const exampleLettersFirstRow = [
    { letter: 'G', backgroundColor: LetterCardBackgrounds.Success },
    { letter: 'A', border: 'border border-black' },
    { letter: 'T', border: 'border border-black' },
    { letter: 'O', border: 'border border-black' },
    { letter: 'S', border: 'border border-black' },
  ];

  export const exampleLettersSecondRow = [
    { letter: 'V', border: 'border border-black' },
    { letter: 'O', border: 'border border-black' },
    { letter: 'C', backgroundColor: LetterCardBackgrounds.Warning },
    { letter: 'A', border: 'border border-black' },
    { letter: 'L', border: 'border border-black' },
  ];

  export const exampleLettersThirdRow = [
    { letter: 'C', border: 'border border-black' },
    { letter: 'A', border: 'border border-black' },
    { letter: 'N', border: 'border border-black' },
    { letter: 'T', border: 'border border-black' },
    { letter: 'O', backgroundColor: LetterCardBackgrounds.Error },
  ];