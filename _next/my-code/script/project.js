async function loads_post() {
    let count = 0;
    let my_project_container = document.createElement("div");
    my_project_container.classList.add("my-project-container");
    const main_element = document.getElementById("all-content");
    
    try {
        const response = await fetch("/Data/project.json");
        const response_json = await response.json();
        
        response_json.data.forEach((category, index) => {
            const element_div = CreateElementPost(category);
            my_project_container.appendChild(element_div);
            count++;
            if (count === 2 || index === response_json.data.length - 1) {
                main_element.appendChild(my_project_container);
                if (index !== response_json.data.length - 1) {
                    my_project_container = document.createElement("div");
                    my_project_container.classList.add("my-project-container");
                    count = 0;
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}

function CreateElementPost(category) {
    const post = document.createElement("div");
    post.classList.add("post");

    const name = document.createElement("h3");
    name.id = "project-name";
    name.textContent = category.name;

    const date = document.createElement("p");
    date.id = "project-date";
    date.textContent = category.date;

    const link = document.createElement("pre");
    link.id = "project-url";
    link.textContent = category.url;

    const command = document.createElement("pre");
    command.id = "project-command";
    command.textContent = category.command;

    post.appendChild(name);
    post.appendChild(date);
    post.appendChild(link);
    post.appendChild(command);

    return post;
}

loads_post();
