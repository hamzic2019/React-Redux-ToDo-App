const VisibleDate = (todos, {startDate = undefined, endDate = undefined, searchTerm = ''} = {}) => {
  return todos.filter((todo) => {
    const startDateMatch = typeof startDate !== 'number' || todo.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || todo.createdAt <= endDate; 
    const searchTermMatch = todo.title.includes(searchTerm) || false;

    return startDateMatch && endDateMatch && searchTermMatch;
  });
   
}


export default VisibleDate;