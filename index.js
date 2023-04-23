let full = false;
let full1 = false;
let full2 = false;
let full3 = false;

function unfoldRobotZyklop() {
    if (full === false) {
        document.getElementById('robot-zyklop-unfolded').innerHTML = '<img class="foto" src="assets/images/zyklop.jpg" alt="" width="700" height="450"><p class="description">This is Zyklop, our initial robot. It was our first real experience with ROS and professional robotics.<br><br>Zyklop is great at navigating rough terrain but has a deficit of sensors.</p>';
        document.getElementById('robot-zyklop').innerHTML = '';
        full = true;
    } else {
        document.getElementById('robot-zyklop-unfolded').innerHTML = '';
        document.getElementById('robot-zyklop').innerHTML = '<p>Zyklop is our first robot</p><p class="tinted">(click to read more)</p>';
        full = false;
    }
}

function unfoldRobotBento() {
    if (full1 === false) {
        document.getElementById('robot-bento_box-unfolded').innerHTML = '<p class="description">Box is the newest addition to our robot family. It will be used in Bordeaux.<br><br>As you can see, Box is still in the design phase, but preparations (and purchases) are being made to begin assembly.<br><br>We chose the name mostly so that we can call it the bento \'Box\', but also because we presume it\'ll end up looking like a box, since this happened with Zyklop.</p><img class="foto" src="assets/images/bento-box_concept.png" alt="bento_bot_chassis" width="700" height="450">';
        document.getElementById('robot-bento_box').innerHTML = '';
        full1 = true;
    } else {
        document.getElementById('robot-bento_box-unfolded').innerHTML = '';
        document.getElementById('robot-bento_box').innerHTML = '<p>Bento "Box" is our next-gen robot</p><p class="tinted">(click to read more)</p>';
        full1 = false;
    }
}

function unfoldTeam() {
    if (full2 === false) {
        document.getElementById('team-unfolded').innerHTML = '<img class="foto" src="assets/images/the_team.jpg" alt="" width="700" height="450"><p class="description">Our team consists of a total of six members. Together we are capable of great things since everyone adds their unique skill set to the team.<br><br>By participating in an international competition we strive to gain more experience and show our strengths.<p>';
        document.getElementById('team').innerHTML = '';
        full2 = true;
    } else {
        document.getElementById('team-unfolded').innerHTML = ''
        document.getElementById('team').innerHTML = '<p>Hey look, it\'s us!</p><p class="tinted">(click to read more)</p>';
        full2 = false;
    }
}

function unfoldGallery() {
    if (full3 === false) {
        document.getElementById('gallery-unfolded').innerHTML = '<div><video src="https://files.pipeman.org/robot/Roboter-Film-2.mp4" controls width="550" height="300"></video></div><div><img src="assets/images/mermaid-diagram-2023-03-08-150002.svg" alt="" height="900"></div>';
        document.getElementById('gallery').innerHTML = '';
        full3 = true;
    } else {
        document.getElementById('gallery-unfolded').innerHTML = ''
        document.getElementById('gallery').innerHTML = '<p>See at what we\'ve been up to</p><p class="tinted">(click to read more)</p>';
        full3 = false;
    }
}