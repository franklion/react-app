import React, { Component } from 'react';
import DiscountedList from './DiscountedList'
import List from './List'

/*
 *  
 * Render Props Design Pattern
 * 
 * 不改變原始資料的情況下，讓所有商品價格打九折，
 * 使用 this.props.children API 傳遞轉換後的列表資料給原本的列表元件
 *
 * */
class Index extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            list: [
                { id: 1, name: 'coke', price: 100 },
                { id: 2, name: 'brand', price: 70 },
                { id: 3, name: 'juice', price: 55 },
                { id: 4, name: 'cake', price: 200 },
                { id: 5, name: 'milk', price: 120 },
            ]
        }
    }
    
    render() {
        const { list } = this.state
        return (
            <DiscountedList list={list}>
            {
                discountedList => <List discountedList={discountedList} />
            }
            </DiscountedList>
        );
    }
}

export default Index;