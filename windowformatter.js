const windows = document.querySelectorAll("window");
windows.forEach(x => formatWindow(x));

function formatWindow(item){
    const content = findContent(item);
    const title = formatHeaderItems(findHeaderItems(item));

    console.log(findHeaderItems(item));

    const titleDiv = document.createElement("div");
    const contentDiv = document.createElement("div");

    titleDiv.classList += "header";
    contentDiv.classList += "content";

    title.forEach(x => titleDiv.appendChild(x));
    content.forEach(x => contentDiv.appendChild(x));

    item.appendChild(titleDiv);
    item.appendChild(contentDiv)
}

function formatHeaderItems(headerItems){
    const formatedElements = [];
    for(const item of headerItems)
    {
        var element;
        switch(item.tagName){
            case "TITLE":
                element = document.createElement("div");
                element.innerHTML = item.innerHTML;
                element.classList += "title";
            break;
    
            case "TAB":
                element = document.createElement("a");
                element.innerHTML = item.innerHTML;
                element.href = item.href;
            break;
        }

        item.parentElement.removeChild(item);
        formatedElements.push(element);
    }

    return formatedElements;
}


function findHeaderItems(_window)
{
    const elements = [];
    for(const child of _window.children)
        if(child.tagName === "TITLE" || child.tagName === "TAB") elements.push(child);;
         
    return elements;
}


function findContent(item){
    const content = [];
    for(const child of item.children)
    {
        if(child.tagName !== "TITLE" && child.tagName !== "TAB")
        {
            content.push(child);
        }
    }

    return content;
}