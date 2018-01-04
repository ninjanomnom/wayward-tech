define(["require", "exports", "mod/Mod", "language/Messages"], function (require, exports, Mod_1, Messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class techAndScience extends Mod_1.default {
        onLoad(saveData) {
            console.log("Tech and Science: Step 1 of 2...");
            this.version = "0.0.1";
            this.greeting = `You have Tech and Science v${this.version}. It is currently in development. Crashes, broken saves, and horrific bugs are to be expected.`;
            console.log("Tech and Science: Step 2 of 2...");
            console.log(this.greeting);
        }
        onUnload() {
        }
        onGameStart(isLoadingSave, playedCount) {
            ui.displayMessage(localPlayer, this.greeting, Messages_1.MessageType.Good);
        }
        onPlayerJoin(player) {
            if (player === localPlayer)
                return;
            ui.displayMessage(player, this.greeting, Messages_1.MessageType.Good);
        }
    }
    exports.default = techAndScience;
});
//# sourceMappingURL=mod.js.map