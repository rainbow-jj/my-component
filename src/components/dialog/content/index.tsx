import * as React from 'react';
import classNames from  'classnames';
import { useRef } from 'react';
import { IDialogChildProps } from '../index';
import { offset } from '../../_util/dialogMotion'

const sentinelStyle = { width: 0, height: 0, overflow: 'hidden', outline: 'none'};

export interface ContentProps extends IDialogChildProps {
    motionName: string; 
    ariaId: string; // 
    onVisibleChange: (Visible: boolean) => void; 
    onMouseDown: React.MouseEventHandler;
    onMouseUp: React.MouseEventHandler;

}

export interface ContentRef {
    focus: () => void;
    changeActive: (next: boolean) => void;
}

const Content = React.forwardRef<ContentRef, ContentProps>((props, ref) => {
    // content组件需要的属性储存变量
    const {
        closable,
        prefixCls,
        width,
        height,
        footer,
        title,
        ariaId,
        closeIcon,
        style,
        bodyStyle,
        className,
        visible,
        bodyProps,
        children,
        destroyOnClose,
        onClose,
        onVisibleChange,
        onMouseDown,
        onMouseUp,
        mousePosition,
    } = props;

    const sentinelStartRef = useRef<HTMLDivElement>();
    const sentinelEndRef = useRef<HTMLDivElement>();
    const  dialogRef = useRef<HTMLDivElement>();

    // ========Ref=========
    React.useImperativeHandle(ref, () => ({
        focus: () => {
            sentinelStartRef.current?.focus();
        },
        changeActive: (next) => {
            const { activeElement } = document;
            if (next && activeElement === sentinelEndRef.current) {
                sentinelStartRef.current.focus();
            } else if (!next && activeElement === sentinelStartRef.current) {
                sentinelEndRef.current.focus();
            }
        },
    }));

    // ==========style==========
    const [ transformOrigin, setTransformOrigin] = React.useState<string>();
    const contentStyle: React.CSSProperties = {};
    if (width !== undefined) {
        contentStyle.width = width;
    }
    if (height !== undefined) {
        contentStyle.height = height;
    }
    if (transformOrigin) {
        contentStyle.transformOrigin = transformOrigin;
    }

    function onPrepare() {
        // 元素的偏移量的变量
        const elementOffset = offset(dialogRef.current);

        // 鼠标的位置 
        setTransformOrigin(
            // 鼠标x轴减去屏幕到左边的距离
            mousePosition ？`${mousePosition.x - elementOffset.left}px ${mousePosition.y - elementOffset.top}px` : '',
        )
    }

    // render
    let headerNode: React.ReactNode;
    if (title) {
        headerNode = (
            <div className={`${prefixCls}-header`}>
                <div className={`${prefixCls}-title`} id={ariaId}>{title}</div>
            </div>
        )
    }

    let footerNode: React.ReactNode;
    if (footer) {
        footerNode = (
            <div className={`${prefixCls}-footer`}>{ footer }</div>
        )
    }

    let closer: React.ReactNode;
    if (closable) {
        closer = (
            <button type="button" onClick={onClose} aria-label="Close" className={`${prefixCls}-close`}>
                {closeIcon || <span className={`${prefixCls}-close-x`}/>}
            </button>
        )
    }

    const content = (
        <div className={`${prefixCls}-content`}>
            {closer}
            {headerNode}
            <div className={`${prefixCls}-body`} style={bodyStyle} {...bodyProps}>
                {children}
            </div>
            {footerNode}
        </div>
    )

    return (
        
        <CSSMotion>
            {() => ()}
        </CSSMotion>
    )

})

export default Content;
 