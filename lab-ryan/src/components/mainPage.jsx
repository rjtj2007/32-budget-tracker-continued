import React from 'react';
import Dashboard from './category/dashboard.jsx';

class Main extends React.Component {
    render() {
        return <React.Fragment>
            <Dashboard />
            {/* {<ExpenseList />} */}
        </React.Fragment>
    }
}

export default Main;