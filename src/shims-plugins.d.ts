import Vue from 'vue'
import { AxiosInstance } from 'axios'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
    $evt: {
      $emit: (event: string, data: any) => void,
      $on: (event: string, fun: Function) => void
    }
  }
}
