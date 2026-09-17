const SYSTEM_THEMES = {
    cyber: {
        id: 'cyber',
        name: 'Cyber',
        fontPrimary: "'JetBrains Mono', monospace",
        desc: { en: "Default developer pro aesthetics.", ru: "Базовый стиль для разработчиков." },
        icon: "💻",
        isPro: false,
        cssVars: { "--color-brand-light": "#0891B2", "--color-brand-dark": "#06B6D4", "--color-base-light": "#FAFAFA", "--color-base-dark": "#09090B", "--color-panel-light": "#ffffff", "--color-panel-dark": "#121214", "--color-border-light": "#d4d4d8", "--color-border-dark": "#27272a" },
        customCss: `
            body { background-image: linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px); background-size: 20px 20px; }
            .dark body { background-image: linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px); }
        `,
        locales: { en: {}, ru: {} }
    },
    royal: {
        id: 'royal',
        name: 'Royal',
        fontPrimary: "'Georgia', serif",
        desc: { en: "Medieval parchment, wax seals, and epic quests.", ru: "Средневековые пергаменты, сургучные печати и эпичные квесты." },
        icon: "👑",
        isPro: true,
        cssVars: { "--color-brand-light": "#8B0000", "--color-brand-dark": "#D4AF37", "--color-base-light": "#FDFBF7", "--color-base-dark": "#1A120B", "--color-panel-light": "#F5EEDB", "--color-panel-dark": "#2A1D12", "--color-border-light": "#D9CBB0", "--color-border-dark": "#3D2B1F" },
        customCss: `body { background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100" height="100" filter="url(%23noise)" opacity="0.05"/></svg>'); }`,
        locales: {
            en: { "dash_subtitle_main": "Kingdom Ledger", "btn_deploy": "Issue Decree", "task_ph": "Inscribe your quest...", "btn_logs": "Chronicles", "macro_title": "EPIC QUESTS", "quad_1": "DRAGON THREAT [SEV-0]", "quad_2": "KINGDOM CORE [SEV-1]", "quad_3": "PEASANT WORK [SEV-2]", "quad_4": "TAVERN RUMORS [SEV-3]", "archived": "Dusty Tomes", "empty_tasks": "The realm is peaceful", "lbl_macro": "Epic", "btn_init_macro": "Declare Campaign" },
            ru: { "dash_subtitle_main": "Королевская Летопись", "btn_deploy": "Издать Указ", "task_ph": "Впишите деяние в пергамент...", "btn_logs": "Летопись", "macro_title": "ВЕЛИКИЕ СВЕРШЕНИЯ", "quad_1": "УГРОЗА ДРАКОНА [SEV-0]", "quad_2": "ФУНДАМЕНТ ЗАМКА [SEV-1]", "quad_3": "КРЕСТЬЯНСКИЙ ТРУД [SEV-2]", "quad_4": "СЛУХИ ИЗ ТРАКТИРА [SEV-3]", "archived": "Пыльные фолианты", "empty_tasks": "В королевстве штиль", "lbl_macro": "Эпос", "btn_init_macro": "Огласить Поход" }
        }
    },
    brutal: {
        id: 'brutal',
        name: 'NeoBrutal',
        fontPrimary: "'Inter', sans-serif",
        desc: { en: "High contrast, sharp edges, pure aggressive action.", ru: "Высокий контраст, острые углы, агрессивное действие." },
        icon: "💥",
        isPro: true,
        cssVars: { "--color-brand-light": "#FF3366", "--color-brand-dark": "#00FFCC", "--color-base-light": "#E0E722", "--color-base-dark": "#121212", "--color-panel-light": "#FFFFFF", "--color-panel-dark": "#000000", "--color-border-light": "#000000", "--color-border-dark": "#E0E722" },
        customCss: `
            body { background-image: none !important; }
            .rounded, .rounded-md, .rounded-lg, .rounded-sm, .rounded-full { border-radius: 0px !important; }
            .border, .border-2, .border-b, .border-t { border-width: 3px !important; }
            .shadow-sm, .shadow-md, .shadow-lg, .shadow-2xl, .shadow-xl { box-shadow: 6px 6px 0px var(--color-border-light) !important; }
            .dark .shadow-sm, .dark .shadow-md, .dark .shadow-lg, .dark .shadow-2xl, .dark .shadow-xl { box-shadow: 6px 6px 0px var(--color-border-dark) !important; }
            .hover-magnet:hover { transform: translate(-4px, -4px) !important; box-shadow: 10px 10px 0px var(--color-border-light) !important; }
            .dark .hover-magnet:hover { box-shadow: 10px 10px 0px var(--color-border-dark) !important; }
            .btn-press:active { transform: translate(4px, 4px) !important; box-shadow: 0px 0px 0px transparent !important; }
            .slider, .slider:before { border-radius: 0 !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "BRUTAL DASHBOARD", "btn_deploy": "EXECUTE", "task_ph": "What needs to be crushed?...", "btn_logs": "DUMP", "macro_title": "BIG MOVES", "quad_1": "DO IT NOW [0]", "quad_2": "LEVEL UP [1]", "quad_3": "GRIND [2]", "quad_4": "TRASH [3]", "archived": "GRAVEYARD", "empty_tasks": "NOTHING. GO TOUCH GRASS.", "lbl_macro": "GIGA", "btn_init_macro": "START BIG PROJECT" },
            ru: { "dash_subtitle_main": "ЖЕСТКИЙ ДАШБОРД", "btn_deploy": "ЗАДЕПЛОИТЬ", "task_ph": "Что будем уничтожать?...", "btn_logs": "ДАМП", "macro_title": "БАЗА", "quad_1": "ГОРИТ [0]", "quad_2": "КАЧ [1]", "quad_3": "ГРИНД [2]", "quad_4": "МУСОРКА [3]", "archived": "КЛАДБИЩЕ", "empty_tasks": "ПУСТО. ИДИ ПОТРОГАЙ ТРАВУ.", "lbl_macro": "ГИГА", "btn_init_macro": "НОВЫЙ ГИГА-ПРОЕКТ" }
        }
    },
    stalker: {
        id: 'stalker',
        name: 'S.T.A.L.K.E.R. PDA',
        fontPrimary: "'Courier New', Courier, monospace",
        desc: { en: "Zone PDA network. Anomalies, radiation, and artifacts.", ru: "Сеть ПДА Зоны. Аномалии, радиация и хабар." },
        icon: "☢️",
        isPro: true,
        cssVars: {
            "--color-brand-light": "#89a832", "--color-brand-dark": "#89a832",
            "--color-base-light": "#2b2e24", "--color-base-dark": "#181a13",
            "--color-panel-light": "rgba(43, 46, 36, 0.8)", "--color-panel-dark": "rgba(24, 26, 19, 0.8)",
            "--color-border-light": "#4a5232", "--color-border-dark": "#323820"
        },
        customCss: `
            /* Эффект старого экрана ПДА (scanlines) */
            body { background-color: #181a13 !important; background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 4px) !important; color: #89a832 !important; }
            /* Грязные и грубые рамки */
            .bg-panel-light, .dark\\:bg-panel-dark, .tech-card-task, #templatesDropdown, .theme-card { border-radius: 4px !important; border: 2px solid var(--color-border-dark) !important; box-shadow: inset 0 0 15px rgba(0,0,0,0.8) !important; }
            h1, h2, h3 { color: #a4c246 !important; text-transform: uppercase !important; }
            .btn-press { border-radius: 2px !important; background: #26291d !important; border: 1px solid #4a5232 !important; color: #89a832 !important; }
            .btn-press:hover { background: #4a5232 !important; color: #181a13 !important; }
            .text-zinc-900, .dark\\:text-zinc-100, .text-zinc-600, .text-zinc-500, .text-zinc-700, .text-zinc-400 { color: #768f29 !important; }
            input[type="text"], input[type="time"], select { background: rgba(0,0,0,0.5) !important; border: 1px solid #4a5232 !important; color: #89a832 !important; border-radius: 2px !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "PDA NETWORK v2.0", "macro_title": "GLOBAL MISSIONS", "quad_1": "BLOWOUT [0]", "quad_2": "ARTIFACTS [1]", "quad_3": "MUTANTS [2]", "quad_4": "ANOMALIES [3]", "empty_tasks": "No active signals.", "lbl_macro": "Target", "btn_init_macro": "Add Marker", "archived": "Completed Quests" },
            ru: { "dash_subtitle_main": "СЕТЬ ПДА v2.0", "macro_title": "ГЛОБАЛЬНЫЕ ЦЕЛИ", "quad_1": "ВЫБРОС [0]", "quad_2": "АРТЕФАКТЫ [1]", "quad_3": "МУТАНТЫ [2]", "quad_4": "АНОМАЛИИ [3]", "empty_tasks": "Сигналов нет.", "lbl_macro": "Цель", "btn_init_macro": "Поставить метку", "archived": "Сданный хабар" }
        }
    },
    nasa: {
        id: 'nasa',
        name: 'AeroSpace',
        fontPrimary: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        desc: { en: "Aeronautics dashboard. High contrast, precise data.", ru: "Телеметрия шаттла. Прицелы, белый пластик и космос." },
        icon: "🚀",
        isPro: true,
        cssVars: {
            "--color-brand-light": "#FC3D21", "--color-brand-dark": "#FC3D21", 
            "--color-base-light": "#F1F5F9", "--color-base-dark": "#05050A", 
            "--color-panel-light": "#FFFFFF", "--color-panel-dark": "#0F111A",
            "--color-border-light": "#CBD5E1", "--color-border-dark": "#1E293B"
        },
        customCss: `
            /* Светлая тема: Обшивка шаттла, стерильная чистота */
            body { background-color: var(--color-base-light) !important; background-image: radial-gradient(circle at 50% 50%, rgba(0,0,0,0.03) 2px, transparent 2px) !important; background-size: 40px 40px !important; }
            .bg-panel-light, .theme-card, .tech-card-task, #templatesDropdown { 
                border-radius: 0px !important; 
                border: 1px solid var(--color-border-light) !important; 
                box-shadow: none !important; 
                position: relative; 
            }
            /* Прицелы по углам (Светлая) */
            .bg-panel-light::before, .bg-panel-light::after, .tech-card-task::before, .tech-card-task::after { content: ''; position: absolute; width: 15px; height: 15px; border: 2px solid var(--color-brand-light); opacity: 0.8; pointer-events: none; }
            .bg-panel-light::before, .tech-card-task::before { top: -1px; left: -1px; border-right: none; border-bottom: none; }
            .bg-panel-light::after, .tech-card-task::after { bottom: -1px; right: -1px; border-left: none; border-top: none; }

            /* Темная тема: Открытый космос, красная телеметрия */
            .dark body { background-color: var(--color-base-dark) !important; background-image: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 2px, transparent 2px) !important; }
            .dark .bg-panel-light, .dark .theme-card, .dark .tech-card-task, .dark #templatesDropdown, .dark .dark\\:bg-panel-dark { 
                background-color: var(--color-panel-dark) !important;
                border: 1px solid var(--color-border-dark) !important;
            }
            /* Прицелы (Темная) */
            .dark .bg-panel-light::before, .dark .bg-panel-light::after, .dark .tech-card-task::before, .dark .tech-card-task::after { border-color: var(--color-brand-dark); }
            
            h1, h2, h3 { font-weight: 900 !important; text-transform: uppercase !important; letter-spacing: 0.15em !important; }
            .btn-press { border-radius: 0px !important; border: 2px solid var(--color-brand-light) !important; text-transform: uppercase !important; font-weight: 800 !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "HOUSTON COMMAND", "macro_title": "ORBITAL LAUNCHES", "quad_1": "ABORT SEQUENCE [Q1]", "quad_2": "FLIGHT PLAN [Q2]", "quad_3": "SYSTEM CHECK [Q3]", "quad_4": "JETTISON [Q4]", "empty_tasks": "Telemetry normal. Awaiting commands.", "lbl_macro": "Mission", "btn_init_macro": "Init Mission", "archived": "Splashdown" },
            ru: { "dash_subtitle_main": "ЦУП ХЬЮСТОН", "macro_title": "ОРБИТАЛЬНЫЕ ЗАПУСКИ", "quad_1": "АВАРИЙНЫЙ СБРОС [Q1]", "quad_2": "ПЛАН ПОЛЕТА [Q2]", "quad_3": "ПРОВЕРКА СИСТЕМ [Q3]", "quad_4": "ОТСТРЕЛ СТУПЕНИ [Q4]", "empty_tasks": "Телеметрия в норме. Жду команд.", "lbl_macro": "Миссия", "btn_init_macro": "Запуск Миссии", "archived": "Приводнение" }
        }
    },

    vicecity: {
        id: 'vicecity',
        name: 'Ocean Drive 86',
        fontPrimary: "'Arial', sans-serif",
        desc: { en: "Neon lights, sunset boulevards and 80s synthwave.", ru: "Вайб 80-х. Пальмы на закате днем, неоновые вывески ночью." },
        icon: "🌴",
        isPro: true,
        cssVars: {
            "--color-brand-light": "#FF007F", "--color-brand-dark": "#00FFFF",
            "--color-base-light": "#FFE4E1", "--color-base-dark": "#0F001A",
            "--color-panel-light": "rgba(255, 255, 255, 0.8)", "--color-panel-dark": "rgba(15, 0, 26, 0.7)",
            "--color-border-light": "#FF69B4", "--color-border-dark": "#FF007F"
        },
        customCss: `
            /* Светлая тема: Жаркий Майами, розово-оранжевый закат */
            body { 
                background: linear-gradient(180deg, #FFE4E1 0%, #FFB6C1 50%, #FF8C00 100%) !important; 
                background-attachment: fixed !important; 
            }
            .bg-panel-light, .theme-card, .tech-card-task, #templatesDropdown { 
                border-radius: 12px !important; 
                border: 2px solid var(--color-border-light) !important; 
                box-shadow: 0 10px 20px rgba(255, 105, 180, 0.2) !important; 
                backdrop-filter: blur(10px) !important; 
            }
            h1, h2, h3 { color: #FF007F !important; font-style: italic !important; font-weight: 900 !important; letter-spacing: 2px !important; text-transform: uppercase !important; text-shadow: 2px 2px 0px #FFFFFF !important; }
            
            /* Темная тема: Неоновая ночь, синтвейв */
            .dark body { 
                background: linear-gradient(180deg, #0F001A 0%, #4B0082 50%, #000000 100%) !important; 
                background-attachment: fixed !important; 
            }
            .dark .bg-panel-light, .dark .theme-card, .dark .tech-card-task, .dark #templatesDropdown, .dark .dark\\:bg-panel-dark { 
                background: var(--color-panel-dark) !important;
                border: 2px solid var(--color-border-dark) !important; 
                box-shadow: 0 0 15px rgba(255, 0, 127, 0.4), inset 0 0 10px rgba(0, 255, 255, 0.1) !important; 
            }
            .dark h1, .dark h2, .dark h3 { color: #00FFFF !important; text-shadow: 2px 2px 0px #FF007F, 0 0 10px #00FFFF !important; }
            
            .btn-press { border-radius: 8px !important; font-weight: 900 !important; text-transform: uppercase !important; font-style: italic !important; border-width: 2px !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "OCEAN BEACH VCPD", "macro_title": "EMPIRE BUSINESS", "quad_1": "WANTED LEVEL 5 🚨", "quad_2": "REAL ESTATE 🏢", "quad_3": "PAYPHONE MISSIONS 📞", "quad_4": "WASTED 💀", "empty_tasks": "Take a cruise down Ocean Drive.", "lbl_macro": "Asset", "btn_init_macro": "Buy Asset", "archived": "Busted" },
            ru: { "dash_subtitle_main": "ПОЛИЦИЯ ВАЙС СИТИ", "macro_title": "БИЗНЕС ИМПЕРИЯ", "quad_1": "5 ЗВЕЗД РОЗЫСКА 🚨", "quad_2": "НЕДВИЖИМОСТЬ 🏢", "quad_3": "ТЕЛЕФОННЫЕ БУДКИ 📞", "quad_4": "ПОТРАЧЕНО 💀", "empty_tasks": "Прокатись по Оушен-Драйв.", "lbl_macro": "Бизнес", "btn_init_macro": "Купить Актив", "archived": "Арестовано" }
        }
    },

    stalker: {
        id: 'stalker',
        name: 'Zone PDA',
        fontPrimary: "'Courier New', Courier, monospace",
        desc: { en: "Zone PDA network. Anomalies, radiation, and artifacts.", ru: "ПДА Сталкера. Брезент днем, радиоактивный фосфор ночью." },
        icon: "☢️",
        isPro: true,
        cssVars: {
            "--color-brand-light": "#4A5232", "--color-brand-dark": "#89A832",
            "--color-base-light": "#D4D0C8", "--color-base-dark": "#141510",
            "--color-panel-light": "#EBE9E4", "--color-panel-dark": "#1D1E17",
            "--color-border-light": "#A3A095", "--color-border-dark": "#2A2D22"
        },
        customCss: `
            /* Светлая тема: Грязный брезент, армейский стиль, ржавчина */
            body { 
                background-color: var(--color-base-light) !important; 
                background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="%23D4D0C8"/><path d="M0 0L4 4M4 0L0 4" stroke="%23C2BEB4" stroke-width="1"/></svg>') !important; 
            }
            .bg-panel-light, .theme-card, .tech-card-task, #templatesDropdown { 
                border-radius: 2px !important; 
                border: 2px solid var(--color-border-light) !important; 
                box-shadow: inset 0 0 10px rgba(0,0,0,0.05), 4px 4px 0px rgba(0,0,0,0.1) !important; 
            }
            h1, h2, h3 { color: #323624 !important; font-weight: bold !important; text-transform: uppercase !important; }
            
            /* Темная тема: Экран старого ПДА, зеленый фосфор, сканлайны */
            .dark body { 
                background-color: var(--color-base-dark) !important; 
                background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 4px) !important; 
                color: var(--color-brand-dark) !important; 
            }
            .dark .bg-panel-light, .dark .theme-card, .dark .tech-card-task, .dark #templatesDropdown, .dark .dark\\:bg-panel-dark { 
                background-color: var(--color-panel-dark) !important;
                border: 2px solid var(--color-border-dark) !important; 
                box-shadow: inset 0 0 20px rgba(0,0,0,0.8), 0 0 10px rgba(137, 168, 50, 0.05) !important; 
            }
            .dark h1, .dark h2, .dark h3, .dark .text-zinc-900, .dark .text-zinc-100, .dark .text-zinc-500 { 
                color: var(--color-brand-dark) !important; text-shadow: 0 0 4px rgba(137, 168, 50, 0.4) !important; 
            }
            
            .btn-press { border-radius: 0px !important; font-weight: bold !important; text-transform: uppercase !important; border-width: 2px !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "PDA NETWORK v2.0", "macro_title": "GLOBAL MISSIONS", "quad_1": "BLOWOUT [0]", "quad_2": "ARTIFACTS [1]", "quad_3": "MUTANTS [2]", "quad_4": "ANOMALIES [3]", "empty_tasks": "No active signals.", "lbl_macro": "Target", "btn_init_macro": "Add Marker", "archived": "Completed Quests" },
            ru: { "dash_subtitle_main": "СЕТЬ ПДА v2.0", "macro_title": "ГЛОБАЛЬНЫЕ ЦЕЛИ", "quad_1": "ВЫБРОС [Q1]", "quad_2": "АРТЕФАКТЫ [Q2]", "quad_3": "МУТАНТЫ [Q3]", "quad_4": "АНОМАЛИИ [Q4]", "empty_tasks": "Сигналов нет.", "lbl_macro": "Цель", "btn_init_macro": "Поставить метку", "archived": "Сданный хабар" }
        }
    },

    dota: {
        id: 'dota',
        name: 'Aegis',
        fontPrimary: "'Georgia', serif",
        desc: { en: "Radiant vs Dire. MOBA aesthetics and ancient battles.", ru: "Битва Древних. Свет (Radiant) днем и Тьма (Dire) ночью." },
        icon: "🛡️",
        isPro: true,
        cssVars: {
            /* Переменные для Светлой темы (Свет/Radiant) - Зелень, золото, камень */
            "--color-brand-light": "#2E7D32", "--color-brand-dark": "#E74C3C", 
            "--color-base-light": "#E8F5E9", "--color-base-dark": "#140C0C", 
            "--color-panel-light": "#FFFFFF", "--color-panel-dark": "#231515",
            "--color-border-light": "#A5D6A7", "--color-border-dark": "#4A1C1C" 
        },
        customCss: `
            /* Светлая тема (Radiant): Солнечный свет, зелень, белые руины */
            body { 
                background: radial-gradient(circle at 50% 0%, #E8F5E9 0%, #C8E6C9 100%) !important; 
                background-attachment: fixed !important; 
            }
            .bg-panel-light, .theme-card, .tech-card-task, #templatesDropdown { 
                border-radius: 4px !important; 
                border: 2px solid var(--color-border-light) !important; 
                box-shadow: 0 4px 12px rgba(46, 125, 50, 0.1), inset 0 0 10px rgba(255,255,255,0.8) !important; 
            }
            h1, h2, h3 { font-weight: 700 !important; color: #1B5E20 !important; text-transform: uppercase !important; letter-spacing: 1px !important; }
            
            /* Темная тема (Dire): Пепел, лава, обсидиан, красное свечение */
            .dark body { 
                background: radial-gradient(circle at 50% 100%, #2A0808 0%, #140C0C 80%) !important; 
                background-attachment: fixed !important; 
            }
            .dark .bg-panel-light, .dark .theme-card, .dark .tech-card-task, .dark #templatesDropdown, .dark .dark\\:bg-panel-dark { 
                background-color: var(--color-panel-dark) !important;
                border: 1px solid var(--color-border-dark) !important; 
                box-shadow: 0 4px 15px rgba(0,0,0,0.8), inset 0 0 15px rgba(231, 76, 60, 0.05) !important; 
            }
            .dark h1, .dark h2, .dark h3 { color: #E74C3C !important; text-shadow: 0 0 8px rgba(231, 76, 60, 0.4) !important; }
            
            .btn-press { border-radius: 2px !important; text-transform: uppercase !important; font-weight: bold !important; border-width: 2px !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "BATTLE LOG", "macro_title": "ANCIENTS", "quad_1": "TEAMFIGHT ⚔️ [Q1]", "quad_2": "FARMING 💰 [Q2]", "quad_3": "WARDING 👁️ [Q3]", "quad_4": "FEEDING 💀 [Q4]", "empty_tasks": "Waiting for creeps to spawn.", "lbl_macro": "Objective", "btn_init_macro": "Claim Aegis", "archived": "Respawned" },
            ru: { "dash_subtitle_main": "ЖУРНАЛ БИТВЫ", "macro_title": "ТРОНЫ", "quad_1": "ЗАМЕС ⚔️ [Q1]", "quad_2": "ФАРМ 💰 [Q2]", "quad_3": "ВАРДИНГ 👁️ [Q3]", "quad_4": "ФИД 💀 [Q4]", "empty_tasks": "Ждем спавна крипов.", "lbl_macro": "Цель", "btn_init_macro": "Забрать Аегис", "archived": "На фонтане" }
        }
    },
    night_drive: {
        id: 'night_drive',
        name: 'Night Highway',
        fontPrimary: "'Inter', sans-serif",
        desc: { en: "Textured dashboard plastic and amber instrument glows.", ru: "Текстура приборной панели, ночная трасса и янтарная подсветка." },
        icon: "🛣️",
        isPro: true,
        cssVars: {
            "--color-brand-light": "#FF8C00", "--color-brand-dark": "#FFA500",
            "--color-base-light": "#1C1C1C", "--color-base-dark": "#0A0A0A",
            "--color-panel-light": "linear-gradient(145deg, #232323, #1a1a1a)", "--color-panel-dark": "linear-gradient(145deg, #121212, #080808)",
            "--color-border-light": "#333333", "--color-border-dark": "#1A1A1A"
        },
        customCss: `
            /* Эффект текстуры автомобильного пластика/кожи */
            body { 
                background-color: var(--color-base-light) !important;
                background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><rect width="4" height="4" fill="%231C1C1C"/><path d="M0 0L4 4M4 0L0 4" stroke="%23222" stroke-width="1"/></svg>') !important;
                color: #E0E0E0 !important;
            }
            .dark body { background-color: var(--color-base-dark) !important; }
            
            /* Изогнутые панели с эффектом циферблатов (Inner Shadows) */
            .bg-panel-light, .dark\\:bg-panel-dark, .tech-card-task, #templatesDropdown, .theme-card {
                border-radius: 12px !important;
                border: 1px solid var(--color-border-light) !important;
                background: var(--color-panel-light) !important;
                box-shadow: inset 0 2px 10px rgba(0,0,0,0.5), 0 4px 15px rgba(0,0,0,0.8) !important;
            }
            
            /* Янтарное свечение текста (Amber Glow) */
            h1, h2, h3, .text-brand-light, .dark\\:text-brand-dark { 
                color: var(--color-brand-light) !important; 
                text-shadow: 0 0 8px rgba(255, 140, 0, 0.4) !important; 
                font-weight: 800 !important; 
            }
            
            /* Кнопки как тумблеры на торпеде */
            .btn-press { border-radius: 8px !important; border: 1px solid var(--color-brand-light) !important; background: rgba(255,140,0,0.05) !important; color: var(--color-brand-light) !important; }
            .btn-press:hover { background: var(--color-brand-light) !important; color: #000 !important; box-shadow: 0 0 15px var(--color-brand-light) !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "DASHBOARD LOG", "macro_title": "LONG HAULS", "quad_1": "ENGINE CHECK ⚠️", "quad_2": "CRUISE CONTROL 🛣️", "quad_3": "REFUEL ⛽", "quad_4": "REST STOP ☕", "empty_tasks": "ROAD IS CLEAR.", "lbl_macro": "Route", "btn_init_macro": "Set GPS" },
            ru: { "dash_subtitle_main": "ПРИБОРНАЯ ПАНЕЛЬ", "macro_title": "ДАЛЬНИЕ РЕЙСЫ", "quad_1": "ЧЕК ДВИГАТЕЛЯ ⚠️", "quad_2": "КРУИЗ-КОНТРОЛЬ 🛣️", "quad_3": "ДОЗАПРАВКА ⛽", "quad_4": "СТОЯНКА ☕", "empty_tasks": "ТРАССА ПУСТА.", "lbl_macro": "Маршрут", "btn_init_macro": "Настроить GPS" }
        }
    },
    cosmic_voyager: {
    id: 'cosmic_voyager',
    name: 'Cosmic Voyager',
    fontPrimary: "'Space Grotesk', sans-serif",
    desc: { en: "Deep space voyage theme with nebula glow", ru: "Тема дальнего космоса с сиянием туманностей" },
    icon: "🚀",
    isPro: true,
    cssVars: {
        "--color-brand-light": "#7c3aed", "--color-brand-dark": "#a78bfa",
        "--color-base-light": "#eef2ff", "--color-base-dark": "#030008",
        "--color-panel-light": "rgba(255, 255, 255, 0.6)", "--color-panel-dark": "rgba(10, 4, 25, 0.7)",
        "--color-border-light": "rgba(124, 58, 237, 0.3)", "--color-border-dark": "rgba(167, 139, 250, 0.2)"
    },
    customCss: `
        /* СВЕТЛАЯ ТЕМА: Стратосфера */
        body {
            background: radial-gradient(circle at top, #e0e7ff 0%, #ede9fe 50%, #f3e8ff 100%) !important;
            background-attachment: fixed !important;
        }
        /* ТЕМНАЯ ТЕМА: Открытый космос с туманностями */
        .dark body {
            background-color: #030008 !important;
            background-image:
                radial-gradient(circle at 15% 50%, rgba(109, 40, 217, 0.15) 0%, transparent 40%),
                radial-gradient(circle at 85% 30%, rgba(56, 189, 248, 0.15) 0%, transparent 40%) !important;
            background-attachment: fixed !important;
        }

        /* Эффект стеклянного иллюминатора корабля */
        .bg-panel-light, .dark\\:bg-panel-dark, .tech-card-task, #templatesDropdown, .theme-card {
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
            border-radius: 16px !important;
            border: 1px solid var(--color-border-light) !important;
            box-shadow: 0 8px 32px rgba(109, 40, 217, 0.1) !important;
        }
        .dark .bg-panel-light, .dark .dark\\:bg-panel-dark, .dark .tech-card-task, .dark #templatesDropdown, .dark .theme-card {
            border: 1px solid var(--color-border-dark) !important;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8), inset 0 0 15px rgba(139, 92, 246, 0.1) !important;
        }

        /* Инпуты */
        input[type="text"], input[type="time"], select {
            background: rgba(255, 255, 255, 0.8) !important;
            border: 1px solid var(--color-border-light) !important;
            border-radius: 12px !important;
            padding: 0.8rem 1.5rem !important;
        }
        .dark input[type="text"], .dark input[type="time"], .dark select {
            background: rgba(0, 0, 0, 0.4) !important;
            border: 1px solid var(--color-border-dark) !important;
        }

        /* Космическая типографика */
        h1, h2, h3 { font-weight: 800 !important; letter-spacing: 0.05em !important; text-transform: uppercase !important; }
        .btn-press { border-radius: 12px !important; font-weight: 900 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; }
    `,
        locales: {
            en: {
                "dash_subtitle_main": "Mission Control · Ready for launch",
                "macro_title": "Galactic Objectives",
                "quad_1": "Nebula [Q1]",
                "quad_2": "Starlight [Q2]",
                "quad_3": "Orbit [Q3]",
                "quad_4": "Void [Q4]",
                "empty_tasks": "No signals detected in this sector...",
                "lbl_macro": "Star log entry",
                "btn_init_macro": "Initiate launch",
                "archived": "Docked in the hangar"
            },
            ru: {
                "dash_subtitle_main": "Центр управления · Готовность к старту",
                "macro_title": "Галактические цели",
                "quad_1": "Туманность [Q1]",
                "quad_2": "Сияние [Q2]",
                "quad_3": "Орбита [Q3]",
                "quad_4": "Пустота [Q4]",
                "empty_tasks": "В этом секторе не обнаружено сигналов...",
                "lbl_macro": "Звёздный журнал",
                "btn_init_macro": "Запустить старт",
                "archived": "В ангаре"
            }
        }
    },
    darkroom: {
        id: 'darkroom',
        name: 'Darkroom Exposure',
        fontPrimary: "'Courier New', Courier, monospace",
        desc: { en: "Film grain, safelight reds, and focus brackets.", ru: "Пленочное зерно, красный свет проявочной и рамки фокуса." },
        icon: "🎞️",
        isPro: true,
        cssVars: {
            "--color-brand-light": "#E50914", "--color-brand-dark": "#FF1E1E",
            "--color-base-light": "#180A0A", "--color-base-dark": "#0A0000",
            "--color-panel-light": "rgba(30, 10, 10, 0.8)", "--color-panel-dark": "rgba(15, 0, 0, 0.9)",
            "--color-border-light": "#4A1515", "--color-border-dark": "#2A0A0A"
        },
        customCss: `
            /* Тяжелое пленочное зерно и виньетка */
            body { 
                background-color: var(--color-base-light) !important;
                background-image: radial-gradient(circle, transparent 50%, rgba(0,0,0,0.8) 150%), url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)" opacity="0.06"/></svg>') !important;
                color: #D3D3D3 !important;
            }
            .dark body { background-color: var(--color-base-dark) !important; }
            
            /* Панели размыты, как вне фокуса (Depth of Field) */
            .bg-panel-light, .dark\\:bg-panel-dark, .tech-card-task, #templatesDropdown, .theme-card {
                border-radius: 2px !important;
                border: 1px solid var(--color-border-light) !important;
                backdrop-filter: blur(4px) !important;
            }
            
            /* Эффект брекетинга фокуса при наведении [  ] */
            .tech-card-task { position: relative; transition: all 0.3s ease; }
            .tech-card-task:hover::before { content: '['; position: absolute; left: -15px; top: 50%; transform: translateY(-50%); font-size: 24px; color: var(--color-brand-light); font-weight: bold; }
            .tech-card-task:hover::after { content: ']'; position: absolute; right: -15px; top: 50%; transform: translateY(-50%); font-size: 24px; color: var(--color-brand-light); font-weight: bold; }
            
            h1, h2, h3 { font-weight: bold !important; color: var(--color-brand-light) !important; letter-spacing: 0.1em !important; }
            
            input[type="text"], select { background: rgba(0,0,0,0.8) !important; border: 1px solid var(--color-brand-light) !important; color: #FFF !important; border-radius: 2px !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "EXPOSURE LOG", "macro_title": "PHOTO SERIES", "quad_1": "OVEREXPOSED ☀️", "quad_2": "IN FOCUS 🎯", "quad_3": "LENS BLUR 🌫️", "quad_4": "SCRAP FILM 🎞️", "empty_tasks": "AWAITING DEVELOPER.", "lbl_macro": "Roll", "btn_init_macro": "Load Film" },
            ru: { "dash_subtitle_main": "ЖУРНАЛ ПРОЯВКИ", "macro_title": "ФОТОСЕРИИ", "quad_1": "ПЕРЕСВЕТ ☀️ [Q1]", "quad_2": "В ФОКУСЕ 🎯 [Q2]", "quad_3": "БЛЮР ЛИНЗЫ 🌫️ [Q3]", "quad_4": "БРАК ПЛЕНКИ 🎞️ [Q4]", "empty_tasks": "ОЖИДАНИЕ ПРОЯВИТЕЛЯ.", "lbl_macro": "Катушка", "btn_init_macro": "Зарядить пленку" }
        }
    },
    dota: {
        id: 'dota',
        name: 'Aegis of Immortal',
        fontPrimary: "'Georgia', serif",
        desc: { en: "Radiant vs Dire. MOBA aesthetics and ancient battles.", ru: "Свет против Тьмы. Эстетика MOBA и битв древних." },
        icon: "🛡️",
        isPro: true,
        cssVars: {
            "--color-brand-light": "#B42529", "--color-brand-dark": "#E74C3C", 
            "--color-base-light": "#1B1F23", "--color-base-dark": "#111418", 
            "--color-panel-light": "#242A31", "--color-panel-dark": "#1A1E24",
            "--color-border-light": "#CBA365", "--color-border-dark": "#A5834F" 
        },
        customCss: `
            /* Фон как Туман Войны (Fog of War) */
            body { background: radial-gradient(circle at 50% 0%, #1a1e24 0%, #111418 100%) !important; background-attachment: fixed !important; }
            /* Рамки в стиле потускневшего золота */
            .bg-panel-light, .dark\\:bg-panel-dark, .tech-card-task, #templatesDropdown, .theme-card { border-radius: 4px !important; border: 1px solid var(--color-border-dark) !important; box-shadow: 0 4px 6px rgba(0,0,0,0.5), inset 0 0 10px rgba(203, 163, 101, 0.05) !important; }
            h1, h2, h3 { font-weight: 700 !important; color: #CBA365 !important; text-transform: uppercase !important; letter-spacing: 1px !important; text-shadow: 0 2px 4px rgba(0,0,0,0.8) !important; }
            /* Кнопки с градиентом и кроваво-красным ховером */
            .btn-press { background: linear-gradient(180deg, #242A31 0%, #1A1E24 100%) !important; border: 1px solid var(--color-border-dark) !important; color: #CBA365 !important; border-radius: 2px !important; text-transform: uppercase !important; box-shadow: 0 2px 4px rgba(0,0,0,0.5) !important; }
            .btn-press:hover { background: linear-gradient(180deg, #E74C3C 0%, #B42529 100%) !important; color: #FFF !important; border-color: #FFF !important; box-shadow: 0 0 15px rgba(231, 76, 60, 0.6) !important; }
            .text-zinc-900, .dark\\:text-zinc-100, .text-zinc-600, .text-zinc-500, .text-zinc-700, .text-zinc-400 { color: #A3B1C6 !important; }
            input[type="text"], input[type="time"], select { background: rgba(0,0,0,0.6) !important; border: 1px solid var(--color-border-dark) !important; color: #CBA365 !important; border-radius: 2px !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "BATTLE LOG", "macro_title": "ANCIENTS", "quad_1": "TEAMFIGHT ⚔️ [Q1]", "quad_2": "FARMING 💰 [Q2]", "quad_3": "WARDING 👁️ [Q3]", "quad_4": "FEEDING 💀 [Q4]", "empty_tasks": "Waiting for creeps to spawn.", "lbl_macro": "Objective", "btn_init_macro": "Claim Aegis", "archived": "Respawned" },
            ru: { "dash_subtitle_main": "ЖУРНАЛ БИТВЫ", "macro_title": "ТРОНЫ", "quad_1": "ЗАМЕС ⚔️ [Q1]", "quad_2": "ФАРМ 💰 [Q2]", "quad_3": "ВАРДИНГ 👁️ [Q3]", "quad_4": "ФИД 💀 [Q4]", "empty_tasks": "Ждем спавна крипов.", "lbl_macro": "Цель", "btn_init_macro": "Забрать Аегис", "archived": "На фонтане" }
        }
    },
    executive: {
        id: 'executive',
        name: 'Glass',
        fontPrimary: "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        desc: { en: "Aurora gradients, frosted glass panels, and absolute minimalism.", ru: "Мягкие цветовые ауры, матовое стекло и абсолютный минимализм." },
        icon: "🧊",
        isPro: true,
        cssVars: { "--color-brand-light": "#000000", "--color-brand-dark": "#ffffff", "--color-base-light": "#F1F5F9", "--color-base-dark": "#020617", "--color-panel-light": "rgba(255, 255, 255, 0.55)", "--color-panel-dark": "rgba(15, 23, 42, 0.55)", "--color-border-light": "rgba(255, 255, 255, 0.7)", "--color-border-dark": "rgba(255, 255, 255, 0.08)" },
        customCss: `
            body { 
                background-color: #f8fafc !important;
                background-image: radial-gradient(at 40% 20%, rgba(167, 139, 250, 0.4) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(96, 165, 250, 0.4) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(244, 114, 182, 0.4) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(52, 211, 153, 0.4) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(251, 191, 36, 0.4) 0px, transparent 50%), radial-gradient(at 80% 100%, rgba(129, 140, 248, 0.4) 0px, transparent 50%), radial-gradient(at 0% 0%, rgba(248, 113, 113, 0.4) 0px, transparent 50%) !important;
                background-attachment: fixed !important; 
            }
            .dark body { 
                background-color: #0f172a !important;
                background-image: radial-gradient(at 40% 20%, rgba(139, 92, 246, 0.25) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(59, 130, 246, 0.25) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(236, 72, 153, 0.25) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(16, 185, 129, 0.25) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(245, 158, 11, 0.25) 0px, transparent 50%), radial-gradient(at 80% 100%, rgba(99, 102, 241, 0.25) 0px, transparent 50%), radial-gradient(at 0% 0%, rgba(239, 68, 68, 0.25) 0px, transparent 50%) !important;
                background-attachment: fixed !important; 
            }
            .bg-panel-light, .dark\\:bg-panel-dark, .tech-card-task, #templatesDropdown, .theme-card {
                backdrop-filter: blur(40px) saturate(150%) !important; -webkit-backdrop-filter: blur(40px) saturate(150%) !important; border-radius: 20px !important; box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1) !important; border: 1px solid var(--color-border-light) !important;
            }
            .dark .bg-panel-light, .dark .dark\\:bg-panel-dark, .dark .tech-card-task, .dark #templatesDropdown, .dark .theme-card { box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5) !important; border: 1px solid var(--color-border-dark) !important; }
            input[type="text"], input[type="time"], select { background-color: rgba(255, 255, 255, 0.4) !important; backdrop-filter: blur(10px) !important; border-radius: 12px !important; border: 1px solid rgba(255, 255, 255, 0.8) !important; padding: 0.75rem 1.25rem !important; }
            .dark input[type="text"], .dark input[type="time"], .dark select { background-color: rgba(0, 0, 0, 0.2) !important; border: 1px solid rgba(255, 255, 255, 0.1) !important; }
            h1, h2, h3 { font-weight: 400 !important; letter-spacing: -0.03em !important; text-transform: none !important; }
            .uppercase { letter-spacing: 0.05em !important; }
            .btn-press { border-radius: 12px !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "Executive Workspace", "macro_title": "Strategic Initiatives", "quad_1": "IMMEDIATE ACTION [Q1]", "quad_2": "STRATEGIC GROWTH [Q2]", "quad_3": "DELEGATE [Q3]", "quad_4": "ELIMINATE [Q4]", "empty_tasks": "No action items.", "lbl_macro": "Initiative", "btn_init_macro": "New Initiative", "archived": "Completed Operations" },
            ru: { "dash_subtitle_main": "Рабочее пространство", "macro_title": "СТРАТЕГИЧЕСКИЕ ИНИЦИАТИВЫ", "quad_1": "СДЕЛАТЬ СЕЙЧАС [Q1]", "quad_2": "СТРАТЕГИЯ И РОСТ [Q2]", "quad_3": "ДЕЛЕГИРОВАТЬ [Q3]", "quad_4": "УДАЛИТЬ [Q4]", "empty_tasks": "Нет активных задач.", "lbl_macro": "Инициатива", "btn_init_macro": "Новая Инициатива", "archived": "Завершенные операции" }
        }
    },
    botanical: {
        id: 'botanical',
        name: 'Botanical',
        fontPrimary: "'Georgia', serif",
        desc: { en: "Earthy tones, soft greens, and natural tranquility.", ru: "Природные оттенки, мягкая зелень и абсолютное спокойствие." },
        icon: "🌿",
        isPro: true,
        cssVars: { 
            "--color-brand-light": "#2E7D32", "--color-brand-dark": "#81C784", 
            "--color-base-light": "#F1F8E9", "--color-base-dark": "#1B2614", 
            "--color-panel-light": "#FFFFFF", "--color-panel-dark": "#25351D", 
            "--color-border-light": "#DCEDC8", "--color-border-dark": "#334A27" 
        },
        customCss: `
            /* Новый паттерн с веточками и листьями */
            body { 
                background-image: url('data:image/svg+xml;utf8,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><path d="M30 60 L30 30" stroke="%2381C784" stroke-width="2" stroke-opacity="0.3" fill="none"/><path d="M30 45 C45 45 52 30 52 22 C37 22 30 30 30 45 Z" fill="%2381C784" fill-opacity="0.15"/><path d="M30 30 C15 30 8 15 8 7 C23 7 30 15 30 30 Z" fill="%2381C784" fill-opacity="0.15"/></svg>') !important; 
            }
            .dark body { 
                background-image: url('data:image/svg+xml;utf8,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><path d="M30 60 L30 30" stroke="%232E7D32" stroke-width="2" stroke-opacity="0.4" fill="none"/><path d="M30 45 C45 45 52 30 52 22 C37 22 30 30 30 45 Z" fill="%232E7D32" fill-opacity="0.2"/><path d="M30 30 C15 30 8 15 8 7 C23 7 30 15 30 30 Z" fill="%232E7D32" fill-opacity="0.2"/></svg>') !important; 
            }
            
            .rounded, .rounded-md, .rounded-lg, .rounded-xl { border-radius: 20px !important; }
            
            /* Смягченные природные тени */
            .shadow-sm, .shadow-md, .shadow-lg { box-shadow: 0 12px 30px -5px rgba(46, 125, 50, 0.08) !important; }
            .dark .shadow-sm, .dark .shadow-md, .dark .shadow-lg { box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.6) !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "Greenhouse", "macro_title": "GROWTH SEEDS", "quad_1": "WATER NOW [Q1]", "quad_2": "PLANT SEEDS [Q2]", "quad_3": "PRUNE [Q3]", "quad_4": "COMPOST [Q4]", "empty_tasks": "The garden is peaceful.", "lbl_macro": "Seed", "btn_init_macro": "Plant New Idea", "archived": "Harvested" },
            ru: { "dash_subtitle_main": "Оранжерея", "macro_title": "ТОЧКИ РОСТА", "quad_1": "ПОЛИТЬ СЕЙЧАС [Q1]", "quad_2": "ПОСАДИТЬ [Q2]", "quad_3": "ПОДРЕЗАТЬ [Q3]", "quad_4": "В КОМПОСТ [Q4]", "empty_tasks": "В саду порядок и покой.", "lbl_macro": "Росток", "btn_init_macro": "Посадить идею", "archived": "Собранный урожай" }
        }
    },
    neon: {
        id: 'neon',
        name: 'NeonPop',
        fontPrimary: "'Arial Black', 'Inter', sans-serif",
        desc: { en: "Acid colors, heavy shadows, and pure dopamine.", ru: "Кислотные цвета, жесткие тени и чистый дофамин." },
        icon: "🍭",
        isPro: true,
        cssVars: { "--color-brand-light": "#FF00FF", "--color-brand-dark": "#00FFFF", "--color-base-light": "#FFFF00", "--color-base-dark": "#1A0033", "--color-panel-light": "#FFFFFF", "--color-panel-dark": "#2D0066", "--color-border-light": "#000000", "--color-border-dark": "#FF00FF" },
        customCss: `
            body { background-image: radial-gradient(#FF00FF 2px, transparent 2px); background-size: 30px 30px; }
            .dark body { background-image: radial-gradient(#00FFFF 2px, transparent 2px); background-size: 30px 30px; }
            .rounded, .rounded-md, .rounded-lg, .rounded-xl { border-radius: 12px !important; }
            .border, .border-2, .border-b, .border-t { border-width: 4px !important; }
            .shadow-sm, .shadow-md, .shadow-lg, .shadow-2xl, .shadow-xl { box-shadow: 8px 8px 0px #000000 !important; }
            .dark .shadow-sm, .dark .shadow-md, .dark .shadow-lg, .dark .shadow-2xl, .dark .shadow-xl { box-shadow: 8px 8px 0px #00FFFF !important; }
            .hover-magnet:hover { transform: translate(-4px, -4px) !important; box-shadow: 12px 12px 0px #000000 !important; }
            .dark .hover-magnet:hover { box-shadow: 12px 12px 0px #00FFFF !important; }
            h1, h2, h3 { text-transform: uppercase !important; font-style: italic; }
        `,
        locales: {
            en: { "dash_subtitle_main": "NEON RUSH", "macro_title": "LEVEL UP", "quad_1": "HOT 🔥 [Q1]", "quad_2": "COOL 🧊 [Q2]", "quad_3": "MEH 🥱 [Q3]", "quad_4": "TRASH 🗑️ [Q4]", "empty_tasks": "NOTHING HERE. BOOOORING.", "lbl_macro": "VIBE", "btn_init_macro": "NEW VIBE", "archived": "HALL OF FAME" },
            ru: { "dash_subtitle_main": "NEON RUSH", "macro_title": "ПРОКАЧКА", "quad_1": "ГОРИТ 🔥 [Q1]", "quad_2": "НА ЧИЛЛЕ 🧊 [Q2]", "quad_3": "СУЕТА 🥱 [Q3]", "quad_4": "МУСОР 🗑️ [Q4]", "empty_tasks": "ПУСТО. СКУУУЧНО.", "lbl_macro": "ВАЙБ", "btn_init_macro": "НОВЫЙ ВАЙБ", "archived": "ЗАЛ СЛАВЫ" }
        }
    },
    paper: {
        id: 'paper',
        name: 'E-Ink',
        fontPrimary: "'Courier New', Courier, monospace",
        desc: { en: "Pure monochrome focus. High contrast, paper-like texture.", ru: "Чистый монохромный фокус. Высокий контраст, текстура бумаги." },
        icon: "📰",
        isPro: true,
        cssVars: { "--color-brand-light": "#000000", "--color-brand-dark": "#ffffff", "--color-base-light": "#f4f4f0", "--color-base-dark": "#121212", "--color-panel-light": "#ffffff", "--color-panel-dark": "#1a1a1a", "--color-border-light": "#000000", "--color-border-dark": "#404040" },
        customCss: `
            body { background-image: url('data:image/svg+xml;utf8,<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="3" stitchTiles="stitch"/></filter><rect width="200" height="200" filter="url(%23noise)" opacity="0.04"/></svg>') !important; }
            .dark body { background-image: url('data:image/svg+xml;utf8,<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="3" stitchTiles="stitch"/></filter><rect width="200" height="200" filter="url(%23noise)" opacity="0.08"/></svg>') !important; }
            .rounded, .rounded-md, .rounded-lg, .rounded-xl { border-radius: 2px !important; }
            .border, .border-2 { border-width: 2px !important; }
            .shadow-sm, .shadow-md, .shadow-lg { box-shadow: 4px 4px 0px rgba(0,0,0,0.15) !important; }
            .dark .shadow-sm, .dark .shadow-md, .dark .shadow-lg { box-shadow: 4px 4px 0px rgba(255,255,255,0.15) !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "Daily Ledger", "macro_title": "CHAPTERS", "quad_1": "IMMEDIATE [Q1]", "quad_2": "DRAFT [Q2]", "quad_3": "REVIEW [Q3]", "quad_4": "DISCARD [Q4]", "empty_tasks": "Blank page.", "lbl_macro": "Chapter", "btn_init_macro": "New Chapter", "archived": "Printed Archive" },
            ru: { "dash_subtitle_main": "Ежедневник", "macro_title": "ГЛАВЫ ЖИЗНИ", "quad_1": "НЕМЕДЛЕННО [Q1]", "quad_2": "ЧЕРНОВИК [Q2]", "quad_3": "ПЕРЕСМОТР [Q3]", "quad_4": "В КОРЗИНУ [Q4]", "empty_tasks": "Чистый лист.", "lbl_macro": "Глава", "btn_init_macro": "Начать главу", "archived": "Отправлено в печать" }
        }
    },
    terminal: {
        id: 'terminal',
        name: 'Terminal',
        fontPrimary: "'JetBrains Mono', 'Courier New', monospace",
        desc: { en: "Retro green phosphor CRT monitor aesthetics.", ru: "Эстетика ретро-терминала: зеленый фосфор, моношрифт и чистый хакинг." },
        icon: "📟",
        isPro: true,
        cssVars: {
            "--color-brand-light": "#39FF14", "--color-brand-dark": "#39FF14",
            "--color-base-light": "#050505", "--color-base-dark": "#000000",
            "--color-panel-light": "#0A0A0A", "--color-panel-dark": "#050505",
            "--color-border-light": "#1A3314", "--color-border-dark": "#0A1A05"
        },
        customCss: `
            body { background-color: #000 !important; background-image: linear-gradient(rgba(0, 255, 0, 0.03) 50%, transparent 50%) !important; background-size: 100% 4px !important; color: #39FF14 !important; }
            .bg-panel-light, .dark\\:bg-panel-dark, .tech-card-task, #templatesDropdown, .theme-card { border: 1px solid #39FF14 !important; box-shadow: 0 0 10px rgba(57, 255, 20, 0.1), inset 0 0 10px rgba(57, 255, 20, 0.05) !important; border-radius: 0 !important; }
            .text-zinc-900, .dark\\:text-zinc-100, .text-zinc-600, .text-zinc-500, .text-zinc-700, .text-zinc-400 { color: #39FF14 !important; opacity: 0.8; }
            h1, h2, h3 { text-shadow: 0 0 5px rgba(57, 255, 20, 0.5); text-transform: uppercase !important; color: #39FF14 !important; }
            .btn-press { border-radius: 0 !important; border: 1px solid #39FF14 !important; background: #050505 !important; color: #39FF14 !important; text-transform: uppercase !important; font-weight: bold !important; }
            .btn-press:hover { background: #39FF14 !important; color: #000 !important; box-shadow: 0 0 15px rgba(57, 255, 20, 0.5) !important; }
            input[type="text"], input[type="time"], select { background: transparent !important; border: 1px solid #39FF14 !important; color: #39FF14 !important; border-radius: 0 !important; padding: 0.75rem 1.25rem !important;  }
            input[type="text"]::placeholder { color: rgba(57, 255, 20, 0.4) !important; }
            .tech-checkbox:checked { background: #39FF14 !important; border-color: #39FF14 !important; }
            .tech-checkbox:checked::after { color: #000 !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "ROOT@PRIORITYS:~#", "macro_title": "SYS.PROCESSES", "quad_1": "CRITICAL_ERR [0]", "quad_2": "SYS_MAINTENANCE [1]", "quad_3": "BACKGROUND_JOBS [2]", "quad_4": "DEV_NULL [3]", "empty_tasks": "No active threads.", "lbl_macro": "PID", "btn_init_macro": "EXEC NEW_PID", "archived": "Terminated Threads" },
            ru: { "dash_subtitle_main": "ROOT@PRIORITYS:~#", "macro_title": "SYS.PROCESSES", "quad_1": "КРИТИЧЕСКАЯ_ОШИБКА [0]", "quad_2": "ОБСЛУЖИВАНИЕ [1]", "quad_3": "ФОНОВЫЕ_ПРОЦЕССЫ [2]", "quad_4": "DEV_NULL [3]", "empty_tasks": "Активных потоков нет.", "lbl_macro": "PID", "btn_init_macro": "EXEC NEW_PID", "archived": "Завершенные потоки" }
        }
    },
    sakura: {
        id: 'sakura',
        name: 'Sakura',
        fontPrimary: "'Nunito', 'Segoe UI', sans-serif",
        desc: { en: "Soft pastel pinks, delicate aesthetics and pure harmony.", ru: "Нежные пастельные тона, матовое стекло и эстетика гармонии." },
        icon: "🌸",
        isPro: true,
        cssVars: {
            "--color-brand-light": "#ec4899", "--color-brand-dark": "#f472b6",
            "--color-base-light": "#fdf2f8", "--color-base-dark": "#381a2e",
            "--color-panel-light": "rgba(255, 255, 255, 0.75)", "--color-panel-dark": "rgba(45, 27, 46, 0.75)",
            "--color-border-light": "rgba(251, 207, 232, 0.8)", "--color-border-dark": "rgba(131, 24, 67, 0.5)"
        },
        customCss: `
            body { background: linear-gradient(135deg, #fdf2f8 0%, #fbcfe8 100%) !important; background-attachment: fixed !important; }
            .dark body { background: linear-gradient(135deg, #381a2e 0%, #1a0f1b 100%) !important; background-attachment: fixed !important; }
            
            .bg-panel-light, .dark\\:bg-panel-dark, .tech-card-task, #templatesDropdown, .theme-card {
                backdrop-filter: blur(16px) saturate(120%) !important;
                -webkit-backdrop-filter: blur(16px) !important;
                border-radius: 24px !important;
                box-shadow: 0 10px 30px rgba(236, 72, 153, 0.08) !important;
                border: 2px solid var(--color-border-light) !important;
            }
            .dark .bg-panel-light, .dark .dark\\:bg-panel-dark, .dark .tech-card-task, .dark #templatesDropdown, .dark .theme-card {
                box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
                border: 2px solid var(--color-border-dark) !important;
            }
            
            h1, h2, h3 { font-weight: 800 !important; color: var(--color-brand-light) !important; letter-spacing: -0.02em !important; }
            .dark h1, .dark h2, .dark h3 { color: var(--color-brand-dark) !important; }
            
            .btn-press { border-radius: 9999px !important; } /* Идеально круглые кнопочки */
            input[type="text"], input[type="time"], select { 
                background: rgba(255,255,255,0.5) !important; 
                border-radius: 16px !important; 
                border: 2px solid var(--color-border-light) !important; 
                padding: 0.75rem 1.25rem !important; 
            }
            .dark input[type="text"], .dark input[type="time"], .dark select { background: rgba(0,0,0,0.2) !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "Harmony Space", "macro_title": "DREAMS & GOALS", "quad_1": "DO NOW 🎀 [Q1]", "quad_2": "INSPIRE 🌸 [Q2]", "quad_3": "DELEGATE 💅 [Q3]", "quad_4": "LET GO ☁️ [Q4]", "empty_tasks": "Your mind is clear.", "lbl_macro": "Dream", "btn_init_macro": "New Dream", "archived": "Beautiful Memories" },
            ru: { "dash_subtitle_main": "Пространство гармонии", "macro_title": "МЕЧТЫ И ЦЕЛИ", "quad_1": "СДЕЛАТЬ СЕЙЧАС 🎀 [Q1]", "quad_2": "ВДОХНОВЕНИЕ 🌸 [Q2]", "quad_3": "ПОРУЧИТЬ 💅 [Q3]", "quad_4": "ОТПУСТИТЬ ☁️ [Q4]", "empty_tasks": "Твой разум чист.", "lbl_macro": "Мечта", "btn_init_macro": "Новая Мечта", "archived": "Красивые воспоминания" }
        }
    },
    industrial: {
        id: 'industrial',
        name: 'Industry',
        fontPrimary: "'Impact', 'Arial Black', sans-serif",
        desc: { en: "Concrete, frosted glass, and heavy machinery.", ru: "Индустриальный блюр, бетон и тяжелое машиностроение." },
        icon: "🏭",
        isPro: true,
        cssVars: {
            "--color-brand-light": "#FF6600", "--color-brand-dark": "#FF9900",
            "--color-base-light": "#E5E7EB", "--color-base-dark": "#121212",
            "--color-panel-light": "rgba(243, 244, 246, 0.65)", "--color-panel-dark": "rgba(28, 28, 28, 0.65)",
            "--color-border-light": "rgba(0, 0, 0, 0.15)", "--color-border-dark": "rgba(255, 153, 0, 0.2)"
        },
        customCss: `
            /* Сигнальные ленты на фоне */
            body { 
                background-color: #E5E7EB !important; 
                background-image: repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,0,0,0.03) 40px, rgba(0,0,0,0.03) 80px) !important; 
                background-attachment: fixed !important; 
            }
            .dark body { 
                background-color: #121212 !important; 
                background-image: repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,153,0,0.03) 40px, rgba(255,153,0,0.03) 80px) !important; 
                background-attachment: fixed !important; 
            }
            
            /* Убираем жирные рамки, делаем острые углы и добавляем индустриальный блюр (эффект рифленого стекла) */
            .rounded, .rounded-md, .rounded-lg, .rounded-xl { border-radius: 5px !important; }
            .border, .border-2, .border-b, .border-t { border-width: 0px !important; }
            
            .bg-panel-light, .dark\\:bg-panel-dark, .tech-card-task, #templatesDropdown, .theme-card {
                backdrop-filter: blur(12px) saturate(110%) !important;
                -webkit-backdrop-filter: blur(12px) !important;
                box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1) !important;
            }
            .dark .bg-panel-light, .dark .dark\\:bg-panel-dark, .dark .tech-card-task, .dark #templatesDropdown, .dark .theme-card {
                box-shadow: 0 10px 25px -5px rgba(0,0,0,0.6) !important;
            }

            /* Размытые инпуты */
            input[type="text"], input[type="time"], select { 
                background: rgba(255,255,255,0.4) !important; 
                backdrop-filter: blur(8px) !important; 
                border: 0px solid var(--color-border-light) !important; 
                padding: 0.75rem 1.25rem !important; 
            }
            .dark input[type="text"], .dark input[type="time"], .dark select { 
                background: rgba(0,0,0,0.3) !important; 
                border: 1px solid var(--color-border-dark) !important; 
            }

            h1, h2, h3 { text-transform: uppercase !important; font-weight: 900 !important; letter-spacing: 1px; }
        `,
        locales: {
            en: { "dash_subtitle_main": "FACTORY FLOOR", "macro_title": "PRODUCTION LINES", "quad_1": "EMERGENCY [0]", "quad_2": "MAINTENANCE [1]", "quad_3": "ASSEMBLY [2]", "quad_4": "SCRAP [3]", "empty_tasks": "MACHINES IDLE.", "lbl_macro": "LINE", "btn_init_macro": "START PRODUCTION", "archived": "SHIPPED" },
            ru: { "dash_subtitle_main": "ГЛАВНЫЙ ЦЕХ", "macro_title": "ПРОИЗВОДСТВО", "quad_1": "АВАРИЯ 🔥 [Q1]", "quad_2": "ФУНДАМЕНТ 🏗️ [Q2]", "quad_3": "КОНВЕЙЕР ⚙️ [Q3]", "quad_4": "В УТИЛЬ 🗑️ [Q4]", "empty_tasks": "СТАНКИ ПРОСТАИВАЮТ.", "lbl_macro": "ЦЕХ", "btn_init_macro": "ЗАПУСТИТЬ ЛИНИЮ", "archived": "ОТГРУЖЕНО" }
        }
    },
    heaven: {
        id: 'heaven',
        name: 'Heavenly',
        fontPrimary: "'Nunito', 'Segoe UI', sans-serif",
        desc: { en: "Soft clouds, endless sky, and absolute serenity.", ru: "Мягкие облака, бескрайнее небо и абсолютное спокойствие." },
        icon: "☁️",
        isPro: true,
        cssVars: {
            /* Небесно-голубые и воздушные оттенки */
            "--color-brand-light": "#38BDF8", "--color-brand-dark": "#0EA5E9",
            "--color-base-light": "#F0F9FF", "--color-base-dark": "#082F49",
            "--color-panel-light": "rgba(255, 255, 255, 0.75)", "--color-panel-dark": "rgba(12, 74, 110, 0.65)",
            "--color-border-light": "#E0F2FE", "--color-border-dark": "#0369A1"
        },
        customCss: `
            /* Градиенты ясного неба и глубокой ночи */
            body { 
                background: linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #BAE6FD 100%) !important; 
                background-attachment: fixed !important; 
            }
            .dark body { 
                background: linear-gradient(135deg, #082F49 0%, #0C4A6E 50%, #075985 100%) !important; 
                background-attachment: fixed !important; 
            }
            
            /* Воздушные, обтекаемые формы панелей с эффектом стекла */
            .bg-panel-light, .dark\\:bg-panel-dark, .tech-card-task, #templatesDropdown, .theme-card {
                backdrop-filter: blur(20px) !important;
                -webkit-backdrop-filter: blur(20px) !important;
            }

            .rounded, .rounded-md, .rounded-lg, .rounded-xl { border-radius: 24px !important; }
            .border, .border-2 { border-width: 2px !important; border-color: var(--color-border-light) !important; }
            .dark .border, .dark .border-2 { border-color: var(--color-border-dark) !important; }
            
            /* Очень мягкие, рассеянные тени для эффекта парения */
            .shadow-sm, .shadow-md, .shadow-lg { box-shadow: 0 20px 50px rgba(56, 189, 248, 0.15) !important; }
            .dark .shadow-sm, .dark .shadow-md, .dark .shadow-lg { box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4) !important; }
            
            .btn-press { border-radius: 9999px !important; font-weight: 800 !important; } 
            
            /* Полупрозрачные инпуты-облачка */
            input[type="text"], input[type="time"], select { 
                border-radius: 20px !important; 
                padding: 0.8rem 1.5rem !important; 
                background: rgba(255,255,255,0.7) !important; 
                box-shadow: inset 0 2px 10px rgba(56, 189, 248, 0.05) !important;
            }
            .dark input[type="text"], .dark input[type="time"], .dark select { 
                background: rgba(0,0,0,0.2) !important; 
                box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2) !important;
            }
            
            h1, h2, h3 { font-weight: 800 !important; letter-spacing: -0.01em !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "FLIGHT CONTROL", "macro_title": "CONSTELLATIONS", "quad_1": "STORM WARNING ⛈️ [Q1]", "quad_2": "CLEAR SKY 🌤️ [Q2]", "quad_3": "TURBULENCE 💨 [Q3]", "quad_4": "DROP OVERBOARD 🪂 [Q4]", "empty_tasks": "The sky is clear! 🕊️", "lbl_macro": "Star", "btn_init_macro": "Launch", "archived": "Landed" },
            ru: { "dash_subtitle_main": "ЦЕНТР ПОЛЕТОВ", "macro_title": "СОЗВЕЗДИЯ ЦЕЛЕЙ", "quad_1": "ШТОРМОВОЕ ПРЕДУПРЕЖДЕНИЕ ⛈️ [Q1]", "quad_2": "ЧИСТОЕ НЕБО 🌤️ [Q2]", "quad_3": "ТУРБУЛЕНТНОСТЬ 💨 [Q3]", "quad_4": "СБРОСИТЬ ЗА БОРТ 🪂 [Q4]", "empty_tasks": "Небо абсолютно чистое! 🕊️", "lbl_macro": "Звезда", "btn_init_macro": "Запуск", "archived": "Приземлились" }
        }
    },
    library: {
        id: 'library',
        name: 'Library',
        fontPrimary: "'Merriweather', 'Times New Roman', serif",
        desc: { en: "Warm wood, dusty pages, and academic focus.", ru: "Академический фокус. Теплое дерево, старая бумага и классика." },
        icon: "📚",
        isPro: true,
        cssVars: {
            "--color-brand-light": "#5C162E", "--color-brand-dark": "#D4AF37",
            "--color-base-light": "#F4EFE6", "--color-base-dark": "#2A211C",
            "--color-panel-light": "#FFFFFF", "--color-panel-dark": "#362C26",
            "--color-border-light": "#D8CABC", "--color-border-dark": "#504138"
        },
        customCss: `
            body { background-image: url('data:image/svg+xml;utf8,<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="3" stitchTiles="stitch"/></filter><rect width="200" height="200" filter="url(%23noise)" opacity="0.03"/></svg>') !important; }
            .dark body { background-image: url('data:image/svg+xml;utf8,<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="3" stitchTiles="stitch"/></filter><rect width="200" height="200" filter="url(%23noise)" opacity="0.05"/></svg>') !important; }
            .rounded, .rounded-md, .rounded-lg, .rounded-xl { border-radius: 4px !important; }
            .shadow-sm, .shadow-md, .shadow-lg { box-shadow: 0 4px 15px rgba(92,22,46,0.08) !important; }
            .dark .shadow-sm, .dark .shadow-md, .dark .shadow-lg { box-shadow: 0 4px 15px rgba(0,0,0,0.4) !important; }
            .btn-press { border-radius: 4px !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "Reading Room", "macro_title": "DISSERTATIONS", "quad_1": "URGENT MANUSCRIPT [Q1]", "quad_2": "RESEARCH [Q2]", "quad_3": "SORTING [Q3]", "quad_4": "ARCHIVE [Q4]", "empty_tasks": "Silence in the library.", "lbl_macro": "Tome", "btn_init_macro": "New Manuscript", "archived": "Published Works" },
            ru: { "dash_subtitle_main": "Читальный зал", "macro_title": "ДИССЕРТАЦИИ", "quad_1": "СРОЧНО В ПЕЧАТЬ 🖋️ [Q1]", "quad_2": "ИССЛЕДОВАНИЕ 📖 [Q2]", "quad_3": "КАТАЛОГ 🗂️ [Q3]", "quad_4": "МАКУЛАТУРА 🗑️ [Q4]", "empty_tasks": "В библиотеке тишина.", "lbl_macro": "Том", "btn_init_macro": "Новый Труд", "archived": "Сдано в архив" }
        }
    },
    abyss: {
        id: 'abyss',
        name: 'AbyssGlow',
        fontPrimary: "'Space Grotesk', 'Montserrat', sans-serif",
        desc: { en: "Mariana trench, bioluminescence, and crushing depths.", ru: "Глубины океана, биолюминесценция и абсолютное погружение." },
        icon: "🪼",
        isPro: true,
        cssVars: {
            "--color-brand-light": "#00E5FF", "--color-brand-dark": "#64FFDA",
            "--color-base-light": "#E0F7FA", "--color-base-dark": "#020C1B",
            "--color-panel-light": "rgba(255, 255, 255, 0.8)", "--color-panel-dark": "rgba(10, 25, 47, 0.85)",
            "--color-border-light": "#B2EBF2", "--color-border-dark": "#112240"
        },
        customCss: `
            /* Свечение на фоне (подводные лучи) */
            body { 
                background: radial-gradient(circle at 50% -20%, #B2EBF2, #E0F7FA 60%) !important; 
                background-attachment: fixed !important;
            }
            .dark body { 
                background: radial-gradient(circle at 50% -20%, #112240, #020C1B 70%) !important; 
                background-attachment: fixed !important;
            }
            
            /* Эффект глубоководного свечения (Glow) */
            .bg-panel-light, .dark\\:bg-panel-dark, .tech-card-task, #templatesDropdown, .theme-card {
                border-radius: 16px !important;
                backdrop-filter: blur(12px) !important;
                border: 1px solid var(--color-border-light) !important;
                box-shadow: 0 10px 30px rgba(0, 229, 255, 0.1) !important;
            }
            .dark .bg-panel-light, .dark .dark\\:bg-panel-dark, .dark .tech-card-task, .dark #templatesDropdown, .dark .theme-card {
                border: 1px solid var(--color-border-dark) !important;
                box-shadow: 0 10px 30px rgba(100, 255, 218, 0.05), inset 0 0 20px rgba(100, 255, 218, 0.02) !important;
            }
            
            /* Карточки при наведении вспыхивают как медузы */
            .hover-magnet:hover { box-shadow: 0 0 25px rgba(0, 229, 255, 0.4) !important; border-color: var(--color-brand-light) !important; }
            .dark .hover-magnet:hover { box-shadow: 0 0 25px rgba(100, 255, 218, 0.3) !important; border-color: var(--color-brand-dark) !important; }
            
            h1, h2, h3 { font-weight: 700 !important; letter-spacing: 0.05em !important; }
            
            /* Неоновые инпуты */
            input[type="text"], input[type="time"], select { 
                border-radius: 12px !important; 
                border: 1px solid var(--color-brand-light) !important; 
                background: rgba(255, 255, 255, 0.5) !important;
                box-shadow: inset 0 0 10px rgba(0, 229, 255, 0.05) !important;
                padding: 0.8rem 1.25rem !important;
            }
            .dark input[type="text"], .dark input[type="time"], .dark select { 
                border: 1px solid var(--color-brand-dark) !important;
                background: rgba(0, 0, 0, 0.3) !important;
                box-shadow: inset 0 0 10px rgba(100, 255, 218, 0.1) !important;
            }
        `,
        locales: {
            en: { "dash_subtitle_main": "BATHYSCAPHE", "macro_title": "TRENCH EXPEDITIONS", "quad_1": "BIOLUMINESCENCE 🪼 [Q1]", "quad_2": "DEEP CURRENTS 🌊 [Q2]", "quad_3": "DRIFTING 🫧 [Q3]", "quad_4": "SINKING ⚓ [Q4]", "empty_tasks": "The ocean is silent.", "lbl_macro": "Depth", "btn_init_macro": "Dive Deeper", "archived": "Fossils" },
            ru: { "dash_subtitle_main": "БАТИСКАФ", "macro_title": "ГЛУБОКОВОДНЫЕ ЦЕЛИ", "quad_1": "СВЕЧЕНИЕ 🪼 [Q1]", "quad_2": "ТЕЧЕНИЕ 🌊 [Q2]", "quad_3": "ДРЕЙФ 🫧 [Q3]", "quad_4": "НА ДНО ⚓ [Q4]", "empty_tasks": "В океане тишина.", "lbl_macro": "Глубина", "btn_init_macro": "Погружение", "archived": "Окаменелости" }
        }
    },
    clay: {
        id: 'clay',
        name: 'SoftClay',
        fontPrimary: "'Nunito', 'Quicksand', sans-serif",
        desc: { en: "Tactile 3D claymorphism, soft matte materials.", ru: "Тактильный 3D-клейморфизм, эффект мягкого матового пластилина." },
        icon: "🏺",
        isPro: true,
        cssVars: {
            "--color-brand-light": "#FF7E67", "--color-brand-dark": "#FF9A85",
            "--color-base-light": "#E8EDF2", "--color-base-dark": "#2A2E35",
            "--color-panel-light": "#E8EDF2", "--color-panel-dark": "#2A2E35", 
            "--color-border-light": "transparent", "--color-border-dark": "transparent"
        },
        customCss: `
            /* Фон сливается с панелями для создания иллюзии цельного куска глины */
            body { background: #E8EDF2 !important; }
            .dark body { background: #2A2E35 !important; }
            
            /* Клейморфизм: Массивные скругления + Внутренние и внешние тени создают объем */
            .bg-panel-light, .dark\\:bg-panel-dark, .tech-card-task, #templatesDropdown, .theme-card {
                background: var(--color-base-light) !important;
                border-radius: 32px !important;
                border: none !important;
                box-shadow: 
                    12px 12px 24px rgba(163, 177, 198, 0.4), 
                    -12px -12px 24px rgba(255, 255, 255, 0.8),
                    inset 4px 4px 10px rgba(255, 255, 255, 0.6),
                    inset -4px -4px 10px rgba(163, 177, 198, 0.15) !important;
            }
            .dark .bg-panel-light, .dark .dark\\:bg-panel-dark, .dark .tech-card-task, .dark #templatesDropdown, .dark .theme-card {
                background: var(--color-base-dark) !important;
                box-shadow: 
                    12px 12px 24px rgba(0, 0, 0, 0.4), 
                    -12px -12px 24px rgba(60, 65, 75, 0.3),
                    inset 4px 4px 10px rgba(60, 65, 75, 0.15),
                    inset -4px -4px 10px rgba(0, 0, 0, 0.3) !important;
            }
            
            /* Выдавленные (вдавленные) инпуты - эффект нажатия на глину */
            input[type="text"], input[type="time"], select { 
                background: var(--color-base-light) !important;
                border-radius: 20px !important; 
                border: none !important;
                box-shadow: 
                    inset 6px 6px 12px rgba(163, 177, 198, 0.5),
                    inset -6px -6px 12px rgba(255, 255, 255, 0.9) !important;
                padding: 1rem 1.5rem !important;
            }
            .dark input[type="text"], .dark input[type="time"], .dark select { 
                background: var(--color-base-dark) !important;
                box-shadow: 
                    inset 6px 6px 12px rgba(0, 0, 0, 0.5),
                    inset -6px -6px 12px rgba(60, 65, 75, 0.3) !important;
            }
            
            /* Идеально пухлые кнопки с внутренним бликом */
            .btn-press { 
                border-radius: 9999px !important; 
                box-shadow: 4px 4px 10px rgba(255, 126, 103, 0.3), inset 2px 2px 5px rgba(255,255,255,0.4) !important;
            }
            .dark .btn-press {
                box-shadow: 4px 4px 10px rgba(0,0,0, 0.4), inset 2px 2px 5px rgba(255,255,255,0.1) !important;
            }
            
            h1, h2, h3 { font-weight: 900 !important; letter-spacing: -0.03em !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "SCULPTOR STUDIO", "macro_title": "MASTERPIECES", "quad_1": "BAKE NOW 🔥 [Q1]", "quad_2": "MOLDING 🧸 [Q2]", "quad_3": "SOFT CLAY 🫧 [Q3]", "quad_4": "CRUSH 💥 [Q4]", "empty_tasks": "Table is clean.", "lbl_macro": "Sculpture", "btn_init_macro": "Mold Idea", "archived": "Fired Works" },
            ru: { "dash_subtitle_main": "СТУДИЯ ЛЕПКИ", "macro_title": "ШЕДЕВРЫ", "quad_1": "В ПЕЧЬ 🔥 [Q1]", "quad_2": "ФОРМОВКА 🧸 [Q2]", "quad_3": "МЯГКАЯ ГЛИНА 🫧 [Q3]", "quad_4": "СМЯТЬ 💥 [Q4]", "empty_tasks": "Стол чист.", "lbl_macro": "Фигурка", "btn_init_macro": "Слепить Идею", "archived": "Затвердело" }
        }
    },
    titanium: {
        id: 'titanium',
        name: 'Titanium',
        fontPrimary: "'Inter', sans-serif",
        desc: { en: "Aerospace grade neumorphism. Heavy metal and precision.", ru: "Аэрокосмический нейроморфизм. Литой металл и абсолютная точность." },
        icon: "🛸",
        isPro: true,
        cssVars: {
            "--color-brand-light": "#3b82f6", "--color-brand-dark": "#60a5fa",
            "--color-base-light": "#e0e5ec", "--color-base-dark": "#1a1f25",
            "--color-panel-light": "#e0e5ec", "--color-panel-dark": "#1a1f25",
            "--color-border-light": "transparent", "--color-border-dark": "transparent"
        },
        customCss: `
            body { background: var(--color-base-light) !important; }
            .dark body { background: var(--color-base-dark) !important; }

            /* Нейроморфизм: элементы "выдавлены" из цельного куска металла */
            .bg-panel-light, .dark\\:bg-panel-dark, .tech-card-task, #templatesDropdown, .theme-card {
                background: var(--color-base-light) !important;
                border-radius: 16px !important;
                border: none !important;
                box-shadow: 
                    8px 8px 16px rgba(163, 177, 198, 0.6), 
                    -8px -8px 16px rgba(255, 255, 255, 0.8) !important;
            }
            .dark .bg-panel-light, .dark .dark\\:bg-panel-dark, .dark .tech-card-task, .dark #templatesDropdown, .dark .theme-card {
                background: var(--color-base-dark) !important;
                box-shadow: 
                    8px 8px 16px rgba(0, 0, 0, 0.5), 
                    -8px -8px 16px rgba(45, 55, 65, 0.5) !important;
            }

            /* Вдавленные поля ввода (эффект гравировки/фрезеровки) */
            input[type="text"], input[type="time"], select { 
                background: var(--color-base-light) !important;
                border-radius: 12px !important; 
                border: none !important;
                box-shadow: 
                    inset 6px 6px 10px rgba(163, 177, 198, 0.6),
                    inset -6px -6px 10px rgba(255, 255, 255, 0.8) !important;
                padding: 1rem 1.25rem !important;
            }
            .dark input[type="text"], .dark input[type="time"], .dark select { 
                background: var(--color-base-dark) !important;
                box-shadow: 
                    inset 6px 6px 10px rgba(0, 0, 0, 0.6),
                    inset -6px -6px 10px rgba(45, 55, 65, 0.4) !important;
            }

            /* При нажатии кнопка физически "вдавливается" в металл */
            .btn-press:active {
                box-shadow: 
                    inset 4px 4px 8px rgba(163, 177, 198, 0.6),
                    inset -4px -4px 8px rgba(255, 255, 255, 0.8) !important;
                transform: scale(0.98) !important;
            }
            .dark .btn-press:active {
                box-shadow: 
                    inset 4px 4px 8px rgba(0, 0, 0, 0.6),
                    inset -4px -4px 8px rgba(45, 55, 65, 0.4) !important;
            }
            
            h1, h2, h3 { font-weight: 700 !important; text-transform: uppercase !important; letter-spacing: 0.05em; color: #475569 !important; }
            .dark h1, .dark h2, .dark h3 { color: #94a3b8 !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "MISSION CONTROL", "macro_title": "ORBITAL GOALS", "quad_1": "CRITICAL BURN [Q1]", "quad_2": "NAVIGATION [Q2]", "quad_3": "SYSTEM CHECK [Q3]", "quad_4": "JETTISON [Q4]", "empty_tasks": "All systems nominal.", "lbl_macro": "Module", "btn_init_macro": "Launch Module", "archived": "Deorbited" },
            ru: { "dash_subtitle_main": "ЦУП: ЦЕНТР УПРАВЛЕНИЯ", "macro_title": "ОРБИТАЛЬНЫЕ ЦЕЛИ", "quad_1": "КРИТИЧЕСКИЙ ЗАПУСК [Q1]", "quad_2": "НАВИГАЦИЯ [Q2]", "quad_3": "ДИАГНОСТИКА [Q3]", "quad_4": "ОТСТРЕЛ [Q4]", "empty_tasks": "Все системы в норме.", "lbl_macro": "Модуль", "btn_init_macro": "Сборка модуля", "archived": "Сошли с орбиты" }
        }
    },
    blueprint: {
        id: 'blueprint',
        name: 'CAD',
        fontPrimary: "'JetBrains Mono', 'Courier New', monospace",
        desc: { en: "Architectural drafts, deep blue canvas and vector precision.", ru: "Архитектурные чертежи, глубокий синий холст и векторная точность." },
        icon: "📐",
        isPro: true,
        cssVars: {
            "--color-brand-light": "#FFFFFF", "--color-brand-dark": "#FFFFFF",
            "--color-base-light": "#0A369D", "--color-base-dark": "#062265",
            "--color-panel-light": "rgba(10, 54, 157, 0.6)", "--color-panel-dark": "rgba(6, 34, 101, 0.6)",
            "--color-border-light": "rgba(255, 255, 255, 0.4)", "--color-border-dark": "rgba(255, 255, 255, 0.2)"
        },
        customCss: `
            /* Идеальная миллиметровка (светлые и толстые линии сетки) */
            body { 
                background-color: var(--color-base-light) !important;
                background-image: 
                    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 2px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.2) 2px, transparent 2px) !important;
                background-size: 20px 20px, 20px 20px, 100px 100px, 100px 100px !important;
                color: #FFFFFF !important;
            }
            .dark body { background-color: var(--color-base-dark) !important; }

            /* Карточки выглядят как начерченные зоны */
            .bg-panel-light, .dark\\:bg-panel-dark, .tech-card-task, #templatesDropdown, .theme-card {
                background: var(--color-panel-light) !important;
                backdrop-filter: blur(4px) !important;
                border-radius: 0px !important;
                border: 2px dashed var(--color-border-light) !important;
                box-shadow: none !important;
            }
            .dark .bg-panel-light, .dark .dark\\:bg-panel-dark, .dark .tech-card-task, .dark #templatesDropdown, .dark .theme-card {
                background: var(--color-panel-dark) !important;
                border: 2px dashed var(--color-border-dark) !important;
            }

            /* Инпуты как поля для ввода параметров */
            input[type="text"], input[type="time"], select { 
                background: transparent !important;
                border-radius: 0px !important; 
                border: 1px solid #FFFFFF !important;
                color: #FFFFFF !important;
                padding: 0.75rem 1.25rem !important;
            }
            input[type="text"]::placeholder { color: rgba(255,255,255,0.5) !important; }

            /* Эффект выделения чертежа при наведении */
            .hover-magnet:hover { 
                border-style: solid !important; 
                border-color: #FFFFFF !important;
                box-shadow: 0 0 15px rgba(255, 255, 255, 0.3) !important;
            }

            /* Тексты форсированно делаем белыми */
            .text-zinc-900, .dark\\:text-zinc-100, .text-zinc-600, .text-zinc-500, .text-zinc-700, .text-zinc-400, .text-brand-light, .dark\\:text-brand-dark { 
                color: #FFFFFF !important; 
                opacity: 0.9;
            }
            
            h1, h2, h3 { font-weight: 400 !important; text-transform: uppercase !important; letter-spacing: 0.1em; }
        `,
        locales: {
            en: { "dash_subtitle_main": "PROJECT DRAFT", "macro_title": "MASTER PLANS", "quad_1": "CORE STRUCTURE [Q1]", "quad_2": "ARCHITECTURE [Q2]", "quad_3": "DETAILING [Q3]", "quad_4": "SCRAP [Q4]", "empty_tasks": "Canvas is blank.", "lbl_macro": "Plan", "btn_init_macro": "Draft Plan", "archived": "Archived Drafts" },
            ru: { "dash_subtitle_main": "ИНЖЕНЕРНЫЙ ЧЕРТЕЖ", "macro_title": "ГЕНПЛАНЫ", "quad_1": "НЕСУЩИЕ ОПОРЫ [Q1]", "quad_2": "АРХИТЕКТУРА [Q2]", "quad_3": "ДЕТАЛИЗАЦИЯ [Q3]", "quad_4": "В КОРЗИНУ [Q4]", "empty_tasks": "Холст чист.", "lbl_macro": "Проект", "btn_init_macro": "Новый чертеж", "archived": "В архиве" }
        }
    }
};

function applySystemTheme() {
    const themeId = localStorage.getItem('priority_theme') || 'cyber';
    const theme = SYSTEM_THEMES[themeId] || SYSTEM_THEMES['cyber'];
    
    let styleTag = document.getElementById('dynamic-theme-styles');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'dynamic-theme-styles';
        document.head.appendChild(styleTag);
    }
    
    let cssVarsStr = '';
    for (const [key, value] of Object.entries(theme.cssVars)) {
        cssVarsStr += `${key}: ${value} !important;\n`;
    }
    
    styleTag.innerHTML = `
        :root { ${cssVarsStr} --font-primary: ${theme.fontPrimary}; }
        body { font-family: var(--font-primary); }
        ${theme.customCss}
    `;

    // Кэшируем собранный CSS, чтобы при следующем открытии он применился мгновенно, до загрузки themes.js из сети
    localStorage.setItem('priority_theme_css_cache', styleTag.innerHTML);

    if (typeof applyI18n === 'function') applyI18n(); 
}

applySystemTheme();