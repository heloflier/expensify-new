import uuid from 'uuid';
import database from '../firebase/firebase';

// --------------------------------------------
// FRONT END ONLY:
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// EXAMPLE:
// ADD_EXPENSE
// export const addExpense = ({
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0
// } = {}) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// });
// --------------------------------------------

// INCLUDING FIREBASE DATABASE OPERATIONS:
// component calls action generator
// action generator returns FUNCTION
// component dispatches FUNCTION (?)
// function runs (has the ability to dispatch other actions
// and do whatever it wants)
//
// To implement this, redux-thunk needs to be installed
// --------------------------------------------

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// START_REMOVE_EXPENSE
export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {

        let dbId = `expenses/${id}`;

        return database.ref(dbId).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// START_EDIT_EXPENSE
export const startEditExpense = (id, updates) => {
    return (dispatch) => {

        let dbId = `expenses/${id}`;

        return database.ref(dbId).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

// START_SET_EXPENSES
export const startSetExpenses = () => {
    return (dispatch) => {

        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            console.log(expenses);

            dispatch(setExpenses(expenses));
        });
    };
};