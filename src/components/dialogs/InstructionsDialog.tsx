import Dialog from '../common/dialog';
import { Button } from '@material-tailwind/react';
import LetterCard from '../cards/letterCard';
import {
  exampleLettersFirstRow,
  exampleLettersSecondRow,
  exampleLettersThirdRow,
} from '../../global/constants';

interface InstructionsDialogProps {
  openDialog: boolean;
  handler: () => void;
}

export const InstructionsDialog = (props: InstructionsDialogProps) => {
  const { handler, openDialog } = props;

  const handleClose = () => {
    handler();
  };

  return (
    <Dialog
      open={openDialog}
      handler={handler}
      className='min-w-546 md:min-w-546 lg:min-w-546 2xl:min-w-546 w-546 max-w-546 text-xl leading-22 md:w-546 md:max-w-546 lg:w-546 lg:max-w-546 2xl:w-546 2xl:max-w-546'
    >
      <div className='font-size mb-8 text-center text-4xl font-extrabold'>
        Cómo jugar
      </div>
      <div className='mb-4'>Adivina la palabra oculta en cinco intentos.</div>
      <div className='mb-4'>
        Cada intento debe ser una palabra válida de 5 letras.
      </div>
      <div className='mb-4'>
        Después de cada intento el color de las letras cambia para mostrar qué
        tan cerca estás de acertar la palabra.
      </div>
      <div className='mb-4 font-bold'>Ejemplos</div>
      <div className='mb-4 ml-2 flex gap-3'>
        {exampleLettersFirstRow.map((item, index) => (
          <LetterCard
            key={`${item?.letter}${index}`}
            letter={item.letter}
            backgroundColor={item?.backgroundColor}
            border={item?.border}
          />
        ))}
      </div>
      <div className='mb-4 flex gap-1'>
        La letra <span className='font-bold'>G</span> está en la palabra y en la
        posición correcta.
      </div>
      <div className='mb-4 ml-2 flex gap-3'>
        {exampleLettersSecondRow.map((item, index) => (
          <LetterCard
            key={`${item?.letter}${index}`}
            letter={item.letter}
            backgroundColor={item?.backgroundColor}
            border={item?.border}
          />
        ))}
      </div>
      <div className='mb-4'>
        La letra <span className='font-bold'>C</span> está en la palabra pero en
        la posición incorrecta.
      </div>
      <div className='mb-4 ml-2 flex gap-3'>
        {exampleLettersThirdRow.map((item, index) => (
          <LetterCard
            key={`${item?.letter}${index}`}
            letter={item.letter}
            backgroundColor={item?.backgroundColor}
            border={item?.border}
          />
        ))}
      </div>
      <div className='mb-8 flex gap-1'>
        La letra <span className='font-bold'>O</span> no está en la palabra.
      </div>
      <div className='mb-8'>
        Puede haber letras repetidas. Las pistas son independientes para cada
        letra.
      </div>
      <div className='mb-8 text-center'>¡Una palabra nueva cada 5 minutos!</div>
      <div className='w-100 flex justify-center'>
        <Button
          className='w-256 bg-letterCard-bg-success py-2.5 text-3xl font-extrabold leading-32 text-white'
          onClick={handleClose}
        >
          !JUGAR¡
        </Button>
      </div>
    </Dialog>
  );
};

export default InstructionsDialog;
