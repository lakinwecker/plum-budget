import React from 'react';
import { connect } from 'react-redux';
import trash from '../../img/trash.svg';
import { removeExpense } from '../../actions/expenses';

const Expense = ({_id, type, description, price, dispatch}) => (
    <div className="full--list" key={_id}>
        <div className="item__description">{description}</div>

        <div className="item__right">
            <div className="right clearfix"> 
                <div className="item__delete"> 
                    <button className="item__delete--btn" onClick={() => {
                        dispatch(removeExpense({_id}))
                    }}>
                        <img src={trash} alt="trash can"></img>
                    </button> 
                </div> 
                <div className="item__value">{price}</div> 
            </div> 
        </div>
    </div>
);

export default connect()(Expense);