import React, { useState, useEffect } from 'react';
import LetterCard from '../cards/letterCard';
import { LetterCardBackgrounds } from '../../global/enums';
import { LetterInputsProps } from '../../global/types';

const LetterInputs: React.FC<LetterInputsProps> = props => {
  const { items = [], resetCards, cleanedCards } = props;

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

  const emptyItems = Array.from({ length: emptyCards }).map((_, index) => (
    <LetterCard
      key={index}
      letter=''
      backgroundColor={LetterCardBackgrounds.Error}
    />
  ));

  useEffect(() => {
    if (items.length) {
      const emptyCount: number = 25 - items.length;
      console.log(items.length, emptyCards, '-------------');

      setEmptyCards(emptyCount);
    }
  }, [items]);

  useEffect(() => {
    if (resetCards) {
      setEmptyCards(25);
      cleanedCards();
    }
  }, [resetCards]);

  return (
    <div className='mb-8 mt-16 flex max-h-427 w-638 max-w-638 flex-wrap justify-center gap-3 px-20'>
      {matchedItems.concat(emptyItems)}
    </div>
  );
};

export default LetterInputs;
