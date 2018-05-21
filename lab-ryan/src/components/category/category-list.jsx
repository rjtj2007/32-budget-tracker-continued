import React from 'react';
import {connect} from 'react-redux';

import CategoryItem from './category-item.jsx';
import { combineReducers } from 'redux';
import { categoryCreate, categoryUpdate, categoryDestroy } from '../../actions/category-actions.js';


class CategoryList extends React.Component {
    constructor(props) {
        super(props);

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.displayAll = this.displayAll.bind(this);
    }

    handleUpdate(category) {
        this.props.categoryUpdate(category);
    }

    handleDelete(category) {
        this.props.categoryDestroy(category);
    }

    displayAll() {
        return this.props.categories.map(category => {
            return <CategoryItem 
                key={category.id} //ensure the key is declared in the collection and not on props
                id={category.id}
                name={category.name}
                budget={category.budget}
                categoryUpdate={this.handleUpdate}
                categoryDestroy={this.handleDelete}
                isEditing={category.isEditing}>
            </CategoryItem>
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
    categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        categoryCreate: value => dispatch(categoryCreate(value)),
        categoryUpdate: value => dispatch(categoryUpdate(value)),
        categoryDestroy: id => dispatch(categoryDestroy(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);