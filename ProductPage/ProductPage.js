const picture = document.querySelector('.pic');
const text = document.querySelector ('.text');
const titled = document.querySelector('.head');
const descs = document.querySelectorAll('.desc');
const desc2 = document.querySelector('.desc2');
const desc1 = document.querySelector('.desc1');
const desc3 = document.querySelector('.desc3');
const btns = document.querySelectorAll('.btn');
const product = document.querySelector('.product-info');
const times = document.querySelectorAll('.time h4');
const timeZone = document.querySelector('.timezone');


const fetchProduct = async () =>{

    const res = await fetch ('https://fakestoreapi.com/products/3');
    const result = await res.json()             
  const {image, title,  id, description} = result;
    console.log(result);
  picture.src = image;
  titled.textContent = title;
  text.textContent = description;
}

fetchProduct();

product.addEventListener('click', (e)=>{
  let item = e.target.classList;


   if(item.contains('btn')){
     btns.forEach((btn,btnIndex) =>{
       btn.classList.remove('active');

       descs.forEach((desc,descIndex) => {
         desc.classList.remove('active');
        //  if(btnIndex === descIndex){
        //    desc.classList.add('active');
        //    console.log(desc);
        //  }
       })
      if(item.contains('btn1')){
        desc1.classList.add('active');
      }
      if(item.contains('btn2')){
        desc2.classList.add('active');
      }
      if(item.contains('btn3')){
        desc3.classList.add('active');
      }
    
     })

    e.target.classList.add('active');
      }
     
    });
     const months = ["January", "Febraury", 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
    const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const futureDate = new Date(year,month,date + 10, 8,40,35);
    
    const yearr = futureDate.getFullYear();
    const monnth = futureDate.getMonth();
    const datte = futureDate.getDate();
    const dayy = futureDate.getDay();
    const hours = futureDate.getHours();
    const min = futureDate.getMinutes();
    const secs = futureDate.getSeconds();
    
    const dayyy = days[dayy];
    const montth = months[monnth];
  

    timeZone.innerHTML = `Giveaway Ends  on ${dayyy}, ${datte} ${montth} ${yearr} ${hours}:${min}am`;
    
    const timeCountDown = () => {
        const currentDate = new Date().getTime();
        const futureDatee = futureDate.getTime();
        const newTime = futureDatee -currentDate;

       const singleDay = 24*60*60*1000;
       const singleHour = 60*60*1000;
       const singleMinute = 60*1000;

       const dayValue = Math.floor(newTime/singleDay)
       const hourValue = Math.floor((newTime%singleDay)/singleHour)
       const minuteValue = Math.floor((newTime%singleHour)/singleMinute)
       const secondValue = Math.floor((newTime%singleMinute)/1000)
       const newValue = [ dayValue, hourValue,minuteValue,secondValue];
      times.forEach((time,index) =>{
         return time.innerHTML = newValue[index]
      })

        console.log(hourValue,minuteValue,secondValue);
    }
    
    const timer = setInterval(() => {
      timeCountDown()
    }, 1000);
    
    timeCountDown()
    
    
  

    