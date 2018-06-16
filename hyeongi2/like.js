var count = 0;

function like(){
	count = count + 1;
	add_like();
}

function add_like(){
	var find = document.getElementById("Count_like");
	find.textContent="좋아요 : "+count+"개";
}
