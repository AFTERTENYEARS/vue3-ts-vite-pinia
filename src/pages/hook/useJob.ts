import { onMounted, reactive } from "vue"

export default () => {
    const state = reactive({
        job: '司机'
    })

    onMounted(() => {
        console.log('job-onMounted...');
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