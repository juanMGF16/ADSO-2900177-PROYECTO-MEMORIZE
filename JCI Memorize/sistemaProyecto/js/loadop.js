function simulateLoading() {
    var loadingBar = document.getElementById('loading-bar');
    
    setTimeout(function() {
        loadingBar.style.width = '100%';
        
        setTimeout(function() {
            window.location.href = 'http://localhost/sistemaProyecto/home.php';
        }, 2000);
    }, 2500);
}

simulateLoading();