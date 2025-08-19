// Funcionalidad principal del sitio web educativo

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeMobileMenu();
    initializeOSTabs();
    initializeIDETabs();
    initializeProjectTabs();
    initializeMethodTabs();
    initializeCopyButtons();
    initializeErrorAccordion();
    initializeScrollToTop();
});

// Gestión de pestañas principales
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Mostrar la primera pestaña por defecto
    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons[0].classList.add('active');
        tabContents[0].classList.add('active');
    }
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remover clase active de todos los botones y contenidos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Agregar clase active al botón clickeado y su contenido correspondiente
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
            
            // Scroll suave al contenido
            setTimeout(() => {
                targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });
    });
}

// Gestión del menú móvil
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const tabButtons = document.getElementById('tabButtons');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    if (mobileMenuToggle && tabButtons) {
        // Toggle del menú móvil
        mobileMenuToggle.addEventListener('click', function() {
            tabButtons.classList.toggle('mobile-open');
            
            // Cambiar icono
            const icon = this.querySelector('i');
            if (tabButtons.classList.contains('mobile-open')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Cerrar menú al hacer click en una pestaña
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    tabButtons.classList.remove('mobile-open');
                    const icon = mobileMenuToggle.querySelector('i');
                    icon.className = 'fas fa-bars';
                }
            });
        });
        
        // Cerrar menú al redimensionar la ventana
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                tabButtons.classList.remove('mobile-open');
                const icon = mobileMenuToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });
        
        // Cerrar menú al hacer click fuera de él
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-tabs') && tabButtons.classList.contains('mobile-open')) {
                tabButtons.classList.remove('mobile-open');
                const icon = mobileMenuToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });
    }
}

// Gestión de pestañas de sistemas operativos
function initializeOSTabs() {
    const osTabGroups = document.querySelectorAll('.os-tabs');
    
    osTabGroups.forEach(group => {
        const buttons = group.querySelectorAll('.os-tab-btn');
        const contents = group.parentElement.querySelectorAll('.os-tab-content');
        
        // Mostrar la primera pestaña por defecto
        if (buttons.length > 0 && contents.length > 0) {
            buttons[0].classList.add('active');
            contents[0].classList.add('active');
        }
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const targetOS = this.getAttribute('data-os');
                
                // Remover clase active de todos los botones y contenidos del grupo
                buttons.forEach(btn => btn.classList.remove('active'));
                contents.forEach(content => content.classList.remove('active'));
                
                // Agregar clase active al botón clickeado y su contenido correspondiente
                this.classList.add('active');
                const targetContent = group.parentElement.querySelector(`[data-os-content="${targetOS}"]`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    });
}

// Gestión de pestañas de IDEs
function initializeIDETabs() {
    const ideTabGroups = document.querySelectorAll('.ide-tabs');
    
    ideTabGroups.forEach(group => {
        const buttons = group.querySelectorAll('.ide-tab-btn');
        const contents = group.parentElement.querySelectorAll('.ide-tab-content');
        
        // Mostrar la primera pestaña por defecto
        if (buttons.length > 0 && contents.length > 0) {
            buttons[0].classList.add('active');
            contents[0].classList.add('active');
        }
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const targetIDE = this.getAttribute('data-ide');
                
                // Remover clase active de todos los botones y contenidos del grupo
                buttons.forEach(btn => btn.classList.remove('active'));
                contents.forEach(content => content.classList.remove('active'));
                
                // Agregar clase active al botón clickeado y su contenido correspondiente
                this.classList.add('active');
                const targetContent = group.parentElement.querySelector(`[data-ide-content="${targetIDE}"]`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    });
}

// Gestión de pestañas de proyectos
function initializeProjectTabs() {
    const projectTabGroups = document.querySelectorAll('.project-tabs');
    
    projectTabGroups.forEach(group => {
        const buttons = group.querySelectorAll('.project-tab-btn');
        const contents = group.parentElement.querySelectorAll('.project-tab-content');
        
        // Mostrar la primera pestaña por defecto
        if (buttons.length > 0 && contents.length > 0) {
            buttons[0].classList.add('active');
            contents[0].classList.add('active');
        }
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const targetProject = this.getAttribute('data-project');
                
                // Remover clase active de todos los botones y contenidos del grupo
                buttons.forEach(btn => btn.classList.remove('active'));
                contents.forEach(content => content.classList.remove('active'));
                
                // Agregar clase active al botón clickeado y su contenido correspondiente
                this.classList.add('active');
                const targetContent = group.parentElement.querySelector(`[data-project-content="${targetProject}"]`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    });
}

// Gestión de pestañas de métodos
function initializeMethodTabs() {
    const methodTabGroups = document.querySelectorAll('.method-tabs');
    
    methodTabGroups.forEach(group => {
        const buttons = group.querySelectorAll('.method-tab-btn');
        const contents = group.parentElement.querySelectorAll('.method-tab-content');
        
        // Mostrar la primera pestaña por defecto
        if (buttons.length > 0 && contents.length > 0) {
            buttons[0].classList.add('active');
            contents[0].classList.add('active');
        }
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const targetMethod = this.getAttribute('data-method');
                
                // Remover clase active de todos los botones y contenidos del grupo
                buttons.forEach(btn => btn.classList.remove('active'));
                contents.forEach(content => content.classList.remove('active'));
                
                // Agregar clase active al botón clickeado y su contenido correspondiente
                this.classList.add('active');
                const targetContent = group.parentElement.querySelector(`[data-method-content="${targetMethod}"]`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    });
}

// Funcionalidad de copiar código
function initializeCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const codeBlock = this.closest('.code-block').querySelector('code');
            const textToCopy = codeBlock.textContent;
            
            // Usar la API moderna del portapapeles si está disponible
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showCopyFeedback(this);
                }).catch(err => {
                    console.error('Error al copiar:', err);
                    fallbackCopyTextToClipboard(textToCopy, this);
                });
            } else {
                // Fallback para navegadores más antiguos
                fallbackCopyTextToClipboard(textToCopy, this);
            }
        });
    });
}

// Función fallback para copiar texto
function fallbackCopyTextToClipboard(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopyFeedback(button);
        } else {
            console.error('Error al copiar el texto');
        }
    } catch (err) {
        console.error('Error al copiar:', err);
    }
    
    document.body.removeChild(textArea);
}

// Mostrar feedback visual al copiar
function showCopyFeedback(button) {
    const originalText = button.textContent;
    button.textContent = '¡Copiado!';
    button.style.background = '#10b981';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 2000);
}

// Acordeón para errores comunes
function initializeErrorAccordion() {
    const errorItems = document.querySelectorAll('.error-item h4');
    
    errorItems.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isOpen = content.style.display === 'block';
            
            // Cerrar todos los otros elementos
            errorItems.forEach(otherHeader => {
                const otherContent = otherHeader.nextElementSibling;
                if (otherContent !== content) {
                    otherContent.style.display = 'none';
                    otherHeader.style.background = '#f8fafc';
                }
            });
            
            // Toggle del elemento actual
            if (isOpen) {
                content.style.display = 'none';
                this.style.background = '#f8fafc';
            } else {
                content.style.display = 'block';
                this.style.background = '#e2e8f0';
            }
        });
    });
}

// Botón de scroll hacia arriba
function initializeScrollToTop() {
    // Crear botón de scroll to top
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollButton);
    
    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    
    // Funcionalidad de scroll hacia arriba
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Efectos hover
    scrollButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.background = '#5a67d8';
    });
    
    scrollButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.background = '#667eea';
    });
}

// Función para resaltar sintaxis básica en bloques de código
function highlightSyntax() {
    const codeBlocks = document.querySelectorAll('code');
    
    codeBlocks.forEach(block => {
        let html = block.innerHTML;
        
        // Resaltar comandos comunes
        html = html.replace(/\b(npm|yarn|flutter|gradle|dotnet|adb|cd|mkdir|git)\b/g, '<span style="color: #10b981; font-weight: bold;">$1</span>');
        
        // Resaltar flags y opciones
        html = html.replace(/(--[a-zA-Z-]+|-[a-zA-Z])/g, '<span style="color: #f59e0b;">$1</span>');
        
        // Resaltar rutas y archivos
        html = html.replace(/([a-zA-Z]:\\.+|\/.+|\.[a-zA-Z]+)/g, '<span style="color: #8b5cf6;">$1</span>');
        
        block.innerHTML = html;
    });
}

// Función para lazy loading de imágenes (si se agregan en el futuro)
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Función para mejorar la accesibilidad
function enhanceAccessibility() {
    // Agregar atributos ARIA a las pestañas
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach((button, index) => {
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        button.setAttribute('aria-controls', button.getAttribute('data-tab'));
    });
    
    tabContents.forEach((content, index) => {
        content.setAttribute('role', 'tabpanel');
        content.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
    });
    
    // Navegación por teclado
    tabButtons.forEach((button, index) => {
        button.addEventListener('keydown', function(e) {
            let targetIndex;
            
            if (e.key === 'ArrowRight') {
                targetIndex = index + 1 >= tabButtons.length ? 0 : index + 1;
            } else if (e.key === 'ArrowLeft') {
                targetIndex = index - 1 < 0 ? tabButtons.length - 1 : index - 1;
            } else if (e.key === 'Home') {
                targetIndex = 0;
            } else if (e.key === 'End') {
                targetIndex = tabButtons.length - 1;
            }
            
            if (targetIndex !== undefined) {
                e.preventDefault();
                tabButtons[targetIndex].focus();
                tabButtons[targetIndex].click();
            }
        });
    });
}

// Función para analytics básicos (opcional)
function trackUserInteraction(action, category, label) {
    // Implementar tracking si es necesario
    console.log(`Acción: ${action}, Categoría: ${category}, Etiqueta: ${label}`);
}

// Función para manejar errores de JavaScript
window.addEventListener('error', function(e) {
    console.error('Error en el sitio web:', e.error);
    // Aquí se podría implementar un sistema de reporte de errores
});

// Función para optimizar el rendimiento
function optimizePerformance() {
    // Debounce para eventos de scroll
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) originalScrollHandler();
        }, 16); // ~60fps
    };
}

// Inicializar funciones adicionales
document.addEventListener('DOMContentLoaded', function() {
    highlightSyntax();
    enhanceAccessibility();
    optimizePerformance();
    
    // Agregar clase loaded al body para animaciones CSS
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Función para manejar el modo oscuro (preparación futura)
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        
        // Cargar preferencia guardada
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }
}

// Exportar funciones para uso global si es necesario
window.AppFunctions = {
    initializeTabs,
    initializeOSTabs,
    initializeIDETabs,
    initializeProjectTabs,
    initializeMethodTabs,
    showCopyFeedback,
    trackUserInteraction
};