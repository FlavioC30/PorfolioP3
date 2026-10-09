// --- BILINGUAL DICTIONARY (i18n) ---
const dict = {
    es: {
        booting: "Cargando FC_OS Kernel...",
        file: "Archivo", edit: "Edición", view: "Visualización", go: "Ir", window: "Ventana", help: "Ayuda",
        aboutDrop: "Acerca de Flavio Cesar", prefDrop: "Preferencias del Sistema...", installDrop: "Instalar FC_OS App ⬇️", restartDrop: "Reiniciar Sistema...",
        theme: "Tema", brightness: "Brillo de Pantalla",
        sideProfile: "Perfil", sideSkills: "Habilidades", sideExp: "Experiencia", sideEdu: "Educación",
        profTitle: "Hola, soy Flavio Cesar.", profSub: "Ingeniero Frontend Senior & Arquitecto de Interfaces.",
        profP1: "No construyo simples páginas web, construyo <b>ecosistemas interactivos</b>. Este portafolio es la prueba de ello: un sistema operativo completo ejecutándose en tu navegador, diseñado con PWA nativo, manipulación avanzada del DOM, Glassmorphism y arquitecturas escalables.",
        profP2: "Si buscas a un desarrollador que lleve el código y el diseño al <b>siguiente nivel</b>, con animaciones matemáticas (cubic-bezier) y optimización Senior, has encontrado a la persona correcta.",
        btnHire: "Contrátame Ahora", btnCv: "📄 Descargar CV Nativo",
        skillTitle: "Stack Tecnológico", expTitle: "Experiencia Profesional", eduTitle: "Educación",
        mailTitle: "¿Trabajamos juntos?", mailSub: "Envíame un correo directo para hablar sobre oportunidades laborales, proyectos freelance o colaboraciones.", btnSend: "Enviar Propuesta ✈️"
    },
    en: {
        booting: "Loading FC_OS Kernel...",
        file: "File", edit: "Edit", view: "View", go: "Go", window: "Window", help: "Help",
        aboutDrop: "About Flavio Cesar", prefDrop: "System Preferences...", installDrop: "Install FC_OS App ⬇️", restartDrop: "Restart System...",
        theme: "Theme", brightness: "Display Brightness",
        sideProfile: "Profile", sideSkills: "Skills", sideExp: "Experience", sideEdu: "Education",
        profTitle: "Hi, I'm Flavio Cesar.", profSub: "Senior Frontend Engineer & UI Architect.",
        profP1: "I don't just build webpages, I build <b>interactive ecosystems</b>. This portfolio is proof: a complete web OS running in your browser, built with native PWA, advanced DOM manipulation, Glassmorphism, and scalable architectures.",
        profP2: "If you're looking for a developer who takes code and design to the <b>next level</b>, with mathematical animations and Senior optimization, you've found the right person.",
        btnHire: "Hire Me Now", btnCv: "📄 Download Native CV",
        skillTitle: "Tech Stack", expTitle: "Professional Experience", eduTitle: "Education",
        mailTitle: "Let's work together?", mailSub: "Send me a direct email to discuss job opportunities, freelance projects, or collaborations.", btnSend: "Send Proposal ✈️"
    }
};

let currentLang = 'es';

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.getElementById('lang-indicator').textContent = currentLang.toUpperCase();
    
    document.getElementById('t-booting').innerHTML = dict[currentLang].booting;
    document.getElementById('t-menu-file').innerHTML = dict[currentLang].file;
    document.getElementById('t-menu-edit').innerHTML = dict[currentLang].edit;
    document.getElementById('t-menu-view').innerHTML = dict[currentLang].view;
    document.getElementById('t-menu-go').innerHTML = dict[currentLang].go;
    document.getElementById('t-menu-window').innerHTML = dict[currentLang].window;
    document.getElementById('t-menu-help').innerHTML = dict[currentLang].help;
    document.getElementById('t-drop-about').innerHTML = dict[currentLang].aboutDrop;
    document.getElementById('t-drop-pref').innerHTML = dict[currentLang].prefDrop;
    document.getElementById('t-drop-install').innerHTML = dict[currentLang].installDrop;
    document.getElementById('t-drop-restart').innerHTML = dict[currentLang].restartDrop;
    document.getElementById('t-cc-theme').innerHTML = dict[currentLang].theme;
    document.getElementById('t-cc-brightness').innerHTML = dict[currentLang].brightness;
    document.getElementById('t-side-profile').innerHTML = dict[currentLang].sideProfile;
    document.getElementById('t-side-skills').innerHTML = dict[currentLang].sideSkills;
    document.getElementById('t-side-exp').innerHTML = dict[currentLang].sideExp;
    document.getElementById('t-side-edu').innerHTML = dict[currentLang].sideEdu;
    document.getElementById('t-prof-title').innerHTML = dict[currentLang].profTitle;
    document.getElementById('t-prof-sub').innerHTML = dict[currentLang].profSub;
    document.getElementById('t-prof-p1').innerHTML = dict[currentLang].profP1;
    document.getElementById('t-prof-p2').innerHTML = dict[currentLang].profP2;
    document.getElementById('t-btn-hire').innerHTML = dict[currentLang].btnHire;
    document.getElementById('t-btn-cv').innerHTML = dict[currentLang].btnCv;
    document.getElementById('t-skill-title').innerHTML = dict[currentLang].skillTitle;
    document.getElementById('t-exp-title').innerHTML = dict[currentLang].expTitle;
    document.getElementById('t-edu-title').innerHTML = dict[currentLang].eduTitle;
    document.getElementById('t-mail-title').innerHTML = dict[currentLang].mailTitle;
    document.getElementById('t-mail-sub').innerHTML = dict[currentLang].mailSub;
    document.getElementById('t-btn-send').innerHTML = dict[currentLang].btnSend;
}

// --- PREMIUM CURSOR & AMBIENT GLOW LOGIC ---
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
const ambientGlow = document.getElementById('ambient-glow');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ringX = mouseX;
let ringY = mouseY;

if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if(cursorDot) cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.15; // Smooth trailing effect
        ringY += (mouseY - ringY) * 0.15;
        
        if(cursorRing) cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        if(ambientGlow) ambientGlow.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        
        requestAnimationFrame(animateRing);
    }
    requestAnimationFrame(animateRing);

    // Hover interactions for the custom cursor
    document.querySelectorAll('button, .menu-item, .dock-item, .context-item, .theme-option, li, .status-icon, .desktop-icon').forEach(el => {
        el.addEventListener('mouseenter', () => {
            if(cursorDot) { cursorDot.style.width = '12px'; cursorDot.style.height = '12px'; cursorDot.style.background = 'transparent'; cursorDot.style.border = '2px solid var(--accent)'; }
            if(cursorRing) { cursorRing.style.width = '60px'; cursorRing.style.height = '60px'; cursorRing.style.borderColor = 'rgba(0,122,255,0.8)'; }
        });
        el.addEventListener('mouseleave', () => {
            if(cursorDot) { cursorDot.style.width = '6px'; cursorDot.style.height = '6px'; cursorDot.style.background = 'var(--accent)'; cursorDot.style.border = 'none'; }
            if(cursorRing) { cursorRing.style.width = '34px'; cursorRing.style.height = '34px'; cursorRing.style.borderColor = 'rgba(0,122,255,0.5)'; }
        });
    });
}

// --- MAC VERBOSE BOOT SEQUENCE ---
document.addEventListener("DOMContentLoaded", () => {
    const terminal = document.getElementById('boot-terminal');
    const logs = [
        "Darwin Kernel Version 22.1.0: root:xnu-8792.41.9~2/RELEASE_ARM64_T8112",
        "Boot args: -v keepsyms=1 debug=0x100",
        "Mac-FC-Architecture: Apple M3 Max",
        "panic(cpu 0 caller 0xfffffe0013b8a1c): \"Unexpected genius activity detected\"",
        "Initializing FC_OS Core System...",
        "Virtual DOM Filesystem mounted at /dev/disk1s1",
        "PWA Service Worker registered and active.",
        "ACPI: sleep states S0 S3 S4 S5",
        "IOKit daemon (rubicon) active.",
        "System Policy: Security set to Permissive for Developer Mode",
        "Graphic Engine: WebGL 2.0 initialized (Metal simulation via CSS3)",
        "[SUCCESS] UI Framework Loaded. Booting GUI..."
    ];

    let i = 0;
    const interval = setInterval(() => {
        if(i < logs.length) {
            const p = document.createElement('div');
            p.textContent = `[${(Math.random() * 2).toFixed(4)}] ${logs[i]}`;
            p.style.marginBottom = '4px';
            if(logs[i].includes('panic')) p.style.color = '#ffbd2e';
            if(logs[i].includes('[SUCCESS]')) p.style.color = '#27c93f';
            terminal.appendChild(p);
            i++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                terminal.style.display = 'none';
                const gui = document.getElementById('boot-gui');
                gui.style.opacity = '1';
                
                // Progress Bar
                let progress = 0;
                const bar = document.getElementById('boot-progress');
                const loader = setInterval(() => {
                    progress += Math.random() * 20;
                    if(progress > 100) progress = 100;
                    bar.style.width = progress + '%';
                    
                    if(progress === 100) {
                        clearInterval(loader);
                        setTimeout(() => {
                            const bootScreen = document.getElementById('boot-screen');
                            bootScreen.style.opacity = '0';
                            bootScreen.style.transform = 'scale(1.1)';
                            setTimeout(() => {
                                bootScreen.style.display = 'none';
                                document.getElementById('desktop').classList.remove('hidden-desktop');
                                fetchGitHubRepos('torvalds'); // Initialize GitHub Fetch
                            }, 800);
                        }, 400);
                    }
                }, 80);
            }, 800);
        }
    }, 150);
});

// --- CLOCK ---
function updateClock() {
    const now = new Date();
    const daysES = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const daysEN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const monthsEN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    let hours = now.getHours();
    let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
    let d = currentLang === 'es' ? daysES : daysEN;
    let m = currentLang === 'es' ? monthsES : monthsEN;
    
    document.getElementById('clock').textContent = `${d[now.getDay()]} ${now.getDate()} ${m[now.getMonth()]} ${hours}:${minutes}`;
}
setInterval(updateClock, 1000);

// --- WINDOW MANAGER & PHYSICS ---
let highestZIndex = 100;
let isDragging = false;
let draggedElement = null;
let initialX, initialY, xOffset = 0, yOffset = 0;

function openApp(appId, appName, event) {
    const win = document.getElementById(`window-${appId}`);
    const dot = document.getElementById(`dot-${appId}`);
    
    if(win) {
        // Advanced Apple UI: Scale window from the exact click position!
        if (event && window.innerWidth > 768) {
            let rect = event.currentTarget.getBoundingClientRect();
            let originX = rect.left + (rect.width/2);
            let originY = rect.top + (rect.height/2);
            // Convert to percentage relative to window width/height to set origin properly
            let winRect = win.getBoundingClientRect();
            // Fallback to center bottom if it gets too complex mathematically, but let's try visual trick:
            win.style.transformOrigin = `${originX}px ${originY}px`;
        } else {
            win.style.transformOrigin = "center bottom";
        }

        win.classList.remove('hidden');
        bringToFront(win);
    }
    
    if(dot) dot.classList.add('active');
    document.getElementById('active-app-name').textContent = appName;
    
    if(appId === 'terminal') {
        setTimeout(() => document.getElementById('terminal-input').focus(), 400);
    }
}

function closeApp(appId) {
    const win = document.getElementById(`window-${appId}`);
    const dot = document.getElementById(`dot-${appId}`);
    
    if(win) {
        win.classList.add('hidden');
    }
    if(dot) dot.classList.remove('active');
    document.getElementById('active-app-name').textContent = 'FC Explorer';
}

function toggleMaximize(windowId) {
    document.getElementById(windowId).classList.toggle('maximized');
}

function bringToFront(element) {
    highestZIndex++;
    element.style.zIndex = highestZIndex;
    document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
    element.classList.add('active');
}

document.addEventListener('mousedown', (e) => {
    const header = e.target.closest('.window-header');
    if (header && !header.closest('.window').classList.contains('maximized')) {
        draggedElement = header.closest('.window');
        bringToFront(draggedElement);
        
        const title = draggedElement.querySelector('.window-title').textContent.split(' - ')[0];
        document.getElementById('active-app-name').textContent = title;

        if(e.target === header || e.target.classList.contains('window-title') || e.target.closest('.safari-bar') || e.target.classList.contains('terminal-header')) {
            isDragging = true;
            const style = window.getComputedStyle(draggedElement);
            const matrix = new WebKitCSSMatrix(style.transform);
            xOffset = matrix.m41 || 0;
            yOffset = matrix.m42 || 0;
            
            if (xOffset === 0 && yOffset === 0 && draggedElement.style.left) {
                const rect = draggedElement.getBoundingClientRect();
                draggedElement.style.left = '0px';
                draggedElement.style.top = '0px';
                xOffset = rect.left;
                yOffset = rect.top;
            }
            
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }
    } else if (e.target.closest('.window')) {
        bringToFront(e.target.closest('.window'));
    }
});

document.addEventListener('mousemove', (e) => {
    if (isDragging && draggedElement) {
        e.preventDefault();
        let currentX = e.clientX - initialX;
        let currentY = e.clientY - initialY;
        
        if (currentY < 28) currentY = 28;
        if (currentY > window.innerHeight - 40) currentY = window.innerHeight - 40;
        if (currentX > window.innerWidth - 100) currentX = window.innerWidth - 100;
        if (currentX < -draggedElement.offsetWidth + 100) currentX = -draggedElement.offsetWidth + 100;

        draggedElement.style.transition = 'none';
        draggedElement.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(1)`;
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging && draggedElement) { draggedElement.style.transition = ''; }
    isDragging = false; draggedElement = null;
});

// --- OVERLAYS & TOGGLES ---
function toggleSpotlight() {
    const el = document.getElementById('spotlight-overlay');
    el.classList.toggle('hidden');
    if(!el.classList.contains('hidden')) {
        setTimeout(() => document.getElementById('spotlight-input').focus(), 100);
        document.getElementById('spotlight-input').value = '';
    }
}
function toggleControlCenter() { document.getElementById('control-center').classList.toggle('hidden'); }

// --- VIP PLUS: WIDGETS LOGIC ---
function toggleWidgets() {
    const sidebar = document.getElementById('widget-sidebar');
    if(!sidebar) return;
    sidebar.classList.toggle('hidden');
    
    // Update Dynamic Calendar
    const daysES = ['DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
    const daysEN = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    let d = currentLang === 'es' ? daysES : daysEN;
    
    document.getElementById('widget-day-name').textContent = d[new Date().getDay()];
    let dateNum = new Date().getDate();
    document.getElementById('widget-day-num').textContent = dateNum < 10 ? '0'+dateNum : dateNum;
}

document.querySelector('.menu-dropdown-btn').addEventListener('click', (e) => { e.stopPropagation(); document.getElementById('apple-menu').classList.toggle('hidden'); });
document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); toggleSpotlight(); }
    if (e.key === 'Escape') {
        document.getElementById('spotlight-overlay').classList.add('hidden');
        document.getElementById('control-center').classList.add('hidden');
        document.getElementById('apple-menu').classList.add('hidden');
        const ws = document.getElementById('widget-sidebar');
        if(ws) ws.classList.add('hidden');
    }
});

// --- SMART CONTEXT MENU ---
const contextMenu = document.getElementById('context-menu');
const cmItems = document.getElementById('cm-dynamic-items');

document.addEventListener('contextmenu', (e) => {
    if(e.target.closest('.dock') || e.target.closest('.window-header')) return; 
    e.preventDefault();
    
    let html = '';
    if(e.target.closest('.desktop-icon')) {
        html += `<div class="context-item" onclick="alert('Abriendo archivo...')">Abrir Archivo</div>`;
        html += `<div class="context-item" onclick="alert('Copiado.')">Copiar Nombre</div>`;
    } else if(e.target.closest('.window-body')) {
        html += `<div class="context-item" onclick="alert('Copiado')">Copiar</div>`;
        html += `<div class="context-item" onclick="alert('Seleccionado')">Seleccionar Todo</div>`;
    } else {
        html += `<div class="context-item" onclick="location.reload()">Recargar FC_OS</div>`;
        html += `<div class="context-item" onclick="openApp('settings', 'Preferencias')">Cambiar Fondo...</div>`;
        html += `<div class="context-divider"></div>`;
        html += `<div class="context-item" onclick="openApp('terminal', 'Terminal')">Nueva Terminal Aquí</div>`;
    }
    
    cmItems.innerHTML = html;
    contextMenu.style.left = `${e.clientX}px`;
    contextMenu.style.top = `${e.clientY}px`;
    contextMenu.classList.remove('hidden');
});
document.addEventListener('click', (e) => {
    if(e.button !== 2) contextMenu.classList.add('hidden');
    if(!e.target.closest('#control-center') && !e.target.closest('.status-icon')) { document.getElementById('control-center').classList.add('hidden'); }
    if(!e.target.closest('#apple-menu') && !e.target.classList.contains('menu-dropdown-btn')) { document.getElementById('apple-menu').classList.add('hidden'); }
    if(!e.target.closest('#widget-sidebar') && !e.target.closest('#clock')) { 
        const ws = document.getElementById('widget-sidebar');
        if(ws) ws.classList.add('hidden'); 
    }
});

// --- DOCK MAGNIFICATION ---
const dockItems = document.querySelectorAll('.dock-item');
const dockContainer = document.getElementById('mac-dock');
const baseSize = 56; const maxScale = 1.6; const proximity = 150;

dockContainer.addEventListener('mousemove', (e) => {
    if(window.innerWidth < 768) return; 
    dockItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const iconCenter = rect.left + rect.width / 2;
        const distance = Math.abs(e.clientX - iconCenter);
        if (distance < proximity) {
            const scale = 1 + (maxScale - 1) * Math.pow(1 - distance / proximity, 2);
            item.querySelector('.app-icon-container').style.transform = `scale(${scale})`;
            item.style.width = `${baseSize * scale}px`;
            item.style.margin = `0 ${(scale-1)*8}px`;
            item.classList.add('magnified');
        } else { resetDockItem(item); }
    });
});
dockContainer.addEventListener('mouseleave', () => dockItems.forEach(resetDockItem));
function resetDockItem(item) {
    item.querySelector('.app-icon-container').style.transform = 'scale(1)';
    item.style.width = `${baseSize}px`; item.style.margin = '0';
    item.classList.remove('magnified');
}

// --- FC EXPLORER ---
function switchFinderTab(viewId, element) {
    const listItems = element.parentElement.querySelectorAll('li');
    listItems.forEach(li => li.classList.remove('active'));
    element.classList.add('active');
    const views = document.querySelectorAll('.finder-view');
    views.forEach(v => v.style.display = 'none');
    document.getElementById('view-' + viewId).style.display = 'block';
}

// --- GITHUB API FETCHING (LIVE PROJECTS + 3D TILT) ---
async function fetchGitHubRepos(username) {
    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const repos = await res.json();
        
        document.getElementById('github-loader').style.display = 'none';
        const grid = document.getElementById('github-repos-grid');
        grid.style.display = 'grid';
        grid.innerHTML = '';
        
        repos.forEach(repo => {
            const isDark = document.body.classList.contains('dark-theme');
            const bg = isDark ? '#1a1a1a' : '#ffffff';
            const border = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
            
            const card = document.createElement('div');
            card.className = 'project-card';
            card.style.cssText = `background: ${bg}; border-radius: 12px; border: 1px solid ${border}; padding: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); cursor:pointer;`;
            
            // 3D Tilt Effect!
            card.addEventListener('mousemove', e => {
                let rect = card.getBoundingClientRect();
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;
                let centerX = rect.width / 2;
                let centerY = rect.height / 2;
                let rotateX = ((y - centerY) / centerY) * -8;
                let rotateY = ((x - centerX) / centerX) * 8;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
            });
            card.addEventListener('mouseleave', () => { card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`; });
            
            card.onclick = () => window.open(repo.html_url, '_blank');
            
            card.innerHTML = `
                <div style="font-size: 24px; margin-bottom: 15px;">📁</div>
                <h3 style="margin-bottom: 10px; font-size: 18px;">${repo.name}</h3>
                <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 15px; min-height: 40px;">${repo.description || 'No description provided.'}</p>
                <div style="display:flex; justify-content:space-between; font-size: 12px; font-weight:600; color: var(--text-primary);">
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span style="color: var(--accent);">${repo.language || 'Code'}</span>
                </div>
            `;
            grid.appendChild(card);
        });
    } catch (e) {
        document.getElementById('github-loader').innerHTML = `<p style="color:red;">Error loading repos.</p>`;
    }
}

// --- TERMINAL ENGINE ---
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');
let vfs = JSON.parse(localStorage.getItem('fcos-vfs')) || {
    'resume.txt': 'Flavio Cesar - Senior Frontend Engineer\nSkills: React, Vue, WebGL',
    'contact.json': '{"email": "contacto@flaviocesar.dev"}'
};
function saveVFS() { localStorage.setItem('fcos-vfs', JSON.stringify(vfs)); }

terminalInput.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
        const cmdString = this.value.trim();
        this.value = '';
        const cmdLine = document.createElement('div');
        cmdLine.innerHTML = `<span class="prompt">flavio@fcos:~ $</span> ${cmdString}`;
        terminalOutput.appendChild(cmdLine);
        const responseLine = document.createElement('div');
        responseLine.style.marginBottom = '10px';
        const args = cmdString.split(' ');
        const cmd = args[0].toLowerCase();
        
        switch(cmd) {
            case 'help': responseLine.innerHTML = 'Commands: <br> - <b>ls</b>: List files <br> - <b>cat [file]</b>: Read file <br> - <b>echo [text] > [file]</b>: Write file <br> - <b>rm [file]</b>: Delete file <br> - <b>clear</b>: Clear screen'; break;
            case 'ls': responseLine.innerHTML = Object.keys(vfs).length > 0 ? Object.keys(vfs).map(f => `<span style="color:var(--accent); font-weight:bold;">${f}</span>`).join('  ') : 'Empty directory.'; break;
            case 'cat': if(args[1] && vfs[args[1]]) { responseLine.innerHTML = vfs[args[1]].replace(/\n/g, '<br>'); } else { responseLine.innerHTML = `cat: ${args[1]}: No such file or directory`; } break;
            case 'echo':
                const redirIndex = args.indexOf('>');
                if(redirIndex !== -1 && args[redirIndex+1]) {
                    vfs[args[redirIndex+1]] = args.slice(1, redirIndex).join(' ').replace(/['"]/g, '');
                    saveVFS(); responseLine.innerHTML = `[OK] File saved.`;
                } else { responseLine.innerHTML = args.slice(1).join(' '); } break;
            case 'rm': if(args[1] && vfs[args[1]]) { delete vfs[args[1]]; saveVFS(); responseLine.innerHTML = `[OK] Deleted ${args[1]}`; } else { responseLine.innerHTML = `rm: ${args[1]}: No such file`; } break;
            case 'whoami': responseLine.innerHTML = 'Flavio Cesar (Root Developer)'; break;
            case 'clear': terminalOutput.innerHTML = ''; return;
            case '': return;
            default: responseLine.innerHTML = `bash: ${cmd}: command not found`;
        }
        terminalOutput.appendChild(responseLine);
        document.querySelector('.terminal-body').scrollTop = document.querySelector('.terminal-body').scrollHeight;
    }
});

// --- MAIL LOGIC ---
function sendMail() {
    const btn = document.getElementById('t-btn-send');
    const original = btn.innerHTML;
    btn.innerHTML = 'Enviando...';
    setTimeout(() => {
        btn.innerHTML = '¡Enviado con Éxito!';
        btn.style.background = '#27c93f';
        setTimeout(() => { closeApp('contact'); btn.innerHTML = original; btn.style.background = 'var(--accent)'; }, 1500);
    }, 1500);
}

// --- SETTINGS LOGIC ---
document.getElementById('brightness-slider').addEventListener('input', (e) => {
    document.getElementById('brightness-overlay').style.opacity = (100 - e.target.value) / 100 * 0.8; 
});
function setTheme(mode) {
    const toggle = document.getElementById('dark-mode-toggle');
    const desktop = document.getElementById('desktop');
    if(mode === 'dark') {
        document.body.classList.add('dark-theme');
        toggle.classList.add('active');
        desktop.style.backgroundImage = "url('C:/Users/Intel/.gemini/antigravity-ide/brain/8e5e3ce8-b93d-4307-a591-49cd9b11587e/macos_wallpaper_1791568271003.jpg')";
    } else {
        document.body.classList.remove('dark-theme');
        toggle.classList.remove('active');
        desktop.style.backgroundImage = "url('C:/Users/Intel/.gemini/antigravity-ide/brain/8e5e3ce8-b93d-4307-a591-49cd9b11587e/macos_light_wallpaper_1791569506721.jpg')";
    }
}
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.contains('dark-theme') ? setTheme('light') : setTheme('dark');
});

// --- PWA INSTALLATION PROMPT ---
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredPrompt = e; });
function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => { deferredPrompt = null; });
    } else { alert("PWA Install prompt no disponible."); }
}
