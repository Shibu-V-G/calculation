window.onscroll = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}



let loginForm = document.querySelector('.login-form-container');


document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle(".active");
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.toggle(".active");
}



<script>

</script>