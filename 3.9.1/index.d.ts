// Type definitions for Gulp v3.9.1
// Project: http://gulpjs.com
// Definitions by: Marcel Mundl <Marcel@Mundlhome.de>

import * as Orchestrator from "orchestrator";
import { dest, src, WatchOptions } from "vinyl-fs";
import { EventEmitter } from "events";
import { OutEvent } from "vinyl-fs";

declare type Task = string | ((outEvent: OutEvent) => void);

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
  /**
   * Run the specified task(s)
   * @deprecated will be removed in gulp 4.0. Use task dependencies instead.
   */
  run: typeof Orchestrator.prototype.start;
  /**
   * Run the specified task(s)
   * @deprecated will be removed in gulp 4.0. Use task dependencies instead.
   */
  start: typeof Orchestrator.prototype.start;
  /**
   * watches all files in the specified glob(s) for changes and runs the given task(s).
   * @param globs
   * @param tasks
   */
  watch(globs?: string | string[], tasks?: Task | Task[]): EventEmitter;
  watch(globs?: string | string[], opt?: WatchOptions, tasks?: Task | Task[]): EventEmitter;

  /**
   * The class is a member of itself so that packages can create seperate instances of gulp
   */
  Gulp: GulpStatic;
}

declare interface GulpStatic {
  new (): Gulp;
  (): Gulp;
  prototype: Gulp;
}

declare let inst: Gulp;
export = inst;
