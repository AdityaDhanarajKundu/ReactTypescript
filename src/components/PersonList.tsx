import React from 'react';
import type { Name } from "./Person.type";

type PersonNameList = {
    names: Name[]
};

const PersonList = ({names}: PersonNameList) => {
  return (
    <div>
        {names.map((name) => {
           return <h2>{name.first} {name.last}</h2>
        })}
    </div>
  );
}

export default PersonList;