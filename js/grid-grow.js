let num_rows = 2;

// ==============================================

const grid = document.querySelector('.grid-container');
const add_food_button = document.querySelector('.add-food-button');

// ==============================================

// Listener for 'Add Food' button to add new row to table
add_food_button.addEventListener('click', () => {

  num_rows++;

  // Change CSS
  grid.style.gridTemplateRows = `repeat(${num_rows}, 1fr)`;

  // Change HTML
  const new_elem_1 = document.createElement('div');
  new_elem_1.classList.add('table-food-name');
  // new_elem_1.textContent = 'New Food';
  grid.append(new_elem_1);

  const new_elem_2 = document.createElement('div');
  new_elem_2.classList.add('table-serving');
  const new_input_field = document.createElement('input');
  new_input_field.classList.add('serving-input');
  new_input_field.type = "number";
  new_elem_2.append(new_input_field);
  grid.append(new_elem_2);

  // <input class="serving-input" type="number" ></input>

  const keys = Object.keys(known_foods);
  // console.log('keys: ', keys);

  // Generate drop down:
  new_elem_1.innerHTML = `
    <div class="drop-down-container">
      <div class="drop-down">Drop-Down</div>
      <div class="list-container show">
        <ul>
        </ul>
      </div>
    </div>`;

  const ul = document.querySelector('.list-container > ul');

  // - - - - - - - - - - - - - - - - - - - - - - -

  // -Create a drop down option for each known food
  // -Only display foods not already in table
  // console.log('foods: ', foods);
  // console.log('known_foods: ', known_foods);
  const known_foods_keys = Object.keys(known_foods);
  const foods_keys = Object.keys(foods);
  known_foods_keys.forEach((key, idx) => {

    if (known_foods_keys[idx] !== foods_keys[idx]) {
      // console.log('food key: ', foods_keys[idx], ' and known_foods key: ', known_foods_keys[idx]);
      const li = document.createElement('li');
      li.innerText = `${key}`;
      ul.append(li);
    }
    
  });
  const li = document.createElement('li');
  li.innerText = 'New Food';
  ul.append(li);

  // - - - - - - - - - - - - - - - - - - - - - - -

  // Drop-down listener:
  const drop_down_button = document.querySelector('.drop-down');
  drop_down_button.addEventListener('click', () => {
    const drop_down_list = document.querySelector('.list-container');
    drop_down_list.classList.toggle('show');
  });

  // - - - - - - - - - - - - - - - - - - - - - - -

  // Drop-down selection listener
  const food_options_HTML = document.querySelectorAll('.list-container > ul > li');
  food_options_HTML.forEach(food_option_HTML => {
    food_option_HTML.addEventListener('click', () => {
      // console.log('key: ', keys[idx]);

      // Add selected chosen food to foods array:
      const food_name = food_option_HTML.innerText;
      
      // Update foods object with food data from known foods array based on selection of new food
      foods[food_name] = known_foods[food_name];
      foods[food_name].name = food_name;
      foods[food_name].servings = 0;

      // Turn off the drop down menu
      const list_container = document.querySelector('.list-container')
      list_container.classList.remove('show');

      // Update table with foods object data
      const table_row_name = document.querySelectorAll('.table-food-name');
      foods_keys.forEach((food, food_idx) => {
        debugger
        table_row_name.innerText = food.name;
      });

      // Add event listener to newly created row
      // -For simplicity, just re-set event listeners on all rows
      set_input_field_listeners();


    });
  });

  // - - - - - - - - - - - - - - - - - - - - - - -

});