import { FC } from 'react'
import Menu, {MenuProps} from './menu'
import MenuItem, {MenuItemProps} from './menuItem'
import './menu.less'

export type MenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>,
}

