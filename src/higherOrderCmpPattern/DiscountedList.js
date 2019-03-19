import React from 'react';

const DiscountedList = (Component, list) => {

    const handleDiscount = list => {

        return list.reduce((groups, item) => {
            const newItem = { ...item, price: item.price * .9 }
            groups.push(newItem)
            return groups
        }, [])

    } 

    let discountedList = handleDiscount(list)

    return <Component discountedList={discountedList} />;

}

export default DiscountedList;