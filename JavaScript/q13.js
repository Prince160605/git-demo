//css manipulation in js
// const heading = document.querySelector('#heading')
// heading.style.color=""
// heading.style.font=""

//appnd vs appendchild
// const heading = document.createElement('h1')
// heading.innerText="hello content"
// document.body.append("heading")
// const paragraph = document.createElement('p')
// paragraph.innerText ="this is paragraph"
// document.body.append("paragraph"
    
// )
// const imagee = document.createElement('img')
// imagee.getAttribute('src',"")
// imagee.getAttribute()
// appendchild(heading,"ksdbasdf")

// const box = document.getElementById('box');
// const addbtn = document.getElementById('addbutton');
// const removebutton = document.getElementById('removebtn');
// const togglebutton = document.getElementById('togglebtn');


//card
//image
//heading
//para
//button
const container = document.getElementById("container");

// Create Card
const card = document.createElement("div");
card.style.width = "300px";
card.style.border = "1px solid gray";
card.style.borderRadius = "10px";
card.style.padding = "15px";
card.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
card.style.textAlign = "center";

// Create Image
const img = document.createElement("img");
img.src = "https://picsum.photos/300/200";
img.style.width = "100%";
img.style.borderRadius = "10px";

// Create Heading
const heading = document.createElement("h2");
heading.innerText = "JavaScript Card";

// Create Paragraph
const para = document.createElement("p");
para.innerText = "This card is created dynamically using createElement().";

// Create Button
const btn = document.createElement("button");
btn.innerText = "Read More";
btn.style.padding = "10px 20px";
btn.style.cursor = "pointer";

// Append elements
card.appendChild(img);
card.appendChild(heading);
card.appendChild(para);
card.appendChild(btn);

// Append card to container
container.appendChild(card);