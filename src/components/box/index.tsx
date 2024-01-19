export default function Box({ children }: any) {
   return (
      <div
         style={{
            padding: 15,
            margin: 15,
            border: '1px solid black',
            borderRadius: 8,
            boxShadow: '4px 6px 10px -3px rgba(112,112,112,1)',
         }}>
         {children}
      </div>
   )
}