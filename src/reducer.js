import {combineReducers} from 'redux'

const updateList = (state = {tasks:[],title:"", text:"", btn:"Create New Task"}, action) => {
  switch (action.type) {
    case "UPDATE_LIST":
      /*console.log(" ********** UPDATE_LIST ******")
      console.log(action.title);
      console.log(action.text);
      */
      var obj = {};
      obj[action.title] = action.text;
      //console.log(obj);
      var arr = [];
      arr.push(obj);

      state = {
        ...state,
        tasks: state.tasks.concat(arr),
        title:"",
        text:""
      }
      break;
    case "DELETE_TASK_LIST":
      var xx = state.tasks;
      xx.splice(action.index, 1);

      state = {
        ...state,
        tasks:xx,
        btn:"Create New Task"
      }
      break;
    case "UPDATE_BUTTON_NAME":
      state = {
        ...state,
        btn:"Update Task"
      }
      break;
    case "UPDATE_TASK":
      var xx = state.tasks;
      xx.splice(action.index, 1);

      var obj = {};
      obj[action.title] = action.text;
      //console.log(obj);
      xx.push(obj);

      state = {
        ...state,
        btn:"Create New Task",
        tasks:xx
      }
      break;
    default:
      break;
  }
  return state;
}

const red = combineReducers({
  list: updateList
});

export default red;
