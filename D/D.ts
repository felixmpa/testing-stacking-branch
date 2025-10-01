import type { A } from "../A/A";
import type { B } from "../B/B";
import type { C } from "../C/C";

export class D {
  private readonly interactions: string[] = [];

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

  getHistory(): readonly string[] {
    return this.interactions;
  }

  private log(entry: string): void {
    this.interactions.push(entry);
  }
}