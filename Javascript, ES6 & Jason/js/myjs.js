function getMsg()
{
    // alert("Yes")
    var kuch_v=document.getElementById("val").value;
    // document.write(kuch_v)
    // console.log(kuch_v)
    document.getElementById("result").innerHTML=kuch_v;
}
function add()
{
    var a=parseInt(document.getElementById("a").value);
    var b=parseInt(document.getElementById("b").value);
    var res=a+b; // processing // logic 
    document.getElementById("result").innerHTML=res;


}
function prev()
{   
    document.getElementById("img1").src="assets/gallery/01.jpg"

}
function next()
{
    document.getElementById("img1").src="assets/gallery/02.jpg"
}

function showMsg()
{
    var data=document.getElementById("text1").value;
    document.getElementById("result").innerHTML=data
}
