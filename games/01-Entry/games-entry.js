/* =========================================================
   SFV-X GAMES - Entry Page
   JavaScript
   ========================================================= */


/* =========================================================
   1. CONFIGURATION
   ========================================================= */

const CONFIG = {
    LANGUAGE_KEY: "sfvx_language"
};


/* =========================================================
   2. TRANSLATIONS - 9 LANGUAGES
   ========================================================= */

const TRANSLATIONS = {

    en: {
        welcome: "WELCOME TO",
        title: "SFV-X GAMES",
        description: "Play, discover, and enjoy the world of games",
        playNow: "Play Now",
        playDesc: "Discover games and play instantly",
        videos: "Enjoy Videos",
        videosDesc: "Watch the latest gaming content",
        comingSoon: "Coming Soon",
        closeMenu: "Close menu",
        openMenu: "Open menu",
        changeLanguage: "Change language"
    },

    ar: {
        welcome: "WELCOME TO",
        title: "SFV-X GAMES",
        description: "العب، اكتشف، واستمتع بعالم الألعاب",
        playNow: "العب الآن",
        playDesc: "اكتشف الألعاب والعب مباشرة",
        videos: "استمتع بالفيديوهات",
        videosDesc: "شاهد أحدث محتوى الألعاب",
        comingSoon: "قيد التطوير",
        closeMenu: "إغلاق القائمة",
        openMenu: "فتح القائمة",
        changeLanguage: "تغيير اللغة"
    },

    es: {
        welcome: "BIENVENIDO A",
        title: "SFV-X GAMES",
        description: "Juega, descubre y disfruta del mundo de los juegos",
        playNow: "Jugar Ahora",
        playDesc: "Descubre juegos y juega al instante",
        videos: "Disfruta de Videos",
        videosDesc: "Mira el contenido más reciente de juegos",
        comingSoon: "Próximamente",
        closeMenu: "Cerrar menú",
        openMenu: "Abrir menú",
        changeLanguage: "Cambiar idioma"
    },

    fr: {
        welcome: "BIENVENUE À",
        title: "SFV-X GAMES",
        description: "Jouez, découvrez et profitez du monde des jeux",
        playNow: "Jouer Maintenant",
        playDesc: "Découvrez des jeux et jouez instantanément",
        videos: "Profitez des Vidéos",
        videosDesc: "Regardez le dernier contenu de jeu",
        comingSoon: "Bientôt",
        closeMenu: "Fermer le menu",
        openMenu: "Ouvrir le menu",
        changeLanguage: "Changer de langue"
    },

    de: {
        welcome: "WILLKOMMEN BEI",
        title: "SFV-X GAMES",
        description: "Spiele, entdecke und genieße die Welt der Spiele",
        playNow: "Jetzt Spielen",
        playDesc: "Entdecke Spiele und spiele sofort",
        videos: "Genieße Videos",
        videosDesc: "Sieh dir die neuesten Gaming-Inhalte an",
        comingSoon: "Demnächst",
        closeMenu: "Menü schließen",
        openMenu: "Menü öffnen",
        changeLanguage: "Sprache ändern"
    },

    pt: {
        welcome: "BEM-VINDO AO",
        title: "SFV-X GAMES",
        description: "Jogue, descubra e aproveite o mundo dos jogos",
        playNow: "Jogar Agora",
        playDesc: "Descubra jogos e jogue instantaneamente",
        videos: "Aproveite os Vídeos",
        videosDesc: "Assista ao conteúdo mais recente de jogos",
        comingSoon: "Em Breve",
        closeMenu: "Fechar menu",
        openMenu: "Abrir menu",
        changeLanguage: "Alterar idioma"
    },

    ru: {
        welcome: "ДОБРО ПОЖАЛОВАТЬ В",
        title: "SFV-X GAMES",
        description: "Играйте, открывайте и наслаждайтесь миром игр",
        playNow: "Играть Сейчас",
        playDesc: "Откройте игры и играйте мгновенно",
        videos: "Наслаждайтесь Видео",
        videosDesc: "Смотрите последний игровой контент",
        comingSoon: "Скоро",
        closeMenu: "Закрыть меню",
        openMenu: "Открыть меню",
        changeLanguage: "Изменить язык"
    },

    tr: {
        welcome: "HOŞ GELDİNİZ",
        title: "SFV-X GAMES",
        description: "Oyna, keşfet ve oyun dünyasının tadını çıkar",
        playNow: "Şimdi Oyna",
        playDesc: "Oyunları keşfet ve anında oyna",
        videos: "Videoların Keyfini Çıkar",
        videosDesc: "En yeni oyun içeriklerini izle",
        comingSoon: "Yakında",
        closeMenu: "Menüyü kapat",
        openMenu: "Menüyü aç",
        changeLanguage: "Dili değiştir"
    },

    zh: {
        welcome: "欢迎来到",
        title: "SFV-X GAMES",
        description: "玩游戏，发现并享受游戏世界",
        playNow: "立即玩",
        playDesc: "发现游戏并立即游玩",
        videos: "享受视频",
        videosDesc: "观看最新的游戏内容",
        comingSoon: "即将推出",
        closeMenu: "关闭菜单",
        openMenu: "打开菜单",
        changeLanguage: "更换语言"
    }

};


/* =========================================================
   3. LANGUAGE STATE (Updated for Auto-Detection)
   ========================================================= */

let currentLanguage = "en";

function getCurrentLanguage() {
    try {
        // 1. هل المستخدم اختار لغة قبل كده وحفظناها في الـ LocalStorage؟
        const saved = localStorage.getItem(CONFIG.LANGUAGE_KEY);
        if (saved && TRANSLATIONS[saved]) {
            return saved;
        }
    } catch (e) {}

    // 2. لو مفيش حفظ سابق، نقرا لغة المتصفح/الجهاز تلقائياً
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0]; // تحويل مثل 'ar-EG' إلى 'ar'

    // 3. لو لغة المتصفح مدعومة في القاموس عندك، نستخدمها
    if (TRANSLATIONS[langCode]) {
        return langCode;
    }

    // 4. لو اللغة مش مدعومة خالص (مثل شخص عربي وموبايله إنجليزي أو أي لغة أخرى)، نخليها إنجليزي افتراضي
    return "en";
}

function t(key) {
    const lang = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    return lang[key] || key;
}


/* =========================================================
   4. DOM ELEMENTS
   ========================================================= */

const playButton = document.getElementById("playNowButton");
const videosButton = document.getElementById("watchVideosButton");

const languageButton = document.getElementById("languageButton");
const languageDropdown = document.getElementById("languageDropdown");
const languageCurrent = document.getElementById("languageCurrent");
const languageOptions = document.querySelectorAll(".language-option");

// جميع العناصر التي تحمل data-i18n
const i18nElements = document.querySelectorAll("[data-i18n]");


/* =========================================================
   5. APPLY TRANSLATIONS
   ========================================================= */

function applyTranslations() {
    const lang = TRANSLATIONS[currentLanguage] || TRANSLATIONS.ar;

    // تحديث كل العناصر التي تحمل data-i18n
    i18nElements.forEach(el => {
        const key = el.dataset.i18n;
        if (lang[key] !== undefined) {
            el.textContent = lang[key];
        }
    });

    // تحديث اسم اللغة الحالية
    if (languageCurrent) {
        const langNames = {
            en: "EN",
            ar: "AR",
            es: "ES",
            fr: "FR",
            de: "DE",
            pt: "PT",
            ru: "RU",
            tr: "TR",
            zh: "中文"
        };
        languageCurrent.textContent = langNames[currentLanguage] || currentLanguage.toUpperCase();
    }

    // تحديث الحالة النشطة في القائمة
    languageOptions.forEach(opt => {
        opt.classList.toggle("active", opt.dataset.language === currentLanguage);
    });

    // RTL للعربية
    const isRTL = currentLanguage === "ar";
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = currentLanguage;
}


/* =========================================================
   6. SET LANGUAGE
   ========================================================= */

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLanguage = lang;
    try {
        localStorage.setItem(CONFIG.LANGUAGE_KEY, lang);
    } catch (e) {}
    applyTranslations();
    closeLanguageDropdown();
}


/* =========================================================
   7. LANGUAGE DROPDOWN
   ========================================================= */

function toggleLanguageDropdown() {
    if (languageDropdown.hidden) {
        openLanguageDropdown();
    } else {
        closeLanguageDropdown();
    }
}

function openLanguageDropdown() {
    languageDropdown.hidden = false;
    languageButton?.setAttribute("aria-expanded", "true");
    languageButton?.classList.add("open");
}

function closeLanguageDropdown() {
    languageDropdown.hidden = true;
    languageButton?.setAttribute("aria-expanded", "false");
    languageButton?.classList.remove("open");
}


/* =========================================================
   8. BUTTON ACTIONS
   ========================================================= */

// زر اللعب الآن - يودي لصفحة الألعاب
playButton?.addEventListener("click", function(e) {
    const target = this.dataset.target;
    if (target) {
        window.location.href = target;
    } else {
        showComingSoon();
    }
});

// زر الفيديوهات - يظهر رسالة "قيد التطوير"
videosButton?.addEventListener("click", function(e) {
    showComingSoon();
});

// زر اللغة
languageButton?.addEventListener("click", function(e) {
    e.stopPropagation();
    toggleLanguageDropdown();
});

// اختيار لغة
languageOptions.forEach(option => {
    option.addEventListener("click", function() {
        const lang = this.dataset.language;
        setLanguage(lang);
    });
});

// إغلاق القائمة عند الضغط خارجها
document.addEventListener("click", function(e) {
    const selector = document.getElementById("languageSelector");
    if (selector && !selector.contains(e.target)) {
        closeLanguageDropdown();
    }
});


/* =========================================================
   9. COMING SOON MESSAGE
   ========================================================= */

function showComingSoon() {
    const message = t("comingSoon");
    alert(`⏳ ${message}`);
}


/* =========================================================
   10. KEYBOARD SHORTCUTS
   ========================================================= */

document.addEventListener("keydown", function(e) {
    // Alt + 1 = Play Now
    if (e.altKey && e.key === "1") {
        e.preventDefault();
        playButton?.click();
    }
    // Alt + 2 = Videos
    if (e.altKey && e.key === "2") {
        e.preventDefault();
        videosButton?.click();
    }
    // Escape = close language dropdown
    if (e.key === "Escape") {
        closeLanguageDropdown();
    }
});


/* =========================================================
   11. INIT
   ========================================================= */

currentLanguage = getCurrentLanguage();
applyTranslations();

console.log("======================================");
console.log("SFV-X Games Entry loaded successfully!");
console.log(`Language: ${currentLanguage}`);
console.log("Use setLanguage('en') or setLanguage('ar') to change language.");
console.log("======================================");

// جعل الدالة متاحة في الـ Console للتجربة
window.setLanguage = setLanguage;
