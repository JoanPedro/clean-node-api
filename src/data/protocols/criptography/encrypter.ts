export interface Encrypter {
  secret?: string
  encrypt: (value: string) => Promise<string>
}
