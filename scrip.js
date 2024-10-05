var users = [
    {
        profilepic: "https://images.unsplash.com/photo-1656221010175-bcfeadcb6017?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95cyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
        pendingMessage: 4,
        displyPicture: "https://media.istockphoto.com/id/1158014305/photo/headshot-of-a-teenage-boy.webp?a=1&b=1&s=612x612&w=0&k=20&c=IBPsjRYNiwG_aojvIT6JhtUjECIsKflVa1nNJEprE5o=",
        location: "karachi,pakistan",
        name: "Shoaib rahi",
        age: 28,
        interests: ["musics", "painting"],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet id quaerat.",
        isFreinds: null
    },
    {
        profilepic: "https://images.unsplash.com/photo-1656221008183-da235113ca1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJveXMlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
        pendingMessage: 3,
        displyPicture: "https://media.istockphoto.com/id/1922980465/photo/young-african-american-student-portrait-looking-at-camera-with-friendly-attitude-and-smiling.webp?a=1&b=1&s=612x612&w=0&k=20&c=oGef0f2OifRebLPgPBKEXirTOj54k_t_--ulVCPOxmg=",
        location: "lahore,pakistan",
        name: "Sameer Rahi",
        age: 28,
        interests: ["musics", "coading"],
        bio: "Lorem ipsum dolor sit amet consectetur ",
        isFreinds: null
    },
    {
        profilepic: "https://media.istockphoto.com/id/1158014305/photo/headshot-of-a-teenage-boy.webp?a=1&b=1&s=612x612&w=0&k=20&c=IBPsjRYNiwG_aojvIT6JhtUjECIsKflVa1nNJEprE5o=",
        pendingMessage: 4,
        displyPicture: "https://media.istockphoto.com/id/1180106536/photo/confident-youngster-looking-at-camera.jpg?s=612x612&w=0&k=20&c=xtrMaH9-b-REJsx3Tv8UdKZUxIPgl-roTjqVS5no9g4=",
        location: "Islamabad,pakistan",
        name: "farooq",
        age: 24,
        interests: ["arts", "buisness"],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet id quaerat fuga cum.Dignissimos amet id quaerat fuga cum.",
        isFreinds: null
    },
    {
        profilepic: "https://media.istockphoto.com/id/1823584556/photo/clever-redhead-schooler-with-puzzled-serious-expression-thinking-looking-at-side.webp?a=1&b=1&s=612x612&w=0&k=20&c=EU7O0Bvt-z4y0AWj65LMyd-je5o276H3beKVUFyWbhM=",
        pendingMessage: 4,
        displyPicture: "https://media.istockphoto.com/id/1159801546/photo/portrait-of-handsome-boy-posing-in-photo-studio.jpg?s=612x612&w=0&k=20&c=YLyXwo6WaVWv8j80fLEyPjOmp3--6VlVYRU-Eyco5eQ=",
        location: "quetta,pakistan",
        name: "jhangir Bahi",
        age: 26,
        interests: ["sports", "singing"],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet id ",
        isFreinds: null
    },
];


let curr = 0;

function select(elem) {
    return document.querySelector(elem)
}

(function initial() {
    select(".main-card img").src = users[curr].displyPicture;
    select(".incoming-card img").src = users[curr + 1].displyPicture;

    select(".prflimg img").src = users[curr + 3].profilepic;
    select(".bedge h5").textContent = users[curr].pendingMessage;
    select(".location h3").textContent = users[curr].location;
    select(".name h1:nth-child(1)").textContent = users[curr].name;
    select(".name h1:nth-child(2)").textContent = users[curr].age;
    select(".para p").textContent = users[curr].bio;
    let clutter = "";
    users[curr].interests.forEach((interest) => {
        clutter += `
          
            <i class="ri-folder-music-fill  w-20 h-10 bg-white/30 flex gap-2 font-semibold justify-center items-center rounded-full text-[#14083B] text-[16px]">${interest}</i>
            `
    });
    select(".tags").innerHTML = clutter;
    curr = 2;
})();


let isAnimated = false;

function imgChanger() {
   
    if (!isAnimated) {

        isAnimated = true;

        let tl = gsap.timeline({
            onComplete: function () {
                isAnimated = false;
                let main = select(".main-card");
                let incoming = select(".incoming-card");

                incoming.classList.remove("z-[2]")
                incoming.classList.add("z-[3]");
                incoming.classList.remove(".incoming-card");

                main.classList.remove("z-[3]")
                main.classList.add("z-[2]");
                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                })

                if (curr === users.length) curr = 0;
                select(".main-card img").src = users[curr].displyPicture
                curr++;
                main.classList.remove("main-card");
                main.classList.add("incoming-card");
                incoming.classList.add("main-card");
            }
        });

        tl.to(".main-card", {
            scale: 1.2,
            opacity: 0,
            ease: Circ,
            duration: .9
        }, "a")
        tl.from(".incoming-card", {
            scale: .9,
            opacity: 0,
            ease: Circ,
            duration: 1.1
        }, "a")
    }
};



let denys = select(".deny");
let accepts = select(".accept");


denys.addEventListener("click", function () {
    imgChanger();
})

(function containerCreater(){
    document.querySelector(".element").forEach((elem) =>{
        let div = document.createElement("div");
        div.classList.add(`${elem.classList[1]}container`)
       div.appendChild(elem)
    })

})();