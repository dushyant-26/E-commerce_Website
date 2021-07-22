var i=1;
function fun(){
if(i==3)
i=0;
i++;
if(i==2)
document.getElementById("img1").src='banner2.jpg';
else if(i==3)
document.getElementById("img1").src='banner3.jpg';
else
document.getElementById("img1").src='banner.jpeg';

}
function b()
{  
	var x=document.getElementById('table');
	var a=localStorage.getItem('name');
	console.log(a);
	if(a===null)
	{x.rows[0].cells[x.rows[0].cells.length-2].innerHTML="<i class='fa fa-user-circle' ></i>Hello,SignIn";
document.getElementById("t3").style.visibility='visible';
	 document.getElementById("logout").style.visibility='hidden';}
	else
	{x.rows[0].cells[x.rows[0].cells.length-2].innerHTML="<i class='fa fa-user-circle' ></i>Hello,"+a;
     document.getElementById("t3").style.visibility='hidden';
	 document.getElementById("logout").style.visibility='visible';
}
}
function buy(){
	document.getElementById("add").style.display='block';
	document.getElementById("order").style.display='none';
	document.getElementById("feat").style.display='none';
	total();
}
var magic;
function add(){
	if(document.getElementById('CARD').checked)
	{document.getElementById("card").style.display='block';
document.getElementById("add").style.display='none';
localStorage.setItem("pmode",'Debit Card');
}
else if(document.getElementById('COD').checked)
{
	document.getElementById("add").style.display='none';
	document.getElementById("tp").style.display='block';
	 magic=setInterval(charu,10);
	 localStorage.setItem("pmode",'COD');
}
else
	alert("please select an payment option");
}
function card(){
	document.getElementById("card").style.display='none';
	document.getElementById("tp").style.display='block';
	 magic=setInterval(charu,10);
}
var width=0;
function charu(){
	if(width!=100)
{width++;
document.getElementById("charu").style.width=width+"%";}
else{clearInterval(magic);
alert('Your order has been placed');
document.getElementById("tp").style.display='none';
det();
}
}
function det(){
	var d = new Date();
var name=localStorage.getItem('name');
var phone=localStorage.getItem('phone');
var house=document.getElementById("house").value;
var colony=document.getElementById("colony").value;
var city=document.getElementById("city").value;
var state=document.getElementById("state").value;
let price=document.getElementById("price").value;
let quantity=document.getElementById("quantity").value;
let iname=document.getElementById("iname").innerHTML;
document.getElementById("summary").innerHTML="<h1>Order Summary:</h1>";
var cost=price*quantity;
var address=house+","+colony+","+city+","+state;

document.getElementById("summary").innerHTML+="<strong>Name:</strong> &nbsp &nbsp &nbsp  "+name+"<br>";
document.getElementById("summary").innerHTML+="<strong>Contact:</strong>&nbsp &nbsp  "+phone+"<br>";
document.getElementById("summary").innerHTML+="<strong>Address:</strong>&nbsp &nbsp  "+address+"<br>";
document.getElementById("summary").innerHTML+="<strong>Item Name:</strong>&nbsp &nbsp  "+iname+"<br>";
document.getElementById("summary").innerHTML+="<strong>Price:</strong>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp "+"&#8377;"+price+"<br>";
document.getElementById("summary").innerHTML+="<strong>Quantity:</strong>&nbsp &nbsp &nbsp &nbsp &nbsp "+quantity+"<br>";
document.getElementById("summary").innerHTML+="<strong>Payment Mode:</strong>"+localStorage.getItem('pmode')+"<br>";
document.getElementById("summary").innerHTML+="<strong>Total cost:</strong> &nbsp &nbsp &nbsp &nbsp "+"Rs"+cost+"<br>";
document.getElementById("summary").innerHTML+= "<strong>Order Date:</strong> &nbsp &nbsp  "+d.toDateString()+"<br>";
document.getElementById("summary").innerHTML+= "<strong>Order Time:</strong> &nbsp &nbsp  "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+"<br>";
document.getElementById("summary").innerHTML+=" &nbsp &nbsp &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp  <button onclick='ret();' id='but'>Shop More</button>";
setInterval(but,1000);
}
function ret()
{
	window.open('mainpage.html','_self');
}
function total(){
	
	let price=document.getElementById("price").value;
let quantity=document.getElementById("quantity").value;
if(quantity<=5)
{let total=price*quantity;
document.getElementById("total").innerHTML='&#8377;'+total;}
else
{alert("maximum quantity you can order is 5 ");
document.getElementById("quantity").value=5;
}
}
function sign(){
	window.open("SignInForm.html","_self");
}
function logout(){
	var a=confirm("Are you sure,you want to logout?");
	if(a)
	{localStorage.removeItem("name");
	b();}
	//window.open('mainpage.html',"_self");
}
function remember(){
	var a=localStorage.getItem('rem');
	if(a==1)
	{
		document.getElementById('mobile').value=localStorage.getItem('phone');
		document.getElementById('pwd').value=localStorage.getItem('password');
	}
}
function LOGIN(){
	var m1=document.getElementById("mobile").value;
    var m2=localStorage.getItem('phone');
	var p1=document.getElementById("pwd").value;
    var p2=localStorage.getItem('password');
if((p1==p2)&&(m1==m2))
{
	localStorage.setItem('name',localStorage.getItem('alt'));
window.open("mainpage.html","_self");
}
else{
alert("Invalid UserName/Password");
}}
var a=0;
function head(){
	
	if(a==4)
		a=0;
	if(a==1)
	document.getElementById('t1').style.color='cyan';
else if(a==2)
		document.getElementById('t1').style.color='yellow';
else if(a==3)
		document.getElementById('t1').style.color='orange';
else 
		document.getElementById('t1').style.color='white';

	a++;
}
function but(){
	
	if(a==4)
		a=0;
	if(a==1)
	document.getElementById('but').style.backgroundColor='pink';
else if(a==2)
		document.getElementById('but').style.backgroundColor='yellow';
else if(a==3)
		document.getElementById('but').style.backgroundColor='orange';
else 
		document.getElementById('but').style.backgroundColor='cyan';

	a++;
}
function addtocart(){
	var a=localStorage.getItem('cart1');
	var b=localStorage.getItem('cart2');
	var c=localStorage.getItem('cart3');
	var d=localStorage.getItem('cart4');
	var e=localStorage.getItem('cart5');
	var f=localStorage.getItem('cart6');
	var g=localStorage.getItem('cart7');
	document.getElementById('m31q').value=a;
	document.getElementById('7tq').value=b;
	document.getElementById('nordq').value=c;
	document.getElementById('8q').value=d;
	document.getElementById('9q').value=e;
	document.getElementById('aq').value=f;
	document.getElementById('sq').value=g;
	if(a==0)
		document.getElementById('ca1').style.display='none';
	else
		document.getElementById('ca1').style.display='table-row';
	if(b==0)
		document.getElementById('ca2').style.display='none';
	else
		document.getElementById('ca2').style.display='table-row';
	if(c==0)
		document.getElementById('ca3').style.display='none';
	else
		document.getElementById('ca3').style.display='table-row';
	if(d==0)
		document.getElementById('ca4').style.display='none';
	else
		document.getElementById('ca4').style.display='table-row';
	if(e==0)
		document.getElementById('ca5').style.display='none';
	else
		document.getElementById('ca5').style.display='table-row';
	if(f==0)
		document.getElementById('ca6').style.display='none';
	else
		document.getElementById('ca6').style.display='table-row';
	if(g==0)
		document.getElementById('ca7').style.display='none';
	else
		document.getElementById('ca7').style.display='table-row';
	if(a==0&&b==0&&c==0&&d==0&&e==0&&f==0&&g==0)
	{document.getElementById('tot').style.display='none';
    document.getElementById('Dushyant').innerHTML="Your Cart is Empty";
document.getElementById('but').style.display='none';
}
	else
		document.getElementById('tot').style.display='table-row';
	total1();
		
}
function total1(){
	var aq=document.getElementById('m31q').value;
	var ap=document.getElementById('m31p').value;
	var bq=document.getElementById('7tq').value;
	var bp=document.getElementById('7tp').value;
	var cq=document.getElementById('nordq').value;
	var cp=document.getElementById('nordp').value;
	var dq=document.getElementById('8q').value;
	var dp=document.getElementById('8p').value;
	var eq=document.getElementById('9q').value;
	var ep=document.getElementById('9p').value;
	var fq=document.getElementById('aq').value;
	var fp=document.getElementById('ap').value;
	var gq=document.getElementById('sq').value;
	var gp=document.getElementById('sp').value;
	if(aq>5)
	{alert("maximum quantity you can order is 5 ");
     document.getElementById("m31q").value=5;
     aq=5;
    }
	if(bq>5)
	{alert("maximum quantity you can order is 5 ");
     document.getElementById("7tq").value=5;
     bq=5;
    }
	if(cq>5)
	{alert("maximum quantity you can order is 5 ");
     document.getElementById("nordq").value=5;
     cq=5;
    }
	if(dq>5)
	{alert("maximum quantity you can order is 5 ");
     document.getElementById("8q").value=5;
     dq=5;
    }
	if(eq>5)
	{alert("maximum quantity you can order is 5 ");
     document.getElementById("9q").value=5;
     eq=5;
    }
	if(fq>5)
	{alert("maximum quantity you can order is 5 ");
     document.getElementById("aq").value=5;
     fq=5;
    }
	if(gq>5)
	{alert("maximum quantity you can order is 5 ");
     document.getElementById("sq").value=5;
     gq=5;
    }
	localStorage.setItem('cart1',aq);
	localStorage.setItem('cart2',bq);
	localStorage.setItem('cart3',cq);
	localStorage.setItem('cart4',dq);
	localStorage.setItem('cart5',eq);
	localStorage.setItem('cart6',fq);
	localStorage.setItem('cart7',gq);
	var tot1=aq*ap;
	var tot2=bq*bp;
	var tot3=cq*cp;
	var tot4=dq*dp;
	var tot5=eq*ep;
	var tot6=fq*fp;
	var tot7=gq*gp;
	document.getElementById('to1').value=tot1;
	document.getElementById('to2').value=tot2;
	document.getElementById('to3').value=tot3;
	document.getElementById('to4').value=tot4;
	document.getElementById('to5').value=tot5;
	document.getElementById('to6').value=tot6;
	document.getElementById('to7').value=tot7;
	document.getElementById('tott').value=tot1+tot2+tot3+tot4+tot5+tot6+tot7;
	document.getElementById('total1').innerHTML+=tot1+tot2+tot3+tot4+tot5+tot6+tot7;
	
}
function buy1(){
	document.getElementById('box').style.display='none';
	document.getElementById('box1').style.display='block';
}
function add1(){
	if(document.getElementById('CARD').checked)
	{
localStorage.setItem("pmode",'Debit Card');
		document.getElementById('box1').style.display='none';
	document.getElementById('box2').style.display='block';}
	else if(document.getElementById('COD').checked)
{
	document.getElementById("box1").style.display='none';
	document.getElementById("box3").style.display='block';
	 magic=setInterval(charu1,10);
	 localStorage.setItem("pmode",'COD');
}
else
	alert("please select an payment option");
		
}
function card1(){
	document.getElementById("box2").style.display='none';
	document.getElementById("box3").style.display='block';
	 magic=setInterval(charu1,10);
}
function det1(){

	var d = new Date();
var name=localStorage.getItem('name');
var phone=localStorage.getItem('phone');
var house=document.getElementById("house").value;
var colony=document.getElementById("colony").value;
var city=document.getElementById("city").value;
var state=document.getElementById("state").value;
document.getElementById("summary1").innerHTML="<h1>Order Summary:</h1>";
var address=house+","+colony+","+city+","+state;

document.getElementById("summary1").innerHTML+="<strong>Name:</strong> &nbsp &nbsp &nbsp  "+name+"<br>";
document.getElementById("summary1").innerHTML+="<strong>Contact:</strong>&nbsp &nbsp  "+phone+"<br>";
document.getElementById("summary1").innerHTML+="<strong>Address:</strong>&nbsp &nbsp  "+address+"<br>";
//document.getElementById("summary").innerHTML+="<strong>Item Name:</strong>&nbsp &nbsp  "+iname+"<br>";
//document.getElementById("summary").innerHTML+="<strong>Price:</strong>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp "+"&#8377;"+price+"<br>";
//document.getElementById("summary").innerHTML+="<strong>Quantity:</strong>&nbsp &nbsp &nbsp &nbsp &nbsp "+quantity+"<br>";
document.getElementById("summary1").innerHTML+="<strong>Payment Mode:</strong>"+localStorage.getItem('pmode')+"<br>";
document.getElementById("summary1").innerHTML+="<strong>Total cost:</strong> &nbsp &nbsp &nbsp &nbsp "+"Rs"+document.getElementById('tott').value+"<br>";
document.getElementById("summary1").innerHTML+= "<strong>Order Date:</strong> &nbsp &nbsp  "+d.toDateString()+"<br>";
document.getElementById("summary1").innerHTML+= "<strong>Order Time:</strong> &nbsp &nbsp  "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+"<br>";
document.getElementById("summary1").innerHTML+=" &nbsp &nbsp &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp  <button onclick='ret1();' id='but'>Shop More</button>";
setInterval(but,1000);
}
var width1=0;
function charu1(){
	if(width1!=100)
{width1++;
document.getElementById("charu1").style.width=width1+"%";}
else{clearInterval(magic);
alert('Your order has been placed');
document.getElementById("box3").style.display='none';
det1();
}
}
function ret1(){
	localStorage.removeItem('cart1');
	localStorage.removeItem('cart2');
	localStorage.removeItem('cart3');
	localStorage.removeItem('cart4');
	localStorage.removeItem('cart5');
	localStorage.removeItem('cart6');
	localStorage.removeItem('cart7');
	addtocart();
	window.open('mainpage.html','_self');
}