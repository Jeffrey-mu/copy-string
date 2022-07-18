# copy-str
## Install
```shell
pnpm install --save copy-str
```

## Use

```vue
<template>
  <button class="container" onclick="copy('data')">copy</button>
</template>
<script setip>
import copy from "copy-str";
</script>

```
### 参数

```ts
copy(data: string /*复制内容*/, options: Options /*可选参数*/)
export interface Options {
  showMessage?: boolean   // 是否显示弹窗
  duration?: number       // 出现时长
  message?: string        // 弹窗内文字
  offset?: number         // 弹窗距离顶部
  center?: boolean        // 文字居中
  showData?: boolean      // 显示复制内容
}
```
## License

[MIT](./LICENSE) License © 2022 [Jeffrey-mu](https://github.com/Jeffrey-mu)
