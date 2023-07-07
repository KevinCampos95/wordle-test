import { useRef } from 'react';
import {
  Dialog as DialogMaterial,
  DialogProps,
} from '@material-tailwind/react';

export const Dialog = (props: DialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  return (
    <DialogMaterial
      {...props}
      ref={dialogRef}
      className={`${props.className} border border-black bg-paper03 px-8 pb-4 pt-12 text-black`}
    />
  );
};

export default Dialog;
