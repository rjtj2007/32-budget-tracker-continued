import React from 'react';

import ExpenseForm from './expense-form.jsx';

class ExpenseItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleEditOff = this.toggleEditOff.bind(this);
    }

    toggleEdit(event, id) {
        this.props.expenseUpdate({isEditing: true, id });
    }

    toggleEditOff(event, id) {
        this.props.expenseUpdate({isEditing: false, id});
    }

    handleRemove(event, id) {
        event.preventDefault();
        this.props.expenseDestroy(id);
    }

    render() {
        const expenseId = this.props.id;
        if(this.props.isEditing === true) {
            return (
                <div>
                    <ExpenseForm id={this.props.id} name="update"></ExpenseForm>
                    <button onClick={(event)=>this.toggleEditOff(event, expenseId)}>Cancel</button>
                </div>
            )
        }
        return (
            <li>
            {this.props.name}: ${this.props.budget}
            <button id={this.props.id} onClick={(event)=>this.handleRemove(event, expenseId)}>Remove</button>
            <button id={this.props.id} onClick={(event)=>this.toggleEdit(event, expenseId)}>Edit</button>
            </li>
        )
    }
}

export default ExpenseItem;