
const getInt = document.querySelector('.getInt')
getInt.addEventListener('click', runFun);

function runFun() {
  const name = document.querySelector('.textBox').value;
  if(name !== '') {
    console.log(name);
    processInitial(name);
  } else {
    console.log("Hi please I can't generate any initial")
  }
  
}

const processInitial = (name) => {
  const arr = name.split(' ');
  const message = document.querySelector('.message');
  let result = '';
  arr.forEach((name) => {
    let splitArr = name.split('');
    result += splitArr[0];
  })
  message.textContent = result;
}

//UICtrl
const UICtrl = (() => {
  
})();

//Brain Ctrl
const Brain = ((UIctrl) => {
  /* return init {

  } */
})();

Brain.init(UIctrl);