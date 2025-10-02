import type { A } from "../A/A";
import type { C } from "../C/C";
import type { D } from "../D/D";
import type { E } from "../E/E";
import type { F } from "../F/F";
import { Orchestrator } from "../Orchestrator/orchestrator";

export class B {
  private readonly interactions: string[] = [];

  // Original methods with A, C, D
  receiveTest(from: A): void {
    this.log("Received test directive from A");
  }

  receiveMessage(from: A, message: string): void {
    this.log(`Received message from A: ${message}`);
  }

  receiveAdvocate(from: A, advocate: string): void {
    this.log(`Received advocate '${advocate}' from A`);
  }

  sendThank(to: A, note: string): void {
    this.log(`Sent thanks to A: ${note}`);
    to.registerThank(this, note);
  }

  sendReply(to: A, message: string): void {
    this.log(`Sent reply to A: ${message}`);
    to.registerReply(this, message);
  }

  coordinateWithC(partner: C, subject: string): void {
    this.log(`Coordinated with C on ${subject}`);
    partner.acceptCoordination(this, subject);
  }

  receiveFeedback(from: C, summary: string): void {
    this.log(`Received feedback from C: ${summary}`);
  }

  receiveIdeaExchange(from: C, topic: string): void {
    this.log(`Exchanged ideas with C on ${topic}`);
  }

  shareStrategy(withPartner: D, plan: string): void {
    this.log(`Shared strategy with D: ${plan}`);
    withPartner.receiveStrategy(this, plan);
  }

  receiveStrategyResponse(from: D, response: string): void {
    this.log(`Received strategy response from D: ${response}`);
  }

  // Bidirectional methods with E
  acknowledgeMonitoring(from: E): void {
    this.log("Acknowledged monitoring from E");
    const data = "B operational data";
    from.receiveDataFromB(this, data);
  }

  receiveAlertFromE(from: E, alert: string): void {
    this.log(`Received alert from E: ${alert}`);
  }

  // Bidirectional methods with F
  acceptOrchestration(from: F): void {
    this.log("Accepted orchestration from F");
    const state = "B current state";
    from.receiveStateFromB(this, state);
  }

  executeCommandFromF(from: F, command: string): void {
    this.log(`Executed command from F: ${command}`);
  }

  getHistory(): readonly string[] {
    return this.interactions;
  }

 // Bidirectional with Orchestrator
  registerWithOrchestrator(orchestrator: Orchestrator): void {
    this.log("Registered with Orchestrator");
    const report = "B operational and ready";
    orchestrator.receiveReportFromB(this, report);
  }

  acceptOrchestratorTask(from: Orchestrator, task: string): void {
    this.log(`Accepted task from Orchestrator: ${task}`);
  }

  private log(entry: string): void {
    this.interactions.push(entry);
  }
}
