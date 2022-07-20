import type { Message, RemoveChildOptions } from './type'
import { IN_LINE_BOX, MESSAGE_BOX, computeTypeStyle } from './style'
const map = new Map()
const set = new Set()
export default function Message(data: string, message: Message) {
  if (set.size) {
    set.forEach(key => {
      map.get(key)()
    })
  }
  const FIRST_BODY = document.querySelector('body') as HTMLBodyElement
  const MESSAGE_BOX_El = document.createElement('div')
  const IN_LINE_BOX_EL = document.createElement('p')

  MESSAGE_BOX.forEach((style) => {
    // @ts-ignore
    MESSAGE_BOX_El.style[style.split(':')[0]] = style.split(':')[1]
  })
  MESSAGE_BOX_El.classList.add('copy-string-message-box')
  IN_LINE_BOX.concat(computeTypeStyle(message.type || 'success')).forEach((style) => {
    // @ts-ignore
    IN_LINE_BOX_EL.style[style.split(':')[0]] = style.split(':')[1]
  })
  IN_LINE_BOX_EL.innerText = `${message.message || '复制成功！'} ${message.showData ? data : ''}`
  const time: number = +new Date()
  set.add(time)
  map.set(time, removeChild(FIRST_BODY, MESSAGE_BOX_El, message))
  MESSAGE_BOX_El.appendChild(IN_LINE_BOX_EL)
  FIRST_BODY.appendChild(MESSAGE_BOX_El)
  setTimeout(() => {
    let i = -4
    const time = setInterval(() => {
      i += 2
      MESSAGE_BOX_El.style.top = `${i}px`
      if (i === 30)
        clearInterval(time)
    }, 10)
  })
}

function removeChild(box: HTMLElement, removeEl: HTMLElement, options: RemoveChildOptions) {
  let timeFlag: null | any = null
  timeFlag = setTimeout(remove, options.duration || 2000)
  function remove() {
    box.removeChild(removeEl)
    set.clear()
    map.clear()
    clearTimeout(timeFlag)
    timeFlag = null
  }
  return remove
}
