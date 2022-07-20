import type { Type } from './type'
export const IN_LINE_BOX: string[] = ['min-width:380px', 'padding:10px 20px', 'background:#f0f9eb', 'display:inline-block', 'margin:auto', 'color:#67c23a', 'fontSize:14px', 'borderRadius:5px', 'border:1px solid']
export const MESSAGE_BOX: string[] = ['position:fixed', 'top:0px', 'width:100%', 'display:flex', 'flexDirection:center', 'transition:all .2s']
export function computeTypeStyle(type: Type): string[] {
  switch (type) {
    case 'error':
      return ['background:#F3F0F0', 'color:#F56C6C']
    case 'warning':
      return ['background:#FDF6EC', 'color:#E6A23C']
    case 'info':
      return ['background:#F4F4F5', 'color:#909399']
    default:
      return ['background:#f0f9eb', 'color:#67c23a']
  }
}
