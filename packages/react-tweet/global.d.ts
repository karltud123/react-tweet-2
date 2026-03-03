import 'react'
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module 'react' {
  interface VideoHTMLAttributes<HTMLVideoElement> {
    referrerPolicy?: string
  }
}
