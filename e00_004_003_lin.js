loadScript("common.js");
loadScript("chapter00_common.js");

/**
 * Day zero: Makoto meets all other freshmen
 * @method e00_004_003_lin
 **/
function e00_004_003_lin()
{
	var s = new LINScript();
	enter_entrance_hall(s);
	self_intro_ishimaru(s);
	self_intro_reon(s);
	self_intro_yamada(s);
	self_intro_maizono(s);
	self_intro_fukawa(s);
	object_lines(s, true);
	self_intro_oowada(s);
	self_intro_kirigiri(s);
	self_intro_asahina(s);
	self_intro_junko(s);
	self_intro_chihiro(s);
	object_lines(s, true);
	self_intro_togami(s);
	self_intro_hagakure(s);
	self_intro_oogami(s);
	self_intro_celes(s);
	object_lines(s, true);
	announcement(s);
	before_going_to_gym(s);
	object_lines(s, false);
	cleanup(s);
	return(s);
}

function object_lines(s, exit_hook)
{	
	// Line 141, 263, 349, 434: "Makoto Naegi"
	s.op(0x27, [0xFF]);
	s.op(0x29, [0x14]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_TV[0]);    // "<CLT 4>テレビがある…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 142, 264, 350, 435: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_TV[1]);    // "<CLT 4>政府公認の学園なんだから、\n学校にテレビくらいあってもおかしくないけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 143, 265, 351, 436: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_TV[2]);    // "<CLT 4>なんだろう…\n何か異様な雰囲気を感じる。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 144, 266, 352, 437: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x17]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Here's a mailbox...\nBut there's nothing inside.\n<CLT>");    // "<CLT 4>レターボックスが置いてある…\n中には何も入ってないな。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);


	// Line 145, 267, 353, 438: "Makoto Naegi"
	s.op(0x29, [0x16]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Wh-What's this...\nhunk of metal...\n<CLT>");    // "<CLT 4>な、なんなんだ…\nこの鉄の塊…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 146, 268, 354, 439: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Is this... a bank vault...?\n<CLT>");    // "<CLT 4>まるで…軍事施設みたいな扉…？\n<CLT>"	// TODO: 
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 147, 269, 355, 440: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>This is the entrance hall, right?\nI don't think that the front door was like this...\n<CLT>");    // "<CLT 4>ここって、さっき入ってきた玄関ホールだよな？\nこんな扉じゃなかったと思うけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);


	// Line 148, 270, 356, 441: "Makoto Naegi"
	var lines_camera_gun = ["<CLT 4>The security camera...\nhas things that look like guns attached to it...\n<CLT>",
							"<CLT 4>They aren't real... right?\n<CLT>"];
	
	s.op(0x29, [0x15]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.op(0x25, [0x02, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_camera_gun[0]);    // "<CLT 4>監視カメラ…に銃みたいな物が付いている…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 149, 271, 357, 442: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_camera_gun[1]);    // "<CLT 4>まさか…本物ってことはないよな？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);


	// Line 150, 272, 358, 443: "Makoto Naegi"
	s.op(0x29, [0x18]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.op(0x25, [0x02, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_camera_gun[0]);    // "<CLT 4>監視カメラ…に銃みたいな物が付いている…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 151, 273, 359, 444: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_camera_gun[1]);    // "<CLT 4>まさか…本物って事はないよな？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);


	// Line 152, 274, 360: "Makoto Naegi"
	if(exit_hook)
	{
		s.op(0x29, [0xFE]);
		s.op(0x25, [0x00, 0x01]);
		s.op(0x25, [0x01, 0x01]);
		s.setSpeaker("Makoto Naegi");
		s.op(0x03, [0x04]);
		s.showLine("<CLT 4>I should introduce myself to everyone first...\n<CLT>");    // "<CLT 4>一応、みんなに挨拶くらいは、\nしておいた方がいいよな…？\n<CLT>"
		s.waitFrames(2);
		s.op(0x03, [0x00]);
		s.waitForInput();
		s.op(0x25, [0x01, 0x00]);
	}
}

function enter_entrance_hall(s)
{
	// Line 1: "Makoto Naegi"
	s.op(0x22, [0x01, 0x00, 0x01]);
	s.op(0x25, [0x0B, 0x01]);
	s.op(0x25, [0x07, 0x00]);
	s.op(0x25, [0x10, 0x00]);
	s.op(0x33, [0x02, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x03, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x08, 0x00, 0x00, 0x00]);
	s.op(0x26, [0x0D, 0x20, 0x00]);
	s.op(0x26, [0x00, 0x0C, 0x00]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x15, [0x03, 0x00, 0xFF]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(0, "Kiyotaka Ishimaru", 0, 0, 0);
	s.showSprite(1, "Byakuya Togami", 0, 0, 0);
	s.showSprite(2, "Mondo Oowada", 0, 0, 0);
	s.showSprite(4, "Hifumi Yamada", 0, 0, 0);
	s.showSprite(5, "Yasuhiro Hagakure", 0, 0, 0);
	s.showSprite(7, "Kyouko Kirigiri", 0, 0, 0);
	s.showSprite(8, "Aoi Asahina", 0, 0, 0);
	s.showSprite(9, "Touko Fukawa", 0, 0, 0);
	s.playBGM(255, 90, 0);
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x30, [0x00, 0x00, 0x01]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I returned to the entrance hall...\n<CLT>");    // "<CLT 4>ボクが再び玄関ホールに戻ると、\nそこには…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 2: "Makoto Naegi"
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>...and met them.\n<CLT>");    // "<CLT 4>…彼らの姿があった。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 3: "Yasuhiro Hagakure"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x30, [0x00, 0x00, 0x03]);
	s.op(0x06, [0x02, 0xE6, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xE6, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("???");
	s.playVoice("Yasuhiro Hagakure", 99, 75);
	s.showLine("Are you... a freshman too?\n");    // "オメーも…ここの新入生か…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 4: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.playVoice("Makoto Naegi", 99, 66);
	s.showLine("Then... you're all...!?\n");    // "じゃあ…キミ達も…！？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 5: "Chihiro Fujisaki"
	s.setSpeaker("???");
	s.playVoice("Chihiro Fujisaki", 99, 67);
	s.showLine("Yeah. We're all freshmen who were supposed\nto enroll in this school today...\n");    // "うん。今日、希望ヶ峰学園に入学する予定の…\n新入生だよ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 6: "Hifumi Yamada"
	s.setSpeaker("???");
	s.playVoice("Hifumi Yamada", 99, 71);
	s.showLine("Now there are 15... It's a nice round number,\nso I guess this is all of us...\n");    // "これで１５人ですか…\nキリがいいし、これで揃いましたかね…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 7: "Makoto Naegi"
	s.playBGM(3, 100, 0);
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>So... they're the <CLT><CLT 3>\"super students\"<CLT><CLT 4>\nchosen by Mount Hope Academy...\n<CLT>");    // "<CLT 4>彼らが…希望ヶ峰学園に選ばれた\n<CLT><CLT 3>“超高校級”<CLT 4>の生徒達…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 8: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I slowly looked around at every face in the room.\n<CLT>");    // "<CLT 4>その場に揃った顔を、ゆっくりと見回してみる。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 9: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Would it be an exaggeration to say\nthat I could see their auras?\n<CLT>");    // "<CLT 4>なんだか…オーラのようなものを感じると言ったら、\n言い過ぎだろうか？\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 10: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x30]);
	s.op(0x06, [0x02, 0xE6, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x25, [0x0E, 0x01]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("Uh, erm... Hello...\nI'm Makoto Naegi...\n");    // "えっと、あの…はじめまして…\n苗木誠って言います…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 11: "Makoto Naegi"
	s.showLine("Things happened and I somehow fell asleep...\nThat's why I'm late...\n");    // "色々あって、いつの間にか寝ちゃってて…\nそれで遅れちゃって……\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 12: "Yasuhiro Hagakure"
	s.op(0x25, [0x1A, 0x06]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x14]);
	s.showSprite(0, "Yasuhiro Hagakure", 6, 1, 2);
	s.setSpeaker("???");
	s.playVoice("Yasuhiro Hagakure", 99, 16);
	s.showLine("Huh? You too?\n");    // "え？　オメーもそうなんか？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 13: "Celestia Rudenberg"
	s.showSprite(1, "Celestia Rudenberg", 7, 1, 4);
	s.setSpeaker("???");
	s.playVoice("Celestia Rudenberg", 99, 13);
	s.showLine("The mystery deepens...\n");    // "とすると、ますます妙ですわね…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 14: "Hifumi Yamada"
	s.showSprite(0, "Hifumi Yamada", 5, 1, 3);
	s.setSpeaker("???");
	s.playVoice("Hifumi Yamada", 99, 8);
	s.showLine("This is strange...\nThis is a state of emergency!\n");    // "異常だ…これは間違いなく異常事態宣言発令ですぞ！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 15: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("U-Um... what's going on?\nI don't understand what the situation is...\n");    // "あ、あの…どういう事？\nよく状況を把握出来ていないんだけど…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 16: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 6, 1, 2);
	s.setSpeaker("???");
	s.playVoice("Kiyotaka Ishimaru", 99, 13);
	s.showLine("Hold on! First things first!\n");    // "ちょっと待ちたまえ！　その前にだ！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 17: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 8, 1, 2);
	s.setSpeaker("???");
	s.playVoice("Kiyotaka Ishimaru", 99, 8);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("Naegi, how outrageous of you to be late!\nYou were instructed to be here at 8!\n");    // "苗木くんッ！　遅刻とはけしからんじゃないか！！\n８時集合と知らされてあったはずだろう！\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 18: "Kiyotaka Ishimaru"
	s.showLine("I will report this to the school authorities,\nand make sure that you get a strict punishment...\n");    // "入学初日に遅れるなど言語道断！\n学校側に報告の上、厳正なる処罰を…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 19: "Junko Enoshima (fake)"
	s.showSprite(0, "Junko Enoshima (fake)", 6, 1, 3);
	s.setSpeaker("???");
	s.playVoice("Junko Enoshima (fake)", 99, 22);
	s.showLine("What are you going on about...?\nCan't you see what we're in right now?\n");    // "アンタ、何言ってんの…？\nしょうがないじゃん、こんな状況なんだからさ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 20: "Aoi Asahina"
	s.showSprite(1, "Aoi Asahina", 20, 1, 1);
	s.setSpeaker("???");
	s.playVoice("Aoi Asahina", 99, 39);
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Anyway, let's introduce ourselves\nto our late classmate!\n");    // "それより、改めて自己紹介しない！？\n遅れてきたクラスメイトくんの為にもさ！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 21: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 2, 1, 0);
	s.setSpeaker("???");
	s.playVoice("Mondo Oowada", 99, 18);
	s.showLine("...Self-introductions?\nLike hell we have time for that!\n");    // "…自己紹介だぁ？\nんな事やってる場合じゃねーだろ！！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 22: "Celestia Rudenberg"
	s.showSprite(1, "Celestia Rudenberg", 0, 1, 4);
	s.setSpeaker("???");
	s.playVoice("Celestia Rudenberg", 99, 5);
	s.showLine("However, before we attack the problem,\nwe should understand our backgrounds.\n");    // "ですが、問題について話し合う前に、\nお互いの素性はわかっていた方がよろしいでしょう。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 23: "Celestia Rudenberg"
	s.showLine("We cannot discuss among ourselves\nif we do not even know who is talking...\n");    // "なんてお呼びしていいのかわからないままでは、\n話し合いも出来ないじゃありませんか…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 24: "Chihiro Fujisaki"
	s.showSprite(0, "Chihiro Fujisaki", 4, 1, 1);
	s.setSpeaker("???");
	s.playVoice("Chihiro Fujisaki", 99, 4);
	s.showLine("That's true...\n");    // "それも、そうだよねぇ……\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 25: "Sayaka Maizono"
	s.showSprite(1, "Sayaka Maizono", 16, 1, 2);
	s.setSpeaker("???");
	s.playVoice("Sayaka Maizono", 99, 3);
	s.showLine("Then, we just have to introduce ourselves, right?\nWe'll discuss later...\n");    // "じゃあ、まず最初に自己紹介って事でいいですか？\n話し合いは、その後という事で…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 26: "Makoto Naegi"
	s.showSprite(1, "Sayaka Maizono", 0, 4, 2);
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I still don't understand what's going on,\nbut I just gotta introduce myself, right?\n<CLT>");    // "<CLT 4>イマイチ、この状況が理解出来てないけど、\nとりあえずは自己紹介って事でいいんだよな？\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 27: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Then... this is a good chance.\n<CLT>");    // "<CLT 4>なら…これも、ちょうどいい機会か。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 28: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Although I investigated everyone's background\n<CLT><CLT 3>online<CLT><CLT 4>...\n<CLT>");    // "<CLT 4>みんなの事は、<CLT><CLT 3>“希望ヶ峰学園新入生スレ”<CLT><CLT 4>で、\n一通りは調べてあるけど…\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 29: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I should still check what kind of people they are.\n<CLT>");    // "<CLT 4>実際には、どんな人達なのか…\nそれを確認しておくとしよう。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);
}

function self_intro_ishimaru(s)
{
	// Line 30: "Makoto Naegi"
	s.showSprite(0, "Chihiro Fujisaki", 4, 3, 1);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(0, "Kiyotaka Ishimaru", 98, 0, 0);
	s.showSprite(1, "Byakuya Togami", 98, 0, 0);
	s.showSprite(2, "Mondo Oowada", 98, 0, 0);
	s.showSprite(3, "Reon Kuwata", 98, 0, 0);
	s.showSprite(4, "Hifumi Yamada", 98, 0, 0);
	s.showSprite(5, "Yasuhiro Hagakure", 98, 0, 0);
	s.showSprite(6, "Sayaka Maizono", 98, 0, 0);
	s.showSprite(7, "Kyouko Kirigiri", 98, 0, 0);
	s.showSprite(8, "Aoi Asahina", 98, 0, 0);
	s.showSprite(9, "Touko Fukawa", 98, 0, 0);
	s.showSprite(10, "Sakura Oogami", 98, 0, 0);
	s.showSprite(11, "Celestia Rudenberg", 98, 0, 0);
	s.showSprite(12, "Junko Enoshima (fake)", 98, 0, 0);
	s.showSprite(13, "Chihiro Fujisaki", 98, 0, 0);
	s.showSprite(6, "Kiyotaka Ishimaru", 0, 0, 1);
	s.showSprite(0, "Sayaka Maizono", 0, 0, 1);
	s.showSprite(4, "Touko Fukawa", 0, 0, 1);
	s.showSprite(2, "Reon Kuwata", 0, 0, 11);
	s.showSprite(3, "Hifumi Yamada", 0, 0, 11);
	s.op(0x25, [0x1B, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I'll talk to these five first.\n<CLT>");    // "<CLT 4>まず最初に、あの５人から話を聞いてみよう。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 31: "[No Name]"
	s.op(0x25, [0x02, 0x00]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>You can talk to another student by pointing\n<CLT><CLT 3>the cursor<CLT><CLT 23> at him or her and pressing <CLT><CLT 3>the " + config.getConfirmButton() + " button.\n<CLT>");    // "<CLT 23>生徒の皆様に<CLT><CLT 3>照準<CLT><CLT 23>を合わせ、\n<CLT><CLT 3>○ボタン<CLT><CLT 23>で<CLT><CLT 3>会話<CLT><CLT 23>が可能でございます。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 32: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Talking with others is the key to moving the\nstory forward, so please do not forget this...\n<CLT>");    // "<CLT 23>会話はストーリーを進める基本となりますので、\nお忘れなきよう…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 33: "Kiyotaka Ishimaru"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x26, [0x00, 0x0C, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x10, 0x01]);
	s.op(0x34, [0x01, 0xF4]);
	s.op(0x27, [0x06]);
	s.op(0x35, [0x0D, 0x00, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xF5]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Kiyotaka Ishimaru", 6, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Kiyotaka Ishimaru", 99, 1);
	s.showLine("I'm Kiyotaka Ishimaru! My motto is \"honest\nwork\"! Let's support each other in learning!\n");    // "僕の名前は石丸清多夏だ！　座右の銘は質実剛健！\nお互い、学業に切磋琢磨して頑張ろうではないか！！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 34: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.showSprite(0, "Kiyotaka Ishimaru", 0, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x06, [0x02, 0xCE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x06, [0x02, 0xCE, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.showSprite(0, "Kiyotaka Ishimaru", 6, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>\"Kiyotaka Ishimaru\"...\nAccording to the information I found online...\n<CLT>");    // "<CLT 4>石丸清多夏って名前…\n“希望ヶ峰学園新入生スレ”で見た情報によると…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 35: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>He's an honor student who has always gotten\ntop grades in famous prep schools...\n<CLT>");    // "<CLT 4>有名進学校で常にトップの成績をとり続け、\n素行も非のつけどころのない超優等生…だったな。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	
	
	// Line 35: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>His diligence knows no bounds...\nHe's famous for being a hall monitor\n<CLT>");    // "<CLT 4>有名進学校で常にトップの成績をとり続け、\n素行も非のつけどころのない超優等生…だったな。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();

	/*
	// Line 36: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>He's famous for being a hall monitor...\n<CLT>");    // "<CLT 4>風紀委員としての活動も有名で…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	// */

	// Line 37: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>who values rules more than anything else:\na <CLT><CLT 3>\"super hall monitor\"<CLT><CLT 4>...\n<CLT>");    // "<CLT 4>何よりも規律を重んじる<CLT><CLT 3>“超高校級の風紀委員”<CLT><CLT 4>って、\n呼ばれてるとか…\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 38: "Kiyotaka Ishimaru"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Kiyotaka Ishimaru", 14, 1, 2);
	s.playVoice("Kiyotaka Ishimaru", 99, 25);
	s.showLine("Your name is \"Makoto Naegi,\" right?\n");    // "君の名前は、苗木誠だったな？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 39: "Kiyotaka Ishimaru"
	s.showSprite(0, "Kiyotaka Ishimaru", 2, 1, 2);
	s.playVoice("Kiyotaka Ishimaru", 99, 4);
	s.showLine("What a wonderful name!\nYou should be grateful for your parents!\n");    // "苗木誠、実に良い名前だ！\n立派な名前を付けてくれたご両親に感謝したまえよ！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 40: "Kiyotaka Ishimaru"
	s.showSprite(0, "Kiyotaka Ishimaru", 7, 1, 2);
	s.playVoice("Kiyotaka Ishimaru", 99, 11);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("And you should work hard to grow everyday\nso you can fulfill your namesake!\n");    // "そして、君もその名前に負けぬよう、\n日々精進したまえよッ！！\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 41: "Kiyotaka Ishimaru"
	var line_ishimaru = "Work is all we need in life!\nDon't you think so? Right!\n";
	s.showSprite(0, "Kiyotaka Ishimaru", 8, 1, 2);
	s.playVoice("Kiyotaka Ishimaru", 99, 13);
	s.showLine(line_ishimaru);    // "人生には努力を費やすだけの価値がある！\nそうだろう？　そうなのだよ！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 42: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>He seems... kinda annoying...\n<CLT>");    // "<CLT 4>なんだか…面倒臭そうな人だな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 43: "Kiyotaka Ishimaru"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Kiyotaka Ishimaru", 7, 4, 2);
	s.op(0x34, [0x01, 0xF6]);
	s.op(0x2A, [0x01, 0xF5]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Kiyotaka Ishimaru", 7, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Kiyotaka Ishimaru", 99, 13);
	s.showLine(line_ishimaru);    // "人生には努力を費やすだけの価値がある！\nそうだろう？　そうなのだよ！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 44: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>He's... really annoying...\n<CLT>");    // "<CLT 4>かなり…面倒臭い人みたいだな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);
}
	
function self_intro_reon(s)
{
	// Line 45: "Reon Kuwata"
	s.showSprite(0, "Kiyotaka Ishimaru", 7, 4, 2);
	s.op(0x2A, [0x01, 0xF6]);
	s.op(0x26, [0x0D, 0x00, 0x01]);
	s.op(0x35, [0x0D, 0x00, 0x00, 0x01, 0x06, 0x0D, 0x03, 0x00, 0x01, 0x06, 0x0D, 0x04, 0x00, 0x01, 0x06, 0x0D, 0x06, 0x00, 0x01, 0x06, 0x0D, 0x09, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xF7]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(6, "Kiyotaka Ishimaru", 98, 0, 0);
	s.showSprite(0, "Sayaka Maizono", 98, 0, 0);
	s.showSprite(4, "Touko Fukawa", 98, 0, 0);
	s.showSprite(2, "Reon Kuwata", 98, 0, 0);
	s.showSprite(3, "Hifumi Yamada", 98, 0, 0);
	s.op(0x34, [0x00, 0x03]);
	s.op(0x2A, [0x01, 0xF7]);
	s.op(0x27, [0x02]);
	s.op(0x35, [0x0D, 0x03, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xF8]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Reon Kuwata", 11, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Reon Kuwata", 99, 1);
	s.showLine("Yo, my name is Reon Kuwata!\nNice to meet'cha~\n");    // "うーっす、オレの名前は桑田怜恩だ！\nヨロシクな～！！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 46: "Makoto Naegi"
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.showSprite(0, "Reon Kuwata", 0, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x06, [0x02, 0xD1, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x06, [0x02, 0xD1, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.showSprite(0, "Reon Kuwata", 11, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>\"Reon Kuwata\" is...\n<CLT>");    // "<CLT 4>桑田怜恩って言えば…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 47: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.showSprite(0, "Reon Kuwata", 11, 3, 2);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>the ace and clean-up hitter of a team\nthat won the nationals.\n<CLT>");    // "<CLT 4>高校野球大会の優勝チームで、エースで４番バッター。\nプロも注目する<CLT><CLT 3>“超高校級の野球選手”<CLT><CLT 4>だったよな。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();

	
	// Line 47: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>He's the \"super baseball player\"\nwho's even feared by the pros...\n<CLT>");    // "<CLT 4>高校野球大会の優勝チームで、エースで４番バッター。\nプロも注目する<CLT><CLT 3>“超高校級の野球選手”<CLT><CLT 4>だったよな。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	

	// Line 48: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>A first-class athlete...\n<CLT>");    // "<CLT 4>そんな超一流アスリートが…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 49: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.showSprite(0, "Reon Kuwata", 0, 1, 2);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Huh? It's you!?\n");    // "えっ？　キミなのっ！？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 50: "Reon Kuwata"
	s.showSprite(0, "Reon Kuwata", 1, 1, 2);
	s.playVoice("Reon Kuwata", 99, 8);
	s.showLine("Huh? What up, dawg?\n");    // "あ？　どーしたん？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 51: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("N-No... I'm just surprised...\nI thought that the \"super baseball player\" was...\n");    // "い、いや…意外って言うか…\n“超高校級の野球選手”って言うから、てっきり…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 52: "Reon Kuwata"
	s.showSprite(0, "Reon Kuwata", 1, 1, 2);
	s.playVoice("Reon Kuwata", 99, 11);
	s.showLine("Didja think that I have a shaved head...?\n");    // "マルコメ君を想像したとかぁ…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 53: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("Well... I did, but...\n");    // "マルコメ君…って言うか…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 54: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.showSprite(0, "Reon Kuwata", 1, 3, 2);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("I imagined that you'd look more like an athlete.\n");    // "スポーツマン風の高校野球児を想像したのは、\n確かだよ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 55: "Makoto Naegi"
	s.showLine("That was my impression from looking at\narticles and photos of you online...\n");    // "前に、ネットでキミの記事と写真を見たけど、\nそんな感じだったし…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 56: "Reon Kuwata"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.showSprite(0, "Reon Kuwata", 6, 8, 2);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Reon Kuwata", 99, 14);
	s.showLine("Woah! You saw pics of me playing baseball!?\nNo way! Those lame shots of me!?\n");    // "うへぇー！！　オレの野球してる写真見ちゃった！？\nマジで？　あのダサいの見られちゃったのぉ！？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 57: "Reon Kuwata"
	s.showSprite(0, "Reon Kuwata", 10, 1, 2);
	s.playVoice("Reon Kuwata", 99, 32);
	s.showLine("Shoot... This is bad...\nYou're kidding me... I'm really embarrassed now...\n");    // "ヤべーよ…激ヤバだよ…\nマジかよ…それって超絶的にハズいんだけど…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 58: "Reon Kuwata"
	s.showLine("It was a competition...\nso I didn't have a choice...\n");    // "ウッゼ…大会の決まりっつーから、\n仕方なく坊主にしたけど…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 59: "Reon Kuwata"
	s.showSprite(0, "Reon Kuwata", 14, 1, 2);
	s.playVoice("Reon Kuwata", 99, 10);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("but I'll never cut or undye my hair ever again!\nGot it!?\n");    // "もう、ぜってーに髪は切んねぇ。\n色も戻さねぇかんな！\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 60: "Reon Kuwata"
	s.showSprite(0, "Reon Kuwata", 1, 1, 2);
	s.playVoice("Reon Kuwata", 99, 6);
	s.showLine("I mean, can I be blunt here!?\n");    // "つーかさ、ぶっちゃけていいっスか！？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 61: "Reon Kuwata"
	s.showSprite(0, "Reon Kuwata", 12, 1, 2);
	s.playVoice("Reon Kuwata", 99, 37);
	s.showLine("I don't even like baseball.\nI've never practiced before...\n");    // "オレって、ぜんっぜん野球好きじゃないんだよね。\n今まで練習した事だって１度もねーし…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 62: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Being the ace of a championship team without\never practicing... He really is a prodigy.\n<CLT>");    // "<CLT 4>１度も練習しないで、優勝チームのエースなんて…\nこの人って本当に天才なのかも。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 63: "Reon Kuwata"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Reon Kuwata", 11, 1, 2);
	s.playVoice("Reon Kuwata", 99, 35);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("So I'm quitting baseball now that I got in!\nI have another dream for my future!\n");    // "つー訳で、この入学を機に野球はやめっから！！\nオレには将来の夢もあるんでッ！\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 64: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("Another... dream?\n");    // "将来の…夢？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 65: "Reon Kuwata"
	s.showSprite(0, "Reon Kuwata", 3, 1, 2);
	s.playVoice("Reon Kuwata", 99, 15);
	s.showLine("As a musician, duh!\nCan't you see my rock star aura?\n");    // "ミュージシャンに決まってんじゃん！\nこのスター性のあるオーラでわかるっしょ？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 66: "Reon Kuwata"
	s.showSprite(0, "Reon Kuwata", 2, 1, 2);
	s.playVoice("Reon Kuwata", 99, 5);
	s.showLine("I'm the vocalist,\nso I just gotta find members and a songwriter!\n");    // "オレはボーカルだから、\n後は演奏するヤツと曲作るヤツいりゃ最強っしょ！！\n"	// TODO: replace members?
	s.waitFrames(2);
	s.waitForInput();


	// Line 67: "Reon Kuwata"
	var lines_reon = ["Sprinting towards my dream makes me feel\nlike this is the coolest that I've ever been!\n",
						"<CLT 4>I can't let any baseball fans hear him say that...\n<CLT>"];
	s.showSprite(0, "Reon Kuwata", 11, 1, 2);
	s.playVoice("Reon Kuwata", 99, 13);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine(lines_reon[0]);    // "夢に向かって突っ走る今のオレって、\nマジでマキシマムにカッケーッス！！\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 68: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_reon[1]);    // "<CLT 4>高校野球の頂点に立った人の言葉とは思えない。\n世の中の野球少年達には、絶対に聞かせられないな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 69: "Reon Kuwata"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Reon Kuwata", 11, 4, 2);
	s.op(0x34, [0x01, 0xF9]);
	s.op(0x2A, [0x01, 0xF8]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Reon Kuwata", 11, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Reon Kuwata", 99, 13);
	s.showLine(lines_reon[0]);    // "夢に向かって突っ走る今のオレって、\nマジでマキシマムにカッケーッス！！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 70: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_reon[1]);    // "<CLT 4>高校野球の頂点に立った人の言葉とは思えない。\n世の中の野球少年達には、絶対に聞かせられないな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);
}
	
function self_intro_yamada(s)
{
	// Line 71: "Hifumi Yamada"
	s.showSprite(0, "Reon Kuwata", 11, 4, 2);
	s.op(0x2A, [0x01, 0xF9]);
	s.op(0x26, [0x0D, 0x03, 0x01]);
	s.op(0x35, [0x0D, 0x00, 0x00, 0x01, 0x06, 0x0D, 0x03, 0x00, 0x01, 0x06, 0x0D, 0x04, 0x00, 0x01, 0x06, 0x0D, 0x06, 0x00, 0x01, 0x06, 0x0D, 0x09, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xFA]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(6, "Kiyotaka Ishimaru", 98, 0, 0);
	s.showSprite(0, "Sayaka Maizono", 98, 0, 0);
	s.showSprite(4, "Touko Fukawa", 98, 0, 0);
	s.showSprite(2, "Reon Kuwata", 98, 0, 0);
	s.showSprite(3, "Hifumi Yamada", 98, 0, 0);
	s.op(0x34, [0x00, 0x03]);
	s.op(0x2A, [0x01, 0xFA]);
	s.op(0x27, [0x03]);
	s.op(0x35, [0x0D, 0x04, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xFB]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Hifumi Yamada", 2, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Hifumi Yamada", 99, 1);
	s.showLine("Yamada Hifumi...\nYou can also call me \"the alpha and the omega.\"\n");    // "山田一二三…“すべての始まりにして終わりなる者”\n二つ名の方で呼んで頂いても構いませんぞ。\n"	// TODO: replace Xenogears reference?
	s.waitFrames(2);
	s.waitForInput();


	// Line 72: "Hifumi Yamada"
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.showSprite(0, "Hifumi Yamada", 0, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x06, [0x02, 0xD2, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x06, [0x02, 0xD2, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.showSprite(0, "Hifumi Yamada", 2, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Hifumi Yamada");
	s.playVoice("Hifumi Yamada", 99, 2);
	s.showLine("By the way, Naegi Makoto-dono,\nare you perhaps strongly attracted to 2D?\n");    // "ところで、苗木誠殿は２次元関係には\nお強い方ですかな？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 73: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("2D...?\n");    // "２次元…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 74: "Hifumi Yamada"
	s.showSprite(0, "Hifumi Yamada", 4, 1, 2);
	s.playVoice("Hifumi Yamada", 99, 14);
	s.showLine("I made my name as the <CLT 3>\"super doujin author\"<CLT>\nby working with 2D, hehe.\n");    // "そっちの業界では<CLT 3>“超高校級の同人作家”<CLT>って事で、\n僕もそれなりに名が通ってるんですよねぇ、むふふ。\n"
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(2);
	s.waitForInput();


	// Line 75: "Hifumi Yamada"
	s.showSprite(0, "Hifumi Yamada", 2, 1, 2);
	s.playVoice("Hifumi Yamada", 99, 8);
	s.showLine("People are still talking about how I sold\n10000 copies of my doujin in a school festival.\n");    // "…伝説として、今も語り草となっているのが、\n文化祭で１万部の同人誌を完売させた事ですな。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 76: "Hifumi Yamada"
	s.showSprite(0, "Hifumi Yamada", 3, 1, 2);
	s.playVoice("Hifumi Yamada", 99, 13);
	s.showLine("To think that my plebian classmates dared\nto say that I \"soiled\" the school festival!\n");    // "僕の芸術を理解しないバカなクラスメイト達は、\n『文化祭が汚された』なんて戯言をぬかしてましたが！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 77: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I feel bad for those classmates...\nbut selling 10000 copies is out of the ordinary.\n<CLT>");    // "<CLT 4>そのクラスメイト達には気の毒だけど…\n文化祭で１万部って、確かに尋常じゃない数字だな。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 78: "Hifumi Yamada"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Hifumi Yamada", 0, 1, 2);
	s.playVoice("Hifumi Yamada", 99, 19);
	s.showLine("Let's forget about them.\nEven Gogh wasn't appreciated during his time.\n");    // "バカなクラスメイトの言葉は忘れましょう。\n生前のゴッホしかり、評価されない才能もあるのです。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 79: "Hifumi Yamada"
	s.showLine("I am a warrior who fights day and night\nagainst the unfounded prejudice against doujins.\n");    // "僕は、そうした同人に対する先入観を破壊する為に、\n日夜戦っている戦士なのです…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 80: "Hifumi Yamada"
	s.showLine("Naegi Makoto-dono,\nif you'd just take a look at my works...\n");    // "苗木誠殿も、僕の作品を見れば、\nすぐに理解出来るはずですよ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 81: "Hifumi Yamada"
	var line_hifumi = "<CLT 4>I don't think I want to know...\n<CLT>";
	s.showSprite(0, "Hifumi Yamada", 2, 1, 2);
	s.playVoice("Hifumi Yamada", 99, 8);
	s.showLine("you too will understand the themes\nthat run deep within them.\n");    // "僕の作品に根付く深いテーマにね…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 82: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("What kind... of themes...?\n");    // "どんな…テーマなの…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 83: "Hifumi Yamada"
	s.showSprite(0, "Hifumi Yamada", 16, 1, 2);
	s.playVoice("Hifumi Yamada", 99, 10);
	s.playSoundEffectA(31, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("The attractiveness of women...\n");    // "性の向こう側…というヤツです。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 84: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_hifumi);    // "<CLT 4>出来れば理解したくないな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 85: "Hifumi Yamada"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Hifumi Yamada", 2, 4, 2);
	s.op(0x34, [0x01, 0xFC]);
	s.op(0x2A, [0x01, 0xFB]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Hifumi Yamada", 0, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Hifumi Yamada", 99, 64);
	s.showLine("Naegi Makoto-dono, you'd see the attractiveness\nof women if you'd just take a look at my works.");    // "苗木誠殿も、僕の作品を見れば、\nすぐに理解出来るはずですよ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 86: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_hifumi);    // "<CLT 4>出来れば理解したくないな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);
}

function self_intro_maizono(s)
{
	// Line 87: "Sayaka Maizono"
	s.showSprite(0, "Hifumi Yamada", 2, 4, 2);
	s.op(0x2A, [0x01, 0xFC]);
	s.op(0x26, [0x0D, 0x04, 0x01]);
	s.op(0x35, [0x0D, 0x00, 0x00, 0x01, 0x06, 0x0D, 0x03, 0x00, 0x01, 0x06, 0x0D, 0x04, 0x00, 0x01, 0x06, 0x0D, 0x06, 0x00, 0x01, 0x06, 0x0D, 0x09, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xFD]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(6, "Kiyotaka Ishimaru", 98, 0, 0);
	s.showSprite(0, "Sayaka Maizono", 98, 0, 0);
	s.showSprite(4, "Touko Fukawa", 98, 0, 0);
	s.showSprite(2, "Reon Kuwata", 98, 0, 0);
	s.showSprite(3, "Hifumi Yamada", 98, 0, 0);
	s.op(0x34, [0x00, 0x03]);
	s.op(0x2A, [0x01, 0xFD]);
	s.op(0x27, [0x00]);
	s.op(0x35, [0x0D, 0x06, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xFE]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Sayaka Maizono", 5, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Sayaka Maizono", 99, 1);
	s.showLine("I'm Sayaka Maizono.\nIt's my pleasure to meet you.\n");    // "舞園さやかです。\nこれから、よろしくお願いします。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 88: "Makoto Naegi"
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.showSprite(0, "Sayaka Maizono", 0, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x06, [0x02, 0xD4, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x06, [0x02, 0xD4, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.showSprite(0, "Sayaka Maizono", 5, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Before I knew it, her greeting had charmed me...\nShe also has the nicest scent I've ever smelled...\n<CLT>");    // "<CLT 4>思わず見とれてしまう鮮やかなお辞儀…\n今まで嗅いだ事もない良い匂い…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 89: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Sayaka Maizono...\n<CLT>");    // "<CLT 4>舞園さやか…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 90: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>To be honest, I was surprised\nwhen I saw her name on the list of freshmen.\n<CLT>");    // "<CLT 4>“希望ヶ峰学園新入生スレ”でその名前を見かけた時、\n正直ボクはかなり驚いた。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 91: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.showSprite(0, "Sayaka Maizono", 5, 3, 2);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xDF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>She's the lead singer of an idol group\nthat's known all over the country...\n<CLT>");    // "<CLT 4>彼女は国民的アイドルグループで\nセンターマイクとして活躍するアイドル…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 92: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.showLine("<CLT 4>She's the <CLT><CLT 3>\"super idol\"<CLT><CLT 4>\nwho's always on TV and magazines.\n<CLT>");    // "<CLT 4><CLT><CLT 3>“超高校級のアイドル”<CLT><CLT 4>として、\n今やテレビや雑誌でも引っ張りダコの人気者。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 93: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>But there's another reason behind my shock.\n<CLT>");    // "<CLT 4>だけど、彼女の入学を知って驚いた理由は、\nそれだけじゃない。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 94: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I doubt... that she'd remember, though...\n<CLT>");    // "<CLT 4>もっとも…向こうは、\nそんな事は覚えていないだろうけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 95: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xDF, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.showSprite(0, "Sayaka Maizono", 5, 1, 2);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Anyway... her skin is like a doll's...\nthe more I look at her, the prettier she looks...\n<CLT>");    // "<CLT 4>それにしても…見れば見るほどキレイだな…\n肌なんて、まるでお人形みたいだし…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 96: "Sayaka Maizono"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Sayaka Maizono", 5, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 12);
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Sorry, but I'm not a doll.\nI'm alive.\n");    // "人形じゃありませんよ。生きてますから。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 97: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("Huh? You heard me!?\n");    // "え？　聞こえた！？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 98: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 3, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 7);
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("I'm a psychic.\n");    // "エスパーなんです。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 99: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("...Huh?\n");    // "…は？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 100: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 5, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 12);
	s.showLine("Just kidding.\nIt's just my intuition.\n");    // "冗談です。ただの勘ですよ。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 101: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>She's too sharp...\n<CLT>");    // "<CLT 4>鋭すぎるだろ…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 102: "Sayaka Maizono"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Sayaka Maizono", 16, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 2);
	s.showLine("Huh...? Are you...\n");    // "あれ…？　もしかして…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 103: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("What is it...?\n");    // "今度は…何…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 104: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 8, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 18);
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("...That's right.\nThere's no doubt about it...\n");    // "…そうだ。\nやっぱり…そうですよね…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 105: "Sayaka Maizono"
	s.showLine("Umm... Naegi, could you be...\n");    // "あの…苗木君って…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 106: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 7, 1, 1);
	s.op(0x35, [0x0D, 0x00, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xFF]);
	s.setSpeaker("???");
	s.op(0x34, [0x02, 0x00]);
	s.op(0x2A, [0x01, 0xFF]);
	s.setSpeaker("Kiyotaka Ishimaru");
	s.op(0x2A, [0x02, 0x00]);
	s.playVoice("Kiyotaka Ishimaru", 99, 44);
	s.showLine("Hey, you two! Are you gonna\nspend all day introducing yourselves!?\n");    // "おい、君達ッ！！　いつまで長話をしているのだ！\n自己紹介だけで貴重な１日を終わらせるつもりか！？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 107: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 9, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 6);
	s.showLine("S-Sorry... I...\n");    // "ご、ごめんなさい…つい…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 108: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 7, 1, 1);
	s.op(0x35, [0x0D, 0x00, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x01]);
	s.setSpeaker("???");
	s.op(0x34, [0x02, 0x02]);
	s.op(0x2A, [0x02, 0x01]);
	s.setSpeaker("Kiyotaka Ishimaru");
	s.op(0x2A, [0x02, 0x02]);
	s.playVoice("Kiyotaka Ishimaru", 99, 11);
	s.showLine("Remember that self-introductions are about\nintroducing yourself, not random chatter!\n");    // "自己紹介とは自己を紹介する場であって、\n決して雑談の場ではないと心得よ！！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 109: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 9, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 20);
	s.showLine("Y-Yes...\n");    // "は、はい…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 110: "Sayaka Maizono"
	var lines_maizono = ["...Sorry, Naegi.\n",
						"We'll talk... later...\n",
						"<CLT 4>Looks like Maizono...\nwanted to tell me something...\n<CLT>",
						"<CLT 4>But like she said,\nwe can always talk later...\n<CLT>"];
	
	s.showSprite(0, "Sayaka Maizono", 1, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 5);
	s.showLine(lines_maizono[0]);    // "…ごめんなさい、苗木君。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 111: "Sayaka Maizono"
	s.showLine(lines_maizono[1]);    // "また…後でね…\n"
	s.waitFrames(1);
	s.showSprite(0, "Sayaka Maizono", 1, 4, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.waitForInput();


	// Line 112: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_maizono[2]);    // "<CLT 4>舞園さん…何かを言いかけてたみたいだけど…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 113: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_maizono[3]);    // "<CLT 4>でも、別にこれで終わりって訳じゃないんだ。\n彼女も言ってたしな。“後でね”って…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 114: "Sayaka Maizono"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(1, "Kiyotaka Ishimaru", 7, 3, 1);
	s.op(0x34, [0x02, 0x03]);
	s.op(0x2A, [0x01, 0xFE]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Sayaka Maizono", 1, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Sayaka Maizono", 99, 5);
	s.showLine(lines_maizono[0] + lines_maizono[1]);    // "…ごめんなさい、苗木君。\nまた…後でね…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 115: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("Y-Yeah...\n");    // "う、うん…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 116: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_maizono[2]);    // "<CLT 4>舞園さん…何かを言いかけてたみたいだけど…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 117: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_maizono[3]);    // "<CLT 4>でも、別にこれで終わりって訳じゃないんだ。\n彼女も言ってたしな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);


	/*
	// Line 118: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>“後でね”って…\n<CLT>");    // "<CLT 4>“後でね”って…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	// */
}

function self_intro_fukawa(s)
{
	// Line 119: "Touko Fukawa"
	s.showSprite(0, "Sayaka Maizono", 1, 4, 2);
	s.op(0x2A, [0x02, 0x03]);
	s.op(0x26, [0x0D, 0x06, 0x01]);
	s.op(0x35, [0x0D, 0x00, 0x00, 0x01, 0x06, 0x0D, 0x03, 0x00, 0x01, 0x06, 0x0D, 0x04, 0x00, 0x01, 0x06, 0x0D, 0x06, 0x00, 0x01, 0x06, 0x0D, 0x09, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x04]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(6, "Kiyotaka Ishimaru", 98, 0, 0);
	s.showSprite(0, "Sayaka Maizono", 98, 0, 0);
	s.showSprite(4, "Touko Fukawa", 98, 0, 0);
	s.showSprite(2, "Reon Kuwata", 98, 0, 0);
	s.showSprite(3, "Hifumi Yamada", 98, 0, 0);
	s.op(0x34, [0x00, 0x03]);
	s.op(0x2A, [0x02, 0x04]);
	s.op(0x27, [0x04]);
	s.op(0x35, [0x0D, 0x09, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x05]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Touko Fukawa", 0, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Touko Fukawa", 99, 1);
	s.showLine("Either way... you'll just...\nforget my name... right away...\n");    // "どうせ…あたしの名前なんて…\n後で…すぐに忘れるんでしょうけど…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 120: "Touko Fukawa"
	s.showSprite(0, "Touko Fukawa", 1, 1, 2);
	s.playVoice("Touko Fukawa", 99, 2);
	s.showLine("I'm... Touko... Fukawa...\n");    // "腐川…冬子よ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 121: "Makoto Naegi"
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.showSprite(0, "Touko Fukawa", 0, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x06, [0x02, 0xD7, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x06, [0x02, 0xD7, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.showSprite(0, "Touko Fukawa", 1, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Touko Fukawa... She debuted in the literary\nworld with a bestseller novel when she was 10...\n<CLT>");    // "<CLT 4>腐川冬子…１０歳の時に書いた小説が話題となり、\nそれをきっかけに文壇デビュー…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 122: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Two years ago, her romance novel\n\"Before the Scent of the Sea Fades Away\"...\n<CLT>");    // "<CLT 4>２年前に執筆した『磯の香りの消えぬ間に』は、\nそんな彼女の代表作ともいえる恋愛小説で…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 123: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>was such a social phenomenon that fishermen\nbecame popular among young girls for a while.\n<CLT>");    // "<CLT 4>影響を受けた若い女性の間で漁師が大人気になるなど、\n社会現象を生み出す大ヒットとなった。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 124: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>She has won many literary prizes\nand produced a streak of bestsellers...\n<CLT>");    // "<CLT 4>若くして数々の文学賞を受賞し\n高校生でありつつベストセラーを連発する彼女は…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 125: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>She's a talented female author who deserves\nto be called the \"super book girl\"...\n<CLT>");    // "<CLT 4>まさに、<CLT><CLT 3>“超高校級の文学少女”<CLT><CLT 4>と呼ぶに相応しい、\n天才女子高生作家…\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 126: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>...Or so I thought.\n<CLT>");    // "<CLT 4>…だったよな。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 127: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I expected her to be a mature lady\nwith lots of experience in romance...\n<CLT>");    // "<CLT 4>でも、代表作が恋愛小説っていうから、\n恋多きお姉様タイプの女性を想像してたんだけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 128: "Touko Fukawa"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Touko Fukawa", 0, 1, 2);
	s.playVoice("Touko Fukawa", 99, 3);
	s.showLine("..................\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 129: "Touko Fukawa"
	s.showSprite(0, "Touko Fukawa", 9, 1, 2);
	s.playVoice("Touko Fukawa", 99, 4);
	s.showLine("What...? Why are you staring at me...\nDon't... stare...\n");    // "何よ…？　人の顔をじっと見て…\nそんなに…見ないでよ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 130: "Touko Fukawa"
	s.showSprite(0, "Touko Fukawa", 11, 1, 2);
	s.playVoice("Touko Fukawa", 99, 15);
	s.playSoundEffectA(28, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("Don't look at me like I'm dirty!\n");    // "汚らしい物を見るような目で見ないでよッ！！\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 131: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("Th-That's not what I'm thinking at all...!\n");    // "き、汚らしいなんて、そんな…！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 132: "Touko Fukawa"
	s.showSprite(0, "Touko Fukawa", 11, 1, 2);
	s.playVoice("Touko Fukawa", 99, 16);
	s.showLine("I-I can tell...\nwhat you... want to say...\n");    // "あ、あたしにはわかるんだからね…\nあなたの…言いたい事くらい…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 133: "Touko Fukawa"
	s.showLine("You're thinking... \"I've never... seen a girl...\nas ugly as her\"... right?\n");    // "どうせ…ここまでのブスは…\n初めて見たとか…そう思って笑ってるんでしょ…？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 134: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("N-No... not at all...\n");    // "い、いや…そんな事…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 135: "Touko Fukawa"
	s.showSprite(0, "Touko Fukawa", 12, 1, 2);
	s.playVoice("Touko Fukawa", 99, 17);
	s.playSoundEffectA(28, 100);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.op(0x25, [0x0D, 0x01]);
	s.showLine("D-Don't try to fool me!\n");    // "ご、ごまかしたって無駄よ！！\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 136: "Touko Fukawa"
	s.showLine("Th-That's the truth.\nOtherwise... you wouldn't even look at my face!\n");    // "そ、それが真実なのよ。でなくちゃ…\nあたしの顔なんて見るに堪えないんだものッ！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 137: "Touko Fukawa"
	var lines_fukawa = ["It's... fine, though...\nI'm used to it...\n",
						"<CLT 4>Wow, what a persecution complex...\nMaybe her writer's imagination is backfiring...\n<CLT>"];
	s.showSprite(0, "Touko Fukawa", 3, 1, 2);
	s.playVoice("Touko Fukawa", 99, 7);
	s.showLine(lines_fukawa[0]);    // "別に…いいけどね…\n慣れっこだから…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 138: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_fukawa[1]);    // "<CLT 4>すごい被害妄想だ…作家としての豊かな想像力が\n間違った方向に働いた例だな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 139: "Touko Fukawa"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Touko Fukawa", 1, 4, 2);
	s.op(0x34, [0x02, 0x06]);
	s.op(0x2A, [0x02, 0x05]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Touko Fukawa", 1, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Touko Fukawa", 99, 16);
	s.showLine(lines_fukawa[0]);    // "別に…いいけどね…\n慣れっこだから…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 140: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_fukawa[1]);    // "<CLT 4>すごい被害妄想だ…作家としての豊かな想像力が\n間違った方向に働いた例だな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);
	
	// Clean up for batch one
	s.showSprite(0, "Touko Fukawa", 1, 4, 2);
	s.op(0x2A, [0x02, 0x06]);
	s.op(0x26, [0x0D, 0x09, 0x01]);
	s.op(0x35, [0x0D, 0x00, 0x00, 0x01, 0x06, 0x0D, 0x03, 0x00, 0x01, 0x06, 0x0D, 0x04, 0x00, 0x01, 0x06, 0x0D, 0x06, 0x00, 0x01, 0x06, 0x0D, 0x09, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x07]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(6, "Kiyotaka Ishimaru", 98, 0, 0);
	s.showSprite(0, "Sayaka Maizono", 98, 0, 0);
	s.showSprite(4, "Touko Fukawa", 98, 0, 0);
	s.showSprite(2, "Reon Kuwata", 98, 0, 0);
	s.showSprite(3, "Hifumi Yamada", 98, 0, 0);
	s.op(0x34, [0x00, 0x03]);
	s.op(0x2A, [0x02, 0x07]);
}

function self_intro_oowada(s)
{
	// Line 153: "Makoto Naegi"
	s.op(0x29, [0xFF]);
	s.op(0x2A, [0x01, 0xF4]);
	s.op(0x2A, [0x00, 0x03]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(8, "Aoi Asahina", 0, 0, 21);
	s.showSprite(5, "Mondo Oowada", 0, 0, 11);
	s.showSprite(1, "Kyouko Kirigiri", 0, 0, 1);
	s.showSprite(2, "Junko Enoshima (fake)", 0, 0, 21);
	s.showSprite(4, "Chihiro Fujisaki", 0, 0, 1);
	s.op(0x25, [0x1B, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Let's try talking to them next.\n<CLT>");    // "<CLT 4>次に、あの５人と話してみるか。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);


	// Line 154: "Mondo Oowada"
	s.op(0x26, [0x00, 0x0C, 0x00]);
	s.op(0x25, [0x10, 0x01]);
	s.op(0x34, [0x02, 0x08]);
	s.op(0x27, [0x05]);
	s.op(0x35, [0x0D, 0x02, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x09]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Mondo Oowada", 2, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Mondo Oowada", 99, 1);
	s.showLine("I'm Mondo Oowada...\nNice to meet'cha...\n");    // "オレは大和田紋土だ…ヨロシクな…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 155: "Makoto Naegi"
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.showSprite(0, "Mondo Oowada", 0, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x06, [0x02, 0xD0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x06, [0x02, 0xD0, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.showSprite(0, "Mondo Oowada", 2, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Mondo Oowada...\n<CLT>");    // "<CLT 4>大和田紋土って言えば……\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 156: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.showSprite(0, "Mondo Oowada", 2, 3, 2);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xE2, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	// TODO: not sure about "second-ever"
	s.showLine("<CLT 4>He's the second-ever leader of\nJapan's biggest and baddest biker gang...\n<CLT>");    // "<CLT 4>日本最大最凶と称される暴走族に、\n２代目総長として君臨する人物…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 157: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Every delinquent in Japan respects and fears this\n<CLT><CLT 3>\"super delinquent\"<CLT><CLT 4>...\n<CLT>");    // "<CLT 4>全国のヤンキー連中から尊敬と畏怖を集める、\n<CLT><CLT 3>“超高校級の暴走族”<CLT><CLT 4>だったよな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 158: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xE2, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.showSprite(0, "Mondo Oowada", 2, 1, 2);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("..................\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 159: "Makoto Naegi"
	s.showLine("Umm...\n");    // "えーっと…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 160: "Makoto Naegi"
	s.showLine("It's my pleasure... to meet you...\nI hope we get along...\n");    // "こちらこそ…今後ともよろしく…\nお願いします…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 161: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 12, 1, 2);
	s.playVoice("Mondo Oowada", 99, 2);
	s.showLine("Yea...\n");    // "おぅ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 162: "Makoto Naegi"
	var line_oowada = "<CLT 4>I gotta watch my mouth when talking with him.\nOtherwise, I'll be sleeping with the fishes.\n<CLT>";
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_oowada);    // "<CLT 4>この人との関係には、特に気を付けておくとしよう。\n下手な事を言うと夜の海に沈められかねない…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 163: "Mondo Oowada"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Mondo Oowada", 12, 4, 2);
	s.op(0x34, [0x02, 0x0A]);
	s.op(0x2A, [0x02, 0x09]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Mondo Oowada", 12, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Mondo Oowada", 99, 2);
	s.showLine("Nice to meet'cha...\n");    // "ヨロシクな…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 164: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_oowada);    // "<CLT 4>この人との関係には、特に気を付けておくとしよう。\n下手な事を言うと夜の海に沈められかねない…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);
}

function self_intro_kirigiri(s)
{
	// Line 165: "Kyouko Kirigiri"
	s.showSprite(0, "Mondo Oowada", 15, 4, 2);
	s.op(0x2A, [0x02, 0x0A]);
	s.op(0x26, [0x0D, 0x02, 0x01]);
	s.op(0x35, [0x0D, 0x02, 0x00, 0x01, 0x06, 0x0D, 0x07, 0x00, 0x01, 0x06, 0x0D, 0x08, 0x00, 0x01, 0x06, 0x0D, 0x0C, 0x00, 0x01, 0x06, 0x0D, 0x0D, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x0B]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(8, "Aoi Asahina", 98, 0, 0);
	s.showSprite(5, "Mondo Oowada", 98, 0, 0);
	s.showSprite(1, "Kyouko Kirigiri", 98, 0, 0);
	s.showSprite(2, "Junko Enoshima (fake)", 98, 0, 0);
	s.showSprite(4, "Chihiro Fujisaki", 98, 0, 0);
	s.op(0x34, [0x00, 0x04]);
	s.op(0x2A, [0x02, 0x0B]);
	s.op(0x27, [0x01]);
	s.op(0x35, [0x0D, 0x07, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x0C]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Kyouko Kirigiri", 1, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.showLine("..................\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 166: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("..................\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 167: "Kyouko Kirigiri"
	s.showSprite(0, "Kyouko Kirigiri", 1, 1, 2);
	s.showLine("..................\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 168: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("Umm... Can you tell me your name?\n");    // "あの…名前を教えてもらってもいいかな？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 169: "Kyouko Kirigiri"
	s.showSprite(0, "Kyouko Kirigiri", 1, 1, 2);
	s.showLine("..................\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 170: "Kyouko Kirigiri"
	s.playVoice("Kyouko Kirigiri", 99, 1);
	s.showLine("I'm... Kyouko Kirigiri...\n");    // "名前は…霧切響子…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 171: "Kyouko Kirigiri"
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.showSprite(0, "Kyouko Kirigiri", 0, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x06, [0x02, 0xD5, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x06, [0x02, 0xD5, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.showSprite(0, "Kyouko Kirigiri", 1, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Kyouko Kirigiri");
	s.showLine("..................\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 172: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Wh-What a quiet girl...\n<CLT>");    // "<CLT 4>ず、ずいぶん無口な女の子だな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 173: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Besides, her name...\n<CLT>");    // "<CLT 4>それに、この子の名前…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 174: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>\"Kyouko Kirigiri\"...\nwasn't on the list online.\n<CLT>");    // "<CLT 4>霧切響子…なんて名前…\n“希望ヶ峰学園新入生スレ”にはなかったぞ。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 175: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.showSprite(0, "Kyouko Kirigiri", 1, 3, 2);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xDE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Oh yeah... Other than me...\n<CLT>");    // "<CLT 4>そう言えば、希望ヶ峰学園の新入生の中には、\nボク以外にも…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 176: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>there were some unknown freshmen...\n<CLT>");    // "<CLT 4>素性が明らかにならない新入生がいるんだっけ…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 177: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Is she one...?\n<CLT>");    // "<CLT 4>それが、この彼女なのか…？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 178: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xDE, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x00]);
	s.showSprite(0, "Kyouko Kirigiri", 1, 1, 2);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("Uh-Um... How did you get into this school?\n");    // "あ、あのさ…\nキミはどうして、この学園に来たの？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 179: "Kyouko Kirigiri"
	s.showSprite(0, "Kyouko Kirigiri", 2, 1, 2);
	s.playVoice("Kyouko Kirigiri", 99, 62);
	s.showLine("\"How\"...?\n");    // "どうして…って？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 180: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("Well... If you got in, that means that you're the\nbest of the best at something, right?\n");    // "いや…この学園に選ばれたって事はさ、\n何か“超高校級”の才能があるって事だよね？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 181: "Makoto Naegi"
	s.showLine("What are you good at?\n");    // "それって、どんな才能だったりするの？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 182: "Kyouko Kirigiri"
	s.showSprite(0, "Kyouko Kirigiri", 1, 1, 2);
	s.showLine("..................\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 183: "Kyouko Kirigiri"
	s.playVoice("Kyouko Kirigiri", 99, 10);
	s.showLine("Why... do I have to tell you?\n");    // "なんで…教えなくちゃ駄目なの？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 184: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Huh...?\n");    // "えっ…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 185: "Makoto Naegi"
	s.showLine("Well...\nyou don't have to, but...\n");    // "いや…駄目って事はないんだけど…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 186: "Kyouko Kirigiri"
	s.showSprite(0, "Kyouko Kirigiri", 16, 1, 2);
	s.playVoice("Kyouko Kirigiri", 99, 54);
	s.showLine("If you don't need to know...\nthen I don't have to tell you...\n");    // "言う必要がないなら…言わなくていいでしょ…\n"	// TODO: rephrase?
	s.waitFrames(1);
	s.waitForInput();


	// Line 187: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I thought that she too was chosen by luck\nbecause I couldn't find her online, but...\n<CLT>");    // "<CLT 4>彼女…ネットで検索されないくらいだから、\nボクみたいに“運”とかで選ばれたのかと思ったけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 188: "Kyouko Kirigiri"
	var lines_kirigiri = ["..................\n",
						"<CLT 4>Her face is like a mask...\nShe won't talk to me...\n<CLT>"];
	
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Kyouko Kirigiri", 1, 1, 2);
	s.showLine(lines_kirigiri[0]);    // "……………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 189: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_kirigiri[1]);    // "<CLT 4>まるで鉄仮面だな…\n何も話してくれないんじゃ知りようもない…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 190: "Kyouko Kirigiri"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Kyouko Kirigiri", 16, 4, 2);
	s.op(0x34, [0x02, 0x0D]);
	s.op(0x2A, [0x02, 0x0C]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Kyouko Kirigiri", 1, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.showLine(lines_kirigiri[0]);    // "……………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 191: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_kirigiri[1]);    // "<CLT 4>まるで鉄仮面だな…\n何も話してくれないんじゃ知りようもない…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);
}

function self_intro_asahina(s)
{
	// Line 192: "Aoi Asahina"
	s.showSprite(0, "Kyouko Kirigiri", 16, 4, 2);
	s.op(0x2A, [0x02, 0x0D]);
	s.op(0x26, [0x0D, 0x07, 0x01]);
	s.op(0x35, [0x0D, 0x02, 0x00, 0x01, 0x06, 0x0D, 0x07, 0x00, 0x01, 0x06, 0x0D, 0x08, 0x00, 0x01, 0x06, 0x0D, 0x0C, 0x00, 0x01, 0x06, 0x0D, 0x0D, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x0E]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(8, "Aoi Asahina", 98, 0, 0);
	s.showSprite(5, "Mondo Oowada", 98, 0, 0);
	s.showSprite(1, "Kyouko Kirigiri", 98, 0, 0);
	s.showSprite(2, "Junko Enoshima (fake)", 98, 0, 0);
	s.showSprite(4, "Chihiro Fujisaki", 98, 0, 0);
	s.op(0x34, [0x00, 0x04]);
	s.op(0x2A, [0x02, 0x0E]);
	s.op(0x27, [0x08]);
	s.op(0x35, [0x0D, 0x08, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x0F]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Aoi Asahina", 4, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Aoi Asahina", 99, 1);
	s.showLine("What's up? I'm Aoi Asahina!\nNice to meet you!\n");    // "こんちわっすー！　朝日奈葵っすー！\nヨロシクねー！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 193: "Makoto Naegi"
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.showSprite(0, "Aoi Asahina", 0, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x06, [0x02, 0xD6, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x06, [0x02, 0xD6, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.showSprite(0, "Aoi Asahina", 4, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Aoi Asahina... She's broke the records of every\ncompetition she's been to since grade school...\n<CLT>");    // "<CLT 4>朝日奈葵…小学校、中学校、高校と、\n過去に参加した大会で次々と新記録を塗り替え…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 194: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>She's a <CLT><CLT 3>\"super swimmer\"<CLT><CLT 4>\nwho has been chosen for the Olympics team. \n<CLT>");    // "<CLT 4>今やオリンピック候補生にも選ばれた\n<CLT><CLT 3>“超高校級のスイマー”<CLT><CLT 4>だったな。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 195: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Her talent and looks has\nthe Internet talking about her...\n<CLT>");    // "<CLT 4>実力、容姿、プロポーションと揃った逸材って、\nネットでも騒がれてたっけ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 196: "Aoi Asahina"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Aoi Asahina", 19, 1, 2);
	s.playVoice("Aoi Asahina", 99, 36);
	s.showLine("Umm... What was your name again?\nSorry, it's on the tip of my tongue.\n");    // "えーっと…そっちの名前ってなんだっけ？\nごめん、失念しちゃったよ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 197: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("Makoto Naegi.\n");    // "苗木誠だよ。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 198: "Aoi Asahina"
	s.showSprite(0, "Aoi Asahina", 4, 1, 2);
	s.playVoice("Aoi Asahina", 99, 8);
	s.showLine("Oh yea, something like that!\n");    // "そうそう、それっぽい名前！！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 199: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("\"Something like that\"...\nThat is my name...\n");    // "それっぽいって言うか、\nそれが正解なんだけど…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 200: "Aoi Asahina"
	s.showSprite(0, "Aoi Asahina", 4, 1, 2);
	s.playVoice("Aoi Asahina", 99, 9);
	s.showLine("Yup, yup. Alright!\nI'll memorize it right away!\n");    // "うんうん。だいじょーぶ、だいじょーぶ！\nすぐに覚えるからねー！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 201: "Aoi Asahina"
	s.showSprite(0, "Aoi Asahina", 0, 1, 2);
	s.playVoice("Aoi Asahina", 99, 2);
	s.showLine("Makoto... Naegi...\nMakoto... Naegi...\n");    // "なえぎ…まこと…\nなえぎ…まこと…っと。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 202: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>While she was mumbling my name, she started\nto write something on her palm with her finger...\n<CLT>");    // "<CLT 4>彼女はボクの名前を呟きながら、\n自分の手の平に、人差し指で何かを書き始めた…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 203: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("What are you doing...?\n");    // "何してるの…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 204: "Aoi Asahina"
	s.showSprite(0, "Aoi Asahina", 21, 1, 2);
	s.playVoice("Aoi Asahina", 99, 16);
	s.showLine("Oh, this? I heard that all I have to do remember\na name is to write it on my palm 3 times!\n");    // "あ、これ？　知らないんスか？\n人の名前覚える時は、３回手の平に書くといいって！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 205: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("I've never heard about this...\n");    // "聞いた事ないけど…\n"
	s.waitFrames(1);
	s.waitForInput();

	// TODO: Discussion about kanji; doesn't translate
	/*
	// Line 206: "Aoi Asahina"
	s.showSprite(0, "Aoi Asahina", 19, 1, 2);
	s.playVoice("Aoi Asahina", 99, 36);
	s.showLine("あのさぁ…“なえぎ”って、どういう字？\n");    // "あのさぁ…“なえぎ”って、どういう字？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 207: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("そのままだよ、“苗”って字…\n");    // "そのままだよ、“苗”って字…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 208: "Aoi Asahina"
	s.showSprite(0, "Aoi Asahina", 19, 1, 2);
	s.playVoice("Aoi Asahina", 99, 36);
	s.showLine("えっと…\n");    // "えっと…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 209: "Aoi Asahina"
	s.showLine("………………\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 210: "Aoi Asahina"
	s.showSprite(0, "Aoi Asahina", 5, 1, 2);
	s.playVoice("Aoi Asahina", 99, 10);
	s.showLine("アハハ、わかんないや。\n後で辞書調べてから書くね…\n");    // "アハハ、わかんないや。\n後で辞書調べてから書くね…\n"
	s.waitFrames(2);
	s.waitForInput();
	// */


	// Line 211: "Aoi Asahina"
	var lines_asahina = ["Well, anyway! I hope we get along!\n",
						"Y-Yea...\nMe too...\n",
						"<CLT 4>Anyway... at least I got to know that\nshe's a very energetic person...\n<CLT>"];
	
	s.showSprite(0, "Aoi Asahina", 4, 1, 2);
	s.playVoice("Aoi Asahina", 99, 41);
	s.showLine(lines_asahina[0]);    // "とりあえずっ！　これからもヨロシクって事でっ！！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 212: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine(lines_asahina[1]);    // "う、うん…そうだね…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 213: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_asahina[2]);    // "<CLT 4>とにかく…\n底抜けに元気な性格って事だけはわかったな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 214: "Aoi Asahina"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Aoi Asahina", 4, 4, 2);
	s.op(0x34, [0x02, 0x10]);
	s.op(0x2A, [0x02, 0x0F]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.showSprite(0, "Aoi Asahina", 4, 1, 2);
	s.playVoice("Aoi Asahina", 99, 41);
	s.showLine(lines_asahina[0]);    // "とりあえずっ！　これからもヨロシクって事でっ！！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 215: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine(lines_asahina[1]);    // "う、うん…そうだね…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 216: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_asahina[2]);    // "<CLT 4>とにかく…\n底抜けに元気な性格って事だけはわかったな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);
}

function self_intro_junko(s)
{
	// Line 217: "Junko Enoshima (fake)"
	s.showSprite(0, "Aoi Asahina", 4, 4, 2);
	s.op(0x2A, [0x02, 0x10]);
	s.op(0x26, [0x0D, 0x08, 0x01]);
	s.op(0x35, [0x0D, 0x02, 0x00, 0x01, 0x06, 0x0D, 0x07, 0x00, 0x01, 0x06, 0x0D, 0x08, 0x00, 0x01, 0x06, 0x0D, 0x0C, 0x00, 0x01, 0x06, 0x0D, 0x0D, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x11]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(8, "Aoi Asahina", 98, 0, 0);
	s.showSprite(5, "Mondo Oowada", 98, 0, 0);
	s.showSprite(1, "Kyouko Kirigiri", 98, 0, 0);
	s.showSprite(2, "Junko Enoshima (fake)", 98, 0, 0);
	s.showSprite(4, "Chihiro Fujisaki", 98, 0, 0);
	s.op(0x34, [0x00, 0x04]);
	s.op(0x2A, [0x02, 0x11]);
	s.op(0x27, [0x02]);
	s.op(0x35, [0x0D, 0x0C, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x12]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Junko Enoshima (fake)", 5, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Junko Enoshima (fake)", 99, 1);
	s.showLine("Yo~ I'm Junko Enoshima~\nNice to meet you~\n");    // "どーも、江ノ島盾子でーす。\nよろしくねー。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 218: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x03, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.showSprite(0, "Junko Enoshima (fake)", 0, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x06, [0x02, 0xDA, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x06, [0x02, 0xDA, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.showSprite(0, "Junko Enoshima (fake)", 5, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>If I'm not mistaken, Junko Enoshima is...\n<CLT>");    // "<CLT 4>江ノ島盾子って、確か…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 219: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.showSprite(0, "Junko Enoshima (fake)", 5, 3, 2);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xE1, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>the <CLT><CLT 3>\"super fashion girl\"<CLT><CLT 4> who's a charismatic figure\nfor all high school girls...\n<CLT>");    // "<CLT 4>全国の女子高校生達の間でカリスマ的存在の…\n<CLT><CLT 3>“超高校級のギャル”<CLT><CLT 4>だったよな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 220: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>but...\ncompared to the magazines...\n<CLT>");    // "<CLT 4>でも、なんか…雑誌で見たのと…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 221: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xE1, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.showSprite(0, "Junko Enoshima (fake)", 0, 1, 2);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("You look kinda different...\n");    // "見た目の印象が違う気が…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 222: "Junko Enoshima (fake)"
	s.showSprite(0, "Junko Enoshima (fake)", 9, 1, 2);
	s.playVoice("Junko Enoshima (fake)", 99, 22);
	s.showLine("Huh...?\n");    // "はい…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 223: "Junko Enoshima (fake)"
	s.showSprite(0, "Junko Enoshima (fake)", 6, 1, 2);
	s.playVoice("Junko Enoshima (fake)", 99, 2);
	s.showLine("Ohh, the magazine cover shots?\n");    // "あぁ、もしかして雑誌のカバーショットの事、\n言ってんの？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 224: "Junko Enoshima (fake)"
	s.showSprite(0, "Junko Enoshima (fake)", 5, 1, 2);
	s.playVoice("Junko Enoshima (fake)", 99, 16);
	s.showLine("Ahaha, duh!\nThey touched those shots up!\n");    // "アハハ、当たり前じゃーん！\nあれは雑誌用に盛ってるんだって！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 225: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("...\"Touched up\"?\n");    // "…盛ってる？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 226: "Junko Enoshima (fake)"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x10]);
	s.showSprite(0, "Junko Enoshima (fake)", 5, 3, 2);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xE1, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x0A]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Junko Enoshima (fake)");
	s.showLine("Y'know... They edited them!\nHaven't you heard about Photoshop?\n");    // "だからさ…加工してんだって！\n画像編集ソフト知ってんでしょ？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 227: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("Ph-Photoshop...\nI see...\n");    // "か、加工…そうなんだ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 228: "Junko Enoshima (fake)"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xE1, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.showSprite(0, "Junko Enoshima (fake)", 2, 1, 2);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Junko Enoshima (fake)", 99, 8);
	s.showLine("Hey, don't be so shocked.\nSorry to pop your bubble...\n");    // "ちょっとぉ、そんな事くらいで驚かないでよ。\n軽くへこむんですけど…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 229: "Junko Enoshima (fake)"
	s.showSprite(0, "Junko Enoshima (fake)", 6, 1, 2);
	s.playVoice("Junko Enoshima (fake)", 99, 29);
	s.showLine("but now it's normal for cover shots\nto be touched up!\n");    // "いまどき、カバーショットで盛るなんて\n全然当たり前なんだって！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 230: "Junko Enoshima (fake)"
	s.showLine("I mean, you should be more worried\nabout that singer girl!\n");    // "てか、そんなんで驚いてたら、\n某歌姫なんてもっとヤバイよ？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 231: "Junko Enoshima (fake)"
	s.showSprite(0, "Junko Enoshima (fake)", 5, 1, 2);
	s.playVoice("Junko Enoshima (fake)", 99, 16);
	s.showLine("They make her eyes super big\nand her skin super smooth!\n");    // "目とか超デカくして、\n肌とかもセラミックかよって感じだし！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 232: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("I-I see...\n");    // "そ、そうなんだ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 233: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I feel like...\nmy dreams have been shattered...\n<CLT>");    // "<CLT 4>なんだか…夢を壊された気分だな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 234: "Junko Enoshima (fake)"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Junko Enoshima (fake)", 5, 4, 2);
	s.op(0x34, [0x02, 0x13]);
	s.op(0x2A, [0x02, 0x12]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Junko Enoshima (fake)", 5, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Junko Enoshima (fake)", 99, 16);
	s.showLine("Well, our characters don't fit well together,\nand you don't think that I'm the heroine, right?\n");    // "ま、アンタとはキャラ的に合わないだろうし、\nあたしがヒロインだとも思ってないっしょ？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 235: "Junko Enoshima (fake)"
	s.showLine("I don't think that we'll interact that much,\nbut here's to us getting along!\n");    // "あんま、からむ事ないかもだけど、\nこれからよろしくって事で！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 236: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>She doesn't seem like a bad person,\nbut she's really blunt...\n<CLT>");    // "<CLT 4>悪い人ではなさそうだ。\n結構、ズバズバ言うけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);
}

function self_intro_chihiro(s)
{
	// Line 237: "Chihiro Fujisaki"
	s.showSprite(0, "Junko Enoshima (fake)", 5, 4, 2);
	s.op(0x2A, [0x02, 0x13]);
	s.op(0x26, [0x0D, 0x0C, 0x01]);
	s.op(0x35, [0x0D, 0x02, 0x00, 0x01, 0x06, 0x0D, 0x07, 0x00, 0x01, 0x06, 0x0D, 0x08, 0x00, 0x01, 0x06, 0x0D, 0x0C, 0x00, 0x01, 0x06, 0x0D, 0x0D, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x14]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(8, "Aoi Asahina", 98, 0, 0);
	s.showSprite(5, "Mondo Oowada", 98, 0, 0);
	s.showSprite(1, "Kyouko Kirigiri", 98, 0, 0);
	s.showSprite(2, "Junko Enoshima (fake)", 98, 0, 0);
	s.showSprite(4, "Chihiro Fujisaki", 98, 0, 0);
	s.op(0x34, [0x00, 0x04]);
	s.op(0x2A, [0x02, 0x14]);
	s.op(0x26, [0x00, 0x0C, 0x00]);
	s.op(0x27, [0x04]);
	s.op(0x35, [0x0D, 0x0D, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x15]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Chihiro Fujisaki", 2, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Chihiro Fujisaki", 99, 1);
	s.showLine("Hi, nice to meet you...\nI'm Chihiro Fujisaki...\n");    // "どうも、はじめまして…\n不二咲千尋ですぅ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 238: "Chihiro Fujisaki"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x03, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.showSprite(0, "Chihiro Fujisaki", 0, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x06, [0x02, 0xDB, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x06, [0x02, 0xDB, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.showSprite(0, "Chihiro Fujisaki", 2, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x01, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.showSprite(0, "Chihiro Fujisaki", 2, 1, 2);
	s.playVoice("Chihiro Fujisaki", 99, 24);
	s.showLine("Don't... Don't self-introductions make you\nfeel embarrassed too?\n");    // "なんだか…自己紹介ってなんだか照れるねぇ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 239: "Chihiro Fujisaki"
	s.showSprite(0, "Chihiro Fujisaki", 3, 1, 2);
	s.playVoice("Chihiro Fujisaki", 99, 3);
	s.showLine("I hope... we get along...\n");    // "これから…よろしくね…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 240: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("...Yeah. Nice to meet you.\nI hope we get along too...\n");    // "…うん。はじめまして。\nこちらこそ、よろしく。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 241: "Chihiro Fujisaki"
	s.showSprite(0, "Chihiro Fujisaki", 6, 1, 2);
	s.playVoice("Chihiro Fujisaki", 99, 12);
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("...Huh?\n");    // "…あれ？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 242: "Chihiro Fujisaki"
	s.showLine("Am I... imagining things...\nor have we met before?\n");    // "なんか…気のせいかな…\nどこかで会った事ある？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 243: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("No...\nI don't think we've met before...\n");    // "いや…今、はじめましてって、\n言ったばっかりだけど…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 244: "Chihiro Fujisaki"
	s.showSprite(0, "Chihiro Fujisaki", 7, 1, 2);
	s.playVoice("Chihiro Fujisaki", 99, 14);
	s.showLine("Ah, I see...\nSorry...\n");    // "あ、そっか…ごめんなさい……\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 245: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("N-No...\nYou don't need to apologize...\n");    // "い、いや…そんな…\n謝るような事じゃないから…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 246: "Chihiro Fujisaki"
	s.showSprite(0, "Chihiro Fujisaki", 0, 1, 2);
	s.playVoice("Chihiro Fujisaki", 99, 4);
	s.showLine("O-Oh...\n");    // "う、うん…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 247: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Chihiro Fujisaki... The <CLT><CLT 3>\"super programmer\"<CLT><CLT 4>\nwho has created many revolutionary programs...\n<CLT>");    // "<CLT 4>不二咲千尋…数々の革新的なプログラムを作る\n<CLT><CLT 3>“超高校級のプログラマー”<CLT><CLT 4>と呼ばれる才能で…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 248: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Her timid demeanor has gathered her\na fanatic group of fans...\n<CLT>");    // "<CLT 4>それに加え、その小動物を思わせる雰囲気も相まって、\n一部には、熱狂的なファンも存在するらしいけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 249: "Chihiro Fujisaki"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Chihiro Fujisaki", 9, 1, 2);
	s.playVoice("Chihiro Fujisaki", 99, 2);
	s.showLine("Umm...\nErm...\n");    // "ねぇねぇ…あのさぁ…\n"	// TODO: rephrase?
	s.waitFrames(1);
	s.waitForInput();


	// Line 250: "Chihiro Fujisaki"
	s.showSprite(0, "Chihiro Fujisaki", 7, 1, 2);
	s.playVoice("Chihiro Fujisaki", 99, 14);
	s.showLine("S-Sorry...\n");    // "ご、ごめんなさい……\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 251: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("...Huh?\nWh-Why are you apologizing?\n");    // "…え？　ど、どうして謝るの？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 252: "Chihiro Fujisaki"
	s.showSprite(0, "Chihiro Fujisaki", 7, 1, 2);
	s.playVoice("Chihiro Fujisaki", 99, 7);
	s.showLine("Because... you look like you're in a bad mood...\nDid I... make you mad?\n");    // "だって…なんだか不機嫌そうだったから…\n怒ってる…んでしょ？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 253: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("N-No!\nI was just thinking about something!\n");    // "違う、違う！　ちょっと考え事してただけだよ！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 254: "Chihiro Fujisaki"
	s.showSprite(0, "Chihiro Fujisaki", 9, 1, 2);
	s.playVoice("Chihiro Fujisaki", 99, 8);
	s.showLine("Huh?\nThinking...?\n");    // "え？　考え事……？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 255: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("...Yep, so I'm not mad or anything!\n");    // "…そうそう。別に不機嫌になった訳じゃないんだって！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 256: "Chihiro Fujisaki"
	s.showSprite(0, "Chihiro Fujisaki", 11, 1, 2);
	s.playVoice("Chihiro Fujisaki", 99, 20);
	s.showLine("Thank goodness... So that's it...\nI thought that you didn't like me.\n");    // "よかったぁ…そうだったんだぁ…\n嫌われたのかと思っちゃったよぉ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 257: "Chihiro Fujisaki"
	var lines_chihiro = ["Ehehe...!\nWhat a relief.\n",
						"<CLT 4>I understand how her fans feel now...\n<CLT>"];
	
	s.showSprite(0, "Chihiro Fujisaki", 3, 1, 2);
	s.playVoice("Chihiro Fujisaki", 99, 3);
	s.showLine(lines_chihiro[0]);    // "えへへっ…！　ほっとした。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 258: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>..................\n<CLT>");    // "<CLT 4>………………\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 259: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_chihiro[1]);    // "<CLT 4>一部の熱狂的なファンとやらの気持ちが\n少しだけわかった気がした…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 260: "Chihiro Fujisaki"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Chihiro Fujisaki", 3, 4, 2);
	s.op(0x34, [0x02, 0x16]);
	s.op(0x2A, [0x02, 0x15]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Chihiro Fujisaki", 3, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Chihiro Fujisaki", 99, 3);
	s.showLine(lines_chihiro[0]);    // "えへへっ…！　ほっとした。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 261: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_chihiro[1]);    // "<CLT 4>一部の熱狂的なファンとやらの気持ちが\n少しだけわかった気がした…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 262: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(1, "Hifumi Yamada", 3, 1, 1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.showSprite(0, "Chihiro Fujisaki", 3, 1, 2);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>And I also just felt their laser-like stares...\n<CLT>");    // "<CLT 4>そして今、その一部の熱狂的なファンの\n<CLT><CLT 3>熱い視線<CLT><CLT 4>を感じている…ような。\n<CLT>"	// TODO: rephrase?
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);
	
	// Clean-up for batch 2
	s.showSprite(0, "Chihiro Fujisaki", 3, 4, 2);
	s.showSprite(1, "Hifumi Yamada", 3, 3, 1);
	s.op(0x2A, [0x02, 0x16]);
	s.op(0x26, [0x0D, 0x0D, 0x01]);
	s.op(0x35, [0x0D, 0x02, 0x00, 0x01, 0x06, 0x0D, 0x07, 0x00, 0x01, 0x06, 0x0D, 0x08, 0x00, 0x01, 0x06, 0x0D, 0x0C, 0x00, 0x01, 0x06, 0x0D, 0x0D, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x17]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(8, "Aoi Asahina", 98, 0, 0);
	s.showSprite(5, "Mondo Oowada", 98, 0, 0);
	s.showSprite(1, "Kyouko Kirigiri", 98, 0, 0);
	s.showSprite(2, "Junko Enoshima (fake)", 98, 0, 0);
	s.showSprite(4, "Chihiro Fujisaki", 98, 0, 0);
	s.op(0x34, [0x00, 0x04]);
	s.op(0x2A, [0x02, 0x17]);
}

function self_intro_togami(s)
{
	// Line 275: "Makoto Naegi"
	s.op(0x29, [0xFF]);
	s.op(0x2A, [0x02, 0x08]);
	s.op(0x2A, [0x00, 0x04]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(0, "Byakuya Togami", 0, 0, 1);
	s.showSprite(3, "Celestia Rudenberg", 0, 0, 21);
	s.showSprite(2, "Yasuhiro Hagakure", 0, 0, 31);
	s.showSprite(6, "Sakura Oogami", 0, 0, 11);
	s.op(0x25, [0x1B, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Let's talk to the last four.\n<CLT>");    // "<CLT 4>最後に、あの４人と話してみよう。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 276: "Byakuya Togami"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x26, [0x00, 0x0C, 0x00]);
	s.op(0x25, [0x10, 0x01]);
	s.op(0x34, [0x02, 0x18]);
	s.op(0x27, [0x00]);
	s.op(0x35, [0x0D, 0x01, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x19]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Byakuya Togami", 0, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Byakuya Togami", 99, 1);
	s.showLine("Byakuya Togami...\n");    // "十神白夜だ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 277: "Makoto Naegi"
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x06, [0x02, 0xCF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x06, [0x02, 0xCF, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("Hello... and nice to meet you...\n");    // "どうも…よろしくね…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 278: "Byakuya Togami"
	s.showSprite(0, "Byakuya Togami", 0, 1, 2);
	s.showLine("..................\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 279: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I've never seen such a half-hearted\nself-introduction before.\n<CLT>");    // "<CLT 4>さすがに、ここまでやる気のない自己紹介は、\nボクの人生史上でも初めてだ。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 280: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>But you can't blame him...\n<CLT>");    // "<CLT 4>でも、それも仕方がないのかも…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 281: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Even among this class of superhumans,\nhe's special...\n<CLT>");    // "<CLT 4>この人は…超高校級のみんなの中でも、\n特に別格なんだよな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 282: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Byakuya Togami...\nThe prince of the Togami plutocrats.\n<CLT>");    // "<CLT 4>十神白夜…巨大財閥である十神一族の御曹司であり、\n幼い頃から、あらゆる帝王学を叩き込まれ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	
	
	// Line 282: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>He's been taught how to rule the masses\nsince his infancy...\n<CLT>");    // "<CLT 4>十神白夜…巨大財閥である十神一族の御曹司であり、\n幼い頃から、あらゆる帝王学を叩き込まれ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 283: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>He's already running a few companies\nand building up a fortune by himself...\n<CLT>");    // "<CLT 4>本人も、すでにいくつもの会社運営に携わり、\n個人としても莫大な資産を築き上げているという…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 284: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>The title <CLT><CLT 3>\"super heir\"<CLT><CLT 4> fits him like a glove...\n<CLT>");    // "<CLT 4>まさに<CLT><CLT 3>“超高校級の御曹司”<CLT><CLT 4>と呼ぶにふさわしい、\nケタ外れな高校生…\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 285: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>...That's what I read online.\n<CLT>");    // "<CLT 4>…以上、“希望ヶ峰学園新入生スレ”からの転載。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 286: "Byakuya Togami"
	var lines_togami = ["Hey, I already introduced myself.\nWhy are you still here...?\n",
						"You're an eyesore.\nLeave my sight immediately...\n",
						"<CLT 4>He has no desire to get along with me at all.\nIs this how he rules the masses...?\n<CLT>"];
	
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Byakuya Togami", 1, 1, 2);
	s.playVoice("Byakuya Togami", 99, 17);
	s.showLine(lines_togami[0]);    // "おい、自己紹介は終わったはずだ。\nいつまでそこにいる…？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 287: "Byakuya Togami"
	s.showLine(lines_togami[1]);    // "目障りだ。下がれ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 288: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_togami[2]);    // "<CLT 4>この“ボクみたいのと馴れ合う気はない”的なオーラ…\nこれが帝王学ってヤツなのか…？\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 289: "Byakuya Togami"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Byakuya Togami", 0, 4, 2);
	s.op(0x34, [0x02, 0x1A]);
	s.op(0x2A, [0x02, 0x19]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Byakuya Togami", 0, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Byakuya Togami", 99, 17);
	s.showLine(lines_togami[0]);    // "おい、自己紹介は終わったはずだ。\nいつまでそこにいる…？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 290: "Byakuya Togami"
	s.showLine(lines_togami[1]);    // "目障りだ。下がれ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 291: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_togami[2]);    // "<CLT 4>この“ボクみたいのと馴れ合う気はない”的なオーラ…\nこれが帝王学ってヤツなのか…？\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);
}

function self_intro_hagakure(s)
{
	// Line 292: "Yasuhiro Hagakure"
	s.showSprite(0, "Byakuya Togami", 0, 4, 2);
	s.op(0x2A, [0x02, 0x1A]);
	s.op(0x26, [0x0D, 0x01, 0x01]);
	s.op(0x35, [0x0D, 0x01, 0x00, 0x01, 0x06, 0x0D, 0x05, 0x00, 0x01, 0x06, 0x0D, 0x0A, 0x00, 0x01, 0x06, 0x0D, 0x0B, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x1B]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(0, "Byakuya Togami", 98, 0, 0);
	s.showSprite(3, "Celestia Rudenberg", 98, 0, 0);
	s.showSprite(2, "Yasuhiro Hagakure", 98, 0, 0);
	s.showSprite(6, "Sakura Oogami", 98, 0, 0);
	s.op(0x34, [0x00, 0x02]);
	s.op(0x2A, [0x02, 0x1B]);
	s.op(0x27, [0x02]);
	s.op(0x35, [0x0D, 0x05, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x1C]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Yasuhiro Hagakure", 0, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Yasuhiro Hagakure", 99, 1);
	s.showLine("Call me Yasuhiro Hagakure.\nWell, I'll be counting on you.\n");    // "俺は葉隠康比呂ってんだ。\nまぁ、ほどほどに頼むべ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 293: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x03, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x06, [0x02, 0xD3, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x06, [0x02, 0xD3, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Yasuhiro Hagakure... The <CLT><CLT 3>\"super fortune-teller\"<CLT><CLT 4>\nwho has been revolutionizing the divination world.\n<CLT>");    // "<CLT 4>葉隠康比呂…占い界で“超新星”と呼ばれ、\n新風を巻き起こす<CLT><CLT 3>“超高校級の占い師”<CLT><CLT 4>だったな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 294: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I don't know much about fortune-telling at all...\n<CLT>");    // "<CLT 4>正直、占い界とやらの事は\nあんまりピンとこないけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 295: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>but I'm interested in how accurate he is.\n<CLT>");    // "<CLT 4>どれくらい当たるのか…ちょっとだけ興味あるかも。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 296: "Yasuhiro Hagakure"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Yasuhiro Hagakure", 11, 1, 2);
	s.playVoice("Yasuhiro Hagakure", 99, 29);
	s.showLine("Ah, this is bad.\nTo tell you the truth...\n");    // "あー、こりゃ参ったね。実際…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 297: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("...Huh? What is it?\n");    // "…え、どうかした？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 298: "Yasuhiro Hagakure"
	s.showSprite(0, "Yasuhiro Hagakure", 11, 1, 2);
	s.playVoice("Yasuhiro Hagakure", 99, 41);
	s.showLine("I can see it...\nI can see it for real.\n");    // "見えた…見えちまったんだべ…\nリアルに見えちまったって話だ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 299: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("...What?\n");    // "…何が？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 300: "Yasuhiro Hagakure"
	s.showSprite(0, "Yasuhiro Hagakure", 1, 1, 2);
	s.playVoice("Yasuhiro Hagakure", 99, 5);
	s.showLine("A guardian angel with a perm\nchasing Bigfoot and skyfishes...\n");    // "スカイフィッシュをくわえたビッグフットを追いかける\nパーマ頭の守護霊…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 301: "Yasuhiro Hagakure"
	s.playSoundEffectA(27, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x25, [0x0D, 0x01]);
	s.showLine("Your guardian angel, that is!\n");    // "お前さんの守護霊さ！\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 302: "Yasuhiro Hagakure"
	s.showSprite(0, "Yasuhiro Hagakure", 2, 1, 2);
	s.playVoice("Yasuhiro Hagakure", 99, 6);
	s.showLine("Just kidding.\n");    // "なーんて冗談だよ。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 303: "Yasuhiro Hagakure"
	s.showLine("Well, let's talk about Lemuria and its lost\ncivilization over some sake next time.\n");    // "まぁ、今度酒でも飲み交わしながら、\nレムリア大陸とレムリア文明について熱く語り合うべ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 304: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("We can't drink yet!\nWe're in high school!\n");    // "いや、お酒は駄目だよ！\n高校生だし！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 305: "Yasuhiro Hagakure"
	var lines_hagakure = ["I'm 20, you know.\nA lot happened and I got held back three times.\n",
						"<CLT 4>Held back 3 times...\nToo much happened, if you asked me.\n<CLT>"];
	
	s.showSprite(0, "Yasuhiro Hagakure", 0, 1, 2);
	s.playVoice("Yasuhiro Hagakure", 99, 3);
	s.showLine(lines_hagakure[0]);    // "俺はハタチだべ。\n実際、色々あって３ダブしてんだ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 306: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_hagakure[1]);    // "<CLT 4>３ダブって…色々ありすぎだろ。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 307: "Yasuhiro Hagakure"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Yasuhiro Hagakure", 0, 4, 2);
	s.op(0x34, [0x02, 0x1D]);
	s.op(0x2A, [0x02, 0x1C]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Yasuhiro Hagakure", 0, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Yasuhiro Hagakure", 99, 3);
	s.showLine(lines_hagakure[0]);    // "俺はハタチだべ。\n実際、色々あって３ダブしてんだ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 308: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_hagakure[1]);    // "<CLT 4>３ダブって…色々ありすぎだろ。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);
}

function self_intro_oogami(s)
{
	// Line 309: "Sakura Oogami"
	s.showSprite(0, "Yasuhiro Hagakure", 0, 4, 2);
	s.op(0x2A, [0x02, 0x1D]);
	s.op(0x26, [0x0D, 0x05, 0x01]);
	s.op(0x35, [0x0D, 0x01, 0x00, 0x01, 0x06, 0x0D, 0x05, 0x00, 0x01, 0x06, 0x0D, 0x0A, 0x00, 0x01, 0x06, 0x0D, 0x0B, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x1E]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(0, "Byakuya Togami", 98, 0, 0);
	s.showSprite(3, "Celestia Rudenberg", 98, 0, 0);
	s.showSprite(2, "Yasuhiro Hagakure", 98, 0, 0);
	s.showSprite(6, "Sakura Oogami", 98, 0, 0);
	s.op(0x34, [0x00, 0x02]);
	s.op(0x2A, [0x02, 0x1E]);
	s.op(0x27, [0x06]);
	s.op(0x35, [0x0D, 0x0A, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x1F]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Sakura Oogami", 0, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Sakura Oogami", 99, 1);
	s.showLine("I'm Sakura Oogami...\n");    // "大神さくらだ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 310: "Makoto Naegi"
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x06, [0x02, 0xD8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x06, [0x02, 0xD8, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I wanted to ask her if she's a guy... but I realized\nthat she would turn me into a meatball if I did.\n<CLT>");    // "<CLT 4>…男性の方ですよね？\nなんて言葉が危うく出かかったが…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	/*
	// Line 311: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>But then I realized that he/she would turn me into\na meatball if I did.\n<CLT>");    // "<CLT 4>そんな事を口走った日には、\nボクは一瞬にして肉団子だろう。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	// */


	// Line 312: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>After all, she's the reigning champion of\na big MMA championship in the US...\n<CLT>");    // "<CLT 4>なにせ、彼女はアメリカの総合格闘技大会において、\n女性でありつつチャンピオンになった女流武道家…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 313: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>She's the <CLT><CLT 3>\"super martial artist\"<CLT><CLT 4> who has\nwon 400-odd battles and lost none...\n<CLT>");    // "<CLT 4>４００戦以上していまだ無敗の、\n<CLT><CLT 3>“超高校級の格闘家”<CLT><CLT 4>なんだから…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 314: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.showSprite(0, "Sakura Oogami", 0, 3, 2);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xDE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>This is what was written online:\n<CLT>");    // "<CLT 4>彼女については“希望ヶ峰学園新入生スレ”で、\nこんな風に書かれていた。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 315: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>\"Sakura Oogami, a.k.a. <CLT><CLT 3>'The Ogre,'<CLT><CLT 4> may be the\nstrongest teenage female Homo sapiens ever.\n<CLT>");    // "<CLT 4>大神さくら…通称<CLT><CLT 3>“オーガ”<CLT><CLT 4>は、\n霊長類ヒト科最強に最も近い女子高生だ。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 316: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>\"If you're a freshman at Mount Hope Academy,\nthen heed this warning:\n<CLT>");    // "<CLT 4>もし、このスレを見ている\n希望ヶ峰学園の新入生がいたら、先に忠告しておこう。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 317: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>\"don't get close to her if you want to live\"...\n<CLT>");    // "<CLT 4>命が惜しければ、決して彼女には近寄らない事だ…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 318: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xDE, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.showSprite(0, "Sakura Oogami", 0, 1, 2);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Now that I'm right in front of her,\nI can see that that's not an exaggeration.\n<CLT>");    // "<CLT 4>それは言い過ぎじゃない…\n本人を目の前にすると、そう思わざるを得ない。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 319: "Sakura Oogami"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Sakura Oogami", 5, 1, 2);
	s.playVoice("Sakura Oogami", 99, 16);
	s.showLine("Hey, you...\n");    // "おい、お主…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 320: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Huh...!? Y-Yes...!\n");    // "えっ…！？　は、はい…ッ！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 321: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I couldn't help but straighten my back.\n<CLT>");    // "<CLT 4>思わず背筋が伸びた。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 322: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Then, she started touching my body...\n<CLT>");    // "<CLT 4>すると、彼女はそんなボクの体を、\nベタベタと触り始め…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 323: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("Umm... What are you...\n");    // "あの…何を……\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 324: "Sakura Oogami"
	s.showSprite(0, "Sakura Oogami", 2, 1, 2);
	s.playVoice("Sakura Oogami", 99, 35);
	s.showLine("Your muscles are normal\nfor a high school student, huh...\n");    // "筋力の質、量、共に、\nごくごく普通の一般的な高校レベルといったところか…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 325: "Sakura Oogami"
	var lines_oogami = ["Hm, how unfortunate.\nYou can't be my sparring partner...\n",
						"<CLT 4>No... I'm very grateful to hear that...\n<CLT>"];
						
	s.showSprite(0, "Sakura Oogami", 5, 1, 2);
	s.playVoice("Sakura Oogami", 99, 15);
	s.showLine(lines_oogami[0]);    // "ふむ、残念だったな。\nその程度では我の訓練相手は務まらぬ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 326: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_oogami[1]);    // "<CLT 4>いや…むしろ、ありがたいんですけど…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 327: "Sakura Oogami"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Sakura Oogami", 5, 4, 2);
	s.op(0x34, [0x02, 0x20]);
	s.op(0x2A, [0x02, 0x1F]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Sakura Oogami", 5, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Sakura Oogami", 99, 15);
	s.showLine(lines_oogami[0]);    // "ふむ、残念だったな。\nその程度では我の訓練相手は務まらぬ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 328: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_oogami[1]);    // "<CLT 4>いや…むしろ、ありがたいんですけど…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);
}

function self_intro_celes(s)
{
	// Line 329: "Celestia Rudenberg"
	s.showSprite(0, "Sakura Oogami", 5, 4, 2);
	s.op(0x2A, [0x02, 0x20]);
	s.op(0x26, [0x0D, 0x0A, 0x01]);
	s.op(0x35, [0x0D, 0x01, 0x00, 0x01, 0x06, 0x0D, 0x05, 0x00, 0x01, 0x06, 0x0D, 0x0A, 0x00, 0x01, 0x06, 0x0D, 0x0B, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x21]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(0, "Byakuya Togami", 98, 0, 0);
	s.showSprite(3, "Celestia Rudenberg", 98, 0, 0);
	s.showSprite(2, "Yasuhiro Hagakure", 98, 0, 0);
	s.showSprite(6, "Sakura Oogami", 98, 0, 0);
	s.op(0x34, [0x00, 0x02]);
	s.op(0x2A, [0x02, 0x21]);
	s.op(0x27, [0x03]);
	s.op(0x35, [0x0D, 0x0B, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x22]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Celestia Rudenberg", 0, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Celestia Rudenberg", 99, 1);
	s.showLine("I do not believe that we are acquainted.\nI am Celestia Rudenberg.\n");    // "お初にお目にかかりますわね。\nセレスティア・ルーデンベルクです。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 330: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x03, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x06, [0x02, 0xD9, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x06, [0x02, 0xD9, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("Celestia... Rude.. What?\n");    // "セレスティア…ルーデ…って何が？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 331: "Celestia Rudenberg"
	s.showSprite(0, "Celestia Rudenberg", 3, 1, 2);
	s.playVoice("Celestia Rudenberg", 99, 7);
	s.showLine("That is indeed my name.\nYou may call me \"Celes\" as well.\n");    // "わたくしの名前ですわよ。\n“セレス”と呼んでくださって結構ですわ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 332: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("...Umm, you're Japanese, right?\n");    // "…えっと、日本人ですよね？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 333: "Celestia Rudenberg"
	s.showSprite(0, "Celestia Rudenberg", 1, 1, 2);
	s.playVoice("Celestia Rudenberg", 99, 40);
	s.showLine("Yes?\n");    // "それが何か？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 334: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("Umm...\nI would like to know your real name too...\n");    // "あの…出来れば本名も…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 335: "Celestia Rudenberg"
	s.showSprite(0, "Celestia Rudenberg", 2, 1, 2);
	s.playVoice("Celestia Rudenberg", 99, 5);
	s.showLine("Ehehe, pardon me,\nbut my real name is Celestia Rudenberg.\n");    // "うふふ、嫌ですわ。わたくしの本名は、\nセレスティア・ルーデンベルクですわよ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 336: "Celestia Rudenberg"
	s.playSoundEffectA(28, 100);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("You may call me \"Celes\"...!\n");    // "“セレス”と呼んでくださって結構ですわ…！\n"
	s.waitFrames(1);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 337: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Polite words with a strong tone...\nShe means, \"Don't ask me again\"...\n<CLT>");    // "<CLT 4>丁寧な言葉づかいとは裏腹に力強い口調…\nこれ以上、聞くなって事か…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 338: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Looks like she's the one I read online...\n<CLT>");    // "<CLT 4>“希望ヶ峰学園新入生スレ”で見かけた\n噂通りの人物みたいだな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 339: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.showSprite(0, "Celestia Rudenberg", 2, 3, 2);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xDE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>She calls herself \"Celestia Rudenberg\"...\nShe's an undefeated <CLT><CLT 3>\"super gambler\"<CLT><CLT 4>...\n<CLT>");    // "<CLT 4>自称セレスティア・ルーデンベルク…\n負け知らずの<CLT><CLT 3>“超高校級のギャンブラー”<CLT><CLT 4>で…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 340: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>She's covered in a veil of lies...\n<CLT>");    // "<CLT 4>ゴスロリ服を愛するという事以外の素性が、\nすべてウソのベールに包まれている謎の女子高校生…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	
	
	// Line 340: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Nothing is known about her other than the fact\nthat she loves gothic lolita fashion...\n<CLT>");    // "<CLT 4>ゴスロリ服を愛するという事以外の素性が、\nすべてウソのベールに包まれている謎の女子高校生…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 341: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>She won a tournament called <CLT><CLT 3>\"King of Liars\"<CLT><CLT 4>\nthat put everything the players had at stake...\n<CLT>");    // "<CLT 4>参加者全員の全財産を奪い合うという、\n究極の裏ギャンブル<CLT><CLT 3>“キングオブライアー”<CLT><CLT 4>で優勝し…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 342: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>They say that she took everything\nthe other players had and destroyed their lives...\n<CLT>");    // "<CLT 4>他の参加者の財産を奪い取り、人生を破滅させたなんて\n恐ろしい噂を持つ、高校生ギャンブラーらしい…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 343: "Celestia Rudenberg"
	var lines_celes = ["Here's to a good friendship.\n",
						"Ehehehehe...\n",
						"<CLT 4>What a scary smile...\nShe doesn't seem to be straightforward person...\n<CLT>"];
	
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xDE, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.showSprite(0, "Celestia Rudenberg", 2, 1, 2);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Celestia Rudenberg", 99, 5);
	s.showLine(lines_celes[0]);    // "今後ともよろしくお願いしますね。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 344: "Celestia Rudenberg"
	s.showSprite(0, "Celestia Rudenberg", 3, 1, 2);
	s.playVoice("Celestia Rudenberg", 99, 7);
	s.showLine(lines_celes[1]);    // "うふふふふ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 345: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_celes[2]);    // "<CLT 4>この逆に怖い笑顔…\nなんだか一筋縄じゃいかなそうな人だ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 346: "Celestia Rudenberg"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Celestia Rudenberg", 3, 4, 2);
	s.op(0x34, [0x02, 0x23]);
	s.op(0x2A, [0x02, 0x22]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Celestia Rudenberg", 2, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Celestia Rudenberg", 99, 5);
	s.showLine(lines_celes[0]);    // "今後ともよろしくお願いしますね。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 347: "Celestia Rudenberg"
	s.showSprite(0, "Celestia Rudenberg", 3, 1, 2);
	s.playVoice("Celestia Rudenberg", 99, 7);
	s.showLine(lines_celes[1]);    // "うふふふふ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 348: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_celes[2]);    // "<CLT 4>この笑顔…逆に怖いな…\nなんだか一筋縄じゃいかなそうな人だ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	
	// Clean-up for batch 3
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Celestia Rudenberg", 3, 4, 2);
	s.op(0x2A, [0x02, 0x23]);
	s.op(0x26, [0x0D, 0x0B, 0x01]);
	s.op(0x35, [0x0D, 0x01, 0x00, 0x01, 0x06, 0x0D, 0x05, 0x00, 0x01, 0x06, 0x0D, 0x0A, 0x00, 0x01, 0x06, 0x0D, 0x0B, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x02, 0x24]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(0, "Byakuya Togami", 98, 0, 0);
	s.showSprite(3, "Celestia Rudenberg", 98, 0, 0);
	s.showSprite(2, "Yasuhiro Hagakure", 98, 0, 0);
	s.showSprite(6, "Sakura Oogami", 98, 0, 0);
	s.op(0x34, [0x00, 0x02]);
	s.op(0x2A, [0x02, 0x24]);
	s.op(0x25, [0x01, 0x00]);
}

function announcement(s)
{
	// Line 361: "Makoto Naegi"
	s.op(0x29, [0xFF]);
	s.op(0x2A, [0x02, 0x18]);
	s.op(0x2A, [0x00, 0x02]);
	s.op(0x25, [0x1B, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>...I think I've introduced myself to everyone.\n<CLT>");    // "<CLT 4>…これで一通り、自己紹介は終わったか。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 362: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>In any case, all of these <CLT><CLT 3>\"super students\"<CLT><CLT 4>\nare so... unique.\n<CLT>");    // "<CLT 4>それにしても<CLT><CLT 3>“超高校級”<CLT><CLT 4>なんて呼ばれるだけあって、\nみんな個性的と言うか…なんと言うか…\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 363: "Byakuya Togami"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Byakuya Togami", 1, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Byakuya Togami");
	s.playVoice("Byakuya Togami", 99, 4);
	s.showLine("...Hey, it's about time we got back on topic.\n");    // "…おい、そろそろ本題に入るぞ。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 364: "Byakuya Togami"
	s.showLine("This isn't the time to be standing around\nsaying \"nice to meet you\" to each other...\n");    // "仲良く“はじめまして”ばかり、\nやっている場合でもないんだ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 365: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("Oh, that reminds me...\nWhat did you guys say again?\n");    // "あ、そう言えば…さっき言ってたよね？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 366: "Makoto Naegi"
	s.showLine("Something about \"this situation\" and \"problem\"...\nWhat did that mean?\n");    // "この状況がどうとか、問題がどうとか…\nそれって、どういう意味なの？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 367: "Sayaka Maizono"
	s.showSprite(1, "Sayaka Maizono", 2, 1, 3);
	s.playVoice("Sayaka Maizono", 99, 4);
	s.showLine("Umm, about that...\n");    // "えっと、それはですね…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 368: "Sayaka Maizono"
	s.showSprite(1, "Sayaka Maizono", 1, 1, 3);
	s.playVoice("Sayaka Maizono", 99, 6);
	s.showLine("Naegi, you said that you <CLT 3>somehow fell asleep,<CLT>\nright?\n");    // "苗木君、言ってましたよね？\n<CLT 3>色々あって寝ちゃってた<CLT>って…\n"
	s.waitFrames(1);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 369: "Sayaka Maizono"
	s.showLine("That also...\nhappened to us...\n");    // "それって私達も…一緒なんです…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 370: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Huh!?\nYou too...?\n");    // "えっ！？　一緒って…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 371: "Reon Kuwata"
	s.showSprite(0, "Reon Kuwata", 12, 1, 4);
	s.playVoice("Reon Kuwata", 99, 10);
	s.showLine("After I set foot into the entrance hall,\nI suddenly lost consciousness...\n");    // "この玄関ホールに入った直後に、\nいきなり気を失っちまってさぁ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 372: "Reon Kuwata"
	s.showLine("I woke up and found myself in the school!\nThe same thing happened to you too, right?\n");    // "そんで、気付いたら校内で寝てたっつー訳！\nオメーもそうなんだろ？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 373: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("B-But that's strange!\nHow can all of us lose consciousness...\n");    // "で、でも、それって変だよ！\nここにいる全員が揃って気を失うなんて…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 374: "Mondo Oowada"
	s.showSprite(1, "Mondo Oowada", 5, 1, 1);
	s.playVoice("Mondo Oowada", 99, 10);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("That's the freakin' problem!\n");    // "だから困ってんだろがッ！！\n"	// TODO: profanity?
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 375: "Kiyotaka Ishimaru"
	s.showSprite(0, "Kiyotaka Ishimaru", 14, 1, 2);
	s.playVoice("Kiyotaka Ishimaru", 99, 3);
	s.showLine("The quirks don't end there.\nAll of you have seen the windows, right?\n");    // "異常なのは、気を失った件だけではないぞ。\n諸君らも教室や廊下の窓を見たであろう？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 376: "Kiyotaka Ishimaru"
	s.op(0x25, [0x01, 0x00]);
	s.playSoundEffectA(30, 100);
	s.op(0x22, [0x01, 0x02, 0x08]);
	s.showSprite(0, "Kiyotaka Ishimaru", 0, 3, 2);
	s.showSprite(1, "Mondo Oowada", 5, 3, 1);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x30, [0x00, 0x02, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x22, [0x00, 0x02, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Kiyotaka Ishimaru");
	s.showLine("...They've all been bolted shut with metal plates.\nWhat in the world is going on!?\n");    // "…至る所に、鉄板が打ち付けられていた。\nあれは一体なんだと言うのだッ！？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 377: "Junko Enoshima (fake)"
	s.op(0x25, [0x01, 0x00]);
	s.playSoundEffectA(30, 100);
	s.op(0x22, [0x01, 0x02, 0x08]);
	s.op(0x30, [0x00, 0x02, 0x03]);
	s.op(0x25, [0x06, 0x00]);
	s.showSprite(1, "Junko Enoshima (fake)", 2, 8, 2);
	s.op(0x22, [0x00, 0x02, 0x18]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Junko Enoshima (fake)");
	s.playVoice("Junko Enoshima (fake)", 99, 31);
	s.showLine("Also, where's my luggage?\nMy cell phone is also gone...\n");    // "それに、あたしの荷物どこ行っちゃったの？\nケータイも行方不明だし…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 378: "Chihiro Fujisaki"
	s.showSprite(0, "Chihiro Fujisaki", 4, 1, 0);
	s.playVoice("Chihiro Fujisaki", 99, 7);
	s.showLine("That reminds me...\nMy PDA is also gone...\n");    // "そう言えば…ＰＤＡがどこにもないよぉ……\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 379: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 1, 1, 2);
	s.playVoice("Kiyotaka Ishimaru", 99, 3);
	s.showLine("This entrance hall is also strange!\n");    // "それに、妙なのは、\nこの玄関ホールもだ！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 380: "Kiyotaka Ishimaru"
	s.showLine("The entrance has been completely sealed off...\n");    // "奥の入口が、妙な鉄の塊で\n見事に塞がれてしまっているじゃないか…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 381: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 15, 1, 2);
	s.playVoice("Kiyotaka Ishimaru", 99, 16);
	s.showLine("That vault door...\nwasn't there when I came in.\n");    // "僕が入って来た時には…\nあんな物なんてなかったぞ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 382: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 7, 1, 2);
	s.playVoice("Kiyotaka Ishimaru", 99, 10);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("How!?\nHow in the world!?\n");    // "なぜだッ！　一体なぜなのだッ！！\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 383: "Junko Enoshima (fake)"
	s.showSprite(0, "Junko Enoshima (fake)", 3, 1, 1);
	s.playVoice("Junko Enoshima (fake)", 99, 34);
	s.showLine("Maybe...\nwe got caught up in some crime...?\n");    // "もしかして…\n犯罪チックな事に巻き込まれたんじゃ…？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 384: "Reon Kuwata"
	s.showSprite(1, "Reon Kuwata", 6, 1, 3);
	s.playVoice("Reon Kuwata", 99, 24);
	s.showLine("Like... kidnapping...?\n");    // "誘拐…とか…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 385: "Reon Kuwata"
	s.showLine("Were all of us...\nkidnapped from Mount Hope Academy?\n");    // "オレら…みんなして、\n希望ヶ峰学園から連れ去られた…なんてオチ？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 386: "Yasuhiro Hagakure"
	s.showSprite(0, "Yasuhiro Hagakure", 11, 1, 1);
	s.playVoice("Yasuhiro Hagakure", 99, 8);
	s.showLine("Don't be such a downer...\n");    // "そう、シケタ面してんなって…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 387: "Yasuhiro Hagakure"
	s.showLine("This is just the new student orientation program\norganized by the school, right?\n");    // "どうせ、学園が企画した\nオリエンテーションかなんかだべ？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 388: "Yasuhiro Hagakure"
	s.showSprite(0, "Yasuhiro Hagakure", 1, 1, 1);
	s.playVoice("Yasuhiro Hagakure", 99, 3);
	s.showLine("So I guess I'll take a little nap here...\n");    // "つー訳で、俺はちょっくら一休みすんべ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 389: "Chihiro Fujisaki"
	s.showSprite(1, "Chihiro Fujisaki", 11, 1, 0);
	s.playVoice("Chihiro Fujisaki", 99, 23);
	s.showLine("...I see.\nThey're trying to scare us, right?\n");    // "…そっかぁ。\nみんなを驚かせる為のドッキリイベントだね？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 390: "Reon Kuwata"
	s.showSprite(0, "Reon Kuwata", 13, 1, 2);
	s.playVoice("Reon Kuwata", 99, 29);
	s.showLine("What, that's all...?\nThen I guess I'll take a nap too.\n");    // "何よ、そういう事なの…？\nならオレも昼寝させてもらっちゃうよ？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 391: "Reon Kuwata"
	s.showSprite(0, "Reon Kuwata", 2, 1, 2);
	s.playVoice("Reon Kuwata", 99, 5);
	s.showLine("I stayed up late last night,\nso I'm hella sleepy...\n");    // "オレも、昨日夜更かししたんで、\nデビル睡魔が…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 392: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>The anxiety in the room dropped.\n<CLT>");    // "<CLT 4>と、一同の緊張が緩みかけたその時だった。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 393: "Reon Kuwata"
	s.showSprite(0, "Reon Kuwata", 2, 4, 3);
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Then \"that\" began without warning.\n<CLT>");    // "<CLT 4>突然“それ”は始まった。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 394: "[No Name]"
	s.playBGM(255, 0, 0);
	s.op(0x25, [0x02, 0x00]);
	s.setSpeaker("[No Name]");
	s.playSoundEffectA(156, 100);
	s.op(0x03, [0x17]);
	s.showLine(common_line_westminster_chimes);    // "<CLT 23>「キーン、コーン…　カーン、コーン…」\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x78]);
	s.waitForInput();


	// Line 395: "Monokuma"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.showSprite(0, "Reon Kuwata", 2, 3, 3);
	s.showSprite(1, "Chihiro Fujisaki", 11, 3, 0);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x03, 0x79, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.playSoundEffectA(164, 100);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.playSoundEffectA(257, 100);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x06, [0x03, 0x79, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x5A]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("???");
	s.playVoice("Monokuma", 99, 156);
	s.showLine("Testing, testing!\nBroadcasting, broadcasting...!\n");    // "あー、あー…！　マイクテスッ、マイクテスッ！\n校内放送、校内放送…！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 396: "Monokuma"
	s.playVoice("Monokuma", 99, 157);
	s.showLine("Is this okay? You guys can hear me, right?\nUmm, then...\n");    // "大丈夫？　聞こえてるよね？\nえーっ、ではでは…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 397: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>That voice was so nonchalant and bright\nthat it was out of place...\n<CLT>");    // "<CLT 4>それは場違いなほど、能天気で明るい声…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 398: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>That's why...\nit made me really uneasy.\n<CLT>");    // "<CLT 4>それゆえに…\nボクは、その声に強烈な不快感を抱いた。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 399: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>It's like a screeching laughter\nat an accident scene...\n<CLT>");    // "<CLT 4>例えば、事故現場で鳴り響く笑い声のように、\n思わず眉をしかめたくなるような不快感…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 400: "Monokuma"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("???");
	s.playVoice("Monokuma", 99, 158);
	s.showLine("Umm, hello, freshmen...\nWe will now like to begin the entrance ceremony...\n");    // "えー、新入生のみなさん…\n今から、入学式を執り行いたいと思いますので…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 401: "Monokuma"
	s.playVoice("Monokuma", 99, 159);
	s.showLine("so please come to the gym right away~\n");    // "至急、体育館までお集まりくださ～い。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 402: "Monokuma"
	s.playVoice("Monokuma", 99, 160);
	s.showLine("...Alright, see you later!\n");    // "…って事で、ヨロシク！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 403: "Junko Enoshima (fake)"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.playSoundEffectA(65535, 0);
	s.playSoundEffectA(165, 100);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x03, 0x79, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.playBGM(32, 100, 0);
	s.op(0x25, [0x06, 0x00]);
	s.showSprite(0, "Junko Enoshima (fake)", 1, 8, 2);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Junko Enoshima (fake)");
	s.showLine("..................\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 404: "Junko Enoshima (fake)"
	s.showSprite(0, "Junko Enoshima (fake)", 3, 1, 2);
	s.playVoice("Junko Enoshima (fake)", 99, 24);
	s.playSoundEffectA(27, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Wha...?\nWhat was that...?\n");    // "なに…？　なんなの、今の…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 405: "Byakuya Togami"
	s.showSprite(1, "Byakuya Togami", 13, 1, 3);
	s.playVoice("Byakuya Togami", 99, 39);
	s.showLine("Let's go...\n");    // "俺は先に行くぞ…\n"	// TODO: not a correct translation
	s.waitFrames(1);
	s.playSoundEffectA(141, 100);
	s.showSprite(1, "Byakuya Togami", 13, 5, 3);
	s.op(0x33, [0x06, 0x00, 0x00, 0x28]);
	s.waitForInput();


	// Line 406: "Junko Enoshima (fake)"
	s.showSprite(0, "Junko Enoshima (fake)", 2, 1, 2);
	s.playVoice("Junko Enoshima (fake)", 99, 13);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("H-... Hey!\nWhy are you going now!?\n");    // "ちょ…ちょっと！\nなんで、いきなり行っちゃうの！？\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 407: "Yasuhiro Hagakure"
	s.showSprite(1, "Yasuhiro Hagakure", 11, 1, 0);
	s.playVoice("Yasuhiro Hagakure", 99, 29);
	s.showLine("Entrance ceremony... I see, so that's how it is...\nSo this is also part of the entrance ceremony, huh?\n");    // "入学式…なるほど、そういう事ね…\nこれは入学式って催し物の一部だったってか。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 408: "Yasuhiro Hagakure"
	s.showSprite(1, "Yasuhiro Hagakure", 2, 1, 0);
	s.playVoice("Yasuhiro Hagakure", 99, 6);
	s.showLine("Not funny! This isn't funny!\nThis isn't funny for real!\n");    // "笑えんべ！　こいつは笑えんべ！\n実際、リアルに笑えんべ！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 409: "Yasuhiro Hagakure"
	s.showSprite(1, "Yasuhiro Hagakure", 0, 1, 0);
	s.playVoice("Yasuhiro Hagakure", 99, 3);
	s.showLine("Then, I'm going to the gym.\nLet's see what they have in store for us...\n");    // "じゃあ、俺も行くとすっか。\nお次は、どんな趣向のイベントかなっと…\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.playSoundEffectA(141, 100);
	s.showSprite(1, "Yasuhiro Hagakure", 0, 5, 0);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.waitForInput();


	// Line 410: "Reon Kuwata"
	s.showSprite(1, "Reon Kuwata", 13, 1, 3);
	s.playVoice("Reon Kuwata", 99, 39);
	s.showLine("I thought that I had a chance to catch a nap...\nSeriously, be more considerate.\n");    // "せっかく一眠りしようと思ってたっつーのに…\n空気読めよなマジで。\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.playSoundEffectA(141, 100);
	s.showSprite(1, "Reon Kuwata", 13, 5, 3);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.waitForInput();


	// Line 411: "Chihiro Fujisaki"
	s.showSprite(1, "Chihiro Fujisaki", 6, 1, 4);
	s.playVoice("Chihiro Fujisaki", 99, 18);
	s.showLine("Ah, wait.\nLet me tag along!\n");    // "あー、待ってぇ。一緒に行く～！\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.playSoundEffectA(141, 100);
	s.showSprite(1, "Chihiro Fujisaki", 0, 5, 4);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.waitForInput();


	// Line 412: "Celestia Rudenberg"
	s.showSprite(1, "Celestia Rudenberg", 3, 1, 2);
	s.playVoice("Celestia Rudenberg", 99, 7);
	s.showLine("Then, if you'll excuse me...\n");    // "では、わたくしも先に失礼しますわ…\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.playSoundEffectA(141, 100);
	s.showSprite(1, "Celestia Rudenberg", 3, 5, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.waitForInput();


	// Line 413: "Touko Fukawa"
	s.showSprite(0, "Touko Fukawa", 1, 1, 2);
	s.playVoice("Touko Fukawa", 99, 7);
	s.showLine("It's not like... anyone cares...\nb-but I'm going too... I'm going...\n");    // "誰も…気にしてないでしょうけど…\nあ、あたしも行くわよ…行っちゃうわよ…\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.playSoundEffectA(141, 100);
	s.showSprite(0, "Touko Fukawa", 1, 5, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.waitForInput();


	// Line 414: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I stood there, gazing at the students who\nwere walking towards the gym.\n<CLT>");    // "<CLT 4>ぞろぞろと体育館に向かう面々を横目に、\nボクは、その場を動けずにいた。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 415: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I couldn't get the \"bad feeling\" in my guts to leave.\n<CLT>");    // "<CLT 4>頭に浮かんだ“嫌な予感”が、\nどうしても頭から離れなかったせいだ。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 416: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>But...\nI wasn't the only one who had that feeling...\n<CLT>");    // "<CLT 4>だけど…そんな考えなのは、\nボクだけでもなかったようで…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 417: "Sayaka Maizono"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(1, "Sayaka Maizono", 1, 1, 1);
	s.playVoice("Sayaka Maizono", 99, 6);
	s.showLine("Is this... really fine...?\n");    // "本当に…大丈夫なんですかね…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 418: "Junko Enoshima (fake)"
	s.showSprite(0, "Junko Enoshima (fake)", 2, 1, 2);
	s.playVoice("Junko Enoshima (fake)", 99, 9);
	s.showLine("That announcement was really wacko...\n");    // "今の校内放送にしたって、\n妙に怪しかったしね…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 419: "Kyouko Kirigiri"
	s.showSprite(1, "Kyouko Kirigiri", 1, 1, 3);
	s.playVoice("Kyouko Kirigiri", 99, 2);
	s.showLine("But staying here doesn't mean\nthat we'll stay out danger...\n");    // "でも、ここに残っていたとしても、\n危険から逃げられる訳じゃない…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 420: "Kyouko Kirigiri"
	s.showLine("Besides, all of you want to find out\nwhat's happening to us, right?\n");    // "それに、あなた達だって気になるでしょ？\n今、自分達の身に何が起きているのか…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 421: "Sakura Oogami"
	line_oogami_2 = "We won't know anything unless we\nmake progress... That leaves us with no choice.\n";
	s.showSprite(0, "Sakura Oogami", 2, 1, 2);
	s.playVoice("Sakura Oogami", 99, 35);
	s.showLine(line_oogami_2);    // "先に進まぬ限りは何もわからぬままという事か…\nならば、行くしかあるまい。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 422: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>That's... true...\n<CLT>");    // "<CLT 4>確かに…そうだよな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 423: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I'm slightly...\nNo, really nervous...\n<CLT>");    // "<CLT 4>ちょっと…\nいや、かなり不安だけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 424: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>But... I have to go.\n<CLT>");    // "<CLT 4>行くしか…ないか。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 425: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("The gym, right?\n");    // "体育館…だったよな。\n"
	s.waitFrames(1);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);
}

function before_going_to_gym(s)
{
	// Line 426: "Sayaka Maizono"
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.showSprite(0, "Sakura Oogami", 2, 3, 2);
	s.showSprite(1, "Kyouko Kirigiri", 0, 3, 3);
	s.playBGM(255, 0, 0);
	s.op(0x33, [0x0F, 0x00, 0x00, 0x17]);
	s.op(0x25, [0x0B, 0x01]);
	s.op(0x25, [0x07, 0x00]);
	s.op(0x25, [0x10, 0x00]);
	s.op(0x25, [0x0C, 0x01]);
	s.op(0x22, [0x01, 0x00, 0x01]);
	s.op(0x25, [0x0B, 0x01]);
	s.op(0x25, [0x07, 0x00]);
	s.op(0x25, [0x10, 0x00]);
	s.op(0x33, [0x02, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x03, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x08, 0x00, 0x00, 0x00]);
	s.op(0x33, [0x0F, 0x00, 0x00, 0x11]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x15, [0x03, 0x00, 0xFF]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(0, "Sayaka Maizono", 0, 0, 0);
	s.showSprite(9, "Junko Enoshima (fake)", 0, 0, 0);
	s.showSprite(2, "Kyouko Kirigiri", 0, 0, 0);
	s.showSprite(3, "Sakura Oogami", 0, 0, 0);
	s.showSprite(4, "Kiyotaka Ishimaru", 0, 0, 0);
	s.showSprite(5, "Hifumi Yamada", 0, 0, 0);
	s.showSprite(8, "Mondo Oowada", 0, 0, 0);
	s.playBGM(32, 100, 0);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x15, [0x01, 0x01, 0xFF]);
	s.op(0x26, [0x00, 0x0C, 0x01]);
	s.op(0x25, [0x10, 0x01]);
	s.op(0x34, [0x02, 0x25]);
	s.op(0x27, [0x00]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.showSprite(1, "Sayaka Maizono", 1, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 6);
	s.showLine("This... is really strange, huh...\n");    // "なんだか…おかしな事になってきましたね…？\n"
	s.waitFrames(1);
	s.waitForInput();
	s.showSprite(1, "Sayaka Maizono", 1, 4, 2);
	s.op(0x25, [0x01, 0x00]);


	// Line 427: "Junko Enoshima (fake)"
	s.op(0x27, [0x09]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.showSprite(0, "Junko Enoshima (fake)", 2, 1, 2);
	s.playVoice("Junko Enoshima (fake)", 99, 9);
	s.showLine("What was that broadcast...\nThat wasn't normal at all...\n");    // "なんなの、今の校内放送…\nどう考えても、ふつーじゃないって…\n"
	s.waitFrames(2);
	s.waitForInput();
	s.showSprite(0, "Junko Enoshima (fake)", 2, 4, 2);
	s.op(0x25, [0x01, 0x00]);


	// Line 428: "Kyouko Kirigiri"
	s.op(0x27, [0x02]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.showSprite(1, "Kyouko Kirigiri", 1, 1, 2);
	s.playVoice("Kyouko Kirigiri", 99, 41);
	s.showLine("I understand your anxiety...\nbut we have to see it for ourselves, right?\n");    // "不安なのはわかるけど…\n確かめない訳にはいかないんじゃない？\n"
	s.waitFrames(2);
	s.waitForInput();
	s.showSprite(1, "Kyouko Kirigiri", 0, 4, 2);
	s.op(0x25, [0x01, 0x00]);


	// Line 429: "Sakura Oogami"
	s.op(0x27, [0x03]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.showSprite(0, "Sakura Oogami", 2, 1, 2);
	s.playVoice("Sakura Oogami", 99, 3);
	s.showLine(line_oogami_2);    // "先に進まぬ限りは何もわからぬ…\n行くしかあるまい。\n"
	s.waitFrames(2);
	s.waitForInput();
	s.showSprite(0, "Sakura Oogami", 2, 4, 2);
	s.op(0x25, [0x01, 0x00]);


	// Line 430: "Kiyotaka Ishimaru"
	s.op(0x27, [0x04]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.showSprite(1, "Kiyotaka Ishimaru", 10, 1, 2);
	s.playVoice("Kiyotaka Ishimaru", 99, 5);
	s.showLine("Wh-What in the world was that...\nIs it a bad joke...?\n");    // "な、なんなのだ一体…\n誰かの悪ふざけか…？\n"
	s.waitFrames(2);
	s.waitForInput();
	s.showSprite(1, "Kiyotaka Ishimaru", 10, 4, 2);
	s.op(0x25, [0x01, 0x00]);


	// Line 431: "Hifumi Yamada"
	s.op(0x27, [0x05]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.showSprite(0, "Hifumi Yamada", 5, 1, 2);
	s.playVoice("Hifumi Yamada", 99, 18);
	s.showLine("Is it okay...?\nTell me it's okay...\n");    // "大丈夫なのですか…？\n大丈夫なのですよね…？\n"
	s.waitFrames(2);
	s.waitForInput();
	s.showSprite(0, "Hifumi Yamada", 5, 4, 2);
	s.op(0x25, [0x01, 0x00]);


	// Line 432: "Mondo Oowada"
	s.op(0x27, [0x08]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.showSprite(1, "Mondo Oowada", 7, 1, 2);
	s.playVoice("Mondo Oowada", 99, 14);
	s.showLine("Damn...!\nWhat the hell are they pulling on us...!\n");    // "クソがぁ…！\nどういうつもりだ…！\n"
	s.waitFrames(2);
	s.waitForInput();
	s.showSprite(1, "Mondo Oowada", 7, 4, 2);
	s.op(0x25, [0x01, 0x00]);


	// Line 433: "Aoi Asahina"
	s.op(0x27, [0x07]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.showSprite(0, "Aoi Asahina", 21, 1, 2);
	s.playVoice("Aoi Asahina", 99, 41);
	s.showLine("I don't understand what's going on,\nbut I guess I gotta go!\n");    // "なんか、よくわかんないけど、\n行ってみるしかないよね！\n"
	s.waitFrames(2);
	s.waitForInput();
	s.showSprite(0, "Aoi Asahina", 4, 4, 2);
	s.op(0x25, [0x01, 0x00]);
}
	
function cleanup(s)
{
	// Line 447: "[No Name]"
	s.op(0x29, [0xFE]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.op(0x25, [0x12, 0x00]);
	s.op(0x25, [0x12, 0x03]);
	s.op(0x34, [0x02, 0x26]);
	s.op(0x2B, [0x01]);
	s.showLine("Yes\n");    // "はい\n"
	s.waitFrames(1);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x34, [0x00, 0x05]);
	s.op(0x2B, [0x02]);
	s.showLine("No\n");    // "いいえ\n"
	s.waitFrames(1);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x2B, [0x12]);
	s.op(0x34, [0x00, 0x05]);
	s.op(0x2B, [0x13]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine(common_line_exit);    // "<CLT 23>外に出ますか？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x2B, [0xFF]);
	s.op(0x2A, [0x02, 0x26]);
	s.op(0x29, [0xFF]);
	s.op(0x2A, [0x02, 0x25]);
	s.op(0x2A, [0x00, 0x05]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.playSoundEffectA(141, 100);
	s.op(0x33, [0x08, 0x00, 0x00, 0x0B]);
	s.goToScript(0, 4, 1);
	s.op(0x1A);
	s.op(0x1A);
}
