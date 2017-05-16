/**
 Copyright (C) 2017 IJR/CRU Albania

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/


var pergjigje3 = 1;
var tmp = false;
function kontakt() {
    var forma = document.getElementById("forma")
    if (forma.style.visibility == 'hidden') {
        forma.style.setProperty('visibility', 'visible')
    }
}
var aktual = 1;
function previewView() {
    if (tmp == true) {
        aktual = 11;
        tmp = false;
    }
    if (aktual != 1) {
        aktual--;
        var permbajtja = document.getElementById("i" + aktual).value;
        document.getElementById("teksti").innerHTML = permbajtja;
    }
}
function nextView() {
    if (pergjigje3 == 2) {
        var permbajtja = document.getElementById("i19").value;
        document.getElementById("teksti").innerHTML = permbajtja;
        pergjigje3 = 1;
        aktual = 10;
        tmp = true;
    }
    else if (aktual != 15) {
        aktual++;
        var permbajtja = document.getElementById("i" + aktual).value;
        document.getElementById("teksti").innerHTML = permbajtja;
    }
}
function ndryshoFaqe(faqa) {
    aktual = faqa;
    var permbajtja = document.getElementById("i" + faqa).value;
    document.getElementById("teksti").innerHTML = permbajtja;
}
function ndryshoHover(foto) {
    if (foto == 2)
        document.getElementById("next").src = "Images/nextHover.png";
    else {
        document.getElementById("preview").src = "Images/previewHover.png"
    }
}
function ndryshoOut(foto) {
    if (foto == 2)
        document.getElementById("next").src = "Images/next.png";
    else {
        document.getElementById("preview").src = "Images/preview.png"
    }
}
function pyetja1(zgjedhja) {
    if (zgjedhja == 1) {
        document.getElementById("pyetja2").style.visibility = 'visible';
		document.getElementById("label3").innerHTML = " ";
    }
	else{
		var permbajtja = document.getElementById("i21").value;
        document.getElementById("label3").innerHTML = permbajtja;
	}
}
function pyetja2(zgjedhja) {
    if (zgjedhja == 1) {
        aktual++;
        var permbajtja = document.getElementById("i" + aktual).value;
        document.getElementById("teksti").innerHTML = permbajtja;
    }
    else {
        var permbajtja = document.getElementById("i16").value;
        document.getElementById("label").innerHTML = permbajtja;
    }
}
function pyetja3(zgjedhja) {
    if (zgjedhja == 1) {
        var permbajtja = document.getElementById("i17").value;
        document.getElementById("label1").innerHTML = permbajtja;
    }
    else {
        var permbajtja = document.getElementById("i18").value;
        document.getElementById("label1").innerHTML = permbajtja;
        pergjigje3 = 2;
    }
}
function pyetja4(zgjedhja) {
    if (zgjedhja == 1) {
        var permbajtja = document.getElementById("i" + 10).value;
        document.getElementById("teksti").innerHTML = permbajtja;
    }
    else {
        var permbajtja = document.getElementById("i20").value;
        document.getElementById("label2").innerHTML = permbajtja;
    }
}