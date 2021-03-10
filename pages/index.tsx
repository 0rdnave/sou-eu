import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sou-Eu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            Evandro
        </h1>

          <h2>Luiz da Rocha</h2>

        </div>
        <div>
          <p className="personalTitlies">Sobre</p>
          <p className="aboutText">
            Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Sapien in monti palavris qui num significa nadis i pareci latim. Manduma pindureta quium dia nois paga. Casamentiss faiz malandris se pirulitá.

            Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Per aumento de cachacis, eu reclamis. Interagi no mé, cursus quis, vehicula ac nisi.

            Atirei o pau no gatis, per gatis num morreus. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Leite de capivaris, leite de mula manquis sem cabeça. Copo furadis é disculpa de bebadis, arcu quam euismod magna.

            Quem num gosta di mé, boa gentis num é. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Paisis, filhis, espiritis santis. Aenean aliquam molestie leo, vitae iaculis nisl.

            Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Não sou faixa preta cumpadi, sou preto inteiris, inteiris. In elementis mé pra quem é amistosis quis leo.
        </p>
        </div>

        <div>
          <p className="personalTitlies">Contato</p>
          <p>(14) 99163-9830</p>
          <p>evandro_lr_hotmail.com</p>
          <p>linkedin.com/in/evandr0</p>
        </div>

        <div>
          <p className="personalTitlies">Social</p>
          <p>github.com/0rdnave</p>
          <p>instagram.com/the.custon</p>
          <p>Evandr0#5274</p>
        </div>



      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
