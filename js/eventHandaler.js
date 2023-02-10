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