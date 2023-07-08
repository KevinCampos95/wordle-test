import { LetterCardBackgrounds } from '../../../global/enums';
import { LetterCardProps } from '../../../global/types';

export const LetterCard = (props: LetterCardProps) => {
  const {
    letter = '',
    letterColor = 'text-black',
    backgroundColor = LetterCardBackgrounds.Default,
    border = '',
    width = 'w-75',
    height = 'h-76',
    className,
    icon,
    onClick,
  } = props;
  return (
    <div
      className={`${className} ${letter} ${letterColor} ${backgroundColor} ${border} ${width} ${height} flex select-none items-center justify-center rounded text-4xl font-extrabold`}
      onClick={onClick}
    >
      {icon || letter}
    </div>
  );
};

export default LetterCard;
