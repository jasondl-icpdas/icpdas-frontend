import Link from "next/link";

export default function Product({ product }) {
  return (
    <div>
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <h2>{product?.Title}</h2>
    </div>
  );
}

// tell next.js how many pages there are
export async function getStaticPaths() {
  const res = await fetch("https://icpdas-backend.herokuapp.com/products/");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { slug: product.Slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`https://icpdas-backend.herokuapp.com/products?Slug=${slug}`);
  const data = await res.json();
  const product = data[0];

  return {
    props: { product },
  };
}