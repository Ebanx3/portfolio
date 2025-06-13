import projects from "./projects.json" with {type :"json"};

const projectsContainer = document.getElementById("projects-container");

const githubSVG = `<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>`

const linkSVG = `<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-external-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg>`

const getProjects = (cant=3) =>{
    for(let i = 0; i<cant && i<projects.length; i++){
        const newProject = document.createElement("article");
        const image = document.createElement("img");
        const details = document.createElement("div");
        const name = document.createElement("h3");
        const description = document.createElement("p");
        const buttonsContainer = document.createElement("div");
        const deployButton = document.createElement("a");
        const repositoryButton = document.createElement("a");

        name.innerText = projects[i].name;
        description.innerText = projects[i].description;
        image.setAttribute("src",projects[i].image);

        deployButton.innerHTML = linkSVG + "Deploy";
        deployButton.setAttribute("href", projects[i].deploy);
        deployButton.setAttribute("target","_blank");
        deployButton.classList.add("text-rose-400","border","border-rose-400","hover:bg-rose-400","hover:text-black")

        repositoryButton.innerHTML = githubSVG + "Repositorio";
        repositoryButton.setAttribute("href",projects[i].repository);
        repositoryButton.setAttribute("target", "_blank");
        repositoryButton.classList.add("text-rose-400","border","border-rose-400","hover:bg-rose-400","hover:text-black")

        newProject.classList.add("project");
        
        newProject.appendChild(image);

        details.appendChild(name);
        details.appendChild(description);

        if(projects[i].deploy)
        buttonsContainer.appendChild(deployButton);
        buttonsContainer.appendChild(repositoryButton);
        details.appendChild(buttonsContainer);

        newProject.appendChild(details);

        projectsContainer.appendChild(newProject);
    }
}

window.getProjects = getProjects;