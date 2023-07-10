import Dialog from '../common/dialog';
import { Button } from '@material-tailwind/react';
import { StatisticsDialogProps } from '../../global/types';

export const StatisticsDialog = (props: StatisticsDialogProps) => {
  const { handler, openDialog, showWord = true, secretWord } = props;

  const handleClose = (newGame: boolean) => {
    handler(newGame);
  };

  return (
    <Dialog
      open={openDialog}
      handler={handler}
      className='min-w-546 md:min-w-546 lg:min-w-546 2xl:min-w-546 w-546 max-w-546 text-xl leading-22 md:w-546 md:max-w-546 lg:w-546 lg:max-w-546 2xl:w-546 2xl:max-w-546'
    >
      <div className='mb-8 text-center text-4xl font-extrabold'>
        Estadísticas
      </div>
      <div className='mb-8 flex w-full justify-between text-center'>
        <div className='w-5/12'>
          <div className='mb-4 text-center text-4xl font-extrabold'>
            {localStorage.getItem('games')}
          </div>
          <div className='mb-4'>Jugadas</div>
        </div>
        <div className='w-5/12'>
          <div className='mb-4 text-center text-4xl font-extrabold'>
            {localStorage.getItem('wins')}
          </div>
          <div className='mb-4'>Victorias</div>
        </div>
      </div>
      {showWord && (
        <div className='mb-8 w-full text-center'>
          La palabra era:{' '}
          <span className='font-extrabold'>{secretWord.join('')}</span>
        </div>
      )}
      <div className='mb-4 w-full text-center'>SIGUIENTE PALABRA</div>
      <div className='mb-12 w-full text-center font-extrabold'>04:10</div>
      <div className='w-100 flex justify-center'>
        <Button
          className='w-256 bg-letterCard-bg-success py-2.5 text-3xl font-extrabold capitalize leading-32 text-white'
          onClick={() => handleClose(true)}
        >
          Nueva partida
        </Button>
      </div>
    </Dialog>
  );
};

export default StatisticsDialog;
