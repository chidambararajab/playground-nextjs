import { Effect, Reducer, Ref } from "@/hooks";
import Callback from "@/hooks/Callback";
import { Memo } from "@/hooks/Memo";

export default function Home({ posts }) {
  return (
    <div>
      {/* <Ref /> */}
      {/* <Effect dependiency={false} /> */}
      {/* <Reducer /> */}
      {/* <Callback /> */}
      {/* <Memo /> */}
      <div>
        <h1>Latest Posts:</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log({ data });
  return {
    props: {
      posts: data.slice(0, 5), // get first 5 posts
    },
  };
}
