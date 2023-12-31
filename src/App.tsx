import './App.css';
import { useEffect, useState } from 'react';
import TopBar from './components/Topbar';
import LetterInputs from './components/LetterInputs';
import KeyboardCard from './components/cards/keyboardCard';
import { selectRandomWord } from './global/utils';
import { TypedLetterProps } from './global/types';
import {
  validateLetters,
  arraysAreEqual,
  validateWinGame,
  addPlayedGame,
  addWinnedGame,
} from './global/utils';

function App() {
  const [secretWord, setSecretWord] = useState<string[]>([]);
  const [typedLetters, setTypedLetters] = useState<TypedLetterProps[]>([]);
  const [hasTypedLetter, setHasTypedLetter] = useState<boolean>(false);
  const [attemps, setAttemps] = useState<number>(0);
  const [resetEmptyCards, setResetEmptyCards] = useState<boolean>(false);
  const [openStatistics, setOpenStatistics] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(300);

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
      backgroundColor: 'bg-letterCard-bg-wrong',
      letterColor: 'text-white',
    };

    setTypedLetters(prevTypedLetters => [...prevTypedLetters, typedLetter]);
    setHasTypedLetter(true);
  };

  const generateNewGame = () => {
    fetchWords();
    setAttemps(0);
    setTypedLetters([]);
    setHasTypedLetter(false);
    setResetEmptyCards(true);
    setOpenStatistics(false);
    setSeconds(300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
      const validatedTypedLetters = validateLetters(secretWord, typedLetters);

      const isTypedLettersValidated: boolean = arraysAreEqual(
        typedLetters,
        validatedTypedLetters,
      );

      if (isTypedLettersValidated) return;

      const attempsCounter: number = attemps + 1;
      setAttemps(attempsCounter);

      const isWinner = validateWinGame(validatedTypedLetters, secretWord);

      if (isWinner) {
        addWinnedGame();
        addPlayedGame();
        setOpenStatistics(true);
      }

      setTypedLetters(validatedTypedLetters);
    }
  }, [secretWord, typedLetters]);

  useEffect(() => {
    if (attemps === 5) {
      addPlayedGame();
      setOpenStatistics(true);
    }
  }, [attemps]);

  useEffect(() => {
    localStorage.setItem('seconds', String(seconds));

    if (seconds === 0) {
      addPlayedGame();
      setOpenStatistics(true);
    }
  }, [seconds]);

  return (
    <div className='App mt-8 flex h-screen w-full justify-center font-roboto text-black'>
      <div>
        <TopBar
          secretWord={secretWord}
          openStatistics={openStatistics}
          onCloseStatisticsModal={generateNewGame}
          seconds={seconds}
        />
        <LetterInputs
          items={typedLetters}
          resetCards={resetEmptyCards}
          cleanedCards={() => setResetEmptyCards(false)}
        />
        <KeyboardCard
          onKeyPress={handleKeyDownKeyboard}
          typedLetters={typedLetters || []}
        />
      </div>
    </div>
  );
}

export default App;
