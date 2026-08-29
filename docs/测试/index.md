---
title: 测试
layout: doc
outline: [1,6]
# navbar: false
# sidebar: false
editLink: false
---

# 测试

## 内容块类型简述

鼠标悬浮在内容块上左侧会出现该内容块对应的图标。

|标识|类型|元类型[^1]|
| --------------------------------------------------------------------------------------------| ------------| ----------|
|​​​​![paragraph-block](assets/paragraph-block-20260425165426-oay2mn8.png)|段落块|叶子块|
|​​​​![heading-block](assets/heading-block-20260425165426-u0noubu.png)|标题块|叶子块|
|​​​​![formula-block](assets/formula-block-20260425165426-wompa7r.png)|数学公式块|叶子块|
|​​​​![code-block](assets/code-block-20260425165426-coms7xv.png)|代码块|叶子块|
|​​​​![table-block](assets/table-block-20260425165426-knfl9o2.png)|表格块|叶子块|
|​​​​![embed-block](assets/embed-block-20260425165426-1m1ufx0.png)|嵌入块|叶子块|
|​​​​![html-block](assets/html-block-20260425165426-qje2gkf.png)|HTML 块|叶子块|
|​​​​![database-block](assets/database-block-20260425165426-vgzt70f.png)|数据库块|叶子块|
|​​​​![unordered-list-block](assets/unordered-list-block-20260425165426-nr12e3p.png)|无序列表块|容器块|
|​​​​![ordered-list-block](assets/ordered-list-block-20260425165426-xju1xnf.png)|有序列表块|容器块|
|​​​​![task-list-block](assets/task-list-block-20260425165426-641pl4h.png)|任务列表块|容器块|
|​​​​![listitem-block](assets/listitem-block-20260425175517-4uac18s.png)|列表项块|容器块|
|​​​​![blockquote-block](assets/blockquote-block-20260425165426-hdgswh2.png)|引述块|容器块|
|​​​​![callout-block](assets/callout-block-20260425165426-n22bky2.png)|提示块|容器块|
|​​​​![super-block](assets/super-block-20260425165426-ae8e5uq.png)|超级块|容器块|
|​​​​![doc-block](assets/doc-block-20260425165426-b4lweek.png)|文档块|容器块|

## 内容块类型详解

下面我们分别介绍一下这些内容块类型的细节。#内容块/类型#

### 段落块

这里是一个示例段落。

在一个段落后直接 <kbd>回车</kbd> 会形成新的段落。

### 标题块

以上就是标题块，支持一级到六级。

#注意#：

不建议在正文中使用一级标题，建议使用二级标题作为顶层标题，这样在开启了 <kbd>设置</kbd>​ - <kbd>导出</kbd>​ - <kbd>添加文档标题</kbd>  后，整体的标题层级在导出时才符合正常逻辑。

### 数学公式块

$$
a^2 + b^2 = c^2
$$

### 代码块

```js
function hello() {}
```

### 表格块

|列一|列二|
| ----------| ----------|
|行一列一|行一列二|
|行二列一|行二列二|

如果需要在表格块中使用 `|`​ ，请使用 `\`​ 转义，即需要输入 `\|`。

如果需要在单元格中换行，请使用 <kbd>Shift</kbd>​+<kbd>回车</kbd>。

如果表格包含合并的单元格或标题，则会以 HTML 形式复制或导出为 Markdown。

### 嵌入块

请参考嵌入内容块[^2]。

### HTML 块

<ruby>
你<rt>nǐ</rt>
　好<rt>　hǎo</rt>
　世<rt>　shì</rt>
　界<rt>　jiè</rt>
</ruby><br>
Hello World

#注意#：

- 使用 HTML 块时默认会对其中的代码进行安全过滤，如果不需要过滤，请开启 <kbd>设置</kbd>​ - <kbd>编辑器</kbd>​ - <kbd>允许执行 HTML 内容中的脚本</kbd>，但请确认代码安全后再开启，以免遭遇跨站脚本攻击（XSS）
- 因为 Markdown 规范对 HTML 块解析规则较为复杂，建议使用 `<div></div>` 包裹 HTML 代码并去掉空行

### 数据库块

<div data-type="NodeAttributeView" data-av-id="20251230141609-2kvghrg" data-av-type="table"></div>

如果需要在单元格中换行，请使用 <kbd>Shift</kbd>​+<kbd>回车</kbd>。

### 无序列表块

- 列表项一
- 列表项二

无序列表块是一种容器块[^1]。

无序列表块只能包含列表项块，相邻的无序列表块间距较大。

### 有序列表块

1. 列表项一
2. 列表项二

有序列表块是一种容器块[^1]。

有序列表块只能包含列表项块，相邻的有序列表块间距较大。

### 任务列表块

- [X] 待办一
- [ ] 待办二

任务列表块是一种容器块[^1]。

任务列表块只能包含列表项块，相邻的任务列表块间距较大。

### 列表项块

通过列表项块可以实现大纲式笔记的基本用法，列表项块是一种容器块[^1]。

列表项块被包含在列表块内，相邻的列表项块间距较小。

如果需要在列表项中换行，请使用 <kbd>Shift</kbd>​+<kbd>回车</kbd>。

列表项可以在列表之间移动。

### 引述块

> 注意不是内容块引用，而是引述块（Blockquote）。

引述块是一种容器块[^1]。

### 提示块

> [!IMPORTANT]
> 醒目的提示！

提示块是一种容器块[^1]。

### 超级块

超级块是一种容器块[^1]。可用于组合文档内连续的内容块，也用于支持横向排版。

### 文档块

整个文档是一个块，文档块是一种容器块[^1]。

## 内容块元类型

内容块在逻辑上分为叶子块和容器块，叶子块不能包含其他块，容器块可以包含其他块：

- 列表块：只能包含列表项块
- 列表项块：可以包含任意非文档块
- 引述块：可以包含任意非文档块
- 提示块：可以包含任意非文档块
- 超级块：可以包含任意非文档块
- 文档块：可以包含任意非文档块
