import { GAMEObject } from "./GameObject";

export class GameMap extends GAMEObject {
    constructor(ctx, parent) {
        super();

        this.ctx = ctx;
        this.parent = parent;
        this.unit_length = 0;
    }

    start() {}

    update() {}

    render() {}
}
