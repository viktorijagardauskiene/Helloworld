function alert_mygtukas() {
				document.getElementById('demo').innerHTML = 'Blogai';
			}
			function date_mygtukas() {
				document.getElementById('demo').innerHTML = Date();
			}
			function teisingai() {
				document.getElementById('klausimas').innerHTML = 'Atsakymas teisingas';
			}
			function neteisingai() {
				document.getElementById('klausimas').innerHTML = 'Atsakymas neteisingas';
				alert("Tu nemoki skaičiuoti");
			}

			function nieko_mygtukas() {
				console.log("Buvo paspaustas mygtukas");
			}

			function parodyk_preke(numeris) {
			var prekes = ['pienas', 'duona', 'gira', 'sokoladas'];
			document.getElementById('preke'),innerHTML = prekes[numeris];
		}