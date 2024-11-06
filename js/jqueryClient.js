function home(linksVav) {
    window.location.href = linksVav; // Supprimez les guillemets autour de linksVav
}

// let currentPage = 1;

// const contentDiv = document.getElementById('content');

// function loadPage(pageNumber) {
//     currentPage = pageNumber;

//     // Désactive la page active et active la nouvelle page
//     document.querySelectorAll('.page-item').forEach((item) => {
//         item.classList.remove('active');
//     });
//     document.getElementById(`page${pageNumber}`).classList.add('active');

//     // Logique de changement de contenu pour la page
//     contentDiv.innerHTML = `<h2>Contenu de la page ${pageNumber}</h2>`;
//     updatePagination();
// }

// function updatePagination() {
//     if (currentPage === 1) {
//         document.getElementById('previousPage').classList.add('disabled');
//     } else {
//         document.getElementById('previousPage').classList.remove('disabled');
//     }

//     if (currentPage === 2) {
//         document.getElementById('nextPage').classList.add('disabled');
//     } else {
//         document.getElementById('nextPage').classList.remove('disabled');
//     }
// }

function changePage(direction) {
    if (direction === 'prev' && currentPage > 1) {
        loadPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < 2) {
        loadPage(currentPage + 1);
    }
}

// Initialisation de la première page
loadPage(1);