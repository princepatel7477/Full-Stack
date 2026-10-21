const H = document.createElement("h2");
const P = document.createElement("p");
const B = document.createElement("button");

H.classList.add("text-info");
H.textContent = "Sub Heading";

P.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, saepe, ullam natus quia dolor id quos, a explicabo obcaecati facere nam eaque vitae sint. Voluptate, modi! Dolorem ea quibusdam, vero accusantium in vel, odio dignissimos consequuntur temporibus provident possimus quasi animi velit blanditiis aliquid expedita amet minima ut voluptatem dolor vitae doloribus quam. Aspernatur nisi quibusdam quidem quas tempora eos corporis, voluptates, expedita sit fuga porro aliquid fugit, dolorum temporibus! Aliquam doloribus molestiae ut commodi maxime expedita sint esse nihil, ullam quam quo explicabo cupiditate molestias reprehenderit nemo exercitationem velit consequatur temporibus! Neque exercitationem hic a repellendus repudiandae, excepturi distinctio.";

B.classList.add("btn", "btn-primary");
B.innerText = "Submit";

const div = document.getElementById("task1");

div.appendChild(H);
div.appendChild(P);
div.appendChild(B);

H.append("Welcome");

console.log(H.innerText);

H.remove();