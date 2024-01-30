
import { ref } from 'vue'

export const useCounter = () => {
    const count = ref(0)

    const counter = () => {
        return count.value++
    }

    return { count, counter }
}