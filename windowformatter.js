class windowElement
{
    constructor(_windowElement)
    {
        this.windowElement = _windowElement; 
        this.tabs = this.findTabs();

        const header = document.createElement("div");
        header.classList.add("header");

        const contentArea = document.createElement("div");
        contentArea.classList.add("content-area");

        for(const tab of this.tabs)
        {
            header.appendChild(tab.getTitleElement());
            contentArea.appendChild(tab.getContentElement());
        }

        this.selectTab(this.tabs[0]);

        _windowElement.appendChild(header);
        _windowElement.appendChild(contentArea);
        
    }

    #selectedTab = null;
    selectTab(tab)
    {
        console.log("select");
        if(this.#selectedTab)
        {
            this.#selectedTab.onUnselect();
        }

        this.#selectedTab = tab;
        this.#selectedTab.onSelect();
    }

    findTabs()
    {
        const tabs = [];
        for(const child of this.windowElement.children)
        {
            if(child.tagName == "TAB")
                tabs.push(new tab(this, child));
        }
        return tabs; 
    }
}

class tab
{
    constructor(parentWindow, element)
    {
        this.parentWindow = parentWindow;
        this.element = element;

        this.title = element.dataset.title;
        this.content = element.children;

        this.titleElement = this.#createTitleElement();
        this.contentElement = this.#createContentElement();

        this.titleElement.addEventListener("click",() => this.parentWindow.selectTab(this));

    }

    getTitleElement()
    {
        return this.titleElement;
    }

    getContentElement()
    {
        return this.contentElement;
    }

    onSelect()
    {
        this.getContentElement().classList.add("selected");
        this.getTitleElement().classList.add("selected");
    }

    onUnselect()
    {
        this.getContentElement().classList.remove("selected");
        this.getTitleElement().classList.remove("selected");
    }

    #createTitleElement()
    {
        const titleDiv = document.createElement("div");
        titleDiv.innerText = this.title;
        titleDiv.classList.add("title");

        return titleDiv;
    }

    #createContentElement()
    {
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content");

        const content = [...this.content];
        for(var i = 0; i < content.length; i++)
        {
            contentDiv.appendChild(content[i]);
        }

        return contentDiv;
    }
}

const windows = document.getElementsByTagName("window");
for(var i = 0; i < windows.length; i++)
    new windowElement(windows[i]);
