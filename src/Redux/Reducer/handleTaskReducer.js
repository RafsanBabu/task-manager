const initialTodo=[
   
];
const handleTaskReducer = ((taskState=initialTodo,action)=>{
    switch(action.type){
        case "ADD_TASK" :
            taskState = [...taskState,action.payload]
            return taskState;
        default :
        return taskState;
    }
})
export default handleTaskReducer;