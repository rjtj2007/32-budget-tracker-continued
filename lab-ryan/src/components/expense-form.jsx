import React from 'react';
import {connect} from 'react-redux';
import {
    expenseCreate,
    expenseUpdate,
    expenseDestroy
} from '../actions/expense-actions.js';

import uuidv1 from 'uuid/v1';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            budget: 0,
            timestamp: Date.now(),
            categoryId: this.props.categoryId,
            isEditing: false,
        }
       this.handleNameChange = this.handleNameChange.bind(this);
       this.handleBudgetChange = this.handleBudgetChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        let newState = {
            name: event.target.value
        }
        this.setState(newState);
    }

    handleBudgetChange(event) {
        let newState = {
            budget: event.target.value
        }
        this.setState(newState);
    }


    handleSubmit(event) {
        let submitFormName = this.props.name;
        event.preventDefault();
        if(this.props.name === 'create') {
            this.props.expenseCreate(this.state);
        } else if (this.props.name === 'update') {
            let newValue = Object.assign(this.state, {isEditing: false, id: this.props.id});
            this.props.expenseUpdate(this.state);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h3>Enter a new Budget Item</h3>
                <input onChange={this.handleNameChange} name="name" type="text" placeholder="expense name" required="true"/>
                <input onChange={this.handleBudgetChange} name="budget" type="text" placeholder="budget" required="true"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    expenses: state.expenses.expenses
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        expenseCreate: value => dispatch(expenseCreate(value)),
        expenseUpdate: value => dispatch(expenseUpdate(value)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseForm);