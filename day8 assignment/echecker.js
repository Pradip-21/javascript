let a=prompt("Enter any value")
if(a=="true" || a=="false")
{
    alert("Type is a boolean")
}
else if(a==" ")
{
    alert("Type is undefined")
}
else if(a===null)
{
    alert("Type is null")
}
else {
    if(isNaN(a))
    {
        alert("It is a string")
    }
    if(a==Number(a))
    {
        alert("It is a number")
    }
}