import React, { useState, useEffect } from 'react';
import { TypedLetterProps } from '../../global/types';
import LetterCard from '../cards/letterCard';
import { LetterCardBackgrounds } from '../../global/enums';

interface LetterInputsProps {
  items?: TypedLetterProps[];
  validatedLetters?: TypedLetterProps[];
}

const LetterInputs: React.FC<LetterInputsProps> = ({ items = [] }) => {
  const [emptyCards, setEmptyCards] = useState<number>(25);

  const matchedItems = items.slice(0, items.length).map((item, index) => {
    const letterCardProps = {
      letter: item.letter,
      backgroundColor: item.backgroundColor,
      letterColor: item.letterColor,
      border: item.border,
    };
    return <LetterCard key={index} {...letterCardProps} />;
  });

  useEffect(() => {
    if (items.length) {
      setEmptyCards(emptyCards - 1);
    }
  }, [items]);

  return (
    <div className='mb-8 mt-16 flex w-638 max-w-638 flex-wrap justify-center gap-3 px-20'>
      {matchedItems}
      {Array.from({ length: emptyCards }).map((_, index) => (
        <LetterCard
          key={index}
          letter=''
          backgroundColor={LetterCardBackgrounds.Error}
        />
      ))}
    </div>
  );
};

export default LetterInputs;
