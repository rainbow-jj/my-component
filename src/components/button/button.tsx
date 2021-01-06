import {FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react';
import * as React from 'react';
import classNames from 'classnames';
 
export type ButtonSize = 'lg' | 'mle' |'sm' 
export type ButtonType = 'primary' | 'default' | 'ghost' | 'link' | 'dashed' | 'danger'
export type ButtonShape = 'circle' | 'round'
export type ButtonHTMLType = 'submit'| 'button' | 'reset'
export type IconType = 'icon-xiazai3' | 'icon-icon-'

export interface BaseButtonProps {
    className?: string ; 
    btnType?: ButtonType;
    shape?: ButtonShape ;
    size?: ButtonSize;
    disabled?: boolean; // 设置button的禁用
    block?: boolean;
    ghost?: boolean;
    href?: string;
    icon?: IconType;
    children:React.ReactNode;

}
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

export const Button: FC<ButtonProps> = (props) => {
// export const Button = (props: ButtonProps) => {
    const {
        btnType,
        className,
        disabled,
        size,
        shape,
        children,
        href,
        icon,
        ...rest

    } = props
    const classes = classNames('btn iconfont', className, 
    {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        [`btn-${shape}`]: shape,
        [`${icon}`]:icon,
        'disabled': (btnType === 'link') && disabled

    })
    console.log('icon',icon)
    // 如果是 是否 是link  
    if (btnType === 'link' && href) {
        return (
           <a 
            className={classes}
            {...rest}
            href={href}
           >{children}</a>
        )
    } else {
        
        return (
        <button
            className={classes}
            disabled={disabled}
            {...rest}
        >{children}</button>
        )
    }
    
}

Button.defaultProps = {
    disabled: false,
    // btnType: 'default',
}

export default Button;