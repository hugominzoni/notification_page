
const markRead = document.querySelector('.mark-read');
const msgBox = document.querySelectorAll('.msg-box');
const unread = document.querySelectorAll('.unread');
const qtyBox = document.querySelector('.qty')
let unreadMsgNum = document.querySelector('.qty h3')
let num = 3



for( let i = 0; i < unread.length; i++){
    
    
    unread[i].addEventListener('click', menos)
    
    function menos(){
        num--
        qtyBox.style.fontWeight = 'bold'
        qtyBox.style.fontSize = '12px'
        qtyBox.textContent = num
    }
    
    unread[i].addEventListener('click', readMSG)
    
    function readMSG(){
        
        unread[i].classList.remove('unread')
        
        if(num <= 0){
            qtyBox.style.display = 'none'
        }
    }
    
}

markRead.addEventListener('click', function(){
    unread.forEach(unread => {
        unread.classList.remove('unread')
    })
    qtyBox.style.display = 'none'
})