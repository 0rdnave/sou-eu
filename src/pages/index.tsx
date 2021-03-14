import Head from 'next/head'
import { EducationBox } from '../components/EducationBox'
import { ExperienceBox } from '../components/ExperienceBox'
import { ProfileBox } from '../components/ProfileBox'
import { SkillsBox } from '../components/SkillsBox'


import styles from '../styles/pages/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>

      <Head>

        <title>Sou-Eu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <div className={styles.profileBox}>
          <ProfileBox />

        </div>

        <div className={styles.expertiseBox}>
          <EducationBox />
          <ExperienceBox />
        </div>

        <div className={styles.skillBox}>
          <SkillsBox />
        </div>

      </main>
      {/*
      <SkillsBox />
*/}

      <footer className={styles.footer}>
        Criado por Evandr0 - 2021
      </footer>
    </div>
  )
}
