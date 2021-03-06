{
  'use strict';

  /* Sidemenu */
  function toggleMenu() {
    const menuButton = document.querySelector('.burger');
    const sidebar = document.querySelector('.menu');

    menuButton.addEventListener('click', function (event) {
      event.preventDefault();
      sidebar.classList.toggle('active');
    })
  };

  /* Active pages */

  const linksClickHandler = function (event) {

    event.preventDefault();
    const clickedPage = this;
    const activeLinks = document.querySelectorAll('.nav-links  a.active');


    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    clickedPage.classList.add('active');

    const activePages = document.querySelectorAll('.active');

    for (let activePage of activePages) {
      activePage.classList.remove('active');
    }

    const pageSelector = clickedPage.getAttribute('href');
    const targetPage = document.querySelector(pageSelector);
    targetPage.classList.add('active');
  };
  const links = document.querySelectorAll('.nav-links a');
  for (let link of links) {
    link.addEventListener('click', linksClickHandler);
  }

  /* Modals */
  function closeModal() {
    document.getElementById('overlay').classList.remove('show');
    console.log('active');
  }

  document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
    });
  });

  document.querySelector('#overlay').addEventListener('click', function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

  document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
      closeModal();
    }
  });

  function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function (modal) {
      modal.classList.remove('show');
    });
    document.querySelector('#overlay').classList.add('show');
    document.querySelector(modal).classList.add('show');
  }

  document.querySelector('.manager').addEventListener('click', function (e) {
      openModal('#ModalMessage');
  });

  document.querySelector('.quit').addEventListener('click', function (e) {
      openModal('#ModalQuit');
  });

  document.querySelector('.profile').addEventListener('click', function (e) {
      openModal('#ModalLogin');
  });

  document.querySelector('.out').addEventListener('click', function (e) {
    openModal('#ModalQuit');
  });

  document.querySelector('.log').addEventListener('click', function (e) {
    openModal('#ModalLogin');
  });



  /* Chart */
  function initChart() {
    const ctx = document.getElementById('myChart').getContext('2d');

    // eslint-disable-next-line no-undef
    const myChart = new Chart(ctx, {
      // 1
      type: 'bar',
      data: {
        // 2
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        // 3
        datasets: [{
            // 4
            label: 'Signups',
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
          },
          {
            label: 'FTD',
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
          },
          {
            label: 'Earned',
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
            // 7
            hidden: true,
          }
        ]
      },
    });
  }

  const app = function () {
    toggleMenu();
    initChart();
  };

  app();

}