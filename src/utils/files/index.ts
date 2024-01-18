export async function saveFile(data: Record<string, any>) {
   try {
     const jsonBlob = new Blob([JSON.stringify(data)], { type: 'application/json' });
 
     const downloadLink = document.createElement('a');
     downloadLink.href = URL.createObjectURL(jsonBlob);
     downloadLink.download = `${process.env.ROOT}/data.json`;
     downloadLink.click();
   } catch (error) {
     console.error('Error saving JSON file:', error);
   }
 };