import './App.css';
import { useEffect, useState } from 'react';
import TopBar from './components/Topbar';
import LetterInputs from './components/LetterInputs';
import KeyboardCard from './components/cards/keyboardCard';
import { selectRandomWord } from './global/utils';

function App() {
  const [secretWord, setSecretWord] = useState<string[]>([]);

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
      console.log(error);
    }
  };

  useEffect(() => {
    if (!secretWord.length) {
      fetchWords();
    }
  }, [secretWord]);

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
        <KeyboardCard onKeyPress={(key: string) => console.log(key)} />
      </div>
    </div>
  );
}

export default App;
