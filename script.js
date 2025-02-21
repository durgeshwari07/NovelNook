window.onscroll =() =>{
    search.classList.remove('active');
    navbar.classList.remove('active'); 
  }
  
  
  let header = document.querySelector ('header');
  
  window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
    });
  
  
  
  // // Select elements
  const menuIcon = document.getElementById("menu-icon");
  const nav = document.querySelector(".nav");
  const searchIcon = document.querySelector(".bx bx-search"); // Search icon (adjust if different)
  const searchBox = document.querySelector(".search-box");
  
  // // Toggle menu
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
  
  // // Toggle search bar
  searchIcon.addEventListener("click", () => {
    searchBox.classList.toggle("active");
  });
  
  // // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
        navbar.classList.remove("active");
    }
    
    if (!searchIcon.contains(event.target) && !searchBox.contains(event.target)) {
        searchBox.classList.remove("active");
    }
  });
  
  
  
  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  
  
  /////////////////////
  
