import {normalizedData} from '../../actions/data.actions';

export const normalizeMiddleware = ({ dispatch }) => (next) => (action) => {
    if(action.type.includes('Set') && action.meta.normalizeId) {

       dispatch(normalizedData(action.meta.entity));

       const data = action.payload.reduce((acc, item) => {
           acc[item.id] = item;
           return acc;
       }, {});

       next( { ...action, payload: data, meta: { normalizeId: null }  } )
    } else {
        next(action);
    }
};

