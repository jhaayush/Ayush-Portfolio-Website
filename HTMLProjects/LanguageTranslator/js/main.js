function animateIcon(){
	let icon= document.getElementById('icon');
	icon.innerHTML = "&#xf2bd;";
	setTimeout(function(){
	    icon.innerHTML = "&#xf2be;";
	}, 500);
}
animateIcon();
setInterval(animateIcon, 1000);

$("document").ready(function(){
	$("#translateForm").on('submit', translateNow);
});

function translateNow(e){
	var inputWord = $("#inputWord").val();
	var lang= $("input[name=lang]:checked").val();

	$.ajax({
		url: "https://translate.yandex.net/api/v1.5/tr.json/translate?key="
		+"trnsl.1.1.20171019T183250Z.cfbf5512905df71a.c2335b8163408af5fd720d5f03a986c263e488b9"
		+"&text="+inputWord+"&lang="+lang,
	})
	.done(function(data){
		$("#result").html(`
			<h2>
				"${inputWord}" translates to: 
			</h2><br>
			<p class="result-text">
				${data.text[0]}
			</p>
			
			`);
	})
	.fail(function(){
		$("#result").html(`
			<h2>Enter something to get started!</h2>
			`);
	});

	e.preventDefault();
}
