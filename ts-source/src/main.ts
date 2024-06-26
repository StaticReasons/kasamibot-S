let version = "1.0.0";

import * as Core from "./managers/Core";
import { command } from "./tools/Command";

try {
	var config = require("config");

	if (config !== undefined) {
		if (Memory.settings === undefined) {
			Memory.settings = {};
			console.log("* * * * * * * * * * * * *")
			console.log(" Loading KasamiBot " + version + " ")
			console.log("* * * * * * * * * * * * *")
		}

		if (config.bot !== undefined) {
			if (Memory.settings.bot === undefined) {
				console.log("Running as bot: " + config.bot);
				Memory.settings.bot = config.bot;
			}
		}
		if (config.passive !== undefined) {
			if (Memory.settings.passive === undefined) {
				console.log("Running as passive bot: " + config.passive);
				Memory.settings.passive = config.passive;
			}
		}
		if (config.slow !== undefined) {
			if (Memory.settings.slow === undefined) {
				console.log("Running as slow bot: " + config.slow);
				Memory.settings.slow = config.slow;
			}
		}
		if (config.creditsToMaintain !== undefined) {
			if (Memory.settings.creditsToMaintain === undefined) {
				console.log("Credits to maintain: " + config.creditsToMaintain);
				Memory.settings.creditsToMaintain = config.creditsToMaintain;
			}
		}
		if (config.powerfocus !== undefined) {
			if (Memory.settings.powerfocus === undefined) {
				console.log("Focusing on power processing: " + config.powerfocus);
				Memory.settings.powerfocus = config.powerfocus;
			}
		}
	}
}
catch (e) {
}


export function loop() {
	if (!Memory.signRecord) { Memory.signRecord = []; }
	for (let i in Game.creeps) {
		let c = Game.creeps[i];
		if (
			// c.room.name == 'W58N15' && 
			c.room.controller !== void 0 &&
			c.pos.inRangeTo(c.room.controller.pos, 1)) {
			let status = c.signController(c.room.controller, "...C O N V E R G E N C E...");
			console.log(`A sign attempt at ${Game.time} by ${c.name} with return status ${status}`);
			Memory.signRecord.unshift({
				time: Game.time,
				creepName: c.name,
				pos: c.pos,
				status: status
			});
			Memory.signRecord.splice(10);
		}
	}
	Core.run();
	command.initCommands();
}
