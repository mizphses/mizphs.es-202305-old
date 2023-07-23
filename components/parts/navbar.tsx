'use client';

import Style from './navbar.module.scss'
import { useState } from 'react'

export default function Navbar() {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '//zenn.dev/natom_nano' },
    { name: 'About', path: '/pages/about' },
    { name: 'Contact', path: '//twitter.com/messages/compose?recipient_id=1430867145534054401' },
  ]
  let [isOpeningMenu, setMenuStatus] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuStatus(!isOpeningMenu);
  }
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
          <button className={Style.navbar__right__menu_button} onClick={toggleMenu}>
            <span className={Style.material_symbols_outlined}>
              {
                isOpeningMenu ?
                "close":"menu"
              }
            </span>
            メニュー
          </button>
        </div>
        { isOpeningMenu &&
          <div>
            <div className={Style.bottom_menu}>
              <div className={Style.bottom_menu__inde}>
                <ul>
                  {menuItems.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.path}>
                          {item.name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        }
      </div>
      <div className={Style.dummy} />
    </div>
  )
}