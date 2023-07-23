import Style from './navbar.module.scss'

export default function Navbar() {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '//zenn.dev/natom_nano' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]
  return (
    <div>
      <div className={Style.navbar__wrap}>
        <div className={Style.navbar__inde}>
          <div className={Style.navbar__left}>
            <div className={Style.navbar__left__logo}>
              <a href="/">
                みずな
              </a>
            </div>
          </div>
          <button className={Style.navbar__right__menu_button}>
            <span className={Style.material_symbols_outlined}>
              menu
            </span>
            メニュー
          </button>
        </div>
      </div>
      <div className={Style.dummy} />
    </div>
  )
}