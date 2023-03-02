const GAME_OBJECTS = [];

export class GAMEObject {
    constructor() {
        GAME_OBJECTS.push(this);
        this.time_delta = 0;
        this.has_called_start = false;
    }

    start() {
        // Execute only once
    }

    update() {
        // Execute each frame except the first one
    }

    on_destroy() {
        // Execute before destroy()
    }

    destroy() {
        this.on_destroy();

        for (let i in GAME_OBJECTS) {
            const obj = GAME_OBJECTS[i];
            if (obj === this) {
                GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp;

const step = (timestamp) => {
    for (let obj of GAME_OBJECTS) {
        if (!obj.has_called_start) {
            obj.start();
            obj.has_called_start = true;
        } else {
            obj.time_delta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(step);
};

requestAnimationFrame(step);
