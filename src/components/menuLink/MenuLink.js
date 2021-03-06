import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuLink = ({Parameter, title, icon, menuOpen}) => {
    return (
        <NavLink activeClassName="active" exact to={Parameter} className='link'>
              <div className='item_link'>
                <div className='item_link_title'>
                  <div>
                    <i className={`${icon} icon`}></i>
                  </div>
                  <div>
                    <h3 className={(!menuOpen) ? 'link_label_close' : 'link_label' }>{title}</h3>
                  </div>
                </div>
                <div>
                  <i className="fas fa-chevron-right arrow_icon"></i>
                </div>
              </div>
            </NavLink>
    )
}

export default MenuLink
