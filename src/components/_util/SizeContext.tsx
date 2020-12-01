// 定义了 size的函数并渲染子元素
import * as React from 'react';

export type SizeType = 'small' | 'middle' | 'large' | undefined;

// React.createContext 的返回值 当前的context值由上层组件中距离最近的 <SizeContext.Provider> 的value prop决定
const SizeContext = React.createContext<SizeType>(undefined);

export interface SizeContextProps {
    size ?: SizeType;
}

export const SizeContextProvider: React.FC<SizeContextProps> = ({ children, size }) => (
    <SizeContext.Consumer>  
        { originSize => (
            <SizeContext.Provider value={ size || originSize }>{children}</SizeContext.Provider>
            )
        }
    </SizeContext.Consumer>
) // React.FC 为 typescript使用的泛型, Context.Consumer 基于 context 值进行渲染 ，
// 需要一个函数originSize作为 子元素 ，接收当前context 值，返回一个react 节点

export default SizeContext;