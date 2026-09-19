/** 
 * ========================================================= 
 * SFV-X GAMES - Main JavaScript Engine (Part 1/4)
 * ========================================================= 
 */ 
 
document.addEventListener("DOMContentLoaded", () => { 
    "use strict"; 
 
    /* 1. CONFIGURATION */ 
    const CONFIG = { 
        GAMES_PER_PAGE: 8, 
        POPULAR_COUNT: 8, 
        NEW_COUNT: 8, 
        STORAGE_KEY: "sfvx_games_data", 
        THEME_KEY: "sfvx_theme", 
        LANGUAGE_KEY: "sfvx_language", 
        FAVORITES_KEY: "sfvx_favorites", 
        GAME_PLAYER_URL: "../game-player/game-player.html"
    }; 
 
    /* 2. TRANSLATIONS */ 
    const TRANSLATIONS = { 
        en: { 
            home: "Home", games: "All Games", videos: "Videos", library: "My Library", discover: "DISCOVER", popular: "Popular", newGames: "New Games", favorites: "Favorites", store: "Store", news: "News", online: "Online", searchPlaceholder: "Search for a game...", featuredLabel: "✦ FEATURED GAME", heroTitle: "The world of games", heroTitleStrong: "starts here", heroDescription: "Discover a new collection of games and get ready for your next gaming experience.", playNow: "Play Now", details: "Details", randomGame: "Random", gameCategories: "Game Categories", all: "All", action: "Action", adventure: "Adventure", racing: "Racing", sports: "Sports", strategy: "Strategy", arcade: "Arcade", mostPopular: "Most Popular", newGamesTitle: "New Games", viewAll: "View All", noGamesFound: "No games found", tryDifferentGame: "Try searching for a different game or browse our categories.", showAllGames: "Show All Games", totalGames: "Total Games", categories: "Categories", recent: "Recent", random: "Random Game", leaderboard: "Leaderboard", achievements: "Achievements", homeHeading: "MAIN", closeMenu: "Close menu", openMenu: "Open menu", changeLanguage: "Change language", clearSearch: "Clear search", notifications: "Notifications", play: "Play", errorTitle: "Error", loadError: "Failed to load games. Please refresh the page.", noFavorites: "No favorite games yet.", profile: "Guest" 
        }, 
        ar: { 
            home: "الرئيسية", games: "كل الألعاب", videos: "الفيديوهات", library: "مكتبتي", discover: "استكشف", popular: "الأكثر شعبية", newGames: "ألعاب جديدة", favorites: "المفضلة", store: "المتجر", news: "الأخبار", online: "متصل", searchPlaceholder: "ابحث عن لعبة...", featuredLabel: "✦ لعبة مميزة", heroTitle: "عالم الألعاب", heroTitleStrong: "يبدأ هنا", heroDescription: "اكتشف مجموعة جديدة من الألعاب واستعد لتجربة ألعابك القادمة.", playNow: "شغل الآن", details: "التفاصيل", randomGame: "عشوائي", gameCategories: "تصنيفات الألعاب", all: "الكل", action: "أكشن", adventure: "مغامرات", racing: "سباقات", sports: "رياضة", strategy: "استراتيجية", arcade: "أركيد", mostPopular: "الأكثر شعبية", newGamesTitle: "ألعاب جديدة", viewAll: "عرض الكل", noGamesFound: "لا توجد ألعاب", tryDifferentGame: "حاول البحث عن لعبة مختلفة أو تصفح التصنيفات.", showAllGames: "عرض كل الألعاب", totalGames: "إجمالي الألعاب", categories: "التصنيفات", recent: "المشاهدة مؤخراً", random: "لعبة عشوائية", leaderboard: "لوحة المتصدرين", achievements: "الإنجازات", homeHeading: "الرئيسية", closeMenu: "إغلاق القائمة", openMenu: "فتح القائمة", changeLanguage: "تغيير اللغة", clearSearch: "مسح البحث", notifications: "الإشعارات", play: "شغل", errorTitle: "خطأ", loadError: "فشل تحميل الألعاب. حاول تحديث الصفحة.", noFavorites: "لا توجد ألعاب مفضلة حتى الآن.", profile: "زائر" 
        }, 
        es: { home: "Inicio", games: "Todos los juegos", videos: "Videos", library: "Mi Biblioteca", discover: "DESCUBRIR", popular: "Populares", newGames: "Nuevos Juegos", favorites: "Favoritos", store: "Tienda", news: "Noticias", online: "En línea", searchPlaceholder: "Buscar un juego...", featuredLabel: "✦ JUEGO DESTACADO", heroTitle: "El mundo de los juegos", heroTitleStrong: "comienza aquí", heroDescription: "Descubre una nueva colección de juegos y prepárate para tu próxima experiencia.", playNow: "Jugar Ahora", details: "Detalles", randomGame: "Aleatorio", gameCategories: "Categorías de Juegos", all: "Todos", action: "Acción", adventure: "Aventura", racing: "Carreras", sports: "Deportes", strategy: "Estrategia", arcade: "Arcade", mostPopular: "Más Populares", newGamesTitle: "Nuevos Juegos", viewAll: "Ver Todos", noGamesFound: "No se encontraron juegos", tryDifferentGame: "Intenta buscar un juego diferente o explora nuestras categorías.", showAllGames: "Mostrar Todos los Juegos", totalGames: "Total de Juegos", categories: "Categorías", recent: "Recientes", random: "Juego Aleatorio", leaderboard: "Tabla de Clasificación", achievements: "Logros", homeHeading: "PRINCIPAL", closeMenu: "Cerrar menú", openMenu: "Abrir menú", changeLanguage: "Cambiar idioma", clearSearch: "Limpiar búsqueda", notifications: "Notificaciones", play: "Jugar", errorTitle: "Error", loadError: "No se pudieron cargar los juegos.", noFavorites: "Aún no tienes juegos favoritos.", profile: "Invitado" }, 
        fr: { home: "Accueil", games: "Tous les jeux", videos: "Vidéos", library: "Ma Bibliothèque", discover: "DÉCOUVRIR", popular: "Populaires", newGames: "Nouveaux Jeux", favorites: "Favoris", store: "Magasin", news: "Actualités", online: "En ligne", searchPlaceholder: "Rechercher un jeu...", featuredLabel: "✦ JEU EN VEDETTE", heroTitle: "Le monde des jeux", heroTitleStrong: "commence ici", heroDescription: "Découvrez une nouvelle collection de jeux et préparez-vous pour votre prochaine expérience.", playNow: "Jouer Maintenant", details: "Détails", randomGame: "Aléatoire", gameCategories: "Catégories de Jeux", all: "Tous", action: "Action", adventure: "Aventure", racing: "Course", sports: "Sport", strategy: "Stratégie", arcade: "Arcade", mostPopular: "Les Plus Populaires", newGamesTitle: "Nouveaux Jeux", viewAll: "Voir Tout", noGamesFound: "Aucun jeu trouvé", tryDifferentGame: "Essayez de rechercher un jeu différent ou parcourez nos catégories.", showAllGames: "Afficher Tous les Jeux", totalGames: "Total des Jeux", categories: "Catégories", recent: "Récents", random: "Jeu Aléatoire", leaderboard: "Classement", achievements: "Succès", homeHeading: "PRINCIPAL", closeMenu: "Fermer le menu", openMenu: "Ouvrir le menu", changeLanguage: "Changer de langue", clearSearch: "Effacer la recherche", notifications: "Notifications", play: "Jouer", errorTitle: "Erreur", loadError: "Impossible de charger les jeux.", noFavorites: "Aucun jeu favori pour le moment.", profile: "Invité" }, 
        de: { home: "Startseite", games: "Alle Spiele", videos: "Videos", library: "Meine Bibliothek", discover: "ENTDECKEN", popular: "Beliebt", newGames: "Neue Spiele", favorites: "Favoriten", store: "Shop", news: "Neuigkeiten", online: "Online", searchPlaceholder: "Nach einem Spiel suchen...", featuredLabel: "✦ EMPFOHLENES SPIEL", heroTitle: "Die Welt der Spiele", heroTitleStrong: "beginnt hier", heroDescription: "Entdecke eine neue Sammlung von Spielen und bereite dich auf dein nächstes Spielerlebnis vor.", playNow: "Jetzt Spielen", details: "Details", randomGame: "Zufall", gameCategories: "Spielkategorien", all: "Alle", action: "Aktion", adventure: "Abenteuer", racing: "Rennen", sports: "Sport", strategy: "Strategie", arcade: "Arcade", mostPopular: "Am Beliebtesten", newGamesTitle: "Neue Spiele", viewAll: "Alle Anzeigen", noGamesFound: "Keine Spiele gefunden", tryDifferentGame: "Versuche ein anderes Spiel zu suchen oder durchstöbere unsere Kategorien.", showAllGames: "Alle Spiele Anzeigen", totalGames: "Spiele insgesamt", categories: "Kategorien", recent: "Kürzlich", random: "Zufälliges Spiel", leaderboard: "Bestenliste", achievements: "Errungenschaften", homeHeading: "HAUPT", closeMenu: "Menü schließen", openMenu: "Menü öffnen", changeLanguage: "Sprache ändern", clearSearch: "Suche löschen", notifications: "Benachrichtigungen", play: "Spielen", errorTitle: "Fehler", loadError: "Spiele konnten nicht geladen werden.", noFavorites: "Noch keine Favoriten.", profile: "Gast" }, 
        pt: { home: "Início", games: "Todos os Jogos", videos: "Vídeos", library: "Minha Biblioteca", discover: "DESCOBRIR", popular: "Populares", newGames: "Novos Jogos", favorites: "Favoritos", store: "Loja", news: "Notícias", online: "Online", searchPlaceholder: "Pesquisar um jogo...", featuredLabel: "✦ JOGO EM DESTAQUE", heroTitle: "O mundo dos jogos", heroTitleStrong: "começa aqui", heroDescription: "Descubra uma nova coleção de jogos e prepare-se para sua próxima experiência.", playNow: "Jogar Agora", details: "Detalhes", randomGame: "Aleatório", gameCategories: "Categorias de Jogos", all: "Todos", action: "Ação", adventure: "Aventura", racing: "Corrida", sports: "Esportes", strategy: "Estratégia", arcade: "Arcade", mostPopular: "Mais Populares", newGamesTitle: "Novos Jogos", viewAll: "Ver Todos", noGamesFound: "Nenhum jogo encontrado", tryDifferentGame: "Tente pesquisar um jogo diferente ou navegue por nossas categorias.", showAllGames: "Mostrar Todos os Jogos", totalGames: "Total de Jogos", categories: "Categorias", recent: "Recentes", random: "Jogo Aleatório", leaderboard: "Classificação", achievements: "Conquistas", homeHeading: "PRINCIPAL", closeMenu: "Fechar menu", openMenu: "Abrir menu", changeLanguage: "Alterar idioma", clearSearch: "Limpar pesquisa", notifications: "Notificaciones", play: "Jogar", errorTitle: "Erro", loadError: "Falha ao carregar os jogos.", noFavorites: "Nenhum jogo favorito ainda.", profile: "Convidado" }, 
        ru: { home: "Главная", games: "Все игры", videos: "Видео", library: "Моя библиотека", discover: "ОТКРЫТЬ", popular: "Популярные", newGames: "Новые игры", favorites: "Избранное", store: "Магазин", news: "Новости", online: "Онлайн", searchPlaceholder: "Поиск игры...", featuredLabel: "✦ РЕКОМЕНДУЕМАЯ ИГРА", heroTitle: "Мир игр", heroTitleStrong: "начинается здесь", heroDescription: "Откройте новую коллекцию игр и приготовьтесь к следующему игровому опыту.", playNow: "Играть Сейчас", details: "Подробнее", randomGame: "Случайная", gameCategories: "Категории игр", all: "Все", action: "Экшн", adventure: "Приключения", racing: "Гонки", sports: "Спорт", strategy: "Стратегия", arcade: "Аркада", mostPopular: "Самые популярные", newGamesTitle: "Новые игры", viewAll: "Показать все", noGamesFound: "Игры не найдены", tryDifferentGame: "Попробуйте поискать другую игру или просмотрите наши категории.", showAllGames: "Показать все игры", totalGames: "Всего игр", categories: "Категории", recent: "Недавние", random: "Случайная игра", leaderboard: "Таблица лидеров", achievements: "Достижения", homeHeading: "ГЛАВНОЕ", closeMenu: "Закрыть меню", openMenu: "Открыть меню", changeLanguage: "Изменить язык", clearSearch: "Очистить поиск", notifications: "Уведомления", play: "Играть", errorTitle: "Ошибка", loadError: "Не удалось загрузить игры.", noFavorites: "Избранных игр пока нет.", profile: "Гость" }, 
        tr: { home: "Ana Sayfa", games: "Tüm Oyunlar", videos: "Videolar", library: "Kitaplığım", discover: "KEŞFET", popular: "Popüler", newGames: "Yeni Oyunlar", favorites: "Favoriler", store: "Mağaza", news: "Haberler", online: "Çevrimiçi", searchPlaceholder: "Oyun ara...", featuredLabel: "✦ ÖNE ÇIKAN OYUN", heroTitle: "Oyun dünyası", heroTitleStrong: "burada başlıyor", heroDescription: "Yeni bir oyun koleksiyonu keşfedin ve bir sonraki oyun deneyiminize hazırlanın.", playNow: "Şimdi Oyna", details: "Detaylar", randomGame: "Rastgele", gameCategories: "Oyun Kategorileri", all: "Tümü", action: "Aksiyon", adventure: "Macera", racing: "Yarış", sports: "Spor", strategy: "Strateji", arcade: "Arcade", mostPopular: "En Popüler", newGamesTitle: "Yeni Oyunlar", viewAll: "Tümünü Gör", noGamesFound: "Oyun bulunamadı", tryDifferentGame: "Farklı bir oyun aramayı deneyin veya kategorilerimize göz atın.", showAllGames: "Tüm Oyunları Göster", totalGames: "Toplam Oyun", categories: "Kategoriler", recent: "Son", random: "Rastgele Oyun", leaderboard: "Sıralama", achievements: "Başarımlار", homeHeading: "ANA", closeMenu: "Menüyü kapat", openMenu: "Menüyü aç", changeLanguage: "Dili değiştir", clearSearch: "Aramayı temizle", notifications: "Bildirimler", play: "Oyna", errorTitle: "Hata", loadError: "Oyunlar yüklenemedi.", noFavorites: "Henüz favori oyun yok.", profile: "Misafir" }, 
        zh: { home: "首页", games: "所有游戏", videos: "视频", library: "我的库", discover: "发现", popular: "热门", newGames: "新游戏", favorites: "收藏", store: "商店", news: "新闻", online: "在线", searchPlaceholder: "搜索游戏...", featuredLabel: "✦ 精选游戏", heroTitle: "游戏世界", heroTitleStrong: "从这里开始", heroDescription: "发现新的游戏系列，为您的下一次游戏体验做好准备。", playNow: "立即玩", details: "详情", randomGame: "随机", gameCategories: "游戏分类", all: "全部", action: "动作", adventure: "冒险", racing: "赛车", sports: "体育", strategy: "策略", arcade: "街机", mostPopular: "最受欢迎", newGamesTitle: "新游戏", viewAll: "查看全部", noGamesFound: "未找到游戏", tryDifferentGame: "尝试搜索不同的游戏或浏览我们的分类。", showAllGames: "显示所有游戏", totalGames: "游戏总数", categories: "分类", recent: "最近", random: "随机游戏", leaderboard: "排行榜", achievements: "成就", homeHeading: "主要", closeMenu: "关闭菜单", openMenu: "打开菜单", changeLanguage: "更换语言", clearSearch: "清除搜索", notifications: "通知", play: "玩", errorTitle: "错误", loadError: "游戏加载失败。", noFavorites: "暂无收藏游戏。", profile: "访客" } 
    }; 
 
    /* 3. STATE & DOM */ 
    const state = { 
        allGames: [], filteredGames: [], currentCategory: "all", 
        searchQuery: "", currentLanguage: "en", favorites: [], 
        theme: "dark", isSidebarOpen: false, isSearching: false 
    }; 
 
    const DOM = { 
        app: document.getElementById("gamesApp"), 
        popularGrid: document.getElementById("popularGamesGrid"), 
        newGrid: document.getElementById("newGamesGrid"), 
        searchForm: document.getElementById("gamesSearchForm"), 
        searchInput: document.getElementById("gamesSearchInput"), 
        clearSearch: document.getElementById("clearSearch"), 
        searchEmpty: document.getElementById("searchEmpty"), 
        categoriesList: document.getElementById("categoriesList"), 
        sidebar: document.getElementById("gamesSidebar"), 
        sidebarOverlay: document.getElementById("sidebarOverlay"), 
        menuButton: document.getElementById("menuButton"), 
        sidebarClose: document.getElementById("sidebarClose"), 
        languageButton: document.getElementById("languageButton"), 
        languageDropdown: document.getElementById("languageDropdown"), 
        languageCurrent: document.getElementById("languageCurrent"), 
        languageOptions: document.querySelectorAll(".language-option"), 
        themeToggle: document.getElementById("themeToggle"), 
        themeIcon: document.querySelector(".theme-icon"), 
        heroPlayButton: document.getElementById("heroPlayButton"), 
        heroRandomButton: document.getElementById("heroRandomButton"), 
        totalGamesCount: document.getElementById("totalGamesCount"), 
        categoriesCount: document.getElementById("categoriesCount"), 
        newGamesCount: document.getElementById("newGamesCount"), 
        favoritesBadge: document.getElementById("favoritesBadge"), 
        newGamesSection: document.getElementById("newGamesSection"), 
        featuredGame: document.getElementById("featuredGame") 
    };

                              /* ========================================================= 
       SFV-X GAMES - Main JavaScript Engine (Part 2/4)
       ========================================================= */ 
 
    function escapeHTML(value) { 
        if (value === null || value === undefined) return ""; 
        return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"); 
    } 
 
    function translate(key) { 
        const language = TRANSLATIONS[state.currentLanguage] || TRANSLATIONS.en; 
        return language[key] !== undefined ? language[key] : TRANSLATIONS.en[key] || key; 
    } 
 
    /* LEVENSHTEIN & FUZZY SEARCH */ 
    function levenshteinDistance(a, b) { 
        a = String(a || "").toLowerCase(); 
        b = String(b || "").toLowerCase(); 
        if (a === b) return 0; 
        if (!a.length) return b.length; 
        if (!b.length) return a.length; 
        const previous = Array.from({ length: b.length + 1 }, (_, index) => index); 
        for (let i = 1; i <= a.length; i++) { 
            const current = [i]; 
            for (let j = 1; j <= b.length; j++) { 
                const insert = current[j - 1] + 1; 
                const remove = previous[j] + 1; 
                const replace = previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1); 
                current[j] = Math.min(insert, remove, replace); 
            } 
            previous.splice(0, previous.length, ...current); 
        } 
        return previous[b.length]; 
    } 
 
    function getSimilarityScore(query, text) { 
        if (!query || !text) return 0; 
        const q = String(query).toLowerCase().trim(); 
        const t = String(text).toLowerCase().trim(); 
        if (!q || !t) return 0; 
        if (q === t) return 1; 
        if (t.includes(q)) return 0.95; 
        const distance = levenshteinDistance(q, t); 
        const maxLength = Math.max(q.length, t.length); 
        return maxLength ? 1 - distance / maxLength : 0; 
    } 
 
    function fuzzySearch(query, games) { 
        if (!query || !query.trim()) return games; 
        const terms = query.toLowerCase().trim().split(/\s+/); 
        return games.filter(game => { 
            const title = String(game.title || "").toLowerCase(); 
            const category = String(game.category || "").toLowerCase(); 
            const tags = String(game.tags || "").toLowerCase(); 
            const description = String(game.description || "").toLowerCase(); 
            let totalScore = 0; 
            terms.forEach(term => { 
                const score = Math.max( 
                    getSimilarityScore(term, title), 
                    getSimilarityScore(term, category), 
                    getSimilarityScore(term, tags), 
                    getSimilarityScore(term, description) 
                ); 
                totalScore = Math.max(totalScore, score); 
            }); 
            return totalScore > 0.3; 
        }); 
    } 
 
    /* DATA LOADING */ 
    async function loadGames() { 
        try { 
            const response = await fetch("games.json", { cache: "no-cache" }); 
            if (!response.ok) throw new Error(`HTTP ${response.status}`); 
            const data = await response.json(); 
            if (!Array.isArray(data)) throw new Error("games.json must contain an array."); 
            state.allGames = data.filter(Boolean); 
            state.filteredGames = [...state.allGames]; 
            updateStats(); 
            renderCategories(); 
            renderPopularGames(); 
            renderNewGames(); 
            updateHero(); 
            renderFavoritesBadge(); 
            return state.allGames; 
        } catch (error) { 
            console.error("SFV-X Games loading error:", error); 
            if (DOM.popularGrid) {
                DOM.popularGrid.innerHTML = `<p style="color:red; text-align:center; grid-column:1/-1;">${escapeHTML(translate("loadError"))}</p>`;
            }
            return []; 
        } 
                                       }
     /* ========================================================= 
       SFV-X GAMES - Main JavaScript Engine (Part 3/4)
       ========================================================= */ 
 
    function renderGameCard(game, showFavorite = true) { 
        const id = game.id; 
        const title = game.title || "Untitled Game"; 
        const category = game.category || "Game"; 
        const thumbnail = game.thumb || game.thumbnail || game.image || ""; 
        const tags = game.tags ? String(game.tags).split(",").slice(0, 2).map(tag => tag.trim()).filter(Boolean).join(", ") : ""; 
        const isFavorite = state.favorites.includes(String(id)) || state.favorites.includes(id); 
 
        const favoriteButton = showFavorite ? ` 
            <button class="game-card-favorite ${isFavorite ? "active" : ""}" data-id="${escapeHTML(id)}" type="button" aria-label="Favorite"> 
                ${isFavorite ? "⭐" : "☆"} 
            </button> 
        ` : ""; 
 
        const imageHTML = thumbnail ? ` 
            <img src="${escapeHTML(thumbnail)}" alt="${escapeHTML(title)}" loading="lazy" onerror="this.style.display='none'"> 
        ` : ` 
            <span class="game-placeholder-icon">🎮</span> 
        `; 
 
        return ` 
            <article class="game-card" data-id="${escapeHTML(id)}" data-category="${escapeHTML(category)}" tabindex="0" role="button"> 
                ${favoriteButton} 
                <div class="game-card-image"> 
                    ${imageHTML} 
                    <div class="game-image-overlay"></div> 
                    <span class="game-status">▶ PLAY</span> 
                </div> 
                <div class="game-card-content"> 
                    <div class="game-card-title">${escapeHTML(title)}</div> 
                    <div class="game-card-meta"> 
                        <span class="game-card-category">${escapeHTML(category)}</span> 
                        <span>${escapeHTML(tags)}</span> 
                    </div> 
                    <button class="game-card-play" data-id="${escapeHTML(id)}" type="button"> 
                        ${escapeHTML(translate("play"))} 
                    </button> 
                </div> 
            </article> 
        `; 
    } 
 
    function renderGames(grid, games, limit = null, showFavorite = true) { 
        if (!grid) return; 
        const list = limit ? games.slice(0, limit) : games; 
        if (!list.length) { 
            grid.innerHTML = ` 
                <div class="search-empty" style="grid-column:1/-1;"> 
                    <div class="empty-icon">🎮</div> 
                    <h2>${escapeHTML(translate("noGamesFound"))}</h2> 
                    <p>${escapeHTML(translate("tryDifferentGame"))}</p> 
                </div> 
            `; 
            return; 
        } 
        grid.innerHTML = list.map(game => renderGameCard(game, showFavorite)).join(""); 
        bindGameCardEvents(grid); 
    } 
 
    function bindGameCardEvents(grid) { 
        grid.querySelectorAll(".game-card-play").forEach(button => { 
            button.addEventListener("click", event => { 
                event.stopPropagation(); 
                playGame(button.dataset.id); 
            }); 
        }); 
        grid.querySelectorAll(".game-card-favorite").forEach(button => { 
            button.addEventListener("click", event => { 
                event.stopPropagation(); 
                toggleFavorite(button.dataset.id); 
            }); 
        }); 
        grid.querySelectorAll(".game-card").forEach(card => { 
            card.addEventListener("click", event => { 
                if (event.target.closest(".game-card-favorite") || event.target.closest(".game-card-play")) return; 
                playGame(card.dataset.id); 
            }); 
        }); 
    } 
 
    function renderPopularGames() { 
        const popular = [...state.allGames].sort((a, b) => { 
            const aPop = Number(a.popularity ?? a.views ?? a.id ?? 0); 
            const bPop = Number(b.popularity ?? b.views ?? b.id ?? 0); 
            return bPop - aPop; 
        }).slice(0, CONFIG.POPULAR_COUNT); 
        renderGames(DOM.popularGrid, popular); 
    } 
 
    function renderNewGames() { 
        const newGames = [...state.allGames].reverse().slice(0, CONFIG.NEW_COUNT); 
        renderGames(DOM.newGrid, newGames); 
    } 
 
    function renderFilteredGames() { 
        renderGames(DOM.popularGrid, state.filteredGames); 
        if (DOM.newGamesSection) { 
            DOM.newGamesSection.style.display = state.isSearching ? "none" : ""; 
        } 
    }
     /* ========================================================= 
       SFV-X GAMES - Main JavaScript Engine (Part 4/4)
       ========================================================= */ 
 
    function getCategories() { 
        return ["all", "action", "adventure", "racing", "sports", "strategy", "arcade"]; 
    } 
 
    function renderCategories() { 
        if (!DOM.categoriesList) return; 
        const categories = getCategories(); 
        DOM.categoriesList.innerHTML = categories.map(cat => ` 
            <button class="category-button ${cat === state.currentCategory ? "active" : ""}" data-category="${cat}" type="button"> 
                ${escapeHTML(translate(cat) || cat)} 
            </button> 
        `).join(""); 
        DOM.categoriesList.querySelectorAll(".category-button").forEach(button => { 
            button.addEventListener("click", () => filterByCategory(button.dataset.category)); 
        }); 
    } 
 
    function filterByCategory(category) { 
        state.currentCategory = category || "all"; 
        renderCategories(); 
        applyFilters(); 
    } 
 
    function applyFilters() { 
        let games = [...state.allGames]; 
        if (state.currentCategory !== "all") { 
            games = games.filter(game => String(game.category || "").toLowerCase() === state.currentCategory.toLowerCase()); 
        } 
        if (state.searchQuery && state.searchQuery.trim()) { 
            games = fuzzySearch(state.searchQuery, games); 
            state.isSearching = true; 
        } else { 
            state.isSearching = false; 
        } 
        state.filteredGames = games; 
        renderFilteredGames(); 
    } 
 
    function handleSearch(query) { 
        state.searchQuery = String(query || ""); 
        if (DOM.clearSearch) { 
            DOM.clearSearch.classList.toggle("visible", state.searchQuery.length > 0); 
        } 
        applyFilters(); 
    } 
 
    function clearSearch() { 
        if (DOM.searchInput) DOM.searchInput.value = ""; 
        state.searchQuery = ""; 
        if (DOM.clearSearch) DOM.clearSearch.classList.remove("visible"); 
        resetView(false); 
        if (DOM.searchInput) DOM.searchInput.focus(); 
    } 
 
    function playGame(id) { 
        if (id === undefined || id === null || id === "") return; 
        window.location.href = `${CONFIG.GAME_PLAYER_URL}?id=${encodeURIComponent(id)}`; 
    } 
 
    function playRandomGame() { 
        if (!state.allGames.length) return; 
        const index = Math.floor(Math.random() * state.allGames.length); 
        const game = state.allGames[index]; 
        if (game) playGame(game.id); 
    } 
 
    function toggleFavorite(id) { 
        const favoriteId = String(id); 
        const index = state.favorites.indexOf(favoriteId); 
        if (index !== -1) state.favorites.splice(index, 1); 
        else state.favorites.push(favoriteId); 
        saveFavorites(); 
        renderFavoritesBadge(); 
        applyFilters(); 
    } 
 
    function loadFavorites() { 
        try { 
            const saved = localStorage.getItem(CONFIG.FAVORITES_KEY); 
            if (saved) { 
                const parsed = JSON.parse(saved); 
                state.favorites = Array.isArray(parsed) ? parsed.map(String) : []; 
            } 
        } catch (error) { state.favorites = []; } 
        renderFavoritesBadge(); 
    } 
 
    function saveFavorites() { 
        try { localStorage.setItem(CONFIG.FAVORITES_KEY, JSON.stringify(state.favorites)); } catch (error) {} 
    } 
 
    function renderFavoritesBadge() { 
        if (!DOM.favoritesBadge) return; 
        const count = state.favorites.length; 
        DOM.favoritesBadge.textContent = count; 
        DOM.favoritesBadge.style.display = count > 0 ? "inline-flex" : "none"; 
    } 
 
    function updateStats() { 
        if (DOM.totalGamesCount) DOM.totalGamesCount.textContent = state.allGames.length; 
        if (DOM.categoriesCount) { 
            const categories = new Set(state.allGames.map(game => game.category).filter(Boolean)); 
            DOM.categoriesCount.textContent = categories.size; 
        } 
        if (DOM.newGamesCount) DOM.newGamesCount.textContent = Math.min(CONFIG.NEW_COUNT, state.allGames.length); 
    } 
 
    function getFeaturedGame() { return state.allGames[0] || null; } 
    function updateHero() { 
        const game = getFeaturedGame(); 
        if (!game || !DOM.featuredGame) return; 
        DOM.featuredGame.dataset.gameId = game.id; 
    } 
 
    function loadLanguage() { 
        try { 
            const saved = localStorage.getItem(CONFIG.LANGUAGE_KEY); 
            if (saved && TRANSLATIONS[saved]) { state.currentLanguage = saved; return; } 
        } catch (e) {} 
        const browserLang = navigator.language || navigator.userLanguage; 
        const langCode = browserLang ? browserLang.split('-')[0] : "en"; 
        if (TRANSLATIONS[langCode]) { state.currentLanguage = langCode; return; } 
        state.currentLanguage = "en"; 
    } 
 
    function setLanguage(language) { 
        if (!TRANSLATIONS[language]) return; 
        state.currentLanguage = language; 
        try { localStorage.setItem(CONFIG.LANGUAGE_KEY, language); } catch (error) {} 
        applyTranslations(); 
        if (DOM.languageDropdown) DOM.languageDropdown.hidden = true; 
    } 
 
    function applyTranslations() { 
        const language = TRANSLATIONS[state.currentLanguage] || TRANSLATIONS.en; 
        document.querySelectorAll("[data-i18n]").forEach(element => { 
            const key = element.dataset.i18n; 
            if (language[key] !== undefined) element.textContent = language[key]; 
        }); 
        document.querySelectorAll("[data-i18n-placeholder]").forEach(element => { 
            const key = element.dataset.i18nPlaceholder; 
            if (language[key] !== undefined) element.placeholder = language[key]; 
        }); 
        if (DOM.languageCurrent) { 
            const names = { en: "EN", ar: "AR", es: "ES", fr: "FR", de: "DE", pt: "PT", ru: "RU", tr: "TR", zh: "中文" }; 
            DOM.languageCurrent.textContent = names[state.currentLanguage] || state.currentLanguage.toUpperCase(); 
        } 
        const isRTL = state.currentLanguage === "ar"; 
        document.documentElement.dir = isRTL ? "rtl" : "ltr"; 
        document.documentElement.lang = state.currentLanguage; 
        renderCategories(); 
        if (state.allGames.length) applyFilters(); 
    } 
 
    function setTheme(theme) { 
        if (theme !== "dark" && theme !== "light") theme = "dark"; 
        state.theme = theme; 
        document.documentElement.setAttribute("data-theme", theme); 
        if (DOM.themeIcon) DOM.themeIcon.textContent = theme === "dark" ? "🌙" : "☀️"; 
        try { localStorage.setItem(CONFIG.THEME_KEY, theme); } catch (error) {} 
    } 
 
    function loadTheme() { 
        try { 
            const saved = localStorage.getItem(CONFIG.THEME_KEY); 
            if (saved === "dark" || saved === "light") { setTheme(saved); return; } 
        } catch (error) {} 
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) setTheme("light"); 
        else setTheme("dark"); 
    } 
 
    function toggleTheme() { setTheme(state.theme === "dark" ? "light" : "dark"); } 
 
    function toggleSidebar() { 
        state.isSidebarOpen = !state.isSidebarOpen; 
        DOM.sidebar?.classList.toggle("open", state.isSidebarOpen); 
        DOM.sidebarOverlay?.classList.toggle("active", state.isSidebarOpen); 
        document.body.style.overflow = state.isSidebarOpen ? "hidden" : ""; 
    } 
 
    function resetView(focusSearch = false) { 
        state.filteredGames = [...state.allGames]; 
        state.currentCategory = "all"; 
        state.searchQuery = ""; 
        state.isSearching = false; 
        if (DOM.searchInput) DOM.searchInput.value = ""; 
        if (DOM.clearSearch) DOM.clearSearch.classList.remove("visible"); 
        if (DOM.newGamesSection) DOM.newGamesSection.style.display = ""; 
        renderCategories(); 
        renderPopularGames(); 
        renderNewGames(); 
        if (focusSearch && DOM.searchInput) DOM.searchInput.focus(); 
    } 
 
    function setupEventListeners() { 
        if (DOM.searchForm) { 
            DOM.searchForm.addEventListener("submit", event => { 
                event.preventDefault(); 
                handleSearch(DOM.searchInput ? DOM.searchInput.value : ""); 
            }); 
        } 
        if (DOM.searchInput) DOM.searchInput.addEventListener("input", event => handleSearch(event.target.value)); 
        if (DOM.clearSearch) DOM.clearSearch.addEventListener("click", clearSearch); 
        if (DOM.themeToggle) DOM.themeToggle.addEventListener("click", toggleTheme); 
        if (DOM.menuButton) DOM.menuButton.addEventListener("click", toggleSidebar); 
        if (DOM.sidebarOverlay) DOM.sidebarOverlay.addEventListener("click", toggleSidebar); 
        if (DOM.languageButton) { 
            DOM.languageButton.addEventListener("click", event => { 
                event.stopPropagation(); 
                if (DOM.languageDropdown) DOM.languageDropdown.hidden = !DOM.languageDropdown.hidden; 
            }); 
        } 
        DOM.languageOptions.forEach(option => { 
            option.addEventListener("click", () => setLanguage(option.dataset.language)); 
        }); 
        if (DOM.heroPlayButton) { 
            DOM.heroPlayButton.addEventListener("click", () => { 
                const game = getFeaturedGame(); 
                if (game) playGame(game.id); 
            }); 
        } 
        if (DOM.heroRandomButton) DOM.heroRandomButton.addEventListener("click", playRandomGame); 
    } 
 
    async function init() { 
        loadTheme(); 
        loadLanguage(); 
        loadFavorites(); 
        applyTranslations(); 
        setupEventListeners(); 
        await loadGames(); 
        applyTranslations(); 
    } 
 
    init(); 
});
         
