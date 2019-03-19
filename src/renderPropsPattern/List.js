import React from 'react';

const List = ({ discountedList }) => (
    discountedList.map(item => (
        <p key={item.id}>{item.name} - {item.price}</p>
    ))
)

export default List;