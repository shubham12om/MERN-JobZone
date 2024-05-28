import mongoose from 'mongoose'

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: 'MERN_JOBZONE_WEBAPP',
    })
    .then(() => {
      console.log('connected to database.')
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`)
    })
}
