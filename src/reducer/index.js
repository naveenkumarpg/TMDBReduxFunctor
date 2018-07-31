module.exports = (state = 0, action) => {
  switch (action.type) {
  case 'SEARCHING':
    return Object.assign({}, state, { searching: action.payload });

  case 'SEARCH_LANDING_COMPLETE':
    return Object.assign({}, state, { landingdata: action.payload });

  case 'SEARCH_DETAIL_COMPLETE':
    return Object.assign({}, state, { detaildata: action.payload });
    
  default:
    return state
  }
}
