export type Type = 'success' | 'error' | 'warning' | 'info'

export interface Options {
  showMessage?: boolean
  type?: Type
  duration?: number
  message?: string
  offset?: number
  center?: boolean
  showData?: boolean
}
export type Message = Options
export interface RemoveChildOptions {
  duration?: number
}
