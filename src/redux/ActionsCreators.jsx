import * as ActionsType from "./ActionsType";

export const add_task = (des) => {
  return { type: ActionsType.ADD_TASK, payload: des };
};

export const complete_task = (id) => {
  return { type: ActionsType.COMPLETE_TASK, payload: id };
};

export const delete_task = (id) => {
  return { type: ActionsType.DELETE_TASK, payload: id };
};

export const deleteAll_task = () => {
  return { type: ActionsType.DELETE_ALL };
};

export const deleteCOMP_task = () => {
  return { type: ActionsType.DELETE_COMP };
};

export const deleteINCOMP_task = () => {
  return { type: ActionsType.DELETE_INCOMP };
};
