function handleOnClick(){
     const handlerStatus=document.getElementById('handler-status');
     handlerStatus.innerText='Hello  Boss All Ok..... I am working Properly';
     handlerStatus.style.color='red';
}
document.getElementById('event-lisenter').addEventListener('click', function(){
    const handlerStatus=document.getElementById('handler-status');
    handlerStatus.innerText='Hii! Devil. GO! GO!.....Go Some More'
    handlerStatus.style.color='blue';
})

function pageTitle(){
    const maiTitleChange=document.getElementById('page-title');
    maiTitleChange.innerText='Hellow! Bittu';
} 


document.getElementById('btn-update').addEventListener('click', function(){
    const inputField=document.getElementById('input-fiend');
    const inputText=inputField.value;
    const p=document.getElementById('input-text-display');
    p.innerText=inputText;
    inputField.value='';


})