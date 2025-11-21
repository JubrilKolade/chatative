import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const { MONGO_URI } = process.env;
    if(!MONGO_URI) throw new Errow('MONGO_URI is not set');
    
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected:', conn.connection.host);
  } catch (error) {
    console.error("error connecting to MONGODB:", error);
    process.exit(1);
  }
};