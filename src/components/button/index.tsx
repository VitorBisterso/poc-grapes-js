interface ButtonProps {
   title: string;
   onClick: () => void;
   testId: string;
}

export default function Button({ title, onClick, testId }: Readonly<ButtonProps>) {
   return <button onClick={onClick} data-testid={testId}>{title}</button>
}