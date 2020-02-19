// tslint:disable:no-reference

/// <reference path="../types/interfaces.d.ts" />
/// <reference path="../types/chai.d.ts" />

import * as chai from "chai";
import ChaiBN from "chai-bn";
import { BN } from "./tools";

/**
 * @notice This file configures the environment for testing
 */
class TestEnvironmentSetup {
    private isConfigured: boolean;

    constructor() {
        this.isConfigured = false;
    }

    public configure() {
        if (this.isConfigured) {
            return;
        }

        chai.use(ChaiBN(BN));
        chai.should();
        this.isConfigured = true;
    }
}

export default new TestEnvironmentSetup();
