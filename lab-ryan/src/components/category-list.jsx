import React from 'react';
import { connect } from 'react-redux';

import CategoryItem from './category-item.jsx';
import { combineReducers } from 'redux';
import { categoryCreate, categoryUpdate, categoryDestroy } from '../actions/category-actions.js';


class CategoryList extends React.Component {
    constructor(props) {
        super(props);

        this.displayAll = this.displayAll.bind(this);
    }

    displayAll() {
        console.log('displayAll', this.props.categories);
        return this.props.categories.map(category => {
            return <CategoryItem 
            key={category.id} //ensure the key is declared in the collection and not on props
            id={category.id}
            categoryUpdate={this.props.categoryUpdate}
            categoryDestroy={this.props.categoryDestroy}
            name={category.name}
            budget={category.budget}
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