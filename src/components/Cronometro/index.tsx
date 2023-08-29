import { useState, useEffect } from 'react'
import Botao from "components/Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "common/utils/time";
import { ITarefa } from "types/ITarefa";

interface Props {
  selecionado: ITarefa | undefined
  finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props) {
  const [tempo, setTempo] = useState<number>()

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  }, [selecionado])

  const regressiva = (contador: number = 0) => {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1)
        return regressiva(contador - 1)
      }
      finalizarTarefa()
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <h3 className={style.titulo}>Escolha um card e inicie o cronômetro</h3>
      <Relogio tempo={tempo} />
      <Botao onClick={() => regressiva(tempo)}>
        Começar!
      </Botao>
    </div>
  )
}