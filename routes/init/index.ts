import { loadModel } from './model'

export default defineEventHandler(() => {
  try {
    loadModel()

    return {
      msg: 'the model is loaded successfully',
    }
  } catch (error) {
    return {
      msg: error,
    }
  }
})
