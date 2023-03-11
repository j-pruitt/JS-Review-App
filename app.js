//local reviews data
const reviews = [
    {
        id: 1,
        name: "John Smith",
        job: "web developer",
        img: "https://www.shutterstock.com/image-photo/smiling-confident-bearded-indian-businessman-260nw-2024994209.jpg",
        text: "Est sit amet facilisis magna etiam. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Feugiat vivamus at augue eget arcu dictum. Quam viverra orci sagittis eu. Et sollicitudin ac orci phasellus. Cras sed felis eget velit. Ultrices tincidunt arcu non sodales neque sodales ut etiam.",
    },
    {
        id: 2,
        name: "Jane Doe",
        job: "web designer",
        img: "https://www.shutterstock.com/image-photo/head-shot-portrait-smart-confident-260nw-1721092123.jpg",
        text: "Orci dapibus ultrices in iaculis nunc sed. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Malesuada fames ac turpis egestas maecenas. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Tortor pretium viverra suspendisse potenti nullam ac. Aenean et tortor at risus viverra adipiscing at in.",
    },
    {
        id: 3,
        name: "Homer Simpson",
        job: "engineer",
        img: "https://www.shutterstock.com/image-photo/businessman-suit-looking-camera-making-260nw-1302585139.jpg",
        text: " Amet est placerat in egestas erat imperdiet sed euismod. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. In mollis nunc sed id semper risus in hendrerit gravida. Velit euismod in pellentesque massa placerat. Gravida cum sociis natoque penatibus et magnis.",
    },
    {
        id: 4,
        name: "Peter Griffin",
        job: "help desk representative",
        img: "https://www.shutterstock.com/image-photo/smiling-cheerful-young-adult-african-260nw-1850821510.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Nisl nunc mi ipsum faucibus vitae. ",
    },
    
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded',function(){
  showPerson(currentItem);
} );

//show person based on item

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

//show prev person
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1
    }
    showPerson();
});
