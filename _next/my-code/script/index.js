const ListText = [
    { text: "[ Juan Hulu", color: "#D83F87" },
    { text: "[ Python programming", color: "#6E3FD8" },
    { text: "[ Pelajar", color: "#3FBFD8" },
    { text: "[ Gunungsitoli", color: "#00de00" },
];

async function carousel(carouselList, eleRef) {
    let i = 0;
    while (true) {
        updateFontColor(eleRef, carouselList[i].color);
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i = (i + 1) % carouselList.length;
    }
}

function updateFontColor(eleRef, color) {
    eleRef.style.color = color;
}

async function typeSentence(text, eleRef) {
    const cursorSpan = document.createElement("span");
    cursorSpan.textContent = " ]";
    eleRef.appendChild(cursorSpan);

    for (let i = 0; i < text.length; i++) {
        eleRef.textContent = text.slice(0, i + 1);
        eleRef.appendChild(cursorSpan);
        await waitForMs(50);
    }
}

async function deleteSentence(eleRef) {
    while (eleRef.textContent.length > 1) {
        eleRef.textContent = eleRef.textContent.slice(0, -1);
        await waitForMs(50);
    }
}

function waitForMs(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const eleRef = document.getElementById("text");

carousel(ListText, eleRef);

const sections = document.querySelectorAll('.black-image-container');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateX(0)';
            entry.target.style.opacity = 1;
        } else {
            entry.target.style.transform = 'translateX(-100px)';
            entry.target.style.opacity = 0;
        }
    });
}, {
    threshold: 0.1
});
sections.forEach(section => {
    observer.observe(section);
});
