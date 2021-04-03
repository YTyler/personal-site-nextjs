import Head from 'next/head'
import styles from '../styles/Portfolio.module.css'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Tyler Yates Portfolio</title>
                <link rel="icon" href="/popAvatarZoom.PNG" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
            </Head>

            <main>
                <Navbar />
                <div class='hero'>
                    <div class='wrapper'>
                        <ProjectCard url='/waterfall.jpg' alttext='waterfall'></ProjectCard>
                        <ProjectCard url='/waterfall.jpg' alttext='waterfall'></ProjectCard>
                    </div>
                    <div class='wrapper'>
                        <ProjectCard url='/waterfall.jpg' alttext='waterfall'></ProjectCard>
                        <ProjectCard url='/waterfall.jpg' alttext='waterfall'></ProjectCard>
                    </div>
                </div>
            </main>
            <footer>
            </footer>

        </div>
    )
}
