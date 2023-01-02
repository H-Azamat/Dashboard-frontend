import { useState } from 'react'

import { Avatar, Menu } from "antd"
import { MenuProps } from "antd/es/menu"
import { UserOutlined } from '@ant-design/icons';

import './Nav.scss'

// list of items for menu
const items: MenuProps['items'] = [ 
  {
    label: (
      <img src="https://samnur.net/img/logo.svg" alt="SAMNUR INC" className="logo" />
    ),
    key: 'logo',
    disabled: true
  },
  {
    label: 'Activity',
    key: 'activity',
  },
  {
    label: 'Loadboard',
    key: 'loadboard',
  },
  {
    label: 'Drivers',
    key: 'drivers',
  },
  {
    label: 'Dispatchers',
    key: 'dispatchers',
  }
]

const Nav = () => {
  const [current, setCurrent] = useState('activity')

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="Nav">

      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}></Menu>

    </div>

    
  )
}

export default Nav