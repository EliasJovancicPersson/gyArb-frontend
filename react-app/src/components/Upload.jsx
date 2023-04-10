import { useEffect, useState } from 'react'
import styles from '../components/styles/Upload.module.css'
import pdfIcon from '../images/Icons/pdfIcon.svg'

function Upload () {
  const subjects = ['teknikprogrammet', 'naturvetenskapsprogrammet', 'samhällsvetenskapsprogrammet', 'estetiskaprogrammet', 'humanistiska programmet', 'ekonomiprogrammet']
  const [fileUploaded, setFileUploaded] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    name: '',
    subject: '',
    pdf: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleDataChange = (e) => {
    if (e.target.name === 'pdf') {
      setFileUploaded(e.target.files[0].name)
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])

  return (
        <div className={styles.form_container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.project_info}>
                    <input type="text" name='title' className={styles.input_title} placeholder='Titel' onChange={handleDataChange}/>
                    <input type="text" name='author' className={styles.input_author} placeholder='John Doe' onChange={handleDataChange} readOnly/>
                </div>
                <label htmlFor="pdf" className={styles.label_pdf}>
                    <input type="file" name="pdf" id="pdf" className={styles.input_pdf} onChange={handleDataChange}/>
                    <img src={pdfIcon} alt="icon for pdf" className={styles.icon_pdf}/>
                    Ladda up
                    {fileUploaded && <p className={styles.input_pdf_name}>{fileUploaded}</p>}
                </label>
                <label htmlFor="subject" className={styles.label_subject}>
                    <select name="subject" id="subject" onChange={handleDataChange}>
                        {subjects.map((subject, key) => (
                            <option value={subject} key={key}>
                                {subject}
                            </option>
                        ))}
                    </select>
                </label>
            </form>
        </div>
  )
}

export default Upload
