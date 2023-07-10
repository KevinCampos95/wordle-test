import LetterCard from '../letterCard';
import { qwertyKeyboard } from '../../../global/constants';
import { ReactComponent as UnionIcon } from '../../../assets/union-icon.svg';
import { KeyboardCardProps } from '../../../global/types';

export const KeyboardCard: React.FC<KeyboardCardProps> = props => {
  const { onKeyPress, typedLetters } = props;

  const handleKeyPress = (key: string) => {
    onKeyPress(key);
  };

  const keyboard = qwertyKeyboard.map((item, index) => {
    const typedLetter = typedLetters.find(
      typedItem => typedItem.letter === item,
    );

    let border = '';
    let backgroundColor = '';
    let letterColor = 'text-letterCard-text-default';

    if (typedLetter) {
      border = typedLetter.border || '';
      backgroundColor = typedLetter.backgroundColor || '';
      letterColor = 'text-white';
    }

    return (
      <LetterCard
        key={`${item}${index}`}
        letter={item}
        width='w-fit'
        height='h-51'
        className={`min-w-44 cursor-pointer px-4 py-1 text-xl leading-22 ${border} ${backgroundColor} ${letterColor}`}
        onClick={() => handleKeyPress(item)}
      />
    );
  });

  return (
    <div
      className={`flex h-fit w-638 max-w-638 flex-wrap justify-center gap-3 rounded-15 bg-paper02 px-4 py-6`}
    >
      {keyboard}
      <LetterCard
        icon={<UnionIcon />}
        width='w-fit'
        height='h-51'
        className={`min-w-72 cursor-pointer px-4 py-1 text-xl leading-22 text-letterCard-text-default`}
        onClick={() => handleKeyPress('DEL')}
      />
    </div>
  );
};

export default KeyboardCard;
