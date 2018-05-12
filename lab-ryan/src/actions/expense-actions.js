export const EXPENSE_CREATE = 'EXPENSE_CREATE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_DESTROY = 'EXPENSE_DESTROY';

export function expenseCreate(value) {
    return {type: EXPENSE_CREATE, value};
}

export function expenseUpdate(value) {
    return {type: EXPENSE_UPDATE, value};
}

export function expenseDestroy(value) {
    return {type: EXPENSE_DESTROY, id};
}