import React, { useState} from 'react'
import Formulario from 'components/Formulario'
import Lista from 'components/Lista'
import style from './App.module.scss'
import Cronometro from 'components/Cronometro'
import Header from 'components/Header'
import {ITarefa} from 'types/ITarefa'

export const App = () => {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  const selecionaTarefa = (tarefaSelecionada: ITarefa) => {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriories => tarefasAnteriories.map(tarefa => ({
      ...tarefa, 
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  const finalizarTarefa = () => {
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return  {...tarefa, selecionado: false, completado: true}
        } else {
          return tarefa
        }
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Header />
      <Formulario setTarefas={setTarefas} />
      <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
      />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
    </div>
  )
}

export default App
