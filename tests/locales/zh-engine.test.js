import test from 'node:test';
import assert from 'node:assert/strict';
import {makeBoard,remaining,score} from '../../docs/zh/engine.js';
test('16选择其中一个选项，最后一步的亮度差异较小',()=>{assert.equal(makeBoard(1,()=>0).odd,0);assert.equal(makeBoard(1,()=>.999).odd,15);assert.ok(makeBoard(20).delta<makeBoard(1).delta);assert.notEqual(makeBoard(20).base,makeBoard(20).different);});
test('每个错误答案扣 2 秒并降低时间限制',()=>{assert.equal(remaining(45000,1000,2000),42);assert.equal(remaining(1000,2000),0);});
test('区分分数下限和完成情况',()=>{assert.equal(score(0,10).points,0);assert.equal(score(20,0).points,2000);assert.throws(()=>makeBoard(21));});
