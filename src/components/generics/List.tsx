import React from 'react';

type ListProps<T> = {
    items: T[],
    onClick: (item: T) => void
};

const List = <T,> ({items,onClick}: ListProps<T>) => {
  return (
    <div>
        List of items
        {items.map((item, index) => {
            return(
                <div key={index} onClick={()=> onClick(item)}>
                  {typeof item === 'object' ? JSON.stringify(item) : String(item)}
                </div>
            );
        })}
    </div>
  );
}

export default List;