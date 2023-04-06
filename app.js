let btn$ = document.getElementsByTagName("button");
// let btn$ = document.querySelector('button');
let heading = document.getElementById("head");

btn$[0].addEventListener("click", function () {
  btn$[0].style.color = "green";
  btn$[0].style.backgroundColor = "yellow";
  const para = document.createElement("p");
  const node = document.createTextNode("This is new.");
  heading.appendChild(para);
  para.appendChild(node);
});

//switch case
let month = 2;
let Mname;

switch (month) {
  case 1:
    Mname = "Jan";
    break;
  case 2:
    Mname = "Feb";
    break;
  case 3:
    Mname = "Mar";
    break;
  default:
    Mname = "Dec";
}
console.log(Mname);

//switch
const food = "nuts";

switch (food) {
  case "cake":
    console.log("I like cake");
    break;
  case "pizza":
    console.log("I like pizza");
    break;
  default:
    console.log("I like all foods");
    break;
  case "ice cream":
    console.log("I like ice cream");
    break;
}

//continue
for (let i = 1; i <= 10; i++) {
  if (i == 6) {
    continue;
  }
  console.log(i);
}

//break
for (let i = 1; i <= 10; i++) {
  if (i == 6) {
    break;
  }
  console.log(i);
}

//while loop
var j = 0;
while (j > 0) {
  console.log(j);
  j--;
}

//do while
var i = 0;
do {
  console.log(i);
  i--;
} while (i > 0);

//promises

var p = new Promise(function (resolve, reject) {
  var x = 2 + 3;
  if (x == 5) {
    resolve(" executed and resolved successfully");
  } else {
    reject("rejected");
  }
});
p.then(function (fromResolve) {
  console.log("Promise is" + fromResolve);
}).catch(function (fromReject) {
  console.log("Promise is " + fromReject);
});

//async and await
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 1000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();

// console.log(x);
// let x =20; //error

console.log(y);
var y = 30; //undefined

// console.log(z);
// const z =50; //error

console.log(Math.max()); //Infinity

console.log(Math.max(1, 5, 9, 15)); //15

let a = async () => {
  try {
    let x = await fetch("https://jsonplaceholder.typicode.com/users");
    let y = await x.json();
    y.map((data) => console.log(data.name));
  } catch (error) {
    console.log("error");
  }
};

a();

//fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.map((data) => console.log(data.name));
  })
  .catch((error) => console.log(error));

//fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.map((data) => console.log(data));
  })
  .catch((error) => console.log("rejected"));

//async

async function f() {
  try {
    let x = await fetch("https://jsonplaceholder.typicode.com/users");
    let y = await x.json();
    y.filter((data) => console.log(data.id >= 5));
  } catch (error) {
    console.log(error);
  }
}
f();

document.getElementsByClassName
