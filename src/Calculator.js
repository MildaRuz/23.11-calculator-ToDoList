import { useState } from 'react';

import styles from './Calculator.module.css';

const Calculator = () => {
  const values = [
    ['9', '8', '7', '-'],
    ['6', '5', '4', '+'],
    ['3', '2', '1', '*'],
    ['.', '0', 'C', '/', '='],
  ];
  const [output, setOutput] = useState('');
  const [value, setValue] = useState(0);
  const [operation, setOperation] = useState();

  const calculate = () => {
    switch (operation) {
      case '-':
        return value - +output;
      case '+':
        return value + +output;
      case '*':
        return value * +output;
      case '/':
        return value / +output;
      default:
        return +output;
    }
  };

  const handleButtonClick = (button) => {
    switch (button) {
      case '-':
      case '+':
      case '*':
      case '/':
        setOperation(button);
        setValue(calculate());
        setOutput('');
        break;
      case '=':
        setOperation(undefined);
        setOutput(calculate().toString());
        setValue(0);
        break;
      case 'C':
        setOperation(undefined);
        setValue(0);
        setOutput('');
        break;
      default:
        if (output.includes('.') && button === '.') {
          return;
        } else {
          setOutput(output + button);
        }
    }
  };
  console.log(output);
  return (
    <div className={styles.container}>
      {/* <div className={styles.value}>{value}</div> */}
      <div className={styles.output}> {output}</div>
      {values.map((row) => {
        return (
          <div className={styles.container}>
            {row.map((column) => {
              return <button onClick={() => handleButtonClick(column)}>{column}</button>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Calculator;
