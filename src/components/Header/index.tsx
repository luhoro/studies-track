import style from './Header.module.scss'
import logo from './studies.svg'

const index = () => {
  return (
    <header className={style.header}>
      <img src={logo} className={style.logo} alt="Studies Logo" />
      <h1>Studies Tracker</h1>
    </header>
  )
}

export default index