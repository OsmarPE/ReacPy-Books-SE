import { useState } from 'react'
import './App.css'
import { getInformation } from './helpers/datos'
import Modal from './Components/Modal'
import 'remixicon/fonts/remixicon.css'

function App() {

  const [Edad, setedad] = useState('')
  const [Tiempo, settiempo] = useState('')
  const [Presupuesto, setpresupuesto] = useState('')
  const [Motivo, setmotivo] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [title, settitle] = useState("La historia interminable de Michael Ende")
  const [description, setdescription] = useState("La trama es emocionante e imaginativa, lo que la hace muy atractiva para los niños. Además, el libros es lo suficientemente largo como para mantener al niño entretenido durante un mes, pero no tanto como para abrumarlo. ")

  async function hanledSubmit(e) {
    e.preventDefault()
    if (Edad && Tiempo && Presupuesto && Motivo) {
        console.log('completo');
        console.log({
          Edad,
          Presupuesto,
          Motivo,
          Tiempo
        })
        const info = await getInformation(Edad, Tiempo, Presupuesto, Motivo)
        console.log(info);
        settitle(info.Respuesta)
        setdescription(info.Descripcion)
        setShowModal(!showModal)
      }
  }

  function closeModal() {
    setShowModal(false)
    settitle('')
    setdescription('')
    setedad('')
    setmotivo('')
    settiempo('')
    setpresupuesto('')
  }

  return (
    <div className="container">
      <main className='card'>
        <h1 className='card__title'>SE BOOKS</h1>
        <form className='form' onSubmit={hanledSubmit}>
          <div className="form__item">
            <label className='form__label' htmlFor="edad">¿Qué edad tiene?</label>
            <select value={Edad} onChange={(e) => setedad(e.target.value)} className='form__select' name={'edad'} id={'edad'}>
              <option value="">Seleccionar</option>
              <option value="Niño menor de 11 años">Niño menor de 10 años</option>
              <option value="Adolescente">Adolescente</option>
              <option value="Joven de 19 a 25 años">Joven de 19 a 25 años</option>
              <option value="Adulto">Adulto</option>
            </select>
          </div>
          <div className="form__item">
            <label className='form__label' htmlFor="tiempo">¿En qué plazo desearía concluir la lectura?</label>
            <select value={Tiempo} onChange={(e) => settiempo(e.target.value)} className='form__select' name={'tiempo'} id={'tiempo'}>
              <option value="">Seleccionar</option>
              <option value="1 semana">1 semana</option>
              <option value="2 semanas">2 semanas</option>
              <option value="1 mes">1 mes</option>
              <option value="Más de 2 meses">Más de 2 meses</option>
            </select>
          </div>
          <div className="form__item">
            <label className='form__label' htmlFor="presupuesto">¿Cuál es el monto que estás dispuesto a gastar?</label>
            <select value={Presupuesto} onChange={(e) => setpresupuesto(e.target.value)} className='form__select' name={'presupuesto'} id={'presupuesto'}>
              <option value="">Seleccionar</option>
              <option value="Menos de $250">Menos de $250</option>
              <option value="Entre $300 y $400">Entre $300 y $400</option>
              <option value="$500 o más">$500 o más</option>
            </select>
          </div>
          <div className="form__item">
            <label className='form__label' htmlFor="razon">¿Cuál es el monto que estás dispuesto a gastar?</label>
            <select value={Motivo} onChange={(e) => setmotivo(e.target.value)} className='form__select' name={'razon'} id={'razon'}>
              <option value="">Seleccionar</option>
              <option value="Interés">Interés</option>
              <option value="Aprender">Aprender</option>
              <option value="Distracción">Distracción</option>
            </select>
          </div>
          <input className='form__submit' type="submit" value="Consultar" />
        </form>
      </main>
      <Modal 
        title={title} 
        description={description} 
        closeModal={closeModal}
        showModal={showModal}
        />
    </div>
  )
}

export default App
