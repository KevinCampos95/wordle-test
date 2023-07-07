import './App.css';
import TopBar from './components/topbar';
import { useState } from 'react';
import InstructionsDialog from './components/dialogs/InstructionsDialog';

function App() {
  return (
    <div className='App mt-20 flex h-screen w-full justify-center font-roboto text-black'>
      <TopBar />
    </div>
  );
}

export default App;
