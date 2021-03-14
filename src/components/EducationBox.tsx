import styles from '../styles/pages/HardSkills.module.css'


export function EducationBox() {
  return (
    <div className={styles.hardSkillsContainer}>

      <div className={styles.hardSkillsBoxVerticalLine}></div>

      <p className={styles.hardSkillsTitle}>
        Educação
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
              Análise e Desenvolvimento de Sistemas
            </p>

            <p className={styles.graduationInstituition}>
              Faculdade de Tecnologia de Lins - Prof. Antonio Seabra
            </p>

            <button>Atribuições e tecnologias aprendidas</button>
          </div>
          <div className={styles.graduationContent}>
            <p className={styles.graduationCurse}>
              Jogos Digitais
            </p>

            <p className={styles.graduationInstituition}>
              Faculdade de Tecnologia de Lins - Prof. Antonio Seabra
            </p>

            <button>Atribuições e tecnologias aprendidas</button>
          </div>
          <div className={styles.graduationContent}>
            <p className={styles.graduationCurse}>
              Cursos complementares
            </p>

            <p className={styles.graduationInstituition}>
              Prepara Cursos
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