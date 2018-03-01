function fibonachi(stop)
{
  let next;
  let previous = 1;
  let number = 1;
  for(let i = 0 ;i<stop-2 ;i++)
    {
      let temp;
     
      next = previous + number;
       
      temp = number;
      number = next;
      previous = temp;
      
    }
  return number;
}

document.write(fibonachi(6)+"<br>");


function fibon(stop)
{
  let next;
  let previous = 1;
  let number = 1;
  let arr = [1,1];
  for(let i = 0 ;i<stop-1;i++)
    {
      let temp;
      next = previous + number;
      arr.push(next);
      temp = number;
      number = next;
      previous = temp;
      
    }
  return arr[stop-1];
}

document.write(fibon(6));
  