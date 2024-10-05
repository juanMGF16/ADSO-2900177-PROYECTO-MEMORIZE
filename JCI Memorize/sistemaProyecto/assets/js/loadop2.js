function simulateLoading() {
    var loadingBar = document.getElementById('loading-bar');
    
    setTimeout(function() {
        loadingBar.style.width = '66%'; 
        loadingBar.style.backgroundColor = '#ffff00'; 
        
        setTimeout(function() {
            loadingBar.style.width = '33%'; 
            loadingBar.style.backgroundColor = '#ff0000'; 
            
            setTimeout(function() {
                loadingBar.style.width = '0%'; 
                
                setTimeout(function() {
                    window.location.href = 'http://localhost/sistemaProyecto/ordenar.php';
                }, 2000); 
            }, 2000); 
        }, 2000); 
    }, 2500); 
}

simulateLoading();

