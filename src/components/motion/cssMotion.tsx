import * as React from 'react';
import { useRef } from 'react';
import classNames from 'classnames';


// type CSSMotionConfig = | boolean | { transitionSupport?: boolean; forwardRef?: boolean; }

// MotionName变量 根据MotionName 显示样式效果
type MotionName = 
    | string 
    | { 
        appear?: string;
        enter?: string;
        leave?: string;
        appearActive?: string;
        enterActive?: string;
        leaveActive?: string;
        };

// 所有的CSSMotionProps属性接口
export interface CSSMotionProps {
    motionName?: MotionName;
    visible?: boolean;
    motionAppear?: boolean;
    motionEnter?: boolean;
    motionLeave?: boolean;
    /**
     * Create element in view even the element is invisible.
     * Will patch `display: none` style on it.
     */
    forceRender?: boolean;
    removeOnleave?: boolean;
    leavedClassName?: string;

    // Special
    /** This will always trigger after final visible changed. Even if no motion configured. */
    onVisibleChanged?: (visible: boolean) => void;

    // 内标准
    internalRef?: React.Ref<any>;

    children?: (
        props: {
            visible?: boolean;
            className?: string;
            style?: React.CSSProperties;
            [key: string]: any;
        },
        ref: (node: any) => void,
    ) => React.ReactElement;
}

// CSSMotionState
export interface CSSMotionState {
    status?: MotionStatus;
    statusActive?: boolean;
    newStatus?: boolean;
    statusStyle?: React.CSSProperties;
    prevProps?: CSSMotionProps;
}


const CSSMotion = React.forwardRef<any, CSSMotionProps> ((props, ref) => {
    const {
        // Default
        visible = true,
        removeOnleave = true,
         
        forceRender,
        children,
        motionName,
        leavedClassName,
        
    } = props;

    // Ref to the react node, it may be a HTMLElement
    const nodeRef = useRef();
    // Ref to the dom wrapper in case ref can not pass to HTMLElement
    const wrapperNodeRef = useRef();

    

})


export default CSSMotion;
