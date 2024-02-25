const reverse = function(input) {
  return input.split('').reverse('').join('');
};

let input = process.argv[2];

if (input) {
  console.log(reverse(input));
}

