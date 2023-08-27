import style from './Botao.module.scss'

interface Props {
  children: React.ReactNode // o tipo do children
  type?: "button" | "submit" | "reset" | undefined 
  onClick?: () => void
}

const Botao = ({children, type = 'button', onClick}: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={style.botao}
    >
      {children}
    </button>
  )
}

export default Botao
