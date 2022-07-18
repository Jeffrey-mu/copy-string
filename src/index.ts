import type { Options } from './type'
import Message from './Message'
export default function copy(data: string, options = {} as Options): boolean {
  if (data) {
    const input = document.createElement('input')
    const body = document.querySelector('body') as HTMLBodyElement
    input.value = data
    body.appendChild(input)
    input.select()
    document.execCommand('Copy')
    body.removeChild(input)
    !options.showMessage && Message({
      message: options.message || '复制成功',
      duration: options.duration || 3000,
      center: options.center,

    })
    return true
  }
  else {
    return false
  }
}
