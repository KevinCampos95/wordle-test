import './App.css';
import TopBar from './components/topbar';
import Dialog from './components/common/dialog';
import { useState } from 'react';

function App() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handlerCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className='App flex h-screen w-full items-center justify-center font-roboto'>
      <TopBar />
      <div onClick={() => setOpenDialog(true)}>click</div>
      <Dialog
        open={openDialog}
        handler={handlerCloseDialog}
        className='text-left'
      >
        <div className='font-size mb-8 text-center text-4xl font-extrabold'>
          Cómo jugar
        </div>
        <div className=' mb-4'>
          Adivina la palabra oculta en cinco intentos.
        </div>
        <div className=' mb-4'>
          Cada intento debe ser una palabra válida de 5 letras.
        </div>
        <div className=' mb-4'>
          Después de cada intento el color de las letras cambia para mostrar qué
          tan cerca estás de acertar la palabra.
        </div>
        <div className=' mb-4 font-bold'>Ejemplos</div>
      </Dialog>
    </div>
  );
}

export default App;
