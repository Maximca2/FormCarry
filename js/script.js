'use srtict'


const modalWindow = document.querySelector('.header__modal-window');
const btnLogin = document.querySelector('.box-header__button');
const btnSignUp = document.querySelector('.box-header__button-bl');
const btnClose = document.querySelector('.modal-header__button-crst')
const inputValue = document.getElementById('namer'),
    field = document.querySelector('.form-collect');
const btnSend = document.querySelector('.form-collect__btn')
const modallSmall = document.querySelector('.modal')
const page = document.querySelector('.page')

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()
    btnSignUp.addEventListener('click', openModal)
    btnClose.addEventListener('click', closeModal)
    btnClose.addEventListener('click', closeModal)

    function closeModal() {
        modalWindow.classList.add('hide')
        modalWindow.classList.remove('active')
        RemoveBlur()
        // document.querySelector('body').classList.remove('blur')
    }
    function disableScroll() {
        window.addEventListener('scroll', function () {
            if (modalWindow.classList.contains('active')) {
                window.onscroll = () => { window.scroll('', '') }
            } else if (modalWindow.classList.contains('hide')) {
                window.onscroll = () => { window.scroll === null }
            }
        })

    }
    function openModal() {
        modalWindow.classList.remove('hide')
        modalWindow.classList.add('active')
        
        disableScroll()
        addBlur()


    }
    // autorization

    const form = document.querySelector('form');
    const message = {
        loading: 'найс',
        success: 'Дякую ми скоро звяжемось з вами!',
        failure: 'Щось пішло не так'
    };
    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            const formData = new FormData(form);

            // const object = {};
            // formData.forEach(function(value, key){
            //     object[key] = value;
            // });
            // const json = JSON.stringify(object);

            request.send(formData);

            request.addEventListener('load', () => {
                if (request.status == 200) {
                    console.log(request.response);
                    console.log(message.success);
                    statusMessage.remove();
                    form.reset();
                } else {
                    console.log(message.failure);
                }
            });
        });
    }
    closeModal()
    postData(form)
    // Tabs

    let item = document.querySelectorAll('.slider__set-up-item');
    const inner = document.querySelector('.slider__set-up-inner')
    const boxItem = document.querySelectorAll('.box__item')
    let boxParent = document.querySelector('.slider__set-up-inner');

    let parentinner = document.querySelector('.box-link__savior-inner');

    const innerItem = document.querySelectorAll('.box-link__savior-btn');

    let contentItem = document.querySelectorAll('.upload__savior-box');


    function hideTabContent(it, it2, claspos, clasneg) {

        it.forEach(itemer => {
            itemer.classList.add('none');

            // item.classList.remove('show', 'fade');
        });

        it2.forEach(items => {
            items.classList.remove('activer');
        });


    }
    function showTabContent(i, item1, item2) {
        item1[i].classList.add('fade');
        item1[i].classList.remove('none');
        item2[i].classList.add('activer');
    }



    // setInterval({
        
    // },4000)
    hideTabContent(boxItem, item,)
    showTabContent(i = 0, boxItem, item)
    // hideTabContent(contentItem,innerItem,)
    // showTabContent(i = 0,contentItem,innerItem)
    // hideTabContent(contentItem,innerItem)
    // showTabContent(i = 0,contentItem,innerItem)
    function addParent(parent, itemclass, item1) {
        return parent.addEventListener('click', function (e) {
            const target = e.target;

            if (target && target.classList.contains(`${itemclass}`)) {
                item1.forEach((items, i) => {

                    // console.log(i)
                    if (target == items) {
                        hideTabContent(boxItem, item)
                        showTabContent(i, boxItem, item);
                    }
                });
            }

        });
    }

    addParent(boxParent, 'slider__set-up-item', item)

    ///checkInput

    const input = document.querySelector('.form-collect__input');

    const messages = {
        good: 'good!',
        bad: 'введіть не число ',
        soBad: 'Заповніть клітинку'

    }

    input.addEventListener('input', () => {
        if (input.value.match('/\D/g')) {

            input.style.border = '1px solid red'

        } else if (input.value.length === 0) {
            input.style.border = '1px solid red'

            input.style.border = '1px solid red'
        } else if(input.value.length===5) {
            console.log('nice')
            const check = document.querySelector('.fi-br-check')
            check.style.color = '#1dcb43';
        }
    })
    ////check members
    const count = document.querySelectorAll('.better-members-content')
    const parent = document.querySelector('.better-members-box');
    const box = document.querySelector('.box-better__content2')
 
    
    // let number = +'240px'
    // console.log(number)
    // console.log(box,heigthofBox)
    function checkMembers() {
        const element = document.createElement('div');
        element.innerHTML = `<div class="better-members__text">
            Members
        </div>
        <div class="better-members__count">
            (${count.length}/10)
        </div>`

        parent.append(element)
    }

    
checkMembers()
function deleteMembers(){
    // const arrt = count

    
    const buttonDelete = document.querySelectorAll('.delete-btn').forEach((btn)=>{
        btn.addEventListener('click',function(e){
            const target = e.target
            

            
            count[i].remove()
            
           
            
        })
    })

    
    return buttonDelete
}

deleteMembers(count)

count.forEach(items=>{
    console.log(items)

    
})
console.log(count.length)




    ///check if elements contains!
    function checkIfElementsContains(countOf) {
        ifCount()
        ifCountDecrease()
        if (countOf.length > 3) {
            box.classList.add('increase__box')
            
        }
        if (countOf.length >= 4) {
            box.classList.remove('increase__box')
            box.classList.add('increase__box2')
            
        }
        if (countOf.length === 5) {
            addMoreButton()
        }
        if (countOf.length === 6) {
            addMoreButton()
        }
    }
    checkIfElementsContains(count)
    

    /// перевіряє якщо уількість  = 0
    function ifCount() {
        if (count.length === 0) {
            const parent = document.querySelector('.box-content2__better-members');
            const element = document.createElement('div')
            element.innerHTML = `<div class="better-members-content better-members-content">
        
       
          <div class="better-members-content-name">
            у вас немає друзів
          </div>         
        <div class="better-members-content-link">
        <a href="#">
          Add friends
        </a> 
        </div>
      </div>`
            parent.append(element)
        }
    }
    ///перевіряє якщо кілкість елементів зменшується

    function ifCountDecrease() {
        if (count.length < 4) {
            box.classList.add('increase__box')
        }
    }

    //якщо кількість буде рівна 5 то ми добавляємо
    //кнопку яка буде показувати 'показати більше друзів'
    function addMoreButton() {

        const element = document.createElement('div'),
            parent = document.querySelector('.box-better__content2');
        element.innerHTML = `
            <div class= 'better__show-more-box'>
            <button class='better__show-more'>show more+</button>
            </div>
            
            `
        parent.append(element)

    }
    ///add checkbox and  content 
    const parentElement = document.querySelector('.checkbox-box')

    function addCheckBoxContent(url, name, gmail, message, clock) {
        const bestCount= document.querySelectorAll('.checkbox-box__box-beastbig').length;
        // console.log(bestCount)
        const element = document.createElement('div');
        
        // console.log(parentElement)
        element.innerHTML = `
        <div class="checkbox-box__box-beastbig">
                    <div class="checkbox-box__box checkbox-box-of">
                    <div class="checkbox-box-of__checkbox">
                    <input type="checkbox" id="scales" name="scales" checked>
                    </div>
                      <div class="checkbox-box-img">
                        <img src=${url} alt="">
                      </div>
                      <div class="checkbox-box__nicname">Name:
                        ${name}
                      </div>
                      <div class="checkbox-box-of__submissiion">Gmail:
                        ${gmail}
                      </div>
                      <div class="checkbox-box-of__submissiion">Message:
                        ${message}
                      </div>
                    </div>
                    <div class="checkbox-box__box2 checkbox-box2-of">
                      <div class="checkbox-box2-of-members">
                        ${clock}
                      </div>
                    </div>
                  </div>
    `
        parentElement.append(element)
    }

    addCheckBoxContent("../img/mean.png",'Tim Cook','tim@apple.com',"Hey, I'm looking for a affordable and high quality external display.",'12:35 PM');
    addCheckBoxContent("../img/spiderMen.png",'Sigma Dave','tAteIsKinq@gmail.com',"Bro!  to all of your miseries  and become an Sigma male 💪",'11:35 PM');
    addCheckBoxContent("../img/Elon.png",'Elon Musk','elonsuckss@gmail.com',"Yo! This is definitely Elon, I need your help .","12:35 PM");
    // addCheckBoxContent("../img/mean.png",'Misha fefwf','misha@gmail.com',"Hey, I'm looking for a affordable and high quality external display.",'12:35 PM');
    // addCheckBoxContent();
    ///
    const body = document.querySelector('body');
    
    const btnChangeColor = document.querySelector('.box-header__button-change-color');

    btnChangeColor.addEventListener('click',changeColor)
    function changeColor(){
        body.classList.toggle('change-color')
        if(body.classList.contains('change-color')){
            btnChangeColor.style.backgroundColor = '#fff'
        }else{
            btnChangeColor.style.backgroundColor = '#bab7d4'
        }
        
    }

    ///addBlur
    function addBlur(){
        page.classList.add('activation-blur')
    }
    
    function RemoveBlur(){
        page.classList.remove('activation-blur')
    }

    ///relevant


    // const types = document.querySelectorAll('.types')
    const types = document.querySelectorAll('.types')
    const btnsRelevant = document.querySelectorAll('.content-box-relavent2__link');
    const parClass = document.querySelector('.relevant-box-content-box2')
    console.log(btnsRelevant)

    // btnsRelevant.forEach(item=>{
    //     item.addEventListener('click',add)
    // })

  function addNone(){
    types.forEach(it=>it.classList.add('none'))
  }
  addNone()

    
    function add(){
        for(let i =0;i<btnsRelevant.length;i++){
            console.log('ds')
            btnsRelevant[i].addEventListener('click',function(e){
                e.preventDefault()
                
            btnsRelevant[i].classList.toggle('rotate')        
            types[i].classList.toggle('none')
                    
            })
        }
    }
    
   add()
    // function addNone(){
    //     types.forEach(item=>{
    //        item.classList.add('none');
    //     }) 
    // }
    // addNone()
    // function open(i){
    //     types[i].classList.remove('none');
    // }
    
    // open(i)



    


    // btnsRelevant.forEach((it,i)=>{
    //     it.addEventListener('click',function(e){
    //         e.preventDefault();
    //         const target = e.target
    //         // console.log(target)

    //         if(target.classList.contains('content-box-relavent2__body')){
    //              types.forEach((it,i)=>{
    //                 if(target===it){
    //                     open(it,i)
    //                 }
    //              })
                 
    //         }else{
    //             console.log(false)
    //         }
    //     })
    // })
    // // btnsRelevant.forEach(items=>{
        
    //     items.addEventListener('click',function(e){
    //         const target = e.target;
    //         console.log(target)
    //         if(target&&target.classList.contains('content-box-relavent2__body')){
    //             console.log(true)
    //             types.forEach((it,i)=>{
    //                 if(target===it){
    //                     it.classList.toggle('none')
    //                     addNone(it)
                        
    //                 }
                   
                    
    //             })
                
    //         }else{
                
    //             console.log(false)
    //         }
    //     })
        
    // })
    
    
 



  

console.log('ede')
const Elem = document.querySelector('.content-savior__img')
const boduToLoad = document.querySelector('.rec__img-savior-box-up-load-body')

// var rect = boduToLoad.x.toFixed()
// var rect = boduToLoad.y
// console.log(rect)
// console.log(boduToLoad.getBoundingClientRect)
var mousePosition;
var offset = [0,0];
const positionofElment = Elem.getBoundingClientRect();

console.log(positionofElment)
const {x,y ,...items} = positionofElment

if(x===70){
    console.log('nice')
}
var isDown = false

// div = document.createElement("div");
Elem.style.position = "absolute";

// div.style.left = "0px";
// div.style.top = "0px";

// div.style.background = "red";
// div.style.color = "blue";

// document.body.appendChild(div);



// moveE()





// document.addEventListener('mouseup', function() {
//     isDown = false;
// }, true);


let allow = false;
function moveE(){
    Elem.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            Elem.offsetLeft - e.clientX,
            Elem.offsetTop - e.clientY
        ];
    
        
    }, true);
}

function addEventMouse(){
    window.addEventListener('mousemove', function (event) {

        

        
            Elem.addEventListener('click',function(){
                if(event.x===636){
                    boduToLoad.classList.add('activational')
                }
                const parentElement = document.querySelector('.rec__img-savior-link')
                const element =  document.createElement('div');
                element.innerHTML =`
                <div class='warn__text'>put in this=>!
                </div>`
                parentElement.append(element)

               
                allow=true
                moveE()
                
                setTimeout(() => {
                    element.remove()
                }, 2000);
            
            })
        
            Elem.removeEventListener('click',moveE )

            

        // console.log(event.x,event.y)
        
        event.preventDefault();
        if (isDown) {
            mousePosition = {
    
                x : event.clientX,
                y : event.clientY
    
            };
            Elem.style.left = (mousePosition.x + offset[0]) + 'px';
            Elem.style.top  = (mousePosition.y + offset[1]) + 'px';
            
        }
    }, true);

    
}




addEventMouse()



// Elem.removeEventListener('mousemove',addEventMouse)





});


