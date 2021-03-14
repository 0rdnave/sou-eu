import styles from '../styles/pages/HardSkills.module.css'


export function ExperienceBox() {
  return (
    <div className={styles.hardSkillsContainer}>

      <div className={styles.hardSkillsBoxVerticalLine}></div>

      <p className={styles.hardSkillsTitle}>
        Experiências
      </p>
      <div className={styles.graduationContainer}>



        <div className={styles.labelsContent}>
          <div className={styles.label}>
            <div className={styles.labelTextBox}>
              <p>Atualmente</p>
            </div>
          </div>
          <div className={styles.label}>
            <div className={styles.labelTextBox}>
              <p>01/21</p>
            </div>
          </div>
          <div className={styles.label}>
            <div className={styles.labelTextBox}>
              <p>01/21</p>
            </div>
          </div>


        </div>

        <div className={styles.graduationContentContainer}>
          <div className={styles.graduationContent}>
            <p className={styles.graduationCurse}>
              Next Level Week 04 - Trila React
            </p>

            <p className={styles.graduationInstituition}>
              Rocketseat
            </p>

            <button>Atribuições e tecnologias aprendidas</button>
          </div>
          <div className={styles.graduationContent}>
            <p className={styles.graduationCurse}>
              Next Level Week 03 - Trilha Discovery
            </p>

            <p className={styles.graduationInstituition}>
              Rocketseat
            </p>

            <button>Atribuições e tecnologias aprendidas</button>
          </div>
          <div className={styles.graduationContent}>
            <p className={styles.graduationCurse}>
              Imersão REACT
            </p>

            <p className={styles.graduationInstituition}>
              Alura
            </p>

            <button>Atribuições e tecnologias aprendidas</button>
          </div>


        </div>

      </div>

      <div className={styles.moreButtonContent}>
        <button>
          Mostrar mais
        </button>
      </div>
    </div>
  )
}