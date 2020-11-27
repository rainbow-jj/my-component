import {FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react';
import * as React from 'react';
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'sm' 
export type ButtonType = 'primary' | 'default' | 'ghost' | 'link' | 'dashed'
export type ButtonShape = 'circle' | 'round'
export type ButtonHTMLType = 'submit'| 'button' | 'reset'

export interface BaseButtonProps {
    className?: string; 
    type?: ButtonType;
    size?: ButtonSize;
    disabled?: boolean; // 设置button的禁用
    danger?: boolean;
    block?: boolean;
    ghost?: boolean;
    href?: string;
    children:React.ReactNode;

}
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

export const Button:FC<ButtonProps> = (props) => {
    const {
        type,
        className,
        disabled,
        size,
        children,
        href,
        ...rest

    } = props
    const classes = classNames('btn', className, 
    {
        [`btn-${type}`]: type,
        [`btn-${size}`]: size,
        'disabled': (type === 'link') && disabled
    })
    if (type === 'link' && href) {
        return (
           <a 
            className={classes}
            disabled={disabled}
            href={href}
           >{children}</a>
        )
    }

}

Button.defaultProps = {
    disabled: false,
    type: 'default'
}

export default Button;