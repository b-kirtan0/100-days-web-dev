
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalCard = document.getElementById("modalCard");
    const modalImg = document.getElementById("modalImg");
    const modalName = document.getElementById("modalName");
    const modalAgeGender = document.getElementById("modalAgeGender");
    const modalDesc = document.getElementById("modalDesc");
    const closeBtn = document.getElementById("closeModal");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const img = card.querySelector("img").src;
            const name = card.querySelector("h2").innerText;
            const spans = card.querySelectorAll(".info span");
            const age = spans[0].innerText;
            const gender = spans[1].innerText;
            const petname = spans[2].innerText
            const desc = card.querySelector(".card-desc").innerText;


            modalImg.src = img;
            modalName.innerText = name;
            modalAgeGender.innerText = `${age} ${gender} ${petname}`;
            modalDesc.innerText = desc;

            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Optional: close modal when clicking outside the card
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
