        // Fecha de actualización automática
        // document.getElementById('fecha-actualizacion').textContent = new Date().toLocaleDateString('es-CL', {
        //     day: 'numeric',
        //     month: 'long',
        //     year: 'numeric'
        // });

        // Funcionalidad para las preguntas frecuentes
        const faqPreguntas = document.querySelectorAll('.faq-pregunta');
        faqPreguntas.forEach(pregunta => {
            pregunta.addEventListener('click', () => {
                const faqItem = pregunta.parentElement;
                faqItem.classList.toggle('activo');
                
                // Cambiar ícono
                const icono = pregunta.querySelector('i');
                if (faqItem.classList.contains('activo')) {
                    icono.classList.remove('fa-chevron-down');
                    icono.classList.add('fa-chevron-up');
                } else {
                    icono.classList.remove('fa-chevron-up');
                    icono.classList.add('fa-chevron-down');
                }
            });
        });

        // Mejorar el botón de compartir por WhatsApp
        const whatsappBtn = document.getElementById('whatsapp-share');
        whatsappBtn.href = `https://api.whatsapp.com/send?text=Mira%20esta%20página%20comunitaria%20de%20Villa%20Nogales%20de%20Nos%20(San%20Bernardo)%3A%20${encodeURIComponent(window.location.href)}`;

        // Simulación de carga de datos desde JSON
        // En una implementación real, esto cargaría desde un archivo JSON externo
        const datosComunidad = {
            "nombre": "Villa Nogales de Nos",
            "comuna": "San Bernardo",
            "actualizacion": new Date().toISOString().split('T')[0],
            "emergencias": {
                "carabineros": "133",
                "pdi": "134",
                "bomberos": "132",
                "samu": "131"
            }
        };

        // Guardar en localStorage para simular persistencia de datos
        localStorage.setItem('datosComunidad', JSON.stringify(datosComunidad));

        // Suavizar el desplazamiento a los anclas
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 20,
                        behavior: 'smooth'
                    });
                }
            });
        });

         // Simular un mapa interactivo (en una implementación real se usaría Google Maps API)
        const mapaContainer = document.getElementById('mapa-container');
        const verMapaBtn = document.querySelector('.btn-accion[href*="maps.google.com"]');
        
        if (verMapaBtn) {
            verMapaBtn.addEventListener('click', function(e) {
                if (!confirm('Serás redirigido a Google Maps para ver la ubicación exacta de Villa Nogales de Nos. ¿Deseas continuar?')) {
                    e.preventDefault();
                }
            });
        }
