//1º GENERACIÓN ALEATORIA DE LA DISPONIBILIDAD

// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
var myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

let commonAvailability = [];
let counter = 0;

//---------- Generate random binary ----------

var getRandom = (a, b) => {
    if (Math.random() < 0.5) {
        return a;
    } else {
        return b;
    }
};

//---------- Assign availability ----------

var addSchedule = () => {
    for (let i = 0; i < myTeam.length; i++) {
        console.log (`Disponibilidad de  ${myTeam[i].name}`)
        for (let j = 0; j < WORK_HOURS.length; j++) {
            myTeam[i].availability[j] = getRandom('SI', 'NO');

            console.log (`${WORK_HOURS[j]}: ${myTeam[i].availability[j]}`)
        }

    }
}

//---------- Check common availability ----------

var checkAvailability = () => {
    console.log('----------------')

    for (let i = 0; i < WORK_HOURS.length; i++) {

        if ((myTeam[0].availability[i] == myTeam[1].availability[i] && myTeam[0].availability[i] == myTeam[2].availability[i]
        && myTeam[0].availability[i] == myTeam[3].availability[i]) && myTeam[0].availability[i] == 'SI') {
            
            counter++
            commonAvailability.push(WORK_HOURS[i]);
            return; /*Se puede hacer sin "return" para almacenar más franjas horas disponibles.*/
        }
    }
}

//---------- Show common availability in console ----------

var showAvailability = () => {
    if (counter > 0) {
        console.log(`Hueco encontrado en el horario ${commonAvailability}.`);
    } else {
        console.log ('Lo siento. No hay hueco disponible en el equipo.');
    }
}

//---------- Algorithm ----------

var algorithmExercise1 = () => {

    addSchedule();
    checkAvailability();
    showAvailability();
}

//---------- Call function ----------

algorithmExercise1();

console.log('');



//=====================================================

// 2º CALCULADORA DE CAMBIO ÓPTIMO DE BILLETES Y MONEDAS

var typesOfCurrency = [
    {
        value: 200,
        type: 'bill',
        units: 0,
    },
    {
        value: 100,
        type: 'bill',
        units: 0,
    },
    {
        value: 50,
        type: 'bill',
        units: 0,
    },
    {
        value: 20,
        type: 'bill',
        units: 0,
    },
    {
        value: 10,
        type: 'bill',
        units: 0,
    },
    {
        value: 5,
        type: 'bill',
        units: 0,
    },
    {
        value: 2,
        type: 'coin',
        units: 0,
    },
    {
        value: 1,
        type: 'coin',
        units: 0,
    },
    {
        value: 0.5,
        type: 'coin',
        units: 0,
    },
    {
        value: 0.2,
        type: 'coin',
        units: 0,
    },
    {
        value: 0.1,
        type: 'coin',
        units: 0,
    },
    {
        value: 0.05,
        type: 'coin',
        units: 0,
    },
    {
        value: 0.02,
        type: 'coin',
        units: 0,
    },
    {
        value: 0.01,
        type: 'coin',
        units: 0,
    },
];

let total = 0;
let payment = 0;
let change = 0;
let changeArray = [];

// ---------- Calculate change ----------

var changeCalculate = () => {
    for (let i = 0; i < typesOfCurrency.length; i++) {

        while (typesOfCurrency[i].value - change <= 0) {
            change = Math.round((change - typesOfCurrency[i].value) * 100) / 100;
            typesOfCurrency[i].units ++
        }
    }
}

//---------- Put together repeated ----------

var showChange = () => {
    for (let i = 0; i < typesOfCurrency.length; i++) {

        if (typesOfCurrency[i].units > 0) {
            
            console.log(`${typesOfCurrency[i].units} ${typesOfCurrency[i].type} of ${typesOfCurrency[i].value}€`);
        }
    }
}

//---------- Reset ----------

var resetUnits = () => {
    for (let i = 0; i < typesOfCurrency.length; i++) {
        typesOfCurrency[i].units = 0;
    }
}

//---------- Algorithm ----------

var algorithmExercise2 = () => {
    total = document.getElementById('total').value;
    payment = document.getElementById('payment').value;
    change = payment - total;

    changeCalculate();
    showChange();
    resetUnits();
}

document.getElementById('calculateButtonChange').addEventListener('click', algorithmExercise2);

console.log('');



//=====================================================

// 3º CALCULADORA DE SUELDO NETO

let grossSalary = 0;
let socialSecurity = 0;
let irpf = 0;
let taxBase = 0;
let netSalary = 0;

//---------- Calculate social security ----------

var calculateSocialSecurity = () => {
    if (grossSalary < 45014.4) {
        socialSecurity = grossSalary * 0.0635;
    } else {
        socialSecurity = 45014.4 * 0.0635
    }
}

//---------- Calculate IRPF ----------

var calculateIrpf = () => { /*En este apartado no tengo claro si el irpf se plica al bruto o a la 
                            base inponible, seria solo cambiar la variable.*/
    taxBase = grossSalary - socialSecurity - 2000;

    if(taxBase < 5550) {
        irpf = grossSalary;
    } else if (taxBase >= 5550 && grossSalary < 12450) {
        irpf = grossSalary * 0.19;
    } else if (taxBase >= 12450 && grossSalary < 20200) {
        irpf = grossSalary * 0.24;
    } else if (taxBase >= 20200 && grossSalary < 35200) {
        irpf = grossSalary * 0.3;
    } else if (taxBase >= 35200 && grossSalary < 60000) {
        irpf = grossSalary * 0.37;
    } else {
        irpf = grossSalary * 0.45;
    }
}

//---------- Calculate net salary ----------

var calculateNet = () => {
    netSalary = grossSalary - socialSecurity - irpf;
}

//---------- Show data in console ----------

var showData = () => {
    console.log(`Salario bruto anual: ${grossSalary}`);
    console.log(`Cantidad destinada a Seguridad Social: ${socialSecurity}`)
    console.log(`Cantidad destinada a IRPF: ${irpf}`);
    console.log(`Salario neto anual: ${netSalary.toFixed(2)}`);
}

//---------- Algorithm ----------

var algorithmExercise3 = () => {
    grossSalary = document.getElementById('grossSalary').value;

    calculateSocialSecurity();
    calculateIrpf();
    calculateNet();
    showData();
}

//---------- Call function ----------

document.getElementById('calculateButtonNet').addEventListener('click', algorithmExercise3);
