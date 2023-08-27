import style from './Botao.module.scss'

interface TypeBotao {
  children: string,
  type?: "button" | "submit" | "reset" | undefined
}

const Botao = (props: TypeBotao) => {
  const { type = "button" } = props

  return (
  <button type={type} className={style.botao}>
    {props.children}
  </button>
  )
}

export default Botao
