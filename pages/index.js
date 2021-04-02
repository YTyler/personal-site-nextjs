import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tyler Yates Portfolio</title>
        <link rel="icon" href="/popAvatarZoom.PNG" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      </Head>

      <main>
          <Navbar/>
          <div class={styles.hero}>
            <div class='wrapper'>
              <div class={styles.aboutMe}>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Non consectetur a erat nam at lectus urna duis. Et egestas quis ipsum suspendisse ultrices. Ullamcorper morbi tincidunt ornare massa. Aliquet risus feugiat in ante metus dictum at tempor. Tincidunt lobortis feugiat vivamus at augue eget arcu.</p>
              </div>
              <Image class={styles.hero__image} src='/self.jpg' alt="the author" layout='fixed' width={250} height={250} />
            </div>
          </div>
      </main>
      <footer>
      </footer>
      
    </div>
  )
}
