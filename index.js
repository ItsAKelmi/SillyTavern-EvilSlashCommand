import { registerSlashCommand } from "../../../slash-commands.js";




function jsCallback() {
    try {
        return document.querySelector("body").requestFullscreen();
    } catch {
        return null;
    }
}




registerSlashCommand('ffs', () => jsCallback(), [], 'Force fullscreen request');
