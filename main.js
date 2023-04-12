const myForm = document.querySelector('#my-form');
//const msg = document.querySelector('.msg');
const expenseList = document.querySelector('#expenses');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

//delete event
expenseList.addEventListener('click',removeItem);

//edit event
expenseList.addEventListener('click',editItem);

//console.log(nameInput)
function onSubmit(e) {
  e.preventDefault();
  const expenseAmount = document.querySelector('#expenseAmount').value;
  const description = document.querySelector('#description').value;
  const category = document.querySelector('#category').value;
   
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${expenseAmount}-${description}-${category}`));

    //add delete button
    //create del button element
    var deleteButton = document.createElement('button');
    //add classes to delete button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    deleteButton.appendChild(document.createTextNode('delete expense'));
    //append button to li
    li.appendChild(deleteButton);
    //append li to list
    expenseList.appendChild(li);

     //add edit button
    //create edit button element
    var editButton = document.createElement('button');
    //add classes to delete button
    editButton.className = 'btn btn-info btn-sm float-right edit';
    //append text node
    editButton.appendChild(document.createTextNode('edit expense'));
    //append button to li
    li.appendChild(editButton);
    //append li to list
    expenseList.appendChild(li);

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    expenseList.appendChild(li);
    // Clear fields
  
    //storing name and email in localstorage  
    const obj = {
        amt : expenseAmount,
        desc : description,
        cat:category
    }
   
    localStorage.setItem(description,JSON.stringify(obj));
    // Clear fields
    document.form.reset();

}
function removeItem(e){
    
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            //splitting
             var expense1 = li.firstChild.textContent;
            var splittingAmountDescCat = expense1.split("-");
            var desc1 = splittingAmountDescCat[1];
            expenseList.removeChild(li);
            localStorage.removeItem(desc1)
        }
    }
}
function editItem(e){
    
    if(e.target.classList.contains('edit')){
        const expenseAmount = document.querySelector('#expenseAmount');
        const description = document.querySelector('#description');
        const category = document.querySelector('#category');
            var li = e.target.parentElement;
            //splitting the name and email 
            var expense1 = li.firstChild.textContent;
            var splittingAmountDescCat = expense1.split("-");
            var desc1 = splittingAmountDescCat[1];
            var amt1 = splittingAmountDescCat[0];
            var cat1 = splittingAmountDescCat[2];
            expenseList.removeChild(li);
            localStorage.removeItem(desc1);
            expenseAmount.value = amt1;
            description.value = desc1;
            category.value = cat1;
        
    }
}