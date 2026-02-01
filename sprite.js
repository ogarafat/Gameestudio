var 
s_bird,
s_bg,
s_fg,
s_pipeNorth,
s_pipeSouth,
s_text,
s_score,
s_splash,
s_buttons,
s_numberS,
s_numberB;

// Sprite constructor
function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

// Draw function
Sprite.prototype.draw = function(ctx, dx, dy, dw, dh) {
    dw = dw || this.width;
    dh = dh || this.height;

    ctx.drawImage(
        this.img,
        this.x, this.y, this.width, this.height,
        dx, dy, dw, dh
    );
};

// Initialize all sprites
function initSprites(img) {

    // ===============================
    // 1️⃣ Bird Animation (3 frames)
    // ===============================
    s_bird = [
        new Sprite(img, 0, 0, 50, 40),
        new Sprite(img, 50, 0, 50, 40),
        new Sprite(img, 100, 0, 50, 40)
    ];

    // ===============================
    // 2️⃣ Background and Foreground
    // ===============================
    s_bg = new Sprite(img, 0, 50, 500, 300);
    s_bg.color = "#70C5CF";

    s_fg = new Sprite(img, 0, 350, 500, 100);

    // ===============================
    // 3️⃣ Pipes (Top/Bottom)
    // ===============================
    s_pipeNorth = new Sprite(img, 500, 0, 80, 400);
    s_pipeSouth = new Sprite(img, 600, 0, 80, 400);

    // ===============================
    // 4️⃣ Texts
    // ===============================
    s_text = {
        FlappyBird: new Sprite(img, 0, 450, 300, 80),
        GameOver:   new Sprite(img, 0, 530, 250, 70),
        GetReady:   new Sprite(img, 0, 600, 250, 70)
    };

    // ===============================
    // 5️⃣ Buttons
    // ===============================
    s_buttons = {
        Rate:  new Sprite(img, 300, 450, 120, 50),
        Menu:  new Sprite(img, 300, 510, 120, 50),
        Share: new Sprite(img, 300, 570, 120, 50),
        Score: new Sprite(img, 300, 630, 120, 50),
        Ok:    new Sprite(img, 300, 690, 120, 50),
        Start: new Sprite(img, 300, 750, 120, 50)
    };

    // ===============================
    // 6️⃣ Score Board and Splash
    // ===============================
    s_score  = new Sprite(img, 450, 450, 300, 200);
    s_splash = new Sprite(img, 450, 650, 200, 150);

    // ===============================
    // 7️⃣ Numbers (small & big)
    // ===============================
    s_numberS = new Sprite(img, 0, 770, 20, 30);
    s_numberB = new Sprite(img, 0, 800, 30, 40);

    // Draw numbers function
    s_numberS.draw = s_numberB.draw = function(ctx, x, y, num, center, padding) {
        num = num.toString();
        var step = this.width + 2;
        if(center){
            x = center - (num.length * step - 2)/2;
        }
        if(padding){
            x += step * (padding - num.length);
        }
        for(var i = 0; i < num.length; i++) {
            var n = parseInt(num[i]);
            ctx.drawImage(img, step * n, this.y, this.width, this.height, x, y, this.width, this.height);
            x += step;
        }
    }
								 }
