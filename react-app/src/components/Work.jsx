import './styles/Work.css';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Work() {
  return (
    <div className="work-container">
      <div className="pdf-container">
        <Document
          file={'https://expresspdf.blob.core.windows.net/pdf/Bartenderbok-Fanny.pdf'}
          className="pdf">
          <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
      </div>
      <div className="page-controlls">
        <input type="button" value="+" className="page-controll" />
        <input type="number" name="page" id="page" />
        <input type="button" value="-" className="page-controll" />
      </div>
    </div>
  );
}

export default Work;
