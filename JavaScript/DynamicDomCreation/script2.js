const ar = [
  "Saurabh",
  "Rupesh",
  "Krishana",
  "Pushkar",
  "Muskan_G",
  "Milki",
  "Priya",
  "Muskan_K",
  "Sujal"
];

const List = document.createElement("ol");

ar.forEach((item) => {
  const l = document.createElement("li");
  l.textContent = item;
  List.appendChild(l);
});

document.getElementById("myList").appendChild(List);