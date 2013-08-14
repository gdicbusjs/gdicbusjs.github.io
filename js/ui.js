 var n = 0;
 
function hook() {
	$(".slides ul li a").hover(
		function() {
			var p = $(this).closest('ul li');	//.child('ul').css('display','block');
			//p.css('color','orange');// $(this).closest('ul li').child('ul').css('display','block');
			p = p.find('ul');
			//if (++n < 2) { alert(p.text()); }
			//p.css('display','block');
		
		}		
	);
}


 if (jQuery) {
	 $(document).ready(
		function() { hook(); }
	 
	 );
} else {
	alert("WTF");
}


/*
		$(".slides ul li a").hover(
			function() {
				$(this).parent().child('ul').css('display','block');
			
			}
		
		);
*/