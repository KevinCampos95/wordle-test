import LetterCard from '../letterCard';
import { qwertyKeyboard } from '../../../global/constants';
import { ReactComponent as UnionIcon } from '../../../assets/union-icon.svg';
import { KeyboardCardProps } from '../../../global/types';

export const KeyboardCard = (props: KeyboardCardProps) => {
  const { onKeyPress } = props;

  const handleKeyPress = (key: string) => {
    onKeyPress(key);
  };

  return (
    <div
      className={`flex h-fit w-638 max-w-638 flex-wrap justify-center gap-3 rounded bg-paper02 px-4 py-6`}
    >
      {qwertyKeyboard.map((item, index) => (
        <LetterCard
          key={`${item}${index}`}
          letter={item}
          width='w-fit'
          height='h-51'
          className={`min-w-44 cursor-pointer px-4 py-1 text-xl leading-22 text-letterCard-text-default`}
          onClick={() => handleKeyPress(item)}
        />
      ))}
      <LetterCard
        icon={<UnionIcon />}
        width='w-fit'
        height='h-51'
        className={`min-w-72 cursor-pointer px-4 py-1 text-xl leading-22 text-letterCard-text-default`}
        onClick={() => handleKeyPress('Del')}
      />
    </div>
  );
};

export default KeyboardCard;
