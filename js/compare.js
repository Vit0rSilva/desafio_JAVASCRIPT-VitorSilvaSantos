let carsToCompareArr = [];

class CarModel {
    constructor(m_name, m_price, m_alturaCacamba, m_alturaVeiculo, m_alturaSolo, m_capacidadeCarga, m_motor, m_potencia, m_volumeCacamba, m_roda, m_image){
        this.m_name = m_name;
        this.m_price = m_price;
        this.m_alturaCacamba = m_alturaCacamba;
        this.m_alturaVeiculo = m_alturaVeiculo;
        this.m_alturaSolo = m_alturaSolo;
        this.m_capacidadeCarga = m_capacidadeCarga;
        this.m_motor = m_motor;
        this.m_potencia = m_potencia;
        this.m_volumeCacamba = m_volumeCacamba;
        this.m_roda = m_roda;
        this.m_image = m_image;
    }
}

function getCarPositionInArray(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].m_name === carClass.m_name) return i;
    }
    return -1;
}

function toggleCarForCompare(el, carClass) {
    if (carClass instanceof CarModel) {
        if (el.checked) {
            if (carsToCompareArr.length >= 2) {
                alert("Você só pode comparar 2 carros por vez");
                el.checked = false;
                return;
            }
            carsToCompareArr.push(carClass);
        } else {
            const index = getCarPositionInArray(carsToCompareArr, carClass);
            if (index !== -1) carsToCompareArr.splice(index, 1);
        }
    } else {
        throw "You need set a Car Class";
    }
}

function showCompare() {
    if (carsToCompareArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    updateCompareTable();
    document.getElementById("compare").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function hideCompare() {
    document.getElementById("compare").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function updateCompareTable() {
    const car1 = carsToCompareArr[0];
    const car2 = carsToCompareArr[1];

    if (!car1 || !car2) {
        console.error("Car data is missing.");
        return;
    }

    const compareImage0 = document.getElementById("compare_image_0");
    const compareImage1 = document.getElementById("compare_image_1");
    if (compareImage0 && compareImage1) {
        compareImage0.innerHTML = `<img src="${car1.m_image}" alt="${car1.m_name}" style="width:100px;">`;
        compareImage1.innerHTML = `<img src="${car2.m_image}" alt="${car2.m_name}" style="width:100px;">`;
    }

    document.getElementById("compare_modelo_0").innerText = car1.m_name;
    document.getElementById("compare_modelo_1").innerText = car2.m_name;

    document.getElementById("compare_alturacacamba_0").innerText = `${car1.m_alturaCacamba} mm`;
    document.getElementById("compare_alturacacamba_1").innerText = `${car2.m_alturaCacamba} mm`;

    document.getElementById("compare_alturaveiculo_0").innerText = `${car1.m_alturaVeiculo} mm`;
    document.getElementById("compare_alturaveiculo_1").innerText = `${car2.m_alturaVeiculo} mm`;

    document.getElementById("compare_alturasolo_0").innerText = `${car1.m_alturaSolo} mm`;
    document.getElementById("compare_alturasolo_1").innerText = `${car2.m_alturaSolo} mm`;

    document.getElementById("compare_capacidadecarga_0").innerText = `${car1.m_capacidadeCarga} kg`;
    document.getElementById("compare_capacidadecarga_1").innerText = `${car2.m_capacidadeCarga} kg`;

    document.getElementById("compare_motor_0").innerText = car1.m_motor;
    document.getElementById("compare_motor_1").innerText = car2.m_motor;

    document.getElementById("compare_potencia_0").innerText = `${car1.m_potencia} cv`;
    document.getElementById("compare_potencia_1").innerText = `${car2.m_potencia} cv`;

    document.getElementById("compare_volumecacamba_0").innerText = `${car1.m_volumeCacamba} L`;
    document.getElementById("compare_volumecacamba_1").innerText = `${car2.m_volumeCacamba} L`;

    document.getElementById("compare_roda_0").innerText = `${car1.m_roda}`;
    document.getElementById("compare_roda_1").innerText = `${car2.m_roda}`;

    document.getElementById("compare_preco_0").innerText = `R$ ${car1.m_price.toLocaleString('pt-BR')}`;
    document.getElementById("compare_preco_1").innerText = `R$ ${car2.m_price.toLocaleString('pt-BR')}`;

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    carsToCompareArr = [];
}
