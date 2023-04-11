const initialTodo=[
   
];
const handleTaskReducer = ((state=initialTodo,action)=>{
    switch(action.type){
        case "ADD_TASK" :
            state = [...state,action.payload]
            return state;
        default :
        return state;
    }
})
export default handleTaskReducer;