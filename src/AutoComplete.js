import { useState } from 'react';

import styles from './AutoComplete.module.css';

const AutoComplete = () => {
  const phrases = [
    'išplauti grindis',
    'užstatyti indaplovę',
    'paleisti siurblį',
    'užsiregistruoti pas gydytoją',
    'sumokėti mokesčius',
    'pasveikinti draugą',
    'nukasti sniegą',
    'išskalbti skalbinius',
    'pažiūrėti paskaitą',
    'užsakyti maistą',
    'išstumti konteinerį',
    'išgerti vaistus',
  ];
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState();
  const [editValue, setEditValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const filterRes = phrases.filter((phrase) => value && phrase.toLowerCase().includes(value.toLowerCase()));

  const handleAddTodo = () => {
    setValue('');
    setTodo([...todo, { element: value, status: false }]);
  };
  // console.log(todo);
  const setStatus = (index) => {
    const newTodo = todo.map((e, i) => {
      if (index === i) {
        return { ...e, status: !e.status };
      }
      return e;
    });
    setTodo(newTodo);
  };

  const updateTodo = () => {
    const newTodo = todo.map((e, i) => {
      if (editIndex === i) {
        return { ...e, element: editValue };
      }
      return e;
    });
    setTodo(newTodo);
    setEditIndex(undefined);
  };
  const handleDelete = (i) => {
    const newTodo = [...todo];
    newTodo.splice(i, 1);
    setTodo(newTodo);
    setEditIndex(undefined);
  };

  const handleEditValue = (i) => {
    const newEditValue = todo[i];
    setEditValue(newEditValue.element);
    setEditIndex(i);
  };
  return (
    <div className={styles.container}>
      <input value={value} type="text" placeholder="Enter your text" onChange={handleChange} />
      <button className={styles.buttonOk} onClick={handleAddTodo}>
        OK
      </button>
      <br />
      {filterRes.map((e) => {
        return (
          <div key={e} onClick={() => setValue(e)}>
            {e}
          </div>
        );
      })}
      {todo.map((e, i) => {
        return (
          <div className={styles.listDisplay} key={i} style={{ textDecoration: e.status && 'line-through' }}>
            {typeof editIndex === 'number' && editIndex === i ? (
              <input
                className={styles.input}
                value={editValue}
                type="text"
                onChange={(e) => {
                  setEditValue(e.target.value);
                }}
              />
            ) : (
              <span className={styles.toDo} onClick={() => setStatus(i)}>
                {e.element}
              </span>
            )}

            <span>
              {editIndex !== i ? (
                <button
                  onClick={() => {
                    handleEditValue(i);
                  }}
                >
                  Edit
                </button>
              ) : (
                <button
                  onClick={() => {
                    updateTodo();
                  }}
                >
                  Save
                </button>
              )}
              <button
                className={styles.buttonDel}
                onClick={() => {
                  handleDelete(i);
                }}
              >
                Delete
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default AutoComplete;
