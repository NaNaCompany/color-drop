export const LEVELS=20;
export function makeBoard(level,rng=Math.random) {
  if (!Number.isInteger(level)||level<1||level>LEVELS) throw new RangeError('电平范围误差');
  const hue=Math.floor(rng()*360), light=39+Math.floor(rng()*11), delta=24-(level-1)*1.05;
  return {odd:Math.min(15,Math.floor(rng()*16)),base:`hsl(${hue} 55% ${light}%)`,different:`hsl(${hue} 55% ${light+delta}%)`,hue,delta};
}
export function remaining(deadline,now,penaltyMs=0){return Math.max(0,(deadline-now-penaltyMs)/1000);}
export function score(correct,mistakes){return {correct,mistakes,points:Math.max(0,correct*100-mistakes*25),title:correct===20?'不放过一丝色差':correct>=15?'看得出细微色差':correct>=8?'敏锐的色彩感觉':'今天的色彩探索者'};}
