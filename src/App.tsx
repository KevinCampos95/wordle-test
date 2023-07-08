import './App.css';
import TopBar from './components/Topbar';
import LetterInputs from './components/LetterInputs';
import KeyboardCard from './components/cards/keyboardCard';

function App() {
  return (
    <div className='App mt-8 flex h-screen w-full justify-center font-roboto text-black'>
      <div>
        <TopBar />
        <LetterInputs
          items={[
            { letter: 'C', backgroundColor: 'bg-green' },
            { letter: 'C', backgroundColor: 'bg-green' },
            { letter: 'C', backgroundColor: 'bg-green' },
          ]}
        />
        <KeyboardCard onKeyPress={(key: string) => console.log(key)} />
      </div>
    </div>
  );
}

export default App;
