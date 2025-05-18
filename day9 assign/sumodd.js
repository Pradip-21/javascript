let a=parseInt(prompt("Enter how many odd numbers to sum: "))
let i
let sum=0
let odd=1
for(i=0;i<a;i++)
{
 sum+=odd
 odd+=2
}
alert("The sum of "+ a +" is "+ sum)