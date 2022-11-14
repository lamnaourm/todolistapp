import * as ActionsType from "./ActionsType";

const initial_state = {
  lastid: 3,
  tasks: [
    {
      id: 1,
      task: "Reviser Javascript",
      completed: false,
    },
    {
      id: 2,
      task: "Reviser Javas",
      completed: true,
    },
    {
      id: 3,
      task: "Reviser Python",
      completed: false,
    },
  ],
};

const ReducerTodo = (state = initial_state, action) => {
  switch (action.type) {
    case ActionsType.ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: state.lastid + 1, task: action.payload, completed: false },
        ],
        lastid: state.lastid + 1,
      };
    case ActionsType.COMPLETE_TASK:
      var taches = state.tasks.map((item) =>
        item.id == action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
      return { ...state, tasks: taches };
    case ActionsType.DELETE_TASK:
      var taches = state.tasks.filter((item) => item.id != action.payload);
      return { ...state, tasks: taches };
    case ActionsType.DELETE_ALL:
      return { ...state, tasks: [], lastid: 1 };
    case ActionsType.DELETE_COMP:
      var taches = state.tasks.filter((item) => item.completed);
      return { ...state, tasks: taches };
    case ActionsType.DELETE_INCOMP:
      var taches = state.tasks.filter((item) => !item.completed);
      return { ...state, tasks: taches };
  }
  return state;
};

export default ReducerTodo;
