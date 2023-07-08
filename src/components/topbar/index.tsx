import { useState, useEffect } from 'react';
import { ReactComponent as QuestionIcon } from '../../assets/question-icon.svg';
import { ReactComponent as StatisticsIcon } from '../../assets/statistics-icon.svg';
import InstructionsDialog from '../dialogs/InstructionsDialog';
import StatisticsDialog from '../dialogs/StatisticsDialog';

export const TopBar = () => {
  const [openInstructionsDialog, setOpenInstructionsDialog] =
    useState<boolean>(false);
  const [openStatisticsDialog, setOpenStatisticsDialog] =
    useState<boolean>(false);

  const handlerOpenInstructionsDialog = () => {
    setOpenInstructionsDialog(true);
  };

  const handlerOpenStatisticsDialog = () => {
    setOpenStatisticsDialog(true);
  };

  const handlerCloseInstructionsDialog = () => {
    setOpenInstructionsDialog(false);
  };

  const handlerCloseStatisticsDialog = () => {
    setOpenStatisticsDialog(false);
  };

  useEffect(() => {
    const isFirstLogin = !localStorage.getItem('first_login');
    if (isFirstLogin) {
      handlerOpenInstructionsDialog();
      localStorage.setItem('first_login', 'true');
    }
  }, []);

  return (
    <div className='flex h-84 w-screen max-w-638 items-center justify-between rounded-15 bg-paper01 px-4 py-2'>
      <QuestionIcon
        className='cursor-pointer'
        onClick={handlerOpenInstructionsDialog}
      />
      <div className='text-4xl font-semibold leading-48'>WORDLE</div>
      <div className='flex gap-1'>
        <StatisticsIcon
          className='cursor-pointer'
          onClick={handlerOpenStatisticsDialog}
        />
      </div>
      <InstructionsDialog
        openDialog={openInstructionsDialog}
        handler={handlerCloseInstructionsDialog}
      />
      <StatisticsDialog
        openDialog={openStatisticsDialog}
        handler={handlerCloseStatisticsDialog}
      />
    </div>
  );
};

export default TopBar;
