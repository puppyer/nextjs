import Link from 'next/link';
export default () => (
  <Link href="/post/[pid]" as="/post/abc">
    <a>First Post</a>
  </Link>
);