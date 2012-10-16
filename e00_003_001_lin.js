function line_room(room)
{
	return(java.lang.String.format("<CLT 4>The sign says \"%s\"...\nBut it's locked...\n<CLT>", room));
}

/**
 * Day zero: Makoto's first time in Mount Hope Academy's halls
 * @method e00_003_001_lin
 **/
function e00_003_001_lin()
{
	var s = new LINScript();
	// Line 1: "Makoto Naegi"
	s.op(0x22, [0x01, 0x00, 0x01]);
	s.op(0x25, [0x0B, 0x01]);
	s.op(0x25, [0x07, 0x00]);
	s.op(0x25, [0x10, 0x00]);
	s.op(0x33, [0x02, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x03, 0x00, 0x00, 0x64]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x15, [0x01, 0x00, 0xFF]);
	s.op(0x25, [0x09, 0x00]);
	s.op(0x23, [0x20, 0x01, 0x00, 0x01, 0x00]);
	s.playBGM(3, 100, 0);
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x5A]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("Even the halls... are kinda creepy...\n");    // "なんだか…廊下まで不気味だな…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 2: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>This is getting stranger and stranger...\n<CLT>");    // "<CLT 4>ますます意味不明だ…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 3: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>This is all really beyond comprehension...\n<CLT>");    // "<CLT 4>本格的に理解不能だ……\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 4: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("Anyways... time to go to the entrance hall...\n");    // "とりあえず…玄関ホールに行こう…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 5: "[No Name]"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.showLine("<CLT 23>You can <CLT><CLT 3>walk<CLT><CLT 23> up and down the halls\nusing <CLT><CLT 3>the analog pad.\n<CLT>");    // "<CLT 23><CLT><CLT 3>アナログパッド<CLT><CLT 23>で、廊下を<CLT><CLT 3>移動<CLT><CLT 23>できます。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 6: "[No Name]"
	s.op(0x03, [0x17]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.showLine("<CLT 23>You can also hold down <CLT><CLT 3>the " + config.getCancelButton() + " button<CLT><CLT 23> to <CLT><CLT 3>run.<CLT>");    // "<CLT 23><CLT><CLT 3>×ボタン<CLT><CLT 23>を押しながら移動すると、\nあなた様は<CLT><CLT 3>走る<CLT><CLT 23>事もできます。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 7: "[No Name]"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x05, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>In addition, pressing <CLT><CLT 3>the △ button<CLT><CLT 23>\nwhile you're in the halls will turn on <CLT><CLT 3>the map<CLT><CLT 23>.\n<CLT>");    // "<CLT 23>また、廊下では<CLT><CLT 3>△ボタン<CLT><CLT 23>で、\nこのような<CLT><CLT 3>マップ<CLT><CLT 23>をご覧頂けます。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 8: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Pressing <CLT><CLT 3>the △ button<CLT><CLT 23> will turn off <CLT><CLT 3>the map<CLT><CLT 23>.\nIsn't it convenient?\n<CLT>");    // "<CLT 23>もう一度<CLT><CLT 3>△ボタン<CLT><CLT 23>を押して頂くと、<CLT><CLT 3>マップ<CLT><CLT 23>が消えます。\nなんと便利なのでしょう！\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 9: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x10, 0x01]);
	s.op(0x34, [0x01, 0xF4]);
	s.op(0x27, [0xFF]);
	s.op(0x29, [0x14]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>\"Despair Hotel\"...?\n<CLT>");    // "<CLT 4>絶望ホテル…？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 10: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>It looks like this is the dorm...\nBut I've gotta go to the entrance hall...\n<CLT>");    // "<CLT 4>宿泊施設みたいだけど…\nそれより今は玄関ホールに急がないと…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 11: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x15]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.playSoundEffectA(152, 100);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_room("Classroom 1-B"));    // "<CLT 4>１－Ｂって書いてある…\nでも開かないな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 12: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x16]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>The sign says \"1-A\"...\nI was just in this room...\n<CLT>");    // "<CLT 4>１－Ａって書いてある…\nこの教室から今でてきたんだよな。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 13: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x17]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>What are these red doors...\nLooks creepy...\n<CLT>");    // "<CLT 4>なんだろうこの赤い扉…\n気味が悪いな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 14: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x18]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.playSoundEffectA(152, 100);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_room("A/V Room"));    // "<CLT 4>視聴覚室って書いてある…\nでも開かないな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 15: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x19]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.playSoundEffectA(152, 100);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_room("Store"));    // "<CLT 4>購買部って書いてある…\nでも開かないな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 16: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1A]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.playSoundEffectA(152, 100);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_room("Nurse's Office"));    // "<CLT 4>保健室って書いてある…\nでも開かないな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 17: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1B]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.playSoundEffectA(152, 100);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_room("Men's Restroom"));    // "<CLT 4>男子トイレって書いてある…\nでも開かないな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 18: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1C]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.playSoundEffectA(152, 100);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_room("Women's Restroom"));    // "<CLT 4>女子トイレって書いてある…\nでも開かないな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 19: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1D]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>What's with this shutter...\n<CLT>");    // "<CLT 4>なんだろうこのシャッター…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 20: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1E]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.playSoundEffectA(152, 100);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_room("Gymnasium"));    // "<CLT 4>体育館って書いてある…\nでも開かないな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 20: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1F]);
	s.op(0x15, [0x03, 0x01, 0xFF]);
	s.op(0x33, [0x08, 0x00, 0x00, 0x00]);
	s.op(0x25, [0x0F, 0x01]);
	s.playSoundEffectA(141, 100);
	s.goToScript(0, 4, 3);
	s.op(0x1A);
	s.op(0x29, [0xFE]);
	s.op(0x29, [0xFF]);
	s.op(0x2A, [0x01, 0xF4]);
	s.op(0x1A);
	return(s);
}
