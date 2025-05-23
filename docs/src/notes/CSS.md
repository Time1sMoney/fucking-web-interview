# CSS

## CSS3引入了哪些主要的特性？

- 新的选择器：属性选择器，伪类选择器。
- box-shadow、border-radius、border-image
- background-clip
- transition
- transform
- animation
- linear-gradient

## 解释下物理像素、逻辑像素、像素密度的区别？为什么移动端开发中需要@2x,@3x等图片？

**物理像素**： 显示器屏幕实际上是由N个小方块构成，每个小方块只能显示一种颜色，而不同设备的屏幕它的小方块大小是不同的，这种小方块就是一个物理像素点。它不是固定的大小。

**逻辑像素**： 逻辑像素就是在软件层面用来表达尺寸的抽象像素单位，例如px，dp等,逻辑像素的作用是为了让开发者在不同屏幕尺寸和分辨率上能够更方便地布局和定位元素，从而实现屏幕显示的统一和可伸缩性。

**像素密度**： 表示在特定区域内物理像素的数量，通常用“ppi”（每英寸像素数）或“dpi”（每英寸点数）来表示。高像素密度意味着在相同物理尺寸的屏幕上显示更多的像素，因此图像和文本更加清晰。

::: tip
像素比（DPR）= 物理像素/逻辑像素
:::

在移动端开发中，由于不同设备具有不同的像素密度，为了确保图片在不同设备上都能够以高清晰度显示，需要提供多个版本的图片。通常会提供1倍、2倍甚至3倍像素密度的图片。

@2x图：这是为高像素密度屏幕准备的图像，它的尺寸是标准尺寸的两倍。在显示时，这些图像会以更高的分辨率显示，使得图片更加清晰。
@3x图：这是为超高像素密度屏幕准备的图像，尺寸是标准尺寸的三倍。它们会在分辨率较高的屏幕上显示清晰度更高的图像。

通过使用多倍像素密度的图片，可以确保在不同分辨率和像素密度的设备上都能够呈现出高质量的图像和UI元素，提升用户体验。

## CSS中如何画出粗细为0.5px的线？

在常规的屏幕和打印场景中，CSS中是无法直接使用0.5像素粗细的线的，因为通常情况下屏幕无法显示半个像素，而打印时的分辨率也很难表达出0.5像素的线条。但是可以通过transform来模拟看起来0.5px的线,这个方法在某些情况下可以产生视觉上的效果，实际上仍然是使用整数像素来显示。

```css
.solid {
  position: relative;
  height: 1px;
  background-color: red;
}
.solid::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #000;
  transform: scaleY(0.5);
}
```

## 什么是1px问题？如何在前端开发中解决它？

1px问题是指在一些移动端设备上页面的1px会变得很粗，呈现不止1px的效果。

原因： CSS中的px和实际的物理像素是不能划等号的，浏览器中可以通过window.devicePixelRatio获取当前设备的DPR

解决方案：

1. 直接写0.5px。IOS需要8以上版本，安卓不兼容。
2. 伪元素先放大后缩小。实现如问题3代码所示。
3. 使用viewport。整个页面被缩放，这时1px已经被处理成物理像素大小，但文字、图片等也被无差别缩小了。

```html
<meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no">

```

## 什么是块级作用域上下文(BFC)?如何创建它？

::: details MDN
区块格式化上下文（Block Formatting Context，BFC）是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
:::

BFC是一种特殊的上下文环境。当一个元素创建BFC后，就具备了一个完全独立的环境。BFC会影响当前元素和内部元素的布局表现，但不会影响跟外部元素之间的布局关系。

创建BFC的方式：

1. 文档的根元素（html）。
2. 浮动元素（即 float 值不为 `none` 的元素）。
3. 绝对定位元素（position 值为 `absolute` 或 `fixed` 的元素）。
4. 行内块元素（display 值为 `inline-block` 的元素）。
5. 表格单元格（display 值为 `table-cell`，HTML 表格单元格默认值）。
6. 表格标题（display 值为 `table-caption`，HTML 表格标题默认值）。
7. 匿名表格单元格元素（display 值为 `table`（HTML 表格默认值）、`table-row`（表格行默认值）、`table-row-group`（表格体默认值）、`table-header-group`（表格头部默认值）、`table-footer-group`（表格尾部默认值）或 `inline-table`）。
8. overflow 值不为 `visible` 或 `clip` 的块级元素。
9. display 值为 `flow-root` 的元素。
10. contain 值为 `layout`、`content` 或 `paint` 的元素。
11. 弹性元素（display值为`flex`或`inline-flex` 元素的直接子元素），如果它们本身既不是弹性、网格也不是表格容器。
12. 网格元素（display值为`grid`或`inline-grid` 元素的直接子元素），如果它们本身既不是弹性、网格也不是表格容器。
13. 多列容器（column-count或column-width值不为 `auto`，且含有 `column-count: 1` 的元素）。
14. column-span 值为`all` 的元素始终会创建一个新的格式化上下文，即使该元素没有包裹在一个多列容器中。

## 开发中BFC的应用场景？

常见的BFC应用场景： 清除浮动影响，防止外边距折叠。

消除浮动： 在flex布局流行之前很多布局都是使用浮动实现，而浮动的特性却带来了一个问题，就是浮动元素的高度会被父元素忽略，导致浮动元素无法正确地被包含在父元素内部，并且如果浮动元素的兄弟元素是文本节点会出现文本环绕的效果，但有的时候我们并不想要这种效果。通过给父元素设置`overflow:auto`就创建了BFC来消除这些意外的效果。

外边距折叠： 当两个相邻的块级元素同时设置了外边距时，此时它们之间的实际外边距是两者外边距中的最大值，这是反直觉的。

```css
.div1 {
  margin-bottom: 10px
}

.div2 {
  margin-top: 20px
}
```

如果不创建BFC，那么div1和div2之间的边距就是20px，而我们正常需要的是30px，通过给父元素设置`overflow:auto`可以达到预期效果。

## CSS选择器的优先级是怎么样的？

CSS选择器的优先级是根据选择器的特定性（specificity）来确定的，通常用一个四位数表示，其中每个部分的权重从高到低排列依次是：千位数表示内联样式（Inline styles），百位数表示ID选择器，十位数表示类选择器、属性选择器或伪类，个位数表示元素选择器或伪元素。

具体来说，优先级高的选择器会覆盖优先级低的选择器，如果两个选择器的优先级相同，则后面出现的规则会覆盖前面的规则。

具体权重如下：

- 内联样式：1000
- ID选择器：100
- 类选择器、属性选择器、伪类：10
- 元素选择器、伪元素：1

如果有多个选择器应用到同一个元素上，CSS会根据这些选择器的特定性来确定最终生效的样式。通常情况下，选择器的特定性越高，其样式优先级越高，越有可能覆盖其他选择器的样式。

## @import和link标签都是加载CSS的，它们有什么区别？

1. 加载CSS方式差异。@import是CSS方式，link是HTML的方式。
2. 兼容性差异。@import是CSS2.1才有的语法，某些浏览器可能不兼容，而link标签不存在兼容性问题。
3. 加载顺序差异。link是并行加载，在HTML解析时遇到link时不会被阻塞，而@import是串行加载，只能在CSS文件顶部使用，并且如果引用过多会导致文档样式短暂失效（FOUC）。
4. 功能性差异。@import只能用来加载CSS，而link除了加载CSS文件外还可以定义RSS,rel连接属性等等。

总结： link优于@import

## 原子化CSS和使用普通的CSS有什么区别？它有哪些优势和缺点？

**原子化CSS**：

1. 样式属性被拆分为最小的单元，每个类名只包含一个样式属性。
2. 通过组合不同的类名来实现样式组合，实现样式复用。
3. 类名通常具有语义化，如"bg-red"表示背景色为红色。

**普通CSS**：

1. 样式属性通常组合在一起，一个类名可能包含多个样式属性。
2. 样式定义更为灵活，可以直接在类名中定义多个属性。
3. 类名可能不那么具有语义化，如"button-style"表示按钮样式，可能包含多个属性。

**原子化CSS优势**：

1. 提供了更高程度的样式复用，可以通过组合类名快速实现各种样式组合。
2. 可以减少样式冗余，避免重复定义类似的样式。
3. 更易于维护和扩展，因为样式被拆分为原子级别，修改和组合更加灵活。

**原子化CSS缺点**：

1. 可能会导致HTML中出现大量类名，使得HTML结构变得臃肿。
2. 可能会牺牲一定的可读性，因为类名通常更加具有技术性，不太直观。

## 讲讲盒子模型？

当对一个文档进行布局（layout）的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子（box）,一个盒子由四个部分组成：content、padding、border、margin。

- 标准盒子模型（W3C）:

盒子总宽度 = width + padding + border + margin

盒子总高度 = height + padding + border + margin

即： **width/height**是实际内容的宽高。

```css
.box {
  box-sizing: content-box;
  width: 100px;
  height: 100px;
  border: 10px solid red;
  padding: 10px;
  margin: 10px;
}
```

`.box`这个盒子的实际在界面中是一个宽160,高160的正方形。

- IE怪异盒子模型：

盒子总宽度 = width + margin

盒子总高度 = height + margin

即： **width/height**包含了padding和border。

```css
.box {
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border: 10px solid red;
  padding: 10px;
  margin: 10px;
}
```

`.box`这个盒子的实际在界面中是一个宽120,高120的正方形。

浏览器一般**默认盒子为标准盒子模型**，可以通过设置`box-sizing`来切换。

```css
box-sizing: content-box|border-box|inherit
```
