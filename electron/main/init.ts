import { checkConfig } from "./config";

export function init(): void{
  //主进程初始化做的事
  checkConfig()
}