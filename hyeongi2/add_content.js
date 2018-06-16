function add(a,b){

var target = document.getElementById("Content");
var div1 = document.createElement("div");
    
div1.id = "First";
div1.className = "tt";
    
var img1 = document.createElement("img");
var br = document.createElement("br");
var br1 = document.createElement("br");
img1.src = "1.jpg";
img1.className = "img_r";
div1.appendChild(img1);
var p = document.createElement("p");
var pre = document.createElement("pre");
pre.textContent = a+"\n\n\n";
p.appendChild(pre);
$(div1).append(br1);
$(div1).append("손현기");
$(div1).append(br);
$(div1).append(b);
div1.appendChild(p);

var div2 = document.createElement("div");
div2.className = "Like_count";

var span1 = document.createElement("span");
var button = document.createElement("button");
button.className="Like";
var span1_1 = document.createElement("span");
var span1_2 = document.createElement("span");

span1_2.append("0");
span1_2.className= "Count_like";


span1_1.append("좋아요 : ");
span1_1.append(span1_2);
span1_1.append("개");

span1_1.style.marginLeft = "3%";
button.style.fontSize ="15px";
button.append("좋아요");
var s_img1 = document.createElement("img");
s_img1.src = "like.jpeg";
s_img1.className = "img_bar";

span1.appendChild(s_img1);
span1.appendChild(button);
span1.appendChild(span1_1);

var span2 = document.createElement("span");
    
var button2 = document.createElement("button");
button2.className = "reple";
button2.textContent = "댓글 달기"
button2.style.fontSize = "15px";
    
span2.className = "span1";
button2.style.marginLeft = "3px";
var s_img2 = document.createElement("img");
s_img2.src = "reple.jpeg";
s_img2.className = "img_bar";

span2.appendChild(s_img2);
$(span2).append(button2);


var span3 = document.createElement("span");
var s_img3 = document.createElement("img");
s_img3.src = "share.jpeg";
s_img3.className = "img_bar";

span3.appendChild(s_img3);
$(span3).append("공유 하기");


div2.appendChild(span1);
div2.appendChild(span2);
div2.appendChild(span3);

div1.appendChild(div2);

target.after(div1);


}





function getFormatDate(date){

	var year = date.getFullYear();                                 //yyyy
	var time = "오전" ;
	var month = (1 + date.getMonth());                     //M

	var hour = date.getHours();

	if(hour>12){ hour=hour-12; time="오후" };

	var minute = date.getMinutes();

	month = month >= 10 ? month :  month;     // month 두자리로 저장

	var day = date.getDate();                                        //d

	day = day >= 10 ? day : day;                            //day 두자리로 저장

	return  year + "년 " + month + "월 " + day + "일 " + time +" " + hour +":" + '' + minute  ;

}




