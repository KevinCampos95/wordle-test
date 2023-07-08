import React from 'react';
import { TypedLetterProps } from '../../global/types';
import LetterCard from '../cards/letterCard';
import { LetterCardBackgrounds } from '../../global/enums';

interface LetterInputsProps {
  items?: TypedLetterProps[];
}

const LetterInputs: React.FC<LetterInputsProps> = ({ items = [] }) => {
  const letters = Array.from({ length: 25 });

  const matchedItems = items.slice(0, letters.length).map((item, index) => {
    const letterCardProps = {
      letter: item.letter,
      backgroundColor: item.backgroundColor,
      letterColor: item.letterColor,
      border: item.border,
    };

    letters.pop();
    return <LetterCard key={index} {...letterCardProps} />;
  });

  return (
    <div className='mb-8 mt-16 flex w-638 max-w-638 flex-wrap justify-center gap-3 px-20'>
      {matchedItems}
      {letters.map((_, index) => (
        <LetterCard
          key={index}
          letter='A'
          backgroundColor={LetterCardBackgrounds.Error}
        />
      ))}
    </div>
  );
};

export default LetterInputs;