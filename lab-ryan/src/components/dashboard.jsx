import React from 'react';
import CategoryList from './category-list.jsx';
import CategoryForm from './category-form.jsx';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
           <CategoryForm name='create' />
           <CategoryList />
        </div>
    }
};

export default Dashboard;
