function openabout() {
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

function openhelp() {
    new WinBox({
        title: "Custom Position / Size",
        top: 20,
        x: "32%",
        y: "10%",
        width: "340px",
        height: "265px",
        max: false,
        class: ["no-max", "no-full", "no-resize"],
        mount: document.getElementById("win_help").cloneNode(true)
    });
}

function openterminal() {
    new WinBox({
        title: "Terminal",
        top: 20,
        x: "85px",
        y: "74px",
        width: "560px",
        height: "360px",
        max: false,
        //class: ["no-max","no-full","no-resize"],
        //mount: document.getElementById("win_term").cloneNode(true)
        url: "system/terminal/index.html",
    });
}

function openCredits() {
    new WinBox({
        title: "Credits",
        top: 20,
        x: "240px",
        y: "175px",
        width: "560px",
        height: "360px",
        mount: document.getElementById("win_credits").cloneNode(true)
    });
}

function openCommerce() {
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

function openPufftunes() {
    new WinBox({
        title: "Puff Tunes",
        top: 20,
        x: "32%",
        y: "10%",
        width: "340px",
        height: "470px",
        url: "apps/tunes/index.html",
    });
}

function openPowerPuffYourself() {
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

function openFriendlist() {
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

function shutdowndialog() {
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

function this1() {
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