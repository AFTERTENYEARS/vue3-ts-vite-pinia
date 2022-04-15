import { reactive } from "vue"

export default () => {
    const state = reactive({
        name: '吴彦祖'
    })

    const updateName = () => {
        state.name = state.name === '吴彦祖' ? '彭于晏' : '吴彦祖'
    }

    const func = { updateName }

    return {
        state, func
    }
}