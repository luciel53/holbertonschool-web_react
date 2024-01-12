import $ from 'jquery';
import _ from 'lodash';

$(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append("<p id='count'></p>");
  $('body').append('<p>Copyright - Holberton School</p>');
});

$('button').on('click', _.debounce(updateCounter, 500));

/* tracks the number of times the button element has been clicked. */
let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}
