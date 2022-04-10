export default (influencers = [], action) => {
  switch(action.type) {
    case 'FETCH_ALL':
      return action.payload
    case 'CREATE':
      return [...influencers, action.payload]
    case 'UPDATE':
      return influencers.map((influencer) => (influencer._id === action.payload._id ? action.payload : influencer))
    case 'DELETE':
      return influencers.filter((influencer) => influencer._id !== action.payload)
    default:
      return influencers
  }
}