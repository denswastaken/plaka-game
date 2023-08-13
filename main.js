const cities = {
    "01": "Adana",
    "02": "Adıyaman",
    "03": "Afyonkarahisar",
    "04": "Ağrı",
    "05": "Amasya",
    "06": "Ankara",
    "07": "Antalya",
    "08": "Artvin",
    "09": "Aydın",
    "10": "Balıkesir",
    "11": "Bilecik",
    "12": "Bingöl",
    "13": "Bitlis",
    "14": "Bolu",
    "15": "Burdur",
    "16": "Bursa",
    "17": "Çanakkale",
    "18": "Çankırı",
    "19": "Çorum",
    "20": "Denizli",
    "21": "Diyarbakır",
    "22": "Edirne",
    "23": "Elazığ",
    "24": "Erzincan",
    "25": "Erzurum",
    "26": "Eskişehir",
    "27": "Gaziantep",
    "28": "Giresun",
    "29": "Gümüşhane",
    "30": "Hakkâri",
    "31": "Hatay",
    "32": "Isparta",
    "33": "Mersin",
    "34": "İstanbul",
    "35": "İzmir",
    "36": "Kars",
    "37": "Kastamonu",
    "38": "Kayseri",
    "39": "Kırklareli",
    "40": "Kırşehir",
    "41": "Kocaeli",
    "42": "Konya",
    "43": "Kütahya",
    "44": "Malatya",
    "45": "Manisa",
    "46": "Kahramanmaraş",
    "47": "Mardin",
    "48": "Muğla",
    "49": "Muş",
    "50": "Nevşehir",
    "51": "Niğde",
    "52": "Ordu",
    "53": "Rize",
    "54": "Sakarya",
    "55": "Samsun",
    "56": "Siirt",
    "57": "Sinop",
    "58": "Sivas",
    "59": "Tekirdağ",
    "60": "Tokat",
    "61": "Trabzon",
    "62": "Tunceli",
    "63": "Şanlıurfa",
    "64": "Uşak",
    "65": "Van",
    "66": "Yozgat",
    "67": "Zonguldak",
    "68": "Aksaray",
    "69": "Bayburt",
    "70": "Karaman",
    "71": "Kırıkkale",
    "72": "Batman",
    "73": "Şırnak",
    "74": "Bartın",
    "75": "Ardahan",
    "76": "Iğdır",
    "77": "Yalova",
    "78": "Karabük",
    "79": "Kilis",
    "80": "Osmaniye",
    "81": "Düzce"
};

const cityImages = {
    "01": "01adana.png",
    "02": "02adiyaman.png",
    "03": "03afyonkarahisar.png",
    "04": "04agri.png",
    "05": "05amasya.png",
    "06": "06ankara.png",
    "07": "07antalya.png",
    "08": "08artvin.png",
    "09": "09aydin.png",
    "10": "10balikesir.png",
    "11": "11bilecik.png",
    "12": "12bingol.png",
    "13": "13bitlis.png",
    "14": "14bolu.png",
    "15": "15burdur.png",
    "16": "16bursa.png",
    "17": "17canakkale.png",
    "18": "18cankiri.png",
    "19": "19corum.png",
    "20": "20denizli.png",
    "21": "21diyarbakir.png",
    "22": "22edirne.png",
    "23": "23elazig.png",
    "24": "24erzincan.png",
    "25": "25erzurum.png",
    "26": "26eskisehir.png",
    "27": "27gaziantep.png",
    "28": "28giresun.png",
    "29": "29gumushane.png",
    "30": "30hakkari.png",
    "31": "31hatay.png",
    "32": "32isparta.png",
    "33": "33mersin.png",
    "34": "34istanbul.png",
    "35": "35izmir.png",
    "36": "36kars.png",
    "37": "37kastamonu.png",
    "38": "38kayseri.png",
    "39": "39kirklareli.png",
    "40": "40kirsehir.png",
    "41": "41kocaeli.png",
    "42": "42konya.png",
    "43": "43kutahya.png",
    "44": "44malatya.png",
    "45": "45manisa.png",
    "46": "46kahramanmaras.png",
    "47": "47mardin.png",
    "48": "48mugla.png",
    "49": "49mus.png",
    "50": "50nevsehir.png",
    "51": "51nigde.png",
    "52": "52ordu.png",
    "53": "53rize.png",
    "54": "54sakarya.png",
    "55": "55samsun.png",
    "56": "56siirt.png",
    "57": "57sinop.png",
    "58": "58sivas.png",
    "59": "59tekirdag.png",
    "60": "60tokat.png",
    "61": "61trabzon.png",
    "62": "62tunceli.png",
    "63": "63sanliurfa.png",
    "64": "64usak.png",
    "65": "65van.png",
    "66": "66yozgat.png",
    "67": "67zonguldak.png",
    "68": "68aksaray.png",
    "69": "69bayburt.png",
    "70": "70karaman.png",
    "71": "71kirikkale.png",
    "72": "72batman.png",
    "73": "73sirnak.png",
    "74": "74bartin.png",
    "75": "75ardahan.png",
    "76": "76igdir.png",
    "77": "77yalova.png",
    "78": "78karabuk.png",
    "79": "79kilis.png",
    "80": "80osmaniye.png",
    "81": "81duzce.png"
};
const optionsDiv = document.getElementById("options");
const resultDiv = document.getElementById("result");
const randomPlakaElement = document.getElementById("random-plaka");
const pointsDisplay = document.getElementById("points");
let currentNumber;
let answered = false;
let points = 0;

function displayOptions() {
    optionsDiv.innerHTML = "";
    const correctCity = cities[currentNumber];
    const options = Object.values(cities).filter(city => city !== correctCity);

    const shuffledOptions = shuffleArray(options).slice(0, 1);

    shuffledOptions.push(correctCity);
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach(option => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = option;

        // Set background image using city code
        const cityCode = Object.keys(cities).find(key => cities[key] === option);
        optionElement.style.backgroundImage = `linear-gradient(var(--orange-blur), var(--orange-blur)), url('img/cities/${cityImages[cityCode]}')`;

        optionElement.addEventListener("click", () => {
            if (!answered) {
                answered = true;
                checkAnswer(option);
            }
        });
        optionsDiv.appendChild(optionElement);
    });
}

function disableOptions(correctCity) {
    const optionElements = document.querySelectorAll(".option");
    optionElements.forEach(optionElement => {
        optionElement.removeEventListener("click", () => { });
        optionElement.style.pointerEvents = "none";

        if (optionElement.textContent === correctCity) {
            optionElement.style.width = "80%";
            optionElement.style.border = "4px solid var(--green)";
        } else {
            optionElement.style.width = "10%";
            optionElement.style.border = "4px solid var(--red)";
        }
    });
}

function checkAnswer(selectedCity) {
    const correctCity = cities[currentNumber];
    disableOptions(correctCity);

    if (selectedCity === correctCity) {
        resultDiv.textContent = "Tebrikler! Doğru cevap!";
        document.body.style.backgroundColor = "var(--dark-green)";
        points++;
        pointsDisplay.textContent = `SKOR: ${points}`;
    } else {
        resultDiv.textContent = `Yanlış cevap. ${currentNumber}, ${correctCity} ilinin plakası.`;
        document.body.style.backgroundColor = "var(--dark-red)";
        points = 0;
        pointsDisplay.textContent = `SKOR: ${points}`;
    }
    setTimeout(() => {
        resultDiv.textContent = "";
        document.body.style.backgroundColor = "var(--gray)";
        generateQuestion();
        answered = false;
    }, 1500);
}

function generateRandomPlate(cityCode) {
    const city = cities[cityCode];
    const randomLetters = generateRandomString(1, 3, "ABCDEFGHIJKLMNOPRSTUVYZ");
    const randomNumbers = generateRandomString(2, 4, "0123456789");
    return `${cityCode} ${randomLetters} ${randomNumbers}`;
}

function generateRandomString(minLength, maxLength, characters) {
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * Object.keys(cities).length);
    currentNumber = Object.keys(cities)[randomIndex];
    const questionDiv = document.getElementById("question");
    questionDiv.textContent = `${currentNumber} hangi ilimizin plaka kodudur?`;

    // Generate and display a random number plate
    const randomPlate = generateRandomPlate(currentNumber);
    randomPlakaElement.textContent = `${randomPlate}`;

    displayOptions();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

generateQuestion();

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    var darkFavicon = document.querySelector('link[media="(prefers-color-scheme: dark)"]');
    darkFavicon.href = '/img/favicon-white.png';
}