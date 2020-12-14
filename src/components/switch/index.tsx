import * as React from 'react';
import RcSwitch from 'rc-switch';
import classNames from 'classnames';
import devWarning from '../_util/devWarning';
import './switch.less'

// 默认有的属性和方法
export type SwitchSize = 'small' | 'default';
export type SwitchChangeEventHandler = (checked: boolean, event: MouseEvent) => void;  //改变时候的回调函数 有两个参数：选中，鼠标事件
export type SwitchClickEventHandler = SwitchChangeEventHandler;  


// 属性的类型
export interface SwitchProps {
    className?: string;    // 类名
    size?: SwitchSize;     // 开关大小
    checked?:boolean;       // 是否选中
    defaultChecked?:boolean;    // 初始是否选中
    onChange?: SwitchChangeEventHandler;  // 变化时回调函数
    onClick?: SwitchClickEventHandler;   // 点击时回调函数
    disabled?: boolean;            
    autoFocus?: boolean;              //是否自动聚焦
    title?:string;
}

// interface CompoundedComponent
//     extends React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLElement>> {
//         __SWITCH : boolean;
//     }

// 组件
const Switch = React.forwardRef<unknown, SwitchProps>( 
    (
        {
            size,
            className = '',
            disabled,
            ...props
        }, 
        ref,
    ) => {
        
        // 需要的交互
        devWarning(
            'checked' in props || !('value' in props),
            'Switch',
            '`value` is not a valid prop, do you mean `checked`?',
        );
        // const size = React.useContext(SizeContext);
        const classes = classNames('switch', className,
            {
                [`switch-${size}`]:size,
                "disabled": disabled
            }
        );
        return (
            <RcSwitch
                {...props}
                className={classes}
                disabled={disabled}
                ref={ref}
            />
        ) 

    }
);

// Switch.__SWITCH = true
Switch.defaultProps = {
    disabled: false,

}

export default Switch;