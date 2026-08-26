import{defineStore,ref} from "pinia"

export const useTestStore = defineStore('counter',()=>{
    const a = ref(0)
    return {counter}

})

