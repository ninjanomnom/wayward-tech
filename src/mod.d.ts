import Mod from "mod/Mod";
import { IPlayer } from "player/IPlayer";
export default class techAndScience extends Mod {
    private version;
    private greeting;
    onLoad(saveData: any): void;
    onUnload(): void;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    onPlayerJoin(player: IPlayer): void;
}
