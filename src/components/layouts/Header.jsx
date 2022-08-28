import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div>
        <Link href={'/'}>
          <a>MDXBlog</a>
        </Link>
        <nav>
          <Link href={'/blog'}>
            <a>Blog</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
