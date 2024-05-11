document.getElementById('expand-btn1').addEventListener('click', function() {
    var section = document.getElementById('expandableSection1');
    section.classList.toggle('expanded');

    this.textContent = section.classList.contains('expanded') ? 'Read Less' : 'Read More';
});

document.getElementById('expand-btn2').addEventListener('click', function() {
    var section = document.getElementById('expandableSection2');
    section.classList.toggle('expanded');

    this.textContent = section.classList.contains('expanded') ? 'Read Less' : 'Read More';
});

document.getElementById('expand-btn3').addEventListener('click', function() {
    var section = document.getElementById('expandableSection3');
    section.classList.toggle('expanded');

    this.textContent = section.classList.contains('expanded') ? 'Read Less' : 'Read More';
});
