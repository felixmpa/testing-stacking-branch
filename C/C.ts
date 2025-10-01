import type { A } from "../A/A";
import type { B } from "../B/B";
import type { D } from "../D/D";

export class C {
  private readonly interactions: string[] = [];

  provideAnalysis(to: A, topic: string): void {
    const report = `Analysis on ${topic}`;
    this.log(`Provided analysis to A: ${report}`);
    to.recordReportFromC(this, report);
  }

  acceptCoordination(from: B, subject: string): void {
    this.log(`Accepted coordination from B on ${subject}`);
  }

  sendFeedback(to: B, summary: string): void {
    this.log(`Sent feedback to B: ${summary}`);
    to.receiveFeedback(this, summary);
  }

  exchangeIdeasWithB(partner: B, topic: string): void {
    this.log(`Initiated idea exchange with B on ${topic}`);
    partner.receiveIdeaExchange(this, topic);
  }

  alignWithD(partner: D, priority: string): void {
    this.log(`Aligned with D on priority: ${priority}`);
    partner.confirmAlignment(this, priority);
  }

  receiveUpdateFromD(from: D, update: string): void {
    this.log(`Received update from D: ${update}`);
  }

  reportToA(target: A, report: string): void {
    this.log(`Reported to A: ${report}`);
    target.recordReportFromC(this, report);
  }

  getHistory(): readonly string[] {
    return this.interactions;
  }

  private log(entry: string): void {
    this.interactions.push(entry);
  }
}
