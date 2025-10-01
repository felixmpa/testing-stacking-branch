import { A } from './A/A';
import { B } from './B/B';
import { C } from './C/C';
import { D } from './D/D';
import { E } from './E/E';
import { F } from './F/F';

function main() {
    console.log('='.repeat(70));
    console.log('INICIANDO SISTEMA DE COMPONENTES INTERCONECTADOS');
    console.log('='.repeat(70));
    console.log();

    // Instanciar todos los componentes
    const componentA = new A();
    const componentB = new B();
    const componentC = new C();
    const componentD = new D();
    const componentE = new E();
    const componentF = new F();

    console.log('Todos los componentes instanciados\n');

    // ===== FASE 1: Relaciones originales entre A, B, C, D =====
    console.log('--- FASE 1: Interacciones A-B-C-D ---');

    componentA.sendTest(componentB);
    componentA.sendMessage(componentB, "Iniciando coordinación");
    componentB.sendReply(componentA, "Coordinación confirmada");

    componentA.requestAnalysis(componentC, "Performance metrics");
    componentB.coordinateWithC(componentC, "Strategic alignment");
    componentC.sendFeedback(componentB, "Alignment looks good");

    componentA.assignTask(componentD, "Deploy updates");
    componentB.shareStrategy(componentD, "Optimization plan");
    componentC.alignWithD(componentD, "High priority tasks");
    componentD.sendAlert(componentA, "Deployment ready");

    console.log('Fase 1 completada\n');

    // ===== FASE 2: E interactúa con todos =====
    console.log('--- FASE 2: E (Monitoreo) interactúa con todos ---');

    componentE.requestStatusFromA(componentA);
    componentE.sendMetricsToA(componentA, "System health: 95%");

    componentE.monitorB(componentB);
    componentE.sendAlertToB(componentB, "Traffic spike detected");

    componentE.subscribeToC(componentC);
    componentE.requestReportFromC(componentC, "Analytics");

    componentE.trackD(componentD);
    componentE.sendInstructionToD(componentD, "Optimize resource usage");

    console.log('Fase 2 completada\n');

    // ===== FASE 3: F interactúa con todos =====
    console.log('--- FASE 3: F (Coordinador) interactúa con todos ---');

    componentF.synchronizeWithA(componentA);
    componentF.deployUpdateToA(componentA, "Security patch v2.1");

    componentF.orchestrateB(componentB);
    componentF.issueCommandToB(componentB, "Scale up instances");

    componentF.integrateWithC(componentC);
    componentF.requestDataFromC(componentC, "User behavior");

    componentF.coordinateWithD(componentD);
    componentF.assignPriorityToD(componentD, "Critical: Database backup");

    console.log('Fase 3 completada\n');

    // ===== FASE 4: Interacciones cruzadas complejas =====
    console.log('--- FASE 4: Interacciones cruzadas complejas ---');

    componentD.respondToStrategy(componentB, "Strategy executed successfully");
    componentC.exchangeIdeasWithB(componentB, "New feature proposals");
    componentD.shareUpdate(componentC, "Tasks completed: 8/10");
    componentB.sendThank(componentA, "Great coordination today");

    console.log('Fase 4 completada\n');

    // ===== MOSTRAR HISTORIALES =====
    console.log('='.repeat(70));
    console.log('HISTORIAL DE INTERACCIONES POR COMPONENTE');
    console.log('='.repeat(70));
    console.log();

    const components = [
        { name: 'A', instance: componentA },
        { name: 'B', instance: componentB },
        { name: 'C', instance: componentC },
        { name: 'D', instance: componentD },
        { name: 'E', instance: componentE },
        { name: 'F', instance: componentF }
    ];

    components.forEach(({ name, instance }) => {
        console.log(`\nComponente ${name}:`);
        console.log('-'.repeat(70));
        const history = instance.getHistory();
        if (history.length === 0) {
            console.log('  (Sin interacciones)');
        } else {
            history.forEach((entry, index) => {
                console.log(`  ${index + 1}. ${entry}`);
            });
        }
        console.log(`  Total de interacciones: ${history.length}`);
    });

    // ===== RESUMEN ESTADÍSTICO =====
    console.log('\n');
    console.log('='.repeat(70));
    console.log('RESUMEN ESTADÍSTICO');
    console.log('='.repeat(70));

    const totalInteractions = components.reduce(
        (sum, { instance }) => sum + instance.getHistory().length,
        0
    );

    console.log(`\nTotal de interacciones registradas: ${totalInteractions}`);
    console.log(`Componentes activos: ${components.length}`);
    console.log(`Promedio de interacciones por componente: ${(totalInteractions / components.length).toFixed(2)}`);

    console.log('\n--- Interacciones por componente ---');
    components.forEach(({ name, instance }) => {
        const count = instance.getHistory().length;
        const bar = '█'.repeat(Math.floor(count / 2));
        console.log(`${name}: ${bar} (${count})`);
    });

    console.log('\n');
    console.log('='.repeat(70));
    console.log('SISTEMA COMPLETADO EXITOSAMENTE');
    console.log('='.repeat(70));
}

// Ejecutar el sistema
main();
