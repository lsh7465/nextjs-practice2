import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  // props.params.id는 [id].js와 props.params.id로 접근가능
  // /detail/123인 경우, props.params.id는"123"과 같은 문자열 값을 가짐
  console.log(props.params.id);
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
