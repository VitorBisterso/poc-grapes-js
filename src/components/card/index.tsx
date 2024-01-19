interface CardProps {
   title: string;
   description: string;
}

export default function Card({ title, description }: Readonly<CardProps>) {
   return (
      <div
         style={{ width: 150, height: 250, border: '1px solid black', borderRadius: 8 }}
      >
         {`${title} - ${description}`}
      </div>
   )
}