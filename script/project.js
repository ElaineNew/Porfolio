const projectArrary = [
    {
        "title": "Purrfect",
        "image": "../images/purrfect.png",
        "github":"https://github.com/ElaineNew/Purrfect",
        "live":"https://purrfect-pet-shelter.onrender.com",
        "description": "A website for pet adoption.",
        "technologies": "HTML/CSS, Javascript, Bootstrap, Node.js, ejs, MongoDB.",
        "date":"July 31, 2023"
    },
    {
        "title": "ChatPDF",
        "image": "../images/chatpdf.png",
        "github":"https://github.com/ElaineNew/chatpdf",
        "live":"https://chatpdf-elaine.vercel.app/",
        "description": "AI chat application with PDF integration",
        "technologies": "Next.js, OpenAI API, AWS S3, LangChain, Pinecone, Clerk.",
        "date":"Nov 24, 2023"
    },
    {
        "title": "MusicHub ",
        "image": "../images/musichub.png",
        "github":"https://github.com/ElaineNew/Muischub",
        "live":"https://playlist-b118d.web.app/alllists",
        "description": "A website for user to share playlist and upload songs.",
        "technologies": "Vue.js, Firebase, JavaScript, HTML/CSS.",
        "date":"Nov 10, 2023"
    },

    {
        "title": "Coderfly ",
        "image": "../images/coderfly.png",
        "github":"https://github.com/ElaineNew/Assignment2",
        "live":"https://github.com/ElaineNew/Assignment2",
        "description": "A website for user to share playlist and upload songs.",
        "technologies": "Vue.js, Firebase, JavaScript, HTML/CSS.",
        "date":"Nov 10, 2023"
    }

]



const btnPrevious = document.querySelector("#btn_previous");
const btnNext = document.querySelector("#btn_next");
const title = document.querySelector("#project_title");
const image = document.querySelector("#project_img")
const github = document.querySelector("#github_link");
const live = document.querySelector("#live_link");
const description = document.querySelector("#project_description");
const technologies = document.querySelector("#project_technology");
const date = document.querySelector("#project_date");



let index = 0
btnNext.addEventListener('click', ()=>{
    console.log("clicked")

    if(index < projectArrary.length-1){
        index++
    }
    else{
        index = 0
    }
    title.textContent=projectArrary[index].title
    image.src = projectArrary[index].image
    github.href = projectArrary[index].github
    live.href = projectArrary[index].live
    description.textContent = projectArrary[index].description
    technologies.textContent = projectArrary[index].technologies
    date.textContent = projectArrary[index].date

})

btnPrevious.addEventListener('click', ()=>{
    console.log("clicked")
    if(index > 0){
        index--
    }
    else{
        index = projectArrary.length-1
    }

    title.textContent=projectArrary[index].title
    image.src = projectArrary[index].image
    github.href = projectArrary[index].github
    live.href = projectArrary[index].live
    description.textContent = projectArrary[index].description
    technologies.textContent = projectArrary[index].technologies
    date.textContent = projectArrary[index].date
})