export const LEVELS=20;
export function makeBoard(level,rng=Math.random) {
  if (!Number.isInteger(level)||level<1||level>LEVELS) throw new RangeError('레벨 범위 오류');
  const hue=Math.floor(rng()*360), light=39+Math.floor(rng()*11), delta=24-(level-1)*1.05;
  return {odd:Math.min(15,Math.floor(rng()*16)),base:`hsl(${hue} 55% ${light}%)`,different:`hsl(${hue} 55% ${light+delta}%)`,hue,delta};
}
export function remaining(deadline,now,penaltyMs=0){return Math.max(0,(deadline-now-penaltyMs)/1000);}
export function score(correct,mistakes){return {correct,mistakes,points:Math.max(0,correct*100-mistakes*25),title:correct===20?'한 방울도 놓치지 않는 눈':correct>=15?'색의 미세한 차이를 읽는 눈':correct>=8?'꽤 섬세한 색 감각':'오늘의 색 탐험가'};}
