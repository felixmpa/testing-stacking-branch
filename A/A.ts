import type { B } from "../B/B";
import type { C } from "../C/C";
import type { D } from "../D/D";

export class A {
  private readonly interactions: string[] = [];

  sendTest(to: B): void {
    this.log("Sent test directive to B");
    to.receiveTest(this);
  }

  sendMessage(to: B, message: string): void {
    this.log(`Sent message to B: ${message}`);
    to.receiveMessage(this, message);
  }

  sendAdvocate(to: B, advocate: string): void {
    this.log(`Sent advocate '${advocate}' to B`);
    to.receiveAdvocate(this, advocate);
  }

  requestAnalysis(from: C, topic: string): void {
    this.log(`Requested analysis on ${topic} from C`);
    from.provideAnalysis(this, topic);
  }

  assignTask(to: D, task: string): void {
    this.log(`Assigned task '${task}' to D`);
    to.acceptTask(this, task);
  }

  registerThank(from: B, note: string): void {
    this.log(`Received thanks from B: ${note}`);
  }

  registerReply(from: B, message: string): void {
    this.log(`Received reply from B: ${message}`);
  }

  recordReportFromC(from: C, report: string): void {
    this.log(`Received report from C: ${report}`);
  }

  handleAlertFromD(from: D, alert: string): void {
    this.log(`Received alert from D: ${alert}`);
  }

  getHistory(): readonly string[] {
    return this.interactions;
  }

  private log(entry: string): void {
    this.interactions.push(entry);
  }
}