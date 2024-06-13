import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"    //? permite disparar acciones de taskSlice o de los que tengas
import { useState } from "react"
import { v4 as uuid } from "uuid"
import { addTask } from "../features/task/taskSlice"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function Taskform() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ name: '', description: '' })
    const dispatch = useDispatch()
    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask({
            ...form,
            id: uuid(),
        }))
        navigate('/')
    }

    return (
        <div className="App">
            <div className="card">
                <h1>Registro de tareas</h1>
                <form onSubmit={handleSubmit} className="form_task">
                    <label htmlFor="name">Nombre: </label>
                    <input type="text" name='name' placeholder="nombre" onChange={handleForm} />
                    <label htmlFor="description">Descripción: </label>
                    <textarea name="description" placeholder="Descripción" onChange={handleForm}></textarea>
                    <div className="actions">
                        <button className="save">Guardar</button>
                        <Link to={'/'} className="cancel" >Cancelar</Link>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Taskform