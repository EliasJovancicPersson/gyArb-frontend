import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import styles from '../components/styles/Upload.module.css'
import pdfIcon from '../images/Icons/pdfIcon.svg'
import PropTypes from 'prop-types'

const subjects = [
  'naturvetenskapsprogrammet',
  'teknikprogrammet',
  'ekonomiprogrammet',
  'humanistiskaprogrammet',
  'samhällsvetenskapligaprogrammet',
  'estetiskaprogrammet',
  'internationall-baccalaureate'
]

function Upload (props) {
  const [fileUploaded, setFileUploaded] = useState(false)

  const [file, setFile] = useState()

  const [data, setData] = useState({
    title: 'null',
    author: props.user.username,
    subject: 'naturvetenskapsprogrammet'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('author', props.user.username)
    formData.append('subject', data.subject)
    formData.append('pdf', file)
    const promise = fetch('http://localhost:8000/wiki', {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message === 'FILE-SIZE') {
          alert('The maximum filesize is 25mb each!')
        } else if (response.message === 'FILE-FORMAT') {
          alert('Wrong file format, we only allow jpeg,jpg,png and gifs')
        } else {
          console.log(response)
          // display loading thing
        }
      })
    toast.promise(promise, {
      loading: 'Laddar...',
      success: 'Ditt arbete är nu uppladdat.',
      error: 'Oj! något gick fel.'
    })
  }

  const handleDataChange = (e) => {
    if (e.target.name === 'pdf') {
      setFileUploaded(e.target.files[0].name)
      setFile(e.target.files[0])
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }
  }

  useEffect(() => {
  }, [data])

  return (
        <div className={styles.form_container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.project_info}>
                    <input type="text" name='title' className={styles.input_title} placeholder='Titel' onChange={handleDataChange} />
                    <input type="text" name='author' className={styles.input_author} value={props?.user.username} readOnly/>
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
                <input type="submit" value="submit" />
                <Toaster
                containerStyle={{
                  top: 90
                }}/>
            </form>
        </div>
  )
}

Upload.propTypes = {
  user: PropTypes.object
}

export default Upload
