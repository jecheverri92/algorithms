/*
  Write a function called averagePair.
  Given a sorted array of integers and a target average, determine if there is a pair of values
  in the array where the average of the pair equals the target average.
  There may be more than one pair that matches the average target.
  Time O(n), Space O(1)
*/

function averagePair(ints, avg) {   // array of integers, target avarage
  if (!ints.length) return false;   // empty array edge case

  let p1 = 0;                       // first index
  let p2 = ints.length - 1;         // last index
  
  while (p1 < p2) {
    const curAvg = (ints[p1] + ints[p2]) / 2;
    if (curAvg === avg) return true;

    curAvg > avg ? p2-- : p1++;
  }
  return false;
}

/*
  https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/quiz/4410602
  https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/t/lecture/11351742
*/