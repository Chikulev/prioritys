const SYSTEM_THEMES = {
    cyber: {
        id: 'cyber',
        name: 'Cyber-Industrial',
        fontPrimary: "'JetBrains Mono', monospace",
        desc: { en: "Default developer pro aesthetics.", ru: "Базовый стиль для разработчиков." },
        icon: "💻",
        isPro: false,
        cssVars: {
            "--color-brand-light": "#0891B2", "--color-brand-dark": "#06B6D4",
            "--color-base-light": "#FAFAFA", "--color-base-dark": "#09090B",
            "--color-panel-light": "#ffffff", "--color-panel-dark": "#121214",
            "--color-border-light": "#d4d4d8", "--color-border-dark": "#27272a"
        },
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
        cssVars: {
            "--color-brand-light": "#8B0000", "--color-brand-dark": "#D4AF37",
            "--color-base-light": "#FDFBF7", "--color-base-dark": "#1A120B",
            "--color-panel-light": "#F5EEDB", "--color-panel-dark": "#2A1D12",
            "--color-border-light": "#D9CBB0", "--color-border-dark": "#3D2B1F"
        },
        customCss: `
            body { background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100" height="100" filter="url(%23noise)" opacity="0.05"/></svg>'); }
        `,
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
        cssVars: {
            "--color-brand-light": "#FF3366", "--color-brand-dark": "#00FFCC",
            "--color-base-light": "#E0E722", "--color-base-dark": "#121212",
            "--color-panel-light": "#FFFFFF", "--color-panel-dark": "#000000",
            "--color-border-light": "#000000", "--color-border-dark": "#E0E722"
        },
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
        desc: { en: "Deep radial gradients, frosted glass panels, and absolute minimalism.", ru: "Глубокие градиенты, матовое стекло и абсолютный минимализм." },
        icon: "🧊",
        isPro: true,
        cssVars: {
            "--color-brand-light": "#5b5b5b", "--color-brand-dark": "#ffffff",
            "--color-base-light": "#F1F5F9", "--color-base-dark": "#020617",
            "--color-panel-light": "rgba(255, 255, 255, 0.55)", "--color-panel-dark": "rgba(15, 23, 42, 0.55)",
            "--color-border-light": "rgba(255, 255, 255, 0.7)", "--color-border-dark": "rgba(255, 255, 255, 0.08)"
        },
        customCss: `
            body { background: radial-gradient(circle at top left, #f8fafc, #cbd5e1, #e2e8f0) !important; background-attachment: fixed !important; }
            .dark body { background: radial-gradient(circle at top left, #1e293b, #020617, #0f172a) !important; background-attachment: fixed !important; }
            
            /* Эффект матового стекла */
            .bg-panel-light, .dark\\:bg-panel-dark, .tech-card-task, #templatesDropdown, .theme-card {
                backdrop-filter: blur(40px) saturate(150%) !important;
                -webkit-backdrop-filter: blur(40px) saturate(150%) !important;
                border-radius: 20px !important;
                box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1) !important;
                border: 1px solid var(--color-border-light) !important;
            }
            .dark .bg-panel-light, .dark .dark\\:bg-panel-dark, .dark .tech-card-task, .dark #templatesDropdown, .dark .theme-card {
                box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5) !important;
                border: 1px solid var(--color-border-dark) !important;
            }

            /* Стеклянные инпуты */
            input[type="text"], input[type="time"], select {
                background-color: rgba(255, 255, 255, 0.4) !important; backdrop-filter: blur(10px) !important; border-radius: 12px !important; border: 1px solid rgba(255, 255, 255, 0.8) !important;
            }
            .dark input[type="text"], .dark input[type="time"], .dark select {
                background-color: rgba(0, 0, 0, 0.2) !important; border: 1px solid rgba(255, 255, 255, 0.1) !important;
            }

            h1, h2, h3 { font-weight: 400 !important; letter-spacing: -0.03em !important; text-transform: none !important; }
            .uppercase { letter-spacing: 0.05em !important; }
            .btn-press { border-radius: 12px !important; }
        `,
        locales: {
            en: { "dash_subtitle_main": "Executive Workspace", "macro_title": "Strategic Initiatives", "quad_1": "IMMEDIATE ACTION [Q1]", "quad_2": "STRATEGIC GROWTH [Q2]", "quad_3": "DELEGATE [Q3]", "quad_4": "ELIMINATE [Q4]", "empty_tasks": "No action items.", "lbl_macro": "Initiative", "btn_init_macro": "New Initiative", "archived": "Completed Operations" },
            ru: { "dash_subtitle_main": "Рабочее пространство", "macro_title": "СТРАТЕГИЧЕСКИЕ ИНИЦИАТИВЫ", "quad_1": "СДЕЛАТЬ СЕЙЧАС [Q1]", "quad_2": "СТРАТЕГИЯ И РОСТ [Q2]", "quad_3": "ДЕЛЕГИРОВАТЬ [Q3]", "quad_4": "УДАЛИТЬ [Q4]", "empty_tasks": "Нет активных задач.", "lbl_macro": "Инициатива", "btn_init_macro": "Новая Инициатива", "archived": "Завершенные операции" }
        }
    }
};

// Функция парсинга тем, которая вставляет CSS в Head
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

    if (typeof applyI18n === 'function') applyI18n(); 
}

// Сразу применяем тему
applySystemTheme();