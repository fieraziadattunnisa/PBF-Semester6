import { useRouter } from 'next/router';

export default function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Halaman Detail Blog</h1>
      <p>Slug Blog: {slug}</p>
    </div>
  );
}