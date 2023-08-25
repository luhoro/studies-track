import Item from './Item'
import style from  './Lista.module.scss'

const Lista = () => {

  const tarefas = [
    {
      nome: 'React',
      tempo: '02:00:00'
    },
    {
      nome: 'Typescript',
      tempo: '01:30:00'
    },
    {
      nome: 'javascript',
      tempo: '00:30:00'
    }
  ]

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>

      <ul>
        {tarefas.map((tarefa, key) => (
          <Item key={key}  {...tarefa} />
        ))}
      </ul>

    </aside>
  )
}

export default Lista