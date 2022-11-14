
const initial_state = {
    lastid:3,
    tasks : [
        {
            id:1,
            task: "Reviser Javascript",
            completed: false
        },
        {
            id:2,
            task: "Reviser Javas",
            completed: true
        },
        {
            id:3,
            task: "Reviser Python",
            completed: false
        }
    ]
}

const ReducerTodo = (state = initial_state, action) => {
    return state;
}

export default ReducerTodo;
