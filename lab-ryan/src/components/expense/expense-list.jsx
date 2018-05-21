import React from 'react';
import { connect } from 'react-redux';

import ExpenseItem from './expense-item.jsx';
// import { combineReducers } from 'redux';
import { expenseCreate, expenseUpdate, expenseDestroy } from '../../actions/expense-actions.js';


class ExpenseList extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.displayAllExpenses = this.displayAllExpenses.bind(this);
    }

    handleDelete(expenseId) {
        this.props.expenseDestroy(this.expenseId);
    }

    displayAllExpenses() {
        console.log('expense list', this.props.expenses)

        let list = this.props.expenses.filter(expense => {
           return expense.categoryId === this.props.categoryId
        });

            return list.map(expense => {
            if(this.props.catetoryId === expense.categoryId) {
                return <ExpenseItem 
                    categoryId={this.props.categoryId}
                    key={expense.id} //ensure the key is declared in the collection and not on props
                    id={expense.id}
                    name={expense.name}
                    budget={expense.budget}
                    delete={this.handleDelete}
                    toggleEdit={expense.toggleEdit}>
                </ExpenseItem>
            }
        });
    }

    render() {
        return (
            <div>
                <h3>Expense List:</h3>
                <ul>{this.displayAllExpenses()}</ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    expenses: state.expenses.expenses,
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        expenseCreate: expenses => dispatch(expenseCreate(expenses)),
        expenseUpdate: expenses => dispatch(expenseUpdate(expenses)),
        expenseDestroy: id => dispatch(expenseDestroy(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);