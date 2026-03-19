// ข้อมูลโปรเจกต์ทั้งหมด (Database)
const myProjects = [
    {
        title: "Number Formatter",
        type: "Plugin",
        category: "plugin",
        description: "A Unity tool for number formatting (1k, 1M...) or number with comma (1,000, 1,000,000...)",
        status: "In Development",
        uploadDate: "2026-01-15", // รูปแบบ YYYY-MM-DD เพื่อการเรียงลำดับที่แม่นยำ
        image: "project1.jpg",
        linkDetails: "Page3.html",
        linkAction: "",
        actionText: "- - -",
        isPreRelease: true
    },
    {
        title: "Math Game",
        type: "Game",
        category: "game",
        description: "A Thailand game-based learning for middle school students to learn mathematics with fun and engaging gameplay.",
        status: "V2 released",
        uploadDate: "2026-03-20",
        image: "project2.jpg",
        linkDetails: "Page3.html",
        linkAction: "https://ourgamedev.itch.io/mathgame",
        actionText: "View",
        isPreRelease: false
    },
    {
        title: "HaveFunWithPastSimpleTense",
        type: "Game",
        category: "game",
        description: "online game-based lesson HaveFunWithPastSimpleTense with Construct 2 so we can learn the lesson anytime and anywhere.",
        status: "V1 released",
        uploadDate: "2026-03-20", // รูปแบบ YYYY-MM-DD เพื่อการเรียงลำดับที่แม่นยำ
        image: "project1.jpg",
        linkDetails: "Page3.html",
        linkAction: "https://ourgamedev.itch.io/havefunwithpastsimpletense",
        actionText: "View",
        isPreRelease: false
    }
    // สามารถเพิ่ม { ... } ต่อท้ายได้ไม่จำกัด
];