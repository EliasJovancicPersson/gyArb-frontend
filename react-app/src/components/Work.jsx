import './styles/Work.css';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Work() {
  return (
    <Document
      file={
        'https://expresspdf.blob.core.windows.net/pdf/Elias%20Jovancic%20Persson%20-%20Resume%CC%81.pdf'
      }>
      <Page pageNumber={1} />
    </Document>
  );
}

export default Work;
