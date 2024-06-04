const aboutUsContent = [
    {
        title:"About Us",
        para:"Welcome to Our Platform 🤝, your go-to destination for personal blogs, unique underrated libraries, and uniquely tested learning  resources. Our meticulously curated blogs offer a wealth of information, handpicked to inspire and educate. The best part is that our insights are tested and used in real use cases. Explore with us and give a hand on this journey.",
        listHeadind:"What we share ?",
        listOne:"Fun Exploraion",
        listTwo:"Useful tools",
        listThree:"Personal learnings",
    }
]

const categoryContent =[
    {
        title:"Choose",
        categoryListOne:"Fun Eploration"
    }
]

const blogPosts = [
    {
        title: "Use Live Server in Sublime",
        listOneDesc: "YES! We need to have Node.js. Go download from here.",
        listOneLinks: "https://nodejs.org/en",
        stepsHeading: "Steps to Follow",
    
        stepOne: "Set Up Your Project Directory",
        descOne: "Create a new directory for your project and navigate to it in your terminal.",
        iframeOne:`<div style="overflow:hidden;margin-left:auto;margin-right:auto;border-radius:10px;width:100%;max-width:449px;position:relative"><div style="width:100%;padding-bottom:41.202672605790646%"></div><iframe width="449" height="185" title="" src="https://snappify.com/embed/5328d898-7d26-40c2-8a7f-b3d4339ef897/78c3211b-83bb-4c3d-85b8-cca477333d4b?responsive=1&b=1" allow="clipboard-write" allowfullscreen="" loading="lazy" style="background:#ffffff00;position:absolute;left:0;top:0;width:100%" frameborder="0"></iframe></div>`,

        stepTwo: "Initialize a New Node.js Project",
        descTwo: "Run the following command to create a package.json file:",
        iframeTwo:`<div style="overflow:hidden;margin-left:auto;margin-right:auto;border-radius:10px;width:100%;max-width:449px;position:relative"><div style="width:100%;padding-bottom:41.202672605790646%"></div><iframe width="449" height="185" title="" src="https://snappify.com/embed/5328d898-7d26-40c2-8a7f-b3d4339ef897/4c23d8f5-4ebd-44ff-a243-8b56c2d84777?responsive=1&b=1" allow="clipboard-write" allowfullscreen="" loading="lazy" style="background:#ffffff00;position:absolute;left:0;top:0;width:100%" frameborder="0"></iframe></div>`,
        stepThree: "Install BrowserSync",
        descThree: "Install BrowserSync globally by running:",
        iframeThree:`<div style="overflow:hidden;margin-left:auto;margin-right:auto;border-radius:10px;width:100%;max-width:449px;position:relative"><div style="width:100%;padding-bottom:41.202672605790646%"></div><iframe width="449" height="185" title="" src="https://snappify.com/embed/5328d898-7d26-40c2-8a7f-b3d4339ef897/bea169fc-8e0b-4d65-907b-03621abeab50?responsive=1&b=1" allow="clipboard-write" allowfullscreen="" loading="lazy" style="background:#ffffff00;position:absolute;left:0;top:0;width:100%" frameborder="0"></iframe></div>`,
        stepFour: "Run BrowserSync",
        descFour: "Navigate to your project directory in the terminal using: \ncd /path/to/your/project\n\nStart BrowserSync with the following command:",
        iframeFour:`<div style="overflow:hidden;margin-left:auto;margin-right:auto;border-radius:10px;width:100%;max-width:449px;position:relative"><div style="width:100%;padding-bottom:41.202672605790646%"></div><iframe width="449" height="185" title="" src="https://snappify.com/embed/5328d898-7d26-40c2-8a7f-b3d4339ef897/78c3211b-83bb-4c3d-85b8-cca477333d4b?responsive=1&b=0" allow="clipboard-write" allowfullscreen="" loading="lazy" style="background:#ffffff00;position:absolute;left:0;top:0;width:100%" frameborder="0"></iframe></div>`,

        stepFive: "Enable Auto-Save in Sublime Text",
        descFive: "Follow the given steps - ",
        imageFive:`<img  style="border-radius:5px;width:60vw; " src="./assets/imageFiveOne.png">`,
        imageSix:`<img width="500" style="border-radius:5px;width:60vw;" src="./assets/imageFiveTwo.png">`,
    }
    
];




function generateAboutUs (about){
    return `
        <div class="top">
            <div class="progress"></div>
            <h1>${about.title}</h1>
            <div class="cross">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg></div>
        </div>
        <div class="text">
            <p style="color: black;">
                ${about.para}<br> <br>

                <h2 style="color: black;">${about.listHeadind}</h2>
                <ol>
                    <li>${about.listOne}</li>
                    <li>${about.listTwo}</li>
                    <li>${about.listThree}</li>
                </ol>
            </p>
        </div>
    `;
}

function renderAboutUs(abouts){
    const aboutConatiner = document.querySelector(".about-us-overlay");
    aboutConatiner.innerHTML = abouts.map(generateAboutUs).join("");
}
renderAboutUs(aboutUsContent)



function generateCategory (category){
    return `
    <div class="top">
    <div class="progress"></div>
    <h1> ${category.title} </h1>
    <div class="cross">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
    </div>
</div>
<div class="text">
    <div class="opt-elem">
        <ul>
            <li>
                <a href="funExplore.html">${category.categoryListOne}</a>
            </li>
            
        </ul>
    </div>
</div>
    <center style="position:absolute; bottom:10%; left:45%; color:black;"> more to come </center>
    `;
}
function renderCategory(categories){
    const categoryConatiner = document.querySelector(".category-overlay");
    categoryConatiner.innerHTML = categories.map(generateCategory).join("");
}
renderCategory(categoryContent)

function generateSublimeOverlay(sublime) {
    return `
        <div class="top" >
        <div class="progress-container">
        <svg class="progress-circle" width="40" height="40">
            <circle cx="20" cy="20" r="15"></circle>
            <circle class="progress-bar" cx="20" cy="20" r="15"></circle>
        </svg>
        </div>
            <h1>${sublime.title}</h1>
            <div class="cross">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                </svg>
            </div>
        </div>
        <div class="text">
            <p>
                ${sublime.listOneDesc} <a href="${sublime.listOneLinks}">Link</a><br><br>

                <h1>${sublime.stepsHeading}</h1>
                <ol>
                    <li>${sublime.stepOne}</li>
                    <p>${sublime.descOne}</p>
                    <!-- Add iframe and image placeholders here -->
                    ${sublime.iframeOne}
                    <li>${sublime.stepTwo}</li>
                    <p>${sublime.descTwo}</p>
                    <!-- Add iframe and image placeholders here -->
                    ${sublime.iframeTwo}
                    <li>${sublime.stepThree}</li>
                    <p>${sublime.descThree}</p>
                    <!-- Add iframe and image placeholders here -->
                    ${sublime.iframeThree}
                    <li>${sublime.stepFour}</li>
                    <p>${sublime.descFour}</p>
                    <!-- Add iframe and image placeholders here -->
                    ${sublime.iframeFour}
                    <li>${sublime.stepFive}</li>
                    <p>${sublime.descFive}</p>
                    <!-- Add iframe and image placeholders here -->
                    ${sublime.imageFive}
                    ${sublime.imageSix}

                </ol>
            </p>
        </div>
    `;
}

function renderSublime(sublimes){
    const sublimeContainer = document.querySelector(".sublime-overlay");
    sublimeContainer.innerHTML = sublimes.map(generateSublimeOverlay).join("");
}
renderSublime(blogPosts)