import mongoose from 'mongoose'

const connectdb = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://abhishek41:abhishek41@proshop.q9r0v.mongodb.net/proshop?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`Mongo connect ${conn.connection.host}`.cyan.bold)
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold)
    process.exit(1)
  }
}

export default connectdb
