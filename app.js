var cursor = document.querySelector('.cursor'),
    cursorscale = document.querySelectorAll('.cursorscale')
    mouseX=0,
    mouseY=0

gsap.to({}, 0.016,{
    repeat:-1,

    onRepeat:function () {
        gsap.set(cursor, {
            css:{
                left:mouseX,
                top:mouseY
            }
        })
    }
})

window.addEventListener("mousemove", function (e){
    mouseX=e.clientX;
    mouseY=e.clientY
});

cursorscale.forEach(link=>{
    link.addEventListener('mouseleave',()=>{
        cursor.classList.remove('grow');
    });
    link.addEventListener('mousemove',()=>{
        cursor.classList.add('grow');
    });
})

const form = document.getElementById('my_form');
function SendMail(){
    var params ={
        from_name: document.getElementById("fullname").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value,

    }
    emailjs.send("service_zi82hkb", "template_q5cri3e" , params).then(function(res){
        alert("success" + res.status);
    })
    form.reset();
}

//  modal 
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  
