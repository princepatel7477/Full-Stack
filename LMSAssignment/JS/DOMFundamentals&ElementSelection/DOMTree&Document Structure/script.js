// Q1: DOM Tree and Document Structure
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    const heading = document.querySelector("h1");
    const section = document.querySelector("section");
    const paragraphs = document.querySelectorAll("p");

    console.log("H1 Parent:", heading.parentElement);
    console.log("H2 Parent:", section.querySelector("h2").parentElement);

    paragraphs.forEach((p, index) => {
        console.log("Paragraph " + (index + 1) + " Parent:", p.parentElement);
    });
    console.log("H2 and First Paragraph are siblings:",
        section.querySelector("h2").nextElementSibling === paragraphs[0]
    );
    console.log("Body is ancestor of H2:",
        document.body.contains(section.querySelector("h2"))
    );

// Q1: DOM Tree and Document Structure
    const div = document.querySelector("div");
    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");
    const button = document.querySelector("button");

    console.log("Div Element:", div.nodeName);
    console.log("H1 Element:", h1.nodeName);
    console.log("P Element:", p.nodeName);
    console.log("Button Element:", button.nodeName);

    console.log("H1 Text Node:", h1.firstChild.nodeValue);
    console.log("P Text Node:", p.firstChild.nodeValue);
    console.log("Button Text Node:", button.firstChild.nodeValue);

    console.log("All Child Nodes of Div:", div.childNodes);
    console.log("Total Child Nodes:", div.childNodes.length);

