import './styles/Work.css'
import { Document, Page, pdfjs } from 'react-pdf'
import { useState, useEffect } from 'react'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
function Work () {
  const projId = 'e87f5a2f-eba7-48cd-8539-b3b2372ae0ab'
  const url = 'https://gyarb-backend.azurewebsites.net/wiki/' + projId
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.project)
      })
  }, [])

  if (data) {
    console.log()
    return (
      <div className="work-container">
        <><div className="pdf-container">
          <Document
            file={data.pdf}
            className="pdf">
            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
          </Document>
        </div><div className="page-controlls">
            <input type="button" value="+" className="page-controll" />
            <input type="number" name="page" id="page" />
            <input type="button" value="-" className="page-controll" />
          </div></>
      </div>

    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
}

export default Work
