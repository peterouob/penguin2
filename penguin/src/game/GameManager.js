import Item from "./Model/Item.js"
import Branch from "./Model/Branch.js"
import Challenge from "./Model/Challenge.js";
import Advancement from "./Model/Advancement.js";
import {QRCodeScanResult} from "./QRCodeScanResult.js";

export default class GameManager {

    static _instance: GameManager = null;
    static GetInstance(){
        if (this._instance == null){
            this._instance = new GameManager();
        }
        return this._instance;
    }

    public itemRegistry: Map<string, Item>;
    public branchRegistry: Map<string, Branch>;
    public challengeRegistry: Map<string, Challenge>;

    decode(content: string){
        let result: QRCodeScanResult = JSON.parse(content);
    }





}