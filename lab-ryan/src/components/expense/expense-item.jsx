import React from 'react';
import ExpenseForm from './expense-form.jsx';
import {connect} from 'react-redux';
import {
    expenseUpdate,
    expenseDelete,
} from '../../actions/expense-actions.js'

class ExpenseItem extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                isEditing: false,
            };

            this.toggleEdit = this.toggleEdit.bind(this);
            this.handleRemove = this.handleRemove.bind(this);
            this.cancel = this.cancel.bind(this);
    }

    toggleEdit() {
        this.setState({isEditing: !this.state.isEditing});
    }

    handleRemove() {
        // event.preventDefault();
        this.props.expenseDestroy(this.props.id);
    }
    
    cancel() {
        this.toggleEdit();
    }

    render() {
        const expenseId = this.props.id;
        console.log('expense item render props.id', this.props.id)

        if(this.state.isEditing === true) {
            return (
                <li>
                    <ExpenseForm action="create"
                        buttonText="create"
                        id={this.props.id}
                        name={this.props.name}
                        budget={this.props.budget}
                        toggleEdit={this.toggleEdit}
                        cancel={this.cancel}>
                    </ExpenseForm>
                    <button onClick={(event)=>this.cancel(event, expenseId)}>Cancel</button>
                </li>
            );
        } else {
            return (
                <li>
                    {this.props.name}
                    ${this.props.budget}
                    <button id={this.props.id} onClick={(event)=>this.handleRemove(event, expenseId)}>Remove</button>
                    <button id={this.props.id} onClick={(event)=>this.toggleEdit(event, expenseId)}>Edit</button>
                </li>
            )
        }
    }
}

const mapStateToProps = state => {
    return { expenses: state.expenses.expenses };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      expenseUpdate: expense => dispatch(expenseUpdate(expense)),
      expenseDelete: expense => dispatch(expenseDelete(expense)),
    };
  };

export default connect (mapStateToProps, mapDispatchToProps)(ExpenseItem);