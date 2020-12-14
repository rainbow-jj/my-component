import { Menu } from 'antd';
import MenuContext from 'antd/lib/menu/MenuContext';
import React, { Children, useContext } from 'react';
import classNames from 'classnames';

export interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps>  = (props) => {
    const { index, disabled, className, style, children} = props //获取props属性
    const context = useContext(MenuContext) // context 获取 MenuContext 传递的value 值
    const classes = classNames('menu-item', classNames,{
        'disabled' : disabled,
        'active' : context.index === index, //是否是选中的，从父组件的 context属性下的 选中的 Index 得知。
        
    })
    // 单个Item点击后的事件
    const handleClick = () => {
        
    }
    return (
    <li
        className={classes}
        style={style}
        onClick={handleClick}
    >{children}</li>
    )
}

export default MenuItem;