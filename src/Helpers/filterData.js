
// Checks if a sample passes the table filtering model.
// Mui free only allows for single field filtering at the moment.
const filterCheck = (sample, filterModel) => {
  const filter = filterModel[0];
  if (filter && filter.value) {
    switch (filter.operator) {
      case '>':
        return sample[filter.field] > filter.value;
      case '>=':
        return sample[filter.field] >= filter.value;
      case '<':
        return sample[filter.field] < filter.value;
      case '<=':
        return sample[filter.field] <= filter.value;
      case 'contains':
        return sample[filter.field].toString().toLowerCase().includes(filter.value.toLowerCase());
      default:
        return true;
    }
  }
  return true;
};

export { filterCheck };
