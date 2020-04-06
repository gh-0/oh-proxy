import { Action } from "redux";

export enum RuleTypeEnum {
  ADD_RULE = "ADD_RULE",
  DELETE_RULE = "DELETE_RULE"
}

const { ADD_RULE, DELETE_RULE } = RuleTypeEnum;

export interface RuleAction extends Action {
  payload: string;
}

export const addRule = (pattern: string) => {
  return { type: ADD_RULE, payload: pattern };
};

export const deleteRule = (pattern: string) => {
  return { type: DELETE_RULE, payload: pattern };
};