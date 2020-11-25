import React from "react";
import "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
    return (
        <div class="cards">
        <div class="card" width= '18rem;'>
        <img src="https://knuts839.github.io/Portfolio/IAmOnABoat.jpeg" class="card-img-top" alt="not rendering"/>
        <div class="card-body">
            <h5 class="card-title">Linkedin Profile</h5>
            <a href="https://www.linkedin.com/in/ravi-knutson-5530431b7">LInkedin Profile Page</a>
            <p class="card-text">I am persuing my doctorate in human resource development and am currently in a coding bootcamp.</p>
        </div>
    </div>
    <div class="card" width= '18rem'>
        <img src="https://knuts839.github.io/Portfolio/GithubProfile.png" class="card-img-top" alt="not rendering"/>
        <div class="card-body">
            <h5 class="card-title">Github Profile</h5>
            <a href="https://github.com/Knuts839">Github Profile Page</a>
            <p class="card-text">I am currently on my way to becoming a fullstack developer.</p>
        </div>
        <div class="card" width= '18rem'>
            <img src="https://knuts839.github.io/Portfolio/RaviKnutsonResume.png" class="card-img-top" alt="not rendering"/>
            <div class="card-body">
                <h5 class="card-title">Resume</h5>
                <a href="https://app.luminpdf.com/viewer/5fa47b91c68ba10012a92398">Resume</a>
                <p class="card-text"></p>
            </div>
        </div>
        <div class="card" width= '18rem'>
            <img src="https://knuts839.github.io/Portfolio/Penrad.jpg" class="card-img-top" alt=" not rendering"/>
            <div class="card-body">
                <h5 class="card-title">Work</h5>
                <p class="card-text">I was a summer intern at Penrad Technologies inc. My responsibilities were to create the medical definitions used in the initial breast cancer ballot that was voted on by radiologists throughout the country.</p>
                <p class="card-text">I did some light programing and code testing as well.</p>
            </div>
        </div>
        <div class="card" width= '18rem'>
            <img src="https://knuts839.github.io/Portfolio/GromitBrewingAssistant.jpg" class="card-img-top" alt="not rendering"/>
            <div class="card-body">
                <h5 class="card-title">Hobby</h5>
                <p class="card-text">My assistant Gromit and I brew craft beer together. Gromit is somewhat of a cargo cultist but he is very efficient and eager to learn.</p>
            </div>
        </div>
        <div class="card" width= '18rem'>
            <img src="https://knuts839.github.io/Portfolio/CommunityService.jpg" class="card-img-top" alt="not rendering"/>
            <div class="card-body">
                <h5 class="card-title">Community Service</h5>
                <p class="card-text">I volenteered at St. Therese nursing home.</p>
                <p class="card-text">I volenteered in their palliative care unit and frequently played cribbage with many of the residents.</p>
            </div>
        </div>
        <div class="card" width= '18rem'>
            <img src="https://knuts839.github.io/Portfolio/LakeAtSunset.jpg" class="card-img-top" alt="not rendering"/>
            <div class="card-body">
                <h5 class="card-title">Leisure Time</h5>
                <p class="card-text">One of my favorite summertime activities is boating.</p>
            </div>
        </div>
        <div class="card"width= '18rem'>
            <img src="https://knuts839.github.io/Portfolio/CodingQuiz.jpg" class="card-img-top" alt="not rendering"/>
            <div class="card-body">
                <h5 class="card-title">Coding Quiz Repo</h5>
                <a href="https://knuts839.github.io/CodingQuizRepo/">Coding Quiz Page</a>
                <p class="card-text">I enjoyed the coding quiz project.</p>
            </div>
        </div>
        <div class="card" width= '18rem'>
            <img src="https://knuts839.github.io/Portfolio/PasswordGenerator.jpg" class="card-img-top" alt="not rendering"/>
            <div class="card-body">
                <h5 class="card-title">PasswordGenerator</h5>
                <a href="https://knuts839.github.io/PasswordGenerator/">Password Generator Page</a>
                <p class="card-text">This is my top bootcamp project sor far.</p>
            </div>

        </div>
        </div>
        </div>

    )}
    export default Portfolio