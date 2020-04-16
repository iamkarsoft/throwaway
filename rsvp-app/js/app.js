const form = document.getElementById('registrar');
const input = document.querySelector('input');
const ul = document.getElementById('invitedList');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const text = input.value;
  input.value ='';
  const li = document.createElement('li');
  const label = document.createElement('label');
  const removeButton
  label.textContent = "confirmed&nbsp;";
  label.className = "block mt-2"
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.textContent = text;
  li.className = "md:w-1/3 px-2 py-2 -mx-2 border borber-gray-100 ml-4 mr-4";
  li.appendChild(label);
  ul.appendChild(li);
})

ul.addEventListener('change', (e)=>{
   const checkbox = event.target;
   const checked = checkbox.checked;
   const listItem = checkbox.parentNode.parentNode;

   if(checked){
    listItem.className = 'md:w-1/3 px-2 py-2 -mx-2 ml-4 mr-4 border borber-gray-100 bg-gray-400'
   }else{
    listItem.className = 'md:w-1/3 px-2 py-2 -mx-2 border ml-4 mr-4 borber-gray-100'
   }
})
