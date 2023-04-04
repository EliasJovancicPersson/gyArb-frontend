import './styles/Work.css'
import { Document, Page, pdfjs } from 'react-pdf'
import { useState } from 'react'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
function Work () {
  const projId = ''
  const [data, setData] = useState(null)
  setData(fetch('https://gyarb-backend.azurewebsites.net/wiki/' + projId))

  return (
    {
      if (data) {
        return (
          <div className="work-container">
            <div className="pdf-container">
              <Document
                file={data.pdf}
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
        )
      }
    }

  )
}

export default Work
