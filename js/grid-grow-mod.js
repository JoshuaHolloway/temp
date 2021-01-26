let num_rows = 1;

// ==============================================

// const grid = document.querySelector('.grid-container');
const main_table = document.querySelector('#main-table');
const main_table_body = main_table.querySelector('tbody');
const add_food_button = document.querySelector('#add-food-button');

// ==============================================

// Listener for 'Add Food' button to add new row to table
add_food_button.addEventListener('click', () => {
  
  num_rows++;
   
  // - - - - - - - - - - - - - - - - - - - - - - -

  const known_foods_not_in_table_obj = known_foods_not_in_table();
  console.log(known_foods_not_in_table_obj);

  // - - - - - - - - - - - - - - - - - - - - - - -
  
  // Change HTML 
  const new_row = document.createElement('tr');   // table-row
  const new_cell = document.createElement('td');  // table-data-cell
  new_cell.innerHTML = 
    `<div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        Choose Food
      </button>
      <ul id="food3_dropdown" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a id="food_option_1" class="dropdown-item" href="#">Action</a></li>
      </ul>
    </div>`;
  // `<div class="dropdown">
  //   <button id="food-1-btn" class="btn btn-secondary dropdown-toggle show" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
  //     Dropdown button
  //   </button>
  //   <li class="dropdown-menu show" aria-labelledby="dropdownMenuButton">
  //     <li id="food-1_li-1"><a class="dropdown-item" href="#">Food-1</a></li>
  //     <li id="food-1_li-2"><a class="dropdown-item" href="#">Food-2</a></li>
  //     <li id="food-1_li-3"><a class="dropdown-item" href="#">Food-3</a></li>
  //   </li>
  // </div>`;
  new_row.append(new_cell);

  // RIGHT HERE (mon)
  // RIGHT HERE (mon)
  // RIGHT HERE (mon)
  // RIGHT HERE (mon)
  // RIGHT HERE (mon)
  // RIGHT HERE (mon)
  // RIGHT HERE (mon)
  // RIGHT HERE (mon)
  // RIGHT HERE (mon)
  // -This new row has a button with id food-btn-1
  // -Target this to change the innerText of the button after the drop down menu is selected.
  // -Grab known foods (not already in table - write function for this) and use these to loop and dynamically add the li's inside the ul in the `` above.
  // -Place event listeners on these li-components, and update the button#food-1-btn innerText with the food name clicked.
  // -Update the other columns with the corresponding food's data.
  // -
  
  // Create remaining 4-columns
  for (let i = 0; i < 4; i++)
  new_row.append(document.createElement('td'));
  main_table_body.append(new_row);
  
  // Set inner text in drop down:
  it_append('#food3_dropdown', '#food_option_1', 'Hello');

  // - - - - - - - - - - - - - - - - - - - - - - -
  

  
  // - - - - - - - - - - - - - - - - - - - - - - -
  
  
  // - - - - - - - - - - - - - - - - - - - - - - -

});