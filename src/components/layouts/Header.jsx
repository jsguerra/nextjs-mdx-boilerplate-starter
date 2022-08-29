import Link from 'next/link';

import styles from '../../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.maxWidthContainer}>
        <Link href={'/'}>
          <a>MDXBlog</a>
        </Link>
        <nav className={styles.siteNav}>
          <Link href={'/blog'}>
            <a>Blog</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
