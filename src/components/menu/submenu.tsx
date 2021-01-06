import React, {FC, FunctionComponentElement, useContext, useState} from 'react'
import classNames from 'classnames'
import { MenuContext, MenuProps } from './menu'
import { MenuItem } from 'docz'
import { MenuItemProps } from './menuItem'
import Transition from '../_util/transition'

// 包含的属性
export interface SubMenuProps {
    index?:string;
    className?:string;
    title?:string;
    onTitleClick?: (clickIndex:string) => void;
    disabled?: boolean;
} 

const SubMenu: FC<SubMenuProps> = (props) => {
    const { index, className, title, children,} = props
    const context = useContext(MenuContext) 
    const openedSubMenus = context.defaultOpenSubMenus as Array<string> //获取 defaultOpenSubMenus 
    const isOpend = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false 
    const [ menuOpen, setOpen ] = useState(isOpend)
    const classes = classNames('menu-item menu-submenu', className, {
        'active': context.index === index,
        'opened': menuOpen,  //menuOpen就是设置的打开的那个菜单
        'vertical': context.mode === 'vertical',
    })
    const handleClick = (e: React.MouseEvent) => {
        console.log('isOped',index)
        e.preventDefault() 
        setOpen(!menuOpen) //设置menuOpen的反值
    }
    let timer: any 
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer) //清空timedout
        e.preventDefault()
        // timer设置定时器
        timer = setTimeout(() => { 
            setOpen(toggle)
        }, 300)
    }
    const clickEvents = context.mode === 'vertical' ? { onClick: handleClick } : {}
    const hoverEvents = context.mode !== 'vertical' ? { 
        onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true)},
        onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false)}
    } : {}
    
    // 定义子试图 
    const renderChildren = () => {
        const subMenuClasses = classNames('submenu-item', {
            // 
            'menu-opened': menuOpen
        })
        // 子组件
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            if (childElement.type.displayName === 'MenuItem' ) {
                return React.cloneElement(childElement, {
                    index: `${index}-${i}`
                })
            } else {
                console.error("Warning: SubMenu has a child which is not a MenuItem Component")
            }
        })
        return (
            <Transition
                in={menuOpen}
                timeout={300}
                animation="in-top"
            >
                <ul className={subMenuClasses}>
                    {childrenComponent}
                </ul>
            </Transition>
        )
    }

    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title" {...clickEvents}>
                {title}
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu

