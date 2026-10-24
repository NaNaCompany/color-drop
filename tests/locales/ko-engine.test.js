import test from 'node:test';
import assert from 'node:assert/strict';
import {makeBoard,remaining,score} from '../../docs/ko/engine.js';
test('16개 중 하나를 고르고 끝 단계가 더 작은 밝기 차이를 가짐',()=>{assert.equal(makeBoard(1,()=>0).odd,0);assert.equal(makeBoard(1,()=>.999).odd,15);assert.ok(makeBoard(20).delta<makeBoard(1).delta);assert.notEqual(makeBoard(20).base,makeBoard(20).different);});
test('오답당 2초 차감과 시간 하한',()=>{assert.equal(remaining(45000,1000,2000),42);assert.equal(remaining(1000,2000),0);});
test('점수 하한과 완주 구분',()=>{assert.equal(score(0,10).points,0);assert.equal(score(20,0).points,2000);assert.throws(()=>makeBoard(21));});
