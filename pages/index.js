import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import gabriellaLargeExample from '../public/images/gabriella-large-example.webp'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriella Furno</title>
        <meta name="description" content="Oeuvre, Gabriella Furno" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className={styles.site}>
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
              <h1 className={styles.header_title}>Gabriella Furno</h1>
            </div>
          </header>
          <main className={styles.content} id="main">
            <div className={styles.homepageContent}>
              <Image
                src={gabriellaLargeExample} // Route of the image file
                alt="gabriella-large-example"
                // height={1667} // Desired size with correct aspect ratio
                // width={2500} // Desired size with correct aspect ratio
                fill
                // sizes="(max-width: 768px) 100vw,
                //         (max-width: 1200px) 50vw,
                //         33vw"
                // priority
              />
            </div>
            <div className={styles.homepageContent}>
                <Image
                  src={gabriellaLargeExample} // Route of the image file
                  alt="gabriella-large-example"
                  // height={1667} // Desired size with correct aspect ratio
                  // width={2500} // Desired size with correct aspect ratio
                  fill
                  // sizes="(max-width: 768px) 100vw,
                  //         (max-width: 1200px) 50vw,
                  //         33vw"
                />
              </div>
          </main>
          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gabriella Furno
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
            </a>
          </footer>
        </div>
      </body>
    </>
  )
}
