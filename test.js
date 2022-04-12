//console.log($('body'));

//create variables and log
let p = $('#test');
let div = $('.my-class');
let ul = $('ul');

console.log(p);
console.log(div);
console.log(ul);

//add console.log for p.text
//the p variable above is jquery element object
//text is method on object

console.log(p.text());
p.text('New Text') //nothing, returns text

//set value in input
//$('input').val('New Value');

//access placeholder value on input field
$('input').attr('placeholder', 'Placeholder Text')
//grab by html name
//attr() method that can change attribute, 2 parameters


//add element to dom: append, prepend, before and after
//append and prepend add to end of content or beginning
//after and before immediately after or before existing element

div.prepend('<p>prepended paragraph</p>');
div.append('<p>appended paragraph</p>');
div.before('<p>paragraph that was added before the div</p>');
div.after('<p>paragraph that was added after the div</p>');

//REMOVE
//remove method deleteselement and children
//empty method deletes children of the selected element

div.empty();
ul.remove();
//unordered list is gone
//div emptied paragraphs from div

//HIDE AND SHOW
$('input').hide();
setTimeout(() => $('input').show(), 2000);
