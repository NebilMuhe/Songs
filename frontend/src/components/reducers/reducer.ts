


export interface SongItem {
  _id: string;
  title:string;
  artist:string;
  album: number;
  genre:string;
}
interface Action {
    type: string; 
    // payload?: any; 
  }

const initialState = {}
  
const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
      case 'SOME_ACTION':
        return {
          ...state,
        }
      default:
        return state
    }
  }
  
  export default reducer
  