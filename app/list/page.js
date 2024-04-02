import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link
              // prefetch={false}: 자동으로 미리 로드 방지
              prefetch={false}
              href={"/detail/" + result[i]._id}
              className="list-itemLink"
            >
              <h4>{a.title}</h4>
            </Link>
            <DetailLink />
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
