export function addToListAction(payload) {
    return{
        type: 'ADD_TO_List',
        payload,
    }
}

export function removeFromListAction(payload) {
    return{
        type: 'REMOVE_FROM_LIST',
        payload,
    }
}