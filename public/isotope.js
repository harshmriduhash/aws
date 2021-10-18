// init Isotope
var $grid = $('.iso-grid').isotope({
    // options
});
// filter items on button click
$('.portfolio-filter').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});

const filterBtns = document.querySelectorAll('.filter-btn');


function activeBtnChange() {
    for (let i = 0; i < filterBtns.length; i++) {
        let btn = filterBtns[i];

        btn.addEventListener('click', () => {
            filterBtns.forEach(element => {
                element.classList.remove('bg-emerald-400');
                element.classList.remove('text-white');
                element.classList.add('text-trueGray-900');
            });

            btn.classList.remove('bg-emerald-400');
            btn.classList.add('bg-emerald-400');
            btn.classList.remove('text-trueGray-900');
            btn.classList.add('text-white')
        })
    }
}

activeBtnChange()