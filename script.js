const itemWraper = document.querySelectorAll('.item__wraper');

itemWraper.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        itemWraper.forEach(item =>  {
            item.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
    })
})