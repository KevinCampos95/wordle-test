import Dialog from '../common/dialog';
import LetterCard from '../cards/letterCard';
import { LetterCardBackgrounds } from '../../global/enums';

interface InstructionsDialogProps {
  open: boolean;
  handler: () => void;
}

const exampleLettersFirstRow = [
  { letter: 'G', backgroundColor: LetterCardBackgrounds.Success },
  { letter: 'A' },
  { letter: 'T' },
  { letter: 'O' },
  { letter: 'S' },
];

export const InstructionsDialog = (props: InstructionsDialogProps) => {
  return (
    <Dialog
      {...props}
      className='min-w-546 md:min-w-546 lg:min-w-546 2xl:min-w-546 w-546 max-w-546 md:w-546 md:max-w-546 lg:w-546 lg:max-w-546 2xl:w-546 2xl:max-w-546'
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
      <div className='ml-2 flex gap-3'>
        {exampleLettersFirstRow.map(item => (
          <LetterCard
            letter={item.letter}
            backgroundColor={item?.backgroundColor}
          />
        ))}
      </div>
    </Dialog>
  );
};

export default InstructionsDialog;
