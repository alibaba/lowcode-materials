export interface IFile {
  fpath: string
  code: string | Buffer
  entry?: 0 | 1
  packagejson?: 0 | 1
}

export type Code = {
  type: string
  modules: Record<string, IFile>
}

export type CodeSandboxParams = {
  files: Record<string, { isBinary: boolean; content: string }>
  template: string
}
