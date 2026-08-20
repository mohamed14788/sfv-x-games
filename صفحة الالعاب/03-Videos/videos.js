/* =========================================================
   SFV-X Games Videos
   JavaScript
   ========================================================= */


/* =========================================================
   1. CONFIGURATION
   ========================================================= */

const CONFIG = {
    LANGUAGE_KEY: "sfvx_language",
    VIDEOS_PER_PAGE: 6
};


/* =========================================================
   2. TRANSLATIONS - 9 LANGUAGES
   ========================================================= */

const TRANSLATIONS = {

    en: {
        home: "Home",
        games: "Games",
        videos: "Videos",
        library: "My Library",
        discover: "DISCOVER",
        popular: "Most Viewed",
        new: "Latest",
        favorites: "Favorites",
        store: "Store",
        news: "News",
        online: "SFV-X Games",
        searchPlaceholder: "Search for a video...",
        featuredLabel: "SFV-X GAMES",
        heroTitle: "Enjoy the videos",
        heroDescription: "Watch the latest gaming content and discover new moments and experiences.",
        explore: "EXPLORE",
        videoCategories: "Video Categories",
        all: "All",
        freeFire: "Free Fire",
        pubg: "PUBG Mobile",
        minecraft: "Minecraft",
        fortnite: "Fortnite",
        roblox: "Roblox",
        other: "Other Games",
        latestContent: "LATEST CONTENT",
        latestVideos: "Latest Videos",
        results: "videos",
        noResults: "No results found",
        tryDifferent: "Try searching for a different video or category.",
        views: "views",
        closeMenu: "Close menu",
        openMenu: "Open menu",
        videoPlayer: "Video Player",
        publisher: "SFV-X Gaming"
    },

    ar: {
        home: "الرئيسية",
        games: "الألعاب",
        videos: "الفيديوهات",
        library: "مكتبتي",
        discover: "اكتشف",
        popular: "الأكثر مشاهدة",
        new: "الأحدث",
        favorites: "المفضلة",
        store: "المتجر",
        news: "الأخبار",
        online: "SFV-X Games",
        searchPlaceholder: "ابحث عن فيديو...",
        featuredLabel: "SFV-X GAMES",
        heroTitle: "استمتع بالفيديوهات",
        heroDescription: "شاهد أحدث محتوى الألعاب واكتشف لحظات وتجارب جديدة.",
        explore: "استكشف",
        videoCategories: "تصنيفات الفيديوهات",
        all: "الكل",
        freeFire: "Free Fire",
        pubg: "PUBG Mobile",
        minecraft: "Minecraft",
        fortnite: "Fortnite",
        roblox: "Roblox",
        other: "ألعاب أخرى",
        latestContent: "أحدث المحتوى",
        latestVideos: "أحدث الفيديوهات",
        results: "فيديو",
        noResults: "لا توجد نتائج",
        tryDifferent: "جرب البحث عن فيديو أو تصنيف آخر.",
        views: "مشاهدة",
        closeMenu: "إغلاق القائمة",
        openMenu: "فتح القائمة",
        videoPlayer: "مشغل الفيديو",
        publisher: "SFV-X Gaming"
    },

    es: {
        home: "Inicio",
        games: "Juegos",
        videos: "Videos",
        library: "Mi Biblioteca",
        discover: "DESCUBRIR",
        popular: "Más vistos",
        new: "Últimos",
        favorites: "Favoritos",
        store: "Tienda",
        news: "Noticias",
        online: "SFV-X Games",
        searchPlaceholder: "Buscar un video...",
        featuredLabel: "SFV-X GAMES",
        heroTitle: "Disfruta de los videos",
        heroDescription: "Mira el contenido más reciente de juegos y descubre nuevos momentos y experiencias.",
        explore: "EXPLORAR",
        videoCategories: "Categorías de Videos",
        all: "Todos",
        freeFire: "Free Fire",
        pubg: "PUBG Mobile",
        minecraft: "Minecraft",
        fortnite: "Fortnite",
        roblox: "Roblox",
        other: "Otros juegos",
        latestContent: "CONTENIDO RECIENTE",
        latestVideos: "Últimos Videos",
        results: "videos",
        noResults: "No se encontraron resultados",
        tryDifferent: "Intenta buscar otro video o categoría.",
        views: "vistas",
        closeMenu: "Cerrar menú",
        openMenu: "Abrir menú",
        videoPlayer: "Reproductor de video",
        publisher: "SFV-X Gaming"
    },

    fr: {
        home: "Accueil",
        games: "Jeux",
        videos: "Vidéos",
        library: "Ma Bibliothèque",
        discover: "DÉCOUVRIR",
        popular: "Les plus vus",
        new: "Derniers",
        favorites: "Favoris",
        store: "Magasin",
        news: "Actualités",
        online: "SFV-X Games",
        searchPlaceholder: "Rechercher une vidéo...",
        featuredLabel: "SFV-X GAMES",
        heroTitle: "Profitez des vidéos",
        heroDescription: "Regardez le dernier contenu de jeu et découvrez de nouveaux moments et expériences.",
        explore: "EXPLORER",
        videoCategories: "Catégories de Vidéos",
        all: "Tous",
        freeFire: "Free Fire",
        pubg: "PUBG Mobile",
        minecraft: "Minecraft",
        fortnite: "Fortnite",
        roblox: "Roblox",
        other: "Autres jeux",
        latestContent: "CONTENU RÉCENT",
        latestVideos: "Dernières Vidéos",
        results: "vidéos",
        noResults: "Aucun résultat trouvé",
        tryDifferent: "Essayez de chercher une autre vidéo ou catégorie.",
        views: "vues",
        closeMenu: "Fermer le menu",
        openMenu: "Ouvrir le menu",
        videoPlayer: "Lecteur vidéo",
        publisher: "SFV-X Gaming"
    },

    de: {
        home: "Startseite",
        games: "Spiele",
        videos: "Videos",
        library: "Meine Bibliothek",
        discover: "ENTDECKEN",
        popular: "Am meisten gesehen",
        new: "Neueste",
        favorites: "Favoriten",
        store: "Shop",
        news: "Neuigkeiten",
        online: "SFV-X Games",
        searchPlaceholder: "Nach einem Video suchen...",
        featuredLabel: "SFV-X GAMES",
        heroTitle: "Genieße die Videos",
        heroDescription: "Sieh dir die neuesten Gaming-Inhalte an und entdecke neue Momente und Erfahrungen.",
        explore: "ERKUNDEN",
        videoCategories: "Video-Kategorien",
        all: "Alle",
        freeFire: "Free Fire",
        pubg: "PUBG Mobile",
        minecraft: "Minecraft",
        fortnite: "Fortnite",
        roblox: "Roblox",
        other: "Andere Spiele",
        latestContent: "NEUESTE INHALTE",
        latestVideos: "Neueste Videos",
        results: "Videos",
        noResults: "Keine Ergebnisse gefunden",
        tryDifferent: "Versuche ein anderes Video oder eine andere Kategorie zu suchen.",
        views: "Aufrufe",
        closeMenu: "Menü schließen",
        openMenu: "Menü öffnen",
        videoPlayer: "Video-Player",
        publisher: "SFV-X Gaming"
    },

    pt: {
        home: "Início",
        games: "Jogos",
        videos: "Vídeos",
        library: "Minha Biblioteca",
        discover: "DESCUBRIR",
        popular: "Mais vistos",
        new: "Últimos",
        favorites: "Favoritos",
        store: "Loja",
        news: "Notícias",
        online: "SFV-X Games",
        searchPlaceholder: "Pesquisar um vídeo...",
        featuredLabel: "SFV-X GAMES",
        heroTitle: "Aproveite os vídeos",
        heroDescription: "Assista ao conteúdo mais recente de jogos e descubra novos momentos e experiências.",
        explore: "EXPLORAR",
        videoCategories: "Categorias de Vídeos",
        all: "Todos",
        freeFire: "Free Fire",
        pubg: "PUBG Mobile",
        minecraft: "Minecraft",
        fortnite: "Fortnite",
        roblox: "Roblox",
        other: "Outros jogos",
        latestContent: "CONTEÚDO RECENTE",
        latestVideos: "Últimos Vídeos",
        results: "vídeos",
        noResults: "Nenhum resultado encontrado",
        tryDifferent: "Tente pesquisar outro vídeo ou categoria.",
        views: "visualizações",
        closeMenu: "Fechar menu",
        openMenu: "Abrir menu",
        videoPlayer: "Reprodutor de vídeo",
        publisher: "SFV-X Gaming"
    },

    ru: {
        home: "Главная",
        games: "Игры",
        videos: "Видео",
        library: "Моя библиотека",
        discover: "ОТКРЫТЬ",
        popular: "Самые просматриваемые",
        new: "Новые",
        favorites: "Избранное",
        store: "Магазин",
        news: "Новости",
        online: "SFV-X Games",
        searchPlaceholder: "Поиск видео...",
        featuredLabel: "SFV-X GAMES",
        heroTitle: "Наслаждайтесь видео",
        heroDescription: "Смотрите последний игровой контент и открывайте новые моменты и впечатления.",
        explore: "ИССЛЕДОВАТЬ",
        videoCategories: "Категории видео",
        all: "Все",
        freeFire: "Free Fire",
        pubg: "PUBG Mobile",
        minecraft: "Minecraft",
        fortnite: "Fortnite",
        roblox: "Roblox",
        other: "Другие игры",
        latestContent: "НОВЫЙ КОНТЕНТ",
        latestVideos: "Новые видео",
        results: "видео",
        noResults: "Результатов не найдено",
        tryDifferent: "Попробуйте поискать другое видео или категорию.",
        views: "просмотров",
        closeMenu: "Закрыть меню",
        openMenu: "Открыть меню",
        videoPlayer: "Видеоплеер",
        publisher: "SFV-X Gaming"
    },

    tr: {
        home: "Ana Sayfa",
        games: "Oyunlar",
        videos: "Videolar",
        library: "Kitaplığım",
        discover: "KEŞFET",
        popular: "En çok izlenen",
        new: "En yeni",
        favorites: "Favoriler",
        store: "Mağaza",
        news: "Haberler",
        online: "SFV-X Games",
        searchPlaceholder: "Video ara...",
        featuredLabel: "SFV-X GAMES",
        heroTitle: "Videoların keyfini çıkar",
        heroDescription: "En yeni oyun içeriklerini izle ve yeni anlar ve deneyimler keşfet.",
        explore: "KEŞFET",
        videoCategories: "Video Kategorileri",
        all: "Tümü",
        freeFire: "Free Fire",
        pubg: "PUBG Mobile",
        minecraft: "Minecraft",
        fortnite: "Fortnite",
        roblox: "Roblox",
        other: "Diğer oyunlar",
        latestContent: "EN YENİ İÇERİK",
        latestVideos: "En Yeni Videolar",
        results: "video",
        noResults: "Sonuç bulunamadı",
        tryDifferent: "Farklı bir video veya kategori aramayı dene.",
        views: "görüntüleme",
        closeMenu: "Menüyü kapat",
        openMenu: "Menüyü aç",
        videoPlayer: "Video oynatıcı",
        publisher: "SFV-X Gaming"
    },

    zh: {
        home: "首页",
        games: "游戏",
        videos: "视频",
        library: "我的库",
        discover: "发现",
        popular: "最受欢迎",
        new: "最新",
        favorites: "收藏",
        store: "商店",
        news: "新闻",
        online: "SFV-X Games",
        searchPlaceholder: "搜索视频...",
        featuredLabel: "SFV-X GAMES",
        heroTitle: "享受视频",
        heroDescription: "观看最新的游戏内容，发现新的时刻和体验。",
        explore: "探索",
        videoCategories: "视频分类",
        all: "全部",
        freeFire: "Free Fire",
        pubg: "PUBG Mobile",
        minecraft: "Minecraft",
        fortnite: "Fortnite",
        roblox: "Roblox",
        other: "其他游戏",
        latestContent: "最新内容",
        latestVideos: "最新视频",
        results: "视频",
        noResults: "未找到结果",
        tryDifferent: "尝试搜索其他视频或分类。",
        views: "观看",
        closeMenu: "关闭菜单",
        openMenu: "打开菜单",
        videoPlayer: "视频播放器",
        publisher: "SFV-X Gaming"
    }

};


/* =========================================================
   3. LANGUAGE STATE
   ========================================================= */

let currentLanguage = "en";

function getCurrentLanguage() {
    try {
        const saved = localStorage.getItem(CONFIG.LANGUAGE_KEY);
        if (saved && TRANSLATIONS[saved]) {
            return saved;
        }
    } catch (e) {}
    return "en";
}

function t(key) {
    const lang = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    return lang[key] || key;
}


/* =========================================================
   4. قاعدة بيانات الفيديوهات المؤقتة
   ========================================================= */

const videosDatabase = [

    {
        id: 1,
        title: "أفضل لحظات Free Fire",
        category: "free-fire",
        categoryName: "Free Fire",
        duration: "08:42",
        views: "12.4K",
        likes: "1.2K",
        publisher: "SFV-X Gaming",
        icon: "🔥"
    },

    {
        id: 2,
        title: "أقوى مباراة PUBG Mobile",
        category: "pubg",
        categoryName: "PUBG Mobile",
        duration: "14:25",
        views: "8.7K",
        likes: "840",
        publisher: "SFV-X Gaming",
        icon: "🎯"
    },

    {
        id: 3,
        title: "Minecraft Survival Adventure",
        category: "minecraft",
        categoryName: "Minecraft",
        duration: "21:10",
        views: "6.2K",
        likes: "620",
        publisher: "SFV-X Gaming",
        icon: "⛏️"
    },

    {
        id: 4,
        title: "Fortnite Epic Battle",
        category: "fortnite",
        categoryName: "Fortnite",
        duration: "11:38",
        views: "5.9K",
        likes: "510",
        publisher: "SFV-X Gaming",
        icon: "⚡"
    },

    {
        id: 5,
        title: "Roblox New Adventure",
        category: "roblox",
        categoryName: "Roblox",
        duration: "09:15",
        views: "4.8K",
        likes: "430",
        publisher: "SFV-X Gaming",
        icon: "🧱"
    },

    {
        id: 6,
        title: "أجمل لحظات الألعاب",
        category: "other",
        categoryName: "ألعاب أخرى",
        duration: "12:04",
        views: "3.7K",
        likes: "390",
        publisher: "SFV-X Gaming",
        icon: "🎮"
    },

    {
        id: 7,
        title: "Free Fire Ranked Match",
        category: "free-fire",
        categoryName: "Free Fire",
        duration: "16:30",
        views: "3.4K",
        likes: "310",
        publisher: "SFV-X Gaming",
        icon: "🔥"
    },

    {
        id: 8,
        title: "PUBG Mobile Championship",
        category: "pubg",
        categoryName: "PUBG Mobile",
        duration: "18:22",
        views: "2.9K",
        likes: "280",
        publisher: "SFV-X Gaming",
        icon: "🏆"
    }

];


/* =========================================================
   5. العناصر
   ========================================================= */

const videosSidebar =
    document.getElementById("videosSidebar");

const sidebarOverlay =
    document.getElementById("sidebarOverlay");

const menuButton =
    document.getElementById("menuButton");

const sidebarClose =
    document.getElementById("sidebarClose");

const videosSearchInput =
    document.getElementById("videosSearchInput");

const clearSearch =
    document.getElementById("clearSearch");

const videosGrid =
    document.getElementById("videosGrid");

const videosEmpty =
    document.getElementById("videosEmpty");

const resultsCount =
    document.getElementById("resultsCount");

const categoryButtons =
    document.querySelectorAll(".category-button");

const pageButtons =
    document.querySelectorAll(".page-button");


/* =========================================================
   6. حالة الصفحة
   ========================================================= */

let currentCategory = "all";

let currentSearch = "";

let currentPage = 1;


/* =========================================================
   7. تطبيق الترجمة
   ========================================================= */

function applyTranslations() {
    const lang = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

    // جميع العناصر التي تحمل data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (lang[key] !== undefined) {
            el.textContent = lang[key];
        }
    });

    // placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (lang[key] !== undefined) {
            el.placeholder = lang[key];
        }
    });

    // aria-label
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
        const key = el.dataset.i18nAria;
        if (lang[key] !== undefined) {
            el.setAttribute("aria-label", lang[key]);
        }
    });

    // RTL للعربية
    const isRTL = currentLanguage === "ar";
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = currentLanguage;

    // تحديث نتائج البحث
    updateResultsText();
}

function updateResultsText() {
    if (!resultsCount) return;
    const count = parseInt(resultsCount.textContent) || 0;
    const lang = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    // نضيف كلمة "فيديو" حسب اللغة
    // نتركها كما هي لأنها موجودة في HTML
}


/* =========================================================
   8. تغيير اللغة
   ========================================================= */

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLanguage = lang;
    try {
        localStorage.setItem(CONFIG.LANGUAGE_KEY, lang);
    } catch (e) {}
    applyTranslations();
    renderVideos();
}


/* =========================================================
   9. Sidebar
   ========================================================= */

function openSidebar() {
    videosSidebar?.classList.add("open");
    sidebarOverlay?.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeSidebar() {
    videosSidebar?.classList.remove("open");
    sidebarOverlay?.classList.remove("active");
    document.body.style.overflow = "";
}

menuButton?.addEventListener("click", openSidebar);
sidebarClose?.addEventListener("click", closeSidebar);
sidebarOverlay?.addEventListener("click", closeSidebar);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeSidebar();
    }
});


/* =========================================================
   10. إنشاء Video Card
   ========================================================= */

function createVideoCard(video) {
    const card = document.createElement("article");
    card.className = "video-card";
    card.dataset.id = video.id;

    const viewsText = t("views");

    card.innerHTML = `
        <div class="video-thumbnail">
            <span class="thumbnail-icon">${video.icon}</span>
            <div class="thumbnail-overlay"></div>
            <span class="video-duration">${video.duration}</span>
        </div>
        <div class="video-content">
            <h3 class="video-title">${video.title}</h3>
            <div class="video-publisher">
                <span class="publisher-avatar">S</span>
                <span>${video.publisher}</span>
            </div>
            <div class="video-meta">
                <span>${video.views} ${viewsText}</span>
                <div class="video-actions">
                    <span>♡ ${video.likes}</span>
                    <span>💬</span>
                </div>
            </div>
        </div>
    `;

    return card;
}


/* =========================================================
   11. عرض الفيديوهات
   ========================================================= */

function renderVideos() {
    if (!videosGrid) return;

    videosGrid.innerHTML = "";

    const search = currentSearch.trim().toLowerCase();

    const filteredVideos = videosDatabase.filter((video) => {
        const matchesCategory = currentCategory === "all" || video.category === currentCategory;
        const matchesSearch = !search ||
            video.title.toLowerCase().includes(search) ||
            video.categoryName.toLowerCase().includes(search) ||
            video.publisher.toLowerCase().includes(search);
        return matchesCategory && matchesSearch;
    });

    filteredVideos.forEach((video) => {
        videosGrid.appendChild(createVideoCard(video));
    });

    if (resultsCount) {
        resultsCount.textContent = filteredVideos.length;
    }

    if (videosEmpty) {
        videosEmpty.hidden = filteredVideos.length !== 0;
    }
}


/* =========================================================
   12. التصنيفات
   ========================================================= */

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        categoryButtons.forEach((item) => {
            item.classList.remove("active");
        });
        button.classList.add("active");
        currentCategory = button.dataset.category || "all";
        currentPage = 1;
        renderVideos();
    });
});


/* =========================================================
   13. البحث
   ========================================================= */

videosSearchInput?.addEventListener("input", () => {
    currentSearch = videosSearchInput.value;
    if (clearSearch) {
        clearSearch.style.display = currentSearch.length > 0 ? "flex" : "none";
    }
    currentPage = 1;
    renderVideos();
});


/* =========================================================
   14. مسح البحث
   ========================================================= */

clearSearch?.addEventListener("click", () => {
    videosSearchInput.value = "";
    currentSearch = "";
    clearSearch.style.display = "none";
    videosSearchInput.focus();
    renderVideos();
});


/* =========================================================
   15. فتح الفيديو
   ========================================================= */

videosGrid?.addEventListener("click", (event) => {
    const card = event.target.closest(".video-card");
    if (!card) return;
    const videoId = Number(card.dataset.id);
    const video = videosDatabase.find(item => item.id === videoId);
    if (!video) return;
    alert(`▶ ${video.title}\n\n${t("videoPlayer")} - ${t("comingSoon") || "Coming soon"}`);
});


/* =========================================================
   16. Pagination
   ========================================================= */

pageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        pageButtons.forEach((item) => {
            item.classList.remove("active");
        });
        button.classList.add("active");
        currentPage = Number(button.dataset.page);
        document.getElementById("videosSection")?.scrollIntoView({ behavior: "smooth" });
    });
});

document.getElementById("nextPage")?.addEventListener("click", () => {
    currentPage++;
    if (currentPage > 10) currentPage = 1;
    pageButtons.forEach((button) => {
        button.classList.toggle("active", Number(button.dataset.page) === currentPage);
    });
    document.getElementById("videosSection")?.scrollIntoView({ behavior: "smooth" });
});


/* =========================================================
   17. تشغيل الصفحة
   ========================================================= */

// تحميل اللغة المحفوظة
currentLanguage = getCurrentLanguage();

// تطبيق الترجمة
applyTranslations();

// عرض الفيديوهات
renderVideos();

// إضافة نظام تغيير اللغة للـ console للتجربة
console.log("SFV-X Videos loaded. Use setLanguage('en') or setLanguage('ar') to change language.");
window.setLanguage = setLanguage;