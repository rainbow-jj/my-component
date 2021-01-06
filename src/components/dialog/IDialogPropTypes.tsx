// 定义好需要的 DialogPropTyes属性A
import { ReactNode, CSSProperties, SyntheticEvent } from 'react';

export interface IDialogPropTypes {
    className?: string;
    keyboard?: boolean;
    style?:CSSProperties;
    mask?: boolean;
    children?: any;
    afterClose?: () => any;
    onClose?: (e: SyntheticEvent) => any;
    closable?: boolean;
    visible?: boolean;
    destroyOnClose?: boolean; //在onClose上卸载子组件
    maskClosable?: boolean;
    mousePosition?: {
        x: number;
        y: number;
    } //设置当前鼠标的pageX和pageY（这将导致设置变换原点）。
    title?: ReactNode;
    footer?: ReactNode;
    transitionName?: string;
    maskTransitionName?: string;
    animation?: any;
    maskanimation?: any; 
    maskStyle?: {}; //遮罩元素的样式
    bodyStyle?: {}; // 对话框主体元素的主体样式，比如高度
    bodyProps?: any;
    prefixCls?: string;
    width?: number;
    height?: number;
    zIndex?: number;
    closeIcon?: any;
    modalRender?: (node: ReactNode) => ReactNode; //自定义模态内容渲染
    focusTriggerAfterClose?: boolean;
}