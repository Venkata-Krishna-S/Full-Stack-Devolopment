
let questions = [
  {
    id: 1,
    question: "Find the odd man out. 12, 24, 34, 48, 64, 84",
    answer: "34",
    options: [
      "48",
      "34",
      "24",
      "12"
    ]
  },
  {
    id: 2,
    question: "IC chips used in computers are usually made of:",
    answer: "Silicon",
    options: [
      "Silicon",
      "lead",
      "chromium",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "In 2 Dimensional Array, it is necessary to mention _______ dimension.",
    answer: "second",
    options: [
      "second",
      "first",
      "both",
      "None of these"
    ]
  },
  {
    id: 4,
    question:"A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
    answer:"5%",
    options: [
      "3%",
      "5%",
      "4%",
      "6%"
    ]
  }, 
  {
    id:5,
    question:"L, N, M, O, N, P, O, Q, __, __?",
    answer:"P,R",
    options: [
      "R,S",
      "P,P",
      "Q,R",
      "P,R"
    ]
  },
  {
    id:6,
    question:"ELFA, GLHA, ILJA, _____, MLNA",
    answer:"KLLA",
    options: [
      "OLPA",
      "KLMA",
      "LLMA",
      "KLLA"
    ]
  },
  {
    id:7,
    question:"I am standing ______the blue and white building. (i) opposite, (ii) beside, (iii) next to",
    answer:"ii or iii only",
    options: [
      "i or ii only",
      "ii or iii only",
      "i & iii only",
      " i or ii or iii"
    ]
  },
  {
    id:8,
    question:"If 20% of a = b, then b% of 20 is the same as:",
    answer:"4% of a",
    options: [
      "4% of a",
      "5% of b",
      "20% of a",
      "None"
    ]
  },
  {
    id:9,
    question:"At what rate percent per annum will a sum of money double in 8 years?",
    answer:"0.125",
    options: [
      "0.125",
      "0.135",
      "0.115",
      "0.145"
    ]
  },
  {
    id:10,
    question:"The compound interest on Rs. 30,000 at 7% per annum is Rs. 4347. The period (in years) is:",
    answer:"2.0",
    options: [
      "2.0",
      "2.5",
      "3.0",
      "4.0"
    ]
  },
  {
    id:11,
    question:"If f(x) = 2x + 3 and g(x) = (x - 3)/2, then fo(fo(go(go(fo(fo(go(go................(fo(fo( go(gof(x) )))).....)))))) = ? ",
    answer:"2x + 3",
    options: [
      "(x - 3) / 2",
      "x",
      "2x - 3",
      "2x + 3"
    ]
  },
  {
    id:12 ,
    question:"According to a certain code, ‘body’= 6, hand = –2, legs= 9, then ‘head’ is?",
    answer:"7.0",
    options: [
      "6.0",
      "8.0",
      "9.0",
      "7.0"
    ]
  },
  {
    id:13,
    question:"If Z= 2197 and R= 729. How would J be written in that code?",
    answer:"125.0",
    options: [
      "216.0",
      "124.0",
      "512.0",
      "125.0"
    ]
  },
  {
    id:14,
    question:"A total of 324 coins of 20 paise and 25 paise make a sum of Rs 71. The number of 25-paise coins is:",
    answer:"124.0",
    options: [
      "104.0",
      "120.0",
      "128.0",
      "124.0"
    ]
  },
  {
    id:15,
    question:"A zoo has some peacocks and some horses. If the number of heads be 48 and the number of feet be 140, then the number of peacocks will be:",
    answer:" 26.0",
    options: [
      "23.0",
      "25.0",
      "26.0",
      "27.0"
    ]
  },
  {
    id:16,
    question:"Men and women are________.",
    answer:"adults",
    options: [
      "children",
      "adults",
      "languages",
      "foods"
    ]
  },
  {
    id:17,
    question:"Ram________me with my homework right now.",
    answer:"is helping",
    options: [
      "is thinking",
      "is helping",
      "is working",
      "is making"
    ]
  },
  {
    id:18,
    question:"Despite his growing wealth and power, Raju remains________man.",
    answer:"a humble",
    options: [
      "a humble",
      "an irritable",
      "a greedy",
      "an intelligent"
    ]
  },
  {
    id:19,
    question:"The book’s________was shocking, since I never thought the book would end with a major death.",
    answer:"conclusion",
    options: [
      "beginning",
      "conclusion",
      "impression",
      "section"
    ]
  },
  {
    id:20,
    question:"Suresh is full of________and believes he can achieve almost any goal he sets for himself",
    answer:"confidence",
    options: [
      "confidence",
      "courage",
      "concern",
      "comfort"
    ]
  },
  {
    id:21,
    question:"Although the message was meant to be a________, I don’t mind if you tell it to your friends.",
    answer:"secret",
    options: [
      "special",
      "secret",
      "permanent",
      "educational"
    ]
  },
  {
    id:22,
    question:" What percentage of numbers from 1 to 70 have 1 or 9 in the unit's digit?",
    answer:"21",
    options: [
      "1",
      "14",
      "20",
      "21"
    ]
  },
  {
    id:23,
    question:"If 20% of a = b, then b% of 20 is the same as",
    answer:"4% of a",
    options: [
      "4% of a",
      "5% of b",
      "20% of a",
      "None"
    ]
  },
  {
    id:24,
    question:"They are standing ______the shade of the tree.",
    answer:" under",
    options: [
      "under",
      "in",
      "by",
      "on"
    ]
  },
  {
    id:25,
    question:"A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
    answer:"5%",
    options: [
      "3",
      "4",
      "5%",
      "6%"
    ]
  }
]
let question_count = 0;
let points = 0;
window.onload = function() {
  show(question_count);
};
function next() {
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);
  let user_answer = document.querySelector("li.option.active").innerHTML;
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);
  question_count++;
  show(question_count);
}
function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
