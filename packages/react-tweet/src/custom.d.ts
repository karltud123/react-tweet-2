// custom.d.ts or similar declaration file
import 'react'

declare module 'react' {
  interface VideoHTMLAttributes<HTMLVideoElement> {
    referrerPolicy?: string
  }
}
