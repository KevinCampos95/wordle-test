import { useState } from 'react';
import { ReactComponent as QuestionIcon } from '../../assets/question-icon.svg';
import { ReactComponent as StatisticsIcon } from '../../assets/statistics-icon.svg';
import { Switch } from '@material-tailwind/react';
import InstructionsDialog from '../dialogs/InstructionsDialog';

export const TopBar = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handlerCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className='flex h-84 w-screen max-w-638 items-center justify-between rounded-2xl bg-paper01 px-4 py-2'>
      <QuestionIcon
        className='cursor-pointer'
        onClick={() => setOpenDialog(true)}
      />
      <div className='text-4xl font-semibold leading-48'>WORDLE</div>
      <div className='flex gap-1'>
        <StatisticsIcon className='cursor-pointer' />
        <Switch />
      </div>
      <InstructionsDialog
        openDialog={openDialog}
        handler={handlerCloseDialog}
      />
    </div>
  );
};

export default TopBar;
