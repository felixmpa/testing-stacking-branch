import type { A } from "../A/A";
import type { B } from "../B/B";
import type { C } from "../C/C";
import type { E } from "../E/E";
import type { F } from "../F/F";
import { Orchestrator } from "../Orchestrator/orchestrator";

export class D {
  private readonly interactions: string[] = [];

  // Original methods with A, B, C
  acceptTask(from: A, task: string): void {
    this.log(`Accepted task from A: ${task}`);
  }

  receiveStrategy(from: B, plan: string): void {
    this.log(`Received strategy from B: ${plan}`);
  }

  confirmAlignment(withPartner: C, priority: string): void {
    this.log(`Confirmed alignment with C on ${priority}`);
  }

  shareUpdate(to: C, update: string): void {
    this.log(`Shared update with C: ${update}`);
    to.receiveUpdateFromD(this, update);
  }

  sendAlert(to: A, alert: string): void {
    this.log(`Sent alert to A: ${alert}`);
    to.handleAlertFromD(this, alert);
  }

  respondToStrategy(to: B, response: string): void {
    this.log(`Responded to B's strategy: ${response}`);
    to.receiveStrategyResponse(this, response);
  }

  // Bidirectional methods with E
  confirmTracking(from: E): void {
    this.log("Confirmed tracking from E");
    const progress = "D current progress";
    from.receiveProgressFromD(this, progress);
  }

  executeInstructionFromE(from: E, instruction: string): void {
    this.log(`Executed instruction from E: ${instruction}`);
  }

  // Bidirectional methods with F
  acceptCoordinationFromF(from: F): void {
    this.log("Accepted coordination from F");
    const result = "D coordination result";
    from.receiveCompletionFromD(this, result);
  }

  acknowledgePriorityFromF(from: F, priority: string): void {
    this.log(`Acknowledged priority from F: ${priority}`);
  }

  getHistory(): readonly string[] {
    return this.interactions;
  }

  registerWithOrchestrator(orchestrator: Orchestrator): void {
    this.log("Registered with Orchestrator");
    const result = "D task execution ready";
    orchestrator.receiveCompletionFromD(this, result);
  }

  acknowledgePriorityFromOrchestrator(from: Orchestrator, priority: string): void {
    this.log(`Acknowledged priority from Orchestrator: ${priority}`);
  }


  private log(entry: string): void {
    this.interactions.push(entry);
  }
}
