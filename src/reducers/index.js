import { combineReducers } from 'redux';
import BooksReducer form './reducer_books';
const rootReducer = combineReducers({
  // state: (state = {}) => state
  books:BooksReducer
});

export default rootReducer;
