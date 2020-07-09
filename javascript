TOPICS=====

TOPIC 1 ====this keyword

Notes--
The javascript this keywords refers to the object it belongs to.
It has different values depending on where it is used.

1-In a method,this refers to the owner object.
2-Alone,this refers to the global object.
3-In a function,this refers to the global object.//see this carefully
4-In a function,in strict mode,this is undefined.
5-In an event,this refers to the element that received the event.//remember this .button click
6-Methods like call(),and apply() can refer this to any object.


--explanation for 3 -

as in method a this in a function(i.e method) is refers to the owner object similarily here this in a function refers to the owner object which is in this case is the global object.

--explanation for 4 - 
in function by default ,this refers to the global object.
In strict mode ,this is undefined,because strict mode does not allow default binding(now basicaly
binding allows an object to borrow a method from another object without making a copy of that method.)

--explanation for 5-
<button onclick="this.style.display='none'">Click to remove me!</button>
here this refers to the button itself.

call and apply() from w3 schul
apply takes array for multiple arguements
let for block scope

const behave like let variables .except variable cant be redefined

the kwyword const does not define a constant prim mitive value but we can change the properties of constant objects.


constant object can change
--
const car = {
       type:"fiat",
       model:"sdjs",
       color:"sjnss"
};
//you can change the property 
car.color = "red";
//you can add a property 
car.owner ="Johnson";

But you cannot reasign a constant object
example--
const car ={type:"fiat",coloe:"white",model:"5050"};
car={type:"vovlo",model:"ddjd",color:"
djkddkd"}; //error

--constant arrays can change

but you cannot  reassign a constant array

--Arrow functions were introduced in ES6 
