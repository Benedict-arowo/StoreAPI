const replacer = (match) => {
  let returnValue;
  switch (match) {
    case '>':
      returnValue = 'gt';
      break;
    case '=>':
      returnValue = 'gte';
      break;
    case '<':
      returnValue = 'lt';
      break;
    case '=<':
      returnValue = 'lte';
      break;
    case '=':
      returnValue = 'eq';
      break;
    case '!=':
      returnValue = 'ne';
      break;
  }

  return `-$${returnValue}-`; // Returns the right mongo keyword, with '-' to be able to split easily
};

module.exports = replacer;
