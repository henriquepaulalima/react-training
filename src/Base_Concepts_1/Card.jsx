import React, { useEffect, useRef } from "react";

export const Card = ({ name, onClicked }) => {
  useEffect(() => {
    console.log('We are here');
  }, [name]);

  const divRef = useRef();

  return (<div onClick={onClicked} ref={divRef}>Hello, {name}</div>)
}

// export const Card = (props)
// return (<div>Hello, {props.name}</div>)
// <Card name="Henrique"/>