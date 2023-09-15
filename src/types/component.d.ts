/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import LzdGuess from '@/components/LzdGuess.vue'
declare module 'vue' {
  export interface GlobalComponents {
    LzdSwiper: typeof LzdSwiper
    LzdGuess: typeof LzdGuess
  }
}

// 组件实例类型
export type LzdGuessInstance = InstanceType<typeof LzdGuess>
