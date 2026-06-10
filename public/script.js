fetch("/api/projects")
.then(response => response.json())
.then(data => {

    const container =
    document.getElementById("project-container");

    data.forEach(project => {

        container.innerHTML += `

        <div class="card">

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <p>
            <strong>Technology:</strong>
            ${project.technology}
            </p>

            <a href="${project.github_link}"
            target="_blank">

            View Project

            </a>

        </div>

        `;
    });

})
.catch(error => console.log(error));