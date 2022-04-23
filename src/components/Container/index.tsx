import { useState } from 'react';
import styles from '../../App.module.css'
import { levels, calculateIMC, Level } from '../../helpers/imc';
import GridItem from '../GridItem';
import leftArrowImage from '../../assets/leftarrow.png'

const Container = () => {
  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateIMC(heightField, weightField));
    } else {
      alert('Todos os campos devem ser preenchidos');
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1>Calcule o seu IMC</h1>
        <p>
          IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de
          Saúde para calcular o peso ideal de cada pessoa.
        </p>
        <input
          type="number"
          disabled={toShow ? true : false}
          placeholder="Digite a sua altura. Ex: 1.5 (Em metros)"
          value={heightField > 0 ? heightField : ''}
          onChange={(e) => setHeightField(parseFloat(e.target.value))}
        />

        <input
          type="number"
          disabled={toShow ? true : false}
          placeholder="Digite o seu peso. Ex: 64.2 (Em kg)"
          value={weightField > 0 ? weightField : ''}
          onChange={(e) => setWeightField(parseFloat(e.target.value))}
        />
        <button disabled={toShow ? true : false} onClick={handleCalculateButton}>
          Calcular
        </button>
      </div>

      <div className={styles.rightSide}>
        {!toShow && (
          <div className={styles.grid}>
            {levels.map((item, index) => (
              <GridItem key={index} data={item} />
            ))}
          </div>
        )}
        {toShow && (
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBackButton}>
              <img src={leftArrowImage} alt="" width={25} />
            </div>
            <GridItem data={toShow} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Container;
