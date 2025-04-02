document.addEventListener("DOMContentLoaded", () => {
    // Navbar scroll effect
    const navbar = document.querySelector(".navbar")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
    })
  
    // Mobile menu toggle
    const menuToggle = document.getElementById("menu-toggle")
    const navLinks = document.getElementById("nav-links")
  
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
  
      // Animate hamburger menu
      const spans = menuToggle.querySelectorAll("span")
      spans.forEach((span) => span.classList.toggle("active"))
    })
  
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll(".nav-link")
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("active")
      })
    })
  
    // Portfolio modal with iframe preview
    const portfolioItems = document.querySelectorAll(".portfolio-item")
    const modal = document.getElementById("portfolioModal")
    const modalContent = document.getElementById("modalContent")
    const closeModal = document.querySelector(".close-modal")
  
    // Datos de proyectos del portafolio
    const portfolioProjects = {
      proyecto1: {
        title: "Barbería Don Barbas 222",
        description: "Página web para barbería local",
        previewUrl: "https://barberiadonbarbas222.com/",
        features: [
          "Diseño responsive adaptado a todos los dispositivos",
          
          "Galería de trabajos realizados",
          "Información de servicios y precios",
          "Integración con redes sociales",
        ],
        iframeUrl: "https://barberiadonbarbas222.com/",
      },
      proyecto2: {
        title: "Laboratorio Dental Skaylab",
        description: "Página web para laboratorio dental ",
        previewUrl: "https://laboratoriodentalskaylab.com/",
        features: [
          "Menú de servicios",
          "Sección de quienes somos y por qué escogernos",
          "Ubicación del negocio",
          "Diseño responsive adaptado a todos los dispositivos",
          "Integración con redes sociales"
        ],
        iframeUrl: "https://laboratoriodentalskaylab.com/",
      },
      proyecto3: {
        title: "Ferretería Tecnillaves",
        description: "Página web para ferretería y cerrajería",
        previewUrl: "https://tecnillavesferreteria.com/",
        features: [
          "Catálogo de productos ",
          "Ubicación del negocio",
          "Contacto de emergencia",
          "Diseño responsive adaptado a todos los dispositivos",
          "Integración con redes sociales"
          
        ],
        iframeUrl: "https://tecnillavesferreteria.com/",
      },
      
    }
  
    portfolioItems.forEach((item) => {
      const viewButton = item.querySelector(".btn-view")
      viewButton.addEventListener("click", () => {
        const projectId = item.getAttribute("data-project")
        const projectData = portfolioProjects[projectId]
  
        // Create modal content with iframe
        modalContent.innerHTML = `
                  <h2>${projectData.title}</h2>
                  <div class="modal-description">
                      <p>${projectData.description}</p>
                  </div>
                  <div class="modal-iframe-container">
                      <iframe src="${projectData.iframeUrl}" title="${projectData.title}" class="project-iframe"></iframe>
                  </div>
                  <div class="modal-features">
                      <h3>Características del proyecto:</h3>
                      <ul>
                          ${projectData.features.map((feature) => `<li><i class="fas fa-check"></i> ${feature}</li>`).join("")}
                      </ul>
                  </div>
                  
              `
  
        modal.style.display = "block"
        document.body.style.overflow = "hidden"
      })
    })
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    })
  
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none"
        document.body.style.overflow = "auto"
      }
    })
  
    // FAQ accordion
    const faqItems = document.querySelectorAll(".faq-item")
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")
  
      question.addEventListener("click", () => {
        // Close all other items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active")
          }
        })
  
        // Toggle current item
        item.classList.toggle("active")
      })
    })
  
    
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          const navbarHeight = document.querySelector(".navbar").offsetHeight
          const targetPosition = targetElement.offsetTop - navbarHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  })
  
  
  
  