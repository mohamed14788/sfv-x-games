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

        
