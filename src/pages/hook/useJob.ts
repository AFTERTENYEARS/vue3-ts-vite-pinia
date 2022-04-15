import { reactive } from "vue"

export default () => {
    const state = reactive({
        job: '司机'
    })

    const updateJob = () => {
        state.job = state.job === '司机' ? '医生' : '司机'
    }

    const func = {
        updateJob
    }

    return {
        state, func
    }
}