function Login() {
  const un = document.getElementById("userName").value.trim();
  const ps = document.getElementById("password").value;

  console.log(un, ps);

  const LoginFromDataJson = {
    Name: un,
    password: ps,
  };
}

const loginFrom = document.getElementById("loginForm");

loginFrom.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("form submitted");

  const loginFromData = new FormData(loginFrom);

  const UN = loginFromData.get("userName");
  const PS = loginFromData.get("password");

  console.log(UN, PS);

  loginFromData.forEach((value, key) => console.log(key, ":", value));
});

const TestFrom = document.getElementById("testform");

const testFromDataJSON = {};
TestFrom.addEventListener("submit", (e) => {
  e.preventDefault();

  const testFromData = new FormData(TestFrom);

  testFromData.forEach((value, key) => console.log(key, ":", value));

  testFromData.forEach((value, key) => (testFromDataJSON[key] = value));
});

console.log(testFromDataJSON);


const collage =[
{
    clgName: "sam college",
     student1: "prince",
     year: "3rd year",

     projects: [
        {
            firstProject: "project1",
            secondProject: "project2",
            thirdProject: "project3"
        },
     ],
}
,
{
    clgName: "Bansal college",
     student1: "Sourabh",
     year: "4th year",

     projects: [
        {
            firstProject: "project1",
            secondProject: "project2",
            thirdProject: "project3"
        },
     ],
},
];

console.log(collage);
collage[1].projects[0].firstProject = "new project name";
delete collage[1].clgName;


const someData={
    name:"prince",
    age: 22,
    gender: "male",
};
const JsonToString = JSON.stringify(someData);
console.log(JsonToString);
console.log(someData);

const StringToJson = JSON.parse(JsonToString);
console.log(StringToJson);

var StName = "Prince"
var marks =79;
console.log(`Student with name ${StName} has scored ${marks}`);






