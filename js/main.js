const button = document.querySelector('.calc-button');
const input_fields = document.querySelectorAll('.serving-input');

const get_field_val = (input_field) => Number(input_field.value);

// ===========================================================

function set_input_field_listeners() {

  input_fields.forEach((input_field, input_field_idx) => {
  
    
    // Add event listeners to all current input fields 
    input_field.addEventListener('change', () => {
      
      const input_field_val = get_field_val(input_field);
      const food_keys = Object.keys(foods);
      
      // Update the foods object
      foods[food_keys[input_field_idx]].servings = input_field_val;
      console.log('foods: ', foods);
  
      // Debug:
      // console.log('food row: ', food_keys[input_field_idx]);
      // console.log('food row data: ', foods[food_keys[input_field_idx]]);
      // console.log('input field value: ', input_field_val);
  
      // Update the calories calculation
    });
  
  });

};
set_input_field_listeners();

// ===========================================================

const compute_calories = (protien, fat=0, carbs=0) => {
  // input units: grams

  const cals_from_fat = 9 * fat;
  const cals_from_carbs = 4 * carbs;
  const cals_from_protien = 4 * protien;

  return cals_from_fat + cals_from_carbs + cals_from_protien;
};

// ===========================================================



// ===========================================================

button.addEventListener('click', () => {

  // DON'T GRAB SERVINGS FROM TABLE HERE
  // -Instead, when serving is updated in table, set the foods object
  // -There are two main objects: 
  //  --1. Known Foods (fake db)
  //  --2. Foods



  // const servings_1 = get_field_val(input_fields[0]);
  // const servings_2 = get_field_val(input_fields[1]);
  const servings = [];
  input_fields.forEach((x, idx, X => {
    servings.push(get_field_val(x));
    console.log(`servings ${idx}: `, servings[idx]);

    
  }));
  
  let cals = 0;
  let idx = 0;
  for (food in foods) {
    // const protien = servings[idx] * foods['banana'].protien;
    // const fat = servings[idx] * foods['banana'].fat;
    // const carbs = servings_1 * foods['banana'].carbs;
    // cals += compute_calories(protien, fat, carbs);
  }
  
  // Food-1:
  console.log('cals_1: ', cals_1);

  // Food-2:
  const protien_2 = servings_2 * foods['apple'].protien;
  const fat_2 = servings_2 * foods['apple'].fat;
  const carbs_2 = servings_2 * foods['apple'].carbs;
  const cals_2 = compute_calories(protien_2, fat_2, carbs_2);
  console.log('cals_2: ', cals_2);


  //const cals = cals_1 + cals_2
  //console.log('cals: ', cals);
});