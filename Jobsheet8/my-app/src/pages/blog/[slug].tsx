import { useRouter } from "next/router";

const BlogDetail = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>Blog Detail Page</h1>
      <p>Ini adalah halaman detail blog.</p>
      <p>Slug: {query.slug}</p>
    </div>
  );
};

export default BlogDetail;
