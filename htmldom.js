var headingNode = document.getElementById('heading');
var headingNodes = document.getElementsByClassName('heading');
var h1s = document.getElementsByTagName('h1');
var cs = document.querySelector('.hox .heading');
//lấy thẻ giống cách khai báo trong css
var h1Element = document.getElementsByTagName('h1');
var h2Element = document.getElementsByTagName('h2');
var h3Element = document.getElementsByTagName('h3');
// Làm bài tập tại đây
var checkboxNodes = document.querySelectorAll('input');
var checkbox1Element = document.querySelector('input[type="checkbox"],input[value="1"]');
var checkboxCheckedAndNotDisabled = document.querySelector('[checked]:not([disabled])');
var checkboxDisabledAndNotChecked = document.querySelector('[disabled ]:not([checked ])' );
var checkboxCheckedAndDisabled = document.querySelector('[checked],[disabled]');

/////////
checkbox1Element.setAttribute