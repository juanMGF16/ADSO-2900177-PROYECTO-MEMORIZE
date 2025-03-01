
function simulateLoading() {
    var loadingDuration = 3000;  
    
    setTimeout(function() {
        window.location.href = '../home.html'; 
    }, loadingDuration);
}


document.addEventListener('DOMContentLoaded', simulateLoading);
