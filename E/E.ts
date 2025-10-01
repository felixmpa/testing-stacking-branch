import type { A } from "../A/A";
import type { B } from "../B/B";
import type { C } from "../C/C";
import type { D } from "../D/D";

export class E {
    private readonly interactions: string[] = [];

    // Bidirectional with A
    requestStatusFromA(from: A): void {
        this.log("Requested status from A");
        from.provideStatusToE(this);
    }

    receiveStatusFromA(from: A, status: string): void {
        this.log(`Received status from A: ${status}`);
    }

    sendMetricsToA(to: A, metrics: string): void {
        this.log(`Sent metrics to A: ${metrics}`);
        to.receiveMetricsFromE(this, metrics);
    }

    // Bidirectional with B
    monitorB(target: B): void {
        this.log("Started monitoring B");
        target.acknowledgeMonitoring(this);
    }

    receiveDataFromB(from: B, data: string): void {
        this.log(`Received data from B: ${data}`);
    }

    sendAlertToB(to: B, alert: string): void {
        this.log(`Sent alert to B: ${alert}`);
        to.receiveAlertFromE(this, alert);
    }

    // Bidirectional with C
    subscribeToC(target: C): void {
        this.log("Subscribed to C for updates");
        target.registerSubscriberE(this);
    }

    receiveAnalyticsFromC(from: C, analytics: string): void {
        this.log(`Received analytics from C: ${analytics}`);
    }

    requestReportFromC(from: C, reportType: string): void {
        this.log(`Requested ${reportType} report from C`);
        from.generateReportForE(this, reportType);
    }

    // Bidirectional with D
    trackD(target: D): void {
        this.log("Started tracking D");
        target.confirmTracking(this);
    }

    receiveProgressFromD(from: D, progress: string): void {
        this.log(`Received progress from D: ${progress}`);
    }

    sendInstructionToD(to: D, instruction: string): void {
        this.log(`Sent instruction to D: ${instruction}`);
        to.executeInstructionFromE(this, instruction);
    }

    getHistory(): readonly string[] {
        return this.interactions;
    }

    private log(entry: string): void {
        this.interactions.push(entry);
    }
}
