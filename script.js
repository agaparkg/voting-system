// Option 1

// const voteBtn1 = document.querySelector("#vote1");
// const voteBtn2 = document.querySelector("#vote2");
// const voteBtn3 = document.querySelector("#vote3");

// const result1 = document.querySelector("#result1");
// const result2 = document.querySelector("#result2");
// const result3 = document.querySelector("#result3");

// voteBtn1.addEventListener("click", function () {
//   //   let currCount = Number(result1.innerHTML);
//   let currCount = +result1.innerHTML;
//   currCount++;
//   result1.innerHTML = currCount;
// });

// voteBtn2.addEventListener("click", function () {
//   //   let currCount = Number(result1.innerHTML);
//   let currCount = +result2.innerHTML;
//   currCount++;
//   result2.innerHTML = currCount;
// });

// voteBtn3.addEventListener("click", function () {
//   //   let currCount = Number(result1.innerHTML);
//   let currCount = +result3.innerHTML;
//   currCount++;
//   result3.innerHTML = currCount;
// });

// Option 2

// const voteBtn1 = document.querySelector("#vote1");
// const voteBtn2 = document.querySelector("#vote2");
// const voteBtn3 = document.querySelector("#vote3");

// voteBtn1.addEventListener("click", function () {
//   //   let currCount = Number(result1.innerHTML);
//   //   let currCount = +voteBtn1.nextElementSibling.childNodes[1].innerHTML;
//     let currCount = +voteBtn1.nextElementSibling.children[0].innerHTML;
// //   let currCount = +voteBtn1.parentElement.querySelector("#result1").innerHTML;
//   currCount++;
//   voteBtn1.parentElement.querySelector("#result1").innerHTML = currCount;
// });

// ...

// Option 3

// const voteBtn1 = document.querySelector("#vote1");
// const voteBtn2 = document.querySelector("#vote2");
// const voteBtn3 = document.querySelector("#vote3");

// function increaseCount(e) {
//   console.log(e.target);
//   let currCount = +e.target.nextElementSibling.childNodes[1].innerHTML;
//   currCount++;
//   e.target.nextElementSibling.childNodes[1].innerHTML = currCount;
// }

// voteBtn1.addEventListener("click", increaseCount);

// voteBtn2.addEventListener("click", increaseCount);

// voteBtn3.addEventListener("click", increaseCount);

// ...

// Option 4

// const btns = document.querySelectorAll("button"); // []

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", increaseCount);
// }

// function increaseCount(e) {
//   console.log(e.target);
//   let currCount = +e.target.nextElementSibling.childNodes[1].innerHTML;
//   currCount++;
//   e.target.nextElementSibling.childNodes[1].innerHTML = currCount;
// }

// ...

// Option 5

// function increaseCount(e) {
//   console.log(e.target);
//   let currCount = +e.target.nextElementSibling.childNodes[1].innerHTML;
//   currCount++;
//   e.target.nextElementSibling.childNodes[1].innerHTML = currCount;
// }

// ...

// Option 6

// const teams = [
//   {
//     id: 1,
//     name: "FC Barcelona",
//     img: "./images/barcelona.png",
//   },
//   {
//     id: 2,
//     name: "Juventus FC",
//     img: "./images/juventus.png",
//   },
//   {
//     id: 3,
//     name: "Manchester United FC",
//     img: "./images/manchester.png",
//   },
// ];

// {
//   /* <div class="box">
//   <img src="./images/barcelona.png" alt="" />
//   <h3>FC Barcelona</h3>
//   <button onclick="increaseCount(event)" id="vote1">
//     Vote
//   </button>
//   <div class="count">
//     Vote count: <span id="result1">15</span>
//   </div>
// </div>; */
// }

// const container = document.createElement("div");
// // container.className = "container"
// // container.classList.add("container");
// container.setAttribute("class", "container");

// document.body.appendChild(container);
// // document.body.appendChild(container1);
// // document.body.appendChild(container2);
// // document.body.appendChild(container3);
// // document.body.append(container1, container2, container3);

// function createABox(team) {
//   const box = document.createElement("div");
//   box.className = "box";

//   const img = document.createElement("img");
//   img.src = team.img;
//   const h3 = document.createElement("h3");
//   h3.innerText = team.name;

//   const btn = document.createElement("button");
//   btn.innerText = "Vote";
//   btn.setAttribute("id", `vote${team.id}`);

//   btn.addEventListener("click", increaseCount);

//   const count = document.createElement("div");
//   count.className = "count";
//   count.innerHTML = `Vote count: <span id="result${team.id}">0</span>`;
//   // count.innerText = `Vote count: <span id="result1">15</span>`;

//   box.append(img, h3, btn, count);
//   container.appendChild(box);
// }

// for (let i = 0; i < teams.length; i++) {
//   createABox(teams[i]);
// }
// // createABox();
// // createABox();
// // createABox();

// function increaseCount(e) {
//   console.log(e.target);
//   let currCount = +e.target.nextElementSibling.childNodes[1].innerHTML;
//   currCount++;
//   e.target.nextElementSibling.childNodes[1].innerHTML = currCount;
// }

// ...
// Option 7

const teams = [
  {
    id: 1,
    name: "FC Barcelona",
    img: "./images/barcelona.png",
  },
  {
    id: 2,
    name: "Juventus FC",
    img: "./images/juventus.png",
  },
  {
    id: 3,
    name: "Manchester United FC",
    img: "./images/manchester.png",
  },
];

{
  /* <div class="box">
  <img src="./images/barcelona.png" alt="" />
  <h3>FC Barcelona</h3>
  <button onclick="increaseCount(event)" id="vote1">
    Vote
  </button>
  <div class="count">
    Vote count: <span id="result1">15</span>
  </div>
</div>; */
}

const containerDiv = document.createElement("div");
containerDiv.setAttribute("class", "container");

document.body.appendChild(containerDiv);

function createABox(team) {
  const box = `<div class="box">
                <img src="${team.img}" alt="" />
                <h3>${team.name}</h3>
                <button onclick="increaseCount(event)" id="vote${team.id}">
                    Vote
                </button>
                <div class="count">
                    Vote count: <span id="result${team.id}">0</span>
                </div>
               </div>`;
  containerDiv.innerHTML += box;
}

for (let i = 0; i < teams.length; i++) {
  createABox(teams[i]);
}

function increaseCount(e) {
  console.log(e.target);
  let currCount = +e.target.nextElementSibling.childNodes[1].innerHTML;
  currCount++;
  e.target.nextElementSibling.childNodes[1].innerHTML = currCount;
}

// ...
