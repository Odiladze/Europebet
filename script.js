var accordion = document.getElementsByClassName("acc-title");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var acctxt = this.nextElementSibling;
    if (acctxt.style.maxHeight) {
      acctxt.style.maxHeight = null;
    } else {
      acctxt.style.maxHeight = acctxt.scrollHeight + "px";
    }
  });
}

const actModal = document.querySelector(".js-active");
const actModal2 = document.querySelector(".js-active-2");

const actModal3 = document.querySelector(".js-button1");
const actModal4 = document.querySelector(".js-button2");

const imgModal2 = document.querySelector(".trulaila");
const imgModal = document.querySelector(".trulaila2");

const darkModal = document.querySelector(".dark2");
const darkModal2 = document.querySelector(".dark3");

const whitedarkModal = document.querySelector(".whitedark");
const whitedarkModal2 = document.querySelector(".whitedark2");

const hideModal = document.querySelector(".hidden");

const tableModal1 = document.querySelector(".js-table1");
const tableModal2 = document.querySelector(".js-table2");

function action1() {
  imgModal2.src = "images/tab-bg-active.png";
  imgModal.src = "images/tab-bg.png";

  darkModal.style.color = "#89B5B7";
  darkModal2.style.color = "#89B5B7";
  whitedarkModal.style.color = "white";
  whitedarkModal2.style.color = "white";

  document.querySelector(".minilock").style.display = "inline-block";
  document.querySelector(".js-button1").style.background = "#2E9EA1";
  document.querySelector(".js-button2").style.background = "#1A293B";

  hideModal.classList.add("hidden");

  tableModal1.classList.remove("hidden");
  tableModal2.classList.add("js-table2");

  document.querySelector(".undtable2").innerHTML =
    "*ლიდერბორდი და დარჩენილი ქეშ დროფ პრიზების ოდენობა განახლდება ავტომატურად, მონაწილე<br>თამაშების ფანჯარაში";
}

function action2() {
  imgModal.src = "images/tab-bg-active.png";
  imgModal2.src = "images/tab-bg.png";

  darkModal.style.color = "white";
  darkModal2.style.color = "white";
  whitedarkModal.style.color = "#89B5B7";
  whitedarkModal2.style.color = "#89B5B7";

  document.querySelector(".minilock").style.display = "none";
  document.querySelector(".js-button2").style.background = "#2E9EA1";
  document.querySelector(".js-button1").style.background = "#1A293B";

  hideModal.classList.remove("hidden");

  tableModal1.classList.add("hidden");
  tableModal2.classList.remove("js-table2");

  document.querySelector(".undtable2").innerHTML =
    "*ლიდერბორდი და დარჩენილი ქეშ დროფ პრიზების ოდენობა განახლდება ავტომატურად,მონაწილე თამაშების ფანჯარაში. <br> *თუ მომგებიან სპინზე დადებული ფსონი გადააჭარბებს 40₾-ს, მაშინ მოთამაშის მოგებული მულტიპლიკატორი გამრავლდება 40₾-ზე <br> *ფრისპინების მოგების შემთხვევაში, 10 ცალი ფრისპინის ნომინალი განისაზღვრებამომგებიან სპინზე დადებული ფსონის<br> შესაბამისად. თუ მომგებიან სპინზე დადებული ფსონი გადააჭარბებს 4₾-ს, მოთამაშე ჯამურად მიიღებს 10 ცალ 4 ლარიან ფრისპინს";
}

actModal.addEventListener("click", function () {
  action1();
});
actModal2.addEventListener("click", function () {
  action2();
});
actModal3.addEventListener("click", function () {
  action1();
});
actModal4.addEventListener("click", function () {
  action2();
});
