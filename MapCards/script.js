const contentlist = document.querySelector("#list");
const arr = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "another day",
];

let content = "";

arr.forEach((element, index) => {
  index > 5
    ? (content += `<li class="green">${element} is the ${
        index + 1
      }'th day in the week</li>\n`)
    : (content += `<li class="red">${element} is the ${
        index + 1
      }'th day in the week</li>\n`);
});

contentlist.innerHTML = content;
