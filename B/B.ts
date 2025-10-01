import type { A } from "../A/A";
import type { C } from "../C/C";
import type { D } from "../D/D";

export class B {
  private readonly interactions: string[] = [];

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

  getHistory(): readonly string[] {
    return this.interactions;
  }

  private log(entry: string): void {
    this.interactions.push(entry);
  }
}