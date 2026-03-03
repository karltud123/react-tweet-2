import 'react'

declare module 'react' {
  interface VideoHTMLAttributes<T extends HTMLVideoElement> {
    referrerPolicy?: string
  }
}
