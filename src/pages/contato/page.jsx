import styles from './Contato.module.css';

function Contato() {
  return (
    <div className= {styles.Contato} >
      <h2>Contato</h2>
      <p>Email: <a href="mailto:contato@devmax.com">contato@devmax.com</a></p>
      <p>Telefone: (11) 99999-8888</p>
    </div>
  );
}

export default Contato;