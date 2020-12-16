import React, { FC, createContext, CSSProperties, useState } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './menuItem';

// 兼容不同的模式 mode API
type MenuMode = 'horizontal' | 'vertical' | 'inline'
type DirectionType = 'ltr' | 'rtl' | undefined;

// 属性
export interface MenuProps {
    // 默认 active 的菜单项索引值
    defaultIndex?: string;
    className?: string;
    // 菜单类型，横向还是纵向
    mode?: MenuMode;
    direction?: DirectionType;
    // 定义样式
    style?: CSSProperties;
    // 事件，选中的是，selectedIndex下标字符串类型
    onSelect?: (selectedIndex: string) => void;
    // 设置子菜单的默认打开，只在纵向模式下生效
    defaultOpenSubMenus?: string[];
    inlineCollapsed?: boolean;
}

//
interface MenuContextProps {
    index?: string;
    onSelect?: (selectedIndex: string) => void;
    inlineCollapsed?: boolean; 
    direction?: DirectionType;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export const MenuContext = createContext<MenuContextProps>({
    index: '0',
    inlineCollapsed: false
});

export const Menu: FC<MenuProps> = (props) => {
    const { className, mode, style, children, defaultIndex, 
        onSelect, defaultOpenSubMenus, inlineCollapsed, direction } = props

    const [ currentActive, setActive] = useState(defaultIndex)

    const classes = classNames('menu', className, {
        'menu-horizontal': mode === 'horizontal',
        'menu-vertical': mode === 'vertical', 
        'menu-inline': mode === 'inline',
        'menu-ltr': direction === 'ltr',
        'menu-rtl': direction === 'rtl',
        'menu-inline-collapsed': inlineCollapsed,
    })
    
    const handleClick = (index: string) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }

    const contextType: MenuContextProps = {
        index: currentActive ? currentActive : '0', // 设置下标为currentActive, 或者 0
        onSelect: handleClick,
        mode,
        direction,
        defaultOpenSubMenus,
    }

    // 定义子试图
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            // 子元素获取
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            // displayName  Class属性 displayName 字符串多用于调试消息，
            const { displayName } = childElement.type
            // 通过 childElement 的 type来 判断是否是menu组件，是的话根据下标返回一个新的子组件
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: index.toString()
                })
            } else {
                console.log("Warning: Menu has a child which is not a MenuItem component")
            }
        })
    }
    
    return (
        <ul className={classes} style={style} >
            <MenuContext.Provider value={contextType}>{ renderChildren() }</MenuContext.Provider>
        </ul>
    )
}
Menu.defaultProps = {
    defaultIndex: '0',
    mode:'horizontal',
    direction:'ltr',
    defaultOpenSubMenus:[],
}

export default Menu;