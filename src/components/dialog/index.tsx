import * as React from 'react';
import classNames from 'classnames';
import { IDialogPropTypes } from './IDialogPropTypes'

// 让 IDialogChildProps 继承 IDiaglogPropsTypes的属性，并添加了2个属性
export interface IDialogChildProps extends IDialogPropTypes {
    getOpenCount: () => number;  
    switchScrollingEffect?: () => void; //切换滚动Effect的效果

}

// Dialog 组件函数
export default function Dialog(props: IDialogChildProps) {
    // 将属性都存储变量
    const { 
        prefixCls = 'dialog',
        zIndex,
        visible = false,
        keyboard = true, //esc关闭
        focusTriggerAfterClose = true, //聚焦后触发关闭
        switchScrollingEffect = () => {}, // 切换滚动Effect钩子属性

        // Wrapper
        title,
        onClose,
        afterClose, //关闭之后调的函数，比如同时做另外一件事情

        // Dialog
        transitionName, // 过渡名
        animation, 
        closable = true,

        //Mask
        mask = true,
        maskTransitionName,
        maskClosable = true,
        maskStyle,

    } = props

    const [visibleState, setVisibleState] = React.useState(visible);

}