import {
    CATEGORY_CREATE,
    CATEGORY_UPDATE,
    CATEGORY_DESTROY,
} from '../actions/category-actions.js';
import uuidv1 from 'uuid/v1';

const origionalState = {
    categories: [], 
}

export default function categoryReducer(state, action) {
    if(state === undefined) {
        return origionalState;
    }
    let newState = {};
    let currentCategories;
    let categoryIndex;

    switch(action.type) {

        case CATEGORY_CREATE:

            currentCategories = state.categories.slice();
            let newCategory = Object.assign({}, {id: uuidv1(), isEditing: false}, action.value);
            currentCategories.push(newCategory);
            return Object.assign(newState, state, {categories: currentCategories});
        
        case CATEGORY_UPDATE:

            currentCategories = state.categories.slice();
            let categoryToUpdate = currentCategories.find(category => {
                return category.id === action.value.id;
            });

            categoryIndex = currentCategories.indexOf(categoryToUpdate);
            currentCategories[categoryIndex].isEditing = !currentCategories[categoryIndex].isEditing;
            if(action.value.name) {
                currentCategories[categoryIndex].name = action.value.name;
            }
            if(action.value.number) {
                currentCategories[categoryIndex].number = action.value.number;
                        }
            return Object.assign(newState, state, {categories: currentCategories});
        
        case CATEGORY_DESTROY:

            currentCategories = state.categories.slice();
            let categoryToRemove = currentCategories.find(category => {
                return category.id === action.id;
            });
            
            categoryIndex = currentCategories.indexOf(categoryToRemove);
            currentCategories.splice(categoryIndex, 1);
            return Object.assign(newState, state, {categories: currentCategories});
        default: return state;
    }
}