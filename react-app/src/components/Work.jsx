import './styles/Work.css'
import { Document, Page, pdfjs } from 'react-pdf'
import { useState, useEffect } from 'react'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
function Work () {
  const projId = '2c478253-c00e-44f2-b17c-ba42e1131821'
  const url = 'https://gyarb-backend.azurewebsites.net/wiki/' + projId
  const [data, setData] = useState(null)
  const [pagesMax, setPagesMax] = useState(null)
  const [page, setPage] = useState(1)

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

  function pageHandler (num) {
    if (page + num <= pagesMax && page + num >= 1) {
      setPage(page + num)
    }
  }

  function handleChange (e) {
    if (e.target.value <= pagesMax && e.target.value >= 1) {
      setPage(+e.target.value)
      console.log('set page')
    } else {
      e.target.value = null
    }
  }

  function handleFocus (e) {
    e.target.select()
  }

  if (data) {
    return (
      <div className="work-container">
        <div className="pdf-container">
          <Document
            onLoadSuccess={({ numPages }) => setPagesMax(numPages)}
            file={data.pdf}
            className="pdf">
            <Page
              pageNumber={page}
              renderTextLayer={false}
              renderAnnotationLayer={false} />
          </Document>
        </div>
        <div className="page-controlls">
          <input type="button" value="-" className="page-controll" onClick={() => { pageHandler(-1) }}/>
            <input type="number" name="page" id="page" value={page} onChange={handleChange} onFocus={handleFocus} onClick={handleFocus}/>
          <input type="button" value="+" className="page-controll" onClick={() => { pageHandler(1) }}/>
        </div>
      </div>

    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
}

export default Work
