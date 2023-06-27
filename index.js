let tablinks = document.getElementsByClassName('tabs_links');
let tabContents = document.getElementsByClassName('tab_contents');
function openTab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove('active_link');
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove('active_tab');
  }
  event.currentTarget.classList.add('active_link');
  document.getElementById(tabname).classList.add('active_tab');
}

const sidemenu = document.getElementById('sidemenu');
function openmenu() {
  sidemenu.style.right = '0';
}
function closemenu() {
  sidemenu.style.right = '-200px';
}
const scriptURL =
  'https://script.google.com/macros/s/AKfycbyMRo0VEWsuBHmVHCDm-09KH7P_m0lc-sbEPjOAK0pYknXysTfoYkk2-VzhF0HLnCn-XQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = 'Message sent successfully';
      setTimeout(() => {
        msg.innerHTML = '';
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});
