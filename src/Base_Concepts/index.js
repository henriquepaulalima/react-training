import React, { useEffect, useState } from "react";
import { Card } from "./Base_Concepts/Card";

function BaseConcepts() {

  const [name, setName] = useState('Henrique');

  const onCardClicked = () => {
    console.log('Hello');
  }

  useEffect(() => {
    setInterval(() => {
      setName(`Henrique, it's ${Math.random()}`);
    }, 1000);
  }, []);

  return (
    <div>
      <Card name={name} onClicked={onCardClicked} />
    </div>
  );
}


export default BaseConcepts;
