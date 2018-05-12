import { combineReducers } from 'redux';

import categoryApp from './category-app.jsx';
import expenseApp from './expense-app.jsx';

export default combineReducers ({
    silly: categoryApp,
    expenses: expenseApp
});