import type { A } from "../A/A";
import type { B } from "../B/B";
import type { D } from "../D/D";
import type { E } from "../E/E";
import type { F } from "../F/F";
import { Orchestrator } from "../Orchestrator/orchestrator";

export class C {
  private readonly interactions: string[] = [];

  // Original methods with A, B, D
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

  // Bidirectional methods with E
  registerSubscriberE(from: E): void {
    this.log("Registered E as subscriber");
    const analytics = "C analytics data";
    from.receiveAnalyticsFromC(this, analytics);
  }

  generateReportForE(to: E, reportType: string): void {
    const report = `${reportType} report generated`;
    this.log(`Generated ${reportType} report for E`);
    to.receiveAnalyticsFromC(this, report);
  }

  // Bidirectional methods with F
  confirmIntegrationWithF(from: F): void {
    this.log("Confirmed integration with F");
    const insights = "C insights data";
    from.receiveInsightsFromC(this, insights);
  }

  provideDataToF(to: F, dataType: string): void {
    const data = `${dataType} data from C`;
    this.log(`Provided ${dataType} data to F`);
    to.receiveInsightsFromC(this, data);
  }

  getHistory(): readonly string[] {
    return this.interactions;
  }

  registerWithOrchestrator(orchestrator: Orchestrator): void {
    this.log("Registered with Orchestrator");
    const analysis = "C analysis systems online";
    orchestrator.receiveAnalysisFromC(this, analysis);
  }

  provideInsightsToOrchestrator(to: Orchestrator): void {
    this.log("Provided insights to Orchestrator");
    // Insights logic here
  }

  private log(entry: string): void {
    this.interactions.push(entry);
  }
}
