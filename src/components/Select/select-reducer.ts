
export type StateType = {
  active: boolean
  hovered: any
}

export type ReducerActionType = {
  type: string
  value?: any
}

type ReducerType = (state: StateType, action: ReducerActionType) => StateType
export const reducer: ReducerType = (state: StateType, action: ReducerActionType) => {
  switch (action.type) {
    case "CLOSE_SELECT":
      return {hovered: action.value || '', active: false};
    case "CLICK_SELECT":
      return {...state, active: !state.active};
    case "CHOOSE_SELECT":
      return {...state, hovered: action.value};
    default:
      throw new Error("Unknown reducer action");
  }
};
