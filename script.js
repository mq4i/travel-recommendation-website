const form = document.querySelector(".search_bar");
const input = document.querySelector(".search_bar input");
const results = document.getElementById("search-results");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    
    if (document.getElementById("about") || document.getElementById("contact")) {
        alert("Return to the Home page to use the search feature and see results.");
        return;
    }
    
    let value = input.value.toLowerCase();
      
    if (value === "beach" || value === "beaches") {
        results.innerHTML = `
            <div class = "card-destination">
                <img src = "images/sydney_beach.jpg" alt = "Sydney Beach">
                <div class = "card-content">
                    <h3>Sydney, Australia</h3>
                    <p>a vibrant coastal city famous for its stunning harbour, golden beaches, and iconic landmarks.</p>
                </div>
            </div>

            <div class = "card-destination">
                <img src = "images/miami_beach.jpg" alt = "Miami Beach">
                <div class = "card-content">
                    <h3>Miami, USA</h3>
                    <p>a sunny city famous for its warm beaches, clear turquoise waters, and vibrant nightlife.</p>
                </div>
            </div>`;

    } else if (value === "country" || value === "countries") {
        results.innerHTML = `
            <div class = "card-destination">
                <img src = "images/japan_country.jpg" alt = "Japan Country">
                <div class = "card-content">
                    <h3>Japan</h3>
                    <p>a country known for seamlessly blending ancient traditions with cutting-edge technology, offering a unique travel experience.</p>
                </div>
            </div>

            <div class = "card-destination">
                <img src = "images/italy_country.jpg" alt = "Italy Country">
                <div class = "card-content">
                    <h3>Italy</h3>
                    <p>a country known for its deep history, beautiful architecture, flavorful food, and scenic landscapes.</p>
                </div>
            </div>`;

    } else if (value === "city" || value === "cities") {
        results.innerHTML = `
            <div class = "card-destination">
                <img src = "images/paris_city.jpg" alt = "Paris City">
                <div class = "card-content">
                    <h3>Paris, France</h3>
                    <p>a city known for its romantic ambiance, iconic landmarks, world-class art, and vibrant culture.</p>
                </div>
            </div>

            <div class = "card-destination">
                <img src = "images/dubai_city.jpg" alt = "Dubai City">
                <div class = "card-content">
                    <h3>Dubai, UAE</h3>
                    <p>a city known for its iconic skyline, world-class shopping, and rich cultural experiences.</p>
                </div>
            </div>`;
    
    } else if (value === "temple" || value === "temples") {
        results.innerHTML = `
            <div class = "card-destination">
                <img src = "images/angkor_temple.jpg" alt = "Angkor Wat Temple">
                <div class = "card-content">
                    <h3>Angkor Wat, Cambodia</h3>
                    <p>a temple complex known for its stunning architecture, intricate carvings, and rich history.</p>
                </div>
            </div>

            <div class = "card-destination">
                <img src = "images/borobudur_temple.jpg" alt = "Borobudur Temple">
                <div class = "card-content">
                    <h3>Borobudur, Indonesia</h3>
                    <p>a massive Buddhist temple known for its intricate reliefs, serene atmosphere, and historical significance.</p>
                </div>
            </div>`;

    } else if (value === "museum" || value === "museums") {
        results.innerHTML = `
            <div class = "card-destination">
                <img src = "images/louvre_museum.jpg" alt = "Louvre Museum">
                <div class = "card-content">
                    <h3>Louvre Museum, Paris</h3>
                    <p>a world famous museum known for its collection of art and historical artifacts, including the Mona Lisa.</p>
                </div>o
            </div>

            <div class = "card-destination">
                <img src = "images/british_museum.jpg" alt = "British Museum">
                <div class = "card-content">
                    <h3>British Museum, London</h3>
                    <p>a museum known for its vast collection of artifacts from around the world, spanning centuries of human history.</p>
                </div>
            </div>`;

    } else {
        results.innerHTML = `<p class="no-results">No results found</p>`;
    }
});