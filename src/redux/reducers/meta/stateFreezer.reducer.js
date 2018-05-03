// deep freeze (nested) utility function
function deepFreeze (obj) {
  Object.freeze(obj);

  const oIsFunction = typeof obj === "function";
  const hasOwnProp = Object.prototype.hasOwnProperty;

  Object.getOwnPropertyNames(obj).forEach(function (prop) {
    if (hasOwnProp.call(obj, prop)
    && (oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true )
    && obj[prop] !== null
    && (typeof obj[prop] === "object" || typeof obj[prop] === "function")
    && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });
  
  return obj;
};

export function stateFreezer (reducer) {
  return function freezer (state, action) {    
      // freeze the state and run the reduc    
      deepFreeze(state);    
      const newState = reducer(state, action);

      // freeze and return the result state
      deepFreeze(newState);
      return newState; 
  }
} 
