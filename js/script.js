// delicious image slides 
var images = ["s1.png",
						  "s2.png",
						  "s3.png",
						  "s5.png",
						  "d1.png" ];
			var i = 0;

			function slides(){
				document.getElementById("slideimage").src = images[i];
				if (i<(images.length-1)) 
					i++;
					else
						i=0;				
			}
			setInterval(slides,2000);