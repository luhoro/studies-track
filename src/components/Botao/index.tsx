import style from './Botao.module.scss'

interface TypeBotao {
  children: string
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}

const Botao = (props: TypeBotao) => {
  const { type = "button", onClick } = props

  return (
  <button onClick={onClick} type={type} className={style.botao}>
    {props.children}
  </button>
  )
}

export default Botao
