interface ButtonProps {
   text: string;
   onClick: () => void;
   testId: string;
}

export default function Button({ text, onClick, testId }: Readonly<ButtonProps>) {
   return <button onClick={onClick} data-testid={testId}>{text}</button>
}