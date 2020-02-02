$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#wrapper').toggleClass('offset-2')
    });

    $('#searchIcon').on('click', function (){
       $('#search').toggleClass('d-none'); 
    });

    $('.navButton').on('click', function (e) {
        // Animatie Bara de navigare
        
        $('li.active').each(function () {  $(this).removeClass('active', 1000, "easeInBack"); });
        var parent = $(this).parent();
        $(parent).addClass('active');        
        
        // Activare domeniu 

        var sections = document.getElementsByTagName('section');
        var targetIndex;

        for (let i = 0; i < sections.length; i++) {
            const selected = sections[i].id;
            
            if(!(sections[i].id == "wrapper"))
                sections[i].style.display = "none";

            if(selected == e.target.id)
                sections[i].style.display = "block";
        }        
    });
    
    $('#settings').on('click', function(){
        $('.settings').toggleClass('d-none');
        $('.content').toggleClass('d-none');
    });
});