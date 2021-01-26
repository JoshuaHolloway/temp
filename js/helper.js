const qs = (target) => document.querySelector(target);

// ========================================================

const it = (target, innerText) => {
  const elem = qs(target);
  elem.innerText = innerText;
};

// ========================================================

const it_append = (parent_target, target, innterText) => {
  const parent_elem = qs(parent_target);
  const elem = qs(target);

  console.log();
  // RIGHT HERE (tue):
  // RIGHT HERE (tue):
  // RIGHT HERE (tue):
  // RIGHT HERE (tue):
  // RIGHT HERE (tue):
  // RIGHT HERE (tue):
  // RIGHT HERE (tue):
  // RIGHT HERE (tue):
  // -trying to grab the ul that houses the li drop down options (added in JS)
  // -Then append the new elem with the innerText changed

  elem.innerText = innerText;
  parent_elem.append(elem);
};

// ========================================================

const known_foods_not_in_table = () => {
  const known_foods_keys = Object.keys(known_foods);
  let foods_keys = Object.keys(foods);

  const known_foods_not_in_table_obj = {};
  known_foods_keys.forEach((key, idx) => {     
    if (known_foods_keys[idx] !== foods_keys[idx]) {
      const food_name = known_foods_keys[idx];

      known_foods_not_in_table_obj[food_name] = foods[known_foods_keys[idx]];
    }
  });
  return known_foods_not_in_table_obj;
};

// ========================================================