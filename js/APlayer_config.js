const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.5,
    lrcType: 3,
    mutex: true,
    listFolded: false,

    audio: [{
            name: '说书人',
            artist: '- 暗杠,寅子',
            lrc:'',
            cover: 'https://nbviewer.jupyter.org/github/Littlecookie-li/Littlecookie-li.github.io/blob/master/photos/index/bigfish.jpg',
            url: 'http://music.163.com/song/media/outer/url?id=1303019637.mp3'
                  },
        {
            name: 'Rodeo',
            artist: ' - Robbie Nova',
            lrc: '',
            cover: 'https://nbviewer.jupyter.org/github/Littlecookie-li/Littlecookie-li.github.io/blob/master/photos/index/bigfish.jpg',
            url: 'http://music.163.com/song/media/outer/url?id=28312036.mp3'
                  }
        ]
});