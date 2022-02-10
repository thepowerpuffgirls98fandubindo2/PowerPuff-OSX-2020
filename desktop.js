

function openabout(){
	new WinBox({
    title: "Custom Position / Size",
	top: 20,
    x: "45%",
    y: "44px",
    width: "500px",
    height: "500px",
    mount: document.getElementById("win_about").cloneNode(true)
	});
}
function openhelp(){
	new WinBox({
    title: "Custom Position / Size",
	top: 20,
    x: "32%",
    y: "10%",
    width: "340px",
    height: "265px",
	max: false,
	class: ["no-max","no-full","no-resize"],
    mount: document.getElementById("win_help").cloneNode(true)
	});
}
function openCredits(){
	new WinBox({
    title: "Custom Position / Size",
	top: 20,
    x: "32%",
    y: "10%",
    width: "340px",
    height: "265px",
    mount: document.getElementById("win_credits").cloneNode(true)
	});
}
function openCommerce(){
	new WinBox({
    title: "Custom Position / Size",
	top: 20,
    x: "32%",
    y: "10%",
    width: "340px",
    height: "265px",
    url: "https://nextapps-de.github.io/winbox/",
	});
}
function openPufftunes(){
	new WinBox({
    title: "Puff Tunes",
	top: 20,
    x: "32%",
    y: "10%",
    width: "340px",
    height: "265px",
    url: "apps/tunes/index.html",
	});
}
function openPowerPuffYourself(){
	new WinBox({
    title: "Powerpuff Yourself",
	top: 20,
    x: "32%",
    y: "10%",
    width: "370px",
    height: "550px",
    url: "https://powerpuffyourself.com/",
	});
}
function openFriendlist(){
	new WinBox({
    title: "Custom Position / Size",
	top: 20,
    x: "32%",
    y: "10%",
    width: "340px",
    height: "265px",
    url: "https://nextapps-de.github.io/winbox/",
	});
}
function shutdowndialog(){
	new WinBox({
    title: "Custom Position / Size",
	top: 20,
    x: "40%",
    y: "40%",
    width: "230px",
    height: "100px",
    mount: document.getElementById("win_help").cloneNode(true)
	});
}
function this1(){
	new WinBox("WinBox.js", {
	title: "Custom Position / Size",
	top: 20,
    x: "40%",
    y: "40%",
    width: "230px",
    height: "250px",
    url: "https://nextapps-de.github.io/winbox/"
});
}
