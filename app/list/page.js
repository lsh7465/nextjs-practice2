import { connectDB } from "@/util/database";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <h4>{result[i].title}</h4>
            <p>{result[i].content}</p>
          </div>
        );
      })}
    </div>
  );
}
