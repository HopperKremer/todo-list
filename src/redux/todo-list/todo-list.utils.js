//Utility functions allow us to keep files clean and organize functions

export const addItemToList = (listItems, listItemToAdd) => {
  // const existingListItem = listItems.find(
  //     listItem => listItem.id === listItemToAdd.id
  // )

  //Find Method returns true or undef
  // if(existingListItem){
  //     return listItems.map(
  //         listItem =>
  //         (listItem.id === listItemToAdd.id) ?
  //         {...listItem, quantity: listItem.quantity +1}
  //         :
  //         listItem
  //     )
  // }
  // return [...listItems, {...listItemToAdd, quantity: 1}]
  return [...listItems, { ...listItemToAdd }];
  //return listItems.push(listItemToAdd);
};

export const removeItemFromList = (listItems, listItemToRemove) => {
  const existingListItem = listItems.find(
    (listItem) => listItem.id === listItemToRemove.id
  );

  //Find Method returns true or undef

  if (existingListItem) {
    return listItems.map((listItem) =>
      listItem.id === listItemToRemove.id
        ? { ...listItem, quantity: listItem.quantity - 1 }
        : listItem
    );
  }
  return [...listItems, { ...listItemToRemove, quantity: 1 }];
};
