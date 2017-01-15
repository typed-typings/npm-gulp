// Type definitions for Gulp v3.9.1
// Project: http://gulpjs.com
// Definitions by: Marcel Mundl <Marcel@Mundlhome.de>

import * as Orchestrator from "orchestrator";
// TODO: uncomment watch once typings is ok again
import {dest, src, /* watch */} from "vinyl-fs";
import {EventEmitter} from "events";

// ** hotfix for watch() not being in typings (copied over from @types/vinyl-fs) **

/**
 * This is just a glob-watcher
 *
 * @param globs Takes a glob string or an array of glob strings as the first argument
 * Globs are executed in order, so negations should follow positive globs
 * fs.src(['!b*.js', '*.js']) would not exclude any files, but this would: fs.src(['*.js', '!b*.js'])
 */
declare function watch(globs: string|string[], cb?: (outEvt: { type: any; path: any; old: any; }) => void): EventEmitter;

/**
 * This is just a glob-watcher
 *
 * @param globs Takes a glob string or an array of glob strings as the first argument
 * Globs are executed in order, so negations should follow positive globs
 * fs.src(['!b*.js', '*.js']) would not exclude any files, but this would: fs.src(['*.js', '!b*.js'])
 */
declare function watch(globs: string|string[], opt?: { interval?: number; debounceDelay?: number; cwd?: string; maxListeners?: Function; }, cb?: (outEvt: { type: any; path: any; old: any; }) => void): EventEmitter;

// ** hotfix end **

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
