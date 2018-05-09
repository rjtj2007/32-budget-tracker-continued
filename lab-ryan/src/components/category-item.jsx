import React from 'react';
import{connect} from 'react-redux';
import {
    categoryUpdate,
    categoryDestroy,
} from '../actions/category-actions.js';

import CategoryForm from './category-form.jsx';

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
        if(this.props.isEditing === true) {
            return (
                <div>
                    <CategoryForm id={this.props.id} name="update"></CategoryForm>
                    <button onClick={(event)=>this.toggleEditOff(event, categoryId)}>Cancel</button>
                </div>
            )
        }
        return (
            <li key={this.props.key}>
            {this.props.name}: ${this.props.budget}
            <button onClick={(event)=>this.handleRemove(event, categoryId)}>Remove</button>
            <button onClick={(event)=>this.toggleEdit(event, categoryId)}>Edit</button>
            </li>
        )
    }
}

const mapSateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        categoryUpdate: (values) => dispatch(categoryUpdate(values)),
        categoryDestroy: id => dispatch(categoryDestroy(id)),
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(CategoryItem);