import React from 'react';
import {connect} from 'react-redux';
import {
    categoryCreate,
    categoryUpdate,
    categoryDestroy,
} from '../actions/category-actions.js';

import CategoryList from './category-list.jsx';
import CategoryForm from './category-form.jsx';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {};
    }

    render() {
        return <div>
           <h1>{this.props.addName}</h1>
           <CategoryForm name='create' createCategory={this.props.createCategory} />
           <CategoryList categories={this.props.categories}
                        categoryUpdate={this.props.categoryUpdate}
                        categoryDestroy={this.props.categoryDestroy}
           />
        </div>
    }
};

const mapStateToProps = state => ({
    appName: state.appName,
    categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        categoryCreate: (data) => dispatch(categoryCreate(data)),
        categoryUpdate: (data) => dispatch(categoryUpdate(data)),
        categoryDestroy: (data) => dispatch(categoryDestroy(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
