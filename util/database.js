import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://admin:qwer1234@cluster0.vhbuh23.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  // 변수에 저장해놓고 쓰면 매번 실행안됨
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
