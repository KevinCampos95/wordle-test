import './App.css';
import { useEffect, useState } from 'react';
import TopBar from './components/Topbar';
import LetterInputs from './components/LetterInputs';
import KeyboardCard from './components/cards/keyboardCard';
import { selectRandomWord } from './global/utils';
import { TypedLetterProps } from './global/types';

function App() {
  const [secretWord, setSecretWord] = useState<string[]>([]);
  const [typedLetters, setTypedLetters] = useState<TypedLetterProps[]>([]);
  const [hasTypedLetter, setHasTypedLetter] = useState<boolean>(false);

  const fetchWords = async () => {
    try {
      const responseTxt = await fetch('words.txt');
      const dataTxt = (await responseTxt.text()).replaceAll('\r', '');

      const lengthFilteredLetters: string[] = dataTxt
        .split('\n')
        .filter((word: string) => word.length === 5)
        .map((word: string) =>
          word.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
        );

      const randomWord = selectRandomWord(lengthFilteredLetters);

      setSecretWord(randomWord);
    } catch (error) {
      // TODO: ERROR HANDLER
      console.log(error);
    }
  };

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key.match(/[a-zñA-ZÑ]/i) && !hasTypedLetter) {
      const pressedKey: string = event.key.toUpperCase();

      handleTypedLetter(pressedKey);
    }
  };

  const handleKeyDownKeyboard = (pressedKey: string) => {
    handleTypedLetter(pressedKey);
  };

  const handleTypedLetter = (letter: string) => {
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

  return (
    <div className='App mt-8 flex h-screen w-full justify-center font-roboto text-black'>
      <div>
        <TopBar />
        <LetterInputs
          items={[
            {
              letter: 'C',
              backgroundColor: 'bg-letterCard-bg-success',
              letterColor: 'text-white',
            },
            {
              letter: 'C',
              backgroundColor: 'bg-letterCard-bg-success',
              letterColor: 'text-white',
            },
            {
              letter: 'C',
              backgroundColor: 'bg-letterCard-bg-success',
              letterColor: 'text-white',
            },
          ]}
        />
        <KeyboardCard onKeyPress={handleKeyDownKeyboard} />
      </div>
    </div>
  );
}

export default App;
