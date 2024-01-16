interface CardProps {
   name: string;
   description: string;
}

export default function Card({ name, description }: Readonly<CardProps>) {
   return (
      <div
         style={{ width: 150, height: 250, border: '1px solid black', borderRadius: 8 }}
      >
         {`${name} - ${description}`}
      </div>
   )
}