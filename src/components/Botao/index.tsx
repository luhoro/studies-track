import style from './Botao.module.scss'

const Botao = ({children}: {children: string}) => {
  return (
  <button className={style.botao}>
    {children}
  </button>
  )
}

export default Botao
