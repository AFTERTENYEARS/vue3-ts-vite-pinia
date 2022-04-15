/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent, readonly } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}


interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL: string,
  readonly NODE_ENV: string,
  // 更多环境变量...
}
