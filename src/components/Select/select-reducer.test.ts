import {reducer, ReducerActionType, StateType} from "./select-reducer";

let reduceState: StateType = {
  hovered: "",
  active: false,
};

test("dispatch close select when select already close", () => {
  expect(reduceState.hovered).toBe("");
  expect(reduceState.active).toBe(false);
  const action: ReducerActionType = {type: "CLOSE_SELECT"};
  const nextReduceState = reducer(reduceState, action);
  expect(nextReduceState.hovered).toBe("");
  expect(nextReduceState.active).toBe(false);
});

test("dispatch close select when select open", () => {
  reduceState = {...reduceState, active: true};
  expect(reduceState.hovered).toBe("");
  expect(reduceState.active).toBe(true);
  const action: ReducerActionType = {type: "CLOSE_SELECT"};
  const nextReduceState = reducer(reduceState, action);
  expect(nextReduceState.hovered).toBe("");
  expect(nextReduceState.active).toBe(false);
});

test("dispatch click select", () => {
  const action: ReducerActionType = {type: "CLICK_SELECT"};
  const stateAfterFirstClick = reducer(reduceState, action);
  expect(stateAfterFirstClick.hovered).toBe("");
  expect(stateAfterFirstClick.active).toBe(true);
});

test("dispatch click select two times", () => {
  const action: ReducerActionType = {type: "CLICK_SELECT"};
  const stateAfterFirstClick = reducer(reduceState, action);
  expect(stateAfterFirstClick.hovered).toBe("");
  expect(stateAfterFirstClick.active).toBe(true);
  const stateAfterSecondClick = reducer(stateAfterFirstClick, action);
  expect(stateAfterSecondClick.hovered).toBe("");
  expect(stateAfterSecondClick.active).toBe(false);
});

test("dispatch choose select", () => {
  let action: ReducerActionType = {type: "CHOOSE_SELECT", value : "2"};
  const firstStateAfterChooseSelect = reducer(reduceState, action);
  expect(firstStateAfterChooseSelect.hovered).toBe("2");
  expect(firstStateAfterChooseSelect.active).toBe(false);
  action = {...action, value: "3"};
  const secondStateAfterChooseSelect = reducer(reduceState, action);
  expect(secondStateAfterChooseSelect.hovered).toBe("3");
  expect(secondStateAfterChooseSelect.active).toBe(false);

});


test("throw Error if unknown action", () => {
  const action: ReducerActionType = {type: "FakeType"};
  expect(() => reducer(reduceState, action)).toThrowError("Unknown reducer action");
});