const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const form1 = document.getElementById('form1')
const nameInput = document.getElementById('input1')
const form2 = document.getElementById('form2')
const idInput = document.getElementById('input2')
const btn4 = document.getElementById('btn4')
const radio1 = document.getElementById('radio1')
const radio2 = document.getElementById('radio2')
const radio3 = document.getElementById('radio3')
// const radioForm = document.getElementsByClassName('radioForm')
const p1 = document.getElementById('p1')
const content1 = document.getElementById('question-one')
const content2 = document.getElementById('phase2')
const content3 = document.getElementById('phase3')
const loading = document.getElementById('loading')
const background = document.getElementById('background')
const body2 = document.getElementById('body2')
const outlineCount = document.getElementById('online-count')
const time = document.getElementById('time')
const btn5 = document.getElementById('btn5')
const loading2 = document.getElementById('loading-2')
const loading3 = document.getElementById('loading3')
const show = document.getElementById('show')
const control = document.getElementById('control')
const btn6 = document.getElementById('btn6')
const username2 = document.getElementById('username2')
const verify = document.getElementById('verify')
const btn7 = document.getElementById('btn7')
const loading4 = document.getElementById('loading-4')
const loading5 = document.getElementById('loading-5')
const loading6 =document.getElementById('loading-6')
const loading7 =  document.getElementById('loading-7')
const loading8 = document.getElementById('loading-8')
const loading9 = document.getElementById('loading-9')
const loading10 = document.getElementById('loading-10')
const footer = document.getElementById('footer')

// //////////////pahse1 to make sure if user play or not/////
// btn1.addEventListener('click', (e)=> {
// e.preventDefault()
//     // إظهار صورة التحميل وإخفاء المحتوى الحالي
//     content1.style.display = 'none';
//     content3.style.display = 'none';
//     loading.style.display = 'block';
//     // بعد فترة من الوقت، إخفاء صورة التحميل وعرض المحتوى الجديد
//     setTimeout(function() {
//       loading.style.display = 'none';
//       content2.style.display = 'block';
//     }, 2000); // بعد 2 ثواني
//   });

// btn2.addEventListener('click',(e)=>{
//     e.preventDefault()
//     window.alert('هذا الموقع لن يكون مفيد لك')
// })

// /////////////// phase 2  code for take username from user 
// btn3.addEventListener('click' ,function(e){
//   e.preventDefault();
//   if(nameInput.value === ""){
//     window.alert('ادخل اسمك من فضلك')
//   }
//   else{
//     localStorage.setItem('username',nameInput.value)
//       p1.textContent ="اهلا....."+ nameInput.value;
//       content1.style.display = 'none';
//         content2.style.display = 'none';
//        loading.style.display = 'block';
//     setTimeout(()=>{
//       loading.style.display = 'none';
//       content3.style.display = 'block';
//   },2000)
//   form1.reset()
// } 
// });
// //////////////////// phase 3 to take user's id and user's device type////////

// btn4.addEventListener('click' , function(e){
//   e.preventDefault()
//     if(!idInput.value && !radio1.checked && !radio2.checked && !radio3.checked){
//       window.alert('ادخل ال ID ونوع الجهاز الخاص بك')
//     }
//   else{
//     localStorage.setItem('id',idInput.value)
//     // localStorage.setItem('device type',radio1.value)
//          content1.style.display = 'none';
//         content2.style.display = 'none';
//        loading.style.display = 'block';
       
//        content3.style.display='none';
//        content3.style.display='none';
       
//     setTimeout(()=>{
//       loading.style.display = 'none';
//       background.style.display = 'none';
//       body2.style.display = 'block';
//         footer.style.display = 'block'; 
//   },2000)
//   form2.reset()
  
//    }
// })
function random(min , max){
  return Math.floor(Math.random()*(max-min+1)+min);

}
var initial = random(400, 500);
var count = initial;
setInterval(function(){
  var variation = random(-5 , 5);
  count += variation
  outlineCount.innerHTML = count;
},1000)

function startTimer(duration , display){
  var timer = duration , minutes , seconds;
  setInterval(function(){
    minutes = parseInt(timer / 60 ,10);
    seconds = parseInt(timer % 60 , 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0"  + seconds : seconds ;

    display.textContent = minutes + "minutes and" + seconds + "seconds"

    if(--timer < 0){
      display.textContent = " Few seconds...";
    }
  
  } ,1000)
}
window.onload = function () {
  var fiveMinutes = 60 * 6,
      display = time;
  startTimer(fiveMinutes, display);
};

btn5.addEventListener('click', (e)=> {
  e.preventDefault()
  window.scrollTo(0,middle);
      // إظهار صورة التحميل وإخفاء المحتوى الحالي
      loading2.style.display = 'block';
    
      // بعد فترة من الوقت، إخفاء صورة التحميل وعرض المحتوى الجديد
      setTimeout(function() {
        loading2.style.display = 'none';
        loading3.style.display = 'block';
        control.style.display = 'none';
        show.style.display= 'block';
        setTimeout(function() {
          loading3.style.display = 'none';

        }, 2000);
      },2000)
    })

    username2.addEventListener('input',function(){
      this.style.fontWeight = 'bold';
      this.style.fontSize = '25px';
    });
    const middle = document.documentElement.scrollHeight / 2;
btn6.addEventListener('click' , (e)=>{
  e.preventDefault()
  if(username2.value == ""){
    window.alert('Please Put Your Username')
  }
    else{
      window.scrollTo(0, middle);
      loading4.style.display = 'block';
    setTimeout(function(){
        loading4.style.display='none';
        loading5.style.display = 'block';
      setTimeout(function(){
        loading5.style.display = 'none';
        loading6.style.display = 'block';
        setTimeout(function(){
          loading6.style.display = 'none';
          loading7.style.display = 'block';
            setTimeout(function(){
        loading7.style.display = 'none';
        loading8.style.display = 'block';
         setTimeout(function(){
        loading8.style.display = 'none';
        loading9.style.display = 'block';
         setTimeout(function(){
        loading9.style.display='none';
        show.style.display='none';
        verify.style.display ='block';
      },2000)
      },2000)
      },2000)
        },2000)
      },2000)
      },2000)}
  })

  btn7.addEventListener('click' ,(e)=>{
    e.preventDefault()
    window.scrollTo(0,middle);
    setTimeout(function(){
      loading10.style.display='block';
    },1500)
  })

          // Add active class to the current button (highlight it)
          var header = document.getElementById("devices");
          var btns = header.getElementsByClassName("platform-item");
          for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) {
              current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
            });
          }
		
					// Add active class to the current button (highlight it)
          var header = document.getElementById("currency");
          var btns = header.getElementsByClassName("platform-item1");
					for (var i = 0; i < btns.length; i++) {
					  btns[i].addEventListener("click", function() {
					  var current = document.getElementsByClassName("active1");
					  if (current.length > 0) {
						current[0].className = current[0].className.replace(" active1", "");
					  }
					  this.className += " active1";
					  });
					}
          
					// Add active class to the current button (highlight it)
          var header = document.getElementById("test");
          // var btns = header.getElementsByClassName("platform-item2");
					for (var i = 0; i < btns.length; i++) {
					  btns[i].addEventListener("click", function() {
					  var current = document.getElementsByClassName("active2");
					  if (current.length > 0) {
						current[0].className = current[0].className.replace(" active2", "");
					  }
					  this.className += " active2";
					  });
					}
		