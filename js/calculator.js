let output=document.getElementById("output");
function display(num)
{
    output.value+=num;
}
function Calculate()
{
    try{
        output.value=eval(output.value);
    }
    catch(error)
    {
        alert("INVALID");
    }
}
function Clear()
{
    output.value="";
}
function del()
{
    output.value=output.value.slice(0,-1);
}