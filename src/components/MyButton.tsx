import { useRef, RefObject } from "react";

export default function MyButton(props: any) {
  const buttonRef: RefObject<HTMLButtonElement> = useRef(null);

  const handleClick = (): void => {
    if (buttonRef.current) {
      buttonRef.current.blur();
    }
    props.clc();
  };

  return (
    <button
      className={props.classes}
      ref={buttonRef}
      type={props.typ}
      onClick={handleClick}
    >
      {props.label}
    </button>
  );
}
