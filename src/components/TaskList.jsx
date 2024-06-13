import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { deleteTask } from "../features/task/taskSlice"
import { Link } from "react-router-dom"

function TaskList() {
  const dispatch = useDispatch()
  const stateTask = useSelector(state => state.task)

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
      <header>
        <h1>Tareas: {stateTask.length}</h1>
        <Link to={'/nueva-tarea'}>Nueva tarea</Link>
      </header>
      <div>{
        stateTask.map(task => {
          return (
            <div key={task.id} className="card_task">
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <div>
                <button onClick={() => handleDelete(task.id)}>Eliminar</button>
                <button className="edit">Editar</button>
              </div>
            </div>
          )
        })}</div>
    </div>
  )
}

export default TaskList