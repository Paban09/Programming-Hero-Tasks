// import React from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, divideTwoNumbers as divide, multiply } from '../../utils/calculate';
// import add from '../../utils/calculate';

const Sunglass = () => {

    const first=55;
    const second=45;
    const sum=add(first,second);
    const mul=multiply(first,second);
    const div=divide(first,second);
    console.log(sum,mul,div);
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;