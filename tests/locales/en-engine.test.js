import test from 'node:test';
import assert from 'node:assert/strict';
import {makeBoard,remaining,score} from '../../docs/en/engine.js';
test('16Pick one of the options and the end step has a smaller brightness difference',()=>{assert.equal(makeBoard(1,()=>0).odd,0);assert.equal(makeBoard(1,()=>.999).odd,15);assert.ok(makeBoard(20).delta<makeBoard(1).delta);assert.notEqual(makeBoard(20).base,makeBoard(20).different);});
test('2 second deduction per incorrect answer and lower time limit',()=>{assert.equal(remaining(45000,1000,2000),42);assert.equal(remaining(1000,2000),0);});
test('Distinguish between lower score limit and completion',()=>{assert.equal(score(0,10).points,0);assert.equal(score(20,0).points,2000);assert.throws(()=>makeBoard(21));});
