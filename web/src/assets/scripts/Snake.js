import { GAMEObject } from "./GameObject";
import { Cell } from "./Cell";

export class Snake extends GAMEObject {
    constructor(info, gamemap) {
        super();

        this.id = info.id;
        this.color = info.color;
        this.gamemap = gamemap;

        this.cells = [new Cell(info.r, info.c)]; // store the snake, cells[0] for its head.
        this.next_cell = null;

        this.speed = 5; // move 5 lattices per second
        this.direction = -1; // -1 => no command, 0 => up, 1 => right, 2 => down, 3 => left
        this.status = "idle"; // idle => stop status, die => death status

        this.dr = [-1, 0, 1, 0]; // row offset of 4 directions
        this.dc = [0, 1, 0, -1]; // col offsets of 4 directions

        this.step = 0; // the number of steps
        this.eps = 1e-2; // allowable error
    }

    start() {}

    set_direction(d) {
        this.direction = d;
    }

    next_step() {
        // turn snake's status to next_step
        const d = this.direction;
        this.next_cell = new Cell(
            this.cells[0].r + this.dr[d],
            this.cells[0].c + this.dc[d]
        );
        this.direction = -1;
        this.status = "move";
        this.step++;

        const k = this.cells.length;
        for (let i = k; i > 0; i--) {
            this.cells[i] = JSON.parse(JSON.stringify(this.cells[i - 1]));
        }
    }

    update_move() {
        const dx = this.next_cell.x - this.cells[0].x;
        const dy = this.next_cell.y - this.cells[0].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.eps) {
            this.cells[0] = this.next_cell;
            this.next_cell = null;
            this.status = "idle"; // not moving
        } else {
            const move_distance = (this.speed * this.time_delta) / 1000;
            this.cells[0].x += (move_distance * dx) / distance;
            this.cells[0].y += (move_distance * dy) / distance;
        }
    }

    update() {
        if (this.status === "move") {
            this.update_move();
        }
        this.render();
    }

    render() {
        const L = this.gamemap.L;
        const ctx = this.gamemap.ctx;

        ctx.fillStyle = this.color;
        for (const cell of this.cells) {
            ctx.beginPath();
            ctx.arc(cell.x * L, cell.y * L, L / 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
