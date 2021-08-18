const form = document.forms[0];
const inputs = document.querySelectorAll('.input');
const output = document.querySelector('#output');
const content = document.querySelector('.content');
const section = document.querySelector('.sectionClass');
const reset = document.querySelector('#reset');

form.addEventListener('submit', checkHandler);
function checkHandler(e) {
  e.preventDefault();

  let CP = inputs[0].value;
  let Qty = inputs[1].value;
  let SP = inputs[2].value;
  if (!isNaN(CP) && !isNaN(Qty) && !isNaN(SP)) {
    CP = Number(CP);
    Qty = Number(Qty);
    SP = Number(SP);
    if (CP > 0 && Qty > 0 && SP > 0) {
      //loss
      if (CP > SP) {
        const loss = ((CP - SP) * Qty).toFixed(2);
        const lossPer = (((CP - SP) * 100) / CP).toFixed(2);
        output.innerHTML = `<div style="background-color: rgb(255,0,0,0.7); padding: 1rem">You lost ${lossPer}%. Your total loss is ₹${loss}</div>`;

        if (lossPer > 50) {
          section.classList.add('noBg');
          content.classList.add('sadTheme');
        }
      } else {
        const profit = ((SP - CP) * Qty).toFixed(2);
        const profitPer = (((SP - CP) * 100) / CP).toFixed(2);
        output.innerHTML = `<div style="background-color: rgb(255,0,0,0.7); padding: 1rem">You gained ${profitPer}%. Your total profit is ₹${profit}</div>`;

        if (profitPer > 50) {
          section.classList.add('noBg');
          content.classList.add('happyTheme');
        }
      }
    } else {
      //error
      output.innerHTML = `<div style="background-color: rgb(255,0,0,0.7); padding: 1rem">Please enter values bigger than 0</div>`;
    }
  }
}

reset.addEventListener('click', function () {
  inputs[0].value = '';
  inputs[1].value = '';
  inputs[2].value = '';
  output.innerHTML = '';
  content.classList.remove('happyTheme');
  content.classList.remove('sadTheme');
});
