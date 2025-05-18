    let a=parseInt(prompt("Enter how many even numbers to sum: "))
    let sum=0
    let even =2
    let i
    for(i=0;i<a;i++)
    {
        sum+=even
        even+=2
    }
    alert("Sum of first"+ a+" even numbers is: "+sum)