import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  connect: async (uri: string): Promise<void> => {
    this.client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  disconnect: async (): Promise<void> => {
    await this.client.close()
  },

  getCollection: (name: string): Collection => {
    return this.client.db().collection(name)
  },

  map: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }
}
