// Basic Information
valentineName: "лена"                    // Your Valentine's name
pageTitle: "будешь моей валентинкой?? 💝" // Browser tab title

// Floating Background Elements
floatingEmojis: {
    hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis in background
    bears: ['🧸', '🐻']                       // Bear emojis in background
}

// Questions and Buttons
questions: {
    first: {
        text: "я тебе нравлюсь^^?",                   // First question
        yesBtn: "да >_<",                             // Yes button text
        noBtn: "нет(",                               // No button text
        secretAnswer: "ты мне не нравишься, я люблю тебя! ❤️"  // Hidden message
    },
    second: {
        text: "как сильно ты меня любишь?",          // Second question
        startText: "столько-то!",                   // Text before percentage
        nextBtn: "некст ❤️"                         // Next button text
    },
    third: {
        text: "будешь ли ты моим валентином...?",      // Final question
        yesBtn: "да!",                            // Yes button text
        noBtn: "нет"                                // No button text
    }
}

// Love Meter Messages
loveMessages: {
    extreme: "ооооо, ты так сильно меня любишь?? 🥰🚀💝",  // Shows above 5000%
    high: "бесконечно и дальше!! 🚀💝",              // Shows above 1000%
    normal: "и дальше! 🥰"                           // Shows above 100%
}

// Final Celebration
celebration: {
    title: "ура! я самый счастливый человек...",     // Celebration title
    message: "теперь иди и забери свой подарок...",          // Celebration message
    emojis: "🎁💖🤗💝💋❤️💕"                        // Celebration emojis
}

// Website Colors
colors: {
    backgroundStart: "#ffafbd",      // Background gradient start
    backgroundEnd: "#ffc3a0",        // Background gradient end
    buttonBackground: "#ff6b6b",     // Button color
    buttonHover: "#ff8787",          // Button hover color
    textColor: "#ff4757"            // Text color
}

// Animation Settings
animations: {
    floatDuration: "15s",           // How long hearts float (10-20s)
    floatDistance: "50px",          // Sideways movement (30-70px)
    bounceSpeed: "0.5s",            // Bounce animation speed (0.3-0.7s)
    heartExplosionSize: 1.5         // Final heart explosion size (1.2-2.0)
}

// Music Settings
music: {
    enabled: true, // Music feature is enabled
    autoplay: true, // Try to autoplay (note: some browsers may block this)
    musicUrl: "YOUR_CLOUDINARY_URL_HERE", // Paste your music URL here
    startText: "🎵 Play Music", // Button text to start music
    stopText: "🔇 Stop Music", // Button text to stop music
    volume: 0.5 // Volume level (0.0 to 1.0)
}
