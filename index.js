import { V86Starter } from "v86";
import v86Wasm from "v86/build/v86.wasm";
import bios from "v86/bios/seabios.bin?url";
import vgabios from "v86/bios/vgabios.bin?url";
import cdrom from "./images/linux.iso?url";

new V86Starter({
    wasm_fn: v86Wasm,
    memory_size: 32 * 1024 * 1024,
    vga_memory_size: 2 * 1024 * 1024,
    screen_container: document.getElementById("screen_container"),
    bios: { url: bios },
    vga_bios: { url: vgabios },
    cdrom: { url: cdrom },
    autostart: true,
});