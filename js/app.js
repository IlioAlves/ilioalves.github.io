var typed2 = new Typed('#typing', {
    strings: ['Desenvolvedor', 'Matemático', 'Determinado'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

$('#form-contact').on('submit', function(e) {
    e.preventDefault();
    emailjs.init("user_EpzwHVHyCg805uQEvE6mS");
    emailjs.send("sendgrid", "contact",{
      name: $('#input-name').val(),
      email: $('#input-email').val(),
      subject: $('#input-subject').val(),
      message: $('#input-message').text()
    }).then(function(response) {
       swal ( "Email enviado com sucesso");
    }, function(err) {
       swal ( "Oops" , err ,  "error" );
    });
});