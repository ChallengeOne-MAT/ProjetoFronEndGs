function initMap() {
    const center = { lat: -23.55052, lng: -46.633308 }; // Localização do centro de São Paulo, por exemplo.

    // Criação do mapa
    const map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 14,
        center: center,
    });

    // Adicionar marcadores (exemplo)
    const marker1 = new google.maps.Marker({
        position: { lat: -23.55052, lng: -46.633308 },
        map: map,
        title: "Hub Solar - Praça Central"
    });

    const marker2 = new google.maps.Marker({
        position: { lat: -23.56152, lng: -46.642308 },
        map: map,
        title: "Hub Solar - Centro Comunitário"
    });
}

// Carregar o mapa com a API do Google Maps
window.onload = function() {
    initMap();
};
