import React from 'react';

const DiscountedList = props => {

    const handleDiscount = list => {

        return list.reduce((groups, item) => {
            const newItem = { ...item, price: item.price * .9 }
            groups.push(newItem)
            return groups
        }, [])
    } 

    let discountedList = handleDiscount(props.list)

    return (
        <React.Fragment>
            { props.children(discountedList) }
        </React.Fragment>
    );

}

export default DiscountedList;