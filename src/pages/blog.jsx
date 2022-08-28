import Link from 'next/link';
import { useState } from 'react';

import styles from '../styles/Home.module.css';
import { getPosts } from '../utils/utils';

export default function Blog({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const loadMorePosts = async () => {
    const res = await fetch(`/api/posts?page=${currentPageIndex + 1}`); // absolute url is supported here
    const posts = await res.json();

    setFilteredPosts((_posts) => [..._posts, ...posts]);
    setCurrentPageIndex((_pageIndex) => _pageIndex + 1);
  };

  return (
    <>
      <div className={styles.articleList}>
        <p className={styles.desc}>Newly Published</p>
        {filteredPosts.map((post, index) => (
          <Link key={index} href={`/posts/${post.slug}`}>
            <a>{post.data.title}</a>
          </Link>
        ))}
        {/* <button onClick={loadMorePosts} className={styles.button}>
          Load more
        </button> */}
      </div>
    </>
  );
}

export const getStaticProps = () => {
  const posts = getPosts(1);

  return {
    props: {
      posts,
    },
  };
};
