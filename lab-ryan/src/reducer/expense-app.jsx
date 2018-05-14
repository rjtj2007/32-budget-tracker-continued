import {
    EXPENSE_CREATE,
    EXPENSE_UPDATE,
    EXPENSE_DESTROY,
} from '../actions/expense-actions.js';
import uuidv1 from 'uuid/v1';

const origionalState = {
    expenses: [], 
}

export default function expenseReducer(state, action) {
    if(state === undefined) {
        return origionalState;
    }
    let newState = {};
    let currentExpenses;
    let expenseIndex;

    switch(action.type) {

        case EXPENSE_CREATE:

            currentExpenses = state.expenses.slice();
            let newExpense = Object.assign({}, {id: uuidv1(), isEditing: false}, action.value);
            currentExpenses.push(newExpense);
            return Object.assign(newState, state, {expenses: currentExpenses});
        
        case EXPENSE_UPDATE:

            currentExpenses = state.expenses.slice();
            let expenseToUpdate = currentExpenses.find(expense => {
                return expense.id === action.value.id;
            });

            expenseIndex = currentExpenses.indexOf(expenseToUpdate);
            currentExpenses[expenseIndex].isEditing = !currentExpenses[expenseIndex].isEditing;
            if(action.value.name) {
                currentExpenses[expenseIndex].name = action.value.name;
            }
            if(action.values.budget) {
                currentExpenses[expense.Index].budget = action.value.budget;
            }
            return Object.assign(newState, state, {expenses: currentExpenses});
        
        case EXPENSE_DESTROY:

            currentExpenses = state.expenses.slice();
            let categoryToRemove = currentExpenses.find(expense => {
                return expense.id === action.id;
            });
            
            expenseIndex = currentExpenses.indexOf(expenseToRemove);
            currentExpenses.splice(expenseIndex, 1);
            return Object.assign(newState, state, {expenses: currentExpenses});
        default: return state;
    }
}