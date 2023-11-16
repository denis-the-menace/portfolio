const content = {
  EN: {
    neofetchPanel: [
      ["About", "Me"],
      ["Education", "AYBU Computer Engineering"],
      ["Skills", "JS, React, Java, C#, C..."],
      ["Interests", "Operating Systems, Cinema, Weightlifting"],
      ["Links"],
    ],
    about: [
      "Hello, I am ",
      "a computer engineering student focusing on web development.",
      "I am experienced in developing server-side apps and making responsive websites. I am in touch with newer technology, I love doing research and trying out new software. I can create efficent solutions for you and your company.",
    ],
    education: [
      "Education",
      "I am currently a student at AYBU, pursuing a degree in Computer Engineering. I am in my third year of studies. My courses have covered a wide range of topics including programming languages, algorithms, computer architecture, artificial intelligence, and networking. Through my education, I have gained a strong foundation in theoretical concepts as well as practical skills in coding and problem-solving.",
    ],
    skills: [
      {
        name: "JS",
        description:
          "I have become proficient in using various frameworks and libraries such as Express.js for creating REST and authentication APIs, and ORMs like Prisma for database management. Additionally, I have experience using various databases, including MongoDB, MySQL, and SQL Server, and am familiar with Redux for state management.",
      },
      {
        name: "React",
        description:
          "I have used React extensively in my web development projects. I have developed a deep understanding of state management, lifecycle methods, and component-based architecture. In fact, my portfolio website is built using the latest versions of React and Next.js, specifically React 18 and Next.js 13 beta.",
      },
      {
        name: "SQL",
        description:
          "I have used various database management systems such as MySQL and SQL Server. I am experienced in creating complex SQL queries, designing and managing databases, I have also worked on database projects that involved data migration, data cleansing, and data manipulation. Additionally, I have experience using ORM tools such as Entity Framework, Hibernate and Prisma.",
      },
      {
        name: "Java",
        description:
          "I have a strong foundation in Java and have used it for a variety of projects. I have worked with many projects ranging from working with databases and creating APIs to AI. My experience in Java has given me a well-rounded skill set that allows me to tackle a range of projects in the software development field.",
      },
      {
        name: "C",
        description:
          "I have a love and hate relationship with the C programming language, and have utilized it in a variety of projects. I have experience creating multithreaded programs using pthreads, and have studied parallelization techniques using MPI, which has allowed me to dive deeper into world of operating systems.",
      },
      {
        name: "C#",
        description:
          "During my internship at TCHEALTH, I have gained experience in creating REST and authentication APIs using ASP.NET framework, which has allowed me to build scalable and secure applications. In addition, I have worked with Entity Framework, a popular ORM framework for .NET, to simplify database access and increase productivity.",
      },
      {
        name: "Lua",
        description:
          "As a long-time user of Neovim, I have gained proficiency in the Lua programming language since it is the embedded scripting language that powers many of Neovim's customization features. Through my experience with Lua, I have developed a deeper understanding of its syntax, data structures, and control flow.",
      },
    ],
    interests: [
      [
        "I am a Tux fan.",
        "Operating Systems",
        "In particular, I am drawn to Linux-based operating systems and the freedom they provide. I thoroughly enjoy trying out new distros and seeing how they differ from one another.",
      ],
      [
        "I am a cinephile.",
        "Cinema",
        "I have always been fascinated by the direction and the cinematography of Soviet and Asian films. I am drawn to the unique styles, storytelling techniques, and cultural contexts that distinguish these regions' films.",
      ],
      [
        "I am a gymrat.",
        "Weightlifting",
        "I find classic aesthetics and the focus on functional strength to be inspiring. For me, the process of setting and achieving goals through consistent training and progression is rewarding both physically and mentally.",
      ],
    ],
  },
  TR: {
    neofetchPanel: [
      ["Hakkımda"],
      ["Öğrenim", "AYBÜ Bilgisayar Mühendisliği"],
      ["Beceriler", "JS, React, Java, C#, C..."],
      ["İlgi Alanları", "İşletim Sistemleri, Sinema, Ağırlık Kaldırmak"],
      ["Bağlantılar"],
    ],
    about: [
      "Merhaba, ben",
      "web geliştirmeye odaklanan bir bilgisayar mühendisliği öğrencisiyim.",
      "Sunucu bazlı uygulama gelistirmekte ve responsive web siteleri yaratmakta tecrubeliyim. Araştırma yapmaktan ve yeni yazılımları denemekten keyif alıyorum. Sizin ve şirketiniz için verimli çözümler sunabilirim.",
    ],
    education: [
      "Öğrenim",
      "AYBÜ'de, Bilgisayar Mühendisliği bölümü öğrencisiyim ve öğrenim hayatımın üçüncü yılındayım. Derslerim, programlama dilleri, algoritmalar, bilgisayar mimarisi, yapay zeka ve ağ gibi geniş bir yelpazedeki konuları kapsıyor. Eğitimim sayesinde, teorik kavramlarda güçlü bir temel kazanırken aynı zamanda kodlama ve problem çözme gibi pratik beceriler de edindim. ",
    ],
    skills: [
      {
        name: "JS",
        description:
          "REST ve kimlik doğrulama API'leri oluşturmak için Express.js gibi çeşitli çerçeveleri ve kitaplıkları kullanma ve veritabanı yönetimi için Prisma gibi ORM'ler kullanmak kullanmakta deneyimliyim. Ek olarak, MongoDB, MySQL ve SQL Server dahil olmak üzere çeşitli veritabanlarını kullanma deneyimim var ve durum yönetimi için Redux'a aşinayım.",
      },
      {
        name: "React",
        description:
          "Web projelerimde sıklıkla React ile birlikte SSR ve pre-fetching gibi özellikleri destekleyen Next.js'i kullanıyorum. Durum yönetimi, yaşam döngüsü yöntemleri ve bileşen tabanlı mimari hakkında derin bir anlayış geliştirdim. Bu portföy sitemi de React ve Next.js'in en yeni versiyonları olan React 18 ve Next.js 13 beta kullanarak oluşturdum.",
      },
      {
        name: "SQL",
        description:
          "MySQL ve SQL Server gibi çeşitli veritabanı yönetim sistemlerini kullandım. Karmaşık SQL sorguları oluşturma, veritabanları tasarlama ve yönetme konusunda deneyimliyim, ayrıca veri taşıma, veri temizleme ve veri işleme içeren veritabanı projelerinde çalıştım. Ek olarak Entity Framework, Hibernate ve Prisma gibi ORM'leri kullanma deneyimim var.",
      },
      {
        name: "Java",
        description:
          "Java'yı çeşitli projeler için kullandım ve bu dilde güçlü bir temele sahibim. Veritabanlarıyla çalışmaktan API oluşturmaya ve yapay zekaya kadar birçok projede çalıştım. Java'daki deneyimim bana, yazılım geliştirme alanında bir dizi projeyi ele almamı sağlayan çok yönlü bir beceri seti verdi.",
      },
      {
        name: "C",
        description:
          "C ile bir aşk-nefret ilişkim var ve bu programlama dilini çeşitli projelerde kullandım. Pthreads kullanarak çok iş parçacıklı programlar oluşturma ve MPI kullanarak paralelleştirme teknikleri geliştirme üzerinde çalıştım. Bunlar işletim sistemleri dünyasının derinliklerine dalmamı ve bilgisayar mimarisi üzerine daha sofistike bir bakış açısı kazanmamı sağladı. ",
      },
      {
        name: "C#",
        description:
          "TCHEALTH'deki stajım sırasında, ölçeklenebilir ve güvenli uygulamalar oluşturmamı sağlayan ASP.NET çerçevesini kullanarak REST ve kimlik doğrulama API'leri oluşturma konusunda deneyim kazandım. Ek olarak, veritabanı erişimini basitleştirmek ve üretkenliği artırmak için .NET'in popüler bir ORM çerçevesi olan Entity Framework ile çalıştım.",
      },
      {
        name: "Lua",
        description:
          "Neovim'i uzun süredir kullanmakta olduğumdan dolayı yeni Neovim versiyonlarının ve pluginlerinin konfigürasyonu için kullanılan Lua dilinde belirli bir yeterlilik kazandım. Lua ile olan deneyimim sayesinde söz dizimi, veri yapıları ve kontrol akışı hakkında daha derin bir anlayış geliştirdim.",
      },
    ],
    interests: [
      [
        "Tux fanıyım.",
        "İşletim Sistemleri",
        "Özellikle Linux tabanlı işletim sistemleri ve sağladıkları özgürlük beni cezbediyor. Yeni distroları denemekten ve birbirleri arasındaki farkları görmekten büyük keyif alıyorum.",
      ],
      [
        "Sinema gurusuyum.",
        "Sinema",
        "Sovyet ve Asya filmlerinin yönetmenliği ve sinematografisi beni her zaman büyülemiştir. Bu bölgelerin filmlerini birbirinden ayıran benzersiz tarzlar, hikaye anlatma teknikleri ve kültürel bağlamlar beni derinden etkiliyor.",
      ],
      [
        "Gymratim.",
        "Ağırlık Kaldırma",
        "Klasik estetiği ve fonksiyonel güce odaklanmayı ilham verici buluyorum. Benim için, tutarlı antrenmanla birlikte ilerleme yoluyla hedefler belirleme ve bunlara ulaşma süreci hem fiziksel hem de zihinsel olarak ödüllendirici.",
      ],
    ],
  },
};

let language = content.EN;
// if (localStorage.getItem("language") === "TR") language = content.TR;

export default language;
