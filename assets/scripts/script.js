

// I admit that some of these following codes are NOT written by me, I had to ask countless of people for countless times on https://stackoverflow.com 
// And it doesnt also mean that I didn't write any of these code. ofc I actually wrote at least 70% of these codes 🤓☝️ 

// And trust me, asking was even harder. The more I ask, the more I had to fix/adapt the code in order to work 



// const openButton = document.getElementById('show_menuBar');
// const closeButton = document.getElementById('close_menuBar');
// const menuContainer = document.getElementById('m-menuBar_container');
// const navBar = document.getElementById('m-navigation_container');
// const botNavBar = document.getElementById('m-botNavigation_container');

// openButton.addEventListener('click', function() {
//     menuContainer.style.display = 'block';
//     openButton.style.display = 'none';
//     closeButton.style.display = 'block';
//     navBar.style.display = 'none';
//     botNavBar.style.display = 'none';
// });

// closeButton.addEventListener('click', function() {
//     menuContainer.style.display = 'none';
//     closeButton.style.display = 'none';
//     openButton.style.display = 'block';
//     navBar.style.display = 'flex';
//     botNavBar.style.display = 'block';
// });

// const openButton_fat = document.getElementById('show_menuBar_fat');
// const closeButton_fat = document.getElementById('close_menuBar_fat');
// const menuContainer_fat = document.getElementById('fat-menuBar_container');
// const navBar_fat = document.getElementById('fat-navigation_container');
// const botNavBar_fat = document.getElementById('fat-botNavigation_container');

// openButton_fat.addEventListener('click', function() {
//     menuContainer_fat.style.display = 'block';
//     openButton_fat.style.display = 'none';
//     closeButton_fat.style.display = 'block';
//     navBar_fat.style.display = 'none';
// });

// closeButton_fat.addEventListener('click', function() {
//     menuContainer_fat.style.display = 'none';
//     closeButton_fat.style.display = 'none';
//     openButton_fat.style.display = 'block';
//     navBar_fat.style.display = 'flex';
// });

// window.dispatchEvent(new Event('resize'));



// const menuToggle = document.getElementById('show-m-dropdown_menu_Btn');
// const dropdownMenu = document.getElementById('m-dropdown_menu');
// const dimOverlay = document.getElementById('dim-overlay');

// menuToggle.addEventListener('click', () => {
//    dropdownMenu.classList.toggle('active');
//    dimOverlay.classList.toggle('active');
// });

// // Close menu and remove dim if clicking outside the menu
// dimOverlay.addEventListener('click', () => {
//    dropdownMenu.classList.remove('active');
//    dimOverlay.classList.remove('active');
// });

// // Handle clicks on dropdown items to show/hide sub-dropdowns
// const dropdownItems = document.querySelectorAll('.m-dropdown_subMenu > a');

// dropdownItems.forEach(item => {
//    item.addEventListener('click', (e) => {
//       e.preventDefault(); // Prevent default anchor behavior
//       const subDropdown = item.nextElementSibling; // Get the associated sub-dropdown
//       subDropdown.classList.toggle('active'); // Toggle the clicked sub-dropdown
//    });
// });

const menuToggle = document.querySelector('.show-m-dropdown_menu_Btn');
const dropdownMenu = document.querySelector('.m-dropdown_menu');
const dimOverlay = document.querySelector('.dim-overlay');

menuToggle.addEventListener('click', () => {
   dropdownMenu.classList.toggle('active');
   dimOverlay.classList.toggle('active');
});

// Close menu and remove dim if clicking outside the menu
dimOverlay.addEventListener('click', () => {
   dropdownMenu.classList.remove('active');
   dimOverlay.classList.remove('active');
});

// Handle clicks on dropdown items to show/hide sub-dropdowns and toggle arrows
const dropdownItems = document.querySelectorAll('.m-dropdown_menu-item > a');

dropdownItems.forEach(item => {
   item.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior

      const subDropdown = item.nextElementSibling; // Get the associated sub-dropdown
      const downArrow = item.querySelector('.down'); // Get the down arrow
      const upArrow = item.querySelector('.up'); // Get the up arrow

      // Toggle submenu visibility and arrows
      subDropdown.classList.toggle('active');
      downArrow.classList.toggle('active');
      upArrow.classList.toggle('active');

      // to close other sub-dropdowns and reset their arrows(It's not really working though) : 
      // dropdownItems.forEach(otherItem => {
      //    if (otherItem !== item) {
      //       const otherSubDropdown = otherItem.nextElementSibling;
      //       const otherDownArrow = otherItem.querySelector('.down');
      //       const otherUpArrow = otherItem.querySelector('.up');

      //       otherSubDropdown.classList.remove('active');
      //       otherDownArrow.classList.remove('active');
      //       otherUpArrow.classList.remove('active');
      //    }
      // });
   });
});

function runCode() {
   const html = document.getElementById('htmlCode').value;
   const css = document.getElementById('cssCode').value;
   const js = document.getElementById('jsCode').value;

   // Open a new tab
   const newTab = window.open();

   // Write the code to the new tab
   newTab.document.open();
   newTab.document.write(`
       <!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Code Output</title>
           <style>${css}</style>
       </head>
       <body>
           ${html}
           <script>${js}</script>
       </body>
       </html>
   `);
   newTab.document.close();
}

// document.getElementsByClassName("login_btn").onclick = function () {
//    location.href = "/pages/login";
// };

let loginButtons = document.getElementsByClassName("login_btn");

for (let i = 0; i < loginButtons.length; i++) {
    loginButtons[i].onclick = function () {
        location.href = "/pages/login";
    };
}


let signUpButtons = document.getElementsByClassName("signUp_btn");

for (let i = 0; i < signUpButtons.length; i++) {
   signUpButtons[i].onclick = function () {
        location.href = "/pages/login";
    };
}