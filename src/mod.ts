import Mod from "mod/Mod";
import { MessageType } from "language/Messages";
import { IPlayer } from "player/IPlayer";
import { IItem } from "item/IItem";

// This sort of thing should be made automated eventualy
import streetLampExports from "./items/StreetLamp";

export default class techAndScience extends Mod {
	private version: string;
	private greeting: string;

	public onLoad(saveData: any): void {
		console.log("Tech and Science: Step 1 of 2...");

		// Setting up the basic variables
		this.version = "0.0.1";
		this.greeting = `You have Tech and Science v${this.version}. It is currently in development. Crashes, broken saves, and horrific bugs are to be expected.`;

		console.log("Tech and Science: Step 2 of 2...");

		for (let item of streetLampExports.items) {
			this.addItem(item);
		};
		for (let doodad of streetLampExports.doodads) {
			this.addDoodad(doodad);
		}
		
		// Greet the player
		console.log(this.greeting)
	}

	public onUnload(): void {
	}

	public onGameStart(isLoadingSave: boolean, playedCount: number): void {
		ui.displayMessage(localPlayer, this.greeting, MessageType.Good);
	}

	public onPlayerJoin(player: IPlayer): void {
		if(player === localPlayer)
			return
		ui.displayMessage(player, this.greeting, MessageType.Good);
	}
}