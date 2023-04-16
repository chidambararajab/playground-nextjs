import axios from "axios";

export default function Home({ posts }) {
  return (
    <div>
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
