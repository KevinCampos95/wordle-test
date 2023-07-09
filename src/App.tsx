import './App.css';
import { useEffect, useState } from 'react';
import TopBar from './components/Topbar';
import LetterInputs from './components/LetterInputs';
import KeyboardCard from './components/cards/keyboardCard';
import { selectRandomWord } from './global/utils';
import { TypedLetterProps } from './global/types';
import { validateLetters } from './global/utils';

function App() {
  const [secretWord, setSecretWord] = useState<string[]>([]);
  const [typedLetters, setTypedLetters] = useState<TypedLetterProps[]>([]);
  const [hasTypedLetter, setHasTypedLetter] = useState<boolean>(false);
  const [attemps, setAttemps] = useState<number>(1);

  const fetchWords = async () => {
    try {
      const responseTxt = await fetch('words.txt');
      const dataTxt = (await responseTxt.text()).replaceAll('\r', '');

      const lengthFilteredLetters: string[] = dataTxt
        .split('\n')
        .filter((word: string) => word.length === 5)
        .map((word: string) =>
          word
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toUpperCase(),
        );

      const randomWord = selectRandomWord(lengthFilteredLetters);

      setSecretWord(randomWord);
    } catch (error) {
      // TODO: ERROR HANDLER
      console.log(error);
    }
  };

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (!hasTypedLetter) {
      const pressedKey: string = event.key.toUpperCase();

      handleTypedLetter(pressedKey);
    }
  };

  const handleKeyDownKeyboard = (pressedKey: string) => {
    handleTypedLetter(pressedKey);
  };

  const handleTypedLetter = (letter: string) => {
    if (letter.length !== 1 || !letter.match(/[a-zñA-ZÑ]/i)) return;
    if (typedLetters.length >= 25) return;

    const typedLetter: TypedLetterProps = {
      letter: letter,
      backgroundColor: 'bg-letterCard-bg-success',
      letterColor: 'text-white',
    };

    setTypedLetters(prevTypedLetters => [...prevTypedLetters, typedLetter]);
    setHasTypedLetter(true);
  };

  useEffect(() => {
    if (!secretWord.length) {
      fetchWords();
    }
  }, [secretWord]);

  useEffect(() => {
    if (!hasTypedLetter) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      setHasTypedLetter(false);
    };
  }, [hasTypedLetter]);

  useEffect(() => {
    if (typedLetters.length !== 0 && typedLetters.length % 5 === 0) {
      const letterStatuses = validateLetters(secretWord, typedLetters, attemps);
      setAttemps(prevAttemps => prevAttemps + 1);
      console.log(letterStatuses);
    }
  }, [secretWord, typedLetters]);

  console.log(secretWord);

  return (
    <div className='App mt-8 flex h-screen w-full justify-center font-roboto text-black'>
      <div>
        <TopBar />
        <LetterInputs items={typedLetters} />
        <KeyboardCard onKeyPress={handleKeyDownKeyboard} />
      </div>
    </div>
  );
}

export default App;
