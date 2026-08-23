const SYSTEM_THEMES = {
    cyber: {
        id: 'cyber',
        name: 'Cyber-Industrial',
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
        name: 'Royal Fantasy',
        fontPrimary: "'Georgia', serif",
        desc: { en: "Medieval parchment, wax seals, and epic quests.", ru: "Средневековые пергаменты, сургучные печати и эпичные квесты." },
        icon: "👑",
        isPro: true,
        cssVars: { "--color-brand-light": "#8B0000", "--color-brand-dark": "#D4AF37", "--color-base-light": "#FDFBF7", "--color-base-dark": "#1A120B", "--color-panel-light": "#F5EEDB", "--color-panel-dark": "#2A1D12", "--color-border-light": "#D9CBB0", "--color-border-dark": "#3D2B1F" },
        customCss: `body { background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100" height="100" filter="url(%23noise)" opacity="0.05"/></svg>'); }`,
        locales: {
            en: { "dash_subtitle_main": "Kingdom Ledger v9.0", "btn_deploy": "Issue Decree", "task_ph": "Inscribe your quest...", "btn_logs": "Chronicles", "macro_title": "EPIC QUESTS", "quad_1": "DRAGON THREAT [SEV-0]", "quad_2": "KINGDOM CORE [SEV-1]", "quad_3": "PEASANT WORK [SEV-2]", "quad_4": "TAVERN RUMORS [SEV-3]", "archived": "Dusty Tomes", "empty_tasks": "The realm is peaceful", "lbl_macro": "Epic", "btn_init_macro": "Declare Campaign" },
            ru: { "dash_subtitle_main": "Королевская Летопись v9.0", "btn_deploy": "Издать Указ", "task_ph": "Впишите деяние в пергамент...", "btn_logs": "Летопись", "macro_title": "ВЕЛИКИЕ СВЕРШЕНИЯ", "quad_1": "УГРОЗА ДРАКОНА [SEV-0]", "quad_2": "ФУНДАМЕНТ ЗАМКА [SEV-1]", "quad_3": "КРЕСТЬЯНСКИЙ ТРУД [SEV-2]", "quad_4": "СЛУХИ ИЗ ТРАКТИРА [SEV-3]", "archived": "Пыльные фолианты", "empty_tasks": "В королевстве штиль", "lbl_macro": "Эпос", "btn_init_macro": "Огласить Поход" }
        }
    },
    brutal: {
        id: 'brutal',
        name: 'Neo-Brutalism',
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
            en: { "dash_subtitle_main": "BRUTAL DASHBOARD V9.0", "btn_deploy": "EXECUTE", "task_ph": "What needs to be crushed?...", "btn_logs": "DUMP", "macro_title": "BIG MOVES", "quad_1": "DO IT NOW [0]", "quad_2": "LEVEL UP [1]", "quad_3": "GRIND [2]", "quad_4": "TRASH [3]", "archived": "GRAVEYARD", "empty_tasks": "NOTHING. GO TOUCH GRASS.", "lbl_macro": "GIGA", "btn_init_macro": "START BIG PROJECT" },
            ru: { "dash_subtitle_main": "ЖЕСТКИЙ ДАШБОРД V9.0", "btn_deploy": "ЗАДЕПЛОИТЬ", "task_ph": "Что будем уничтожать?...", "btn_logs": "ДАМП", "macro_title": "БАЗА", "quad_1": "ГОРИТ [0]", "quad_2": "КАЧ [1]", "quad_3": "ГРИНД [2]", "quad_4": "МУСОРКА [3]", "archived": "КЛАДБИЩЕ", "empty_tasks": "ПУСТО. ИДИ ПОТРОГАЙ ТРАВУ.", "lbl_macro": "ГИГА", "btn_init_macro": "НОВЫЙ ГИГА-ПРОЕКТ" }
        }
    },
    executive: {
        id: 'executive',
        name: 'Executive Glass',
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
        name: 'Botanical Garden',
        fontPrimary: "'Georgia', serif",
        desc: { en: "Earthy tones, soft greens, and natural tranquility.", ru: "Природные оттенки, мягкая зелень и абсолютное спокойствие." },
        icon: "🌿",
        isPro: true,
        cssVars: { "--color-brand-light": "#2E7D32", "--color-brand-dark": "#81C784", "--color-base-light": "#F1F8E9", "--color-base-dark": "#1B2614", "--color-panel-light": "#FFFFFF", "--color-panel-dark": "#25351D", "--color-border-light": "#DCEDC8", "--color-border-dark": "#334A27" },
        customCss: `
            body { background-image: url('data:image/svg+xml;utf8,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><path d="M54.627 0l.83 22.09c-14.512.645-25.597 10.985-26.242 25.497L7.125 46.757C7.77 32.245 18.855 21.905 33.367 21.26L54.627 0z" fill="%2381C784" fill-opacity="0.05" fill-rule="evenodd"/></svg>'); }
            .dark body { background-image: url('data:image/svg+xml;utf8,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><path d="M54.627 0l.83 22.09c-14.512.645-25.597 10.985-26.242 25.497L7.125 46.757C7.77 32.245 18.855 21.905 33.367 21.26L54.627 0z" fill="%232E7D32" fill-opacity="0.1" fill-rule="evenodd"/></svg>'); }
            .rounded, .rounded-md, .rounded-lg, .rounded-xl { border-radius: 20px !important; }
            .shadow-sm, .shadow-md, .shadow-lg { box-shadow: 0 10px 25px -5px rgba(46,125,50,0.1) !important; }
            .dark .shadow-sm, .dark .shadow-md, .dark .shadow-lg { box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5) !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "Greenhouse v9.0", "macro_title": "GROWTH SEEDS", "quad_1": "WATER NOW [Q1]", "quad_2": "PLANT SEEDS [Q2]", "quad_3": "PRUNE [Q3]", "quad_4": "COMPOST [Q4]", "empty_tasks": "The garden is peaceful.", "lbl_macro": "Seed", "btn_init_macro": "Plant New Idea", "archived": "Harvested" },
            ru: { "dash_subtitle_main": "Оранжерея v9.0", "macro_title": "ТОЧКИ РОСТА", "quad_1": "ПОЛИТЬ СЕЙЧАС [Q1]", "quad_2": "ПОСАДИТЬ [Q2]", "quad_3": "ПОДРЕЗАТЬ [Q3]", "quad_4": "В КОМПОСТ [Q4]", "empty_tasks": "В саду порядок и покой.", "lbl_macro": "Росток", "btn_init_macro": "Посадить идею", "archived": "Собранный урожай" }
        }
    },
    neon: {
        id: 'neon',
        name: 'Neon Pop-Art',
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
            en: { "dash_subtitle_main": "NEON RUSH V9.0", "macro_title": "LEVEL UP", "quad_1": "HOT 🔥 [Q1]", "quad_2": "COOL 🧊 [Q2]", "quad_3": "MEH 🥱 [Q3]", "quad_4": "TRASH 🗑️ [Q4]", "empty_tasks": "NOTHING HERE. BOOOORING.", "lbl_macro": "VIBE", "btn_init_macro": "NEW VIBE", "archived": "HALL OF FAME" },
            ru: { "dash_subtitle_main": "NEON RUSH V9.0", "macro_title": "ПРОКАЧКА", "quad_1": "ГОРИТ 🔥 [Q1]", "quad_2": "НА ЧИЛЛЕ 🧊 [Q2]", "quad_3": "СУЕТА 🥱 [Q3]", "quad_4": "МУСОР 🗑️ [Q4]", "empty_tasks": "ПУСТО. СКУУУЧНО.", "lbl_macro": "ВАЙБ", "btn_init_macro": "НОВЫЙ ВАЙБ", "archived": "ЗАЛ СЛАВЫ" }
        }
    },
    paper: {
        id: 'paper',
        name: 'E-Ink Paper',
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
        name: 'Terminal CRT',
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
        name: 'Sakura Blossom',
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
        name: 'Heavy Industry',
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
    library: {
        id: 'library',
        name: 'Grand Library',
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