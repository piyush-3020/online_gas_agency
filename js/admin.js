const allSideMenu = document.querySelectorAll('.sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

// Toggle Sidebar

const menubar = document.querySelector('#menu');
const sidebar = document.getElementById('sidebar');


menubar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
})

if (window.outerWidth < 730) {
    sidebar.classList.add('hide');
}

const searchButton = document.querySelector('.content .navbar form .form-input button');
const searchButtonIcon = document.querySelector('.content .navbar form .form-input button .bx');
const searchForm = document.querySelector('.content .navbar form');

searchButton.addEventListener('click', function (e) {

    if (window.outerWidth < 500) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if(searchForm.classList.contains('show')) {
            searchButtonIcon.classList.replace('bx-search' , 'bx-x');
        }else {
            searchButtonIcon.classList.replace('bx-x' , 'bx-search');
        }
    }

})

window.addEventListener('resize', function() {
    if (this.outerWidth > 500) {
        searchButtonIcon.classList.replace('bx-x' , 'bx-search');
        searchForm.classList.remove('show');
    }
})