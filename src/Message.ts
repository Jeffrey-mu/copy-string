import type { Message, RemoveChildOptions } from './type'
const map = new Map()
const set = new Set()
let timeFlag = null
export default function createMessage(message: Message) {
  if (set.size) {
    set.forEach(key => {
      map.get(key)()
    })
  }
  const body = document.querySelector('body') as HTMLBodyElement
  const Elemt = document.createElement('div')
  const p = document.createElement('p')
  const ElemtStyle: string[] = ['position&fixed', 'top&20px', 'width&100%', `textAlign&${message.center || ''}`, 'display&flex', 'flexDirection&center', 'transition&all .2s']
  ElemtStyle.forEach((style) => {
    // @ts-ignore
    Elemt.style[style.split('&')[0]] = style.split('&')[1]
  })
  Elemt.classList.add('copy-string-message-box')
  const pStyle: string[] = ['min-width&380px', 'padding&10px 20px', 'background&#f0f9eb', 'display&inline-block', 'margin&auto', 'color&#67c23a', 'fontSize&14px', 'borderRadius&5px', 'border&1px solid']
  pStyle.forEach((style) => {
    // @ts-ignore
    p.style[style.split('&')[0]] = style.split('&')[1]
  })
  p.innerText = message.message || '复制成功'
  const time: number = +new Date()
  set.add(time)
  map.set(time, removeChild(body, Elemt, message))
  Elemt.appendChild(p)
  body.appendChild(Elemt)
}

function removeChild(box: HTMLElement, removeEl: HTMLElement, options: RemoveChildOptions) {
  timeFlag = setTimeout(remove, options.duration || 2000)
  function remove() {
    box.removeChild(removeEl)
    set.clear()
    map.clear()
    clearTimeout(timeFlag)
  }
  return remove
}
