import { LetterCardBackgrounds } from "./enums";
import { typedLetterProps } from "./types";

export const exampleLettersFirstRow: typedLetterProps[] = [
    { letter: 'G', backgroundColor: LetterCardBackgrounds.Success },
    { letter: 'A', border: 'border border-black' },
    { letter: 'T', border: 'border border-black' },
    { letter: 'O', border: 'border border-black' },
    { letter: 'S', border: 'border border-black' },
  ];

  export const exampleLettersSecondRow: typedLetterProps[] = [
    { letter: 'V', border: 'border border-black' },
    { letter: 'O', border: 'border border-black' },
    { letter: 'C', backgroundColor: LetterCardBackgrounds.Warning },
    { letter: 'A', border: 'border border-black' },
    { letter: 'L', border: 'border border-black' },
  ];

  export const exampleLettersThirdRow: typedLetterProps[] = [
    { letter: 'C', border: 'border border-black' },
    { letter: 'A', border: 'border border-black' },
    { letter: 'N', border: 'border border-black' },
    { letter: 'T', border: 'border border-black' },
    { letter: 'O', backgroundColor: LetterCardBackgrounds.Error },
  ];

  export const qwertyKeyboard = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Ñ','ENTER','Z','X','C','V','B','N','M'];