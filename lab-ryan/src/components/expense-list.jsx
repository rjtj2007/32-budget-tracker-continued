import React from 'react';
import { connect } from 'react-redux';

import ExpenseItem from './expense-item.jsx';
import { combineReducers } from 'redux';
import { expenseCreate, expenseUpdate, expenseDestroy } from '../actions/expense-actions.js';


class CategoryList extends React.Component {
    constructor(props) {
        super(props);

        this.displayAll = this.displayAll.bind(this);
    }

    displayAll() {
        console.log('displayAll', this.props.categories);
        return this.props.expenses.map((expense, i) => {
            if(this.props.catetoryId === expenses.categoryId) {
                return <ExpenseItem 
                key={i} //ensure the key is declared in the collection and not on props
                id={expense.id}
                categoryId={expense.categoryId}
                expenseUpdate={this.props.expenseUpdate}
                expenseDestroy={this.props.expenseDestroy}
                name={expense.name}
                budget={expense.budget}
                isEditing={expense.isEditing}>
                </ExpenseItem>
            }
        });
    }

    render() {
        return (
            <div>
                <h3>budget:</h3>
                <ul>{this.displayAll()}</ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    expenses: state.expenses.expenses,
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        expenseCreate: value => dispatch(expenseCreate(value)),
        expenseUpdate: value => dispatch(expenseUpdate(value)),
        expenseDestroy: id => dispatch(expenseDestroy(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);