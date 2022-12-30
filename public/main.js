let titleEl = document.getElementsByClassName('title_box')[0];
let writeEl = document.getElementsByClassName('write_box')[0];
let closeEl = document.getElementsByClassName('close')[0];
let createEl = document.getElementsByClassName('create')[0];
let h2El = document.getElementsByClassName('titleH2')[0];

titleEl.addEventListener('click',()=>{
    writeEl.style.maxHeight="500px"
    createEl.setAttribute('style', 'border: 1px solid #ccc;')
    h2El.setAttribute('style', 'border: none;')
});
closeEl.addEventListener('click',()=>{
    writeEl.style.maxHeight="0px"
    createEl.setAttribute('style', 'border: none;')
    h2El.setAttribute('style', 'border: 1px solid #ccc;')
});


let content_title = document.querySelectorAll('.content_title');
let titleElArr= [...content_title]
let contentEl = document.querySelectorAll('.list_content');
let contentElArr = [...contentEl]

contentElArr.forEach(e=>e.style.display ="none")


titleElArr.forEach(e=>{
    e.addEventListener('click',()=>{
        let num=titleElArr.indexOf(e);
        let display = contentEl[num].style.display;
        if(display=='block') {
            contentEl[num].style.display='none'
        }else {
            contentEl[num].style.display='block'
        }
    })
})

const updateBtnEl = document.querySelectorAll('.update1');
const updateEl = document.querySelectorAll('.updates');

const updateBtnArr = [...updateBtnEl];
const updateArr = [...updateEl];

updateArr.forEach(e=>e.style.display='none');

updateBtnArr.forEach(e=>{
    e.addEventListener('click',()=>{
        let num=updateBtnArr.indexOf(e);
        let display = updateArr[num].style.display;
        if(display=='block') {
            updateArr[num].style.display='none';
            updateBtnArr[num].value="수정하기"
        }else {
            updateArr[num].style.display='block'
            updateBtnArr[num].value="수정취소"
        }
    })
})