import type { B } from "../B/B";
import type { C } from "../C/C";
import type { D } from "../D/D";
import type { E } from "../E/E";
import type { F } from "../F/F";

export class A {
  private readonly interactions: string[] = [];

  // Original methods with B, C, D
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

  // Bidirectional methods with E
  provideStatusToE(to: E): void {
    const status = "A is operational";
    this.log(`Provided status to E: ${status}`);
    to.receiveStatusFromA(this, status);
  }

  receiveMetricsFromE(from: E, metrics: string): void {
    this.log(`Received metrics from E: ${metrics}`);
  }

  // Bidirectional methods with F
  acknowledgeSyncFromF(from: F): void {
    this.log("Acknowledged synchronization from F");
    const config = "A configuration data";
    from.receiveConfigFromA(this, config);
  }

  applyUpdateFromF(from: F, update: string): void {
    this.log(`Applied update from F: ${update}`);
  }

  getHistory(): readonly string[] {
    return this.interactions;
  }

  private log(entry: string): void {
    this.interactions.push(entry);
  }
}
