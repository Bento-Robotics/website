let full = false;
let full1 = false;
let full2 = false;
let full3 = false;

function unfoldRobotZyklop() {
    if (full === false) {
        document.getElementById('robot-zyklop-unfolded').innerHTML = '<img class="foto" src="assets/images/zyklop.jpg" alt="" width="700" height="450"><p class="description">This is our old robot: Zyklop. This was our first real experience with ROS and industrial standard robots.</p>';
        document.getElementById('robot-zyklop').innerHTML = '';
        full = true;
    } else {
        document.getElementById('robot-zyklop-unfolded').innerHTML = '';
        document.getElementById('robot-zyklop').innerHTML = '<p>The "Zyklop" is our old robot</p><p class="tinted">(click to read more)</p>';
        full = false;
    }
}

function unfoldRobotBento() {
    if (full1 === false) {
        document.getElementById('robot-bento_box-unfolded').innerHTML = '<p class="description">The Bento Box is our newest addition to our robot family. It will be used in Bordeaux. </p><img class="foto" src="assets/images/bento-box_concept.png" alt="bento_bot_chassis" width="700" height="450">';
        document.getElementById('robot-bento_box').innerHTML = '';
        full1 = true;
    } else {
        document.getElementById('robot-bento_box-unfolded').innerHTML = '';
        document.getElementById('robot-bento_box').innerHTML = '<p>The "Bento Box" is our next-gen robot</p><p class="tinted">(click to read more)</p>';
        full1 = false;
    }
}

function unfoldTeam() {
    if (full2 === false) {
        document.getElementById('team-unfolded').innerHTML = '<img class="foto" src="assets/images/the_team.jpg" alt="" width="700" height="450"><p class="description">Our team consists of a total of six members. Together they are able to efficiently work together, since everyone brings different skills to the table. <br> By participating in an international competition we want to show our strengths and obtain more experience.<p>';
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
        document.getElementById('gallery-unfolded').innerHTML = '<video src="https://files.pipeman.org/robot/Roboter-Film-2.mp4" controls width="550" height="300"></video>';
        document.getElementById('gallery').innerHTML = '';
        full3 = true;
    } else {
        document.getElementById('gallery-unfolded').innerHTML = ''
        document.getElementById('gallery').innerHTML = '<p>You can see at what we\'ve been up to here</p><p class="tinted">(click to read more)</p>';
        full3 = false;
    }
}