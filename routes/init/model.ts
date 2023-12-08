import { LlamaContext, LlamaModel, LlamaChatSession } from 'node-llama-cpp'

const DEFAULT_MODEL_PATH = process.env.MODEL_PATH
export let session: LlamaChatSession | null = null
export let context: LlamaContext | null = null
export let model: LlamaModel | null = null

export function loadModel(modelPath?: string) {
  if (session?.initialized) return

  model = new LlamaModel({ modelPath: modelPath || DEFAULT_MODEL_PATH })
  context = new LlamaContext({ model, threads: 1 })
  session = new LlamaChatSession({ context })

  return session
}

export function useSession() {
  if (!session) loadModel()
  return {
    session,
  }
}

export function unLoadModel() {}
