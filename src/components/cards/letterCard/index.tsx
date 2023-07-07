import { LetterCardBackgrounds } from '../../../global/enums';

interface LetterCardProps {
  letter: string;
  letterColor?: string;
  backgroundColor?: string;
  border?: string;
  width?: string;
  height?: string;
}

export const LetterCard = (props: LetterCardProps) => {
  const {
    letter = '',
    letterColor = 'text-black',
    backgroundColor = LetterCardBackgrounds.Default,
    border = '',
    width = 'w-75',
    height = 'h-76',
  } = props;
  return (
    <div
      className={`${letter} ${letterColor} ${backgroundColor} ${border} ${width} ${height} flex items-center justify-center rounded text-4xl font-extrabold`}
    >
      {letter}
    </div>
  );
};

export default LetterCard;
