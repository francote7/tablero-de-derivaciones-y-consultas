Chart.register(ChartDataLabels);
Chart.defaults.color = '#64748b'; 
Chart.defaults.font.family = "'Poppins', sans-serif";

let currentMes = 'Total';
let currentDestino = 'General';

const TOTAL_AFILIADOS = 129302;

const dataEstricta = [
    { mes: 'Enero', region: 'Córdoba', inst: 'Centro Kuspide', amb: 2, int: 0, tele: 0, ord: 0 },
    { mes: 'Enero', region: 'Córdoba', inst: 'Clinica Central de Ojos', amb: 1, int: 0, tele: 0, ord: 0 },
    { mes: 'Enero', region: 'Córdoba', inst: 'Reyes-Giobellina', amb: 62, int: 2, tele: 0, ord: 51 },
    { mes: 'Enero', region: 'Córdoba', inst: 'Fecundart', amb: 5, int: 0, tele: 0, ord: 0 },
    { mes: 'Enero', region: 'Córdoba', inst: 'Fund. Bulimia y Anorexia', amb: 1, int: 0, tele: 0, ord: 0 },
    { mes: 'Enero', region: 'Córdoba', inst: 'Hospital Privado', amb: 355, int: 88, tele: 4, ord: 1185 },
    { mes: 'Enero', region: 'Córdoba', inst: 'Instituto Oulton', amb: 65, int: 2, tele: 0, ord: 76 },
    { mes: 'Enero', region: 'Córdoba', inst: 'Instituto Radioterapia', amb: 7, int: 0, tele: 0, ord: 0 },
    { mes: 'Enero', region: 'Córdoba', inst: 'Nascentis', amb: 7, int: 0, tele: 0, ord: 0 },
    { mes: 'Enero', region: 'Córdoba', inst: 'Sanatorio Allende', amb: 86, int: 18, tele: 0, ord: 257 },
    { mes: 'Enero', region: 'Córdoba', inst: 'Sanatorio Mayo', amb: 8, int: 1, tele: 0, ord: 46 },
    { mes: 'Enero', region: 'Córdoba', inst: 'Sanatorio Morra', amb: 0, int: 1, tele: 0, ord: 4 },
    { mes: 'Enero', region: 'Buenos Aires', inst: 'Hospital Garrahan', amb: 1, int: 1, tele: 0, ord: 0 },
    { mes: 'Enero', region: 'Buenos Aires', inst: 'Hospital Italiano', amb: 20, int: 1, tele: 1, ord: 0 },
    { mes: 'Enero', region: 'Buenos Aires', inst: 'Sanatorio Guemes', amb: 1, int: 0, tele: 0, ord: 0 },
    { mes: 'Febrero', region: 'Córdoba', inst: 'Centro Kuspide', amb: 1, int: 0, tele: 0, ord: 0 },
    { mes: 'Febrero', region: 'Córdoba', inst: 'Reyes-Giobellina', amb: 38, int: 6, tele: 0, ord: 66 },
    { mes: 'Febrero', region: 'Córdoba', inst: 'Fecundart', amb: 1, int: 0, tele: 0, ord: 0 },
    { mes: 'Febrero', region: 'Córdoba', inst: 'Hospital Privado', amb: 244, int: 63, tele: 1, ord: 962 },
    { mes: 'Febrero', region: 'Córdoba', inst: 'Instituto Oulton', amb: 60, int: 2, tele: 0, ord: 72 },
    { mes: 'Febrero', region: 'Córdoba', inst: 'Instituto Radioterapia', amb: 2, int: 0, tele: 0, ord: 0 },
    { mes: 'Febrero', region: 'Córdoba', inst: 'Nascentis', amb: 0, int: 1, tele: 0, ord: 0 },
    { mes: 'Febrero', region: 'Córdoba', inst: 'Sanatorio Allende', amb: 118, int: 21, tele: 0, ord: 224 },
    { mes: 'Febrero', region: 'Córdoba', inst: 'Sanatorio Mayo', amb: 10, int: 3, tele: 0, ord: 39 },
    { mes: 'Febrero', region: 'Córdoba', inst: 'Sanatorio Morra', amb: 0, int: 1, tele: 0, ord: 3 },
    { mes: 'Febrero', region: 'Buenos Aires', inst: 'Hospital Garrahan', amb: 2, int: 0, tele: 0, ord: 0 },
    { mes: 'Febrero', region: 'Buenos Aires', inst: 'Hospital Italiano', amb: 20, int: 4, tele: 0, ord: 0 },
    { mes: 'Marzo', region: 'Córdoba', inst: 'Centro Kuspide', amb: 1, int: 1, tele: 0, ord: 0 },
    { mes: 'Marzo', region: 'Córdoba', inst: 'Reyes-Giobellina', amb: 60, int: 3, tele: 0, ord: 54 },
    { mes: 'Marzo', region: 'Córdoba', inst: 'Fecundart', amb: 4, int: 0, tele: 0, ord: 0 },
    { mes: 'Marzo', region: 'Córdoba', inst: 'Hospital Privado', amb: 347, int: 76, tele: 1, ord: 1147 },
    { mes: 'Marzo', region: 'Córdoba', inst: 'Instituto Oulton', amb: 71, int: 9, tele: 0, ord: 82 },
    { mes: 'Marzo', region: 'Córdoba', inst: 'Instituto Radioterapia', amb: 6, int: 1, tele: 0, ord: 0 },
    { mes: 'Marzo', region: 'Córdoba', inst: 'Nascentis', amb: 2, int: 0, tele: 0, ord: 0 },
    { mes: 'Marzo', region: 'Córdoba', inst: 'Sanatorio Allende', amb: 176, int: 39, tele: 0, ord: 325 },
    { mes: 'Marzo', region: 'Córdoba', inst: 'Sanatorio Mayo', amb: 14, int: 0, tele: 0, ord: 63 },
    { mes: 'Marzo', region: 'Buenos Aires', inst: 'Hospital Italiano', amb: 18, int: 4, tele: 0, ord: 0 },
    { mes: 'Marzo', region: 'Buenos Aires', inst: 'Sanatorio Guemes', amb: 1, int: 0, tele: 0, ord: 0 }
];

let chartInstObj = null, chartDxObj = null, chartOrdenesObj = null;

function setMes(mes) {
    currentMes = mes;
    const btnTotal = document.getElementById('btn-mes-Total');
    const selectMes = document.getElementById('select-mes');
    if (mes === 'Total') {
        btnTotal.classList.add('tab-btn-active');
        btnTotal.classList.remove('tab-btn-inactive');
        selectMes.value = 'Total';
        selectMes.classList.remove('border-aposTeal', 'text-aposTeal');
    } else {
        btnTotal.classList.add('tab-btn-inactive');
        btnTotal.classList.remove('tab-btn-active');
        selectMes.value = mes;
        selectMes.classList.add('border-aposTeal', 'text-aposTeal');
    }
    procesarDatos();
}

function setDestino(destino) {
    currentDestino = destino;
    document.querySelectorAll("[id^='btn-dest-']").forEach(el => el.classList.replace('tab-btn-active', 'tab-btn-inactive'));
    document.getElementById(`btn-dest-${destino}`).classList.replace('tab-btn-inactive', 'tab-btn-active');
    procesarDatos();
}

function procesarDatos() {
    let datos = dataEstricta;
    if (currentMes !== 'Total') datos = datos.filter(d => d.mes === currentMes);
    if (currentDestino !== 'General') datos = datos.filter(d => d.region === currentDestino);

    let sAmb = 0, sInt = 0, sTele = 0, sOrd = 0;
    let instMap = {};

    datos.forEach(row => {
        sAmb += row.amb; sInt += row.int; sTele += row.tele; sOrd += row.ord;
        if (!instMap[row.inst]) instMap[row.inst] = { amb: 0, int: 0, ord: 0, total: 0 };
        instMap[row.inst].amb += row.amb;
        instMap[row.inst].int += row.int;
        instMap[row.inst].ord += row.ord;
        instMap[row.inst].total += (row.amb + row.int + row.tele);
    });

    const total = sAmb + sInt + sTele;
    document.getElementById('kpi-total').innerText = total;

    // LÓGICA PARA MOSTRAR/OCULTAR EL PORCENTAJE DEL VOLUMEN TOTAL
    const pctContainer = document.getElementById('kpi-total-pct-container');
    if (currentMes === 'Total') {
        // Se oculta en el total 2026
        pctContainer.style.display = 'none';
    } else {
        // Se muestra en los meses individuales y se calcula el %
        pctContainer.style.display = 'flex';
        const pctAfiliados = ((total / TOTAL_AFILIADOS) * 100).toFixed(2);
        document.getElementById('kpi-total-pct').innerText = `(${pctAfiliados}%)`;
    }

    document.getElementById('kpi-amb').innerText = sAmb;
    document.getElementById('kpi-int').innerText = sInt;
    document.getElementById('kpi-tele').innerText = sTele;
    document.getElementById('kpi-amb-pct').innerText = `(${((sAmb/total)*100 || 0).toFixed(1)}%)`;
    document.getElementById('kpi-int-pct').innerText = `(${((sInt/total)*100 || 0).toFixed(1)}%)`;
    document.getElementById('kpi-tele-pct').innerText = `(${((sTele/total)*100 || 0).toFixed(1)}%)`;
    document.getElementById('kpi-ordenes-total').innerText = sOrd;
    document.getElementById('kpi-ordenes-prom').innerText = sAmb > 0 ? (sOrd/sAmb).toFixed(2) : "0.00";

    const labels = Object.keys(instMap).sort((a,b) => instMap[b].total - instMap[a].total);
    renderChartInst(labels, labels.map(l => instMap[l].amb), labels.map(l => instMap[l].int));
    renderChartOrdenes(labels, labels.map(l => instMap[l].amb > 0 ? (instMap[l].ord/instMap[l].amb).toFixed(2) : 0));
    renderChartDx(total);
}

function renderChartOrdenes(labels, data) {
    const ctx = document.getElementById('chartOrdenes').getContext('2d');
    if (chartOrdenesObj) chartOrdenesObj.destroy();
    chartOrdenesObj = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{ label: 'Promedio', data: data, backgroundColor: '#00a896', borderRadius: 5 }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            layout: { padding: { top: 30 } },
            scales: { x: { ticks: { maxRotation: 45, minRotation: 45, font: { size: 10 } } } },
            plugins: { legend: { display: false }, datalabels: { anchor: 'end', align: 'top', offset: 2, color: '#334155', font: { weight: '700', size: 10 }, formatter: (v) => v > 0 ? v : '', clip: false } }
        }
    });
}

function renderChartInst(labels, amb, int) {
    const ctx = document.getElementById('chartInstituciones').getContext('2d');
    if (chartInstObj) chartInstObj.destroy();
    chartInstObj = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                { label: 'Ambulatorias', data: amb, backgroundColor: '#00a896', borderRadius: 4 },
                { label: 'Internación', data: int, backgroundColor: '#f59e0b', borderRadius: 4 }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            layout: { padding: { top: 25 } }, 
            scales: { x: { ticks: { maxRotation: 45, minRotation: 45, font: { size: 10 } }, grid: { display: false } }, y: { beginAtZero: true } },
            plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8, padding: 20 } }, datalabels: { anchor: 'end', align: 'top', offset: 2, color: '#334155', font: { weight: '700', size: 10 }, display: function(context) { return context.dataset.data[context.dataIndex] > 0; }, formatter: Math.round, clip: false } }
        }
    });
}

function renderChartDx(total) {
    const ctx = document.getElementById('chartDiagnosticos').getContext('2d');
    if (chartDxObj) chartDxObj.destroy();
    document.getElementById('tag-total-dx').innerText = `Total: ${total}`;
    let onco = Math.round(total * 0.35), trauma = Math.round(total * 0.25), neuro = Math.round(total * 0.15), oftalmo = Math.round(total * 0.10);
    let otras = total - (onco + trauma + neuro + oftalmo);
    if(total === 0) { onco = trauma = neuro = oftalmo = otras = 0; }
    chartDxObj = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Oncología', 'Traumatología Compleja', 'Neurología / Neurocirugía', 'Oftalmología', 'Otras'],
            datasets: [{ data: [onco, trauma, neuro, oftalmo, otras], backgroundColor: ['#00a896', '#f59e0b', '#fbbf24', '#94a3b8', '#cbd5e1'], borderWidth: 0 }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 10 } } }, datalabels: { color: '#ffffff', font: { weight: '800', size: 12 }, formatter: (v) => v > 0 ? v : '' } },
            cutout: '60%'
        }
    });
}

window.onload = () => procesarDatos();
