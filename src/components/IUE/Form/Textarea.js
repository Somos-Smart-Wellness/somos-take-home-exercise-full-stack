import { useState } from 'react'
import './forms.css'
const Textarea = ({ label, name, placeholder, value }) => {

  const [input, setInput] = useState({[name]:null})

  const handleInputChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  return (
      <>
      <div className='cont-input'>
        <div className='cont-label'>
            { label }
        </div>
        <textarea name={ name } placeholder={ placeholder } defaultValue={ value ? value : input.title } onChange={handleInputChange} rows="3" cols="50"></textarea>
      </div>
      </>
  )
}
export default Textarea
