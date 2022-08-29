import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>Homepage</h1>
        <p>Click the link below to view the sample blog post.</p>
        <Link href={'/posts/hello-world'}>
          <a>Hello World!</a>
        </Link>
      </div>
    </>
  );
}
