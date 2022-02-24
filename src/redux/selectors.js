export const getFilter = (state) => state.filter;

export const getContacts = (state) => state.items;

export const getvisibleContacts = ({ items, filter }) =>
  items.filter(({ name }) => name.toLowerCase().includes(filter));
