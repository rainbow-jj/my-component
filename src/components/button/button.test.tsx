import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps } from './button'

const defaultProps = {
    // jest.fn 创造一个mock函数
    onClick: jest.fn()
}

const testProps: ButtonProps = {
    btnType: 'primary',
    size: 'lg',
    className: 'klass'
}

const disableProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}

describe('Button', () =>  {
    // 设置默认按钮的 test
    it('should render the correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>Nice</Button>)
        // 使用getByText搜索呈现的虚拟DOM中具有的文本节点并文本内容和给定正则表达式匹配所有元素，
        // 该语法称为解构，从对象中提取方法属性，
        const element = wrapper.getByText('Nice' ) as HTMLButtonElement
        // 执行一个断言
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
        expect(element.disabled).toBeFalsy()
        // element 要触发时间的元素， 通过onclick来触发点击事件
        fireEvent.click(element)
        // 以确保模拟功能能被调用
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    // button 渲染不同属性
    it('should render the correct component based on different props', () => {
        const wrapper = render(<Button {...testProps}>Nice</Button>)
        const element = wrapper.getByText('Nice') // 获取到 Nice的文本
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn-primary btn-lg klass')
    })
    // link 链接
    it('should render a link when btnType equals link and href is provided', () => {
        const wrapper = render(<Button btnType="link" href="http://dummyurl">Link</Button>)
        const element = wrapper.getByText('Link')
        expect(element).toBeInTheDocument()
        // toEqual()检查两个对象有相同的值
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
    })
    // button 为 disabled时， disbaled设置为 true
    it('should render disabled button when disabled set to true', () => {
        const wrapper = render(<Button {...disableProps}>Nice</Button>)
        const element = wrapper.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy() 
        fireEvent.click(element)
        // .not 测试起相反的 不确保模拟功能被调用 toHaveBeenCalled
        expect(disableProps.onClick).not.toHaveBeenCalled()
    })
})