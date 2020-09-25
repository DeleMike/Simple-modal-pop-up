document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

function onOpen() {
    var html = HtmlService.createHtmlOutputFromFile("Opening message HTML.html");
    DocumentApp.getUI().showModalDialog(html, " ");

   

    
}

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
});


// document.getElementById('button').addEventListener('click', function () {
//     document.querySelector('.bg-modal').style.display = 'flex';
// });