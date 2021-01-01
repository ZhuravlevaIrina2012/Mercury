import user1 from '../img/user1.png';
import user2 from '../img/user2.png';
import user3 from '../img/user3.png';
import user4 from '../img/user4.png';

const task1 = {
    header: 'New website for Symu.co',
    daysDelays: 5,
    daysLeft: 0
};

const task2 = {
    header: 'Free business PSD Template',
    daysDelays: 2,
    daysLeft: 0
};

const task3 = {
    header: 'New logo for JCD.pl',
    daysDelays: 0,
    daysLeft: 5
};

const task4 = {
    header: 'Free Icons Set vol. 3',
    daysDelays: 0,
    daysLeft: 10
};

export const tasks=[task1, task2, task3, task4];

// Messages

const message1 = {
    name: 'Nina Jones',
    img: user1,
    timeLeft: '5 minutes ago',
    message: 'Hey You! It’s me again :-) I attached new (...)',
    isRead: false
};

const message2 = {
    name: 'Nina Jones',
    img: user1,
    timeLeft: 'About 20 hours ago',
    message: 'Hey! I attached some new PSD files for (...)',
    isRead: false
};

const message3 = {
    name: 'James Smith',
    img: user2,
    timeLeft: '2 days ago',
    message: 'Good morning, you are fired!',
    isRead: true
};

const message4 = {
    name: 'Nina Jones',
    img: user1,
    timeLeft: 'About 2 weeks ago',
    message: 'Hello! Could You bring me coffee please?',
    isRead: true
};

export const messages = [message1, message2, message3, message4];

const activity1 = {
    name: 'Nina Jones',
    img: user1,
    action: 'added a new project',
    title: 'Free UI Kit',
    time: 'Just now'
};

const activity2 = {
    name: 'James Smith',
    img: user2,
    action: 'commented project',
    title: 'Free PSD Template',
    time: '40 minutes ago'
};

const activity3 = {
    name: 'Alex Clooney',
    img: user3,
    action: 'completed task',
    title: 'Symu Website',
    time: '1 hour ago'
};

const activity4 = {
    name: 'Alexandra Spears',
    img: user4,
    action: 'added a new project',
    title: 'Free PSD (...)',
    time: '3 hours ago'
};

export const activities = [activity1, activity2, activity3, activity4];