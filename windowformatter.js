
const windows = document.getElementsByTagName("window");
for(var i = 0; i < windows.length; i++)
    formatWindow(windows[i]);

function formatWindow(item){
    const tabs = findTabs(item);
    const headerDiv = document.createElement("div");
    const contentDiv = document.createElement("div");

    headerDiv.classList += "header";
    contentDiv.classList += "content-area";

    tabs.forEach(x => formatTab(contentDiv, headerDiv, x));

    item.appendChild(headerDiv);
    item.appendChild(contentDiv);
}

function formatTab(content, header, tab)
{
    const titleName = getTabHeader(tab);
    
    const titleDiv = document.createElement("div");
    const contentDiv = document.createElement("div");

    contentDiv.classList += "content";

    const cont = getTabContent(tab);
    for(var i = 0; i < cont.length; i++)
    {
        contentDiv.appendChild(cont[i]);
    }

    titleDiv.classList += "title";
    titleDiv.innerText = titleName;

    titleDiv.addEventListener("click", () => selectTab(titleDiv, contentDiv));

    header.appendChild(titleDiv);
    content.appendChild(contentDiv);

    tab.parentElement.removeChild(tab);
    
}

function findTabs(item)
{
    console.log(item);
    const tabs = [];
    for(const child of item.children)
        if(child.tagName === "TAB") tabs.push(child);
         
    return tabs;
}

function getTabHeader(tab){
   return tab.dataset.title;
}

function getTabContent(tab){
    return [...tab.children];
}

var currentTab = null;
function selectTab(tabHeader, tabContent)
{   
    if(currentTab !== null)
    {
        currentTab.tabHeader.classList.remove("selected");
        currentTab.tabContent.classList.remove("selected");
    }

    currentTab = {tabHeader, tabContent};
  
    tabHeader.classList.add("selected");
    tabContent.classList.add("selected");
    
}