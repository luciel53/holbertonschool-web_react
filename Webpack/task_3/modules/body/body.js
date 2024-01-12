import $ from 'jquery';
import _ from 'lodash';

// Add body code (button, counter)
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");

$('button').on('click', _.debounce(updateCounter, 500));

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}
