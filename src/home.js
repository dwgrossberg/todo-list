import favicon from './assets/favicon.ico';

const loadHome = (() => {
    
    // Set favicon icon
    const faviconDOM = document.querySelector('link[rel~="icon"]');
    faviconDOM.href = favicon;
    // Basic html setup for toDo notes
    const content = document.getElementById('content');
    content.innerHTML = `
    <div class="header">
        <div class="header-left">
            <div class="icon"></div>
            <h1>toDo notes</h1>
        </div>
        <div class="header-right">
            <div id="undo"></div>
            <button id="search-button"></button>
            <input type="search" id="search" placeholder="search for a task or project">
        </div>
    </div>
    
    <div class="sidebar">
        <div id="home">
            <div id="home-counter"></div>
            <div class="home-icon"></div>
            <div class="home-text"><p>Home</p></div>
        </div>
        <div id="today">
            <div id="today-counter"></div>
            <div class="today-icon"></div>
            <div class="today-text"><p>Today</p></div>
        </div>
        <div id="next-seven-days">
            <div id="next-seven-days-counter"></div>
            <div class="next-seven-days-icon"></div>
            <div class="next-seven-days-text"><p>Next 7 Days</p></div>
        </div>
        <div id="projects">
            <div id="projects-counter"></div>
            <div class="projects-icon"></div>
            <div class="projects-text"><p>Projects</p></div>
        </div>
        <div id="project-sidebar-list">
            <div id="Project-Baby">
                <div id="project-counter-baby"></div>
                <div class="project-icon">
                </div><p>Baby</p>
                <div class="delete-project"></div>
            </div>
            <div id="Project-Study">
                <div id="project-counter-study"></div>
                <div class="project-icon"></div>
                <p>Study</p>
                <div class="delete-project"></div>
            </div>
            <div id="Project-Workout">
                <div id="project-counter-workout"></div>
                <div class="project-icon"></div>
                <p>Workout</p>
                <div class="delete-project"></div>
            </div>
        </div>
        <span id="add-task">+</span>
    </div>

    <div id="task-content"></div>

    <div class="footer">
        <div class="made-by">
            <a href="https://www.theodinproject.com/" target="_blank">
                <p>The Odin Project</p>
            </a>
            <a href="https://github.com/dwgrossberg">
                <img id="github-icon" src="">
            </a>
            <p>Made by Dan Grossberg</p>
        </div>
    </div>`

    return {}

})();

export default loadHome;