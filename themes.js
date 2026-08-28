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