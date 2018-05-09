import React from 'react';
import { connect } from 'react-redux';

import CategoryItem from './category-item.jsx';
import { categoryCreate } from '../actions/category-actions.js';

class CategoryList extends React.Component {
    constructor(props) {
        super(props);

        this.displayAll = this.displayAll.bind(this);
    }

    displayAll() {
        return this.props.categories.map(category => {
            return <CategoryItem 
            key={category.id} 
            id={category.id} 
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
    categories: state.categories,
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        categoryCreate: value => dispatch(categoryCreate(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);