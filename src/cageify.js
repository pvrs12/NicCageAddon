const INTERVAL_KEY = "INTERVAL_KEY";
// default to 1s refresh window
const DEFAULT_INTERVAL = "1000";

const NICS = [
    "https://images.wired.it/gallery/131607/Big/37493d96-2b60-4164-b730-cc0717c36f18.jpeg", // supes
    "https://i0.wp.com/www.cinezapping.com/wp-content/uploads/2011/01/nicolas-cage_06.jpg", // moonstruck
    "https://3.bp.blogspot.com/-JQqV60o8x0A/Wzexrjx2UKI/AAAAAAAABE4/EwrkZFh0wQ4-LXassGyOZsiWFDgEY9brACLcBGAs/w1200-h630-p-k-no-nu/Nic-Cage.jpg", // mandy
    "https://live.staticflickr.com/3242/5818160547_9d1bb744d4.jpg", // hotty
    "https://live.staticflickr.com/1461/25524427682_c3757f7989_z.jpg", // freedom
    "https://c4.wallpaperflare.com/wallpaper/400/158/569/nicolas-cage-actor-man-face-wallpaper-preview.jpg", // pensive and blond
    "https://4.bp.blogspot.com/_N91xwP-lKvw/TFjSKU-ETZI/AAAAAAAABlc/-mAlrcPNZeI/s400/nickcagevampkiss.jpg", // vamp kiss
    "https://i1.wp.com/fortworthreport.org/wp-content/uploads/2021/07/PIG001.jpeg", // j-pig
    "https://upload.wikimedia.org/wikipedia/commons/c/c0/Nicolas_Cage_Deauville_2013.jpg", // suave
    "https://2.bp.blogspot.com/-FG5qhZYlA9c/UNcj6FBBEgI/AAAAAAAACGE/LYOKb7XmUkU/s1600/Nicolas-Cage.jpg", // black tie
    "https://www.abruzzo24ore.tv/img/3bcda8f2aed2c8f1fdea1c020dadcf39/w/1024/h/576/scale/160579.jpg", // goat tea
    "https://3.bp.blogspot.com/--eU2d6DyULI/UOlsIric3dI/AAAAAAAALHE/8jxR5F7erbc/s1600/Nicolas-Cage-nicolas-cage-26969948-1989-1300.jpg", // the thinker
    "https://live.staticflickr.com/1/131983774_7eb586770f_b.jpg", // waxy
    "https://images.uncyc.org/pt/1/11/Nicolascage_(14).jpg", // a present... for me?
    "https://1.bp.blogspot.com/-uFkL5_XciyU/UOlsvnMBx4I/AAAAAAAALHU/vnRj0ehmGYg/s1600/tumblr_l31p8iOeC61qa06e2o1_500.jpg", // my child's name is a state
    "https://1.bp.blogspot.com/-nXhiQU_2DtA/Uaxya_RUJRI/AAAAAAAAGaU/M6fNyE12zeM/s1600/Stringy+Mullet.jpg", // mullets are back; trust me
    "https://www.internerdz.com.br/wp-content/uploads/2019/09/Nicolas-Cage-backgrounds-ultra-hd.png", // cowboy cage
    "https://c4.wallpaperflare.com/wallpaper/46/357/191/movie-face-off-nicolas-cage-wallpaper-thumb.jpg", // bless up
    "https://i0.wp.com/www.cinezapping.com/wp-content/uploads/2010/08/Nicolas-Cage-ne-Lapprendista-stregone.jpg", // a magician through and through
    "https://www.talkingdrugs.org/sites/default/files/images/cage-wicker-man.jpg", // hello bees!
    "https://c4.wallpaperflare.com/wallpaper/325/762/565/nicolas-cage-wallpaper-preview.jpg", // viKING
    "https://multiglom.files.wordpress.com/2015/01/wildcage01.jpg", // let's get crazy
    "https://4.bp.blogspot.com/_N91xwP-lKvw/TFjR4YQU1tI/AAAAAAAABk8/0VBlXRL3VBk/s1600/the+rock.jpg", // the real "the rock" were the nics you made along the way
    "https://i0.wp.com/www.cinezapping.com/wp-content/uploads/2010/08/Nicolas-Cage-in-Ghost-Rider.jpg", // 👻🏍🔥
    "https://cdn.pastemagazine.com/www/system/images/photo_albums/nicolas-cage/large/02-cage-valleygirl.jpg", // valleygirl
    "https://ll-media.tmz.com/2016/12/08/fast-times-memba-05-480w.jpg", // fast times for nic
    "https://external-preview.redd.it/ACjjH16xtR9P1GBvLx-ykZdZ1W5RA8CSDInnSbBgwWk.jpg?auto=webp&s=ca4bd365e5dfebd9c8c3b7d7be0dc782702862e1", // yelling good
    "https://www.slashfilm.com/img/gallery/nicolas-cage-couldnt-land-a-david-lynch-cameo-for-the-unbearable-weight-of-massive-talent/the-nicolas-cagedavid-lynch-reunion-we-deserved-1650027163.jpg", // fist bump
    "https://i1.wp.com/film-book.com/wp-content/uploads/2017/04/nicolas-cage-windtalkers-01-600x350.jpg", // what does the wind say?
    "https://multiglom.files.wordpress.com/2015/01/the-rock-1996.jpg", // the guitar is only a guitar
    "https://musingsfromus.com/wp-content/uploads/2012/09/Gone-In-60-Seconds-2000-ScreenShot-088.jpg", // 60 seems a bit long at this point...
    "https://assets.acasatv.ro/assets/acasatv/2010/05/07/image_galleries/2130/vampirii-fac-valva-la-hollywood-galerie-foto_12.jpg", // TEETH
    "https://multiglom.files.wordpress.com/2015/01/birdy.png", // i'm sad to see you hurt
    "https://musingsfromus.com/wp-content/uploads/2012/07/National-Treasure-2004-ScreenShot-121.jpg", // you are a national treasure
    "https://3.bp.blogspot.com/-rng145WCKPQ/T6mi8M8Ho5I/AAAAAAAAAEc/CaZfH8dVLGA/s1600/WeatherMan06.jpg", // shot through the heart and you're to blame
    "https://de.web.img3.acsta.net/r_1280_720/medias/nmedia/18/35/51/53/18458294.jpg", // same
    "https://www.episodi.fi/wp-content/uploads/nicolas-cage-world-trade-center.jpg", // all nics are blessed
    "https://1.bp.blogspot.com/-WZRyOwsfE-8/U1bVZbeMK9I/AAAAAAAAAMY/JEe1Ie4G5fE/s1600/nicolas-cage-fu-manchu-grindhouse.jpg", // this may be questionable
    "https://multiglom.files.wordpress.com/2015/01/badlieu02.jpg", // bad cop
    "https://2.bp.blogspot.com/-1LyVzMxNm7Q/W83_4TYmZKI/AAAAAAAAAIY/sjkzpcFyoFYVJ_ousNs2u5AGETVXhGLdwCLcBGAs/s1600/Nic%252BCage.png", // angerry
    "https://www.yam-mag.com/wp-content/uploads/2012/05/nicholas-cage-kick-ass.jpg", // makeup is cool
]

function getNic() {
    let nicNum = Math.floor(Math.random()*NICS.length);
    return NICS[nicNum];
}

function replaceImages() {
    for(let i = 0; i < document.images.length; ++i) {
        let img = document.images[i];

        if(img.classList.contains('nicced')){
            continue;
        }
        img.classList.add('nicced');

        // attempt to retain the original dimensions
        img.style.width = img.width + 'px';
        img.style.height = img.height + 'px';

        // nic-em
        let loc = getNic()
        img.src = loc;
        if(img.srcset){
            img.srcset = loc;
        }
    };
}

// setup defaults
function get_interval_or_default(item) {
    if (!item || item === {} || !(INTERVAL_KEY in item)) {
        browser.storage.local.set({
            INTERVAL_KEY: DEFAULT_INTERVAL
        });
        return DEFAULT_INTERVAL;
    } else {
        return item[INTERVAL_KEY];
    }
}

// start up the extension
browser.storage.local.get().then(
    (item) => {
        let interval = get_interval_or_default(item);
        window.setInterval(replaceImages, interval);
    },
    (_) => {
        window.setInterval(replaceImages, DEFAULT_INTERVAL);
    }
);
