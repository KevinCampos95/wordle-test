import { ReactNode, MouseEvent } from "react";

export interface TypedLetterProps {
    letter: string;
    backgroundColor?: string;
    letterColor?: string;
    border?: string;
}

export interface InstructionsDialogProps {
    openDialog: boolean;
    handler: () => void;
}

export interface LetterCardProps {
    letter?: string;
    letterColor?: string;
    backgroundColor?: string;
    border?: string;
    width?: string;
    height?: string;
    className?: string;
    icon?: ReactNode;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface KeyboardCardProps {
    onKeyPress: (key: string) => void;
    typedLetters: TypedLetterProps[];
}
  