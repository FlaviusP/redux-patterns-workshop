import React from 'react';
import {connect} from 'react-redux';
import {fetchBooks, undoFetch} from '../redux/actions/books.actions';

const Dispatchers = ({ fetch, undo}) => (
  <div className="dispatchers">
    <input className="dispatch-input" />
    <button className="dispatch-button" onClick={fetch}>Dispatch</button>    
    <button className="dispatch-button" onClick={undo}><i className="fa fa-undo" /></button>    

  </div>
);

export default connect(null,{ fetch: fetchBooks, undo: undoFetch })(Dispatchers);
