import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initiaState = [
    { id: 1, value: 0, name: "Ненужная вещь", price: "200" },
    { id: 2, value: 0, name: "Ложка" },
    { id: 3, value: 4, name: "Вилка" },
    { id: 4, value: 0, name: "Тарелка" },
    { id: 5, value: 0, name: "Набор минималиста" },
  ];

  const [counetrs, setCounters] = useState(initiaState);
  const handleDelete = (id) => {
    console.log("handleDelete", id);

    const newCounter = counetrs.filter((c) => c.id !== id);
    setCounters(newCounter);
    console.log(newCounter);
  };

  const handleIncrement = (id) => {
    console.log("handleIncrement", id);
    setCounters(
      counetrs.map((count) => {
        if (count.id == id) {
          count.value += 1;
        }
        return count;
      })
    );
  };
  const handleDecrement = (id) => {
    console.log("handleDecrement", id);
    setCounters(
      counetrs.map((count) => {
        if (count.id === id) {
          count.value -= 1;
        }
        return count;
      })
    );
  };

  const handleReset = () => {
    setCounters(initiaState);
    console.log("handle reset");
  };

  return (
    <>
      {counetrs.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
