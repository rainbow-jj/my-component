import {FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react';
import * as React from 'react';
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'sm' 
export type ButtonType = 'primary' | 'default' | 'ghost' | 'link' | 'dashed' | 'danger'
export type ButtonShape = 'circle' | 'round'
export type ButtonHTMLType = 'submit'| 'button' | 'reset'

export interface BaseButtonProps {
    className?: string; 
    btnType?: ButtonType;
    shape?: ButtonShape ;
    size?: ButtonSize;
    disabled?: boolean; // 设置button的禁用
    block?: boolean;
    ghost?: boolean;
    href?: string;
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
        ...rest

    } = props
    const classes = classNames('btn', className, 
    {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        [`btn-${shape}`]: shape,
        'disabled': (btnType === 'link') && disabled

    })
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
    btnType: 'default',
}

export default Button;