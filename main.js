let arr = ["1.jpg", "2.jfif", "3.jpg", "4.jfif", "5.jfif", "6.jfif", "3.jpg"];
let loc = document.querySelector("#i_1");
let loct = document.querySelector("#i_2");
let count = 0;

setInterval(() => {
    for (let i = 0; i < arr.length; i++) {
        loc.src = arr[count];
    }
    count += 1;
    if (arr.length <= count) {
        count = 0;
    }
}, 1500);

let right = document.querySelector("#right");
let left = document.querySelector("#left");
let count_1 = 0;
right.addEventListener("click", () => {
    count_1 += 1;
    if (count_1 >= arr.length) {
        count_1 = 0;
    }
    loct.src = arr[count_1];
});
left.addEventListener("click", () => {
    count_1 -= 1;
    if (count_1 < 0) {
        count_1 = 6;
    } else if (count_1 > 6) {
        count_1 = 0;
    }
    loct.src = arr[count_1];
});