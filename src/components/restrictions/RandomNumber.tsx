import React from 'react';

type RandomNumberType = {
    value: number
};

type PostiveNumberType = RandomNumberType & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never
};

type NegativeNumberType = RandomNumberType & {
    isNegative: boolean,
    isPositive?: never,
    isZero?: never
};

type ZeroNumberType = RandomNumberType & {
    isZero: boolean,
    isPositive?: never,
    isNegative?: never
};

type RandomNumberProps = PostiveNumberType | NegativeNumberType | ZeroNumberType;

const RandomNumber = ({value, isPositive, isNegative, isZero}: RandomNumberProps) => {
  return (
    <div>
        {value} {isPositive && 'Positive'} {isNegative && 'Negative'} {' '}
        {isZero && 'Zero'}
    </div>
  );
}

export default RandomNumber;