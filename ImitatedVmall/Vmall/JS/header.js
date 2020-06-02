var a1=0;
var a2=0;
//菜单栏的显示和隐藏
function min(a,f)
{
    if(f==1)
    {
        a1=1;
    }
    if(f==2)
    {
        a2=1;
    }
    if(a1==1||a2==1)
    {
        var d1=document.getElementById(a);
        d1.style.backgroundColor="#fff";
        d1.style.color="#CA151D";
        document.getElementById("mo1").style.visibility="unset";
    }
}
function mout(a,f)
{
    if(f==1)
    {
        a1=0;
    }
    if(f==2)
    {
        a2=0;
    }
    if(a1==0&&a2==0)
    {
        var d1=document.getElementById(a);
        d1.style.backgroundColor="#2E2828";
        d1.style.color="#B6B6B6";
        document.getElementById("mo1").style.visibility="hidden";
    }
}
/* ----------------------------------*/ 
var b1=0;
var b2=0;
function min1(a,f)
{
    if(f==1)
    {
        b1=1;
    }
    if(f==2)
    {
        b2=1;
    }
    if(b1==1||b2==1)
    {
        var d1=document.getElementById(a);
        d1.style.backgroundColor="#fff";
        d1.style.color="#CA151D";
        document.getElementById("kfm").style.visibility="unset";
    }
}
function mout1(a,f)
{
    if(f==1)
    {
        b1=0;
    }
    if(f==2)
    {
        b2=0;
    }
    if(b1==0&&b2==0)
    {
        var d1=document.getElementById(a);
        d1.style.backgroundColor="#2E2828";
        d1.style.color="#B6B6B6";
        document.getElementById("kfm").style.visibility="hidden";
    }
}
/* ----------------------------------*/ 

/* ----------------------------------*/ 
var c1=0;
var c2=0;
function min2(a,f)
{
    if(f==1)
    {
        c1=1;
    }
    if(f==2)
    {
        c2=1;
    }
    if(c1==1||c2==1)
    {
        var d1=document.getElementById(a);
        d1.style.backgroundColor="#fff";
        d1.style.color="#CA151D";
        document.getElementById("wzdh").style.visibility="unset";
    }
}
function mout2(a,f)
{
    if(f==1)
    {
        c1=0;
    }
    if(f==2)
    {
        c2=0;
    }
    if(c1==0&&c2==0)
    {
        var d1=document.getElementById(a);
        d1.style.backgroundColor="#2E2828";
        d1.style.color="#B6B6B6";
        document.getElementById("wzdh").style.visibility="hidden";
    }
}
/* ----------------------------------*/ 
var d1=0;
var d2=0;
function min3(a,f)
{
    if(f==1)
    {
        d1=1;
    }
    if(f==2)
    {
        d2=1;
    }
    if(d1==1||d2==1)
    {
        var d1=document.getElementById(a);
        d1.style.backgroundColor="#fff";
        d1.style.color="#CA151D";
        document.getElementById("sjbx").style.visibility="unset";
    }
}
function mout3(a,f)
{
    if(f==1)
    {
        d1=0;
    }
    if(f==2)
    {
        d2=0;
    }
    if(d1==0&&d2==0)
    {
        var d1=document.getElementById(a);
        d1.style.backgroundColor="#2E2828";
        d1.style.color="#B6B6B6";
        document.getElementById("sjbx").style.visibility="hidden";
    }
}
/* ----------------------------------*/ 
/* ----------------------------------*/ 
var e1=0;
var e2=0;
function min4(a,f)
{
    if(f==1)
    {
        e1=1;
    }
    if(f==2)
    {
        e2=1;
    }
    if(e1==1||e2==1)
    {
        var d1=document.getElementById(a);
        d1.style.backgroundColor="#fff";
        d1.style.color="#CA151D";
        document.getElementById("gwcx").style.visibility="unset";
    }
}
function mout4(a,f)
{
    if(f==1)
    {
        e1=0;
    }
    if(f==2)
    {
        e2=0;
    }
    if(e1==0&&e2==0)
    {
        var d1=document.getElementById(a);
        d1.style.backgroundColor="#2E2828";
        d1.style.color="#B6B6B6";
        document.getElementById("gwcx").style.visibility="hidden";
    }
}
/* ----------------------------------*/ 
/* ----------------------------------*/ 
var flag1=0;//鼠标是否在菜单栏内
var flag2=0;//鼠标是否在菜单详情内
function mmin(a,f)//鼠标移入菜单栏背景颜色的改变和菜单详情的可见性
{
    if(f==1)
    {
        flag1=1;
    }
    if(f==2)
    {
        flag2=1;
    }
    if(flag1==1||flag2==1)
    {
        var t=document.getElementById("menu-"+a);
        t.style.visibility="unset";
        var t0=document.getElementById(a);
        t0.style.backgroundColor="#fff";
        var t1=document.getElementById("c-menu");
        t1.style.borderTopRightRadius="unset";
        t1.style.borderBottomRightRadius="unset";
        var t2=document.getElementById("1");
        t2.style.borderTopRightRadius="unset";
        var t3=document.getElementById("10");
        t3.style.borderBottomRightRadius="unset";
    }
    //var a=document.getElementById(a);
    //a.style.backgroundColor="#338CE6";
    //var muid="menu-"+b;
    //var a1=document.getElementById(muid);
    //a1.style.backgroundColor="#19508B";
    //a1.style.opacity="0.7"
    //a1.style.filter="alpha(opacity=50%)";
}
function mmout(a,f)//鼠标移入菜单栏背景颜色的改变和菜单详情的可见性
{
    if(f==1)
    {
        flag1=0;
    }
    if(f==2)
    {
        flag2=0;
    }
    //var a=document.getElementById(a);
    //a.style.backgroundColor="#459DF5";
    //var muid="mu"+b;
    //var a1=document.getElementById(muid);
    //a1.style.backgroundColor="#1C5297";
    //a1.style.opacity="0.7";
    //a1.style.filter="alpha(opacity=50%)";
    if(flag1==0&&flag2==0)
    {
        var t=document.getElementById("menu-"+a);
        t.style.visibility="hidden";
        var t0=document.getElementById(a);
        t0.style.backgroundColor="unset";
        var t1=document.getElementById("c-menu");
        t1.style.borderTopRightRadius="10px";
        t1.style.borderBottomRightRadius="10px";
        var t2=document.getElementById("1");
        t2.style.borderTopRightRadius="10px";
        var t3=document.getElementById("10");
        t3.style.borderBottomRightRadius="10px";
    }
}