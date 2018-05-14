import React from 'react';

import CategoryForm from './category-form.jsx';
import ExpenseForm from './expense-form.jsx';

class CategoryItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleEditOff = this.toggleEditOff.bind(this);
    }

    toggleEdit(event, id) {
        this.props.categoryUpdate({isEditing: true, id });
    }

    toggleEditOff(event, id) {
        this.props.categoryUpdate({isEditing: false, id});
    }

    handleRemove(event, id) {
        event.preventDefault();
        this.props.categoryDestroy(id);
    }

    render() {
        const categoryId = this.props.id;
        console.log('cat-item render', categoryId);
        if(this.props.isEditing === true) {
            return (
                <div>
                    <CategoryForm id={this.props.id} name="update"></CategoryForm>
                    <button onClick={(event)=>this.toggleEditOff(event, categoryId)}>Cancel</button>
                </div>
            )
        }
        return (
            <li>
            {this.props.name}: ${this.props.budget}
            <button onClick={(event)=>this.handleRemove(event, categoryId)}>Remove</button>
            <button onClick={(event)=>this.toggleEdit(event, categoryId)}>Edit</button>
            </li>
        )
    }
}

export default CategoryItem;