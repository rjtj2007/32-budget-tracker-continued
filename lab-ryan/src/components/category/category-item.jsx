import React from 'react';
import {connect} from 'react-redux';
import {
    categoryUpdate,
    categoryDestroy,
} from '../../actions/category-actions.js'

import CategoryForm from './category-form.jsx';
import ExpenseForm from '../expense/expense-form.jsx';
import ExpenseList from '../expense/expense-list.jsx';

class CategoryItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleEditOff = this.toggleEditOff.bind(this);
    }

    toggleEdit(event, id) {
        this.props.categoryUpdate({isEditing: true, id: this.props.id});
    }

    toggleEditOff(event, id) {
        this.props.categoryUpdate({isEditing: false, id: this.props.id});
    }

    handleRemove(event) {
        event.preventDefault();
        this.props.categoryDestroy(this.props.id);
    }

    render() {
        const categoryId = this.props.id;
        if(this.props.isEditing === true) {
            return (
                <div>
                    <CategoryForm name="update"
                        id={this.props.id}>
                    </CategoryForm>
                    <button 
                        onClick={(event)=>this.toggleEditOff(event, categoryId)}>
                        Cancel
                    </button>
                </div>
            );
        }
        return (
            <li>
            {this.props.name}: ${this.props.budget}
            <button onClick={(event)=>this.handleRemove(event, categoryId)}>Remove</button>
            <button onClick={(event)=>this.toggleEdit(event, categoryId)}>Edit</button>
            <ExpenseForm expenseId={this.props.id} name="create" buttonText="Create Expense" />
            <ExpenseList expenseId={this.props.id} />
            </li>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories.categories
});

const mapDispatchToProps = dispatch => {
    return {
        categoryUpdate: category => dispatch(categoryUpdate(category)),
        categoryDestroy: categoryId => dispatch(categoryDestroy(categoryId))
    };
}

export default connect (mapStateToProps, mapDispatchToProps)(CategoryItem);