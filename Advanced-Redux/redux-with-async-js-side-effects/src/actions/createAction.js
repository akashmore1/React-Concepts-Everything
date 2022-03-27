import * as actionTypes from "../constants/actionTypes";
export default function createAction(
  type,
  status = actionTypes.ActionPending,
  props = {}
) {
  return {
    type,
    status,
    ...props,
  };
}
