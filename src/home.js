import favicon from './assets/favicon.ico';

const loadHome = (() => {
    // Set favicon icon
    const faviconDOM = document.querySelector('link[rel~="icon"]');
    faviconDOM.href = favicon;
    // Basic html setup for toDo notes
    const content = document.getElementById('content');
    content.innerHTML = `
    <div class="header">
        <div></div>
        <h1>toDo notes</h1>
    </div>
    
    <div class="sidebar">
        <div class="home">
            <div class="home-counter"></div>
            <div class="home-icon"></div>
            <div class="home-text"><p>Home</p></div>
        </div>
        <div class="today">
            <div class="today-counter"></div>
            <div class="today-icon"></div>
            <div class="today-text"><p>Today</p></div>
        </div>
        <div class="next-seven-days">
            <div class="next-seven-days-counter"></div>
            <div class="next-seven-days-icon"></div>
            <div class="next-seven-days-text"><p>Next 7 Days</p></div>
        </div>
        <div class="projects">
            <div class="projects-counter"><p></p></div>
            <div class="projects-icon"></div>
            <div class="projects-text"><p>Projects</p></div>
        </div>
        <div class="project-sidebar-list">
            <div class="project-baby">
                <div class="project-counter"><p>7</p></div>
                <div class="project-icon">
                </div><p>Baby</p>
            </div>
            <div class="project-study">
                <div class="project-counter"><p></p></div>
                <div class="project-icon"></div>
                <p>Study</p>
            </div>
            <div class="project-workout">
            <div class="project-counter"></div>
            <div class="project-icon"></div>
            <p>Workout</p>
        </div>
        </div>
        <div class="notes">
            <div class="notes-counter"><p>5</p></div>
            <div class="notes-icon"></div>
            <div class="notes-text"><p>Notes</p></div>
        </div>
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

    return {

    }
})();

export default loadHome;