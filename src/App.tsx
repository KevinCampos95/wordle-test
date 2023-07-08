import './App.css';
import TopBar from './components/topbar';
import KeyboardCard from './components/cards/keyboardCard';

function App() {
  return (
    <div className='App mt-20 flex h-screen w-full justify-center font-roboto text-black'>
      <div>
        <TopBar />
        <div className='mb-20' />
        <KeyboardCard onKeyPress={(key: string) => console.log(key)} />
      </div>
    </div>
  );
}

export default App;
