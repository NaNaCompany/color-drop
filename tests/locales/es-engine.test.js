import test from 'node:test';
import assert from 'node:assert/strict';
import {makeBoard,remaining,score} from '../../docs/es/engine.js';
test('16Elija una de las opciones y el paso final tendrá una diferencia de brillo menor',()=>{assert.equal(makeBoard(1,()=>0).odd,0);assert.equal(makeBoard(1,()=>.999).odd,15);assert.ok(makeBoard(20).delta<makeBoard(1).delta);assert.notEqual(makeBoard(20).base,makeBoard(20).different);});
test('Deducción de 2 segundos por respuesta incorrecta y límite de tiempo inferior',()=>{assert.equal(remaining(45000,1000,2000),42);assert.equal(remaining(1000,2000),0);});
test('Distinguir entre límite de puntuación inferior y finalización',()=>{assert.equal(score(0,10).points,0);assert.equal(score(20,0).points,2000);assert.throws(()=>makeBoard(21));});
