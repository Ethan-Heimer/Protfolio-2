const objects = document.querySelectorAll("object");
objects.forEach(x => formatObjects(x));

function formatObjects(object)
{
    const div = document.createElement("div");
    div.innerHTML = object.innerHTML;

    div.style.position = "absolute";
    console.log(object.getAttribute("data-xpos"));
    div.style.left = `${object.getAttribute("data-xpos")}`;
    div.style.top = `${object.getAttribute("data-ypos")}`;

    div.classList = object.classList;

    object.parentElement.replaceChild(div, object);
}