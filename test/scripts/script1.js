window.onload = function () {

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpeg') {
      myImage.setAttribute('src', 'https://atts.w3cschool.cn/attachments/image/20190804/1564912856214029.jpg');
    } else {
      myImage.setAttribute('src', 'images/1.jpeg');
    }
}
function setHeading(Lisa) {
      let myHeading = document.querySelector('h1');
      myHeading.textContent = 'Hello!' + Lisa + '!';
    }   
    function setUserName() {
      let myName = prompt('请输入你的名字');
      localStorage.setItem('name', myName);
      setHeading(myName);
    }    
    let storedName = localStorage.getItem('name');
    if(!storedName) {
       setUserName();
    } else {
       setHeading(storedName);
    }    
    let myButton = document.querySelector('button'); 
    myButton.onclick = setUserName;
};