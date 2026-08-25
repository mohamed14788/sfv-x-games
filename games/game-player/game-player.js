/* =========================================================
   SFV-X GAMES
   GAME PLAYER - UPDATED WITH ADS & MOBILE FULLSCREEN & MULTI-LANG
   JavaScript
   ========================================================= */

"use strict";


/* =========================================================
   1. CONFIG
   ========================================================= */

const CONFIG = {

    GAMES_DATABASE_URL:
        "../02-Games/games.json",

    FAVORITES_KEY:
        "sfvx_games_favorites",

    LANGUAGE_KEY:
        "sfvx_language",

    GAMES_PAGE_URL:
        "../02-Games/games.html",

    AD_CONFIG: {
        enabled: true, // تفعيل أو إيقاف حاوية الإعلانات
        bannerSlotId: "sfvx-ad-slot"
    }

};


/* =========================================================
   2. TRANSLATIONS
   ========================================================= */

const TRANSLATIONS = {

    en: {

        game: "Game",

        play: "Play",

        favorite: "Favorite",

        favoriteActive: "Favorited",

        back: "Back",

        fullscreen: "Fullscreen",

        exitFullscreen: "Exit Fullscreen",

        relatedGames: "Related Games",

        unavailable: "Game Unavailable",

        unavailableDescription:
            "This game does not have a valid HTML5 game URL.",

        sfvxPlayer:
            "SFV-X GAME PLAYER",

        noGameId:
            "No game ID was provided. Please open a game from the Games page.",

        databaseError:
            "Could not load the games database. Make sure games.json exists inside the 02-Games folder and the website is running through a local web server.",

        gameNotFound:
            "The requested game could not be found.",

        loading:
            "Loading...",

        error:
            "Error",

        categories:
            "Categories",

        action:
            "Action",

        adventure:
            "Adventure",

        racing:
            "Racing",

        sports:
            "Sports",

        strategy:
            "Strategy",

        arcade:
            "Arcade",

        puzzle:
            "Puzzle",

        simulation:
            "Simulation",

        shooting:
            "Shooting",

        platform:
            "Platform",

        casual:
            "Casual",

        fighting:
            "Fighting",

        racingGames:
            "Racing",

        survival:
            "Survival",

        multiplayer:
            "Multiplayer",

        home: "Home",

        games: "Games",

        videos: "Videos",

        library: "My Library",

        discover: "Discover",

        popular: "Popular",

        newGames: "New Games",

        favorites: "Favorites",

        store: "Store",

        news: "News",

        online: "Online",

        searchPlaceholder: "Search for a game...",

        featuredLabel: "SFV-X Featured",

        heroTitle: "The world of games",

        heroTitleStrong: "starts here",

        heroDescription: "Discover a new collection of games and get ready for your next gaming experience.",

        playNow: "Play Now",

        details: "Details",

        randomGame: "Random",

        gameCategories: "Game Categories",

        all: "All",

        mostPopular: "Most Popular",

        newGamesTitle: "New Games",

        viewAll: "View All",

        noGamesFound: "No games found",

        tryDifferentGame: "Try searching for a different game or browse our categories.",

        showAllGames: "Show All Games",

        totalGames: "Total Games",

        recent: "Recent",

        random: "Random Game",

        leaderboard: "Leaderboard",

        achievements: "Achievements",

        homeHeading: "MAIN",

        closeMenu: "Close menu",

        openMenu: "Open menu",

        changeLanguage: "Change language",

        clearSearch: "Clear search",

        notifications: "Notifications",

        errorTitle: "Error",

        loadError: "Failed to load data",

        noFavorites: "No favorites yet",

        profile: "Profile"

    },

    ar: {

        game: "لعبة",

        play: "شغل",

        favorite: "المفضلة",

        favoriteActive: "في المفضلة",

        back: "رجوع",

        fullscreen: "ملء الشاشة",

        exitFullscreen: "الخروج من ملء الشاشة",

        relatedGames: "ألعاب مشابهة",

        unavailable: "اللعبة غير متاحة",

        unavailableDescription:
            "هذه اللعبة لا تحتوي على رابط HTML5 صالح للتشغيل.",

        sfvxPlayer:
            "مشغل ألعاب SFV-X",

        noGameId:
            "لم يتم تحديد رقم اللعبة. افتح اللعبة من صفحة الألعاب.",

        databaseError:
            "تعذر تحميل قاعدة بيانات الألعاب. تأكد من وجود games.json داخل مجلد 02-Games وتشغيل الموقع من خلال خادم محلي.",

        gameNotFound:
            "لم يتم العثور على اللعبة المطلوبة.",

        loading:
            "جارٍ التحميل...",

        error:
            "خطأ",

        categories:
            "التصنيفات",

        action:
            "أكشن",

        adventure:
            "مغامرات",

        racing:
            "سباقات",

        sports:
            "رياضة",

        strategy:
            "استراتيجية",

        arcade:
            "أركيد",

        puzzle:
            "ألغاز",

        simulation:
            "محاكاة",

        shooting:
            "تصويب",

        platform:
            "منصات",

        casual:
            "كاجوال",

        fighting:
            "قتال",

        racingGames:
            "سباقات",

        survival:
            "بقاء",

        multiplayer:
            "متعدد اللاعبين",

        home: "الرئيسية",

        games: "الألعاب",

        videos: "الفيديوهات",

        library: "مكتبتي",

        discover: "استكشف",

        popular: "الأكثر شعبية",

        newGames: "ألعاب جديدة",

        favorites: "المفضلة",

        store: "المتجر",

        news: "الأخبار",

        online: "متصل",

        searchPlaceholder: "ابحث عن لعبة...",

        featuredLabel: "مميز من SFV-X",

        heroTitle: "عالم الألعاب",

        heroTitleStrong: "يبدأ هنا",

        heroDescription: "اكتشف مجموعة جديدة من الألعاب واستعد لتجربة ألعابك القادمة.",

        playNow: "شغل الآن",

        details: "التفاصيل",

        randomGame: "عشوائي",

        gameCategories: "تصنيفات الألعاب",

        all: "الكل",

        mostPopular: "الأكثر شعبية",

        newGamesTitle: "ألعاب جديدة",

        viewAll: "عرض الكل",

        noGamesFound: "لا توجد ألعاب",

        tryDifferentGame: "حاول البحث عن لعبة مختلفة أو تصفح التصنيفات.",

        showAllGames: "عرض كل الألعاب",

        totalGames: "إجمالي الألعاب",

        recent: "المشاهدة مؤخراً",

        random: "لعبة عشوائية",

        leaderboard: "لوحة المتصدرين",

        achievements: "الإنجازات",

        homeHeading: "الرئيسية",

        closeMenu: "إغلاق القائمة",

        openMenu: "فتح القائمة",

        changeLanguage: "تغيير اللغة",

        clearSearch: "مسح البحث",

        notifications: "الإشعارات",

        errorTitle: "خطأ",

        loadError: "فشل تحميل البيانات",

        noFavorites: "لا توجد مفضلات بعد",

        profile: "الملف الشخصي"

    },

    es: {

        game: "Juego",

        play: "Jugar",

        favorite: "Favorito",

        favoriteActive: "Favoritado",

        back: "Volver",

        fullscreen: "Pantalla completa",

        exitFullscreen: "Salir de pantalla completa",

        relatedGames: "Juegos relacionados",

        unavailable: "Juego no disponible",

        unavailableDescription:
            "Este juego no tiene una URL HTML5 válida.",

        sfvxPlayer:
            "REPRODUCTOR DE JUEGOS SFV-X",

        noGameId:
            "No se proporcionó un ID de juego. Abre un juego desde la página de juegos.",

        databaseError:
            "No se pudo cargar la base de datos de juegos.",

        gameNotFound:
            "No se encontró el juego solicitado.",

        loading:
            "Cargando...",

        error:
            "Error",

        categories:
            "Categorías",

        action:
            "Acción",

        adventure:
            "Aventura",

        racing:
            "Carreras",

        sports:
            "Deportes",

        strategy:
            "Estrategia",

        arcade:
            "Arcade",

        puzzle:
            "Rompecabezas",

        simulation:
            "Simulación",

        shooting:
            "Disparos",

        platform:
            "Plataformas",

        casual:
            "Casual",

        fighting:
            "Lucha",

        racingGames:
            "Carreras",

        survival:
            "Supervivencia",

        multiplayer:
            "Multijugador",

        home: "Inicio",

        games: "Juegos",

        videos: "Videos",

        library: "Mi Biblioteca",

        discover: "Descubrir",

        popular: "Populares",

        newGames: "Nuevos Juegos",

        favorites: "Favoritos",

        store: "Tienda",

        news: "Noticias",

        online: "En línea",

        searchPlaceholder: "Buscar un juego...",

        featuredLabel: "Destacado SFV-X",

        heroTitle: "El mundo de los juegos",

        heroTitleStrong: "comienza aquí",

        heroDescription: "Descubre una nueva colección de juegos y prepárate para tu próxima experiencia de juego.",

        playNow: "Jugar Ahora",

        details: "Detalles",

        randomGame: "Aleatorio",

        gameCategories: "Categorías de Juegos",

        all: "Todos",

        mostPopular: "Más Populares",

        newGamesTitle: "Nuevos Juegos",

        viewAll: "Ver Todos",

        noGamesFound: "No se encontraron juegos",

        tryDifferentGame: "Intenta buscar un juego diferente o explora nuestras categorías.",

        showAllGames: "Mostrar Todos los Juegos",

        totalGames: "Total de Juegos",

        recent: "Recientes",

        random: "Juego Aleatorio",

        leaderboard: "Tabla de Clasificación",

        achievements: "Logros",

        homeHeading: "PRINCIPAL",

        closeMenu: "Cerrar menú",

        openMenu: "Abrir menú",

        changeLanguage: "Cambiar idioma",

        clearSearch: "Limpiar búsqueda",

        notifications: "Notificaciones",

        errorTitle: "Error",

        loadError: "Error al cargar datos",

        noFavorites: "Sin favoritos aún",

        profile: "Perfil"

    },

    fr: {

        game: "Jeu",

        play: "Jouer",

        favorite: "Favori",

        favoriteActive: "Favorisé",

        back: "Retour",

        fullscreen: "Plein écran",

        exitFullscreen: "Quitter le plein écran",

        relatedGames: "Jeux similaires",

        unavailable: "Jeu indisponible",

        unavailableDescription:
            "Ce jeu ne possède pas d'URL HTML5 valide.",

        sfvxPlayer:
            "LECTEUR DE JEUX SFV-X",

        noGameId:
            "Aucun ID de jeu n'a été fourni.",

        databaseError:
            "Impossible de charger la base de données des jeux.",

        gameNotFound:
            "Jeu demandé introuvable.",

        loading:
            "Chargement...",

        error:
            "Erreur",

        categories:
            "Catégories",

        action:
            "Action",

        adventure:
            "Aventure",

        racing:
            "Course",

        sports:
            "Sport",

        strategy:
            "Stratégie",

        arcade:
            "Arcade",

        puzzle:
            "Puzzle",

        simulation:
            "Simulation",

        shooting:
            "Tir",

        platform:
            "Plateforme",

        casual:
            "Casual",

        fighting:
            "Combat",

        racingGames:
            "Course",

        survival:
            "Survie",

        multiplayer:
            "Multijoueur",

        home: "Accueil",

        games: "Jeux",

        videos: "Vidéos",

        library: "Ma Bibliothèque",

        discover: "Découvrir",

        popular: "Populaires",

        newGames: "Nouveaux Jeux",

        favorites: "Favoris",

        store: "Magasin",

        news: "Actualités",

        online: "En ligne",

        searchPlaceholder: "Rechercher un jeu...",

        featuredLabel: "À la Une SFV-X",

        heroTitle: "Le monde des jeux",

        heroTitleStrong: "commence ici",

        heroDescription: "Découvrez une nouvelle collection de jeux et préparez-vous pour votre prochaine expérience de jeu.",

        playNow: "Jouer Maintenant",

        details: "Détails",

        randomGame: "Aléatoire",

        gameCategories: "Catégories de Jeux",

        all: "Tous",

        mostPopular: "Les Plus Populaires",

        newGamesTitle: "Nouveaux Jeux",

        viewAll: "Voir Tout",

        noGamesFound: "Aucun jeu trouvé",

        tryDifferentGame: "Essayez de rechercher un jeu différent ou parcourez nos catégories.",

        showAllGames: "Afficher Tous les Jeux",

        totalGames: "Total des Jeux",

        recent: "Récents",

        random: "Jeu Aléatoire",

        leaderboard: "Classement",

        achievements: "Succès",

        homeHeading: "PRINCIPAL",

        closeMenu: "Fermer le menu",

        openMenu: "Ouvrir le menu",

        changeLanguage: "Changer de langue",

        clearSearch: "Effacer la recherche",

        notifications: "Notifications",

        errorTitle: "Erreur",

        loadError: "Échec du chargement",

        noFavorites: "Aucun favori",

        profile: "Profil"

    },

    de: {

        game: "Spiel",

        play: "Spielen",

        favorite: "Favorit",

        favoriteActive: "Favorisiert",

        back: "Zurück",

        fullscreen: "Vollbild",

        exitFullscreen: "Vollbild verlassen",

        relatedGames: "Ähnliche Spiele",

        unavailable: "Spiel nicht verfügbar",

        unavailableDescription:
            "Dieses Spiel besitzt keine gültige HTML5-URL.",

        sfvxPlayer:
            "SFV-X SPIELER",

        noGameId:
            "Keine Spiel-ID angegeben.",

        databaseError:
            "Spieldatenbank konnte nicht geladen werden.",

        gameNotFound:
            "Das angeforderte Spiel wurde nicht gefunden.",

        loading:
            "Wird geladen...",

        error:
            "Fehler",

        categories:
            "Kategorien",

        action:
            "Action",

        adventure:
            "Abenteuer",

        racing:
            "Rennen",

        sports:
            "Sport",

        strategy:
            "Strategie",

        arcade:
            "Arcade",

        puzzle:
            "Puzzle",

        simulation:
            "Simulation",

        shooting:
            "Schießen",

        platform:
            "Plattform",

        casual:
            "Casual",

        fighting:
            "Kampf",

        racingGames:
            "Rennen",

        survival:
            "Überleben",

        multiplayer:
            "Mehrspieler",

        home: "Startseite",

        games: "Spiele",

        videos: "Videos",

        library: "Meine Bibliothek",

        discover: "Entdecken",

        popular: "Beliebt",

        newGames: "Neue Spiele",

        favorites: "Favoriten",

        store: "Shop",

        news: "Neuigkeiten",

        online: "Online",

        searchPlaceholder: "Nach einem Spiel suchen...",

        featuredLabel: "SFV-X Empfehlung",

        heroTitle: "Die Welt der Spiele",

        heroTitleStrong: "beginnt hier",

        heroDescription: "Entdecke eine neue Sammlung von Spielen und bereite dich auf dein nächstes Spielerlebnis vor.",

        playNow: "Jetzt Spielen",

        details: "Details",

        randomGame: "Zufall",

        gameCategories: "Spielkategorien",

        all: "Alle",

        mostPopular: "Am Beliebtesten",

        newGamesTitle: "Neue Spiele",

        viewAll: "Alle Anzeigen",

        noGamesFound: "Keine Spiele gefunden",

        tryDifferentGame: "Versuche ein anderes Spiel zu suchen oder durchstöbere unsere Kategorien.",

        showAllGames: "Alle Spiele Anzeigen",

        totalGames: "Spiele insgesamt",

        recent: "Kürzlich",

        random: "Zufälliges Spiel",

        leaderboard: "Bestenliste",

        achievements: "Errungenschaften",

        homeHeading: "HAUPT",

        closeMenu: "Menü schließen",

        openMenu: "Menü öffnen",

        changeLanguage: "Sprache ändern",

        clearSearch: "Suche löschen",

        notifications: "Benachrichtigungen",

        errorTitle: "Fehler",

        loadError: "Laden fehlgeschlagen",

        noFavorites: "Keine Favoriten",

        profile: "Profil"

    },

    pt: {

        game: "Jogo",

        play: "Jogar",

        favorite: "Favorito",

        favoriteActive: "Favoritado",

        back: "Voltar",

        fullscreen: "Tela cheia",

        exitFullscreen: "Sair da tela cheia",

        relatedGames: "Jogos relacionados",

        unavailable: "Jogo indisponível",

        unavailableDescription:
            "Este jogo não possui uma URL HTML5 válida.",

        sfvxPlayer:
            "PLAYER DE JOGOS SFV-X",

        noGameId:
            "Nenhum ID de jogo foi fornecido.",

        databaseError:
            "Não foi possível carregar o banco de dados dos jogos.",

        gameNotFound:
            "O jogo solicitado não foi encontrado.",

        loading:
            "Carregando...",

        error:
            "Erro",

        categories:
            "Categorias",

        action:
            "Ação",

        adventure:
            "Aventura",

        racing:
            "Corrida",

        sports:
            "Esportes",

        strategy:
            "Estratégia",

        arcade:
            "Arcade",

        puzzle:
            "Quebra-cabeça",

        simulation:
            "Simulação",

        shooting:
            "Tiro",

        platform:
            "Plataforma",

        casual:
            "Casual",

        fighting:
            "Luta",

        racingGames:
            "Corrida",

        survival:
            "Sobrevivência",

        multiplayer:
            "Multijogador",

        home: "Início",

        games: "Jogos",

        videos: "Vídeos",

        library: "Minha Biblioteca",

        discover: "Descobrir",

        popular: "Populares",

        newGames: "Novos Jogos",

        favorites: "Favoritos",

        store: "Loja",

        news: "Notícias",

        online: "Online",

        searchPlaceholder: "Pesquisar um jogo...",

        featuredLabel: "Destaque SFV-X",

        heroTitle: "O mundo dos jogos",

        heroTitleStrong: "começa aqui",

        heroDescription: "Descubra uma nova coleção de jogos e prepare-se para sua próxima experiência de jogo.",

        playNow: "Jogar Agora",

        details: "Detalhes",

        randomGame: "Aleatório",

        gameCategories: "Categorias de Jogos",

        all: "Todos",

        mostPopular: "Mais Populares",

        newGamesTitle: "Novos Jogos",

        viewAll: "Ver Todos",

        noGamesFound: "Nenhum jogo encontrado",

        tryDifferentGame: "Tente pesquisar um jogo diferente ou navegue por nossas categorias.",

        showAllGames: "Mostrar Todos os Jogos",

        totalGames: "Total de Jogos",

        recent: "Recentes",

        random: "Jogo Aleatório",

        leaderboard: "Classificação",

        achievements: "Conquistas",

        homeHeading: "PRINCIPAL",

        closeMenu: "Fechar menu",

        openMenu: "Abrir menu",

        changeLanguage: "Alterar idioma",

        clearSearch: "Limpar pesquisa",

        notifications: "Notificações",

        errorTitle: "Erro",

        loadError: "Falha ao carregar",

        noFavorites: "Sem favoritos",

        profile: "Perfil"

    },

    ru: {

        game: "Игра",

        play: "Играть",

        favorite: "Избранное",

        favoriteActive: "В избранном",

        back: "Назад",

        fullscreen: "Полный экран",

        exitFullscreen: "Выйти из полного экрана",

        relatedGames: "Похожие игры",

        unavailable: "Игра недоступна",

        unavailableDescription:
            "У этой игры нет действительного HTML5 URL.",

        sfvxPlayer:
            "ИГРОВОЙ ПЛЕЕР SFV-X",

        noGameId:
            "ID игры не указан.",

        databaseError:
            "Не удалось загрузить базу данных игр.",

        gameNotFound:
            "Запрошенная игра не найдена.",

        loading:
            "Загрузка...",

        error:
            "Ошибка",

        categories:
            "Категории",

        action:
            "Экшн",

        adventure:
            "Приключения",

        racing:
            "Гонки",

        sports:
            "Спорт",

        strategy:
            "Стратегия",

        arcade:
            "Аркада",

        puzzle:
            "Головоломка",

        simulation:
            "Симуляция",

        shooting:
            "Стрельба",

        platform:
            "Платформер",

        casual:
            "Казуальные",

        fighting:
            "Бои",

        racingGames:
            "Гонки",

        survival:
            "Выживание",

        multiplayer:
            "Мультиплеер",

        home: "Главная",

        games: "Игры",

        videos: "Видео",

        library: "Моя библиотека",

        discover: "Открыть",

        popular: "Популярные",

        newGames: "Новые игры",

        favorites: "Избранное",

        store: "Магазин",

        news: "Новости",

        online: "Онлайн",

        searchPlaceholder: "Поиск игры...",

        featuredLabel: "Рекомендуем SFV-X",

        heroTitle: "Мир игр",

        heroTitleStrong: "начинается здесь",

        heroDescription: "Откройте новую коллекцию игр и приготовьтесь к следующему игровому опыту.",

        playNow: "Играть Сейчас",

        details: "Подробнее",

        randomGame: "Случайная",

        gameCategories: "Категории игр",

        all: "Все",

        mostPopular: "Самые популярные",

        newGamesTitle: "Новые игры",

        viewAll: "Показать все",

        noGamesFound: "Игры не найдены",

        tryDifferentGame: "Попробуйте поискать другую игру или просмотрите наши категории.",

        showAllGames: "Показать все игры",

        totalGames: "Всего игр",

        recent: "Недавние",

        random: "Случайная игра",

        leaderboard: "Таблица лидеров",

        achievements: "Достижения",

        homeHeading: "ГЛАВНОЕ",

        closeMenu: "Закрыть меню",

        openMenu: "Открыть меню",

        changeLanguage: "Изменить язык",

        clearSearch: "Очистить поиск",

        notifications: "Уведомления",

        errorTitle: "Ошибка",

        loadError: "Ошибка загрузки",

        noFavorites: "Нет избранного",

        profile: "Профиль"

    },

    tr: {

        game: "Oyun",

        play: "Oyna",

        favorite: "Favori",

        favoriteActive: "Favorilerde",

        back: "Geri",

        fullscreen: "Tam Ekran",

        exitFullscreen: "Tam Ekrandan Çık",

        relatedGames: "Benzer Oyunlar",

        unavailable: "Oyun Kullanılamıyor",

        unavailableDescription:
            "Bu oyunun geçerli bir HTML5 URL'si yok.",

        sfvxPlayer:
            "SFV-X OYUN OYNATICI",

        noGameId:
            "Oyun kimliği belirtilmedi.",

        databaseError:
            "Oyun veritabanı yüklenemedi.",

        gameNotFound:
            "İstenen oyun bulunamadı.",

        loading:
            "Yükleniyor...",

        error:
            "Hata",

        categories:
            "Kategoriler",

        action:
            "Aksiyon",

        adventure:
            "Macera",

        racing:
            "Yarış",

        sports:
            "Spor",

        strategy:
            "Strateji",

        arcade:
            "Arcade",

        puzzle:
            "Bulmaca",

        simulation:
            "Simülasyon",

        shooting:
            "Nişancı",

        platform:
            "Platform",

        casual:
            "Casual",

        fighting:
            "Dövüş",

        racingGames:
            "Yarış",

        survival:
            "Hayatta Kalma",

        multiplayer:
            "Çok Oyunculu",

        home: "Ana Sayfa",

        games: "Oyunlar",

        videos: "Videolar",

        library: "Kitaplığım",

        discover: "Keşfet",

        popular: "Popüler",

        newGames: "Yeni Oyunlar",

        favorites: "Favoriler",

        store: "Mağaza",

        news: "Haberler",

        online: "Çevrimiçi",

        searchPlaceholder: "Oyun ara...",

        featuredLabel: "SFV-X Öne Çıkan",

        heroTitle: "Oyun dünyası",

        heroTitleStrong: "burada başlıyor",

        heroDescription: "Yeni bir oyun koleksiyonu keşfedin و bir sonraki oyun deneyiminize hazırlanın.",

        playNow: "Şimdi Oyna",

        details: "Detaylar",

        randomGame: "Rastgele",

        gameCategories: "Oyun Kategorileri",

        all: "Tümü",

        mostPopular: "En Popüler",

        newGamesTitle: "Yeni Oyunlar",

        viewAll: "Tümünü Gör",

        noGamesFound: "Oyun bulunamadı",

        tryDifferentGame: "Farklı bir oyun aramayı deneyin veya kategorilerimize göz atın.",

        showAllGames: "Tüm Oyunları Göster",

        totalGames: "Toplam Oyun",

        recent: "Son",

        random: "Rastgele Oyun",

        leaderboard: "Sıralama",

        achievements: "Başarımlar",

        homeHeading: "ANA",

        closeMenu: "Menüyü kapat",

        openMenu: "Menüyü aç",

        changeLanguage: "Dili değiştir",

        clearSearch: "Aramayı temizle",

        notifications: "Bildirimler",

        errorTitle: "Hata",

        loadError: "Yüklenemedi",

        noFavorites: "Favori yok",

        profile: "Profil"

    },

    zh: {

        game: "游戏",

        play: "开始游戏",

        favorite: "收藏",

        favoriteActive: "已收藏",

        back: "返回",

        fullscreen: "全屏",

        exitFullscreen: "退出全屏",

        relatedGames: "相关游戏",

        unavailable: "游戏不可用",

        unavailableDescription:
            "此游戏没有有效的 HTML5 游戏地址。",

        sfvxPlayer:
            "SFV-X 游戏播放器",

        noGameId:
            "未提供游戏 ID。",

        databaseError:
            "无法加载游戏数据库。",

        gameNotFound:
            "找不到请求的游戏。",

        loading:
            "加载中...",

        error:
            "错误",

        categories:
            "分类",

        action:
            "动作",

        adventure:
            "冒险",

        racing:
            "赛车",

        sports:
            "体育",

        strategy:
            "策略",

        arcade:
            "街机",

        puzzle:
            "益智",

        simulation:
            "模拟",

        shooting:
            "射击",

        platform:
            "平台",

        casual:
            "休闲",

        fighting:
            "格斗",

        racingGames:
            "赛车",

        survival:
            "生存",

        multiplayer:
            "多人",

        home: "首页",

        games: "游戏",

        videos: "视频",

        library: "我的库",

        discover: "发现",

        popular: "热门",

        newGames: "新游戏",

        favorites: "收藏",

        store: "商店",

        news: "新闻",

        online: "在线",

        searchPlaceholder: "搜索游戏...",

        featuredLabel: "SFV-X 精选",

        heroTitle: "游戏世界",

        heroTitleStrong: "从这里开始",

        heroDescription: "发现新的游戏系列，为您的下一次游戏体验做好准备。",

        playNow: "立即玩",

        details: "详情",

        randomGame: "随机",

        gameCategories: "游戏分类",

        all: "全部",

        mostPopular: "最受欢迎",

        newGamesTitle: "新游戏",

        viewAll: "查看全部",

        noGamesFound: "未找到游戏",

        tryDifferentGame: "尝试搜索不同的游戏或浏览我们的分类。",

        showAllGames: "显示所有游戏",

        totalGames: "游戏总数",

        recent: "最近",

        random: "随机游戏",

        leaderboard: "排行榜",

        achievements: "成就",

        homeHeading: "主要",

        closeMenu: "关闭菜单",

        openMenu: "打开菜单",

        changeLanguage: "更换语言",

        clearSearch: "清除搜索",

        notifications: "通知",

        errorTitle: "错误",

        loadError: "加载失败",

        noFavorites: "暂无收藏",

        profile: "个人资料"

    }

};


/* =========================================================
   3. LANGUAGE STATE
   ========================================================= */

let currentLanguage = "en";


function getCurrentLanguage() {

    try {

        const savedLanguage =
            localStorage.getItem(
                CONFIG.LANGUAGE_KEY
            );

        if (
            savedLanguage &&
            TRANSLATIONS[savedLanguage]
        ) {

            return savedLanguage;
        }

    } catch (error) {

        console.warn(
            "Could not read saved language:",
            error
        );
    }

    return "en";
}


function t(key) {

    const language =
        TRANSLATIONS[currentLanguage];

    if (
        language &&
        language[key]
    ) {

        return language[key];
    }

    return (
        TRANSLATIONS.en[key] ||
        key
    );
}


/* =========================================================
   4. DOM
   ========================================================= */

const elements = {

    app:
        document.getElementById(
            "gamePlayerApp"
        ),

    loading:
        document.getElementById(
            "playerLoading"
        ),

    error:
        document.getElementById(
            "playerError"
        ),

    errorMessage:
        document.getElementById(
            "errorMessage"
        ),

    content:
        document.getElementById(
            "gamePlayerContent"
        ),

    gameCategory:
        document.getElementById(
            "gameCategory"
        ),

    gameTitle:
        document.getElementById(
            "gameTitle"
        ),

    gameDescription:
        document.getElementById(
            "gameDescription"
        ),

    favoriteButton:
        document.getElementById(
            "favoriteButton"
        ),

    gameFrameWrapper:
        document.getElementById(
            "gameFrameWrapper"
        ),

    gameFrameContainer:
        document.getElementById(
            "gameFrameContainer"
        ),

    metaCategory:
        document.getElementById(
            "metaCategory"
        ),

    metaTags:
        document.getElementById(
            "metaTags"
        ),

    metaId:
        document.getElementById(
            "metaId"
        ),

    relatedGamesGrid:
        document.getElementById(
            "relatedGamesGrid"
        ),

    backButton:
        document.getElementById(
            "backButton"
        ),

    errorBackButton:
        document.getElementById(
            "errorBackButton"
        ),

    fullscreenButton:
        document.getElementById(
            "fullscreenButton"
        ),

    frameFullscreenButton:
        document.getElementById(
            "frameFullscreenButton"
        ),

    relatedTitle:
        document.getElementById(
            "relatedTitle"
        )

};


/* =========================================================
   5. STATE
   ========================================================= */

let gamePlayerDatabase = [];

let currentGame = null;

let isFavorite = false;


/* =========================================================
   6. INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initGamePlayer
);


async function initGamePlayer() {

    currentLanguage =
        getCurrentLanguage();

    console.log(
        "SFV-X Game Player: initialized"
    );

    setupEvents();

    updateStaticTranslations();

    const gameId =
        getGameIdFromURL();

    if (
        gameId === null
    ) {

        showError(
            t("noGameId")
        );

        return;
    }

    await loadGamesDatabase(
        gameId
    );
}


/* =========================================================
   7. LANGUAGE
   ========================================================= */

function updateStaticTranslations() {

    if (elements.favoriteButton) {

        elements.favoriteButton.textContent =
            isFavorite
                ? `★ ${t("favoriteActive")}`
                : `☆ ${t("favorite")}`;
    }

    if (
        elements.fullscreenButton
    ) {

        elements.fullscreenButton.setAttribute(
            "aria-label",
            t("fullscreen")
        );

        elements.fullscreenButton.setAttribute(
            "title",
            t("fullscreen")
        );
    }

    if (
        elements.frameFullscreenButton
    ) {

        elements.frameFullscreenButton.setAttribute(
            "aria-label",
            t("fullscreen")
        );

        elements.frameFullscreenButton.setAttribute(
            "title",
            t("fullscreen")
        );
    }

    if (elements.relatedTitle) {
        elements.relatedTitle.textContent = t("relatedGames");
    }

    // Update back buttons
    const backButtons = document.querySelectorAll('.back-button, #backButton, #errorBackButton');
    backButtons.forEach(btn => {
        if (btn) btn.textContent = t("back");
    });

    // Update play buttons in related games
    document.querySelectorAll('.related-play-button').forEach(btn => {
        btn.textContent = t("play") + " →";
    });
}


/* =========================================================
   8. GET GAME ID
   ========================================================= */

function getGameIdFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const possibleIds = [

        params.get("id"),

        params.get("game"),

        params.get("gameId")

    ];

    for (
        const value of possibleIds
    ) {

        if (
            value !== null &&
            value !== ""
        ) {

            return String(
                value
            ).trim();
        }
    }

    return null;
}


/* =========================================================
   9. LOAD DATABASE
   ========================================================= */

async function loadGamesDatabase(
    gameId
) {

    showLoading();

    try {

        const response =
            await fetch(
                CONFIG.GAMES_DATABASE_URL,
                {
                    cache: "no-store"
                }
            );

        if (
            !response.ok
        ) {

            throw new Error(
                `Failed to load games.json (${response.status})`
            );
        }

        const data =
            await response.json();

        if (
            Array.isArray(data)
        ) {

            gamePlayerDatabase =
                data;

        } else if (
            data &&
            Array.isArray(
                data.games
            )
/* =========================================================
   10. LOAD GAME
   ========================================================= */

function loadGame(
    gameId
) {

    showLoading();

    const normalizedId =
        String(
            gameId
        ).trim();

    const game =
        gamePlayerDatabase.find(
            item =>
                String(
                    item.id
                ).trim() ===
                normalizedId
        );

    if (!game) {

        showError(
            t("gameNotFound")
        );

        return;
    }

    currentGame =
        game;

    console.log(
        "SFV-X Game found:",
        game
    );

    renderGame(
        game
    );

    loadRelatedGames(
        game
    );

    loadFavoriteState(
        game
    );

    if (
        game.url &&
        String(
            game.url
        ).trim() !== ""
    ) {

        createGameFrame(
            String(
                game.url
            ).trim()
        );

    } else {

        showGamePlaceholder();
    }

    // تشغيل إعلانات وفيديوهات GameMonetize بشكل آمن تماماً لا يوقف تحميل اللعبة أبداً
    try {
        if (typeof initGameMonetizeAds === 'function') {
            initGameMonetizeAds(game.id);
        }
    } catch (e) {
        console.error("GameMonetize Ads Error:", e);
    }

    showContent();
}
           ) {

            gamePlayerDatabase =
                data.games;

        } else {

            throw new Error(
                "games.json does not contain a valid games array."
            );
        }

        console.log(
            `SFV-X Games loaded: ${gamePlayerDatabase.length} games`
        );

        loadGame(
            gameId
        );

    } catch (error) {

        console.error(
            "SFV-X Game Player database error:"
/* =========================================================
   11. CLEAN CATEGORY
   ========================================================= */

function cleanCategory(
    category
) {

    if (
        category === null ||
        category === undefined
    ) {

        return "";
    }

    let value =
        String(
            category
        ).trim();

    if (!value) {

        return "";
    }

    value =
        value.replace(
            /^category/i,
            ""
        ).trim();

    if (
        value.toLowerCase() ===
        "hypercasual"
    ) {

        return "";
    }

    const normalized =
        value
            .toLowerCase()
            .replace(
                /[\s_-]+/g,
                ""
            );

    const categoryMap = {

        action: "action",
        adventure: "adventure",
        racing: "racing",
        sports: "sports",
        strategy: "strategy",
        arcade: "arcade",
        puzzle: "puzzle",
        simulation: "simulation",
        shooting: "shooting",
        platform: "platform",
        casual: "casual",
        fighting: "fighting",
        survival: "survival",
        multiplayer: "multiplayer"

    };

    if (
        categoryMap[normalized]
    ) {

        return t(
            categoryMap[normalized]
        );
    }

    return value;
}


/* =========================================================
   12. GET DISPLAY CATEGORY
   ========================================================= */

function getDisplayCategory(game) {
    const cleaned = cleanCategory(game.category);
    if (!cleaned) {
        return t("game");
    }
    return cleaned;
}


/* =========================================================
   13. RENDER GAME
   ========================================================= */

function renderGame(
    game
) {

    const displayCategory =
        getDisplayCategory(game);

    if (
        elements.gameCategory
    ) {

        elements.gameCategory.textContent =
            displayCategory;
    }


    if (
        elements.gameTitle
    ) {

        elements.gameTitle.textContent =
            game.title ||
            t("game");
    }


    if (
        elements.gameDescription
    ) {

        elements.gameDescription.textContent =
            game.description ||
            "";
    }


    if (
        elements.metaId
    ) {

        const idContainer =
            elements.metaId.closest(
                ".meta-item"
            ) ||
            elements.metaId.parentElement;

        if (
            idContainer
        ) {

            idContainer.hidden =
                true;
        }
    }


    if (
        elements.metaTags
    ) {

        const tagsContainer =
            elements.metaTags.closest(
                ".meta-item"
            ) ||
            elements.metaTags.parentElement;

        if (
            tagsContainer
        ) {

            tagsContainer.hidden =
                true;
        }
    }


    if (
        elements.metaCategory
    ) {

        elements.metaCategory.textContent =
            displayCategory;
    }


    document.title =
        `SFV-X Games | ${
            game.title ||
            "Game Player"
        }`;
}


/* =========================================================
   14. CREATE GAME IFRAME
   ========================================================= */

function createGameFrame(
    url
) {

    if (
        !elements.gameFrameContainer
    ) {

        return;
    }

    elements.gameFrameContainer.innerHTML =
        "";


    const iframe =
        document.createElement(
            "iframe"
        );


    iframe.className =
        "game-iframe";


    iframe.id =
        "gameIframe";


    iframe.src =
        url;


    iframe.title =
        currentGame
            ? currentGame.title
            : "SFV-X Game";


    iframe.setAttribute(
        "allowfullscreen",
        ""
    );


    iframe.setAttribute(
        "allow",
        [
            "fullscreen",
            "autoplay",
            "gamepad",
            "clipboard-write"
        ].join("; ")
    );


    iframe.setAttribute(
        "loading",
        "eager"
    );


    iframe.setAttribute(
        "referrerpolicy",
        "no-referrer-when-downgrade"
    );


    iframe.addEventListener(
        "load",
        () => {

            console.log(
                "SFV-X Game iframe loaded:",
                url
            );
        }
    );


    iframe.addEventListener(
        "error",
        () => {

            console.error(
                "Game iframe failed to load:",
                url
            );
        }
    );


    elements.gameFrameContainer.appendChild(
        iframe
    );


    console.log(
        "SFV-X Game iframe created:",
        url
    );
}


/* =========================================================
   15. GAME PLACEHOLDER
   ========================================================= */

function showGamePlaceholder() {

    if (
        !elements.gameFrameContainer
    ) {

        return;
    }

    elements.gameFrameContainer.innerHTML = `

        <div class="game-placeholder">

            <div class="placeholder-icon">
                🎮
            </div>

            <h2>
                ${escapeHTML(
                    t("unavailable")
                )}
            </h2>

            <p>
                ${escapeHTML(
                    t(
                        "unavailableDescription"
                    )
                )}
            </p>

            <span>
                ${escapeHTML(
                    t("sfvxPlayer")
                )}
            </span>

        </div>

    `;
}


/* =========================================================
   16. RELATED GAMES
   ========================================================= */

function loadRelatedGames(
    game
) {

    if (
        !elements.relatedGamesGrid
    ) {

        return;
    }

    elements.relatedGamesGrid.innerHTML =
        "";

    if (elements.relatedTitle) {
        elements.relatedTitle.textContent = t("relatedGames");
    }

    const gameCategory = game.category || "";
    const cleanGameCategory = cleanCategory(gameCategory);

    let relatedGames =
        gamePlayerDatabase

            .filter(
                item =>
                    String(
                        item.id
                    ) !==
                    String(
                        game.id
                    )
            )

            .filter(
                item => {
                    if (cleanGameCategory) {
                        const itemCategory = cleanCategory(item.category);
                        return itemCategory === cleanGameCategory;
                    }
                    return true;
                }
            )

            .slice(
                0,
                4
            );


    if (
        relatedGames.length < 4
    ) {

        const existingIds =
            new Set(
                relatedGames.map(
                    item =>
                        String(
                            item.id
                        )
                )
            );

        existingIds.add(String(game.id));

        const additionalGames =
            gamePlayerDatabase

                .filter(
                    item =>
                        !existingIds.has(
                            String(
                                item.id
                            )
                        )
                )

                .slice(
                    0,
                    4 -
                    relatedGames.length
                );


        relatedGames =
            [
                ...relatedGames,
                ...additionalGames
            ];
    }


    relatedGames.forEach(
        createRelatedGameCard
    );
}


/* =========================================================
   17. RELATED GAME CARD
   ========================================================= */

function createRelatedGameCard(
    game
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "related-game-card";


    card.dataset.gameId =
        game.id;


    const image =
        game.thumb ||
        "";


    const displayCategory =
        getDisplayCategory(game);


    card.innerHTML = `

        <div class="related-game-image">

            ${
                image

                    ? `
                        <img
                            src="${escapeHTML(
                                image
                            )}"
                            alt="${escapeHTML(
                                game.title ||
                                "Game"
                            )}"
                            loading="lazy"
                            onerror="this.style.display='none'"
                        >
                    `

                    : `
                        <div class="related-game-placeholder">
                            🎮
                        </div>
                    `
            }

        </div>


        <div class="related-game-info">

            <span class="related-game-category">

                ${escapeHTML(
                    displayCategory
                )}

            </span>


            <h3>

                ${escapeHTML(
                    game.title ||
                    t("game")
                )}

            </h3>


            <button
                type="button"
                class="related-play-button"
                data-game-id="${escapeHTML(
                    game.id
                )}">

                ${escapeHTML(
                    t("play")
                )}

                →

            </button>

        </div>

    `;


    const button =
        card.querySelector(
            ".related-play-button"
        );


    if (
        button
    ) {

        button.addEventListener(
            "click",
            () => {

                window.location.href =
                    `game-player.html?id=${encodeURIComponent(game.id)}`;
            }
        );
    }


    card.addEventListener("click", function(e) {
        if (e.target.closest('.related-play-button')) return;
        window.location.href =
            `game-player.html?id=${encodeURIComponent(game.id)}`;
    });


    elements.relatedGamesGrid.appendChild(
        card
    );
}


/* =========================================================
   18. FAVORITES
   ========================================================= */

function loadFavoriteState(
    game
) {

    const favorites =
        getFavorites();


    isFavorite =
        favorites.includes(
            String(
                game.id
            )
        );


    updateFavoriteButton();
}


/* =========================================================
   19. GET FAVORITES
   ========================================================= */

function getFavorites() {

    try {

        const saved =
            localStorage.getItem(
                CONFIG.FAVORITES_KEY
            );


        if (!saved) {

            return [];
        }


        const parsed =
            JSON.parse(
                saved
            );


        if (
            !Array.isArray(
                parsed
            )
        ) {

            return [];
        }


        return parsed.map(
            id =>
                String(
                    id
                )
        );

    } catch (error) {

        console.warn(
            "Could not read favorites:",
            error
        );

        return [];
    }
}


/* =========================================================
   20. SAVE FAVORITES
   ========================================================= */

function saveFavorites(
    favorites
) {

    try {

        localStorage.setItem(
            CONFIG.FAVORITES_KEY,
            JSON.stringify(
                favorites
            )
        );

    } catch (error) {

        console.warn(
            "Could not save favorites:",
            error
        );
    }
}


/* =========================================================
   21. TOGGLE FAVORITE
   ========================================================= */

function toggleFavorite() {

    if (
        !currentGame
    ) {

        return;
    }


    const favorites =
        getFavorites();


    const gameId =
        String(
            currentGame.id
        );


    if (
        favorites.includes(
            gameId
        )
    ) {

        const updated =
            favorites.filter(
                id =>
                    id !== gameId
            );


        saveFavorites(
            updated
        );


        isFavorite =
            false;

    } else {

        favorites.push(
            gameId
        );


        saveFavorites(
            favorites
        );


        isFavorite =
            true;
    }


    updateFavoriteButton();
}


/* =========================================================
   22. UPDATE FAVORITE BUTTON
   ========================================================= */

function updateFavoriteButton() {

    if (
        !elements.favoriteButton
    ) {

        return;
    }


    if (
        isFavorite
    ) {

        elements.favoriteButton.textContent =
            `★ ${t(
                "favoriteActive"
            )}`;


        elements.favoriteButton.classList.add(
            "is-favorite"
        );

    } else {

        elements.favoriteButton.textContent =
            `☆ ${t(
                "favorite"
            )}`;


        elements.favoriteButton.classList.remove(
            "is-favorite"
        );
    }
}


/* =========================================================
   23. FULLSCREEN - IMPROVED
   ========================================================= */

function toggleFullscreen() {
    const iframe = document.getElementById('gameIframe');
    const container = elements.gameFrameContainer;
    const wrapper = elements.gameFrameWrapper;

    if (document.fullscreenElement) {
        exitFullscreen();
        return;
    }

    let target = iframe || container || wrapper;

    if (!target) {
        console.warn("No element found for fullscreen");
        return;
    }

    requestFullscreen(target);
}

function requestFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen().catch(error => {
            console.warn("Fullscreen request failed:", error);
            fallbackFullscreen();
        });
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else {
        console.warn("Fullscreen API not supported");
        fallbackFullscreen();
    }
}

function fallbackFullscreen() {
    const container = elements.gameFrameContainer;
    if (container && container !== document.fullscreenElement) {
        if (container.requestFullscreen) {
            container.requestFullscreen().catch(() => {});
        } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        }
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen().catch(error => {
            console.warn("Exit fullscreen failed:", error);
        });
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

function updateFullscreenButtons() {
    const isFullscreen = Boolean(document.fullscreenElement);
    const fullscreenLabel = isFullscreen ? t("exitFullscreen") : t("fullscreen");

    if (elements.fullscreenButton) {
        elements.fullscreenButton.textContent = "⛶";
        elements.fullscreenButton.setAttribute("title", fullscreenLabel);
        elements.fullscreenButton.setAttribute("aria-label", fullscreenLabel);
    }

    if (elements.frameFullscreenButton) {
        elements.frameFullscreenButton.textContent = "⛶";
        elements.frameFullscreenButton.setAttribute("title", fullscreenLabel);
        elements.frameFullscreenButton.setAttribute("aria-label", fullscreenLabel);
    }
}


/* =========================================================
   24. ADVERTISEMENTS MANAGER (مدير الإعلانات)
   ========================================================= */

function initGameAds() {
    if (!CONFIG.AD_CONFIG || !CONFIG.AD_CONFIG.enabled) return;

    const wrapper = elements.gameFrameWrapper;
    if (!wrapper) return;

    // منع تكرار إنشاء الحاوية إذا كانت موجودة مسبقاً
    if (document.getElementById(CONFIG.AD_CONFIG.bannerSlotId)) return;

    const adContainer = document.createElement("div");
    adContainer.id = CONFIG.AD_CONFIG.bannerSlotId;
    adContainer.className = "sfvx-ad-container";
    adContainer.style.cssText = "width: 100%; text-align: center; margin: 15px 0; overflow: hidden;";

    // **ملاحظة:** تقدر تستبدل كود الـ HTML الداخلي هنا بأي كود إعلان بانر تبي تحطه (مثل إعلانات AdSense أو GameMonetize)
    adContainer.innerHTML = `
        <div style="background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.1); padding: 12px; border-radius: 8px; color: #888; font-size: 12px; display: inline-block; width: 100%; max-width: 728px;">
            <span>Advertisement Space</span>
        </div>
    `;

    // إدراج حاوية الإعلانات مباشرة أسفل إطار اللعبة
    wrapper.insertAdjacentElement("afterend", adContainer);
}


/* =========================================================
   25. EVENTS
   ========================================================= */

function setupEvents() {

    if (
        elements.backButton
    ) {

        elements.backButton.addEventListener(
            "click",
            goBackToGames
        );
    }


    if (
        elements.errorBackButton
    ) {

        elements.errorBackButton.addEventListener(
            "click",
            goBackToGames
        );
    }


    if (
        elements.favoriteButton
    ) {

        elements.favoriteButton.addEventListener(
            "click",
            toggleFavorite
        );
    }


    if (
        elements.fullscreenButton
    ) {

        elements.fullscreenButton.addEventListener(
            "click",
            toggleFullscreen
        );
    }


    if (
        elements.frameFullscreenButton
    ) {

        elements.frameFullscreenButton.addEventListener(
            "click",
            toggleFullscreen
        );
    }


    document.addEventListener(
        "fullscreenchange",
        updateFullscreenButtons
    );

    document.addEventListener(
        "webkitfullscreenchange",
        updateFullscreenButtons
    );

    setTimeout(updateFullscreenButtons, 100);

    document.addEventListener(
        "keydown",
        handleKeyboard
    );
}


/* =========================================================
   26. KEYBOARD
   ========================================================= */

function handleKeyboard(
    event
) {

    if (
        event.altKey &&
        event.key === "ArrowLeft"
    ) {

        goBackToGames();
    }

    if (
        event.key === "f" ||
        event.key === "F"
    ) {
        const tag = document.activeElement?.tagName || '';
        if (tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT') {
            toggleFullscreen();
        }
    }
}


/* =========================================================
   27. BACK TO GAMES
   ========================================================= */

function goBackToGames() {

    window.location.href =
        CONFIG.GAMES_PAGE_URL;
}


/* =========================================================
   28. UI STATES
   ========================================================= */

function showLoading() {

    if (
        elements.loading
    ) {

        elements.loading.hidden =
            false;
    }


    if (
        elements.error
    ) {

        elements.error.hidden =
            true;
    }


    if (
        elements.content
    ) {

        elements.content.hidden =
            true;
    }
}


function showContent() {

    if (
        elements.loading
    ) {

        elements.loading.hidden =
            true;
    }


    if (
        elements.error
    ) {

        elements.error.hidden =
            true;
    }


    if (
        elements.content
    ) {

        elements.content.hidden =
            false;
    }
}


function showError(
    message
) {

    console.error(
        "SFV-X Game Player:",
        message
    );


    if (
        elements.loading
    ) {

        elements.loading.hidden =
            true;
    }


    if (
        elements.content
    ) {

        elements.content.hidden =
            true;
    }


    if (
        elements.error
    ) {

        elements.error.hidden =
            false;
    }


    if (
        elements.errorMessage
    ) {

        elements.errorMessage.textContent =
            message;
    }
}


/* =========================================================
   29. HTML ESCAPE
   ========================================================= */

function escapeHTML(
    value
) {

    return String(
        value
    )

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );
}


/* =========================================================
   30. LANGUAGE CHANGE API
   ========================================================= */

function setGamePlayerLanguage(
    language
) {

    if (
        !TRANSLATIONS[language]
    ) {

        return;
    }


    currentLanguage =
        language;


    try {

        localStorage.setItem(
            CONFIG.LANGUAGE_KEY,
            language
        );

    } catch (error) {

        console.warn(
            "Could not save language:",
            error
        );
    }


    updateStaticTranslations();


    if (
        currentGame
    ) {

        renderGame(
            currentGame
        );

        loadRelatedGames(
            currentGame
        );
    }


    updateFullscreenButtons();


    document.querySelectorAll('.related-play-button').forEach(btn => {
        btn.textContent = t("play") + " →";
    });
}


/* =========================================================
   31. DEBUG API
   ========================================================= */

window.SFVXGamePlayer = {

    getCurrentGame() {

        return currentGame;
    },


    getDatabase() {

        return gamePlayerDatabase;
    },


    reload(
        gameId
    ) {

        if (
            gameId === undefined ||
            gameId === null ||
            gameId === ""
        ) {

            return;
        }


        loadGame(
            String(
                gameId
            )
        );
    },


    setLanguage(
        language
    ) {

        setGamePlayerLanguage(
            language
        );
    },


    toggleFullscreen() {
        toggleFullscreen();
    },


    getLanguage() {
        return currentLanguage;
    },


    getFavorites() {
        return getFavorites();
    }

};


/* =========================================================
   32. READY
   ========================================================= */

console.log(
    "SFV-X Game Player JS loaded successfully."
); 
/* =========================================================
   GAMEMONETIZE WALKTHROUGH & ADS WIDGET
   ========================================================= */
function initGameMonetizeAds(gameId) {
    if (!gameId) return;

    window.VIDEO_OPTIONS = {
        gameId: gameId,       
        width: "100%",        
        height: "480px",      
        color: "#3f007e",     
        getads: "true"        
    };

    let existingScript = document.getElementById("gamemonetize-video-script");
    if (!existingScript) {
        let scriptTag = document.createElement("script");
        scriptTag.id = "gamemonetize-video-script";
        scriptTag.type = "text/javascript";
        scriptTag.src = "https://api.gamemonetize.com/video.js";
        document.body.appendChild(scriptTag);
    }
}

