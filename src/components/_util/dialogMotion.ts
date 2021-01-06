export function getMotionName(prefixCls: string, transitionName?: string, animationName?: string) {
    let motionName = transitionName;
    if (!motionName && animationName) {
        motionName = `${prefixCls}-${animationName}`;
    } 
    return motionName;
}

let uuid = -1;
export function getUUID() {
    uuid += 1;
    return uuid
}

// 滚动事件
function getScorll(w: Window, top?: boolean): number {
    // pageXOffset 和 pageYOffset 属性相等于 scrollX 和 scrollY 属性。
    let ret = w[`page${top ? 'Y' : 'X'}Offset`];
    const method = `scroll${top ? 'Top' : 'Left'}`;
    if (typeof ret !== 'number') {
        const d = w.document;
        ret = d.documentElement[method];
        // document.documentElement.scrollLeft 水平滚动条的实际位置
        // document.documentElement.scrollTop 垂直滚动条的实际位置
        if ( typeof ret !== 'number') {
            ret = d.body[method];
        }
    }
    return ret;
};

interface CompatibleDocument extends Document {
    parentWindow?: Window;
}
// 元素在页面上相对文档的偏移offset
export function offset(el: Element) {
    // getBoundingClientRect 返回一个矩形对象，包含四个属性：left\top\right\bottom 分别表示元素各边与页面上边和左边的距离
    const rect = el.getBoundingClientRect()
    const pos = {
        left: rect.left, //元素左边距离页面左边的距离
        top: rect.top, // 元素上边距离页面上边的距离
    }
    // ownerDocument 返回某元素的根元素
    const doc = el.ownerDocument as CompatibleDocument;
    // document.defaultView 在浏览器中，该属性返回当前 document 对象所关联的 window对象，如果没有返回null
    const w = doc.defaultView || doc.parentWindow;
    pos.left += getScorll(w);
    pos.top += getScorll(w, true);
    return pos;
}