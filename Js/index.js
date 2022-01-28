scrollHead=()=>{
    const header=document.getElementById('header');
    if(this.scrollY>=50){
        header.classList.add('scroll-header');
    }
    else{
        header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll',scrollHeader)
}


const changeColor=()=>{
    let color2=Math.random().toString(16).slice(2,8)
    console.log(color2);
  document.body.style.background='#'+color2;
  document.querySelector('#header').style.background='#'+color2;
//   document.getElementsByTagName('h1').style.color=black;
document.querySelector('h1').style.color='black'    

// console.log(document.querySelectorAll('section'));
}

// const send=()=>{
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "krishnajikulkarni@",
//         Password : "password",
//         To : 'them@website.com',
//         From : "you@isp.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }

const send=()=>{
    let names=document.getElementById('name').value;
    alert(`Thank you for the visit dear ${names}`)
}






// const texts=document.querySelector('.text')
// window.SpeechRecognition=window.SpeechRecognition