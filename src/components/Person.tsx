import type { PersonProps } from "./Person.type";

const Person = ({ name }: PersonProps) => {
  return (
    <div>{name.first} {name.last}</div>
  );
}

export default Person;