emailjs.init("CbQ4PfSwbv6MLXk_6");
function send() {
 var date={
     nume: document.getElementById("nume").value,
     prenume: document.getElementById("prenume").value,
     email: document.getElementById("email").value,
     tema: document.getElementById("tema").value,
     mesaj: document.getElementById("mesaj").value
 };
 emailjs.send("service_cc1wpvf", "template_5s30odh", date )  
 .then(function(raspuns) {
    alert("ваше письмо отправлено")
    document.getElementById("formular").requestFullscreen();
 },
 function(eror) {
    alert("ошиба при отправке")
 })
}