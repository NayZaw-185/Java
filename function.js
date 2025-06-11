function square(nums)
{
    let result=[];
    for(let i=0;i<nums.length;i++)
    {
        result.push(nums[i]*nums[i]);
    }
    return result;
  
}
square([1,2,3,4,5]).forEach((num)=>console.log(num));
console.log(square([1,2,3,4,5]));