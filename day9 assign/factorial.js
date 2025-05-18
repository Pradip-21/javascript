let a=prompt("Enter a positive number")
let b=parseInt(a)
if(isNaN(b) || b<0)
{
    alert("Enter a positive number")
}

else{
    let i
    fact=1
for(i=1;i<=a;i++)
{
 fact*=i
}
alert("The factorial of " + b + " is " +fact)

}

