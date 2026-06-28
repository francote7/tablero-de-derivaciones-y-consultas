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
    { mes: 'Marzo', region: 'Buenos Aires', inst: 'Sanatorio Guemes', amb: 1, int: 0, tele: 0, ord: 0 },
    
    { mes: 'Abril', region: 'Córdoba', inst: 'Centro Kuspide', amb: 7, int: 1, tele: 0, ord: 0 },
    { mes: 'Abril', region: 'Córdoba', inst: 'Clinica Central de Ojos', amb: 1, int: 0, tele: 0, ord: 0 },
    { mes: 'Abril', region: 'Córdoba', inst: 'Reyes-Giobellina', amb: 64, int: 3, tele: 0, ord: 46 },
    { mes: 'Abril', region: 'Córdoba', inst: 'Clínica Velez Sarsfield', amb: 1, int: 0, tele: 0, ord: 0 },
    { mes: 'Abril', region: 'Córdoba', inst: 'Fecundart', amb: 2, int: 0, tele: 0, ord: 0 },
    { mes: 'Abril', region: 'Córdoba', inst: 'Fund. Bulimia y Anorexia', amb: 0, int: 0, tele: 0, ord: 0 },
    { mes: 'Abril', region: 'Córdoba', inst: 'Hospital Privado', amb: 358, int: 109, tele: 1, ord: 1106 },
    { mes: 'Abril', region: 'Córdoba', inst: 'Instituto Oulton', amb: 80, int: 7, tele: 0, ord: 64 },
    { mes: 'Abril', region: 'Córdoba', inst: 'Instituto Radioterapia', amb: 9, int: 2, tele: 0, ord: 0 },
    { mes: 'Abril', region: 'Córdoba', inst: 'Nascentis', amb: 6, int: 0, tele: 0, ord: 0 },
    { mes: 'Abril', region: 'Córdoba', inst: 'Sanatorio Allende', amb: 169, int: 67, tele: 0, ord: 340 },
    { mes: 'Abril', region: 'Córdoba', inst: 'Sanatorio Mayo', amb: 13, int: 2, tele: 0, ord: 63 },
    { mes: 'Abril', region: 'Córdoba', inst: 'Sanatorio Morra', amb: 0, int: 2, tele: 0, ord: 3 },
    { mes: 'Abril', region: 'Buenos Aires', inst: 'Hospital Garrahan', amb: 2, int: 1, tele: 0, ord: 0 },
    { mes: 'Abril', region: 'Buenos Aires', inst: 'Hospital Italiano', amb: 13, int: 3, tele: 0, ord: 0 },
    { mes: 'Abril', region: 'Buenos Aires', inst: 'Sanatorio Guemes', amb: 2, int: 0, tele: 0, ord: 0 },

    // --- NUEVOS DATOS DE MAYO ---
    { mes: 'Mayo', region: 'Córdoba', inst: 'Centro Castillo Morales', amb: 1, int: 0, tele: 0, ord: 0 },
    { mes: 'Mayo', region: 'Córdoba', inst: 'Centro Kuspide', amb: 2, int: 0, tele: 0, ord: 0 },
    { mes: 'Mayo', region: 'Córdoba', inst: 'Clinica Central de Ojos', amb: 0, int: 0, tele: 0, ord: 0 },
    { mes: 'Mayo', region: 'Córdoba', inst: 'Reyes-Giobellina', amb: 68, int: 7, tele: 0, ord: 72 },
    { mes: 'Mayo', region: 'Córdoba', inst: 'Clínica Velez Sarsfield', amb: 0, int: 0, tele: 0, ord: 0 },
    { mes: 'Mayo', region: 'Córdoba', inst: 'Fecundart', amb: 2, int: 3, tele: 0, ord: 0 },
    { mes: 'Mayo', region: 'Córdoba', inst: 'Fund. Bulimia y Anorexia', amb: 0, int: 0, tele: 0, ord: 0 },
    { mes: 'Mayo', region: 'Córdoba', inst: 'Hospital Privado', amb: 119, int: 69, tele: 0, ord: 489 },
    { mes: 'Mayo', region: 'Córdoba', inst: 'Instituto Oulton', amb: 75, int: 7, tele: 0, ord: 74 },
    { mes: 'Mayo', region: 'Córdoba', inst: 'Instituto Radioterapia', amb: 2, int: 2, tele: 0, ord: 0 },
    { mes: 'Mayo', region: 'Córdoba', inst: 'Nascentis', amb: 5, int: 1, tele: 0, ord: 0 },
    { mes: 'Mayo', region: 'Córdoba', inst: 'Sanatorio Allende', amb: 50, int: 18, tele: 0, ord: 120 },
    { mes: 'Mayo', region: 'Córdoba', inst: 'Sanatorio Mayo', amb: 12, int: 3, tele: 0, ord: 67 },
    { mes: 'Mayo', region: 'Córdoba', inst: 'Sanatorio Morra', amb: 0, int: 1, tele: 0, ord: 5 },
    { mes: 'Mayo', region: 'Buenos Aires', inst: 'Hospital Garrahan', amb: 0, int: 0, tele: 0, ord: 0 },
    { mes: 'Mayo', region: 'Buenos Aires', inst: 'Hospital Italiano', amb: 2, int: 1, tele: 0, ord: 0 },
    { mes: 'Mayo', region: 'Buenos Aires', inst: 'Sanatorio Guemes', amb: 0, int: 3, tele: 0, ord: 0 }
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
        pctContainer.style.display = 'none';
    } else {
        pctContainer.style.display = 'flex';
        const pctAfiliados = ((total / TOTAL_AFILIADOS) * 100).toFixed(2);
        document.getElementById('kpi-total-pct').innerText = `(${pctAfiliados}%)`;
    }

    // ── INDICADOR TENDENCIA vs MES ANTERIOR ──────────────────────────────────
    const trendEl = document.getElementById('kpi-total-trend');
    if (currentMes !== 'Total') {
        const idxMesActual = MESES_ORDEN.indexOf(currentMes);
        const mesPrev = MESES_ORDEN[idxMesActual - 1];
        const trendRow = document.getElementById('kpi-total-trend-row');
        trendRow.style.display = 'flex';
        if (mesPrev && dataEstricta.some(d => d.mes === mesPrev)) {
            let datosPrev = dataEstricta.filter(d => d.mes === mesPrev);
            if (currentDestino !== 'General') datosPrev = datosPrev.filter(d => d.region === currentDestino);
            const totalPrev = datosPrev.reduce((s, d) => s + d.amb + d.int + d.tele, 0);
            const diff = total - totalPrev;
            const pct = totalPrev > 0 ? ((diff / totalPrev) * 100).toFixed(1) : '—';
            if (diff > 0) {
                trendEl.className = 'kpi-trend kpi-trend-up';
                trendEl.innerHTML = `<i class="fas fa-arrow-trend-up"></i> +${diff} (${pct}%) vs ${mesPrev}`;
            } else if (diff < 0) {
                trendEl.className = 'kpi-trend kpi-trend-down';
                trendEl.innerHTML = `<i class="fas fa-arrow-trend-down"></i> ${diff} (${pct}%) vs ${mesPrev}`;
            } else {
                trendEl.className = 'kpi-trend kpi-trend-neutral';
                trendEl.innerHTML = `<i class="fas fa-minus"></i> Sin cambio vs ${mesPrev}`;
            }
        } else {
            trendEl.className = 'kpi-trend kpi-trend-neutral';
            trendEl.innerHTML = `<i class="fas fa-minus"></i> Primer mes registrado`;
        }
    } else {
        document.getElementById('kpi-total-trend-row').style.display = 'none';
    }

    // ── BADGE ALERTA VOLUMEN (siempre activo) ─────────────────────────────────
    const volAlertEl = document.getElementById('kpi-total-vol-alert');
    if (total > 450) {
        volAlertEl.style.display = 'flex';
        volAlertEl.className = 'kpi-balance-alert kpi-balance-warn mt-2';
        volAlertEl.innerHTML = `<i class="fas fa-circle-exclamation"></i> Alto volumen > 450`;
    } else if (total >= 401) {
        volAlertEl.style.display = 'flex';
        volAlertEl.className = 'kpi-balance-alert kpi-balance-mid mt-2';
        volAlertEl.innerHTML = `<i class="fas fa-triangle-exclamation"></i> Volumen en alerta`;
    } else {
        volAlertEl.style.display = 'none';
    }

    document.getElementById('kpi-amb').innerText = sAmb;
    document.getElementById('kpi-int').innerText = sInt;
    document.getElementById('kpi-tele').innerText = sTele;

    const ambPct = (sAmb / total * 100) || 0;
    const intPct = (sInt / total * 100) || 0;
    document.getElementById('kpi-amb-pct').innerText = `(${ambPct.toFixed(1)}%)`;
    document.getElementById('kpi-int-pct').innerText = `(${intPct.toFixed(1)}%)`;
    document.getElementById('kpi-tele-pct').innerText = `(${((sTele/total)*100 || 0).toFixed(1)}%)`;

    // ── INDICADOR DESEQUILIBRIO AMB / INT ────────────────────────────────────
    // Referencia: 80% amb / 20% int. Tolerancia ±8pp antes de alertar.
    const TOLERANCIA = 8;
    const ambAlertEl = document.getElementById('kpi-amb-balance-alert');
    const intAlertEl = document.getElementById('kpi-int-balance-alert');
    if (currentMes !== 'Total' && total > 0) {
        const ambDesvio = ambPct - 80; // positivo = demasiado amb, negativo = poco amb
        const intDesvio = intPct - 20; // positivo = demasiado int, negativo = poca int
        if (Math.abs(ambDesvio) > TOLERANCIA) {
            ambAlertEl.style.display = 'flex';
            if (ambDesvio > 0) {
                ambAlertEl.className = 'kpi-balance-alert kpi-balance-ok';
                ambAlertEl.innerHTML = `<i class="fas fa-check-circle"></i> Alta proporción ambulatoria`;
            } else {
                ambAlertEl.className = 'kpi-balance-alert kpi-balance-warn';
                ambAlertEl.innerHTML = `<i class="fas fa-triangle-exclamation"></i> Proporción ambulatoria baja`;
            }
        } else {
            ambAlertEl.style.display = 'none';
        }
        if (Math.abs(intDesvio) > TOLERANCIA) {
            intAlertEl.style.display = 'flex';
            if (intDesvio > 0) {
                intAlertEl.className = 'kpi-balance-alert kpi-balance-warn';
                intAlertEl.innerHTML = `<i class="fas fa-triangle-exclamation"></i> Internación elevada`;
            } else {
                intAlertEl.className = 'kpi-balance-alert kpi-balance-ok';
                intAlertEl.innerHTML = `<i class="fas fa-check-circle"></i> Internación baja`;
            }
        } else {
            intAlertEl.style.display = 'none';
        }
    } else {
        ambAlertEl.style.display = 'none';
        intAlertEl.style.display = 'none';
    }

    // ── INDICADOR TENDENCIA AMB e INT vs MES ANTERIOR ────────────────────────
    const ambTrendEl = document.getElementById('kpi-amb-trend');
    const intTrendEl = document.getElementById('kpi-int-trend');
    if (currentMes !== 'Total') {
        const idxMesActual = MESES_ORDEN.indexOf(currentMes);
        const mesPrev = MESES_ORDEN[idxMesActual - 1];
        document.getElementById('kpi-amb-trend-row').style.display = 'flex';
        document.getElementById('kpi-int-trend-row').style.display = 'flex';

        if (mesPrev && dataEstricta.some(d => d.mes === mesPrev)) {
            let datosPrev = dataEstricta.filter(d => d.mes === mesPrev);
            if (currentDestino !== 'General') datosPrev = datosPrev.filter(d => d.region === currentDestino);
            const ambPrev = datosPrev.reduce((s, d) => s + d.amb, 0);
            const intPrev = datosPrev.reduce((s, d) => s + d.int, 0);

            // Ambulatorias: subir = rojo, bajar = verde
            const diffAmb = sAmb - ambPrev;
            const pctAmb = ambPrev > 0 ? ((diffAmb / ambPrev) * 100).toFixed(1) : '—';
            if (diffAmb > 0) {
                ambTrendEl.className = 'kpi-trend kpi-trend-up';
                ambTrendEl.innerHTML = `<i class="fas fa-arrow-trend-up"></i> +${diffAmb} (${pctAmb}%) vs ${mesPrev}`;
            } else if (diffAmb < 0) {
                ambTrendEl.className = 'kpi-trend kpi-trend-down';
                ambTrendEl.innerHTML = `<i class="fas fa-arrow-trend-down"></i> ${diffAmb} (${pctAmb}%) vs ${mesPrev}`;
            } else {
                ambTrendEl.className = 'kpi-trend kpi-trend-neutral';
                ambTrendEl.innerHTML = `<i class="fas fa-minus"></i> Sin cambio vs ${mesPrev}`;
            }

            // Internación: subir = rojo, bajar = verde
            const diffInt = sInt - intPrev;
            const pctInt = intPrev > 0 ? ((diffInt / intPrev) * 100).toFixed(1) : '—';
            if (diffInt > 0) {
                intTrendEl.className = 'kpi-trend kpi-trend-up';
                intTrendEl.innerHTML = `<i class="fas fa-arrow-trend-up"></i> +${diffInt} (${pctInt}%) vs ${mesPrev}`;
            } else if (diffInt < 0) {
                intTrendEl.className = 'kpi-trend kpi-trend-down';
                intTrendEl.innerHTML = `<i class="fas fa-arrow-trend-down"></i> ${diffInt} (${pctInt}%) vs ${mesPrev}`;
            } else {
                intTrendEl.className = 'kpi-trend kpi-trend-neutral';
                intTrendEl.innerHTML = `<i class="fas fa-minus"></i> Sin cambio vs ${mesPrev}`;
            }
        } else {
            ambTrendEl.className = 'kpi-trend kpi-trend-neutral';
            ambTrendEl.innerHTML = `<i class="fas fa-minus"></i> Primer mes registrado`;
            intTrendEl.className = 'kpi-trend kpi-trend-neutral';
            intTrendEl.innerHTML = `<i class="fas fa-minus"></i> Primer mes registrado`;
        }
    } else {
        document.getElementById('kpi-amb-trend-row').style.display = 'none';
        document.getElementById('kpi-int-trend-row').style.display = 'none';
    }

    // ── COLOR SEMÁFORO VOLUMEN TOTAL (siempre activo) ────────────────────────
    const kpiTotalEl  = document.getElementById('kpi-total');
    const kpiTotalCard = document.getElementById('kpi-total-card');
    if (total > 450) {
        kpiTotalEl.style.color = '#ef4444';
        kpiTotalCard.style.borderLeftColor = '#ef4444';
    } else if (total >= 401) {
        kpiTotalEl.style.color = '#f59e0b';
        kpiTotalCard.style.borderLeftColor = '#f59e0b';
    } else if (total >= 1) {
        kpiTotalEl.style.color = '#22c55e';
        kpiTotalCard.style.borderLeftColor = '#22c55e';
    } else {
        kpiTotalEl.style.color = '';
        kpiTotalCard.style.borderLeftColor = '';
    }

    // ── COLOR SEMÁFORO INTERNACIÓN (siempre activo) ───────────────────────────
    const kpiIntEl   = document.getElementById('kpi-int');
    const kpiIntCard = document.getElementById('kpi-int-card');
    if (total > 0) {
        if (intPct > 20) {
            kpiIntEl.style.color = '#ef4444';
            kpiIntCard.style.borderLeftColor = '#ef4444';
        } else if (intPct > 15) {
            kpiIntEl.style.color = '#f59e0b';
            kpiIntCard.style.borderLeftColor = '#f59e0b';
        } else if (intPct >= 1) {
            kpiIntEl.style.color = '#22c55e';
            kpiIntCard.style.borderLeftColor = '#22c55e';
        } else {
            kpiIntEl.style.color = '';
            kpiIntCard.style.borderLeftColor = '';
        }
    } else {
        kpiIntEl.style.color = '';
        kpiIntCard.style.borderLeftColor = '';
    }

    document.getElementById('kpi-ordenes-total').innerText = sOrd;
    document.getElementById('kpi-ordenes-prom').innerText = sAmb > 0 ? (sOrd/sAmb).toFixed(2) : "0.00";

    const labels = Object.keys(instMap).sort((a,b) => instMap[b].total - instMap[a].total);
    renderChartInst(labels, labels.map(l => instMap[l].amb), labels.map(l => instMap[l].int));
    renderChartOrdenes(labels, labels.map(l => instMap[l].amb > 0 ? (instMap[l].ord/instMap[l].amb).toFixed(2) : 0));
    renderChartDx(total);
    renderMonthlyCards();
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

const MESES_ORDEN = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const UMBRAL_ALERTA = 450;

function renderMonthlyCards() {
    const section = document.getElementById('monthly-cards-section');
    const grid = document.getElementById('monthly-cards-grid');

    if (currentMes !== 'Total') {
        section.style.display = 'none';
        return;
    }
    section.style.display = 'block';

    const mesesPresentes = [...new Set(dataEstricta.map(d => d.mes))];
    mesesPresentes.sort((a, b) => MESES_ORDEN.indexOf(a) - MESES_ORDEN.indexOf(b));

    const totalesPorMes = mesesPresentes.map(mes => {
        let datos = dataEstricta.filter(d => d.mes === mes);
        if (currentDestino !== 'General') datos = datos.filter(d => d.region === currentDestino);
        const amb = datos.reduce((s, d) => s + d.amb, 0);
        const int = datos.reduce((s, d) => s + d.int, 0);
        const tele = datos.reduce((s, d) => s + d.tele, 0);
        const total = amb + int + tele;
        const intPct = total > 0 ? (int / total * 100) : 0;
        return { mes, total, amb, int, tele, intPct };
    });

    // Helper: color semáforo internación
    function intColor(intPct) {
        if (intPct > 20) return '#ef4444';
        if (intPct > 15) return '#f59e0b';
        if (intPct >= 1) return '#22c55e';
        return '#94a3b8';
    }

    // Helper: trend badge HTML (rojo sube, verde baja)
    function trendBadge(diff, pct, label) {
        if (diff > 0) return `<span class="mc-trend mc-trend-up"><i class="fas fa-arrow-trend-up"></i> +${diff} (${pct}%)</span>`;
        if (diff < 0) return `<span class="mc-trend mc-trend-down"><i class="fas fa-arrow-trend-down"></i> ${diff} (${pct}%)</span>`;
        return `<span class="mc-trend mc-trend-neutral"><i class="fas fa-minus"></i> Sin cambio</span>`;
    }

    grid.innerHTML = totalesPorMes.map((item, idx) => {
        const prev = idx > 0 ? totalesPorMes[idx - 1] : null;
        const isAlert = item.total >= UMBRAL_ALERTA;
        const borderColor = isAlert ? '#ef4444' : '#00a896';
        const color = intColor(item.intPct);

        // Tendencia total
        let totalTrendHTML = `<span class="mc-trend mc-trend-neutral"><i class="fas fa-minus"></i> Primer mes</span>`;
        if (prev) {
            const diff = item.total - prev.total;
            const pct = prev.total > 0 ? ((diff / prev.total) * 100).toFixed(1) : '—';
            totalTrendHTML = trendBadge(diff, pct);
        }

        // Tendencia amb
        let ambTrendHTML = '';
        let intTrendHTML = '';
        if (prev) {
            const dAmb = item.amb - prev.amb;
            const pAmb = prev.amb > 0 ? ((dAmb / prev.amb) * 100).toFixed(1) : '—';
            ambTrendHTML = trendBadge(dAmb, pAmb);

            const dInt = item.int - prev.int;
            const pInt = prev.int > 0 ? ((dInt / prev.int) * 100).toFixed(1) : '—';
            intTrendHTML = trendBadge(dInt, pInt);
        }

        const alertBadge = isAlert
            ? `<div class="alert-badge"><i class="fas fa-circle-exclamation"></i> Alto volumen</div>`
            : '';

        return `
        <div class="monthly-card ${isAlert ? 'alert' : ''}" style="border-top-color:${borderColor};">
            <div class="month-label">${item.mes}</div>
            <div class="month-total" style="color:${isAlert ? '#ef4444' : '#1e293b'};">${item.total}</div>
            <div class="month-indicator">${totalTrendHTML}</div>
            ${alertBadge}
            <div class="mc-divider"></div>
            <div class="mc-sub-row">
                <span class="mc-sub-label"><i class="fas fa-walking" style="color:#00a896"></i> Amb.</span>
                <span class="mc-sub-val">${item.amb}</span>
                ${ambTrendHTML ? `<span class="mc-sub-trend">${ambTrendHTML}</span>` : ''}
            </div>
            <div class="mc-sub-row">
                <span class="mc-sub-label"><i class="fas fa-bed" style="color:${color}"></i> Int.</span>
                <span class="mc-sub-val" style="color:${color};font-weight:800;">${item.int} <span style="font-size:0.6rem;font-weight:600;">(${item.intPct.toFixed(1)}%)</span></span>
                ${intTrendHTML ? `<span class="mc-sub-trend">${intTrendHTML}</span>` : ''}
            </div>
        </div>`;
    }).join('');
}

window.onload = () => procesarDatos();
