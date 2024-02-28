/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'new class',
        'name': 'new class.mp4',
        'duration': '0:05',
    },
    {
        'id': 'a2',
        'title': 'Class 1',
        'name': 'Class 1.mp4',
        'duration': '2:45',
    },
    {
        'id': 'a3',
        'title': 'Class 2',
        'name': 'Class 2.mp4',
        'duration': '24:49',
    },

    {
        'id': 'a4',
        'title': 'Class 3',
        'name': 'Class 3.mp4',
        'duration': '3:59',
    },
    {
        'id': 'a5',
        'title': 'Class 4',
        'name': 'Class 4.mp4',
        'duration': '4:25',
    },
    {
        'id': 'a6',
        'title': 'Class 5',
        'name': 'Class 5.mp4',
        'duration': '5:33',
    },
    {
        'id': 'a7',
        'title': 'Class 6',
        'name': 'Class 6.mp4',
        'duration': '0:29',
    },

    {
        'id': 'a8',
        'title': 'Class 7',
        'name': 'Class 7.mp4',
        'duration': '1:12',
    },
    {
        'id': 'a9',
        'title': 'Class 8',
        'name': 'Class 8.mp4',
        'duration': '12:12',
    },
    {
        'id': 'a10',
        'title': 'Class 9',
        'name': 'Class 9.mp4',
        'duration': '12:12',
    }, 
    {
        'id': 'a11',
        'title': 'Class 10',
        'name': 'Class 10.mp4',
        'duration': '1:12',
    },
    {
        'id': 'a12',
        'title': 'Class 11',
        'name': 'Class 11.mp4',
        'duration': '12:12',
    },
    {
        'id': 'a13',
        'title': 'Class 12',
        'name': 'Class 12.mp4',
        'duration': '12:12',
    },
    {
        'id': 'a14',
        'title': 'Class 13',
        'name': 'Class 13.mp4',
        'duration': '1:12',
    },
    {
        'id': 'a15',
        'title': 'Class 14',
        'name': 'Class 14.mp4',
        'duration': '12:12',
    },
    {
        'id': 'a16',
        'title': 'Class 15',
        'name': 'Class 15.mp4',
        'duration': '12:12',
    },    
    
   

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
