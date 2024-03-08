document.addEventListener("DOMContentLoaded", function() {
    const viewDetailButtons = document.querySelectorAll(".view-details");
    const detailSection = document.getElementById("detail");
    const detailContent = document.getElementById("detail-content");
    const closeDetailButton = document.getElementById("close-detail");
    const cardContainer = document.querySelector(".row.row-cols-1.row-cols-md-3.mb-3.text-center.mx-3");

    // Add event listener to each "View Details" button
    viewDetailButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            // Hide all cards
            cardContainer.style.display = "none";

            const details = [{
                    name: "Turtwig",
                    description: "Turtwig, a Grass-type Pokémon, is recognized by its large, leafy green shell, which serves as both protection and a symbol of its natural affinity for the environment. This shell, adorned with a small twig poking out, is the source of its name. Turtwig is known to possess a calm and gentle demeanor, often seen basking in sunlight to recharge its energy. Despite its placid nature, Turtwig's determination and perseverance are notable traits, especially when facing challenges.",
                    type: "Grass",
                    gif: "assets/img/det_turtwig.gif"
                },
                {
                    name: "Chimchar",
                    description: "Chimchar, a Fire-type Pokémon, is distinguished by the fiery tuft atop its head, which ignites when it becomes excited or agitated. This playful and energetic Pokémon is known for its mischievous nature and boundless enthusiasm. Chimchar's tail flame serves as an indicator of its emotions, flickering brightly when it is happy and flaring up fiercely when it is angry or threatened.",
                    type: "Fire",
                    gif: "assets/img/det_chimchar.gif"
                },
                {
                    name: "Piplup",
                    description: "Piplup, a Water-type Pokémon, is recognized by its distinctive blue body and large, yellow beak. This adorable and dignified Pokémon exudes an air of sophistication and grace, reminiscent of a regal penguin. Piplup is often seen sporting a small tuft of feathers on its head, adding to its charming appearance.",
                    type: "Water",
                    gif: "assets/img/det_piplup.gif"
                }
                // Add more Pokémon details as needed
            ];

            // Get details for the clicked Pokémon
            const {
                name,
                description,
                type,
                gif
            } = details[index];

            switch (type) {
                case "Grass":
                    detailSection.style.backgroundImage = "url('assets/img/grass_bg.jpg')";
                    break;
                case "Fire":
                    detailSection.style.backgroundImage = "url('assets/img/fire_bg.jpg')";
                    break;
                case "Water":
                    detailSection.style.backgroundImage = "url('assets/img/water_bg.jpg')";
                    break;
                default:
                    detailSection.style.backgroundColor = "#FFFFFF"; // White as default
            }

            // Populate detail section with Pokémon details
            detailContent.innerHTML = `
                <img src="${gif}" alt="${name}" class="pokemon-gif" style="width: 200px;">
                <h3 style="padding-top: 50px;">${name}</h3>
                <p>${description}</p>
            `;

            // Show detail section
            detailSection.style.display = "block";
        });
    });

    // Add event listener to close button
    closeDetailButton.addEventListener("click", function() {
        // Hide detail section
        detailSection.style.display = "none";

        // Show all cards
        cardContainer.style.display = "flex";
    });
});