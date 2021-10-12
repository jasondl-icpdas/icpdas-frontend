import Link from "next/link";
import Image from 'next/image';

function Home({ posts }) {
  return (
    <div>
      <Image
          src="/images/icp-das-usa-logo-128.png"
          alt="ICP DAS USA"
          height={128}
          width={128}
          />
      <h1> ICP DAS USA </h1>
      {/* loop over the posts and show them */}
      {posts &&
        posts.map((post) => (
          <Link href={`/${post.Slug}`} key={post.id}>
            <a>
              <h2>{post?.Title}</h2>
              <div>{post?.User?.username}</div>
            </a>
          </Link>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch("https://icpdas-backend.herokuapp.com/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
}
export default Home;