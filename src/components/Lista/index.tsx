import {ITarefa} from '../../types/ITarefa'
import Item from './Item'
import style from './Lista.module.scss'

interface Props {
  tarefas: ITarefa[]
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const Lista = ({tarefas, selecionaTarefa}: Props) => {

  return (
    <aside className={style.listaTarefas}>
      <h2>
        Estudos do dia
      </h2>

      <ul>
        {tarefas.map((tarefa) => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={tarefa.id}
            {...tarefa}
          />
        ))}
      </ul>

    </aside>
  )
}

export default Lista