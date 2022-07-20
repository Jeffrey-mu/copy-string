# copy-str
- Copy text using JavaScript
## Install
```shell
pnpm install --save copy-str
```

## Usage example

```vue
<script setip>
import copy from 'copy-str'
</script>

<template>
  <button class="container" onclick="copy('data')">
    copy
  </button>
</template>

```
### argment

```ts
copy(data: string /*复制内容*/, options: Options /*可选参数*/): boolean
export type Type = 'success' | 'error' | 'warning' | 'info'
export interface Options {
  type: Type              // 弹窗样式
  showMessage?: boolean   // 是否显示弹窗
  duration?: number       // 出现时长
  message?: string        // 弹窗内文字
  offset?: number         // 弹窗距离顶部
  center?: boolean        // 文字居中
  showData?: boolean      // 显示复制内容
}
```
## License

[MIT](./LICENSE) License © 2022 [Jeffrey](https://github.com/Jeffrey-mu)
