import { A } from './A/A';
import { B } from './B/B';
import { C } from './C/C';
import { D } from './D/D';
import { E } from './E/E';
import { F } from './F/F';
import { Orchestrator } from './Orchestrator/orchestrator';

function main() {
  console.log('='.repeat(70));
  console.log('INICIANDO SISTEMA CON ORCHESTRATOR');
  console.log('='.repeat(70));
  console.log();

  // Crear Orchestrator primero
  const orchestrator = new Orchestrator();
  
  // Instanciar componentes
  const componentA = new A();
  const componentB = new B();
  const componentC = new C();
  const componentD = new D();
  const componentE = new E();
  const componentF = new F();

  // ===== FASE 0: Inicialización con Orchestrator =====
  console.log('--- FASE 0: Registro con Orchestrator ---');
  orchestrator.startSystem();
  orchestrator.initializeA(componentA);
  orchestrator.initializeB(componentB);
  orchestrator.initializeC(componentC);
  orchestrator.initializeD(componentD);
  orchestrator.initializeE(componentE);
  orchestrator.initializeF(componentF);
  console.log(`${orchestrator.getSystemStatus()}\n`);

  // ===== FASE 1: Orchestrator coordina sistema =====
  console.log('--- FASE 1: Orchestrator coordina componentes ---');
  orchestrator.sendCommandToA(componentA, "Initialize systems");
  orchestrator.delegateTaskToB(componentB, "Process data pipeline");
  orchestrator.requestInsightsFromC(componentC);
  orchestrator.assignPriorityToD(componentD, "High: Security scan");
  orchestrator.configureMonitoringE(componentE, "Monitor all endpoints");
  orchestrator.synchronizeWithF(componentF);
  console.log('Fase 1 completada\n');

  // ===== FASE 2: Interacciones entre componentes =====
  console.log('--- FASE 2: Interacciones A-B-C-D-E-F ---');
  componentA.sendTest(componentB);
  componentA.requestAnalysis(componentC, "System performance");
  componentE.monitorB(componentB);
  componentF.orchestrateB(componentB);
  console.log('Fase 2 completada\n');

  // ===== MOSTRAR HISTORIALES =====
  console.log('='.repeat(70));
  console.log('HISTORIAL DE INTERACCIONES');
  console.log('='.repeat(70));

  const allComponents = [
    { name: 'Orchestrator', instance: orchestrator },
    { name: 'A', instance: componentA },
    { name: 'B', instance: componentB },
    { name: 'C', instance: componentC },
    { name: 'D', instance: componentD },
    { name: 'E', instance: componentE },
    { name: 'F', instance: componentF }
  ];

  allComponents.forEach(({ name, instance }) => {
    console.log(`\n${name}:`);
    console.log('-'.repeat(70));
    const history = instance.getHistory();
    history.forEach((entry, index) => {
      console.log(`  ${index + 1}. ${entry}`);
    });
    console.log(`  Total: ${history.length} interacciones`);
  });

  orchestrator.shutdownSystem();
  console.log('\n='.repeat(70));
  console.log('SISTEMA FINALIZADO');
  console.log('='.repeat(70));
}

main();