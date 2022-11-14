import * as ActionsType from "./ActionsType";

export const add_task = (des) => {
  return { type: ActionsType.ADD_TASK, payload: des };
};
