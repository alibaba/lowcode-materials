import { ReactFlowInstance, Node, Edge } from 'reactflow'

interface HistoryCommand {
  nodes: Node[]
  edges: Edge[]
}

export class History {
  private enabled: boolean
  private undoStack: HistoryCommand[]
  private redoStack: HistoryCommand[]
  private stackSize: number
  private reactFlowInstance: ReactFlowInstance

  constructor(reactFlowInstance: ReactFlowInstance, stackSize: number = 50) {
    this.enabled = true
    this.undoStack = []
    this.redoStack = []
    this.stackSize = stackSize
    this.reactFlowInstance = reactFlowInstance
  }

  isEnabled() {
    return this.enabled
  }

  enable() {
    this.enabled = true
  }

  disable() {
    this.enabled = false
  }

  toggleEnabled(enabled?: boolean) {
    if (enabled !== undefined) {
      this.enabled = enabled
    } else {
      this.enabled = !this.enabled
    }
  }

  undo() {
    if (this.canUndo()) {
      const lastState = this.undoStack.pop()
      if (lastState) {
        this.redoStack.push({
          nodes: this.reactFlowInstance.getNodes(),
          edges: this.reactFlowInstance.getEdges(),
        })
        this.reactFlowInstance.setNodes(lastState.nodes)
        this.reactFlowInstance.setEdges(lastState.edges)
      }
    }
  }

  redo() {
    if (this.canRedo()) {
      const nextState = this.redoStack.pop()
      if (nextState) {
        this.undoStack.push({
          nodes: this.reactFlowInstance.getNodes(),
          edges: this.reactFlowInstance.getEdges(),
        })
        this.reactFlowInstance.setNodes(nextState.nodes)
        this.reactFlowInstance.setEdges(nextState.edges)
      }
    }
  }

  canUndo() {
    return this.undoStack.length > 0
  }

  canRedo() {
    return this.redoStack.length > 0
  }

  clean() {
    this.undoStack = []
    this.redoStack = []
  }

  getSize() {
    return this.stackSize
  }

  getUndoRemainSize() {
    return this.stackSize - this.undoStack.length
  }

  getUndoSize() {
    return this.undoStack.length
  }

  getRedoSize() {
    return this.redoStack.length
  }

  pushState() {
    if (this.enabled) {
      if (this.stackSize !== 0 && this.undoStack.length >= this.stackSize) {
        this.undoStack.shift()
      }
      this.undoStack.push({
        nodes: this.reactFlowInstance.getNodes(),
        edges: this.reactFlowInstance.getEdges(),
      })
      this.redoStack = []
    }
  }
}