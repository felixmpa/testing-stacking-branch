import type { A } from "../A/A";
import type { B } from "../B/B";
import type { C } from "../C/C";
import type { D } from "../D/D";
import type { E } from "../E/E";
import type { F } from "../F/F";

export class Orchestrator {
  private readonly interactions: string[] = [];
  private components: Map<string, any> = new Map();

  // Bidirectional with A
  initializeA(component: A): void {
    this.log("Initialized component A");
    this.components.set('A', component);
    component.registerWithOrchestrator(this);
  }

  receiveStatusFromA(from: A, status: string): void {
    this.log(`Received status from A: ${status}`);
  }

  sendCommandToA(to: A, command: string): void {
    this.log(`Sent command to A: ${command}`);
    to.executeOrchestratorCommand(this, command);
  }

  // Bidirectional with B
  initializeB(component: B): void {
    this.log("Initialized component B");
    this.components.set('B', component);
    component.registerWithOrchestrator(this);
  }

  receiveReportFromB(from: B, report: string): void {
    this.log(`Received report from B: ${report}`);
  }

  delegateTaskToB(to: B, task: string): void {
    this.log(`Delegated task to B: ${task}`);
    to.acceptOrchestratorTask(this, task);
  }

  // Bidirectional with C
  initializeC(component: C): void {
    this.log("Initialized component C");
    this.components.set('C', component);
    component.registerWithOrchestrator(this);
  }

  receiveAnalysisFromC(from: C, analysis: string): void {
    this.log(`Received analysis from C: ${analysis}`);
  }

  requestInsightsFromC(from: C): void {
    this.log("Requested insights from C");
    from.provideInsightsToOrchestrator(this);
  }

  // Bidirectional with D
  initializeD(component: D): void {
    this.log("Initialized component D");
    this.components.set('D', component);
    component.registerWithOrchestrator(this);
  }

  receiveCompletionFromD(from: D, result: string): void {
    this.log(`Received completion from D: ${result}`);
  }

  assignPriorityToD(to: D, priority: string): void {
    this.log(`Assigned priority to D: ${priority}`);
    to.acknowledgePriorityFromOrchestrator(this, priority);
  }

  // Bidirectional with E
  initializeE(component: E): void {
    this.log("Initialized component E");
    this.components.set('E', component);
    component.registerWithOrchestrator(this);
  }

  receiveMonitoringDataFromE(from: E, data: string): void {
    this.log(`Received monitoring data from E: ${data}`);
  }

  configureMonitoringE(to: E, config: string): void {
    this.log(`Configured monitoring for E: ${config}`);
    to.applyMonitoringConfig(this, config);
  }

  // Bidirectional with F
  initializeF(component: F): void {
    this.log("Initialized component F");
    this.components.set('F', component);
    component.registerWithOrchestrator(this);
  }

  receiveCoordinationFromF(from: F, coordination: string): void {
    this.log(`Received coordination from F: ${coordination}`);
  }

  synchronizeWithF(to: F): void {
    this.log("Synchronized with F");
    to.acknowledgeSyncFromOrchestrator(this);
  }

  // Orchestration methods
  startSystem(): void {
    this.log("=== SYSTEM STARTUP ===");
    this.log(`Total components registered: ${this.components.size}`);
  }

  shutdownSystem(): void {
    this.log("=== SYSTEM SHUTDOWN ===");
    this.components.clear();
  }

  getSystemStatus(): string {
    return `Orchestrator managing ${this.components.size} components`;
  }

  getHistory(): readonly string[] {
    return this.interactions;
  }

  private log(entry: string): void {
    this.interactions.push(entry);
  }
}