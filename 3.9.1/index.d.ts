// Type definitions for Gulp v3.9.1
// Project: http://gulpjs.com
// Definitions by: Marcel Mundl <Marcel@Mundlhome.de>

import Orchestrator = require("orchestrator");
import {dest, src, watch} from "vinyl-fs";

declare interface RunMethod {
  /**
   * Run the "default" task
   * @deprecated will be removed in gulp 4.0. Use task dependencies instead.
   */
  (): void;
  /**
   * Run a previously defined task
   * @param taskName The name of the task to run (optional)
   * @deprecated will be removed in gulp 4.0. Use task dependencies instead.
   */
  (taskName: string): void;
}

declare interface Gulp {
  dest: typeof dest;
  src: typeof src;
  /**
   * Define a task
   * @param name The name of the task.
   * @param deps An array of task names to be executed and completed before your task will run.
   * @param fn The function that performs the task's operations. For asynchronous tasks, you need to provide a hint when the task is complete:
   * <ul>
   *     <li>Take in a callback</li>
   *     <li>Return a stream or a promise</li>
   * </ul>
   */
  task: typeof Orchestrator.prototype.add;
  run: RunMethod;
  watch: typeof watch;
  /**
   * The class is a member of itself so that packages can create seperate instances of gulp
   */
  Gulp: GulpStatic;
}

declare interface GulpStatic {
  new (): Gulp;
  prototype: Gulp;
}

declare let inst: Gulp;
export = inst;
