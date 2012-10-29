/**
 * Day zero: Makoto introduces himself and Mount Hope Academy
 * @method e00_001_000_lin
 **/
function e00_001_000_lin()
{
	var s = new LINScript();
	// Line 1: "???"
	s.op(0x22, [0x01, 0x00, 0x01]);
	s.op(0x25, [0x0B, 0x01]);
	s.op(0x25, [0x07, 0x00]);
	s.op(0x25, [0x10, 0x00]);
	s.op(0x33, [0x02, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x03, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x0F, 0x00, 0x00, 0x11]);
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x15, [0x0E, 0x01, 0xFF]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x30, [0x00, 0x00, 0x01]);
	s.playBGM(10, 100, 180);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x33, 0x01]);
	s.setSpeaker("???");
	s.op(0x25, [0x01, 0x01]);
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>That giant academy stands in the dead center of\nthe city, as if it's the center of the world...\n<CLT>");    // "<CLT 4>その巨大な学園は、\n都会のど真ん中の一等地にそびえ立っていた。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 2: "???"
	/*
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>まるで…そこが世界の中心でもあるかのように…\n<CLT>");    // "<CLT 4>まるで…そこが世界の中心でもあるかのように…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	// */


	// Line 3: "???"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x30, [0x00, 0x00, 0x03]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xDC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xDC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("???");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>\"Mount Hope Academy\"...\n<CLT>");    // "<CLT 4>『私立　希望ヶ峰学園』…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 4: "???"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>It's a government-recognized private high school...\n<CLT>");    // "<CLT 4>あらゆる分野の超一流高校生を集め、\n育て上げる事を目的とした、政府公認の超特権的な学園…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>that aims to gather the best of the best students\nand nuture their talents.\n<CLT>");    // "<CLT 4>あらゆる分野の超一流高校生を集め、\n育て上げる事を目的とした、政府公認の超特権的な学園…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 5: "???"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>It's said that graduating from this high school\nmeans that you're set for life.\n<CLT>");    // "<CLT 4>この学園を卒業すれば、\n人生において成功したも同然…とまで言われている。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 6: "???"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>This academy has sent promising graduates\nto various fields for hundreds of years...\n<CLT>");    // "<CLT 4>何百年という歴史を持ち、\n各界に有望な人材を送り続けている伝統の学園らしい…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 7: "???"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Some call it <CLT><CLT 3>\"Academy of Hope\"<CLT><CLT 4> because it's where\nthe <CLT><CLT 3>\"hopes\"<CLT><CLT 4> that will carry the nation are taught.\n<CLT>");    // "<CLT 4>国の将来を担う<CLT><CLT 3>“希望”<CLT><CLT 4>を育て上げる事を目的とした、\nまさに、<CLT><CLT 3>“希望の学園”<CLT><CLT 4>と呼ぶに、ふさわしい場所だ。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 8: "???"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xDC, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xDD, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("???");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>There are two qualifications for getting in...\n<CLT>");    // "<CLT 4>そんな学園への入学資格は２つ…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 9: "???"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>1. \"Being a current high school student.\"\n2. \"Being the best of the best at something.\"\n<CLT>");    // "<CLT 4>“現役の高校生であること”\n“各分野において超一流であること”\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 10: "???"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Instead of taking applications,\nthe academy scouts for students.\n<CLT>");    // "<CLT 4>新入生の募集などは行っておらず、\n学園側にスカウトされた生徒のみが入学を許可される。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 11: "???"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Right now, the gates of this super amazing\nacademy...<CLT>");    // "<CLT 4>そんな、超が何個も付くほど、\n超すごい学園の校門の前に…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 12: "???"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x06, [0x02, 0xDD, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x96]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("???");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>is right in front of me...\n<CLT>");    // "<CLT 4>ボクは立っていた…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 13: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xDD, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x30, [0x00, 0x00, 0x01]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.playVoice("Makoto Naegi", 99, 1);
	s.showLine("I would like to start off normally by introducing\nmyself... My name is <CLT 3>Makoto Naegi<CLT>.\n");    // "まずはオーソドックスに自己紹介から始めたいと思う…\nボクの名前は<CLT 3>“苗木誠”<CLT>だ。\n"
	s.waitFrames(1);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 14: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.showSprite(0, "Makoto Naegi", 1, 2, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>As you can see, I look like a hopelessly normal\nhigh school student...<CLT>");    // "<CLT 4>外見は、ご覧の通り、\nどうしようもないほど平均的な普通の高校生…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 15: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I'm also normal down inside...\n<CLT>");    // "<CLT 4>中身の方も同じ…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 16: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>My personality, abilities and grades are all average.\n<CLT>");    // "<CLT 4>性格にも特技にも成績にも、\nこれといった特徴はない。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 17: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I don't have any unusual hobbies,\nand I don't have any mutant powers or Stands...\n<CLT>");    // "<CLT 4>特別な趣味や趣向がある訳でもなければ、\nミュータントでもないしスタンドを出せる訳でもない…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 18: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>If you're asking for my favorite idols, favorite\nmanga, favorite music, or favorite movies...\n<CLT>");    // "<CLT 4>ボクの好きなアイドルや、好きなマンガ、好きな音楽、\n好きな映画を知りたければ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 19: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Just take a look the rankings.\nMy favorites are usually #1.\n<CLT>");    // "<CLT 4>ランキング番組でも見れば１発だ。\nその１位になるヤツが、大抵そうだから。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 20: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I'm so normal that the word \"mainstream\"\ndoesn't even begin to describe me...\n<CLT>");    // "<CLT 4>“王道”という言葉すら裸足で逃げ出す、\nまさに、普通の中の普通…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 21: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>...That's me. This normal introduction\nis a good example of that, don't you think?\n<CLT>");    // "<CLT 4>…それがボクだ。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	/*
	// Line 22: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>最初に、自己紹介というオーソドックスなところから\n始めたのも、そのいい例だと思う…\n<CLT>");    // "<CLT 4>最初に、自己紹介というオーソドックスなところから\n始めたのも、そのいい例だと思う…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	// */

	// Line 23: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Well, if I had to choose one thing\nthat I'm good at...\n<CLT>");    // "<CLT 4>まぁ、強いて言うなら、\n唯一の取り柄は…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 24: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I would say...\nthat I'm a bit more optimistic than most people.\n<CLT>");    // "<CLT 4>人よりちょっと前向きな事くらい……かな。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 25: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x30, [0x00, 0x00, 0x03]);
	s.showSprite(0, "Makoto Naegi", 0, 3, 2);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xDD, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xDD, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Now, why is such a normal person like me...\n<CLT>");    // "<CLT 4>そんな普通のボクは、今…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 26: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>standing in front of such an abnormal school\nlike Mount Hope Academy?\n<CLT>");    // "<CLT 4>希望ヶ峰学園という\n普通じゃない学園の前に立っている訳だけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 27: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("I'm at... a really amazing place, huh...\nCan someone like me... do well here?\n");    // "本当に…すごい所に来ちゃったよな…\nボクみたいなのが…こんな学校でやってけるのか？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 28: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>As you might expect, I was overwhelmed\nby the presence of this school.\n<CLT>");    // "<CLT 4>案の定、ボクは、\nこの学園の圧倒的な存在感に呑まれてしまっていた。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 29: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>But you can't blame me.\nLet me explain...\n<CLT>");    // "<CLT 4>だけど、ボクがこうなるのも無理はないんだ。\nという事をわかってもらう為にも…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 30: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I should start by talking about\nthe <CLT><CLT 3>\"preparations\"<CLT><CLT 4>I did last night.\n<CLT>");    // "<CLT 4>まずは、昨日の晩の<CLT><CLT 3>“事前準備”<CLT><CLT 4>の事を\n説明した方がいいだろう。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 31: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xDD, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xDE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x06, [0x02, 0xDE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Since the students chosen by Mount Hope Academy\nare the best of the best in their areas...\n<CLT>");    // "<CLT 4>希望ヶ峰学園に選ばれる生徒達は、\n本当に、各分野の超一流高校生ばかりで…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 32: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>people speculate about the them\non Internet discussion boards.\n<CLT>");    // "<CLT 4>その選抜メンバーに関しては、\nネットの掲示板で、専用のスレが立つほどの話題となる。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 33: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I took a look at those threads to prepare myself...\n<CLT>");    // "<CLT 4>ボクは事前準備を兼ねて、\nそれを覗いてみたのだが…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 34: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>The <CLT><CLT 3>\"super high school students\"<CLT><CLT 4> mentioned in the\nthreads could not be any farther from the ordinary.\n<CLT>");    // "<CLT 4>そこには、いずれも平均値から大きくとび抜けた\n<CLT><CLT 3>“超高校級”<CLT><CLT 4>の面々ばかりが揃っていた。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 35: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xDE, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xDF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>For example, the <CLT><CLT 3>\"super idol\"<CLT><CLT 4> that was accepted\ninto Mount Hope Academy...\n<CLT>");    // "<CLT 4>例えば<CLT><CLT 3>“超高校級のアイドル”<CLT><CLT 4>として、\n希望ヶ峰学園に入学するのは…\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 36: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>is a high school idol who is the lead singer\nof an idol group known all over the country...\n<CLT>");    // "<CLT 4>国民的アイドルグループのセンターマイクとして\n活躍する、話題の女子高校生アイドルだったり…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 37: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xDF, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.showLine("<CLT 4>The <CLT><CLT 3>\"super baseball player\"<CLT><CLT 4> that was accepted\ninto the academy...\n<CLT>");    // "<CLT 4><CLT><CLT 3>“超高校級の野球選手”<CLT><CLT 4>として入学するのは…\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 38: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>is the ace and clean-up hitter of a team that won\nthe nationals. Even pros are afraid of him...\n<CLT>");    // "<CLT 4>高校野球大会の優勝チームのエースで４番バッター。\nプロも注目の逸材だったりする…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 39: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x06, [0x02, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xE1, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.showLine("<CLT 4>The <CLT><CLT 3>\"super fashion girl\"<CLT><CLT 4> that was accepted\ninto the academy...\n<CLT>");    // "<CLT 4><CLT><CLT 3>“超高校級のギャル”<CLT><CLT 4>として入学するのは…\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 40: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x06, [0x02, 0xE1, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>is a popular model that adorns the covers of\nfashion magazines...\n<CLT>");    // "<CLT 4>ギャル系ファッション雑誌で表紙を飾る人気モデルで、\n女子高校生達のカリスマ的存在だし…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>and a charismatic figure for all high school girls...\n<CLT>");    // "<CLT 4>ギャル系ファッション雑誌で表紙を飾る人気モデルで、\n女子高校生達のカリスマ的存在だし…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 41: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xE1, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xE2, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>A <CLT><CLT 3>\"super delinquent\"<CLT><CLT 4> also got in...\n<CLT>");    // "<CLT 4>おまけに<CLT><CLT 3>“超高校級の暴走族”<CLT><CLT 4>なんて肩書きで\n入学するヤツもいて…\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 42: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>He's the leader of the largest biker gang in Japan.\nEvery delinquent in Japan respects and fears him.\n<CLT>");    // "<CLT 4>恐ろしい事に、日本最大の暴走族の総長で、\n全国のヤンキー連中から尊敬と畏怖を集める男らしい。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 43: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xE2, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xDE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>There's also a \"super martial artist,\" \"super heir,\"\n\"super swimmer,\" \"super doujin author\"...\n<CLT>");    // "<CLT 4>その他にも、超高校級の格闘家や、超高校級の御曹司、\n超高校級のスイマーに、超高校級の同人作家…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 44: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>\"super programmer,\" \"super gambler,\"\n\"super hall monitor,\" \"super fortune teller,\" etc....\n<CLT>");    // "<CLT 4>超高校級のプログラマー、超高校級のギャンブラー、\n超高校級の風紀委員、超高校級の占い師、などなど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 45: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>They were all students who made me feel painfully\nworthless...\n<CLT>");    // "<CLT 4>そこには、自分の無力さを痛感させられる\nそうそうたるメンバーばかりが揃っていた…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 46: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I'm like a house cat being tossed\ninto a pride of lions...\n<CLT>");    // "<CLT 4>例えるなら、\nライオンの群れに紛れ込んでしまった三毛猫の気分…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 47: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>...Still, something bothered me.\n<CLT>");    // "<CLT 4>…だけど、ちょっと引っかかる事もあった。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 48: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I couldn't find any info on a few freshmen,\nno matter how much I searched...\n<CLT>");    // "<CLT 4>いくら検索しても、情報がヒットしない新入生が\n何人かいるみたいなのだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 49: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Well...\nOne of them is me, because I'm so normal...\n<CLT>");    // "<CLT 4>何人か……その内の１人は、\n大した才能もないボクだからいいとして…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 50: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>But who are the other mysterious freshmen?\n<CLT>");    // "<CLT 4>じゃあ、他に検索がヒットしない新入生って？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 51: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("Are they also normal students like me...?\n");    // "ボクと同じように、\nこれといった実績のない人が他にもいるって事か…？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 52: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>...Thinking about that gave me a bit of courage.\nHow terrible of me.\n<CLT>");    // "<CLT 4>…と、思うと少しだけ勇気がわいてくる。\n我ながら情けない性格だ。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 53: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Well, leaving that aside for now,\nthe million-dollar question is...\n<CLT>");    // "<CLT 4>まぁ、それはともかくとして、\n問題なのは…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 54: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>\"Why is a normal student like you among this\n'super freshman class'?\"\n<CLT>");    // "<CLT 4>そんな“超高校級”が揃うメンバーの中に、\nどうして普通の高校生のボクが選ばれたのかって事だ。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 55: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>You just need to look at the acceptance letter from\nMount Hope Academy to know why.\n<CLT>");    // "<CLT 4>その理由は…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();

	
	/*
	// Line 56: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>希望ヶ峰学園から届けられた、\nこの入学通知を見れば一目瞭然だ。\n<CLT>");    // "<CLT 4>希望ヶ峰学園から届けられた、\nこの入学通知を見れば一目瞭然だ。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	// */


	// Line 57: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xDE, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xE3, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>\"This year, we decided to hold a lottery to select\na student from a list of all average students.\n<CLT>");    // "<CLT 4>『今回、我が校では平均的な学生の中から、\n　抽選によって１名を抽出いたしました。』\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 58: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>\"You, the winner, have been accepted in our school\nfor being <CLT><CLT 3>'super lucky.'<CLT><CLT 4>\"\n<CLT>");    // "<CLT 4>『その結果、当選したあなたを<CLT><CLT 3>“超高校級の幸運”<CLT><CLT 4>\n　として、我が校に招き入れる事になりました。』\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 59: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>In short, I was accepted out of <CLT><CLT 3>sheer luck.<CLT><CLT 4>\nThey even spelled it out for me...\n<CLT>");    // "<CLT 4>つまり、ボクが選ばれたのは、ただの<CLT><CLT 3>“運”<CLT><CLT 4>って訳だ。\nここに明記してあるしね…\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 60: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I was thinking about them down...\n<CLT>");    // "<CLT 4>本当なら、辞退した方が良かったのかもしれないけど…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 61: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>but I couldn't do it after I heard that I would be\n<CLT><CLT 3>set for life if I graduated from there<CLT><CLT 4>...\n<CLT>");    // "<CLT 4>でも、<CLT><CLT 3>“卒業すれば成功を手にしたも同然”<CLT><CLT 4>なんて話を\n聞いた後では、辞退なんて出来る訳もなかった…\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 62: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xE3, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xDD, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xDD, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>But now that I'm standing in front of the school...\n<CLT>");    // "<CLT 4>とは言え、\nこうして実際の学校を目の前にすると…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 63: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I'm afraid that I won't fit in...\n<CLT>");    // "<CLT 4>やっぱり場違いだった、なんて怖気づいたりもして…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 64: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("...but I can't keep on standing in front of\nthe school gates...\n");    // "…でも、いつまでも校門の前で\n立ち往生してる訳にもいかないよな…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 65: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>As I murmured to myself, something on\nthe acceptance letter caught my eyes.\n<CLT>");    // "<CLT 4>ぶつぶつと独り言を呟きながら、\nボクは手にした入学通知に視線を落とす。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 66: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 3>\"New students are to gather\nin the entrance hall by 8:00 A.M.\"\n<CLT>");    // "<CLT 4>そこには<CLT><CLT 3>“新入生は８時に玄関ホールに集合”<CLT><CLT 4>の文字。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 67: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>It's not time yet, but...\n<CLT>");    // "<CLT 4>集合時間まで、まだ時間があるけど…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 68: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("It's about time... for me to go...\n");    // "そろそろ…行こうか…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 69: "Makoto Naegi"
	s.showLine("Yeah... Let's go!\n");    // "うん…行くぞ…！！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 70: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>After gathering up more courage than\nI should need for the first day of school...\n<CLT>");    // "<CLT 4>たかが初登校とは思えないほどの\n大袈裟な決意を固めると…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 71: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I started walking towards the entrance.\n<CLT>");    // "<CLT 4>ボクは、玄関ホールへと足を向けた。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 72: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x28]);
	s.playSoundEffectA(141, 100);
	s.op(0x22, [0x01, 0x01, 0x80]);
	s.op(0x06, [0x02, 0xDD, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xE4, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x40]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x5A]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("This should be the place...\nBut no one else is here yet...\n");    // "集合場所の玄関ホールって…ここだよな。\nまだ誰もいないみたいだけど…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 73: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I looked up at the clock in the entrance hall:\n7:10 A.M.\n<CLT>");    // "<CLT 4>玄関ホールの立派な置時計を見上げる。\n時刻は７時１０分を指していた。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 74: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Fifty more minutes until the time on the letter...\n<CLT>");    // "<CLT 4>集合時間は８時だから…まだ５０分も前だ。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 75: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Of course no one would be here...\n<CLT>");    // "<CLT 4>誰もいなくて当たり前か…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 76: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("I got nervous... and came too early...\n");    // "緊張して…早く来すぎちゃったな…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 77: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I still have some time, so I guess I gotta wait\nhere...\n<CLT>");    // "<CLT 4>集合時間まで結構あるし、\nここでずっと待ってるってのもなぁ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 78: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Oh yea, maybe I should look around the school.\nThat'll help me relax too.\n<CLT>");    // "<CLT 4>そうだ、先に学園の中でも回ってみようかな。\n緊張をほぐす意味でも。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 79: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("There shouldn't be any problems because\nI'm a student now... right?\n");    // "ボクだって、もうこの学園の生徒なんだから、\n問題ないはず…だよな？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 80: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I'm just killing some time...\n<CLT>");    // "<CLT 4>ちょっとした時間潰し…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 81: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I casually took my first step into\nMount Hope Academy...\n<CLT>");    // "<CLT 4>その程度の軽い気持ちで、\nボクは希望ヶ峰学園に、最初の１歩を踏み出した。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 82: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>A step that's full of hope for the new school year...\n<CLT>");    // "<CLT 4>新しい学園生活の始まりとなる\n希望に満ちた１歩…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 83: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>...Well, that's what I wanted it to be.\n<CLT>");    // "<CLT 4>…となるはずだった。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 84: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.playBGM(255, 120, 0);
	s.op(0x33, [0x06, 0x00, 0x00, 0x5A]);
	s.playSoundEffectA(200, 100);
	s.op(0x06, [0x02, 0xE4, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("...Huh!?\n");    // "…えっ！？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 85: "Makoto Naegi"
	s.playSoundEffectA(200, 100);
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>However, right when I took that first step...\n<CLT>");    // "<CLT 4>だけど、その１歩目を踏み出したのと同時に…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 86: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>My vision began to blur.\n<CLT>");    // "<CLT 4>ボクの視界は、ぐるぐると歪み始めた。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 87: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>The world began to melt and mix\nin front of my eyes......\n<CLT>");    // "<CLT 4>やがて、世界は飴細工のようにドロドロと溶け、\n混ざり合う……\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 88: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Round and round,\nmelting and mixing...\n<CLT>");    // "<CLT 4>ぐるぐるぐるぐるぐると、\nドロドロドロドロドロドロになり…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 89: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>And then...\n<CLT>");    // "<CLT 4>その次の瞬間には…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 90: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x08]);
	s.op(0x06, [0x02, 0xE4, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x30, [0x00, 0x00, 0x01]);
	s.op(0x22, [0x00, 0x01, 0x08]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Pure darkness.\n<CLT>");    // "<CLT 4>ただの暗闇。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 91: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>That was the beginning of everything...\n<CLT>");    // "<CLT 4>それが始まり…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 92: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>and the end of my normal days...\n<CLT>");    // "<CLT 4>そして、日常の終わり…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 93: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Back then...\nI should have noticed...\n<CLT>");    // "<CLT 4>この時点で…\nボクは気付いても良かったのかもしれない…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 94: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>that I wasn't <CLT><CLT 3>\"super lucky\"<CLT><CLT 4> to have gotten\ninto Mount Hope Academy...\n<CLT>");    // "<CLT 4>ボクが希望ヶ峰学園にやって来たのは、\n<CLT><CLT 3>“超高校級の幸運”<CLT><CLT 4>なんかじゃなくって…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 95: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.showLine("<CLT 4>I was <CLT><CLT 3>\"super unlucky\"<CLT><CLT 4>...\n<CLT>");    // "<CLT 4><CLT><CLT 3>“超高校級の不運”<CLT><CLT 4>だったって事に…\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 95: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x30, [0x00, 0x00, 0x03]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x03, 0x71, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x40]);
	s.playSoundEffectB(0, 100);
	s.op(0x06, [0x03, 0x71, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0xF0]);
	s.op(0x22, [0x01, 0x01, 0x40]);
	s.op(0x06, [0x03, 0x71, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.playBGM(255, 0, 0);
	s.op(0x33, [0x0F, 0x00, 0x00, 0x17]);
	s.op(0x25, [0x0B, 0x01]);
	s.op(0x25, [0x0C, 0x01]);
	s.goToScript(0, 2, 0);
	s.op(0x1A);
	s.op(0x1A);
	return(s);
}
