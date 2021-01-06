import { FC } from 'react'
import Menu, {MenuProps} from './menu'
import MenuItem, {MenuItemProps} from './menuItem'
import SubMenu, { SubMenuProps} from './submenu'
import './menu.less'

export type MenuComponent = FC<MenuProps> & {
    Menu: FC<MenuProps>
    Item: FC<MenuItemProps>,
    SubMenu: FC<SubMenuProps>
}



const TotalMenu = Menu as MenuComponent

TotalMenu.Item = MenuItem
TotalMenu.Menu = Menu
TotalMenu.SubMenu = SubMenu

export default TotalMenu