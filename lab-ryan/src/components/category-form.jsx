import React from 'react';
import {connect} from 'react-redux';
import {
    categoryCreate,
    categoryUpdate,
} from '../actions/category-actions.js';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            budget: 0,
            isEditing: false
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
            this.props.categoryCreate(this.state);
        } else if (this.props.name === 'update') {
            let newValue = Object.assign(this.state, {isEditing: false, id: this.props.id});
            this.props.categoryUpdate(this.state);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h3>Enter a new Budget Item</h3>
                <input onChange={this.handleNameChange} name="name" type="text" placeholder="category name" required="true"/>
                <input onChange={this.handleBudgetChange} name="budget" type="text" placeholder="budget" required="true"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories.categories
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        categoryCreate: value => dispatch(categoryCreate(value)),
        categoryUpdate: value => dispatch(categoryUpdate(value)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryForm);