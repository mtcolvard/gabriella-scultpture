import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import gabriellaLargeExample from '../public/images/gabriella-large-example.webp'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="site">
        <header className="header">
          <div className="header_container">
            <div className="header_headerLeft">
              <button className="header_navButton" aria-label="open navigation">
              <div className="header_navIconWrap">
                <div className="header_navIcon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              </button>
            </div>
          </div>
        </header>
        <h1 className={styles.header_title}>Gabriella Furno</h1>
        <div className="header_headerRight">&nbsp;</div>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Sculpture &rarr;</h2>
            <p>Sculpture</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Painting &rarr;</h2>
            <p>Painting</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Drawing &rarr;</h2>
            <p>Drawing</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Performance &rarr;</h2>
            <p>
              Performance
            </p>
          </a>
        </div>
        <main className={styles.main}>
          <div className="leadImage_container">
            <Image
              src={gabriellaLargeExample} // Route of the image file
              alt="gabriella-large-example"
              // height={1667} // Desired size with correct aspect ratio
              // width={2500} // Desired size with correct aspect ratio
              // fill
              // sizes="(max-width: 768px) 100vw,
              //         (max-width: 1200px) 50vw,
              //         33vw"
              priority
            />
          </div>
          <div className="content">
          </div>
        </main>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
