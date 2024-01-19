interface ButtonProps {
   text: string;
   onClick?: () => void;
   testId?: string;
}

export default function CustomButton({ text, onClick, testId }: Readonly<ButtonProps>) {
   return <button onClick={onClick} data-testid={testId}>{text}</button>
}