// Creazione array membri team
const members = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg" 
    },
]
console.log(members);

// Stampa in console delle informazioni dell'array precedente
for (let i = 0; i < members.length; i++) {
    const curMembers = members[i];
    console.log(curMembers.name);
    console.log(curMembers.role);
    console.log(curMembers.photo);
}

// Stampa nel DOM di tutte le informazioni e conversione stringhe foto in img
const rowElem = document.querySelector(".row");
let membersElem = "";

for (let i = 0; i < members.length; i++) {
    const curMembers = members[i];
    membersElem += `
    <div class="col-4 mt-5">
        <div class="card">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
                <p class="card-text"><img src="img/${curMembers.photo}"></p>
                <h5 class="card-title">${curMembers.name}</h5>
                <p class="card-text">${curMembers.role}</p>
            </div>
        </div>
    </div>
    `;
}

console.log(membersElem);
rowElem.innerHTML = membersElem;

