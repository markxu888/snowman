import { request } from "./request";

export function getBlackBoardMult() {
  return request({
    url: '/blackboard/mult'
  })
}