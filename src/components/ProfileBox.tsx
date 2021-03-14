import styles from '../styles/pages/ProfileBox.module.css'

export function ProfileBox() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.profileImageBox}>
          <img src="/images/Profile.jpg" alt="Foto do candidato" />
        </div>

        <div>
          <h1>Evandro</h1>
          <h2>Luiz da Rocha</h2>
          <div>
            <strong>Desenvolvedor Front-End</strong>
          </div>
          <div>
            <strong>Desigin</strong>
          </div>
          <p>Lins - São Paulo, Brasil</p>

        </div>
      </div>


      <div className={styles.personalTitliesContainer}>
        <div className={styles.personalBoxVerticalLine}></div>
        <strong>
          Sobre
        </strong>
        <p className="aboutText">
          Estudante de Analise e Desenvolvimento de sistemas, sou uma pessoa apaixonada por tecnoliga e conhecimento no geral. Sempre procuro aprender coisas novas e conhecer coisas novas.

          Tenho uma pequena noção de BACK-END, mas atualmente estou focado em aprender sobre FRONT-END, principalmente nas tecnologias React e Typescript, apesar de na faculdade, ser voltado mais para o desenvolvimento de infraestruturas de softwares.
          </p>
      </div>

      <strong className={styles.contactContainerIconsTitle}>Contato</strong>
      <div className={styles.contactContainer}>


        <div className={styles.contactContainerIcons}>
          <div>
            <img src="/images/WhatsApp.svg" alt="Icone de email" />
          </div>
          <div>
            <img src="/images/Mail.svg" alt="Icone de email" />
          </div>
          <div>
            <img src="/images/LinkedIn.svg" alt="Icone de email" />
          </div>
        </div>

        <div className={styles.contactContainerText}>

          <p>(14) 99163-9830</p>
          <p>evandro_lr_hotmail.com</p>
          <p>linkedin.com/in/evandr0</p>
        </div>
      </div>

      <strong className={styles.contactContainerIconsTitle}>Social</strong>
      <div className={styles.contactContainer}>
        <div className={styles.contactContainerIcons}>
          <div>
            <img src="/images/github.svg" alt="Icone de email" />
          </div>
          <div>
            <img src="/images/Instagram.svg" alt="Icone de email" />
          </div>
          <div>
            <img src="/images/Discord.svg" alt="Icone de email" />
          </div>
        </div>

        <div className={styles.contactContainerText}>

          <p>github.com/0rdnave</p>
          <p>instagram.com/the.custon</p>
          <p>Evandr0#5274</p>
        </div>
      </div>

    </div>
  )
}