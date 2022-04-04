const shorten = title => {
    const spilitedTitle = title.split(" ");
    const newTitle = `${spilitedTitle[0]} ${spilitedTitle[1]}`
    return newTitle
}
const isIncart = (state, id) => {
    const result = !!state.selectedItems.find((item) => item.id === id)
    return result
}
const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id)
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity;
    }
}
export { shorten, isIncart, quantityCount }