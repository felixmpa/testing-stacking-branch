import type { A } from "../A/A";
import type { B } from "../B/B";
import type { C } from "../C/C";
import type { D } from "../D/D";
import { Orchestrator } from "../Orchestrator/orchestrator";

export class F {
    private readonly interactions: string[] = [];

    // Bidirectional with A
    synchronizeWithA(target: A): void {
        this.log("Initiated synchronization with A");
        target.acknowledgeSyncFromF(this);
    }

    receiveConfigFromA(from: A, config: string): void {
        this.log(`Received config from A: ${config}`);
    }

    deployUpdateToA(to: A, update: string): void {
        this.log(`Deployed update to A: ${update}`);
        to.applyUpdateFromF(this, update);
    }

    // Bidirectional with B
    orchestrateB(target: B): void {
        this.log("Started orchestrating B");
        target.acceptOrchestration(this);
    }

    receiveStateFromB(from: B, state: string): void {
        this.log(`Received state from B: ${state}`);
    }

    issueCommandToB(to: B, command: string): void {
        this.log(`Issued command to B: ${command}`);
        to.executeCommandFromF(this, command);
    }

    // Bidirectional with C
    integrateWithC(target: C): void {
        this.log("Integrated with C");
        target.confirmIntegrationWithF(this);
    }

    receiveInsightsFromC(from: C, insights: string): void {
        this.log(`Received insights from C: ${insights}`);
    }

    requestDataFromC(from: C, dataType: string): void {
        this.log(`Requested ${dataType} data from C`);
        from.provideDataToF(this, dataType);
    }

    // Bidirectional with D
    coordinateWithD(partner: D): void {
        this.log("Coordinated with D");
        partner.acceptCoordinationFromF(this);
    }

    receiveCompletionFromD(from: D, result: string): void {
        this.log(`Received completion from D: ${result}`);
    }

    assignPriorityToD(to: D, priority: string): void {
        this.log(`Assigned priority to D: ${priority}`);
        to.acknowledgePriorityFromF(this, priority);
    }

    getHistory(): readonly string[] {
        return this.interactions;
    }

    registerWithOrchestrator(orchestrator: Orchestrator): void {
        this.log("Registered with Orchestrator");
        const coordination = "F coordination systems ready";
        orchestrator.receiveCoordinationFromF(this, coordination);
    }

    acknowledgeSyncFromOrchestrator(from: Orchestrator): void {
        this.log("Acknowledged sync from Orchestrator");
    }

    private log(entry: string): void {
        this.interactions.push(entry);
    }
}
